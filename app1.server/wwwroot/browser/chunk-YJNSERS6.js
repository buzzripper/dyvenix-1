import {
  FuseHighlightComponent
} from "./chunk-6QCSQUVR.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-5KZHZBIW.js";
import "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-GIY2YYWB.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel
} from "./chunk-2W4O77WS.js";
import "./chunk-BNTOCQMY.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-J5XV3GIF.js";
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
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  AsyncPipe,
  NgClass
} from "./chunk-M6AYR6A2.js";
import {
  BehaviorSubject,
  Subject,
  combineLatest,
  inject,
  map,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4ASYWLFB.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/admin/ui/icons/icons.service.ts
var IconsService = class _IconsService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._icons = new BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for icons
   */
  get icons() {
    return this._icons.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get icons
   *
   * @param url
   */
  getIcons(url) {
    url = "api" + url;
    return this._httpClient.get(url).pipe(tap((response) => {
      this._icons.next(response);
    }));
  }
  static {
    this.\u0275fac = function IconsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IconsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _IconsService, factory: _IconsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/ui/icons/icons.component.ts
function IconsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h1");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx.name);
  }
}
function IconsComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "textarea", 12);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("code", '<mat-icon svgIcon="' + ctx_r0.calcSvgIconAttr() + '"></mat-icon>');
  }
}
function IconsComponent_Conditional_47_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275listener("click", function IconsComponent_Conditional_47_For_1_Template_div_click_0_listener() {
      const icon_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const icons_r4 = \u0275\u0275nextContext();
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectIcon(icons_r4.namespace, icon_r3));
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275element(2, "mat-icon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const icon_r3 = ctx.$implicit;
    const icons_r4 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("border-primary", ctx_r0.selectedIcon[1] === icon_r3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", ctx_r0.iconSize)("svgIcon", icons_r4.namespace + ":" + icon_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", icon_r3, " ");
  }
}
function IconsComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, IconsComponent_Conditional_47_For_1_Template, 5, 5, "div", 20, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(ctx.list);
  }
}
var IconsComponent = class _IconsComponent {
  /**
   * Constructor
   */
  constructor(_iconsService) {
    this._iconsService = _iconsService;
    this.filterValue$ = new BehaviorSubject("");
    this.iconSize = "icon-size-8";
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.icons$ = this._iconsService.icons;
    this._iconsService.icons.pipe(takeUntil(this._unsubscribeAll)).subscribe((icons) => {
      this.iconSize = icons.grid;
      this.selectedIcon = [icons.namespace, icons.list[0]];
    });
    this.filteredIcons$ = combineLatest([
      this.icons$,
      this.filterValue$
    ]).pipe(map(([icons, filterValue]) => {
      const filteredIcons = icons.list.filter((icon) => icon.toLowerCase().includes(filterValue.toLowerCase()));
      return __spreadProps(__spreadValues({}, icons), {
        list: filteredIcons
      });
    }));
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
   * Filter icons
   *
   * @param event
   */
  filterIcons(event) {
    this.filterValue$.next(event.target.value);
  }
  /**
   * Select an icon
   *
   * @param namespace
   * @param icon
   */
  selectIcon(namespace, icon) {
    this.selectedIcon = [namespace, icon];
  }
  /**
   * Returns the selected icon's svgIcon
   * to use in mat-icon component
   */
  calcSvgIconAttr() {
    if (!this.selectedIcon) {
      return "";
    }
    if (this.selectedIcon[0] === "") {
      return this.selectedIcon[1];
    }
    return this.selectedIcon.join(":");
  }
  static {
    this.\u0275fac = function IconsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IconsComponent)(\u0275\u0275directiveInject(IconsService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IconsComponent, selectors: [["icons"]], decls: 49, vars: 19, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "prose", "prose-sm", "max-w-5xl"], ["fuse-highlight", "", "lang", "html", 3, "code"], [1, "xs:flex-col", "my-6", "flex"], [1, "flex-auto"], ["matInput", "", 3, "input"], [1, "xs:ml-0", "ml-8", "min-w-40"], [3, "ngModelChange", "ngModel"], [3, "value"], [1, "-mx-4", "flex", "flex-wrap"], [1, "bg-card", "m-4", "flex", "max-h-30", "min-h-30", "min-w-36", "max-w-36", "cursor-pointer", "flex-col", "items-center", "justify-center", "rounded", "border-2", "p-4", 3, "border-primary"], [1, "bg-card", "m-4", "flex", "max-h-30", "min-h-30", "min-w-36", "max-w-36", "cursor-pointer", "flex-col", "items-center", "justify-center", "rounded", "border-2", "p-4", 3, "click"], [1, "mb-3", "flex", "items-center", "justify-center"], [3, "ngClass", "svgIcon"], [1, "text-secondary", "break-all", "text-center", "text-sm"]], template: function IconsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "User Interface");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Icons");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 8)(12, "h2", 9);
        \u0275\u0275template(13, IconsComponent_Conditional_13_Template, 2, 1, "h1");
        \u0275\u0275pipe(14, "async");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 10)(16, "div", 11)(17, "h2");
        \u0275\u0275text(18, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275template(19, IconsComponent_Conditional_19_Template, 1, 1, "textarea", 12);
        \u0275\u0275pipe(20, "async");
        \u0275\u0275elementStart(21, "h2");
        \u0275\u0275text(22, "Icons");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 13)(24, "mat-form-field", 14)(25, "mat-label");
        \u0275\u0275text(26, "Search an icon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "input", 15);
        \u0275\u0275listener("input", function IconsComponent_Template_input_input_27_listener($event) {
          return ctx.filterIcons($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "mat-form-field", 16)(29, "mat-label");
        \u0275\u0275text(30, "Icon size");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "mat-select", 17);
        \u0275\u0275twoWayListener("ngModelChange", function IconsComponent_Template_mat_select_ngModelChange_31_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.iconSize, $event) || (ctx.iconSize = $event);
          return $event;
        });
        \u0275\u0275elementStart(32, "mat-option", 18);
        \u0275\u0275text(33, "16");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "mat-option", 18);
        \u0275\u0275text(35, "20");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "mat-option", 18);
        \u0275\u0275text(37, "24");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-option", 18);
        \u0275\u0275text(39, "32");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-option", 18);
        \u0275\u0275text(41, "40");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 18);
        \u0275\u0275text(43, "48");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-option", 18);
        \u0275\u0275text(45, "64");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(46, "div", 19);
        \u0275\u0275template(47, IconsComponent_Conditional_47_Template, 2, 0);
        \u0275\u0275pipe(48, "async");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        let tmp_12_0;
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(5);
        \u0275\u0275conditional((tmp_1_0 = \u0275\u0275pipeBind1(14, 13, ctx.icons$)) ? 13 : -1, tmp_1_0);
        \u0275\u0275advance(6);
        \u0275\u0275conditional((tmp_2_0 = \u0275\u0275pipeBind1(20, 15, ctx.filteredIcons$)) ? 19 : -1, tmp_2_0);
        \u0275\u0275advance(8);
        \u0275\u0275attribute("autocomplete", "off");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.iconSize);
        \u0275\u0275advance();
        \u0275\u0275property("value", "icon-size-4");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "icon-size-5");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "icon-size-6");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "icon-size-8");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "icon-size-10");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "icon-size-12");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "icon-size-16");
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_12_0 = \u0275\u0275pipeBind1(48, 17, ctx.filteredIcons$)) ? 47 : -1, tmp_12_0);
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      FuseHighlightComponent,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatOptionModule,
      NgClass,
      AsyncPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IconsComponent, { className: "IconsComponent", filePath: "src/app/modules/admin/ui/icons/icons.component.ts", lineNumber: 37 });
})();

// src/app/modules/admin/ui/icons/icons.routes.ts
var icons_routes_default = [
  {
    // Redirect /icons to /icons/material-twotone
    path: "",
    pathMatch: "full",
    redirectTo: "material-twotone"
  },
  {
    path: "**",
    component: IconsComponent,
    resolve: {
      icons: (route, state) => inject(IconsService).getIcons(state.url)
    }
  }
];
export {
  icons_routes_default as default
};
//# sourceMappingURL=chunk-YJNSERS6.js.map
