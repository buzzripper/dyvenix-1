import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule
} from "./chunk-74A4XWO4.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-B6LWBRMU.js";
import {
  FuseMediaWatcherService
} from "./chunk-NDM3MP5U.js";
import "./chunk-YHH4B3V4.js";
import "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
import {
  MatButton,
  MatButtonModule,
  MatIconAnchor,
  MatIconButton
} from "./chunk-JPDBWMRG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5AHQJJ5Y.js";
import "./chunk-F6PEOSCL.js";
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
import "./chunk-M6AYR6A2.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Subject,
  catchError,
  inject,
  map,
  of,
  switchMap,
  take,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/apps/file-manager/file-manager.service.ts
var FileManagerService = class _FileManagerService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._item = new BehaviorSubject(null);
    this._items = new BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for items
   */
  get items$() {
    return this._items.asObservable();
  }
  /**
   * Getter for item
   */
  get item$() {
    return this._item.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get items
   */
  getItems(folderId = null) {
    return this._httpClient.get("api/apps/file-manager", { params: { folderId } }).pipe(tap((response) => {
      this._items.next(response);
    }));
  }
  /**
   * Get item by id
   */
  getItemById(id) {
    return this._items.pipe(take(1), map((items) => {
      const item = [...items.folders, ...items.files].find((value) => value.id === id) || null;
      this._item.next(item);
      return item;
    }), switchMap((item) => {
      if (!item) {
        return throwError("Could not found the item with id of " + id + "!");
      }
      return of(item);
    }));
  }
  static {
    this.\u0275fac = function FileManagerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileManagerService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FileManagerService, factory: _FileManagerService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/apps/file-manager/list/list.component.ts
var _c0 = ["matDrawer"];
var _c1 = () => ["/apps/file-manager"];
var _c2 = (a0) => ["/apps/file-manager/folders/", a0];
var _c3 = (a0) => ["./details/", a0];
function FileManagerListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate2(" ", ctx_r1.items.folders.length, " folders, ", ctx_r1.items.files.length, " files ");
  }
}
function FileManagerListComponent_Conditional_13_For_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const path_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c2, path_r3.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(path_r3.name);
  }
}
function FileManagerListComponent_Conditional_13_For_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const path_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(path_r3.name);
  }
}
function FileManagerListComponent_Conditional_13_For_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, "/");
    \u0275\u0275elementEnd();
  }
}
function FileManagerListComponent_Conditional_13_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FileManagerListComponent_Conditional_13_For_6_Conditional_0_Template, 2, 4, "a", 16)(1, FileManagerListComponent_Conditional_13_For_6_Conditional_1_Template, 2, 1, "div")(2, FileManagerListComponent_Conditional_13_For_6_Conditional_2_Template, 2, 0, "div", 17);
  }
  if (rf & 2) {
    const \u0275$index_33_r4 = ctx.$index;
    const \u0275$count_33_r5 = ctx.$count;
    \u0275\u0275conditional(!(\u0275$index_33_r4 === \u0275$count_33_r5 - 1) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_33_r4 === \u0275$count_33_r5 - 1 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_33_r4 === \u0275$count_33_r5 - 1) ? 2 : -1);
  }
}
function FileManagerListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "a", 16);
    \u0275\u0275text(2, "Home ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275text(4, "/");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(5, FileManagerListComponent_Conditional_13_For_6_Template, 3, 3, null, null, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c1));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.items.path);
  }
}
function FileManagerListComponent_Conditional_19_Conditional_1_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const folder_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", folder_r7.contents, " ");
  }
}
function FileManagerListComponent_Conditional_19_Conditional_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "a", 21);
    \u0275\u0275listener("click", function FileManagerListComponent_Conditional_19_Conditional_1_For_5_Template_a_click_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275element(2, "mat-icon", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 23)(4, "div", 24)(5, "div", 25);
    \u0275\u0275element(6, "mat-icon", 26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27)(8, "div", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, FileManagerListComponent_Conditional_19_Conditional_1_For_5_Conditional_10_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const folder_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(7, _c3, folder_r7.id));
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:information-circle");
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(9, _c2, folder_r7.id));
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:folder");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", folder_r7.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", folder_r7.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(folder_r7.contents ? 10 : -1);
  }
}
function FileManagerListComponent_Conditional_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 18);
    \u0275\u0275text(2, "Folders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275repeaterCreate(4, FileManagerListComponent_Conditional_19_Conditional_1_For_5_Template, 11, 11, "div", 20, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.items.folders);
  }
}
function FileManagerListComponent_Conditional_19_Conditional_2_For_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const file_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", file_r8.contents, " ");
  }
}
function FileManagerListComponent_Conditional_19_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 30)(1, "div", 24)(2, "div", 25)(3, "div", 31);
    \u0275\u0275element(4, "mat-icon", 26);
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "div", 27)(8, "div", 28);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, FileManagerListComponent_Conditional_19_Conditional_2_For_5_Conditional_10_Template, 2, 1, "div", 29);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r8 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(16, _c3, file_r8.id));
    \u0275\u0275advance(4);
    \u0275\u0275property("svgIcon", "heroicons_solid:document");
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-red-600", file_r8.type === "PDF")("bg-blue-600", file_r8.type === "DOC")("bg-green-600", file_r8.type === "XLS")("bg-gray-600", file_r8.type === "TXT")("bg-amber-600", file_r8.type === "JPG");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", file_r8.type.toUpperCase(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", file_r8.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", file_r8.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(file_r8.contents ? 10 : -1);
  }
}
function FileManagerListComponent_Conditional_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 18);
    \u0275\u0275text(2, "Files");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275repeaterCreate(4, FileManagerListComponent_Conditional_19_Conditional_2_For_5_Template, 11, 18, "a", 30, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.items.files);
  }
}
function FileManagerListComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275template(1, FileManagerListComponent_Conditional_19_Conditional_1_Template, 6, 0, "div")(2, FileManagerListComponent_Conditional_19_Conditional_2_Template, 6, 0, "div");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.items.folders.length > 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.items.files.length > 0 ? 2 : -1);
  }
}
function FileManagerListComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-icon", 33);
    \u0275\u0275elementStart(2, "div", 34);
    \u0275\u0275text(3, " There are no items! ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:folder-open");
  }
}
var FileManagerListComponent = class _FileManagerListComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _changeDetectorRef, _router, _fileManagerService, _fuseMediaWatcherService) {
    this._activatedRoute = _activatedRoute;
    this._changeDetectorRef = _changeDetectorRef;
    this._router = _router;
    this._fileManagerService = _fileManagerService;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._fileManagerService.items$.pipe(takeUntil(this._unsubscribeAll)).subscribe((items) => {
      this.items = items;
      this._changeDetectorRef.markForCheck();
    });
    this._fileManagerService.item$.pipe(takeUntil(this._unsubscribeAll)).subscribe((item) => {
      this.selectedItem = item;
      this._changeDetectorRef.markForCheck();
    });
    this._fuseMediaWatcherService.onMediaQueryChange$("(min-width: 1440px)").pipe(takeUntil(this._unsubscribeAll)).subscribe((state) => {
      this.drawerMode = state.matches ? "side" : "over";
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
   * On backdrop clicked
   */
  onBackdropClicked() {
    this._router.navigate(["./"], { relativeTo: this._activatedRoute });
    this._changeDetectorRef.markForCheck();
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
    this.\u0275fac = function FileManagerListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileManagerListComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FileManagerService), \u0275\u0275directiveInject(FuseMediaWatcherService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileManagerListComponent, selectors: [["file-manager-list"]], viewQuery: function FileManagerListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.matDrawer = _t.first);
      }
    }, decls: 21, vars: 9, consts: [["matDrawer", ""], [1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-hidden"], [1, "bg-card", "h-full", "flex-auto", "dark:bg-transparent", 3, "backdropClick"], [1, "w-full", "dark:bg-gray-900", "sm:w-100", 3, "mode", "opened", "position", "disableClose"], [1, "flex", "flex-col", "bg-gray-100", "dark:bg-transparent"], [1, "flex", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-col", "items-start", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:py-12", "md:px-8"], [1, "text-4xl", "font-extrabold", "leading-none", "tracking-tight"], [1, "text-secondary", "mt-0.5", "flex", "items-center", "font-medium"], [1, "flex", "items-center", "space-x-2"], [1, "mt-4", "sm:mt-0"], ["mat-flat-button", "", 3, "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "space-y-8", "p-6", "md:p-8"], [1, "flex", "flex-auto", "flex-col", "items-center", "justify-center", "bg-gray-100", "dark:bg-transparent"], [1, "cursor-pointer", "text-primary", 3, "routerLink"], [1, ""], [1, "font-medium"], [1, "-m-2", "mt-2", "flex", "flex-wrap"], [1, "bg-card", "relative", "m-2", "h-40", "w-40", "rounded-2xl", "p-4", "shadow"], ["mat-icon-button", "", 1, "absolute", "right-1.5", "top-1.5", "z-20", "h-8", "min-h-8", "w-8", 3, "click", "routerLink"], [1, "icon-size-5", 3, "svgIcon"], [1, "absolute", "inset-0", "z-10", "flex", "cursor-pointer", "flex-col", "p-4", 3, "routerLink"], [1, "aspect-[9/6]"], [1, "flex", "h-full", "items-center", "justify-center"], [1, "text-hint", "opacity-50", "icon-size-14", 3, "svgIcon"], [1, "flex", "flex-auto", "flex-col", "justify-center", "text-center", "text-sm", "font-medium"], [1, "truncate", 3, "matTooltip"], [1, "text-secondary", "truncate"], [1, "bg-card", "m-2", "flex", "h-40", "w-40", "cursor-pointer", "flex-col", "rounded-2xl", "p-4", "shadow", 3, "routerLink"], [1, "relative"], [1, "absolute", "bottom-0", "left-0", "rounded", "px-1.5", "text-sm", "font-semibold", "leading-5", "text-white"], [1, "icon-size-24", 3, "svgIcon"], [1, "text-secondary", "mt-4", "text-2xl", "font-semibold", "tracking-tight"]], template: function FileManagerListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-drawer-container", 2);
        \u0275\u0275listener("backdropClick", function FileManagerListComponent_Template_mat_drawer_container_backdropClick_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBackdropClicked());
        });
        \u0275\u0275elementStart(2, "mat-drawer", 3, 0);
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7);
        \u0275\u0275text(10, " File Manager ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275template(12, FileManagerListComponent_Conditional_12_Template, 1, 2)(13, FileManagerListComponent_Conditional_13_Template, 7, 2, "div", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "button", 11);
        \u0275\u0275element(16, "mat-icon", 12);
        \u0275\u0275elementStart(17, "span", 13);
        \u0275\u0275text(18, "Upload file");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(19, FileManagerListComponent_Conditional_19_Template, 3, 2, "div", 14)(20, FileManagerListComponent_Conditional_20_Template, 4, 1, "div", 15);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("mode", ctx.drawerMode)("opened", false)("position", "end")("disableClose", true);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(!ctx.items.path.length ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.items.path.length ? 13 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:plus");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.items && (ctx.items.folders.length > 0 || ctx.items.files.length > 0) ? 19 : 20);
      }
    }, dependencies: [
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      RouterOutlet,
      RouterLink,
      MatButtonModule,
      MatButton,
      MatIconAnchor,
      MatIconModule,
      MatIcon,
      MatTooltipModule,
      MatTooltip
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileManagerListComponent, { className: "FileManagerListComponent", filePath: "src/app/modules/admin/apps/file-manager/list/list.component.ts", lineNumber: 42 });
})();

// src/app/modules/admin/apps/file-manager/details/details.component.ts
var _c02 = () => ["../../"];
function FileManagerDetailsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 6);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_outline:folder");
  }
}
function FileManagerDetailsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 6);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_outline:document");
  }
}
function FileManagerDetailsComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2, "Contents");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.item.contents);
  }
}
function FileManagerDetailsComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.item.description);
  }
}
function FileManagerDetailsComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1, " Click here to add a description ");
    \u0275\u0275elementEnd();
  }
}
var FileManagerDetailsComponent = class _FileManagerDetailsComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _fileManagerListComponent, _fileManagerService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._fileManagerListComponent = _fileManagerListComponent;
    this._fileManagerService = _fileManagerService;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._fileManagerListComponent.matDrawer.open();
    this._fileManagerService.item$.pipe(takeUntil(this._unsubscribeAll)).subscribe((item) => {
      this._fileManagerListComponent.matDrawer.open();
      this.item = item;
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
   * Close the drawer
   */
  closeDrawer() {
    return this._fileManagerListComponent.matDrawer.close();
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
    this.\u0275fac = function FileManagerDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileManagerDetailsComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FileManagerListComponent), \u0275\u0275directiveInject(FileManagerService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileManagerDetailsComponent, selectors: [["file-manager-details"]], decls: 51, vars: 28, consts: [[1, "flex", "flex-auto", "flex-col", "p-6", "md:p-8"], [1, "flex", "items-center", "justify-end"], ["mat-icon-button", "", 3, "routerLink"], [3, "svgIcon"], [1, "mt-8", "aspect-[9/6]"], [1, "flex", "h-full", "items-center", "justify-center", "rounded-lg", "border", "bg-gray-50", "dark:bg-card"], [1, "text-hint", "icon-size-24", 3, "svgIcon"], [1, "mt-8", "flex", "flex-col", "items-start"], [1, "text-xl", "font-medium"], [1, "mt-1", "rounded", "px-1.5", "text-sm", "font-semibold", "leading-5", "text-white"], [1, "mt-8", "text-lg", "font-medium"], [1, "mt-4", "flex", "flex-col", "divide-y", "border-b", "border-t", "font-medium"], [1, "flex", "items-center", "justify-between", "py-3"], [1, "text-secondary"], [1, "mt-8", "flex", "items-center", "justify-between"], [1, "text-lg", "font-medium"], ["mat-icon-button", ""], [1, "icon-size-5", 3, "svgIcon"], [1, "mt-2", "flex", "border-t"], [1, "py-3"], [1, "text-secondary", "italic"], [1, "mt-8", "grid", "w-full", "grid-cols-2", "gap-4"], ["mat-flat-button", "", 1, "flex-auto", 3, "color"], ["mat-stroked-button", "", 1, "flex-auto"]], template: function FileManagerDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "a", 2);
        \u0275\u0275element(3, "mat-icon", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 4)(5, "div", 5);
        \u0275\u0275template(6, FileManagerDetailsComponent_Conditional_6_Template, 1, 1, "mat-icon", 6)(7, FileManagerDetailsComponent_Conditional_7_Template, 1, 1, "mat-icon", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 7)(9, "div", 8);
        \u0275\u0275text(10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "div", 10);
        \u0275\u0275text(14, "Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "div", 13);
        \u0275\u0275text(18, "Created By");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div");
        \u0275\u0275text(20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12)(22, "div", 13);
        \u0275\u0275text(23, "Created At");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div");
        \u0275\u0275text(25);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "div", 12)(27, "div", 13);
        \u0275\u0275text(28, "Modified At");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div");
        \u0275\u0275text(30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 12)(32, "div", 13);
        \u0275\u0275text(33, "Size");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div");
        \u0275\u0275text(35);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(36, FileManagerDetailsComponent_Conditional_36_Template, 5, 1, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 14)(38, "div", 15);
        \u0275\u0275text(39, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "button", 16);
        \u0275\u0275element(41, "mat-icon", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 18)(43, "div", 19);
        \u0275\u0275template(44, FileManagerDetailsComponent_Conditional_44_Template, 2, 1, "div")(45, FileManagerDetailsComponent_Conditional_45_Template, 2, 0, "div", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 21)(47, "button", 22);
        \u0275\u0275text(48, " Download ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 23);
        \u0275\u0275text(50, "Delete");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(27, _c02));
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:x-mark");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.item.type === "folder" ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.type !== "folder" ? 7 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.item.name);
        \u0275\u0275advance();
        \u0275\u0275classProp("bg-indigo-600", ctx.item.type === "folder")("bg-red-600", ctx.item.type === "PDF")("bg-blue-600", ctx.item.type === "DOC")("bg-green-600", ctx.item.type === "XLS")("bg-gray-600", ctx.item.type === "TXT")("bg-amber-600", ctx.item.type === "JPG");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.item.type.toUpperCase(), " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate(ctx.item.createdBy);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.item.createdAt);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.item.modifiedAt);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.item.size);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.contents ? 36 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:pencil");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.item.description ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.item.description ? 45 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "primary");
      }
    }, dependencies: [MatButtonModule, MatButton, MatIconAnchor, MatIconButton, RouterLink, MatIconModule, MatIcon], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileManagerDetailsComponent, { className: "FileManagerDetailsComponent", filePath: "src/app/modules/admin/apps/file-manager/details/details.component.ts", lineNumber: 25 });
})();

// src/app/modules/admin/apps/file-manager/file-manager.component.ts
var FileManagerComponent = class _FileManagerComponent {
  /**
   * Constructor
   */
  constructor() {
  }
  static {
    this.\u0275fac = function FileManagerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FileManagerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FileManagerComponent, selectors: [["file-manager"]], decls: 1, vars: 0, template: function FileManagerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FileManagerComponent, { className: "FileManagerComponent", filePath: "src/app/modules/admin/apps/file-manager/file-manager.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin/apps/file-manager/file-manager.routes.ts
var folderResolver = (route, state) => {
  const fileManagerService = inject(FileManagerService);
  const router = inject(Router);
  return fileManagerService.getItems(route.paramMap.get("folderId")).pipe(
    // Error here means the requested folder is not available
    catchError((error) => {
      console.error(error);
      const parentUrl = state.url.split("/").slice(0, -1).join("/");
      router.navigateByUrl(parentUrl);
      return throwError(error);
    })
  );
};
var itemResolver = (route, state) => {
  const fileManagerService = inject(FileManagerService);
  const router = inject(Router);
  return fileManagerService.getItemById(route.paramMap.get("id")).pipe(
    // Error here means the requested item is not available
    catchError((error) => {
      console.error(error);
      const parentUrl = state.url.split("/").slice(0, -1).join("/");
      router.navigateByUrl(parentUrl);
      return throwError(error);
    })
  );
};
var canDeactivateFileManagerDetails = (component, currentRoute, currentState, nextState) => {
  let nextRoute = nextState.root;
  while (nextRoute.firstChild) {
    nextRoute = nextRoute.firstChild;
  }
  if (!nextState.url.includes("/file-manager")) {
    return true;
  }
  if (nextState.url.includes("/details")) {
    return true;
  }
  return component.closeDrawer().then(() => true);
};
var file_manager_routes_default = [
  {
    path: "",
    component: FileManagerComponent,
    children: [
      {
        path: "folders/:folderId",
        component: FileManagerListComponent,
        resolve: {
          item: folderResolver
        },
        children: [
          {
            path: "details/:id",
            component: FileManagerDetailsComponent,
            resolve: {
              item: itemResolver
            },
            canDeactivate: [canDeactivateFileManagerDetails]
          }
        ]
      },
      {
        path: "",
        component: FileManagerListComponent,
        resolve: {
          items: () => inject(FileManagerService).getItems()
        },
        children: [
          {
            path: "details/:id",
            component: FileManagerDetailsComponent,
            resolve: {
              item: itemResolver
            },
            canDeactivate: [canDeactivateFileManagerDetails]
          }
        ]
      }
    ]
  }
];
export {
  file_manager_routes_default as default
};
//# sourceMappingURL=chunk-SSYRP3Q4.js.map
