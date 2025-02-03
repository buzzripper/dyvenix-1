import {
  FuseFindByKeyPipe
} from "./chunk-G4MGEPS3.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup,
  MatTabsModule
} from "./chunk-4XTS4DFY.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-5KZHZBIW.js";
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule
} from "./chunk-74A4XWO4.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-F65M35UC.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-B6LWBRMU.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-YALL3E64.js";
import {
  FuseMediaWatcherService
} from "./chunk-NDM3MP5U.js";
import "./chunk-YHH4B3V4.js";
import "./chunk-XRKJUGQI.js";
import {
  CdkScrollable
} from "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-GIY2YYWB.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-2W4O77WS.js";
import "./chunk-BNTOCQMY.js";
import "./chunk-J5XV3GIF.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIconAnchor,
  MatIconButton
} from "./chunk-JPDBWMRG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5AHQJJ5Y.js";
import {
  MatOption,
  MatOptionModule
} from "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import "./chunk-WH7F4HUX.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet
} from "./chunk-WTEW5YKI.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  DOCUMENT,
  I18nPluralPipe,
  NgClass,
  PercentPipe
} from "./chunk-M6AYR6A2.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  ElementRef,
  Subject,
  catchError,
  combineLatest,
  inject,
  map,
  of,
  switchMap,
  takeUntil,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/apps/academy/academy.component.ts
var AcademyComponent = class _AcademyComponent {
  /**
   * Constructor
   */
  constructor() {
  }
  static {
    this.\u0275fac = function AcademyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AcademyComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AcademyComponent, selectors: [["academy"]], decls: 1, vars: 0, template: function AcademyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AcademyComponent, { className: "AcademyComponent", filePath: "src/app/modules/admin/apps/academy/academy.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin/apps/academy/academy.service.ts
var AcademyService = class _AcademyService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._categories = new BehaviorSubject(null);
    this._course = new BehaviorSubject(null);
    this._courses = new BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for categories
   */
  get categories$() {
    return this._categories.asObservable();
  }
  /**
   * Getter for courses
   */
  get courses$() {
    return this._courses.asObservable();
  }
  /**
   * Getter for course
   */
  get course$() {
    return this._course.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get categories
   */
  getCategories() {
    return this._httpClient.get("api/apps/academy/categories").pipe(tap((response) => {
      this._categories.next(response);
    }));
  }
  /**
   * Get courses
   */
  getCourses() {
    return this._httpClient.get("api/apps/academy/courses").pipe(tap((response) => {
      this._courses.next(response);
    }));
  }
  /**
   * Get course by id
   */
  getCourseById(id) {
    return this._httpClient.get("api/apps/academy/courses/course", { params: { id } }).pipe(map((course) => {
      this._course.next(course);
      return course;
    }), switchMap((course) => {
      if (!course) {
        return throwError("Could not found course with id of " + id + "!");
      }
      return of(course);
    }));
  }
  static {
    this.\u0275fac = function AcademyService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AcademyService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AcademyService, factory: _AcademyService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/apps/academy/details/details.component.ts
var _c0 = ["courseSteps"];
var _c1 = () => [".."];
var _c2 = (a0, a1, a2, a3) => ({ "bg-blue-100 text-blue-800 dark:bg-blue-500 dark:text-blue-50": a0, "bg-green-100 text-green-800 dark:bg-green-500 dark:text-green-50": a1, "bg-pink-100 text-pink-800 dark:bg-pink-500 dark:text-pink-50": a2, "bg-amber-100 text-amber-800 dark:bg-amber-500 dark:text-amber-50": a3 });
var _c3 = (a0, a1, a2) => ({ "bg-primary text-on-primary ring-transparent group-hover:bg-primary-800 dark:bg-primary": a0, "ring-primary": a1, "ring-gray-300 group-hover:ring-gray-400 dark:ring-gray-600": a2 });
var _c4 = (a0, a1) => ({ "bg-primary": a0, "bg-gray-300 dark:bg-gray-600": a1 });
function AcademyDetailsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(2, _c2, category_r2.slug === "web", category_r2.slug === "android", category_r2.slug === "cloud", category_r2.slug === "firebase"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r2.title, " ");
  }
}
function AcademyDetailsComponent_For_23_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 42);
  }
  if (rf & 2) {
    const step_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c4, step_r4.order < ctx_r4.currentStep, step_r4.order >= ctx_r4.currentStep));
  }
}
function AcademyDetailsComponent_For_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 8);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:check");
  }
}
function AcademyDetailsComponent_For_23_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r4.order + 1, " ");
  }
}
function AcademyDetailsComponent_For_23_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const step_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", step_r4.order + 1, " ");
  }
}
function AcademyDetailsComponent_For_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "li", 41);
    \u0275\u0275template(1, AcademyDetailsComponent_For_23_Conditional_1_Template, 1, 4, "div", 42);
    \u0275\u0275elementStart(2, "div", 43);
    \u0275\u0275listener("click", function AcademyDetailsComponent_For_23_Template_div_click_2_listener() {
      const step_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goToStep(step_r4.order));
    });
    \u0275\u0275elementStart(3, "div", 44);
    \u0275\u0275template(4, AcademyDetailsComponent_For_23_Conditional_4_Template, 1, 1, "mat-icon", 8)(5, AcademyDetailsComponent_For_23_Conditional_5_Template, 2, 1, "div", 45)(6, AcademyDetailsComponent_For_23_Conditional_6_Template, 2, 1, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 47)(8, "div", 48);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 49);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const step_r4 = ctx.$implicit;
    const \u0275$index_40_r6 = ctx.$index;
    const \u0275$count_40_r7 = ctx.$count;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classProp("current-step", step_r4.order === ctx_r4.currentStep);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_40_r6 === \u0275$count_40_r7 - 1) ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(9, _c3, step_r4.order < ctx_r4.currentStep, step_r4.order === ctx_r4.currentStep, step_r4.order > ctx_r4.currentStep));
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r4.order < ctx_r4.currentStep ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r4.order === ctx_r4.currentStep ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(step_r4.order > ctx_r4.currentStep ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", step_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", step_r4.subtitle, " ");
  }
}
function AcademyDetailsComponent_For_35_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 51);
  }
  if (rf & 2) {
    const step_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerHTML", step_r8.content, \u0275\u0275sanitizeHtml);
  }
}
function AcademyDetailsComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab");
    \u0275\u0275template(1, AcademyDetailsComponent_For_35_ng_template_1_Template, 1, 1, "ng-template", 50);
    \u0275\u0275elementEnd();
  }
}
var AcademyDetailsComponent = class _AcademyDetailsComponent {
  /**
   * Constructor
   */
  constructor(_document, _academyService, _changeDetectorRef, _elementRef, _fuseMediaWatcherService) {
    this._document = _document;
    this._academyService = _academyService;
    this._changeDetectorRef = _changeDetectorRef;
    this._elementRef = _elementRef;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this.currentStep = 0;
    this.drawerMode = "side";
    this.drawerOpened = true;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._academyService.categories$.pipe(takeUntil(this._unsubscribeAll)).subscribe((categories) => {
      this.categories = categories;
      this._changeDetectorRef.markForCheck();
    });
    this._academyService.course$.pipe(takeUntil(this._unsubscribeAll)).subscribe((course) => {
      this.course = course;
      this.goToStep(course.progress.currentStep);
      this._changeDetectorRef.markForCheck();
    });
    this._fuseMediaWatcherService.onMediaChange$.pipe(takeUntil(this._unsubscribeAll)).subscribe(({ matchingAliases }) => {
      if (matchingAliases.includes("lg")) {
        this.drawerMode = "side";
        this.drawerOpened = true;
      } else {
        this.drawerMode = "over";
        this.drawerOpened = false;
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Go to given step
   *
   * @param step
   */
  goToStep(step) {
    this.currentStep = step;
    this.courseSteps.selectedIndex = this.currentStep;
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Go to previous step
   */
  goToPreviousStep() {
    if (this.currentStep === 0) {
      return;
    }
    this.goToStep(this.currentStep - 1);
    this._scrollCurrentStepElementIntoView();
  }
  /**
   * Go to next step
   */
  goToNextStep() {
    if (this.currentStep === this.course.totalSteps - 1) {
      return;
    }
    this.goToStep(this.currentStep + 1);
    this._scrollCurrentStepElementIntoView();
  }
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Scrolls the current step element from
   * sidenav into the view. This only happens when
   * previous/next buttons pressed as we don't want
   * to change the scroll position of the sidebar
   * when the user actually clicks around the sidebar.
   *
   * @private
   */
  _scrollCurrentStepElementIntoView() {
    setTimeout(() => {
      const currentStepElement = this._document.getElementsByClassName("current-step")[0];
      if (currentStepElement) {
        currentStepElement.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    });
  }
  static {
    this.\u0275fac = function AcademyDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AcademyDetailsComponent)(\u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(AcademyService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(FuseMediaWatcherService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AcademyDetailsComponent, selectors: [["academy-details"]], viewQuery: function AcademyDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.courseSteps = _t.first);
      }
    }, decls: 70, vars: 33, consts: [["matDrawer", ""], ["courseSteps", ""], [1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-hidden"], [1, "h-full", "flex-auto"], [1, "w-90", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], [1, "flex", "flex-col", "items-start", "border-b", "p-8"], [1, "inline-flex", "items-center", "leading-6", "text-primary", "hover:underline", 3, "routerLink"], [1, "inline-flex", "items-center"], [1, "text-current", "icon-size-5", 3, "svgIcon"], [1, "ml-1.5", "font-medium", "leading-5"], [1, "mt-7", "rounded-full", "px-3", "py-0.5", "text-sm", "font-semibold", 3, "ngClass"], [1, "mt-3", "text-2xl", "font-semibold"], [1, "text-secondary"], [1, "text-secondary", "mt-6", "flex", "items-center", "text-md", "leading-5"], [1, "text-hint", "icon-size-5", 3, "svgIcon"], [1, "ml-1.5"], [1, "px-8", "py-2"], [1, "group", "relative", "py-6", 3, "current-step"], [1, "flex", "flex-col", "overflow-hidden"], [1, "bg-card", "flex", "flex-0", "items-center", "border-b", "py-2", "pl-4", "pr-6", "dark:bg-transparent", "sm:py-4", "md:pl-6", "md:pr-8", "lg:hidden", "lg:border-b-0"], ["mat-icon-button", "", 3, "routerLink"], [3, "svgIcon"], [1, "ml-2.5", "truncate", "text-md", "font-medium", "tracking-tight", "sm:text-xl"], [1, "hidden", "h-0.5", "w-full", "flex-0", "lg:block", 3, "value"], ["cdkScrollable", "", 1, "flex-auto", "overflow-y-auto"], [1, "fuse-mat-no-header", 3, "animationDuration"], [1, "sticky", "bottom-4", "z-10", "hidden", "p-4", "lg:flex"], [1, "mx-auto", "flex", "items-center", "justify-center", "rounded-full", "bg-primary", "p-2", "shadow-lg"], ["mat-flat-button", "", 1, "flex-0", 3, "click", "color"], [1, "mr-2", 3, "svgIcon"], [1, "mr-1"], [1, "mx-2.5", "flex", "items-center", "justify-center", "font-medium", "leading-5", "text-on-primary"], [1, "text-hint", "mx-0.5"], [1, "ml-1"], [1, "ml-2", 3, "svgIcon"], [1, "bg-card", "flex", "items-center", "border-t", "p-4", "lg:hidden"], ["mat-icon-button", "", 3, "click"], [1, "ml-1", "flex", "items-center", "justify-center", "font-medium", "leading-5", "lg:ml-2"], [1, "ml-6", "flex-auto", "rounded-full", 3, "value"], ["mat-icon-button", "", 1, "ml-4", 3, "click"], ["mat-icon-button", "", 1, "ml-0.5", 3, "click"], [1, "group", "relative", "py-6"], [1, "absolute", "left-4", "top-6", "-ml-px", "h-full", "w-0.5", 3, "ngClass"], [1, "relative", "flex", "cursor-pointer", "items-start", 3, "click"], [1, "bg-card", "flex", "h-8", "w-8", "flex-0", "items-center", "justify-center", "rounded-full", "ring-2", "ring-inset", "dark:bg-default", 3, "ngClass"], [1, "text-md", "font-semibold", "text-primary", "dark:text-primary-500"], [1, "text-hint", "text-md", "font-semibold", "group-hover:text-secondary"], [1, "ml-4"], [1, "font-medium", "leading-4"], [1, "text-secondary", "mt-1.5", "text-md", "leading-4"], ["matTabContent", ""], [1, "bg-card", "prose", "prose-sm", "mx-auto", "max-w-3xl", "overflow-hidden", "rounded-2xl", "p-6", "shadow", "sm:my-2", "sm:p-10", "sm:py-12", "lg:mt-4", 3, "innerHTML"]], template: function AcademyDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "mat-drawer-container", 3)(2, "mat-drawer", 4, 0)(4, "div", 5)(5, "a", 6)(6, "span", 7);
        \u0275\u0275element(7, "mat-icon", 8);
        \u0275\u0275elementStart(8, "span", 9);
        \u0275\u0275text(9, "Back to courses");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(10, AcademyDetailsComponent_Conditional_10_Template, 2, 7, "div", 10);
        \u0275\u0275pipe(11, "fuseFindByKey");
        \u0275\u0275elementStart(12, "div", 11);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 13);
        \u0275\u0275element(17, "mat-icon", 14);
        \u0275\u0275elementStart(18, "div", 15);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(20, "div", 16)(21, "ol");
        \u0275\u0275repeaterCreate(22, AcademyDetailsComponent_For_23_Template, 12, 13, "li", 17, ctx.trackByFn, true);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(24, "mat-drawer-content", 18)(25, "div", 19)(26, "a", 20);
        \u0275\u0275element(27, "mat-icon", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "h2", 22);
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(30, "mat-progress-bar", 23);
        \u0275\u0275elementStart(31, "div", 24)(32, "mat-tab-group", 25, 1);
        \u0275\u0275repeaterCreate(34, AcademyDetailsComponent_For_35_Template, 2, 0, "mat-tab", null, ctx.trackByFn, true);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 26)(37, "div", 27)(38, "button", 28);
        \u0275\u0275listener("click", function AcademyDetailsComponent_Template_button_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goToPreviousStep());
        });
        \u0275\u0275elementStart(39, "span", 7);
        \u0275\u0275element(40, "mat-icon", 29);
        \u0275\u0275elementStart(41, "span", 30);
        \u0275\u0275text(42, "Prev");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(43, "div", 31)(44, "span");
        \u0275\u0275text(45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "span", 32);
        \u0275\u0275text(47, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "span");
        \u0275\u0275text(49);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "button", 28);
        \u0275\u0275listener("click", function AcademyDetailsComponent_Template_button_click_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goToNextStep());
        });
        \u0275\u0275elementStart(51, "span", 7)(52, "span", 33);
        \u0275\u0275text(53, "Next");
        \u0275\u0275elementEnd();
        \u0275\u0275element(54, "mat-icon", 34);
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(55, "div", 35)(56, "button", 36);
        \u0275\u0275listener("click", function AcademyDetailsComponent_Template_button_click_56_listener() {
          \u0275\u0275restoreView(_r1);
          const matDrawer_r9 = \u0275\u0275reference(3);
          return \u0275\u0275resetView(matDrawer_r9.toggle());
        });
        \u0275\u0275element(57, "mat-icon", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 37)(59, "span");
        \u0275\u0275text(60);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "span", 32);
        \u0275\u0275text(62, "/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "span");
        \u0275\u0275text(64);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(65, "mat-progress-bar", 38);
        \u0275\u0275elementStart(66, "button", 39);
        \u0275\u0275listener("click", function AcademyDetailsComponent_Template_button_click_66_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goToPreviousStep());
        });
        \u0275\u0275element(67, "mat-icon", 21);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "button", 40);
        \u0275\u0275listener("click", function AcademyDetailsComponent_Template_button_click_68_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.goToNextStep());
        });
        \u0275\u0275element(69, "mat-icon", 21);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_7_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        \u0275\u0275advance(3);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(31, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:arrow-small-left");
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_7_0 = \u0275\u0275pipeBind3(11, 27, ctx.course.category, "slug", ctx.categories)) ? 10 : -1, tmp_7_0);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.course.title, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.course.description);
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:clock");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("", ctx.course.duration, " minutes");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.course.steps);
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(32, _c1));
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-small-left");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.course.title, " ");
        \u0275\u0275advance();
        \u0275\u0275property("value", 100 * (ctx.currentStep + 1) / ctx.course.totalSteps);
        \u0275\u0275advance(2);
        \u0275\u0275property("animationDuration", "200");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.course.steps);
        \u0275\u0275advance(4);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-left");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.currentStep + 1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.course.totalSteps);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-right");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-4");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.currentStep + 1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(ctx.course.totalSteps);
        \u0275\u0275advance();
        \u0275\u0275property("value", 100 * (ctx.currentStep + 1) / ctx.course.totalSteps);
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-left");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-right");
      }
    }, dependencies: [
      MatSidenavModule,
      CdkScrollable,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      RouterLink,
      MatIconModule,
      MatIcon,
      NgClass,
      MatButtonModule,
      MatButton,
      MatIconAnchor,
      MatIconButton,
      MatProgressBarModule,
      MatProgressBar,
      MatTabsModule,
      MatTabContent,
      MatTab,
      MatTabGroup,
      FuseFindByKeyPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AcademyDetailsComponent, { className: "AcademyDetailsComponent", filePath: "src/app/modules/admin/apps/academy/details/details.component.ts", lineNumber: 43 });
})();

// src/app/modules/admin/apps/academy/list/list.component.ts
var _c02 = (a0) => [a0];
var _c12 = (a0, a1, a2, a3) => ({ "bg-blue-100 text-blue-800 dark:bg-blue-500 dark:text-blue-50": a0, "bg-green-100 text-green-800 dark:bg-green-500 dark:text-green-50": a1, "bg-pink-100 text-pink-800 dark:bg-pink-500 dark:text-pink-50": a2, "bg-amber-100 text-amber-800 dark:bg-amber-500 dark:text-amber-50": a3 });
var _c22 = () => ({ "=0": "time", "=1": "time", other: "times" });
function AcademyListComponent_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r2 = ctx.$implicit;
    \u0275\u0275property("value", category_r2.slug);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(category_r2.title);
  }
}
function AcademyListComponent_Conditional_28_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r4 = ctx;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(2, _c12, category_r4.slug === "web", category_r4.slug === "android", category_r4.slug === "cloud", category_r4.slug === "firebase"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r4.title, " ");
  }
}
function AcademyListComponent_Conditional_28_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 28);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:check-badge")("matTooltip", "You completed this course at least once");
  }
}
function AcademyListComponent_Conditional_28_For_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1, " Never completed ");
    \u0275\u0275elementEnd();
  }
}
function AcademyListComponent_Conditional_28_For_2_Conditional_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " once ");
  }
}
function AcademyListComponent_Conditional_28_For_2_Conditional_19_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " twice ");
  }
}
function AcademyListComponent_Conditional_28_For_2_Conditional_19_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "i18nPlural");
  }
  if (rf & 2) {
    const course_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275textInterpolate2(" ", course_r5.progress.completed, " ", \u0275\u0275pipeBind2(1, 2, course_r5.progress.completed, \u0275\u0275pureFunction0(5, _c22)), " ");
  }
}
function AcademyListComponent_Conditional_28_For_2_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span");
    \u0275\u0275text(2, "Completed");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 44);
    \u0275\u0275template(4, AcademyListComponent_Conditional_28_For_2_Conditional_19_Conditional_4_Template, 1, 0)(5, AcademyListComponent_Conditional_28_For_2_Conditional_19_Conditional_5_Template, 1, 0)(6, AcademyListComponent_Conditional_28_For_2_Conditional_19_Conditional_6_Template, 2, 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const course_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275conditional(course_r5.progress.completed === 1 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r5.progress.completed === 2 ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r5.progress.completed > 2 ? 6 : -1);
  }
}
function AcademyListComponent_Conditional_28_For_2_Conditional_28_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Start");
    \u0275\u0275elementEnd();
  }
}
function AcademyListComponent_Conditional_28_For_2_Conditional_28_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Start again");
    \u0275\u0275elementEnd();
  }
}
function AcademyListComponent_Conditional_28_For_2_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AcademyListComponent_Conditional_28_For_2_Conditional_28_Conditional_0_Template, 2, 0, "span")(1, AcademyListComponent_Conditional_28_For_2_Conditional_28_Conditional_1_Template, 2, 0, "span");
  }
  if (rf & 2) {
    const course_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(course_r5.progress.completed === 0 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r5.progress.completed > 0 ? 1 : -1);
  }
}
function AcademyListComponent_Conditional_28_For_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Continue");
    \u0275\u0275elementEnd();
  }
}
function AcademyListComponent_Conditional_28_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "div", 25);
    \u0275\u0275template(3, AcademyListComponent_Conditional_28_For_2_Conditional_3_Template, 2, 7, "div", 26);
    \u0275\u0275pipe(4, "fuseFindByKey");
    \u0275\u0275elementStart(5, "div", 27);
    \u0275\u0275template(6, AcademyListComponent_Conditional_28_For_2_Conditional_6_Template, 1, 2, "mat-icon", 28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 29);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 30);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "div", 31);
    \u0275\u0275elementStart(12, "div", 32);
    \u0275\u0275element(13, "mat-icon", 33);
    \u0275\u0275elementStart(14, "div", 34);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 35);
    \u0275\u0275element(17, "mat-icon", 33);
    \u0275\u0275template(18, AcademyListComponent_Conditional_28_For_2_Conditional_18_Template, 2, 0, "div", 34)(19, AcademyListComponent_Conditional_28_For_2_Conditional_19_Template, 7, 3, "div", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 36)(21, "div", 37);
    \u0275\u0275element(22, "div", 38);
    \u0275\u0275pipe(23, "percent");
    \u0275\u0275element(24, "mat-progress-bar", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 40)(26, "a", 41)(27, "span", 42);
    \u0275\u0275template(28, AcademyListComponent_Conditional_28_For_2_Conditional_28_Template, 2, 2)(29, AcademyListComponent_Conditional_28_For_2_Conditional_29_Template, 2, 0, "span");
    \u0275\u0275element(30, "mat-icon", 43);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const course_r5 = ctx.$implicit;
    const ctx_r5 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_12_0 = \u0275\u0275pipeBind3(4, 17, course_r5.category, "slug", ctx_r5.categories)) ? 3 : -1, tmp_12_0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(course_r5.progress.completed > 0 ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", course_r5.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", course_r5.description, " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:clock");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", course_r5.duration, " minutes ");
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_solid:academic-cap");
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r5.progress.completed === 0 ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r5.progress.completed > 0 ? 19 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(23, 21, course_r5.progress.currentStep / course_r5.totalSteps))("matTooltipPosition", "above")("matTooltipClass", "-mb-0.5");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 100 * course_r5.progress.currentStep / course_r5.totalSteps);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(23, _c02, course_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(course_r5.progress.currentStep === 0 ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(course_r5.progress.currentStep > 0 ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:arrow-small-right");
  }
}
function AcademyListComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275repeaterCreate(1, AcademyListComponent_Conditional_28_For_2_Template, 31, 25, "div", 23, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r5.filteredCourses);
  }
}
function AcademyListComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "mat-icon", 45);
    \u0275\u0275elementStart(2, "div", 46);
    \u0275\u0275text(3, " No courses found! ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:document-search");
  }
}
var AcademyListComponent = class _AcademyListComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _changeDetectorRef, _router, _academyService) {
    this._activatedRoute = _activatedRoute;
    this._changeDetectorRef = _changeDetectorRef;
    this._router = _router;
    this._academyService = _academyService;
    this.filters = {
      categorySlug$: new BehaviorSubject("all"),
      query$: new BehaviorSubject(""),
      hideCompleted$: new BehaviorSubject(false)
    };
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._academyService.categories$.pipe(takeUntil(this._unsubscribeAll)).subscribe((categories) => {
      this.categories = categories;
      this._changeDetectorRef.markForCheck();
    });
    this._academyService.courses$.pipe(takeUntil(this._unsubscribeAll)).subscribe((courses) => {
      this.courses = this.filteredCourses = courses;
      this._changeDetectorRef.markForCheck();
    });
    combineLatest([
      this.filters.categorySlug$,
      this.filters.query$,
      this.filters.hideCompleted$
    ]).subscribe(([categorySlug, query, hideCompleted]) => {
      this.filteredCourses = this.courses;
      if (categorySlug !== "all") {
        this.filteredCourses = this.filteredCourses.filter((course) => course.category === categorySlug);
      }
      if (query !== "") {
        this.filteredCourses = this.filteredCourses.filter((course) => course.title.toLowerCase().includes(query.toLowerCase()) || course.description.toLowerCase().includes(query.toLowerCase()) || course.category.toLowerCase().includes(query.toLowerCase()));
      }
      if (hideCompleted) {
        this.filteredCourses = this.filteredCourses.filter((course) => course.progress.completed === 0);
      }
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Filter by search query
   *
   * @param query
   */
  filterByQuery(query) {
    this.filters.query$.next(query);
  }
  /**
   * Filter by category
   *
   * @param change
   */
  filterByCategory(change) {
    this.filters.categorySlug$.next(change.value);
  }
  /**
   * Show/hide completed courses
   *
   * @param change
   */
  toggleCompleted(change) {
    this.filters.hideCompleted$.next(change.checked);
  }
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  static {
    this.\u0275fac = function AcademyListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AcademyListComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AcademyService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AcademyListComponent, selectors: [["academy-list"]], decls: 30, vars: 7, consts: [["query", ""], ["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-y-auto"], [1, "dark", "relative", "flex-0", "overflow-hidden", "bg-gray-800", "px-4", "py-8", "sm:p-16"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], [1, "relative", "z-10", "flex", "flex-col", "items-center"], [1, "text-xl", "font-semibold"], [1, "mt-1", "text-center", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight", "sm:text-7xl"], [1, "text-secondary", "mt-6", "max-w-2xl", "text-center", "tracking-tight", "sm:text-2xl"], [1, "flex", "flex-auto", "p-6", "sm:p-10"], [1, "mx-auto", "flex", "w-full", "max-w-xs", "flex-auto", "flex-col", "sm:max-w-5xl"], [1, "flex", "w-full", "max-w-xs", "flex-col", "items-center", "justify-between", "sm:max-w-none", "sm:flex-row"], [1, "w-full", "sm:w-36", 3, "subscriptSizing"], [3, "selectionChange", "value"], [3, "value"], [1, "mt-4", "w-full", "sm:ml-4", "sm:mt-0", "sm:w-72", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["placeholder", "Search by title or description", "matInput", "", 3, "input"], [1, "mt-8", "sm:ml-auto", "sm:mt-0", 3, "change", "color"], [1, "mt-8", "grid", "grid-cols-1", "gap-8", "sm:mt-10", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "flex", "flex-auto", "flex-col", "items-center", "justify-center", "bg-gray-100", "dark:bg-transparent"], [1, "bg-card", "flex", "h-96", "flex-col", "overflow-hidden", "rounded-2xl", "shadow"], [1, "flex", "flex-col", "p-6"], [1, "flex", "items-center", "justify-between"], [1, "rounded-full", "px-3", "py-0.5", "text-sm", "font-semibold", 3, "ngClass"], [1, "flex", "items-center"], [1, "text-green-600", "icon-size-5", 3, "svgIcon", "matTooltip"], [1, "mt-4", "text-lg", "font-medium"], [1, "text-secondary", "mt-0.5", "line-clamp-2"], [1, "my-6", "h-1", "w-12", "border-t-2"], [1, "text-secondary", "flex", "items-center", "text-md", "leading-5"], [1, "text-hint", "icon-size-5", 3, "svgIcon"], [1, "ml-1.5"], [1, "text-secondary", "mt-2", "flex", "items-center", "text-md", "leading-5"], [1, "mt-auto", "flex", "w-full", "flex-col"], [1, "relative", "h-0.5"], [1, "absolute", "inset-x-0", "z-10", "-mt-3", "h-6", 3, "matTooltip", "matTooltipPosition", "matTooltipClass"], [1, "h-0.5", 3, "value"], [1, "bg-gray-50", "px-6", "py-4", "text-right", "dark:bg-transparent"], ["mat-stroked-button", "", 3, "routerLink"], [1, "inline-flex", "items-center"], [1, "ml-1.5", "icon-size-5", 3, "svgIcon"], [1, "ml-1"], [1, "icon-size-24", 3, "svgIcon"], [1, "text-secondary", "mt-6", "text-2xl", "font-semibold", "tracking-tight"]], template: function AcademyListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 3)(3, "g", 4);
        \u0275\u0275element(4, "circle", 5)(5, "circle", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 7)(7, "h2", 8);
        \u0275\u0275text(8, "FUSE ACADEMY");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 9);
        \u0275\u0275text(10, " What do you want to learn today? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 10);
        \u0275\u0275text(12, " Our courses will step you through the process of a building small applications, or adding new features to existing applications. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(13, "div", 11)(14, "div", 12)(15, "div", 13)(16, "mat-form-field", 14)(17, "mat-select", 15);
        \u0275\u0275listener("selectionChange", function AcademyListComponent_Template_mat_select_selectionChange_17_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterByCategory($event));
        });
        \u0275\u0275elementStart(18, "mat-option", 16);
        \u0275\u0275text(19, "All");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(20, AcademyListComponent_For_21_Template, 2, 2, "mat-option", 16, ctx.trackByFn, true);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "mat-form-field", 17);
        \u0275\u0275element(23, "mat-icon", 18);
        \u0275\u0275elementStart(24, "input", 19, 0);
        \u0275\u0275listener("input", function AcademyListComponent_Template_input_input_24_listener() {
          \u0275\u0275restoreView(_r1);
          const query_r3 = \u0275\u0275reference(25);
          return \u0275\u0275resetView(ctx.filterByQuery(query_r3.value));
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "mat-slide-toggle", 20);
        \u0275\u0275listener("change", function AcademyListComponent_Template_mat_slide_toggle_change_26_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleCompleted($event));
        });
        \u0275\u0275text(27, " Hide completed ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(28, AcademyListComponent_Conditional_28_Template, 3, 0, "div", 21)(29, AcademyListComponent_Conditional_29_Template, 4, 1, "div", 22);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(16);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance();
        \u0275\u0275property("value", "all");
        \u0275\u0275advance();
        \u0275\u0275property("value", "all");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.categories);
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
        \u0275\u0275advance(3);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.filteredCourses.length ? 28 : 29);
      }
    }, dependencies: [
      CdkScrollable,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatOptionModule,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatSlideToggleModule,
      MatSlideToggle,
      NgClass,
      MatTooltipModule,
      MatTooltip,
      MatProgressBarModule,
      MatProgressBar,
      MatButtonModule,
      MatAnchor,
      RouterLink,
      FuseFindByKeyPipe,
      PercentPipe,
      I18nPluralPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AcademyListComponent, { className: "AcademyListComponent", filePath: "src/app/modules/admin/apps/academy/list/list.component.ts", lineNumber: 52 });
})();

// src/app/modules/admin/apps/academy/academy.routes.ts
var courseResolver = (route, state) => {
  const academyService = inject(AcademyService);
  const router = inject(Router);
  return academyService.getCourseById(route.paramMap.get("id")).pipe(
    // Error here means the requested course is not available
    catchError((error) => {
      console.error(error);
      const parentUrl = state.url.split("/").slice(0, -1).join("/");
      router.navigateByUrl(parentUrl);
      return throwError(error);
    })
  );
};
var academy_routes_default = [
  {
    path: "",
    component: AcademyComponent,
    resolve: {
      categories: () => inject(AcademyService).getCategories()
    },
    children: [
      {
        path: "",
        pathMatch: "full",
        component: AcademyListComponent,
        resolve: {
          courses: () => inject(AcademyService).getCourses()
        }
      },
      {
        path: ":id",
        component: AcademyDetailsComponent,
        resolve: {
          course: courseResolver
        }
      }
    ]
  }
];
export {
  academy_routes_default as default
};
//# sourceMappingURL=chunk-4TNYEAZI.js.map
