import {
  DateTime
} from "./chunk-BY5HPQZY.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5AHQJJ5Y.js";
import "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import {
  RouterLink
} from "./chunk-WTEW5YKI.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  AsyncPipe,
  DatePipe,
  TitleCasePipe
} from "./chunk-M6AYR6A2.js";
import {
  BehaviorSubject,
  inject,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/pages/activities/activities.service.ts
var ActivitiesService = class _ActivitiesService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._activities = new BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for activities
   */
  get activities() {
    return this._activities.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get activities
   */
  getActivities() {
    return this._httpClient.get("api/pages/activities").pipe(tap((response) => {
      this._activities.next(response);
    }));
  }
  static {
    this.\u0275fac = function ActivitiesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActivitiesService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ActivitiesService, factory: _ActivitiesService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/pages/activities/activities.component.ts
function ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 6)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "titlecase");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activity_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, ctx_r1.getRelativeFormat(activity_r1.date)), " ");
  }
}
function ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 7);
  }
}
function ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-icon", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activity_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", activity_r1.icon);
  }
}
function ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const activity_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", activity_r1.image, \u0275\u0275sanitizeUrl)("alt", "Activity image");
  }
}
function ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
  if (rf & 2) {
    const activity_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerHTML", activity_r1.description, \u0275\u0275sanitizeHtml);
  }
}
function ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activity_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("routerLink", activity_r1.link);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", activity_r1.linkedContent, " ");
  }
}
function ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_12_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const activity_r1 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("href", activity_r1.link, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", activity_r1.linkedContent, " ");
  }
}
function ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1, " \u2022 ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_12_Conditional_2_Template, 2, 2, "a", 19)(3, ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_12_Conditional_3_Template, 2, 2, "a", 20);
  }
  if (rf & 2) {
    const activity_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(activity_r1.useRouter ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!activity_r1.useRouter ? 3 : -1);
  }
}
function ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
  if (rf & 2) {
    const activity_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("innerHTML", activity_r1.extraContent, \u0275\u0275sanitizeHtml);
  }
}
function ActivitiesComponent_Conditional_7_Conditional_0_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_0_Template, 4, 3, "li", 6);
    \u0275\u0275elementStart(1, "li", 6);
    \u0275\u0275template(2, ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_2_Template, 1, 0, "div", 7);
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275template(4, ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_4_Template, 2, 1, "div", 9)(5, ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_5_Template, 1, 2, "img", 10);
    \u0275\u0275elementStart(6, "div", 11);
    \u0275\u0275template(7, ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_7_Template, 1, 1, "div", 12);
    \u0275\u0275elementStart(8, "div", 13)(9, "div", 14);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_12_Template, 4, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ActivitiesComponent_Conditional_7_Conditional_0_For_3_Conditional_13_Template, 1, 1, "div", 15);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const activity_r1 = ctx.$implicit;
    const \u0275$index_20_r3 = ctx.$index;
    const \u0275$count_20_r4 = ctx.$count;
    const activities_r5 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(\u0275$index_20_r3 === 0 || !ctx_r1.isSameDay(activity_r1.date, activities_r5[\u0275$index_20_r3 - 1].date) ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(\u0275$index_20_r3 === \u0275$count_20_r4 - 1) && ctx_r1.isSameDay(activity_r1.date, activities_r5[\u0275$index_20_r3 + 1].date) ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(activity_r1.icon && !activity_r1.image ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(activity_r1.image ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(activity_r1.description ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 8, activity_r1.date, "MMM dd, h:mm a"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(activity_r1.linkedContent ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(activity_r1.extraContent ? 13 : -1);
  }
}
function ActivitiesComponent_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "ol");
    \u0275\u0275repeaterCreate(2, ActivitiesComponent_Conditional_7_Conditional_0_For_3_Template, 14, 11, null, null, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const activities_r5 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(activities_r5);
  }
}
function ActivitiesComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " There are is activity at the moment... ");
  }
}
function ActivitiesComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ActivitiesComponent_Conditional_7_Conditional_0_Template, 4, 0, "div", 5)(1, ActivitiesComponent_Conditional_7_Conditional_1_Template, 1, 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length ? 0 : 1);
  }
}
function ActivitiesComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Loading... ");
  }
}
var ActivitiesComponent = class _ActivitiesComponent {
  /**
   * Constructor
   */
  constructor(_activityService) {
    this._activityService = _activityService;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.activities$ = this._activityService.activities;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Returns whether the given dates are different days
   *
   * @param current
   * @param compare
   */
  isSameDay(current, compare) {
    return DateTime.fromISO(current).hasSame(DateTime.fromISO(compare), "day");
  }
  /**
   * Get the relative format of the given date
   *
   * @param date
   */
  getRelativeFormat(date) {
    return DateTime.fromISO(date).toRelativeCalendar();
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
    this.\u0275fac = function ActivitiesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ActivitiesComponent)(\u0275\u0275directiveInject(ActivitiesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ActivitiesComponent, selectors: [["activity"]], decls: 10, vars: 3, consts: [[1, "relative", "flex", "min-w-0", "flex-auto", "flex-col", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "px-6", "py-10", "sm:px-16", "sm:pb-20", "sm:pt-18"], [1, "w-full", "max-w-3xl"], [1, "text-4xl", "font-extrabold", "leading-none", "tracking-tight"], [1, "text-secondary", "mt-1.5", "text-lg"], [1, "mt-8"], [1, "relative", "flex", "py-7"], [1, "absolute", "left-5", "top-7", "-ml-px", "h-full", "w-0.5", "bg-gray-300", "dark:bg-gray-600"], [1, "relative", "flex", "flex-auto"], [1, "mr-4", "flex", "h-10", "w-10", "shrink-0", "items-center", "justify-center", "rounded-full", "bg-gray-400"], [1, "mr-4", "h-10", "w-10", "shrink-0", "overflow-hidden", "rounded-full", "object-cover", "object-center", 3, "src", "alt"], [1, "flex", "flex-auto", "flex-col", "items-start"], [3, "innerHTML"], [1, "mt-2", "flex", "flex-col", "text-md", "leading-5", "sm:mt-1", "sm:flex-row", "sm:items-center", "sm:space-x-2"], [1, "text-secondary"], [1, "mt-4", "rounded-lg", "bg-gray-200", "px-5", "py-4", "dark:bg-gray-800", 3, "innerHTML"], [1, "relative", "rounded-full", "bg-primary", "px-8", "py-2", "text-md", "font-medium", "leading-5", "text-on-primary"], [1, "text-white", "icon-size-5", 3, "svgIcon"], [1, "hidden", "sm:block"], [1, "cursor-pointer", "text-primary", 3, "routerLink"], ["target", "_blank", 1, "cursor-pointer", "text-primary", 3, "href"]], template: function ActivitiesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, " All Activities ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275text(6, " Application wide activities are listed here as individual items, starting with the most recent. ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, ActivitiesComponent_Conditional_7_Template, 2, 1);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275template(9, ActivitiesComponent_Conditional_9_Template, 1, 0);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(7);
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(8, 1, ctx.activities$)) ? 7 : 9, tmp_0_0);
      }
    }, dependencies: [MatIconModule, MatIcon, RouterLink, AsyncPipe, TitleCasePipe, DatePipe], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ActivitiesComponent, { className: "ActivitiesComponent", filePath: "src/app/modules/admin/pages/activities/activities.component.ts", lineNumber: 22 });
})();

// src/app/modules/admin/pages/activities/activities.routes.ts
var activities_routes_default = [
  {
    path: "",
    component: ActivitiesComponent,
    resolve: {
      activities: () => inject(ActivitiesService).getActivities()
    }
  }
];
export {
  activities_routes_default as default
};
//# sourceMappingURL=chunk-RZDNT3KD.js.map
