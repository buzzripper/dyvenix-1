import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-B6LWBRMU.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-BOL35CP3.js";
import {
  merge_default
} from "./chunk-YHH4B3V4.js";
import {
  ScrollStrategyOptions
} from "./chunk-XRKJUGQI.js";
import {
  FuseUtilsService
} from "./chunk-LWCQAMDH.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5AHQJJ5Y.js";
import {
  Platform,
  coerceBooleanProperty
} from "./chunk-EWZPTUTP.js";
import {
  fuseAnimations
} from "./chunk-HKG3E5RP.js";
import {
  AnimationBuilder,
  animate,
  style
} from "./chunk-WH7F4HUX.js";
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive
} from "./chunk-WTEW5YKI.js";
import {
  DOCUMENT,
  NgClass,
  NgTemplateOutlet
} from "./chunk-M6AYR6A2.js";
import {
  ChangeDetectorRef,
  ElementRef,
  EventEmitter,
  Renderer2,
  ReplaySubject,
  Subject,
  debounceTime,
  delay,
  filter,
  fromEvent,
  inject,
  merge,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import {
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/@fuse/components/navigation/navigation.service.ts
var FuseNavigationService = class _FuseNavigationService {
  constructor() {
    this._componentRegistry = /* @__PURE__ */ new Map();
    this._navigationStore = /* @__PURE__ */ new Map();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register navigation component
   *
   * @param name
   * @param component
   */
  registerComponent(name, component) {
    this._componentRegistry.set(name, component);
  }
  /**
   * Deregister navigation component
   *
   * @param name
   */
  deregisterComponent(name) {
    this._componentRegistry.delete(name);
  }
  /**
   * Get navigation component from the registry
   *
   * @param name
   */
  getComponent(name) {
    return this._componentRegistry.get(name);
  }
  /**
   * Store the given navigation with the given key
   *
   * @param key
   * @param navigation
   */
  storeNavigation(key, navigation) {
    this._navigationStore.set(key, navigation);
  }
  /**
   * Get navigation from storage by key
   *
   * @param key
   */
  getNavigation(key) {
    return this._navigationStore.get(key) ?? [];
  }
  /**
   * Delete the navigation from the storage
   *
   * @param key
   */
  deleteNavigation(key) {
    if (!this._navigationStore.has(key)) {
      console.warn(`Navigation with the key '${key}' does not exist in the store.`);
    }
    this._navigationStore.delete(key);
  }
  /**
   * Utility function that returns a flattened
   * version of the given navigation array
   *
   * @param navigation
   * @param flatNavigation
   */
  getFlatNavigation(navigation, flatNavigation = []) {
    for (const item of navigation) {
      if (item.type === "basic") {
        flatNavigation.push(item);
        continue;
      }
      if (item.type === "aside" || item.type === "collapsable" || item.type === "group") {
        if (item.children) {
          this.getFlatNavigation(item.children, flatNavigation);
        }
      }
    }
    return flatNavigation;
  }
  /**
   * Utility function that returns the item
   * with the given id from given navigation
   *
   * @param id
   * @param navigation
   */
  getItem(id, navigation) {
    for (const item of navigation) {
      if (item.id === id) {
        return item;
      }
      if (item.children) {
        const childItem = this.getItem(id, item.children);
        if (childItem) {
          return childItem;
        }
      }
    }
    return null;
  }
  /**
   * Utility function that returns the item's parent
   * with the given id from given navigation
   *
   * @param id
   * @param navigation
   * @param parent
   */
  getItemParent(id, navigation, parent) {
    for (const item of navigation) {
      if (item.id === id) {
        return parent;
      }
      if (item.children) {
        const childItem = this.getItemParent(id, item.children, item);
        if (childItem) {
          return childItem;
        }
      }
    }
    return null;
  }
  static {
    this.\u0275fac = function FuseNavigationService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseNavigationService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuseNavigationService, factory: _FuseNavigationService.\u0275fac, providedIn: "root" });
  }
};

// src/@fuse/components/navigation/vertical/components/basic/basic.component.ts
var _c0 = (a0) => ({ "fuse-vertical-navigation-item-active-forced": a0 });
var _c1 = (a0) => [a0];
function FuseVerticalNavigationBasicItemComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 2);
    \u0275\u0275template(1, FuseVerticalNavigationBasicItemComponent_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c0, ctx_r0.item.active))("routerLink", \u0275\u0275pureFunction1(12, _c1, ctx_r0.item.link))("fragment", (tmp_4_0 = ctx_r0.item.fragment) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : null)("preserveFragment", (tmp_5_0 = ctx_r0.item.preserveFragment) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false)("queryParams", (tmp_6_0 = ctx_r0.item.queryParams) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : null)("queryParamsHandling", (tmp_7_0 = ctx_r0.item.queryParamsHandling) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : null)("routerLinkActive", "fuse-vertical-navigation-item-active")("routerLinkActiveOptions", ctx_r0.isActiveMatchOptions)("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275template(1, FuseVerticalNavigationBasicItemComponent_Conditional_2_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("href", ctx_r0.item.link, \u0275\u0275sanitizeUrl)("target", ctx_r0.item.target || "_self")("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275listener("click", function FuseVerticalNavigationBasicItemComponent_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.item.function(ctx_r0.item));
    });
    \u0275\u0275template(1, FuseVerticalNavigationBasicItemComponent_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c0, ctx_r0.item.active))("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275listener("click", function FuseVerticalNavigationBasicItemComponent_Conditional_4_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.item.function(ctx_r0.item));
    });
    \u0275\u0275template(1, FuseVerticalNavigationBasicItemComponent_Conditional_4_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c0, ctx_r0.item.active))("routerLink", \u0275\u0275pureFunction1(12, _c1, ctx_r0.item.link))("fragment", (tmp_4_0 = ctx_r0.item.fragment) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : null)("preserveFragment", (tmp_5_0 = ctx_r0.item.preserveFragment) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false)("queryParams", (tmp_6_0 = ctx_r0.item.queryParams) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : null)("queryParamsHandling", (tmp_7_0 = ctx_r0.item.queryParamsHandling) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : null)("routerLinkActive", "fuse-vertical-navigation-item-active")("routerLinkActiveOptions", ctx_r0.isActiveMatchOptions)("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275listener("click", function FuseVerticalNavigationBasicItemComponent_Conditional_5_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.item.function(ctx_r0.item));
    });
    \u0275\u0275template(1, FuseVerticalNavigationBasicItemComponent_Conditional_5_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("href", ctx_r0.item.link, \u0275\u0275sanitizeUrl)("target", ctx_r0.item.target || "_self")("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, FuseVerticalNavigationBasicItemComponent_Conditional_6_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c0, ctx_r0.item.active))("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseVerticalNavigationBasicItemComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275template(1, FuseVerticalNavigationBasicItemComponent_Conditional_7_ng_container_1_Template, 1, 0, "ng-container", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseVerticalNavigationBasicItemComponent_ng_template_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.item.classes == null ? null : ctx_r0.item.classes.icon)("svgIcon", ctx_r0.item.icon);
  }
}
function FuseVerticalNavigationBasicItemComponent_ng_template_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "span", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.classes == null ? null : ctx_r0.item.classes.subtitle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.subtitle, " ");
  }
}
function FuseVerticalNavigationBasicItemComponent_ng_template_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.badge.classes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.badge.title, " ");
  }
}
function FuseVerticalNavigationBasicItemComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseVerticalNavigationBasicItemComponent_ng_template_8_Conditional_0_Template, 1, 2, "mat-icon", 10);
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "span", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, FuseVerticalNavigationBasicItemComponent_ng_template_8_Conditional_5_Template, 3, 2, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FuseVerticalNavigationBasicItemComponent_ng_template_8_Conditional_6_Template, 3, 2, "div", 15);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.item.icon ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.item.classes == null ? null : ctx_r0.item.classes.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.subtitle ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.badge ? 6 : -1);
  }
}
var FuseVerticalNavigationBasicItemComponent = class _FuseVerticalNavigationBasicItemComponent {
  constructor() {
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._fuseNavigationService = inject(FuseNavigationService);
    this._fuseUtilsService = inject(FuseUtilsService);
    this.isActiveMatchOptions = this._fuseUtilsService.subsetMatchOptions;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.isActiveMatchOptions = this.item.isActiveMatchOptions ?? this.item.exactMatch ? this._fuseUtilsService.exactMatchOptions : this._fuseUtilsService.subsetMatchOptions;
    this._fuseVerticalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
    this._changeDetectorRef.markForCheck();
    this._fuseVerticalNavigationComponent.onRefreshed.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
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
  static {
    this.\u0275fac = function FuseVerticalNavigationBasicItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseVerticalNavigationBasicItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseVerticalNavigationBasicItemComponent, selectors: [["fuse-vertical-navigation-basic-item"]], inputs: { item: "item", name: "name" }, decls: 10, vars: 10, consts: [["itemTemplate", ""], [1, "fuse-vertical-navigation-item-wrapper", 3, "ngClass"], [1, "fuse-vertical-navigation-item", 3, "ngClass", "routerLink", "fragment", "preserveFragment", "queryParams", "queryParamsHandling", "routerLinkActive", "routerLinkActiveOptions", "matTooltip"], [1, "fuse-vertical-navigation-item", 3, "href", "target", "matTooltip"], [1, "fuse-vertical-navigation-item", 3, "ngClass", "matTooltip"], [1, "fuse-vertical-navigation-item", "fuse-vertical-navigation-item-disabled", 3, "matTooltip"], [4, "ngTemplateOutlet"], [1, "fuse-vertical-navigation-item", 3, "click", "ngClass", "matTooltip"], [1, "fuse-vertical-navigation-item", 3, "click", "ngClass", "routerLink", "fragment", "preserveFragment", "queryParams", "queryParamsHandling", "routerLinkActive", "routerLinkActiveOptions", "matTooltip"], [1, "fuse-vertical-navigation-item", 3, "click", "href", "target", "matTooltip"], [1, "fuse-vertical-navigation-item-icon", 3, "ngClass", "svgIcon"], [1, "fuse-vertical-navigation-item-title-wrapper"], [1, "fuse-vertical-navigation-item-title"], [3, "ngClass"], [1, "fuse-vertical-navigation-item-subtitle"], [1, "fuse-vertical-navigation-item-badge"], [1, "fuse-vertical-navigation-item-badge-content", 3, "ngClass"]], template: function FuseVerticalNavigationBasicItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, FuseVerticalNavigationBasicItemComponent_Conditional_1_Template, 2, 14, "a", 2)(2, FuseVerticalNavigationBasicItemComponent_Conditional_2_Template, 2, 4, "a", 3)(3, FuseVerticalNavigationBasicItemComponent_Conditional_3_Template, 2, 5, "div", 4)(4, FuseVerticalNavigationBasicItemComponent_Conditional_4_Template, 2, 14, "a", 2)(5, FuseVerticalNavigationBasicItemComponent_Conditional_5_Template, 2, 4, "a", 3)(6, FuseVerticalNavigationBasicItemComponent_Conditional_6_Template, 2, 5, "div", 4)(7, FuseVerticalNavigationBasicItemComponent_Conditional_7_Template, 2, 2, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, FuseVerticalNavigationBasicItemComponent_ng_template_8_Template, 7, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275classProp("fuse-vertical-navigation-item-has-subtitle", !!ctx.item.subtitle);
        \u0275\u0275property("ngClass", ctx.item.classes == null ? null : ctx.item.classes.wrapper);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.link && !ctx.item.externalLink && !ctx.item.function && !ctx.item.disabled ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.link && ctx.item.externalLink && !ctx.item.function && !ctx.item.disabled ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.item.link && ctx.item.function && !ctx.item.disabled ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.link && !ctx.item.externalLink && ctx.item.function && !ctx.item.disabled ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.link && ctx.item.externalLink && ctx.item.function && !ctx.item.disabled ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.item.link && !ctx.item.function && !ctx.item.disabled ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.disabled ? 7 : -1);
      }
    }, dependencies: [
      NgClass,
      RouterLink,
      RouterLinkActive,
      MatTooltipModule,
      MatTooltip,
      NgTemplateOutlet,
      MatIconModule,
      MatIcon
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseVerticalNavigationBasicItemComponent, { className: "FuseVerticalNavigationBasicItemComponent", filePath: "src/@fuse/components/navigation/vertical/components/basic/basic.component.ts", lineNumber: 37 });
})();

// src/@fuse/components/navigation/vertical/components/divider/divider.component.ts
var FuseVerticalNavigationDividerItemComponent = class _FuseVerticalNavigationDividerItemComponent {
  constructor() {
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._fuseNavigationService = inject(FuseNavigationService);
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._fuseVerticalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
    this._fuseVerticalNavigationComponent.onRefreshed.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
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
  static {
    this.\u0275fac = function FuseVerticalNavigationDividerItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseVerticalNavigationDividerItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseVerticalNavigationDividerItemComponent, selectors: [["fuse-vertical-navigation-divider-item"]], inputs: { item: "item", name: "name" }, decls: 1, vars: 1, consts: [[1, "fuse-vertical-navigation-item-wrapper", "divider", 3, "ngClass"]], template: function FuseVerticalNavigationDividerItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.item.classes == null ? null : ctx.item.classes.wrapper);
      }
    }, dependencies: [NgClass], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseVerticalNavigationDividerItemComponent, { className: "FuseVerticalNavigationDividerItemComponent", filePath: "src/@fuse/components/navigation/vertical/components/divider/divider.component.ts", lineNumber: 22 });
})();

// src/@fuse/components/navigation/vertical/components/spacer/spacer.component.ts
var FuseVerticalNavigationSpacerItemComponent = class _FuseVerticalNavigationSpacerItemComponent {
  constructor() {
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._fuseNavigationService = inject(FuseNavigationService);
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._fuseVerticalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
    this._fuseVerticalNavigationComponent.onRefreshed.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
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
  static {
    this.\u0275fac = function FuseVerticalNavigationSpacerItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseVerticalNavigationSpacerItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseVerticalNavigationSpacerItemComponent, selectors: [["fuse-vertical-navigation-spacer-item"]], inputs: { item: "item", name: "name" }, decls: 1, vars: 1, consts: [[1, "fuse-vertical-navigation-item-wrapper", 3, "ngClass"]], template: function FuseVerticalNavigationSpacerItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.item.classes == null ? null : ctx.item.classes.wrapper);
      }
    }, dependencies: [NgClass], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseVerticalNavigationSpacerItemComponent, { className: "FuseVerticalNavigationSpacerItemComponent", filePath: "src/@fuse/components/navigation/vertical/components/spacer/spacer.component.ts", lineNumber: 22 });
})();

// src/@fuse/components/navigation/vertical/components/group/group.component.ts
function FuseVerticalNavigationGroupItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.classes == null ? null : ctx_r0.item.classes.icon)("svgIcon", ctx_r0.item.icon);
  }
}
function FuseVerticalNavigationGroupItemComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.classes == null ? null : ctx_r0.item.classes.subtitle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.subtitle, " ");
  }
}
function FuseVerticalNavigationGroupItemComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.badge.classes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.badge.title, " ");
  }
}
function FuseVerticalNavigationGroupItemComponent_For_10_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-basic-item", 9);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name);
  }
}
function FuseVerticalNavigationGroupItemComponent_For_10_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-collapsable-item", 10);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name)("autoCollapse", ctx_r0.autoCollapse);
  }
}
function FuseVerticalNavigationGroupItemComponent_For_10_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-divider-item", 9);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name);
  }
}
function FuseVerticalNavigationGroupItemComponent_For_10_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-group-item", 9);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name);
  }
}
function FuseVerticalNavigationGroupItemComponent_For_10_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-spacer-item", 9);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name);
  }
}
function FuseVerticalNavigationGroupItemComponent_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseVerticalNavigationGroupItemComponent_For_10_Conditional_0_Conditional_0_Template, 1, 2, "fuse-vertical-navigation-basic-item", 9)(1, FuseVerticalNavigationGroupItemComponent_For_10_Conditional_0_Conditional_1_Template, 1, 3, "fuse-vertical-navigation-collapsable-item", 10)(2, FuseVerticalNavigationGroupItemComponent_For_10_Conditional_0_Conditional_2_Template, 1, 2, "fuse-vertical-navigation-divider-item", 9)(3, FuseVerticalNavigationGroupItemComponent_For_10_Conditional_0_Conditional_3_Template, 1, 2, "fuse-vertical-navigation-group-item", 9)(4, FuseVerticalNavigationGroupItemComponent_For_10_Conditional_0_Conditional_4_Template, 1, 2, "fuse-vertical-navigation-spacer-item", 9);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(item_r2.type === "basic" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "collapsable" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "divider" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "group" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "spacer" ? 4 : -1);
  }
}
function FuseVerticalNavigationGroupItemComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseVerticalNavigationGroupItemComponent_For_10_Conditional_0_Template, 5, 5);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275conditional(item_r2.hidden && !item_r2.hidden(item_r2) || !item_r2.hidden ? 0 : -1);
  }
}
var FuseVerticalNavigationGroupItemComponent = class _FuseVerticalNavigationGroupItemComponent {
  constructor() {
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._fuseNavigationService = inject(FuseNavigationService);
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._fuseVerticalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
    this._fuseVerticalNavigationComponent.onRefreshed.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
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
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  static {
    this.\u0275fac = function FuseVerticalNavigationGroupItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseVerticalNavigationGroupItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseVerticalNavigationGroupItemComponent, selectors: [["fuse-vertical-navigation-group-item"]], inputs: { autoCollapse: "autoCollapse", item: "item", name: "name" }, decls: 11, vars: 8, consts: [[1, "fuse-vertical-navigation-item-wrapper", 3, "ngClass"], [1, "fuse-vertical-navigation-item"], [1, "fuse-vertical-navigation-item-icon", 3, "ngClass", "svgIcon"], [1, "fuse-vertical-navigation-item-title-wrapper"], [1, "fuse-vertical-navigation-item-title"], [3, "ngClass"], [1, "fuse-vertical-navigation-item-subtitle"], [1, "fuse-vertical-navigation-item-badge"], [1, "fuse-vertical-navigation-item-badge-content", 3, "ngClass"], [3, "item", "name"], [3, "item", "name", "autoCollapse"]], template: function FuseVerticalNavigationGroupItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, FuseVerticalNavigationGroupItemComponent_Conditional_2_Template, 1, 2, "mat-icon", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, FuseVerticalNavigationGroupItemComponent_Conditional_7_Template, 3, 2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, FuseVerticalNavigationGroupItemComponent_Conditional_8_Template, 3, 2, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275repeaterCreate(9, FuseVerticalNavigationGroupItemComponent_For_10_Template, 1, 1, null, null, ctx.trackByFn, true);
      }
      if (rf & 2) {
        \u0275\u0275classProp("fuse-vertical-navigation-item-has-subtitle", !!ctx.item.subtitle);
        \u0275\u0275property("ngClass", ctx.item.classes == null ? null : ctx.item.classes.wrapper);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.item.icon ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.item.classes == null ? null : ctx.item.classes.title);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.item.title, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.subtitle ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.badge ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.item.children);
      }
    }, dependencies: () => [
      _FuseVerticalNavigationGroupItemComponent,
      NgClass,
      MatIconModule,
      MatIcon,
      FuseVerticalNavigationBasicItemComponent,
      FuseVerticalNavigationCollapsableItemComponent,
      FuseVerticalNavigationDividerItemComponent,
      FuseVerticalNavigationSpacerItemComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseVerticalNavigationGroupItemComponent, { className: "FuseVerticalNavigationGroupItemComponent", filePath: "src/@fuse/components/navigation/vertical/components/group/group.component.ts", lineNumber: 37 });
})();

// src/@fuse/components/navigation/vertical/components/collapsable/collapsable.component.ts
var _c02 = (a0) => ({ "fuse-vertical-navigation-item-disabled": a0 });
function FuseVerticalNavigationCollapsableItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.classes == null ? null : ctx_r0.item.classes.icon)("svgIcon", ctx_r0.item.icon);
  }
}
function FuseVerticalNavigationCollapsableItemComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.classes == null ? null : ctx_r0.item.classes.subtitle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.subtitle, " ");
  }
}
function FuseVerticalNavigationCollapsableItemComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.badge.classes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.badge.title, " ");
  }
}
function FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-basic-item", 11);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name);
  }
}
function FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-collapsable-item", 12);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name)("autoCollapse", ctx_r0.autoCollapse);
  }
}
function FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-divider-item", 11);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name);
  }
}
function FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-group-item", 11);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name);
  }
}
function FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-spacer-item", 11);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name);
  }
}
function FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Conditional_0_Conditional_0_Template, 1, 2, "fuse-vertical-navigation-basic-item", 11)(1, FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Conditional_0_Conditional_1_Template, 1, 3, "fuse-vertical-navigation-collapsable-item", 12)(2, FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Conditional_0_Conditional_2_Template, 1, 2, "fuse-vertical-navigation-divider-item", 11)(3, FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Conditional_0_Conditional_3_Template, 1, 2, "fuse-vertical-navigation-group-item", 11)(4, FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Conditional_0_Conditional_4_Template, 1, 2, "fuse-vertical-navigation-spacer-item", 11);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(item_r2.type === "basic" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "collapsable" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "divider" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "group" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "spacer" ? 4 : -1);
  }
}
function FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Conditional_0_Template, 5, 5);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275conditional(item_r2.hidden && !item_r2.hidden(item_r2) || !item_r2.hidden ? 0 : -1);
  }
}
function FuseVerticalNavigationCollapsableItemComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, FuseVerticalNavigationCollapsableItemComponent_Conditional_10_For_2_Template, 1, 1, null, null, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("@expandCollapse", void 0);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.item.children);
  }
}
var FuseVerticalNavigationCollapsableItemComponent = class _FuseVerticalNavigationCollapsableItemComponent {
  constructor() {
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._router = inject(Router);
    this._fuseNavigationService = inject(FuseNavigationService);
    this.isCollapsed = true;
    this.isExpanded = false;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Host binding for component classes
   */
  get classList() {
    return {
      "fuse-vertical-navigation-item-collapsed": this.isCollapsed,
      "fuse-vertical-navigation-item-expanded": this.isExpanded
    };
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._fuseVerticalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
    if (this._hasActiveChild(this.item, this._router.url)) {
      this.expand();
    } else {
      if (this.autoCollapse) {
        this.collapse();
      }
    }
    this._fuseVerticalNavigationComponent.onCollapsableItemCollapsed.pipe(takeUntil(this._unsubscribeAll)).subscribe((collapsedItem) => {
      if (collapsedItem === null) {
        return;
      }
      if (this._isChildrenOf(collapsedItem, this.item)) {
        this.collapse();
      }
    });
    if (this.autoCollapse) {
      this._fuseVerticalNavigationComponent.onCollapsableItemExpanded.pipe(takeUntil(this._unsubscribeAll)).subscribe((expandedItem) => {
        if (expandedItem === null) {
          return;
        }
        if (this._isChildrenOf(this.item, expandedItem)) {
          return;
        }
        if (this._hasActiveChild(this.item, this._router.url)) {
          return;
        }
        if (this.item === expandedItem) {
          return;
        }
        this.collapse();
      });
    }
    this._router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this._unsubscribeAll)).subscribe((event) => {
      if (this._hasActiveChild(this.item, event.urlAfterRedirects)) {
        this.expand();
      } else {
        if (this.autoCollapse) {
          this.collapse();
        }
      }
    });
    this._fuseVerticalNavigationComponent.onRefreshed.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
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
   * Collapse
   */
  collapse() {
    if (this.item.disabled) {
      return;
    }
    if (this.isCollapsed) {
      return;
    }
    this.isCollapsed = true;
    this.isExpanded = !this.isCollapsed;
    this._changeDetectorRef.markForCheck();
    this._fuseVerticalNavigationComponent.onCollapsableItemCollapsed.next(this.item);
  }
  /**
   * Expand
   */
  expand() {
    if (this.item.disabled) {
      return;
    }
    if (!this.isCollapsed) {
      return;
    }
    this.isCollapsed = false;
    this.isExpanded = !this.isCollapsed;
    this._changeDetectorRef.markForCheck();
    this._fuseVerticalNavigationComponent.onCollapsableItemExpanded.next(this.item);
  }
  /**
   * Toggle collapsable
   */
  toggleCollapsable() {
    if (this.isCollapsed) {
      this.expand();
    } else {
      this.collapse();
    }
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
   * Check if the given item has the given url
   * in one of its children
   *
   * @param item
   * @param currentUrl
   * @private
   */
  _hasActiveChild(item, currentUrl) {
    const children = item.children;
    if (!children) {
      return false;
    }
    for (const child of children) {
      if (child.children) {
        if (this._hasActiveChild(child, currentUrl)) {
          return true;
        }
      }
      if (child.link && this._router.isActive(child.link, child.exactMatch || false)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Check if this is a children
   * of the given item
   *
   * @param parent
   * @param item
   * @private
   */
  _isChildrenOf(parent, item) {
    const children = parent.children;
    if (!children) {
      return false;
    }
    if (children.indexOf(item) > -1) {
      return true;
    }
    for (const child of children) {
      if (child.children) {
        if (this._isChildrenOf(child, item)) {
          return true;
        }
      }
    }
    return false;
  }
  static {
    this.\u0275fac = function FuseVerticalNavigationCollapsableItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseVerticalNavigationCollapsableItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseVerticalNavigationCollapsableItemComponent, selectors: [["fuse-vertical-navigation-collapsable-item"]], hostVars: 2, hostBindings: function FuseVerticalNavigationCollapsableItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.classList);
      }
    }, inputs: { autoCollapse: "autoCollapse", item: "item", name: "name" }, decls: 11, vars: 14, consts: [[1, "fuse-vertical-navigation-item-wrapper", 3, "ngClass"], [1, "fuse-vertical-navigation-item", 3, "click", "ngClass", "matTooltip"], [1, "fuse-vertical-navigation-item-icon", 3, "ngClass", "svgIcon"], [1, "fuse-vertical-navigation-item-title-wrapper"], [1, "fuse-vertical-navigation-item-title"], [3, "ngClass"], [1, "fuse-vertical-navigation-item-subtitle"], [1, "fuse-vertical-navigation-item-badge"], [1, "fuse-vertical-navigation-item-arrow", "icon-size-4", 3, "svgIcon"], [1, "fuse-vertical-navigation-item-children"], [1, "fuse-vertical-navigation-item-badge-content", 3, "ngClass"], [3, "item", "name"], [3, "item", "name", "autoCollapse"]], template: function FuseVerticalNavigationCollapsableItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275listener("click", function FuseVerticalNavigationCollapsableItemComponent_Template_div_click_1_listener() {
          return ctx.toggleCollapsable();
        });
        \u0275\u0275template(2, FuseVerticalNavigationCollapsableItemComponent_Conditional_2_Template, 1, 2, "mat-icon", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, FuseVerticalNavigationCollapsableItemComponent_Conditional_7_Template, 3, 2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, FuseVerticalNavigationCollapsableItemComponent_Conditional_8_Template, 3, 2, "div", 7);
        \u0275\u0275element(9, "mat-icon", 8);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(10, FuseVerticalNavigationCollapsableItemComponent_Conditional_10_Template, 3, 1, "div", 9);
      }
      if (rf & 2) {
        \u0275\u0275classProp("fuse-vertical-navigation-item-has-subtitle", !!ctx.item.subtitle);
        \u0275\u0275property("ngClass", ctx.item.classes == null ? null : ctx.item.classes.wrapper);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c02, ctx.item.disabled))("matTooltip", ctx.item.tooltip || "");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.icon ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.item.classes == null ? null : ctx.item.classes.title);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.item.title, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.subtitle ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.badge ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:chevron-right");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.isCollapsed ? 10 : -1);
      }
    }, dependencies: () => [
      _FuseVerticalNavigationCollapsableItemComponent,
      NgClass,
      MatTooltipModule,
      MatTooltip,
      MatIconModule,
      MatIcon,
      FuseVerticalNavigationBasicItemComponent,
      FuseVerticalNavigationDividerItemComponent,
      FuseVerticalNavigationGroupItemComponent,
      FuseVerticalNavigationSpacerItemComponent
    ], encapsulation: 2, data: { animation: fuseAnimations }, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseVerticalNavigationCollapsableItemComponent, { className: "FuseVerticalNavigationCollapsableItemComponent", filePath: "src/@fuse/components/navigation/vertical/components/collapsable/collapsable.component.ts", lineNumber: 43 });
})();

// src/@fuse/components/navigation/vertical/components/aside/aside.component.ts
var _c03 = (a0, a1, a2) => ({ "fuse-vertical-navigation-item-active": a0, "fuse-vertical-navigation-item-disabled": a1, "fuse-vertical-navigation-item-active-forced": a2 });
function FuseVerticalNavigationAsideItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", ctx_r0.item.classes == null ? null : ctx_r0.item.classes.icon)("svgIcon", ctx_r0.item.icon);
  }
}
function FuseVerticalNavigationAsideItemComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.classes == null ? null : ctx_r0.item.classes.subtitle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.subtitle, " ");
  }
}
function FuseVerticalNavigationAsideItemComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.badge.classes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.badge.title, " ");
  }
}
function FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-basic-item", 10);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name);
  }
}
function FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-collapsable-item", 11);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name)("autoCollapse", ctx_r0.autoCollapse);
  }
}
function FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-divider-item", 10);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name);
  }
}
function FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-group-item", 10);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name);
  }
}
function FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-spacer-item", 10);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r2)("name", ctx_r0.name);
  }
}
function FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Conditional_0_Conditional_0_Template, 1, 2, "fuse-vertical-navigation-basic-item", 10)(1, FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Conditional_0_Conditional_1_Template, 1, 3, "fuse-vertical-navigation-collapsable-item", 11)(2, FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Conditional_0_Conditional_2_Template, 1, 2, "fuse-vertical-navigation-divider-item", 10)(3, FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Conditional_0_Conditional_3_Template, 1, 2, "fuse-vertical-navigation-group-item", 10)(4, FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Conditional_0_Conditional_4_Template, 1, 2, "fuse-vertical-navigation-spacer-item", 10);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(item_r2.type === "basic" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "collapsable" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "divider" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "group" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "spacer" ? 4 : -1);
  }
}
function FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Conditional_0_Template, 5, 5);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275conditional(item_r2.hidden && !item_r2.hidden(item_r2) || !item_r2.hidden ? 0 : -1);
  }
}
function FuseVerticalNavigationAsideItemComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275repeaterCreate(1, FuseVerticalNavigationAsideItemComponent_Conditional_9_For_2_Template, 1, 1, null, null, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.item.children);
  }
}
var FuseVerticalNavigationAsideItemComponent = class _FuseVerticalNavigationAsideItemComponent {
  constructor() {
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._router = inject(Router);
    this._fuseNavigationService = inject(FuseNavigationService);
    this.active = false;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On changes
   *
   * @param changes
   */
  ngOnChanges(changes) {
    if ("activeItemId" in changes) {
      this._markIfActive(this._router.url);
    }
  }
  /**
   * On init
   */
  ngOnInit() {
    this._markIfActive(this._router.url);
    this._router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this._unsubscribeAll)).subscribe((event) => {
      this._markIfActive(event.urlAfterRedirects);
    });
    this._fuseVerticalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
    this._fuseVerticalNavigationComponent.onRefreshed.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
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
   * Check if the given item has the given url
   * in one of its children
   *
   * @param item
   * @param currentUrl
   * @private
   */
  _hasActiveChild(item, currentUrl) {
    const children = item.children;
    if (!children) {
      return false;
    }
    for (const child of children) {
      if (child.children) {
        if (this._hasActiveChild(child, currentUrl)) {
          return true;
        }
      }
      if (child.type !== "basic") {
        continue;
      }
      if (child.link && this._router.isActive(child.link, child.exactMatch || false)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Decide and mark if the item is active
   *
   * @private
   */
  _markIfActive(currentUrl) {
    this.active = this.activeItemId === this.item.id;
    if (this._hasActiveChild(this.item, currentUrl)) {
      this.active = true;
    }
    this._changeDetectorRef.markForCheck();
  }
  static {
    this.\u0275fac = function FuseVerticalNavigationAsideItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseVerticalNavigationAsideItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseVerticalNavigationAsideItemComponent, selectors: [["fuse-vertical-navigation-aside-item"]], inputs: { activeItemId: "activeItemId", autoCollapse: "autoCollapse", item: "item", name: "name", skipChildren: "skipChildren" }, features: [\u0275\u0275NgOnChangesFeature], decls: 10, vars: 15, consts: [[1, "fuse-vertical-navigation-item-wrapper", 3, "ngClass"], [1, "fuse-vertical-navigation-item", 3, "ngClass", "matTooltip"], [1, "fuse-vertical-navigation-item-icon", 3, "ngClass", "svgIcon"], [1, "fuse-vertical-navigation-item-title-wrapper"], [1, "fuse-vertical-navigation-item-title"], [3, "ngClass"], [1, "fuse-vertical-navigation-item-subtitle"], [1, "fuse-vertical-navigation-item-badge"], [1, "fuse-vertical-navigation-item-children"], [1, "fuse-vertical-navigation-item-badge-content", 3, "ngClass"], [3, "item", "name"], [3, "item", "name", "autoCollapse"]], template: function FuseVerticalNavigationAsideItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275template(2, FuseVerticalNavigationAsideItemComponent_Conditional_2_Template, 1, 2, "mat-icon", 2);
        \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "span", 5);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(7, FuseVerticalNavigationAsideItemComponent_Conditional_7_Template, 3, 2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, FuseVerticalNavigationAsideItemComponent_Conditional_8_Template, 3, 2, "div", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(9, FuseVerticalNavigationAsideItemComponent_Conditional_9_Template, 3, 0, "div", 8);
      }
      if (rf & 2) {
        \u0275\u0275classProp("fuse-vertical-navigation-item-has-subtitle", !!ctx.item.subtitle);
        \u0275\u0275property("ngClass", ctx.item.classes == null ? null : ctx.item.classes.wrapper);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(11, _c03, ctx.active, ctx.item.disabled, ctx.item.active))("matTooltip", ctx.item.tooltip || "");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.icon ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", ctx.item.classes == null ? null : ctx.item.classes.title);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.item.title, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.subtitle ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.badge ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.skipChildren ? 9 : -1);
      }
    }, dependencies: [
      NgClass,
      MatTooltipModule,
      MatTooltip,
      MatIconModule,
      MatIcon,
      FuseVerticalNavigationBasicItemComponent,
      FuseVerticalNavigationCollapsableItemComponent,
      FuseVerticalNavigationDividerItemComponent,
      FuseVerticalNavigationGroupItemComponent,
      FuseVerticalNavigationSpacerItemComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseVerticalNavigationAsideItemComponent, { className: "FuseVerticalNavigationAsideItemComponent", filePath: "src/@fuse/components/navigation/vertical/components/aside/aside.component.ts", lineNumber: 42 });
})();

// src/@fuse/directives/scrollbar/scrollbar.types.ts
var ScrollbarGeometry = class {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
};
var ScrollbarPosition = class {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
};

// node_modules/perfect-scrollbar/dist/perfect-scrollbar.esm.js
function get(element) {
  return getComputedStyle(element);
}
function set(element, obj) {
  for (var key in obj) {
    var val = obj[key];
    if (typeof val === "number") {
      val = val + "px";
    }
    element.style[key] = val;
  }
  return element;
}
function div(className) {
  var div2 = document.createElement("div");
  div2.className = className;
  return div2;
}
var elMatches = typeof Element !== "undefined" && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);
function matches(element, query) {
  if (!elMatches) {
    throw new Error("No element matching method supported");
  }
  return elMatches.call(element, query);
}
function remove(element) {
  if (element.remove) {
    element.remove();
  } else {
    if (element.parentNode) {
      element.parentNode.removeChild(element);
    }
  }
}
function queryChildren(element, selector) {
  return Array.prototype.filter.call(element.children, function(child) {
    return matches(child, selector);
  });
}
var cls = {
  main: "ps",
  rtl: "ps__rtl",
  element: {
    thumb: function(x) {
      return "ps__thumb-" + x;
    },
    rail: function(x) {
      return "ps__rail-" + x;
    },
    consuming: "ps__child--consume"
  },
  state: {
    focus: "ps--focus",
    clicking: "ps--clicking",
    active: function(x) {
      return "ps--active-" + x;
    },
    scrolling: function(x) {
      return "ps--scrolling-" + x;
    }
  }
};
var scrollingClassTimeout = {
  x: null,
  y: null
};
function addScrollingClass(i, x) {
  var classList = i.element.classList;
  var className = cls.state.scrolling(x);
  if (classList.contains(className)) {
    clearTimeout(scrollingClassTimeout[x]);
  } else {
    classList.add(className);
  }
}
function removeScrollingClass(i, x) {
  scrollingClassTimeout[x] = setTimeout(function() {
    return i.isAlive && i.element.classList.remove(cls.state.scrolling(x));
  }, i.settings.scrollingThreshold);
}
function setScrollingClassInstantly(i, x) {
  addScrollingClass(i, x);
  removeScrollingClass(i, x);
}
var EventElement = function EventElement2(element) {
  this.element = element;
  this.handlers = {};
};
var prototypeAccessors = {
  isEmpty: {
    configurable: true
  }
};
EventElement.prototype.bind = function bind(eventName, handler) {
  if (typeof this.handlers[eventName] === "undefined") {
    this.handlers[eventName] = [];
  }
  this.handlers[eventName].push(handler);
  this.element.addEventListener(eventName, handler, false);
};
EventElement.prototype.unbind = function unbind(eventName, target) {
  var this$1 = this;
  this.handlers[eventName] = this.handlers[eventName].filter(function(handler) {
    if (target && handler !== target) {
      return true;
    }
    this$1.element.removeEventListener(eventName, handler, false);
    return false;
  });
};
EventElement.prototype.unbindAll = function unbindAll() {
  for (var name in this.handlers) {
    this.unbind(name);
  }
};
prototypeAccessors.isEmpty.get = function() {
  var this$1 = this;
  return Object.keys(this.handlers).every(function(key) {
    return this$1.handlers[key].length === 0;
  });
};
Object.defineProperties(EventElement.prototype, prototypeAccessors);
var EventManager = function EventManager2() {
  this.eventElements = [];
};
EventManager.prototype.eventElement = function eventElement(element) {
  var ee = this.eventElements.filter(function(ee2) {
    return ee2.element === element;
  })[0];
  if (!ee) {
    ee = new EventElement(element);
    this.eventElements.push(ee);
  }
  return ee;
};
EventManager.prototype.bind = function bind2(element, eventName, handler) {
  this.eventElement(element).bind(eventName, handler);
};
EventManager.prototype.unbind = function unbind2(element, eventName, handler) {
  var ee = this.eventElement(element);
  ee.unbind(eventName, handler);
  if (ee.isEmpty) {
    this.eventElements.splice(this.eventElements.indexOf(ee), 1);
  }
};
EventManager.prototype.unbindAll = function unbindAll2() {
  this.eventElements.forEach(function(e) {
    return e.unbindAll();
  });
  this.eventElements = [];
};
EventManager.prototype.once = function once(element, eventName, handler) {
  var ee = this.eventElement(element);
  var onceHandler = function(evt) {
    ee.unbind(eventName, onceHandler);
    handler(evt);
  };
  ee.bind(eventName, onceHandler);
};
function createEvent(name) {
  if (typeof window.CustomEvent === "function") {
    return new CustomEvent(name);
  }
  var evt = document.createEvent("CustomEvent");
  evt.initCustomEvent(name, false, false, void 0);
  return evt;
}
function processScrollDiff(i, axis, diff, useScrollingClass, forceFireReachEvent) {
  if (useScrollingClass === void 0) useScrollingClass = true;
  if (forceFireReachEvent === void 0) forceFireReachEvent = false;
  var fields;
  if (axis === "top") {
    fields = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
  } else if (axis === "left") {
    fields = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"];
  } else {
    throw new Error("A proper axis should be provided");
  }
  processScrollDiff$1(i, diff, fields, useScrollingClass, forceFireReachEvent);
}
function processScrollDiff$1(i, diff, ref, useScrollingClass, forceFireReachEvent) {
  var contentHeight = ref[0];
  var containerHeight = ref[1];
  var scrollTop = ref[2];
  var y = ref[3];
  var up = ref[4];
  var down = ref[5];
  if (useScrollingClass === void 0) useScrollingClass = true;
  if (forceFireReachEvent === void 0) forceFireReachEvent = false;
  var element = i.element;
  i.reach[y] = null;
  if (element[scrollTop] < 1) {
    i.reach[y] = "start";
  }
  if (element[scrollTop] > i[contentHeight] - i[containerHeight] - 1) {
    i.reach[y] = "end";
  }
  if (diff) {
    element.dispatchEvent(createEvent("ps-scroll-" + y));
    if (diff < 0) {
      element.dispatchEvent(createEvent("ps-scroll-" + up));
    } else if (diff > 0) {
      element.dispatchEvent(createEvent("ps-scroll-" + down));
    }
    if (useScrollingClass) {
      setScrollingClassInstantly(i, y);
    }
  }
  if (i.reach[y] && (diff || forceFireReachEvent)) {
    element.dispatchEvent(createEvent("ps-" + y + "-reach-" + i.reach[y]));
  }
}
function toInt(x) {
  return parseInt(x, 10) || 0;
}
function isEditable(el) {
  return matches(el, "input,[contenteditable]") || matches(el, "select,[contenteditable]") || matches(el, "textarea,[contenteditable]") || matches(el, "button,[contenteditable]");
}
function outerWidth(element) {
  var styles = get(element);
  return toInt(styles.width) + toInt(styles.paddingLeft) + toInt(styles.paddingRight) + toInt(styles.borderLeftWidth) + toInt(styles.borderRightWidth);
}
var env = {
  isWebKit: typeof document !== "undefined" && "WebkitAppearance" in document.documentElement.style,
  supportsTouch: typeof window !== "undefined" && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
  supportsIePointer: typeof navigator !== "undefined" && navigator.msMaxTouchPoints,
  isChrome: typeof navigator !== "undefined" && /Chrome/i.test(navigator && navigator.userAgent)
};
function updateGeometry(i) {
  var element = i.element;
  var roundedScrollTop = Math.floor(element.scrollTop);
  var rect = element.getBoundingClientRect();
  i.containerWidth = Math.floor(rect.width);
  i.containerHeight = Math.floor(rect.height);
  i.contentWidth = element.scrollWidth;
  i.contentHeight = element.scrollHeight;
  if (!element.contains(i.scrollbarXRail)) {
    queryChildren(element, cls.element.rail("x")).forEach(function(el) {
      return remove(el);
    });
    element.appendChild(i.scrollbarXRail);
  }
  if (!element.contains(i.scrollbarYRail)) {
    queryChildren(element, cls.element.rail("y")).forEach(function(el) {
      return remove(el);
    });
    element.appendChild(i.scrollbarYRail);
  }
  if (!i.settings.suppressScrollX && i.containerWidth + i.settings.scrollXMarginOffset < i.contentWidth) {
    i.scrollbarXActive = true;
    i.railXWidth = i.containerWidth - i.railXMarginWidth;
    i.railXRatio = i.containerWidth / i.railXWidth;
    i.scrollbarXWidth = getThumbSize(i, toInt(i.railXWidth * i.containerWidth / i.contentWidth));
    i.scrollbarXLeft = toInt((i.negativeScrollAdjustment + element.scrollLeft) * (i.railXWidth - i.scrollbarXWidth) / (i.contentWidth - i.containerWidth));
  } else {
    i.scrollbarXActive = false;
  }
  if (!i.settings.suppressScrollY && i.containerHeight + i.settings.scrollYMarginOffset < i.contentHeight) {
    i.scrollbarYActive = true;
    i.railYHeight = i.containerHeight - i.railYMarginHeight;
    i.railYRatio = i.containerHeight / i.railYHeight;
    i.scrollbarYHeight = getThumbSize(i, toInt(i.railYHeight * i.containerHeight / i.contentHeight));
    i.scrollbarYTop = toInt(roundedScrollTop * (i.railYHeight - i.scrollbarYHeight) / (i.contentHeight - i.containerHeight));
  } else {
    i.scrollbarYActive = false;
  }
  if (i.scrollbarXLeft >= i.railXWidth - i.scrollbarXWidth) {
    i.scrollbarXLeft = i.railXWidth - i.scrollbarXWidth;
  }
  if (i.scrollbarYTop >= i.railYHeight - i.scrollbarYHeight) {
    i.scrollbarYTop = i.railYHeight - i.scrollbarYHeight;
  }
  updateCss(element, i);
  if (i.scrollbarXActive) {
    element.classList.add(cls.state.active("x"));
  } else {
    element.classList.remove(cls.state.active("x"));
    i.scrollbarXWidth = 0;
    i.scrollbarXLeft = 0;
    element.scrollLeft = i.isRtl === true ? i.contentWidth : 0;
  }
  if (i.scrollbarYActive) {
    element.classList.add(cls.state.active("y"));
  } else {
    element.classList.remove(cls.state.active("y"));
    i.scrollbarYHeight = 0;
    i.scrollbarYTop = 0;
    element.scrollTop = 0;
  }
}
function getThumbSize(i, thumbSize) {
  if (i.settings.minScrollbarLength) {
    thumbSize = Math.max(thumbSize, i.settings.minScrollbarLength);
  }
  if (i.settings.maxScrollbarLength) {
    thumbSize = Math.min(thumbSize, i.settings.maxScrollbarLength);
  }
  return thumbSize;
}
function updateCss(element, i) {
  var xRailOffset = {
    width: i.railXWidth
  };
  var roundedScrollTop = Math.floor(element.scrollTop);
  if (i.isRtl) {
    xRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth - i.contentWidth;
  } else {
    xRailOffset.left = element.scrollLeft;
  }
  if (i.isScrollbarXUsingBottom) {
    xRailOffset.bottom = i.scrollbarXBottom - roundedScrollTop;
  } else {
    xRailOffset.top = i.scrollbarXTop + roundedScrollTop;
  }
  set(i.scrollbarXRail, xRailOffset);
  var yRailOffset = {
    top: roundedScrollTop,
    height: i.railYHeight
  };
  if (i.isScrollbarYUsingRight) {
    if (i.isRtl) {
      yRailOffset.right = i.contentWidth - (i.negativeScrollAdjustment + element.scrollLeft) - i.scrollbarYRight - i.scrollbarYOuterWidth - 9;
    } else {
      yRailOffset.right = i.scrollbarYRight - element.scrollLeft;
    }
  } else {
    if (i.isRtl) {
      yRailOffset.left = i.negativeScrollAdjustment + element.scrollLeft + i.containerWidth * 2 - i.contentWidth - i.scrollbarYLeft - i.scrollbarYOuterWidth;
    } else {
      yRailOffset.left = i.scrollbarYLeft + element.scrollLeft;
    }
  }
  set(i.scrollbarYRail, yRailOffset);
  set(i.scrollbarX, {
    left: i.scrollbarXLeft,
    width: i.scrollbarXWidth - i.railBorderXWidth
  });
  set(i.scrollbarY, {
    top: i.scrollbarYTop,
    height: i.scrollbarYHeight - i.railBorderYWidth
  });
}
function clickRail(i) {
  i.event.bind(i.scrollbarY, "mousedown", function(e) {
    return e.stopPropagation();
  });
  i.event.bind(i.scrollbarYRail, "mousedown", function(e) {
    var positionTop = e.pageY - window.pageYOffset - i.scrollbarYRail.getBoundingClientRect().top;
    var direction = positionTop > i.scrollbarYTop ? 1 : -1;
    i.element.scrollTop += direction * i.containerHeight;
    updateGeometry(i);
    e.stopPropagation();
  });
  i.event.bind(i.scrollbarX, "mousedown", function(e) {
    return e.stopPropagation();
  });
  i.event.bind(i.scrollbarXRail, "mousedown", function(e) {
    var positionLeft = e.pageX - window.pageXOffset - i.scrollbarXRail.getBoundingClientRect().left;
    var direction = positionLeft > i.scrollbarXLeft ? 1 : -1;
    i.element.scrollLeft += direction * i.containerWidth;
    updateGeometry(i);
    e.stopPropagation();
  });
}
var activeSlider = null;
function setupScrollHandlers(i) {
  bindMouseScrollHandler(i, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]);
  bindMouseScrollHandler(i, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]);
}
function bindMouseScrollHandler(i, ref) {
  var containerDimension = ref[0];
  var contentDimension = ref[1];
  var pageAxis = ref[2];
  var railDimension = ref[3];
  var scrollbarAxis = ref[4];
  var scrollbarDimension = ref[5];
  var scrollAxis = ref[6];
  var axis = ref[7];
  var scrollbarRail = ref[8];
  var element = i.element;
  var startingScrollPosition = null;
  var startingMousePagePosition = null;
  var scrollBy = null;
  function moveHandler(e) {
    if (e.touches && e.touches[0]) {
      e[pageAxis] = e.touches[0]["page" + axis.toUpperCase()];
    }
    if (activeSlider === scrollbarAxis) {
      element[scrollAxis] = startingScrollPosition + scrollBy * (e[pageAxis] - startingMousePagePosition);
      addScrollingClass(i, axis);
      updateGeometry(i);
      e.stopPropagation();
      e.preventDefault();
    }
  }
  function endHandler() {
    removeScrollingClass(i, axis);
    i[scrollbarRail].classList.remove(cls.state.clicking);
    document.removeEventListener("mousemove", moveHandler);
    document.removeEventListener("mouseup", endHandler);
    document.removeEventListener("touchmove", moveHandler);
    document.removeEventListener("touchend", endHandler);
    activeSlider = null;
  }
  function bindMoves(e) {
    if (activeSlider === null) {
      activeSlider = scrollbarAxis;
      startingScrollPosition = element[scrollAxis];
      if (e.touches) {
        e[pageAxis] = e.touches[0]["page" + axis.toUpperCase()];
      }
      startingMousePagePosition = e[pageAxis];
      scrollBy = (i[contentDimension] - i[containerDimension]) / (i[railDimension] - i[scrollbarDimension]);
      if (!e.touches) {
        document.addEventListener("mousemove", moveHandler);
        document.addEventListener("mouseup", endHandler);
      } else {
        document.addEventListener("touchmove", moveHandler, {
          passive: false
        });
        document.addEventListener("touchend", endHandler);
      }
      i[scrollbarRail].classList.add(cls.state.clicking);
    }
    e.stopPropagation();
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  i[scrollbarAxis].addEventListener("mousedown", bindMoves);
  i[scrollbarAxis].addEventListener("touchstart", bindMoves);
}
function keyboard(i) {
  var element = i.element;
  var elementHovered = function() {
    return matches(element, ":hover");
  };
  var scrollbarFocused = function() {
    return matches(i.scrollbarX, ":focus") || matches(i.scrollbarY, ":focus");
  };
  function shouldPreventDefault(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    if (deltaX === 0) {
      if (!i.scrollbarYActive) {
        return false;
      }
      if (scrollTop === 0 && deltaY > 0 || scrollTop >= i.contentHeight - i.containerHeight && deltaY < 0) {
        return !i.settings.wheelPropagation;
      }
    }
    var scrollLeft = element.scrollLeft;
    if (deltaY === 0) {
      if (!i.scrollbarXActive) {
        return false;
      }
      if (scrollLeft === 0 && deltaX < 0 || scrollLeft >= i.contentWidth - i.containerWidth && deltaX > 0) {
        return !i.settings.wheelPropagation;
      }
    }
    return true;
  }
  i.event.bind(i.ownerDocument, "keydown", function(e) {
    if (e.isDefaultPrevented && e.isDefaultPrevented() || e.defaultPrevented) {
      return;
    }
    if (!elementHovered() && !scrollbarFocused()) {
      return;
    }
    var activeElement = document.activeElement ? document.activeElement : i.ownerDocument.activeElement;
    if (activeElement) {
      if (activeElement.tagName === "IFRAME") {
        activeElement = activeElement.contentDocument.activeElement;
      } else {
        while (activeElement.shadowRoot) {
          activeElement = activeElement.shadowRoot.activeElement;
        }
      }
      if (isEditable(activeElement)) {
        return;
      }
    }
    var deltaX = 0;
    var deltaY = 0;
    switch (e.which) {
      case 37:
        if (e.metaKey) {
          deltaX = -i.contentWidth;
        } else if (e.altKey) {
          deltaX = -i.containerWidth;
        } else {
          deltaX = -30;
        }
        break;
      case 38:
        if (e.metaKey) {
          deltaY = i.contentHeight;
        } else if (e.altKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = 30;
        }
        break;
      case 39:
        if (e.metaKey) {
          deltaX = i.contentWidth;
        } else if (e.altKey) {
          deltaX = i.containerWidth;
        } else {
          deltaX = 30;
        }
        break;
      case 40:
        if (e.metaKey) {
          deltaY = -i.contentHeight;
        } else if (e.altKey) {
          deltaY = -i.containerHeight;
        } else {
          deltaY = -30;
        }
        break;
      case 32:
        if (e.shiftKey) {
          deltaY = i.containerHeight;
        } else {
          deltaY = -i.containerHeight;
        }
        break;
      case 33:
        deltaY = i.containerHeight;
        break;
      case 34:
        deltaY = -i.containerHeight;
        break;
      case 36:
        deltaY = i.contentHeight;
        break;
      case 35:
        deltaY = -i.contentHeight;
        break;
      default:
        return;
    }
    if (i.settings.suppressScrollX && deltaX !== 0) {
      return;
    }
    if (i.settings.suppressScrollY && deltaY !== 0) {
      return;
    }
    element.scrollTop -= deltaY;
    element.scrollLeft += deltaX;
    updateGeometry(i);
    if (shouldPreventDefault(deltaX, deltaY)) {
      e.preventDefault();
    }
  });
}
function wheel(i) {
  var element = i.element;
  function shouldPreventDefault(deltaX, deltaY) {
    var roundedScrollTop = Math.floor(element.scrollTop);
    var isTop = element.scrollTop === 0;
    var isBottom = roundedScrollTop + element.offsetHeight === element.scrollHeight;
    var isLeft = element.scrollLeft === 0;
    var isRight = element.scrollLeft + element.offsetWidth === element.scrollWidth;
    var hitsBound;
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      hitsBound = isTop || isBottom;
    } else {
      hitsBound = isLeft || isRight;
    }
    return hitsBound ? !i.settings.wheelPropagation : true;
  }
  function getDeltaFromEvent(e) {
    var deltaX = e.deltaX;
    var deltaY = -1 * e.deltaY;
    if (typeof deltaX === "undefined" || typeof deltaY === "undefined") {
      deltaX = -1 * e.wheelDeltaX / 6;
      deltaY = e.wheelDeltaY / 6;
    }
    if (e.deltaMode && e.deltaMode === 1) {
      deltaX *= 10;
      deltaY *= 10;
    }
    if (deltaX !== deltaX && deltaY !== deltaY) {
      deltaX = 0;
      deltaY = e.wheelDelta;
    }
    if (e.shiftKey) {
      return [-deltaY, -deltaX];
    }
    return [deltaX, deltaY];
  }
  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!env.isWebKit && element.querySelector("select:focus")) {
      return true;
    }
    if (!element.contains(target)) {
      return false;
    }
    var cursor = target;
    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }
      var style2 = get(cursor);
      if (deltaY && style2.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
            return true;
          }
        }
      }
      if (deltaX && style2.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
            return true;
          }
        }
      }
      cursor = cursor.parentNode;
    }
    return false;
  }
  function mousewheelHandler(e) {
    var ref = getDeltaFromEvent(e);
    var deltaX = ref[0];
    var deltaY = ref[1];
    if (shouldBeConsumedByChild(e.target, deltaX, deltaY)) {
      return;
    }
    var shouldPrevent = false;
    if (!i.settings.useBothWheelAxes) {
      element.scrollTop -= deltaY * i.settings.wheelSpeed;
      element.scrollLeft += deltaX * i.settings.wheelSpeed;
    } else if (i.scrollbarYActive && !i.scrollbarXActive) {
      if (deltaY) {
        element.scrollTop -= deltaY * i.settings.wheelSpeed;
      } else {
        element.scrollTop += deltaX * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    } else if (i.scrollbarXActive && !i.scrollbarYActive) {
      if (deltaX) {
        element.scrollLeft += deltaX * i.settings.wheelSpeed;
      } else {
        element.scrollLeft -= deltaY * i.settings.wheelSpeed;
      }
      shouldPrevent = true;
    }
    updateGeometry(i);
    shouldPrevent = shouldPrevent || shouldPreventDefault(deltaX, deltaY);
    if (shouldPrevent && !e.ctrlKey) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  if (typeof window.onwheel !== "undefined") {
    i.event.bind(element, "wheel", mousewheelHandler);
  } else if (typeof window.onmousewheel !== "undefined") {
    i.event.bind(element, "mousewheel", mousewheelHandler);
  }
}
function touch(i) {
  if (!env.supportsTouch && !env.supportsIePointer) {
    return;
  }
  var element = i.element;
  var state = {
    startOffset: {},
    startTime: 0,
    speed: {},
    easingLoop: null
  };
  function shouldPrevent(deltaX, deltaY) {
    var scrollTop = Math.floor(element.scrollTop);
    var scrollLeft = element.scrollLeft;
    var magnitudeX = Math.abs(deltaX);
    var magnitudeY = Math.abs(deltaY);
    if (magnitudeY > magnitudeX) {
      if (deltaY < 0 && scrollTop === i.contentHeight - i.containerHeight || deltaY > 0 && scrollTop === 0) {
        return window.scrollY === 0 && deltaY > 0 && env.isChrome;
      }
    } else if (magnitudeX > magnitudeY) {
      if (deltaX < 0 && scrollLeft === i.contentWidth - i.containerWidth || deltaX > 0 && scrollLeft === 0) {
        return true;
      }
    }
    return true;
  }
  function applyTouchMove(differenceX, differenceY) {
    element.scrollTop -= differenceY;
    element.scrollLeft -= differenceX;
    updateGeometry(i);
  }
  function getTouch(e) {
    if (e.targetTouches) {
      return e.targetTouches[0];
    }
    return e;
  }
  function shouldHandle(e) {
    if (e.target === i.scrollbarX || e.target === i.scrollbarY) {
      return false;
    }
    if (e.pointerType && e.pointerType === "pen" && e.buttons === 0) {
      return false;
    }
    if (e.targetTouches && e.targetTouches.length === 1) {
      return true;
    }
    if (e.pointerType && e.pointerType !== "mouse" && e.pointerType !== e.MSPOINTER_TYPE_MOUSE) {
      return true;
    }
    return false;
  }
  function touchStart(e) {
    if (!shouldHandle(e)) {
      return;
    }
    var touch2 = getTouch(e);
    state.startOffset.pageX = touch2.pageX;
    state.startOffset.pageY = touch2.pageY;
    state.startTime = (/* @__PURE__ */ new Date()).getTime();
    if (state.easingLoop !== null) {
      clearInterval(state.easingLoop);
    }
  }
  function shouldBeConsumedByChild(target, deltaX, deltaY) {
    if (!element.contains(target)) {
      return false;
    }
    var cursor = target;
    while (cursor && cursor !== element) {
      if (cursor.classList.contains(cls.element.consuming)) {
        return true;
      }
      var style2 = get(cursor);
      if (deltaY && style2.overflowY.match(/(scroll|auto)/)) {
        var maxScrollTop = cursor.scrollHeight - cursor.clientHeight;
        if (maxScrollTop > 0) {
          if (cursor.scrollTop > 0 && deltaY < 0 || cursor.scrollTop < maxScrollTop && deltaY > 0) {
            return true;
          }
        }
      }
      if (deltaX && style2.overflowX.match(/(scroll|auto)/)) {
        var maxScrollLeft = cursor.scrollWidth - cursor.clientWidth;
        if (maxScrollLeft > 0) {
          if (cursor.scrollLeft > 0 && deltaX < 0 || cursor.scrollLeft < maxScrollLeft && deltaX > 0) {
            return true;
          }
        }
      }
      cursor = cursor.parentNode;
    }
    return false;
  }
  function touchMove(e) {
    if (shouldHandle(e)) {
      var touch2 = getTouch(e);
      var currentOffset = {
        pageX: touch2.pageX,
        pageY: touch2.pageY
      };
      var differenceX = currentOffset.pageX - state.startOffset.pageX;
      var differenceY = currentOffset.pageY - state.startOffset.pageY;
      if (shouldBeConsumedByChild(e.target, differenceX, differenceY)) {
        return;
      }
      applyTouchMove(differenceX, differenceY);
      state.startOffset = currentOffset;
      var currentTime = (/* @__PURE__ */ new Date()).getTime();
      var timeGap = currentTime - state.startTime;
      if (timeGap > 0) {
        state.speed.x = differenceX / timeGap;
        state.speed.y = differenceY / timeGap;
        state.startTime = currentTime;
      }
      if (shouldPrevent(differenceX, differenceY)) {
        if (e.cancelable) {
          e.preventDefault();
        }
      }
    }
  }
  function touchEnd() {
    if (i.settings.swipeEasing) {
      clearInterval(state.easingLoop);
      state.easingLoop = setInterval(function() {
        if (i.isInitialized) {
          clearInterval(state.easingLoop);
          return;
        }
        if (!state.speed.x && !state.speed.y) {
          clearInterval(state.easingLoop);
          return;
        }
        if (Math.abs(state.speed.x) < 0.01 && Math.abs(state.speed.y) < 0.01) {
          clearInterval(state.easingLoop);
          return;
        }
        applyTouchMove(state.speed.x * 30, state.speed.y * 30);
        state.speed.x *= 0.8;
        state.speed.y *= 0.8;
      }, 10);
    }
  }
  if (env.supportsTouch) {
    i.event.bind(element, "touchstart", touchStart);
    i.event.bind(element, "touchmove", touchMove);
    i.event.bind(element, "touchend", touchEnd);
  } else if (env.supportsIePointer) {
    if (window.PointerEvent) {
      i.event.bind(element, "pointerdown", touchStart);
      i.event.bind(element, "pointermove", touchMove);
      i.event.bind(element, "pointerup", touchEnd);
    } else if (window.MSPointerEvent) {
      i.event.bind(element, "MSPointerDown", touchStart);
      i.event.bind(element, "MSPointerMove", touchMove);
      i.event.bind(element, "MSPointerUp", touchEnd);
    }
  }
}
var defaultSettings = function() {
  return {
    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
    maxScrollbarLength: null,
    minScrollbarLength: null,
    scrollingThreshold: 1e3,
    scrollXMarginOffset: 0,
    scrollYMarginOffset: 0,
    suppressScrollX: false,
    suppressScrollY: false,
    swipeEasing: true,
    useBothWheelAxes: false,
    wheelPropagation: true,
    wheelSpeed: 1
  };
};
var handlers = {
  "click-rail": clickRail,
  "drag-thumb": setupScrollHandlers,
  keyboard,
  wheel,
  touch
};
var PerfectScrollbar = function PerfectScrollbar2(element, userSettings) {
  var this$1 = this;
  if (userSettings === void 0) userSettings = {};
  if (typeof element === "string") {
    element = document.querySelector(element);
  }
  if (!element || !element.nodeName) {
    throw new Error("no element is specified to initialize PerfectScrollbar");
  }
  this.element = element;
  element.classList.add(cls.main);
  this.settings = defaultSettings();
  for (var key in userSettings) {
    this.settings[key] = userSettings[key];
  }
  this.containerWidth = null;
  this.containerHeight = null;
  this.contentWidth = null;
  this.contentHeight = null;
  var focus = function() {
    return element.classList.add(cls.state.focus);
  };
  var blur = function() {
    return element.classList.remove(cls.state.focus);
  };
  this.isRtl = get(element).direction === "rtl";
  if (this.isRtl === true) {
    element.classList.add(cls.rtl);
  }
  this.isNegativeScroll = function() {
    var originalScrollLeft = element.scrollLeft;
    var result = null;
    element.scrollLeft = -1;
    result = element.scrollLeft < 0;
    element.scrollLeft = originalScrollLeft;
    return result;
  }();
  this.negativeScrollAdjustment = this.isNegativeScroll ? element.scrollWidth - element.clientWidth : 0;
  this.event = new EventManager();
  this.ownerDocument = element.ownerDocument || document;
  this.scrollbarXRail = div(cls.element.rail("x"));
  element.appendChild(this.scrollbarXRail);
  this.scrollbarX = div(cls.element.thumb("x"));
  this.scrollbarXRail.appendChild(this.scrollbarX);
  this.scrollbarX.setAttribute("tabindex", 0);
  this.event.bind(this.scrollbarX, "focus", focus);
  this.event.bind(this.scrollbarX, "blur", blur);
  this.scrollbarXActive = null;
  this.scrollbarXWidth = null;
  this.scrollbarXLeft = null;
  var railXStyle = get(this.scrollbarXRail);
  this.scrollbarXBottom = parseInt(railXStyle.bottom, 10);
  if (isNaN(this.scrollbarXBottom)) {
    this.isScrollbarXUsingBottom = false;
    this.scrollbarXTop = toInt(railXStyle.top);
  } else {
    this.isScrollbarXUsingBottom = true;
  }
  this.railBorderXWidth = toInt(railXStyle.borderLeftWidth) + toInt(railXStyle.borderRightWidth);
  set(this.scrollbarXRail, {
    display: "block"
  });
  this.railXMarginWidth = toInt(railXStyle.marginLeft) + toInt(railXStyle.marginRight);
  set(this.scrollbarXRail, {
    display: ""
  });
  this.railXWidth = null;
  this.railXRatio = null;
  this.scrollbarYRail = div(cls.element.rail("y"));
  element.appendChild(this.scrollbarYRail);
  this.scrollbarY = div(cls.element.thumb("y"));
  this.scrollbarYRail.appendChild(this.scrollbarY);
  this.scrollbarY.setAttribute("tabindex", 0);
  this.event.bind(this.scrollbarY, "focus", focus);
  this.event.bind(this.scrollbarY, "blur", blur);
  this.scrollbarYActive = null;
  this.scrollbarYHeight = null;
  this.scrollbarYTop = null;
  var railYStyle = get(this.scrollbarYRail);
  this.scrollbarYRight = parseInt(railYStyle.right, 10);
  if (isNaN(this.scrollbarYRight)) {
    this.isScrollbarYUsingRight = false;
    this.scrollbarYLeft = toInt(railYStyle.left);
  } else {
    this.isScrollbarYUsingRight = true;
  }
  this.scrollbarYOuterWidth = this.isRtl ? outerWidth(this.scrollbarY) : null;
  this.railBorderYWidth = toInt(railYStyle.borderTopWidth) + toInt(railYStyle.borderBottomWidth);
  set(this.scrollbarYRail, {
    display: "block"
  });
  this.railYMarginHeight = toInt(railYStyle.marginTop) + toInt(railYStyle.marginBottom);
  set(this.scrollbarYRail, {
    display: ""
  });
  this.railYHeight = null;
  this.railYRatio = null;
  this.reach = {
    x: element.scrollLeft <= 0 ? "start" : element.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
    y: element.scrollTop <= 0 ? "start" : element.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
  };
  this.isAlive = true;
  this.settings.handlers.forEach(function(handlerName) {
    return handlers[handlerName](this$1);
  });
  this.lastScrollTop = Math.floor(element.scrollTop);
  this.lastScrollLeft = element.scrollLeft;
  this.event.bind(this.element, "scroll", function(e) {
    return this$1.onScroll(e);
  });
  updateGeometry(this);
};
PerfectScrollbar.prototype.update = function update() {
  if (!this.isAlive) {
    return;
  }
  this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0;
  set(this.scrollbarXRail, {
    display: "block"
  });
  set(this.scrollbarYRail, {
    display: "block"
  });
  this.railXMarginWidth = toInt(get(this.scrollbarXRail).marginLeft) + toInt(get(this.scrollbarXRail).marginRight);
  this.railYMarginHeight = toInt(get(this.scrollbarYRail).marginTop) + toInt(get(this.scrollbarYRail).marginBottom);
  set(this.scrollbarXRail, {
    display: "none"
  });
  set(this.scrollbarYRail, {
    display: "none"
  });
  updateGeometry(this);
  processScrollDiff(this, "top", 0, false, true);
  processScrollDiff(this, "left", 0, false, true);
  set(this.scrollbarXRail, {
    display: ""
  });
  set(this.scrollbarYRail, {
    display: ""
  });
};
PerfectScrollbar.prototype.onScroll = function onScroll(e) {
  if (!this.isAlive) {
    return;
  }
  updateGeometry(this);
  processScrollDiff(this, "top", this.element.scrollTop - this.lastScrollTop);
  processScrollDiff(this, "left", this.element.scrollLeft - this.lastScrollLeft);
  this.lastScrollTop = Math.floor(this.element.scrollTop);
  this.lastScrollLeft = this.element.scrollLeft;
};
PerfectScrollbar.prototype.destroy = function destroy() {
  if (!this.isAlive) {
    return;
  }
  this.event.unbindAll();
  remove(this.scrollbarX);
  remove(this.scrollbarY);
  remove(this.scrollbarXRail);
  remove(this.scrollbarYRail);
  this.removePsClasses();
  this.element = null;
  this.scrollbarX = null;
  this.scrollbarY = null;
  this.scrollbarXRail = null;
  this.scrollbarYRail = null;
  this.isAlive = false;
};
PerfectScrollbar.prototype.removePsClasses = function removePsClasses() {
  this.element.className = this.element.className.split(" ").filter(function(name) {
    return !name.match(/^ps([-_].+|)$/);
  }).join(" ");
};
var perfect_scrollbar_esm_default = PerfectScrollbar;

// src/@fuse/directives/scrollbar/scrollbar.directive.ts
var FuseScrollbarDirective = class _FuseScrollbarDirective {
  constructor() {
    this._elementRef = inject(ElementRef);
    this._platform = inject(Platform);
    this.fuseScrollbar = true;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for _elementRef
   */
  get elementRef() {
    return this._elementRef;
  }
  /**
   * Getter for _ps
   */
  get ps() {
    return this._ps;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On changes
   *
   * @param changes
   */
  ngOnChanges(changes) {
    if ("fuseScrollbar" in changes) {
      this.fuseScrollbar = coerceBooleanProperty(changes.fuseScrollbar.currentValue);
      if (this.fuseScrollbar) {
        this._init();
      } else {
        this._destroy();
      }
    }
    if ("fuseScrollbarOptions" in changes) {
      this._options = merge_default({}, this._options, changes.fuseScrollbarOptions.currentValue);
      if (!this._ps) {
        return;
      }
      setTimeout(() => {
        this._destroy();
      });
      setTimeout(() => {
        this._init();
      });
    }
  }
  /**
   * On init
   */
  ngOnInit() {
    fromEvent(window, "resize").pipe(takeUntil(this._unsubscribeAll), debounceTime(150)).subscribe(() => {
      this.update();
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._destroy();
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Is enabled
   */
  isEnabled() {
    return this.fuseScrollbar;
  }
  /**
   * Update the scrollbar
   */
  update() {
    if (!this._ps) {
      return;
    }
    this._ps.update();
  }
  /**
   * Destroy the scrollbar
   */
  destroy() {
    this.ngOnDestroy();
  }
  /**
   * Returns the geometry of the scrollable element
   *
   * @param prefix
   */
  geometry(prefix = "scroll") {
    return new ScrollbarGeometry(this._elementRef.nativeElement[prefix + "Left"], this._elementRef.nativeElement[prefix + "Top"], this._elementRef.nativeElement[prefix + "Width"], this._elementRef.nativeElement[prefix + "Height"]);
  }
  /**
   * Returns the position of the scrollable element
   *
   * @param absolute
   */
  position(absolute = false) {
    let scrollbarPosition;
    if (!absolute && this._ps) {
      scrollbarPosition = new ScrollbarPosition(this._ps.reach.x || 0, this._ps.reach.y || 0);
    } else {
      scrollbarPosition = new ScrollbarPosition(this._elementRef.nativeElement.scrollLeft, this._elementRef.nativeElement.scrollTop);
    }
    return scrollbarPosition;
  }
  /**
   * Scroll to
   *
   * @param x
   * @param y
   * @param speed
   */
  scrollTo(x, y, speed) {
    if (y == null && speed == null) {
      this.animateScrolling("scrollTop", x, speed);
    } else {
      if (x != null) {
        this.animateScrolling("scrollLeft", x, speed);
      }
      if (y != null) {
        this.animateScrolling("scrollTop", y, speed);
      }
    }
  }
  /**
   * Scroll to X
   *
   * @param x
   * @param speed
   */
  scrollToX(x, speed) {
    this.animateScrolling("scrollLeft", x, speed);
  }
  /**
   * Scroll to Y
   *
   * @param y
   * @param speed
   */
  scrollToY(y, speed) {
    this.animateScrolling("scrollTop", y, speed);
  }
  /**
   * Scroll to top
   *
   * @param offset
   * @param speed
   */
  scrollToTop(offset = 0, speed) {
    this.animateScrolling("scrollTop", offset, speed);
  }
  /**
   * Scroll to bottom
   *
   * @param offset
   * @param speed
   */
  scrollToBottom(offset = 0, speed) {
    const top = this._elementRef.nativeElement.scrollHeight - this._elementRef.nativeElement.clientHeight;
    this.animateScrolling("scrollTop", top - offset, speed);
  }
  /**
   * Scroll to left
   *
   * @param offset
   * @param speed
   */
  scrollToLeft(offset = 0, speed) {
    this.animateScrolling("scrollLeft", offset, speed);
  }
  /**
   * Scroll to right
   *
   * @param offset
   * @param speed
   */
  scrollToRight(offset = 0, speed) {
    const left = this._elementRef.nativeElement.scrollWidth - this._elementRef.nativeElement.clientWidth;
    this.animateScrolling("scrollLeft", left - offset, speed);
  }
  /**
   * Scroll to element
   *
   * @param qs
   * @param offset
   * @param ignoreVisible If true, scrollToElement won't happen if element is already inside the current viewport
   * @param speed
   */
  scrollToElement(qs, offset = 0, ignoreVisible = false, speed) {
    const element = this._elementRef.nativeElement.querySelector(qs);
    if (!element) {
      return;
    }
    const elementPos = element.getBoundingClientRect();
    const scrollerPos = this._elementRef.nativeElement.getBoundingClientRect();
    if (this._elementRef.nativeElement.classList.contains("ps--active-x")) {
      if (ignoreVisible && elementPos.right <= scrollerPos.right - Math.abs(offset)) {
        return;
      }
      const currentPos = this._elementRef.nativeElement["scrollLeft"];
      const position = elementPos.left - scrollerPos.left + currentPos;
      this.animateScrolling("scrollLeft", position + offset, speed);
    }
    if (this._elementRef.nativeElement.classList.contains("ps--active-y")) {
      if (ignoreVisible && elementPos.bottom <= scrollerPos.bottom - Math.abs(offset)) {
        return;
      }
      const currentPos = this._elementRef.nativeElement["scrollTop"];
      const position = elementPos.top - scrollerPos.top + currentPos;
      this.animateScrolling("scrollTop", position + offset, speed);
    }
  }
  /**
   * Animate scrolling
   *
   * @param target
   * @param value
   * @param speed
   */
  animateScrolling(target, value, speed) {
    if (this._animation) {
      window.cancelAnimationFrame(this._animation);
      this._animation = null;
    }
    if (!speed || typeof window === "undefined") {
      this._elementRef.nativeElement[target] = value;
    } else if (value !== this._elementRef.nativeElement[target]) {
      let newValue = 0;
      let scrollCount = 0;
      let oldTimestamp = performance.now();
      let oldValue = this._elementRef.nativeElement[target];
      const cosParameter = (oldValue - value) / 2;
      const step = (newTimestamp) => {
        scrollCount += Math.PI / (speed / (newTimestamp - oldTimestamp));
        newValue = Math.round(value + cosParameter + cosParameter * Math.cos(scrollCount));
        if (this._elementRef.nativeElement[target] === oldValue) {
          if (scrollCount >= Math.PI) {
            this.animateScrolling(target, value, 0);
          } else {
            this._elementRef.nativeElement[target] = newValue;
            oldValue = this._elementRef.nativeElement[target];
            oldTimestamp = newTimestamp;
            this._animation = window.requestAnimationFrame(step);
          }
        }
      };
      window.requestAnimationFrame(step);
    }
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Initialize
   *
   * @private
   */
  _init() {
    if (this._ps) {
      return;
    }
    if (this._platform.ANDROID || this._platform.IOS || !this._platform.isBrowser) {
      this.fuseScrollbar = false;
      return;
    }
    this._ps = new perfect_scrollbar_esm_default(this._elementRef.nativeElement, __spreadValues({}, this._options));
  }
  /**
   * Destroy
   *
   * @private
   */
  _destroy() {
    if (!this._ps) {
      return;
    }
    this._ps.destroy();
    this._ps = null;
  }
  static {
    this.\u0275fac = function FuseScrollbarDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseScrollbarDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FuseScrollbarDirective, selectors: [["", "fuseScrollbar", ""]], inputs: { fuseScrollbar: "fuseScrollbar", fuseScrollbarOptions: "fuseScrollbarOptions" }, exportAs: ["fuseScrollbar"], features: [\u0275\u0275NgOnChangesFeature] });
  }
};

// src/@fuse/components/navigation/vertical/vertical.component.ts
var _c04 = ["navigationContent"];
var _c12 = [[["", "fuseVerticalNavigationHeader", ""]], [["", "fuseVerticalNavigationContentHeader", ""]], [["", "fuseVerticalNavigationContentFooter", ""]], [["", "fuseVerticalNavigationFooter", ""]]];
var _c2 = ["[fuseVerticalNavigationHeader]", "[fuseVerticalNavigationContentHeader]", "[fuseVerticalNavigationContentFooter]", "[fuseVerticalNavigationFooter]"];
var _c3 = (a0) => ({ wheelPropagation: a0, suppressScrollX: true });
var _c4 = () => ({ wheelPropagation: false, suppressScrollX: true });
function FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "fuse-vertical-navigation-aside-item", 11);
    \u0275\u0275listener("click", function FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_0_Template_fuse_vertical_navigation_aside_item_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleAside(item_r2));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r2)("name", ctx_r2.name)("activeItemId", ctx_r2.activeAsideItemId)("autoCollapse", ctx_r2.autoCollapse)("skipChildren", true);
  }
}
function FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-basic-item", 9);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r2)("name", ctx_r2.name);
  }
}
function FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-collapsable-item", 10);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r2)("name", ctx_r2.name)("autoCollapse", ctx_r2.autoCollapse);
  }
}
function FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-divider-item", 9);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r2)("name", ctx_r2.name);
  }
}
function FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-group-item", 10);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r2)("name", ctx_r2.name)("autoCollapse", ctx_r2.autoCollapse);
  }
}
function FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-spacer-item", 9);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r2)("name", ctx_r2.name);
  }
}
function FuseVerticalNavigationComponent_For_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_0_Template, 1, 5, "fuse-vertical-navigation-aside-item", 8)(1, FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_1_Template, 1, 2, "fuse-vertical-navigation-basic-item", 9)(2, FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_2_Template, 1, 3, "fuse-vertical-navigation-collapsable-item", 10)(3, FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_3_Template, 1, 2, "fuse-vertical-navigation-divider-item", 9)(4, FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_4_Template, 1, 3, "fuse-vertical-navigation-group-item", 10)(5, FuseVerticalNavigationComponent_For_8_Conditional_0_Conditional_5_Template, 1, 2, "fuse-vertical-navigation-spacer-item", 9);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(item_r2.type === "aside" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "basic" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "collapsable" ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "divider" ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "group" ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.type === "spacer" ? 5 : -1);
  }
}
function FuseVerticalNavigationComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseVerticalNavigationComponent_For_8_Conditional_0_Template, 6, 6);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275conditional(item_r2.hidden && !item_r2.hidden(item_r2) || !item_r2.hidden ? 0 : -1);
  }
}
function FuseVerticalNavigationComponent_Conditional_13_For_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-vertical-navigation-aside-item", 10);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("item", item_r4)("name", ctx_r2.name)("autoCollapse", ctx_r2.autoCollapse);
  }
}
function FuseVerticalNavigationComponent_Conditional_13_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseVerticalNavigationComponent_Conditional_13_For_2_Conditional_0_Conditional_0_Template, 1, 3, "fuse-vertical-navigation-aside-item", 10);
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(item_r4.type === "aside" && item_r4.id === ctx_r2.activeAsideItemId ? 0 : -1);
  }
}
function FuseVerticalNavigationComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseVerticalNavigationComponent_Conditional_13_For_2_Conditional_0_Template, 1, 1);
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275conditional(item_r4.hidden && !item_r4.hidden(item_r4) || !item_r4.hidden ? 0 : -1);
  }
}
function FuseVerticalNavigationComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, FuseVerticalNavigationComponent_Conditional_13_For_2_Template, 1, 1, null, null, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("fuseScrollbarOptions", \u0275\u0275pureFunction0(5, _c4))("@fadeInLeft", ctx_r2.position === "left")("@fadeInRight", ctx_r2.position === "right")("@fadeOutLeft", ctx_r2.position === "left")("@fadeOutRight", ctx_r2.position === "right");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.navigation);
  }
}
var FuseVerticalNavigationComponent = class _FuseVerticalNavigationComponent {
  /**
   * Constructor
   */
  constructor() {
    this._animationBuilder = inject(AnimationBuilder);
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._document = inject(DOCUMENT);
    this._elementRef = inject(ElementRef);
    this._renderer2 = inject(Renderer2);
    this._router = inject(Router);
    this._scrollStrategyOptions = inject(ScrollStrategyOptions);
    this._fuseNavigationService = inject(FuseNavigationService);
    this._fuseUtilsService = inject(FuseUtilsService);
    this.appearance = "default";
    this.autoCollapse = true;
    this.inner = false;
    this.mode = "side";
    this.name = this._fuseUtilsService.randomId();
    this.opened = true;
    this.position = "left";
    this.transparentOverlay = false;
    this.appearanceChanged = new EventEmitter();
    this.modeChanged = new EventEmitter();
    this.openedChanged = new EventEmitter();
    this.positionChanged = new EventEmitter();
    this.activeAsideItemId = null;
    this.onCollapsableItemCollapsed = new ReplaySubject(1);
    this.onCollapsableItemExpanded = new ReplaySubject(1);
    this.onRefreshed = new ReplaySubject(1);
    this._animationsEnabled = false;
    this._hovered = false;
    this._scrollStrategy = this._scrollStrategyOptions.block();
    this._unsubscribeAll = new Subject();
    this._handleAsideOverlayClick = () => {
      this.closeAside();
    };
    this._handleOverlayClick = () => {
      this.close();
    };
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Host binding for component classes
   */
  get classList() {
    return {
      "fuse-vertical-navigation-animations-enabled": this._animationsEnabled,
      [`fuse-vertical-navigation-appearance-${this.appearance}`]: true,
      "fuse-vertical-navigation-hover": this._hovered,
      "fuse-vertical-navigation-inner": this.inner,
      "fuse-vertical-navigation-mode-over": this.mode === "over",
      "fuse-vertical-navigation-mode-side": this.mode === "side",
      "fuse-vertical-navigation-opened": this.opened,
      "fuse-vertical-navigation-position-left": this.position === "left",
      "fuse-vertical-navigation-position-right": this.position === "right"
    };
  }
  /**
   * Host binding for component inline styles
   */
  get styleList() {
    return {
      visibility: this.opened ? "visible" : "hidden"
    };
  }
  /**
   * Setter for fuseScrollbarDirectives
   */
  set fuseScrollbarDirectives(fuseScrollbarDirectives) {
    this._fuseScrollbarDirectives = fuseScrollbarDirectives;
    if (fuseScrollbarDirectives.length === 0) {
      return;
    }
    if (this._fuseScrollbarDirectivesSubscription) {
      this._fuseScrollbarDirectivesSubscription.unsubscribe();
    }
    this._fuseScrollbarDirectivesSubscription = merge(this.onCollapsableItemCollapsed, this.onCollapsableItemExpanded).pipe(takeUntil(this._unsubscribeAll), delay(250)).subscribe(() => {
      fuseScrollbarDirectives.forEach((fuseScrollbarDirective) => {
        fuseScrollbarDirective.update();
      });
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Decorated methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * On mouseenter
   *
   * @private
   */
  _onMouseenter() {
    this._enableAnimations();
    this._hovered = true;
  }
  /**
   * On mouseleave
   *
   * @private
   */
  _onMouseleave() {
    this._enableAnimations();
    this._hovered = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On changes
   *
   * @param changes
   */
  ngOnChanges(changes) {
    if ("appearance" in changes) {
      this.appearanceChanged.next(changes.appearance.currentValue);
    }
    if ("inner" in changes) {
      this.inner = coerceBooleanProperty(changes.inner.currentValue);
    }
    if ("mode" in changes) {
      const currentMode = changes.mode.currentValue;
      const previousMode = changes.mode.previousValue;
      this._disableAnimations();
      if (previousMode === "over" && currentMode === "side") {
        this._hideOverlay();
      }
      if (previousMode === "side" && currentMode === "over") {
        this.closeAside();
        if (this.opened) {
          this._showOverlay();
        }
      }
      this.modeChanged.next(currentMode);
      setTimeout(() => {
        this._enableAnimations();
      }, 500);
    }
    if ("navigation" in changes) {
      this._changeDetectorRef.markForCheck();
    }
    if ("opened" in changes) {
      this.opened = coerceBooleanProperty(changes.opened.currentValue);
      this._toggleOpened(this.opened);
    }
    if ("position" in changes) {
      this.positionChanged.next(changes.position.currentValue);
    }
    if ("transparentOverlay" in changes) {
      this.transparentOverlay = coerceBooleanProperty(changes.transparentOverlay.currentValue);
    }
  }
  /**
   * On init
   */
  ngOnInit() {
    if (this.name === "") {
      this.name = this._fuseUtilsService.randomId();
    }
    this._fuseNavigationService.registerComponent(this.name, this);
    this._router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this._unsubscribeAll)).subscribe(() => {
      if (this.mode === "over" && this.opened) {
        this.close();
      }
      if (this.mode === "side" && this.activeAsideItemId) {
        this.closeAside();
      }
    });
  }
  /**
   * After view init
   */
  ngAfterViewInit() {
    this._mutationObserver = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const mutationTarget = mutation.target;
        if (mutation.attributeName === "class") {
          if (mutationTarget.classList.contains("cdk-global-scrollblock")) {
            const top = parseInt(mutationTarget.style.top, 10);
            this._renderer2.setStyle(this._elementRef.nativeElement, "margin-top", `${Math.abs(top)}px`);
          } else {
            this._renderer2.setStyle(this._elementRef.nativeElement, "margin-top", null);
          }
        }
      });
    });
    this._mutationObserver.observe(this._document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    setTimeout(() => {
      if (!this._navigationContentEl) {
        return;
      }
      if (!this._navigationContentEl.nativeElement.classList.contains("ps")) {
        const activeItem = this._navigationContentEl.nativeElement.querySelector(".fuse-vertical-navigation-item-active");
        if (activeItem) {
          activeItem.scrollIntoView();
        }
      } else {
        this._fuseScrollbarDirectives.forEach((fuseScrollbarDirective) => {
          if (!fuseScrollbarDirective.isEnabled()) {
            return;
          }
          fuseScrollbarDirective.scrollToElement(".fuse-vertical-navigation-item-active", -120, true);
        });
      }
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._mutationObserver.disconnect();
    this.close();
    this.closeAside();
    this._fuseNavigationService.deregisterComponent(this.name);
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Refresh the component to apply the changes
   */
  refresh() {
    this._changeDetectorRef.markForCheck();
    this.onRefreshed.next(true);
  }
  /**
   * Open the navigation
   */
  open() {
    if (this.opened) {
      return;
    }
    this._toggleOpened(true);
  }
  /**
   * Close the navigation
   */
  close() {
    if (!this.opened) {
      return;
    }
    this.closeAside();
    this._toggleOpened(false);
  }
  /**
   * Toggle the navigation
   */
  toggle() {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }
  /**
   * Open the aside
   *
   * @param item
   */
  openAside(item) {
    if (item.disabled || !item.id) {
      return;
    }
    this.activeAsideItemId = item.id;
    this._showAsideOverlay();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Close the aside
   */
  closeAside() {
    this.activeAsideItemId = null;
    this._hideAsideOverlay();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Toggle the aside
   *
   * @param item
   */
  toggleAside(item) {
    if (this.activeAsideItemId === item.id) {
      this.closeAside();
    } else {
      this.openAside(item);
    }
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
   * Enable the animations
   *
   * @private
   */
  _enableAnimations() {
    if (this._animationsEnabled) {
      return;
    }
    this._animationsEnabled = true;
  }
  /**
   * Disable the animations
   *
   * @private
   */
  _disableAnimations() {
    if (!this._animationsEnabled) {
      return;
    }
    this._animationsEnabled = false;
  }
  /**
   * Show the overlay
   *
   * @private
   */
  _showOverlay() {
    if (this._asideOverlay) {
      return;
    }
    this._overlay = this._renderer2.createElement("div");
    this._overlay.classList.add("fuse-vertical-navigation-overlay");
    if (this.transparentOverlay) {
      this._overlay.classList.add("fuse-vertical-navigation-overlay-transparent");
    }
    this._renderer2.appendChild(this._elementRef.nativeElement.parentElement, this._overlay);
    this._scrollStrategy.enable();
    this._player = this._animationBuilder.build([
      animate("300ms cubic-bezier(0.25, 0.8, 0.25, 1)", style({ opacity: 1 }))
    ]).create(this._overlay);
    this._player.play();
    this._overlay.addEventListener("click", this._handleOverlayClick);
  }
  /**
   * Hide the overlay
   *
   * @private
   */
  _hideOverlay() {
    if (!this._overlay) {
      return;
    }
    this._player = this._animationBuilder.build([
      animate("300ms cubic-bezier(0.25, 0.8, 0.25, 1)", style({ opacity: 0 }))
    ]).create(this._overlay);
    this._player.play();
    this._player.onDone(() => {
      if (this._overlay) {
        this._overlay.removeEventListener("click", this._handleOverlayClick);
        this._overlay.parentNode.removeChild(this._overlay);
        this._overlay = null;
      }
      this._scrollStrategy.disable();
    });
  }
  /**
   * Show the aside overlay
   *
   * @private
   */
  _showAsideOverlay() {
    if (this._asideOverlay) {
      return;
    }
    this._asideOverlay = this._renderer2.createElement("div");
    this._asideOverlay.classList.add("fuse-vertical-navigation-aside-overlay");
    this._renderer2.appendChild(this._elementRef.nativeElement.parentElement, this._asideOverlay);
    this._player = this._animationBuilder.build([
      animate("300ms cubic-bezier(0.25, 0.8, 0.25, 1)", style({ opacity: 1 }))
    ]).create(this._asideOverlay);
    this._player.play();
    this._asideOverlay.addEventListener("click", this._handleAsideOverlayClick);
  }
  /**
   * Hide the aside overlay
   *
   * @private
   */
  _hideAsideOverlay() {
    if (!this._asideOverlay) {
      return;
    }
    this._player = this._animationBuilder.build([
      animate("300ms cubic-bezier(0.25, 0.8, 0.25, 1)", style({ opacity: 0 }))
    ]).create(this._asideOverlay);
    this._player.play();
    this._player.onDone(() => {
      if (this._asideOverlay) {
        this._asideOverlay.removeEventListener("click", this._handleAsideOverlayClick);
        this._asideOverlay.parentNode.removeChild(this._asideOverlay);
        this._asideOverlay = null;
      }
    });
  }
  /**
   * Open/close the navigation
   *
   * @param open
   * @private
   */
  _toggleOpened(open) {
    this.opened = open;
    this._enableAnimations();
    if (this.mode === "over") {
      if (this.opened) {
        this._showOverlay();
      } else {
        this._hideOverlay();
      }
    }
    this.openedChanged.next(open);
  }
  static {
    this.\u0275fac = function FuseVerticalNavigationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseVerticalNavigationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseVerticalNavigationComponent, selectors: [["fuse-vertical-navigation"]], viewQuery: function FuseVerticalNavigationComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
        \u0275\u0275viewQuery(FuseScrollbarDirective, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._navigationContentEl = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.fuseScrollbarDirectives = _t);
      }
    }, hostVars: 4, hostBindings: function FuseVerticalNavigationComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseenter", function FuseVerticalNavigationComponent_mouseenter_HostBindingHandler() {
          return ctx._onMouseenter();
        })("mouseleave", function FuseVerticalNavigationComponent_mouseleave_HostBindingHandler() {
          return ctx._onMouseleave();
        });
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.styleList);
        \u0275\u0275classMap(ctx.classList);
      }
    }, inputs: { appearance: "appearance", autoCollapse: "autoCollapse", inner: "inner", mode: "mode", name: "name", navigation: "navigation", opened: "opened", position: "position", transparentOverlay: "transparentOverlay" }, outputs: { appearanceChanged: "appearanceChanged", modeChanged: "modeChanged", openedChanged: "openedChanged", positionChanged: "positionChanged" }, exportAs: ["fuseVerticalNavigation"], features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c2, decls: 14, vars: 4, consts: [["navigationContent", ""], [1, "fuse-vertical-navigation-wrapper"], [1, "fuse-vertical-navigation-header"], ["fuseScrollbar", "", 1, "fuse-vertical-navigation-content", 3, "fuseScrollbarOptions"], [1, "fuse-vertical-navigation-content-header"], [1, "fuse-vertical-navigation-content-footer"], [1, "fuse-vertical-navigation-footer"], ["fuseScrollbar", "", 1, "fuse-vertical-navigation-aside-wrapper", 3, "fuseScrollbarOptions"], [3, "item", "name", "activeItemId", "autoCollapse", "skipChildren"], [3, "item", "name"], [3, "item", "name", "autoCollapse"], [3, "click", "item", "name", "activeItemId", "autoCollapse", "skipChildren"]], template: function FuseVerticalNavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c12);
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275projection(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 3, 0)(5, "div", 4);
        \u0275\u0275projection(6, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(7, FuseVerticalNavigationComponent_For_8_Template, 1, 1, null, null, ctx.trackByFn, true);
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275projection(10, 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275projection(12, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, FuseVerticalNavigationComponent_Conditional_13_Template, 3, 6, "div", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("fuseScrollbarOptions", \u0275\u0275pureFunction1(2, _c3, ctx.inner));
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.navigation);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.activeAsideItemId ? 13 : -1);
      }
    }, dependencies: [
      FuseScrollbarDirective,
      FuseVerticalNavigationAsideItemComponent,
      FuseVerticalNavigationBasicItemComponent,
      FuseVerticalNavigationCollapsableItemComponent,
      FuseVerticalNavigationDividerItemComponent,
      FuseVerticalNavigationGroupItemComponent,
      FuseVerticalNavigationSpacerItemComponent
    ], styles: ['/* src/@fuse/components/navigation/vertical/vertical.component.scss */\n:root {\n  --fuse-vertical-navigation-width: 280px;\n}\nfuse-vertical-navigation {\n  position: sticky;\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n  top: 0;\n  width: var(--fuse-vertical-navigation-width);\n  min-width: var(--fuse-vertical-navigation-width);\n  max-width: var(--fuse-vertical-navigation-width);\n  height: 100vh;\n  min-height: 100vh;\n  max-height: 100vh;\n  z-index: 200;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-animations-enabled {\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property:\n    visibility,\n    margin-left,\n    margin-right,\n    transform,\n    width,\n    max-width,\n    min-width;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-animations-enabled .fuse-vertical-navigation-wrapper {\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property:\n    width,\n    max-width,\n    min-width;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-mode-over {\n  position: fixed;\n  top: 0;\n  bottom: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-left {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-left.fuse-vertical-navigation-mode-side {\n  margin-left: calc(var(--fuse-vertical-navigation-width) * -1);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-left.fuse-vertical-navigation-mode-side.fuse-vertical-navigation-opened {\n  margin-left: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-left.fuse-vertical-navigation-mode-over {\n  left: 0;\n  transform: translate3d(-100%, 0, 0);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-left.fuse-vertical-navigation-mode-over.fuse-vertical-navigation-opened {\n  transform: translate3d(0, 0, 0);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-left .fuse-vertical-navigation-wrapper {\n  left: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-right {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-right.fuse-vertical-navigation-mode-side {\n  margin-right: calc(var(--fuse-vertical-navigation-width) * -1);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-right.fuse-vertical-navigation-mode-side.fuse-vertical-navigation-opened {\n  margin-right: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-right.fuse-vertical-navigation-mode-over {\n  right: 0;\n  transform: translate3d(100%, 0, 0);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-right.fuse-vertical-navigation-mode-over.fuse-vertical-navigation-opened {\n  transform: translate3d(0, 0, 0);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-right .fuse-vertical-navigation-wrapper {\n  right: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-inner {\n  position: relative;\n  width: auto;\n  min-width: 0;\n  max-width: none;\n  height: auto;\n  min-height: 0;\n  max-height: none;\n  box-shadow: none;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-inner .fuse-vertical-navigation-wrapper {\n  position: relative;\n  overflow: visible;\n  height: auto;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-inner .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content {\n  overflow: visible !important;\n}\nfuse-vertical-navigation .fuse-vertical-navigation-wrapper {\n  position: absolute;\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  z-index: 10;\n  background: inherit;\n  box-shadow: inset -1px 0 0 var(--fuse-border);\n}\nfuse-vertical-navigation .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content {\n  flex: 1 1 auto;\n  overflow-x: hidden;\n  overflow-y: auto;\n  overscroll-behavior: contain;\n}\nfuse-vertical-navigation .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-divider-item {\n  margin: 24px 0;\n}\nfuse-vertical-navigation .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-group-item {\n  margin-top: 24px;\n}\nfuse-vertical-navigation .fuse-vertical-navigation-aside-wrapper {\n  position: absolute;\n  display: flex;\n  flex: 1 1 auto;\n  flex-direction: column;\n  top: 0;\n  bottom: 0;\n  left: var(--fuse-vertical-navigation-width);\n  width: var(--fuse-vertical-navigation-width);\n  height: 100%;\n  z-index: 5;\n  overflow-x: hidden;\n  overflow-y: auto;\n  -webkit-overflow-scrolling: touch;\n  transition-duration: 400ms;\n  transition-property: left, right;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  background: inherit;\n}\nfuse-vertical-navigation .fuse-vertical-navigation-aside-wrapper > fuse-vertical-navigation-aside-item {\n  padding: 24px 0;\n}\nfuse-vertical-navigation .fuse-vertical-navigation-aside-wrapper > fuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper {\n  display: none !important;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-position-right .fuse-vertical-navigation-aside-wrapper {\n  left: auto;\n  right: var(--fuse-vertical-navigation-width);\n}\nfuse-vertical-navigation fuse-vertical-navigation-aside-item,\nfuse-vertical-navigation fuse-vertical-navigation-basic-item,\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item,\nfuse-vertical-navigation fuse-vertical-navigation-divider-item,\nfuse-vertical-navigation fuse-vertical-navigation-group-item,\nfuse-vertical-navigation fuse-vertical-navigation-spacer-item {\n  display: flex;\n  flex-direction: column;\n  flex: 1 0 auto;\n  -webkit-user-select: none;\n  user-select: none;\n}\nfuse-vertical-navigation fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation fuse-vertical-navigation-divider-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation fuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation fuse-vertical-navigation-spacer-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  padding: 10px 16px;\n  font-size: 13px;\n  font-weight: 500;\n  line-height: 20px;\n  text-decoration: none;\n  border-radius: 6px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item.fuse-vertical-navigation-item-disabled,\nfuse-vertical-navigation fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item.fuse-vertical-navigation-item-disabled,\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item.fuse-vertical-navigation-item-disabled,\nfuse-vertical-navigation fuse-vertical-navigation-divider-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item.fuse-vertical-navigation-item-disabled,\nfuse-vertical-navigation fuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item.fuse-vertical-navigation-item-disabled,\nfuse-vertical-navigation fuse-vertical-navigation-spacer-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item.fuse-vertical-navigation-item-disabled {\n  cursor: default;\n  opacity: 0.4;\n}\nfuse-vertical-navigation fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation fuse-vertical-navigation-divider-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation fuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation fuse-vertical-navigation-spacer-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon {\n  margin-right: 16px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation fuse-vertical-navigation-divider-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation fuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation fuse-vertical-navigation-spacer-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-subtitle {\n  font-size: 11px;\n  line-height: 1.5;\n}\nfuse-vertical-navigation fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation fuse-vertical-navigation-divider-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation fuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation fuse-vertical-navigation-spacer-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge {\n  margin-left: auto;\n}\nfuse-vertical-navigation fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge .fuse-vertical-navigation-item-badge-content,\nfuse-vertical-navigation fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge .fuse-vertical-navigation-item-badge-content,\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge .fuse-vertical-navigation-item-badge-content,\nfuse-vertical-navigation fuse-vertical-navigation-divider-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge .fuse-vertical-navigation-item-badge-content,\nfuse-vertical-navigation fuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge .fuse-vertical-navigation-item-badge-content,\nfuse-vertical-navigation fuse-vertical-navigation-spacer-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge .fuse-vertical-navigation-item-badge-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n  white-space: nowrap;\n  height: 20px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper,\nfuse-vertical-navigation fuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper,\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper,\nfuse-vertical-navigation fuse-vertical-navigation-group-item > .fuse-vertical-navigation-item-wrapper {\n  margin: 0 12px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-aside-item,\nfuse-vertical-navigation fuse-vertical-navigation-basic-item,\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item {\n  margin-bottom: 4px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item,\nfuse-vertical-navigation fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item,\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item {\n  cursor: pointer;\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item {\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge + .fuse-vertical-navigation-item-arrow {\n  margin-left: 8px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-arrow {\n  height: 20px;\n  line-height: 20px;\n  margin-left: auto;\n  transition: transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1), color 375ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item.fuse-vertical-navigation-item-expanded > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-arrow {\n  transform: rotate(90deg);\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-children > *:first-child {\n  margin-top: 6px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-children > *:last-child {\n  padding-bottom: 6px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-children > *:last-child > .fuse-vertical-navigation-item-children > *:last-child {\n  padding-bottom: 0;\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item {\n  padding: 10px 16px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-children {\n  overflow: hidden;\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item {\n  padding-left: 56px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item-children {\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item {\n  padding-left: 72px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item-children {\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item {\n  padding-left: 88px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item-children .fuse-vertical-navigation-item {\n  padding-left: 104px;\n}\nfuse-vertical-navigation fuse-vertical-navigation-divider-item {\n  margin: 12px 0;\n}\nfuse-vertical-navigation fuse-vertical-navigation-divider-item .fuse-vertical-navigation-item-wrapper {\n  height: 1px;\n  box-shadow: 0 1px 0 0;\n}\nfuse-vertical-navigation fuse-vertical-navigation-group-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation fuse-vertical-navigation-group-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon {\n  display: none !important;\n}\nfuse-vertical-navigation fuse-vertical-navigation-group-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-title {\n  font-size: 12px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n}\nfuse-vertical-navigation fuse-vertical-navigation-spacer-item {\n  margin: 6px 0;\n}\n.fuse-vertical-navigation-overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 170;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.fuse-vertical-navigation-overlay + .fuse-vertical-navigation-aside-overlay {\n  background-color: transparent;\n}\n.fuse-vertical-navigation-aside-overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 169;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n}\nfuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item {\n  color: currentColor;\n}\nfuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon {\n  color: currentColor;\n  opacity: 0.6;\n}\nfuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-title {\n  color: currentColor;\n  opacity: 0.8;\n}\nfuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-subtitle {\n  color: currentColor;\n  opacity: 0.5;\n}\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item {\n}\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active,\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced {\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.05;\n}\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active:where(.dark, .dark *),\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced:where(.dark, .dark *),\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active:where(.dark, .dark *),\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced:where(.dark, .dark *),\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active:where(.dark, .dark *),\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced:where(.dark, .dark *) {\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.12;\n}\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced .fuse-vertical-navigation-item-icon {\n  opacity: 1;\n}\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced .fuse-vertical-navigation-item-title {\n  opacity: 1;\n}\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-disabled).fuse-vertical-navigation-item-active-forced .fuse-vertical-navigation-item-subtitle {\n  opacity: 1;\n}\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover {\n  background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.05;\n}\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover:where(.dark, .dark *),\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover:where(.dark, .dark *),\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover:where(.dark, .dark *) {\n  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));\n  --tw-bg-opacity: 0.12;\n}\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover .fuse-vertical-navigation-item-icon {\n  opacity: 1;\n}\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover .fuse-vertical-navigation-item-arrow,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover .fuse-vertical-navigation-item-arrow,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover .fuse-vertical-navigation-item-arrow {\n  opacity: 1;\n}\nfuse-vertical-navigation-aside-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation-basic-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation-collapsable-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:not(.fuse-vertical-navigation-item-active-forced):not(.fuse-vertical-navigation-item-active):not(.fuse-vertical-navigation-item-disabled):hover .fuse-vertical-navigation-item-subtitle {\n  opacity: 1;\n}\nfuse-vertical-navigation-collapsable-item {\n}\nfuse-vertical-navigation-collapsable-item.fuse-vertical-navigation-item-expanded > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon {\n  opacity: 1;\n}\nfuse-vertical-navigation-collapsable-item.fuse-vertical-navigation-item-expanded > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation-collapsable-item.fuse-vertical-navigation-item-expanded > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-arrow {\n  opacity: 1;\n}\nfuse-vertical-navigation-collapsable-item.fuse-vertical-navigation-item-expanded > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-subtitle {\n  opacity: 1;\n}\nfuse-vertical-navigation-group-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-title {\n  --tw-text-opacity: 1;\n  color: rgba(var(--fuse-primary-600-rgb), var(--tw-text-opacity, 1));\n  opacity: 1;\n}\nfuse-vertical-navigation-group-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-title:where(.dark, .dark *) {\n  --tw-text-opacity: 1;\n  color: rgba(var(--fuse-primary-400-rgb), var(--tw-text-opacity, 1));\n}\n:root {\n  --fuse-vertical-navigation-compact-width: 112px;\n}\nfuse-vertical-navigation {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact {\n  width: var(--fuse-vertical-navigation-compact-width);\n  min-width: var(--fuse-vertical-navigation-compact-width);\n  max-width: var(--fuse-vertical-navigation-compact-width);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact.fuse-vertical-navigation-position-left {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact.fuse-vertical-navigation-position-left.fuse-vertical-navigation-mode-side {\n  margin-left: calc(var(--fuse-vertical-navigation-compact-width) * -1);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact.fuse-vertical-navigation-position-left.fuse-vertical-navigation-opened {\n  margin-left: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact.fuse-vertical-navigation-position-right {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact.fuse-vertical-navigation-position-right.fuse-vertical-navigation-mode-side {\n  margin-right: calc(var(--fuse-vertical-navigation-compact-width) * -1);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact.fuse-vertical-navigation-position-right.fuse-vertical-navigation-opened {\n  margin-right: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact.fuse-vertical-navigation-position-right .fuse-vertical-navigation-aside-wrapper {\n  left: auto;\n  right: var(--fuse-vertical-navigation-compact-width);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper {\n  margin: 4px 8px 0 8px;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item {\n  flex-direction: column;\n  justify-content: center;\n  padding: 12px;\n  border-radius: 6px;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon {\n  margin-right: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper {\n  margin-top: 8px;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-title,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-title {\n  font-size: 12px;\n  font-weight: 500;\n  text-align: center;\n  line-height: 16px;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-subtitle,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper .fuse-vertical-navigation-item-subtitle {\n  display: none !important;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge {\n  position: absolute;\n  top: 12px;\n  left: 64px;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item > fuse-vertical-navigation-collapsable-item,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item > fuse-vertical-navigation-collapsable-item {\n  display: none;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item > fuse-vertical-navigation-group-item > .fuse-vertical-navigation-item-wrapper,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item > fuse-vertical-navigation-group-item > .fuse-vertical-navigation-item-wrapper {\n  display: none;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-compact .fuse-vertical-navigation-aside-wrapper {\n  left: var(--fuse-vertical-navigation-compact-width);\n}\n:root {\n  --fuse-vertical-navigation-width: 280px;\n  --fuse-vertical-navigation-dense-width: 80px;\n}\nfuse-vertical-navigation {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-mode-over) {\n  width: var(--fuse-vertical-navigation-dense-width);\n  min-width: var(--fuse-vertical-navigation-dense-width);\n  max-width: var(--fuse-vertical-navigation-dense-width);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-mode-over).fuse-vertical-navigation-position-left {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-mode-over).fuse-vertical-navigation-position-left.fuse-vertical-navigation-mode-side {\n  margin-left: calc(var(--fuse-vertical-navigation-dense-width) * -1);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-mode-over).fuse-vertical-navigation-position-left.fuse-vertical-navigation-opened {\n  margin-left: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-mode-over).fuse-vertical-navigation-position-right {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-mode-over).fuse-vertical-navigation-position-right.fuse-vertical-navigation-mode-side {\n  margin-right: calc(var(--fuse-vertical-navigation-dense-width) * -1);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-mode-over).fuse-vertical-navigation-position-right.fuse-vertical-navigation-opened {\n  margin-right: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-mode-over).fuse-vertical-navigation-position-right .fuse-vertical-navigation-aside-wrapper {\n  left: auto;\n  right: var(--fuse-vertical-navigation-dense-width);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-mode-over).fuse-vertical-navigation-position-right.fuse-vertical-navigation-hover .fuse-vertical-navigation-aside-wrapper {\n  left: auto;\n  right: var(--fuse-vertical-navigation-width);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item {\n  width: calc(var(--fuse-vertical-navigation-dense-width) - 24px);\n  min-width: calc(var(--fuse-vertical-navigation-dense-width) - 24px);\n  max-width: calc(var(--fuse-vertical-navigation-dense-width) - 24px);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-arrow,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-arrow,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-arrow,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-arrow,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-group-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper {\n  transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-group-item:first-of-type {\n  margin-top: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-hover):not(.fuse-vertical-navigation-mode-over) {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-hover):not(.fuse-vertical-navigation-mode-over) .fuse-vertical-navigation-wrapper {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-hover):not(.fuse-vertical-navigation-mode-over) .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item {\n  padding: 10px 16px;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-hover):not(.fuse-vertical-navigation-mode-over) .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-arrow,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-hover):not(.fuse-vertical-navigation-mode-over) .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-hover):not(.fuse-vertical-navigation-mode-over) .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper {\n  white-space: nowrap;\n  opacity: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-hover):not(.fuse-vertical-navigation-mode-over) .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-collapsable-item .fuse-vertical-navigation-item-children {\n  display: none;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense:not(.fuse-vertical-navigation-hover):not(.fuse-vertical-navigation-mode-over) .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content fuse-vertical-navigation-group-item > .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item:before {\n  content: "";\n  position: absolute;\n  top: 20px;\n  width: 23px;\n  border-top-width: 2px;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense .fuse-vertical-navigation-aside-wrapper {\n  left: var(--fuse-vertical-navigation-dense-width);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense.fuse-vertical-navigation-hover .fuse-vertical-navigation-wrapper {\n  width: var(--fuse-vertical-navigation-width);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense.fuse-vertical-navigation-hover .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item {\n  width: calc(var(--fuse-vertical-navigation-width) - 24px);\n  min-width: calc(var(--fuse-vertical-navigation-width) - 24px);\n  max-width: calc(var(--fuse-vertical-navigation-width) - 24px);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense.fuse-vertical-navigation-hover .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-arrow,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense.fuse-vertical-navigation-hover .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense.fuse-vertical-navigation-hover .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper {\n  white-space: nowrap;\n  animation: removeWhiteSpaceNoWrap 1ms linear 350ms;\n  animation-fill-mode: forwards;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-dense.fuse-vertical-navigation-hover .fuse-vertical-navigation-aside-wrapper {\n  left: var(--fuse-vertical-navigation-width);\n}\n@keyframes removeWhiteSpaceNoWrap {\n  0% {\n    white-space: nowrap;\n  }\n  99% {\n    white-space: nowrap;\n  }\n  100% {\n    white-space: normal;\n  }\n}\n:root {\n  --fuse-vertical-navigation-thin-width: 80px;\n}\nfuse-vertical-navigation {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin {\n  width: var(--fuse-vertical-navigation-thin-width);\n  min-width: var(--fuse-vertical-navigation-thin-width);\n  max-width: var(--fuse-vertical-navigation-thin-width);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin.fuse-vertical-navigation-position-left.fuse-vertical-navigation-mode-side {\n  margin-left: calc(var(--fuse-vertical-navigation-thin-width) * -1);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin.fuse-vertical-navigation-position-left.fuse-vertical-navigation-opened {\n  margin-left: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin.fuse-vertical-navigation-position-right.fuse-vertical-navigation-mode-side {\n  margin-right: calc(var(--fuse-vertical-navigation-thin-width) * -1);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin.fuse-vertical-navigation-position-right.fuse-vertical-navigation-opened {\n  margin-right: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin.fuse-vertical-navigation-position-right .fuse-vertical-navigation-aside-wrapper {\n  left: auto;\n  right: var(--fuse-vertical-navigation-thin-width);\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper {\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item {\n  flex-direction: column;\n  justify-content: center;\n  height: 64px;\n  min-height: 64px;\n  max-height: 64px;\n  padding: 0 16px;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item {\n  justify-content: center;\n  padding: 12px;\n  border-radius: 4px;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-icon {\n  margin: 0;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-arrow,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge-content,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-aside-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-arrow,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-badge-content,\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-basic-item .fuse-vertical-navigation-item-wrapper .fuse-vertical-navigation-item .fuse-vertical-navigation-item-title-wrapper {\n  display: none;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-collapsable-item {\n  display: none;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-wrapper .fuse-vertical-navigation-content > fuse-vertical-navigation-group-item > .fuse-vertical-navigation-item-wrapper {\n  display: none;\n}\nfuse-vertical-navigation.fuse-vertical-navigation-appearance-thin .fuse-vertical-navigation-aside-wrapper {\n  left: var(--fuse-vertical-navigation-thin-width);\n}\n/*# sourceMappingURL=vertical.component.css.map */\n'], encapsulation: 2, data: { animation: fuseAnimations }, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseVerticalNavigationComponent, { className: "FuseVerticalNavigationComponent", filePath: "src/@fuse/components/navigation/vertical/vertical.component.ts", lineNumber: 77 });
})();

// src/@fuse/components/navigation/horizontal/components/basic/basic.component.ts
var _c05 = (a0) => ({ "fuse-horizontal-navigation-item-active-forced": a0 });
var _c13 = (a0) => [a0];
function FuseHorizontalNavigationBasicItemComponent_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, FuseHorizontalNavigationBasicItemComponent_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c05, ctx_r0.item.active))("routerLink", \u0275\u0275pureFunction1(12, _c13, ctx_r0.item.link))("fragment", (tmp_4_0 = ctx_r0.item.fragment) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : null)("preserveFragment", (tmp_5_0 = ctx_r0.item.preserveFragment) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false)("queryParams", (tmp_6_0 = ctx_r0.item.queryParams) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : null)("queryParamsHandling", (tmp_7_0 = ctx_r0.item.queryParamsHandling) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : null)("routerLinkActive", "fuse-horizontal-navigation-item-active")("routerLinkActiveOptions", ctx_r0.isActiveMatchOptions)("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 3);
    \u0275\u0275template(1, FuseHorizontalNavigationBasicItemComponent_Conditional_2_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("href", ctx_r0.item.link, \u0275\u0275sanitizeUrl)("target", ctx_r0.item.target || "_self")("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function FuseHorizontalNavigationBasicItemComponent_Conditional_3_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.item.function(ctx_r0.item));
    });
    \u0275\u0275template(1, FuseHorizontalNavigationBasicItemComponent_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c05, ctx_r0.item.active))("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275listener("click", function FuseHorizontalNavigationBasicItemComponent_Conditional_4_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.item.function(ctx_r0.item));
    });
    \u0275\u0275template(1, FuseHorizontalNavigationBasicItemComponent_Conditional_4_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c05, ctx_r0.item.active))("routerLink", \u0275\u0275pureFunction1(12, _c13, ctx_r0.item.link))("fragment", (tmp_4_0 = ctx_r0.item.fragment) !== null && tmp_4_0 !== void 0 ? tmp_4_0 : null)("preserveFragment", (tmp_5_0 = ctx_r0.item.preserveFragment) !== null && tmp_5_0 !== void 0 ? tmp_5_0 : false)("queryParams", (tmp_6_0 = ctx_r0.item.queryParams) !== null && tmp_6_0 !== void 0 ? tmp_6_0 : null)("queryParamsHandling", (tmp_7_0 = ctx_r0.item.queryParamsHandling) !== null && tmp_7_0 !== void 0 ? tmp_7_0 : null)("routerLinkActive", "fuse-horizontal-navigation-item-active")("routerLinkActiveOptions", ctx_r0.isActiveMatchOptions)("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 10);
    \u0275\u0275listener("click", function FuseHorizontalNavigationBasicItemComponent_Conditional_5_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.item.function(ctx_r0.item));
    });
    \u0275\u0275template(1, FuseHorizontalNavigationBasicItemComponent_Conditional_5_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("href", ctx_r0.item.link, \u0275\u0275sanitizeUrl)("target", ctx_r0.item.target || "_self")("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, FuseHorizontalNavigationBasicItemComponent_Conditional_6_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(3, _c05, ctx_r0.item.active))("matTooltip", ctx_r0.item.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseHorizontalNavigationBasicItemComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, FuseHorizontalNavigationBasicItemComponent_Conditional_7_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const itemTemplate_r2 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r2);
  }
}
function FuseHorizontalNavigationBasicItemComponent_ng_template_8_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", ctx_r0.item.classes == null ? null : ctx_r0.item.classes.icon)("svgIcon", ctx_r0.item.icon);
  }
}
function FuseHorizontalNavigationBasicItemComponent_ng_template_8_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "span", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.classes == null ? null : ctx_r0.item.classes.subtitle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.subtitle, " ");
  }
}
function FuseHorizontalNavigationBasicItemComponent_ng_template_8_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", ctx_r0.item.badge.classes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.badge.title, " ");
  }
}
function FuseHorizontalNavigationBasicItemComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseHorizontalNavigationBasicItemComponent_ng_template_8_Conditional_0_Template, 1, 2, "mat-icon", 11);
    \u0275\u0275elementStart(1, "div", 12)(2, "div", 13)(3, "span", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, FuseHorizontalNavigationBasicItemComponent_ng_template_8_Conditional_5_Template, 3, 2, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FuseHorizontalNavigationBasicItemComponent_ng_template_8_Conditional_6_Template, 3, 2, "div", 16);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.item.icon ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", ctx_r0.item.classes == null ? null : ctx_r0.item.classes.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.item.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.subtitle ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item.badge ? 6 : -1);
  }
}
var FuseHorizontalNavigationBasicItemComponent = class _FuseHorizontalNavigationBasicItemComponent {
  constructor() {
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._fuseNavigationService = inject(FuseNavigationService);
    this._fuseUtilsService = inject(FuseUtilsService);
    this.isActiveMatchOptions = this._fuseUtilsService.subsetMatchOptions;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.isActiveMatchOptions = this.item.isActiveMatchOptions ?? this.item.exactMatch ? this._fuseUtilsService.exactMatchOptions : this._fuseUtilsService.subsetMatchOptions;
    this._fuseHorizontalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
    this._changeDetectorRef.markForCheck();
    this._fuseHorizontalNavigationComponent.onRefreshed.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
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
  static {
    this.\u0275fac = function FuseHorizontalNavigationBasicItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseHorizontalNavigationBasicItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseHorizontalNavigationBasicItemComponent, selectors: [["fuse-horizontal-navigation-basic-item"]], inputs: { item: "item", name: "name" }, decls: 10, vars: 10, consts: [["itemTemplate", ""], [1, "fuse-horizontal-navigation-item-wrapper", 3, "ngClass"], [1, "fuse-horizontal-navigation-item", 3, "ngClass", "routerLink", "fragment", "preserveFragment", "queryParams", "queryParamsHandling", "routerLinkActive", "routerLinkActiveOptions", "matTooltip"], [1, "fuse-horizontal-navigation-item", 3, "href", "target", "matTooltip"], [1, "fuse-horizontal-navigation-item", 3, "ngClass", "matTooltip"], ["mat-menu-item", "", 1, "fuse-horizontal-navigation-item", 3, "href", "target", "matTooltip"], [1, "fuse-horizontal-navigation-item", "fuse-horizontal-navigation-item-disabled"], [4, "ngTemplateOutlet"], [1, "fuse-horizontal-navigation-item", 3, "click", "ngClass", "matTooltip"], [1, "fuse-horizontal-navigation-item", 3, "click", "ngClass", "routerLink", "fragment", "preserveFragment", "queryParams", "queryParamsHandling", "routerLinkActive", "routerLinkActiveOptions", "matTooltip"], ["mat-menu-item", "", 1, "fuse-horizontal-navigation-item", 3, "click", "href", "target", "matTooltip"], [1, "fuse-horizontal-navigation-item-icon", 3, "ngClass", "svgIcon"], [1, "fuse-horizontal-navigation-item-title-wrapper"], [1, "fuse-horizontal-navigation-item-title"], [3, "ngClass"], [1, "fuse-horizontal-navigation-item-subtitle", "text-hint"], [1, "fuse-horizontal-navigation-item-badge"], [1, "fuse-horizontal-navigation-item-badge-content", 3, "ngClass"]], template: function FuseHorizontalNavigationBasicItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275template(1, FuseHorizontalNavigationBasicItemComponent_Conditional_1_Template, 2, 14, "div", 2)(2, FuseHorizontalNavigationBasicItemComponent_Conditional_2_Template, 2, 4, "a", 3)(3, FuseHorizontalNavigationBasicItemComponent_Conditional_3_Template, 2, 5, "div", 4)(4, FuseHorizontalNavigationBasicItemComponent_Conditional_4_Template, 2, 14, "div", 2)(5, FuseHorizontalNavigationBasicItemComponent_Conditional_5_Template, 2, 4, "a", 5)(6, FuseHorizontalNavigationBasicItemComponent_Conditional_6_Template, 2, 5, "div", 4)(7, FuseHorizontalNavigationBasicItemComponent_Conditional_7_Template, 2, 1, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(8, FuseHorizontalNavigationBasicItemComponent_ng_template_8_Template, 7, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275classProp("fuse-horizontal-navigation-item-has-subtitle", !!ctx.item.subtitle);
        \u0275\u0275property("ngClass", ctx.item.classes == null ? null : ctx.item.classes.wrapper);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.link && !ctx.item.externalLink && !ctx.item.function && !ctx.item.disabled ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.link && ctx.item.externalLink && !ctx.item.function && !ctx.item.disabled ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.item.link && ctx.item.function && !ctx.item.disabled ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.link && !ctx.item.externalLink && ctx.item.function && !ctx.item.disabled ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.link && ctx.item.externalLink && ctx.item.function && !ctx.item.disabled ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.item.link && !ctx.item.function && !ctx.item.disabled ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item.disabled ? 7 : -1);
      }
    }, dependencies: [
      NgClass,
      RouterLink,
      RouterLinkActive,
      MatTooltipModule,
      MatTooltip,
      NgTemplateOutlet,
      MatMenuModule,
      MatMenuItem,
      MatIconModule,
      MatIcon
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseHorizontalNavigationBasicItemComponent, { className: "FuseHorizontalNavigationBasicItemComponent", filePath: "src/@fuse/components/navigation/horizontal/components/basic/basic.component.ts", lineNumber: 39 });
})();

// src/@fuse/components/navigation/horizontal/components/divider/divider.component.ts
var FuseHorizontalNavigationDividerItemComponent = class _FuseHorizontalNavigationDividerItemComponent {
  constructor() {
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._fuseNavigationService = inject(FuseNavigationService);
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._fuseHorizontalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
    this._fuseHorizontalNavigationComponent.onRefreshed.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
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
  static {
    this.\u0275fac = function FuseHorizontalNavigationDividerItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseHorizontalNavigationDividerItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseHorizontalNavigationDividerItemComponent, selectors: [["fuse-horizontal-navigation-divider-item"]], inputs: { item: "item", name: "name" }, decls: 1, vars: 1, consts: [[1, "fuse-horizontal-navigation-item-wrapper", "divider", 3, "ngClass"]], template: function FuseHorizontalNavigationDividerItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.item.classes == null ? null : ctx.item.classes.wrapper);
      }
    }, dependencies: [NgClass], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseHorizontalNavigationDividerItemComponent, { className: "FuseHorizontalNavigationDividerItemComponent", filePath: "src/@fuse/components/navigation/horizontal/components/divider/divider.component.ts", lineNumber: 22 });
})();

// src/@fuse/components/navigation/horizontal/components/branch/branch.component.ts
var _c06 = ["matMenu"];
var _c14 = (a0, a1) => ({ "fuse-horizontal-navigation-menu-active": a0, "fuse-horizontal-navigation-menu-active-forced": a1 });
var _c22 = (a0) => ({ $implicit: a0 });
var _c32 = (a0, a1) => ({ "fuse-horizontal-navigation-item-disabled": a0, "fuse-horizontal-navigation-item-active-forced": a1 });
function FuseHorizontalNavigationBranchItemComponent_Conditional_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseHorizontalNavigationBranchItemComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6, 2);
    \u0275\u0275listener("onMenuOpen", function FuseHorizontalNavigationBranchItemComponent_Conditional_0_Template_div_onMenuOpen_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerChangeDetection());
    })("onMenuClose", function FuseHorizontalNavigationBranchItemComponent_Conditional_0_Template_div_onMenuClose_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.triggerChangeDetection());
    });
    \u0275\u0275template(2, FuseHorizontalNavigationBranchItemComponent_Conditional_0_ng_container_2_Template, 1, 0, "ng-container", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const trigger_r3 = \u0275\u0275reference(1);
    const ctx_r1 = \u0275\u0275nextContext();
    const matMenu_r4 = \u0275\u0275reference(2);
    const itemTemplate_r5 = \u0275\u0275reference(6);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c14, trigger_r3.menuOpen, ctx_r1.item.active))("matMenuTriggerFor", matMenu_r4);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c22, ctx_r1.item));
  }
}
function FuseHorizontalNavigationBranchItemComponent_For_4_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "fuse-horizontal-navigation-basic-item", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", item_r6.disabled);
    \u0275\u0275advance();
    \u0275\u0275property("item", item_r6)("name", ctx_r1.name);
  }
}
function FuseHorizontalNavigationBranchItemComponent_For_4_Conditional_0_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function FuseHorizontalNavigationBranchItemComponent_For_4_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275template(1, FuseHorizontalNavigationBranchItemComponent_For_4_Conditional_0_Conditional_1_ng_container_1_Template, 1, 0, "ng-container", 7);
    \u0275\u0275element(2, "fuse-horizontal-navigation-branch-item", 12, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const branch_r7 = \u0275\u0275reference(3);
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const itemTemplate_r5 = \u0275\u0275reference(6);
    \u0275\u0275property("disabled", item_r6.disabled)("matMenuTriggerFor", branch_r7.matMenu);
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", itemTemplate_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c22, item_r6));
    \u0275\u0275advance();
    \u0275\u0275property("child", true)("item", item_r6)("name", ctx_r1.name);
  }
}
function FuseHorizontalNavigationBranchItemComponent_For_4_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "fuse-horizontal-navigation-divider-item", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("item", item_r6)("name", ctx_r1.name);
  }
}
function FuseHorizontalNavigationBranchItemComponent_For_4_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseHorizontalNavigationBranchItemComponent_For_4_Conditional_0_Conditional_0_Template, 2, 3, "div", 8)(1, FuseHorizontalNavigationBranchItemComponent_For_4_Conditional_0_Conditional_1_Template, 4, 9, "div", 9)(2, FuseHorizontalNavigationBranchItemComponent_For_4_Conditional_0_Conditional_2_Template, 2, 2, "div", 10);
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(item_r6.type === "basic" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r6.type === "aside" || item_r6.type === "collapsable" || item_r6.type === "group" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r6.type === "divider" ? 2 : -1);
  }
}
function FuseHorizontalNavigationBranchItemComponent_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseHorizontalNavigationBranchItemComponent_For_4_Conditional_0_Template, 3, 3);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275conditional(item_r6.hidden && !item_r6.hidden(item_r6) || !item_r6.hidden ? 0 : -1);
  }
}
function FuseHorizontalNavigationBranchItemComponent_ng_template_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 15);
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", item_r8.classes == null ? null : item_r8.classes.icon)("svgIcon", item_r8.icon);
  }
}
function FuseHorizontalNavigationBranchItemComponent_ng_template_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "span", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", item_r8.classes == null ? null : item_r8.classes.subtitle);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r8.subtitle, " ");
  }
}
function FuseHorizontalNavigationBranchItemComponent_ng_template_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", item_r8.badge.classes);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r8.badge.title, " ");
  }
}
function FuseHorizontalNavigationBranchItemComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275template(2, FuseHorizontalNavigationBranchItemComponent_ng_template_5_Conditional_2_Template, 1, 2, "mat-icon", 15);
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17)(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, FuseHorizontalNavigationBranchItemComponent_ng_template_5_Conditional_7_Template, 3, 2, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FuseHorizontalNavigationBranchItemComponent_ng_template_5_Conditional_8_Template, 3, 2, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275classProp("fuse-horizontal-navigation-item-has-subtitle", !!item_r8.subtitle);
    \u0275\u0275property("ngClass", item_r8.classes == null ? null : item_r8.classes.wrapper);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(10, _c32, item_r8.disabled, item_r8.active))("matTooltip", item_r8.tooltip || "");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r8.icon ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", item_r8.classes == null ? null : item_r8.classes.title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r8.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r8.subtitle ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r8.badge ? 8 : -1);
  }
}
var FuseHorizontalNavigationBranchItemComponent = class _FuseHorizontalNavigationBranchItemComponent {
  constructor() {
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._fuseNavigationService = inject(FuseNavigationService);
    this.child = false;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._fuseHorizontalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
    this._fuseHorizontalNavigationComponent.onRefreshed.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
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
   * Trigger the change detection
   */
  triggerChangeDetection() {
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
    this.\u0275fac = function FuseHorizontalNavigationBranchItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseHorizontalNavigationBranchItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseHorizontalNavigationBranchItemComponent, selectors: [["fuse-horizontal-navigation-branch-item"]], viewQuery: function FuseHorizontalNavigationBranchItemComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.matMenu = _t.first);
      }
    }, inputs: { child: "child", item: "item", name: "name" }, decls: 7, vars: 2, consts: [["matMenu", "matMenu"], ["itemTemplate", ""], ["trigger", "matMenuTrigger"], ["branch", ""], [3, "ngClass", "matMenuTriggerFor"], [1, "fuse-horizontal-navigation-menu-panel", 3, "overlapTrigger"], [3, "onMenuOpen", "onMenuClose", "ngClass", "matMenuTriggerFor"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["mat-menu-item", "", 1, "fuse-horizontal-navigation-menu-item", 3, "disabled"], ["mat-menu-item", "", 1, "fuse-horizontal-navigation-menu-item", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 1, "fuse-horizontal-navigation-menu-item"], [3, "item", "name"], [3, "child", "item", "name"], [1, "fuse-horizontal-navigation-item-wrapper", 3, "ngClass"], [1, "fuse-horizontal-navigation-item", 3, "ngClass", "matTooltip"], [1, "fuse-horizontal-navigation-item-icon", 3, "ngClass", "svgIcon"], [1, "fuse-horizontal-navigation-item-title-wrapper"], [1, "fuse-horizontal-navigation-item-title"], [3, "ngClass"], [1, "fuse-horizontal-navigation-item-subtitle", "text-hint"], [1, "fuse-horizontal-navigation-item-badge"], [1, "fuse-horizontal-navigation-item-badge-content", 3, "ngClass"]], template: function FuseHorizontalNavigationBranchItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, FuseHorizontalNavigationBranchItemComponent_Conditional_0_Template, 3, 9, "div", 4);
        \u0275\u0275elementStart(1, "mat-menu", 5, 0);
        \u0275\u0275repeaterCreate(3, FuseHorizontalNavigationBranchItemComponent_For_4_Template, 1, 1, null, null, ctx.trackByFn, true);
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, FuseHorizontalNavigationBranchItemComponent_ng_template_5_Template, 9, 13, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.child ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("overlapTrigger", false);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.item.children);
      }
    }, dependencies: () => [
      _FuseHorizontalNavigationBranchItemComponent,
      NgClass,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      NgTemplateOutlet,
      FuseHorizontalNavigationBasicItemComponent,
      FuseHorizontalNavigationDividerItemComponent,
      MatTooltipModule,
      MatTooltip,
      MatIconModule,
      MatIcon
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseHorizontalNavigationBranchItemComponent, { className: "FuseHorizontalNavigationBranchItemComponent", filePath: "src/@fuse/components/navigation/horizontal/components/branch/branch.component.ts", lineNumber: 39 });
})();

// src/@fuse/components/navigation/horizontal/components/spacer/spacer.component.ts
var FuseHorizontalNavigationSpacerItemComponent = class _FuseHorizontalNavigationSpacerItemComponent {
  constructor() {
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._fuseNavigationService = inject(FuseNavigationService);
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._fuseHorizontalNavigationComponent = this._fuseNavigationService.getComponent(this.name);
    this._fuseHorizontalNavigationComponent.onRefreshed.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
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
  static {
    this.\u0275fac = function FuseHorizontalNavigationSpacerItemComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseHorizontalNavigationSpacerItemComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseHorizontalNavigationSpacerItemComponent, selectors: [["fuse-horizontal-navigation-spacer-item"]], inputs: { item: "item", name: "name" }, decls: 1, vars: 1, consts: [[1, "fuse-horizontal-navigation-item-wrapper", 3, "ngClass"]], template: function FuseHorizontalNavigationSpacerItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275property("ngClass", ctx.item.classes == null ? null : ctx.item.classes.wrapper);
      }
    }, dependencies: [NgClass], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseHorizontalNavigationSpacerItemComponent, { className: "FuseHorizontalNavigationSpacerItemComponent", filePath: "src/@fuse/components/navigation/horizontal/components/spacer/spacer.component.ts", lineNumber: 22 });
})();

// src/@fuse/components/navigation/horizontal/horizontal.component.ts
function FuseHorizontalNavigationComponent_For_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-horizontal-navigation-basic-item", 1);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r1)("name", ctx_r1.name);
  }
}
function FuseHorizontalNavigationComponent_For_2_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-horizontal-navigation-branch-item", 1);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r1)("name", ctx_r1.name);
  }
}
function FuseHorizontalNavigationComponent_For_2_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "fuse-horizontal-navigation-spacer-item", 1);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("item", item_r1)("name", ctx_r1.name);
  }
}
function FuseHorizontalNavigationComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseHorizontalNavigationComponent_For_2_Conditional_0_Conditional_0_Template, 1, 2, "fuse-horizontal-navigation-basic-item", 1)(1, FuseHorizontalNavigationComponent_For_2_Conditional_0_Conditional_1_Template, 1, 2, "fuse-horizontal-navigation-branch-item", 1)(2, FuseHorizontalNavigationComponent_For_2_Conditional_0_Conditional_2_Template, 1, 2, "fuse-horizontal-navigation-spacer-item", 1);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275conditional(item_r1.type === "basic" ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.type === "aside" || item_r1.type === "collapsable" || item_r1.type === "group" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r1.type === "spacer" ? 2 : -1);
  }
}
function FuseHorizontalNavigationComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, FuseHorizontalNavigationComponent_For_2_Conditional_0_Template, 3, 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275conditional(item_r1.hidden && !item_r1.hidden(item_r1) || !item_r1.hidden ? 0 : -1);
  }
}
var FuseHorizontalNavigationComponent = class _FuseHorizontalNavigationComponent {
  constructor() {
    this._changeDetectorRef = inject(ChangeDetectorRef);
    this._fuseNavigationService = inject(FuseNavigationService);
    this._fuseUtilsService = inject(FuseUtilsService);
    this.name = this._fuseUtilsService.randomId();
    this.onRefreshed = new ReplaySubject(1);
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On changes
   *
   * @param changes
   */
  ngOnChanges(changes) {
    if ("navigation" in changes) {
      this._changeDetectorRef.markForCheck();
    }
  }
  /**
   * On init
   */
  ngOnInit() {
    if (this.name === "") {
      this.name = this._fuseUtilsService.randomId();
    }
    this._fuseNavigationService.registerComponent(this.name, this);
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._fuseNavigationService.deregisterComponent(this.name);
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Refresh the component to apply the changes
   */
  refresh() {
    this._changeDetectorRef.markForCheck();
    this.onRefreshed.next(true);
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
    this.\u0275fac = function FuseHorizontalNavigationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseHorizontalNavigationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseHorizontalNavigationComponent, selectors: [["fuse-horizontal-navigation"]], inputs: { name: "name", navigation: "navigation" }, exportAs: ["fuseHorizontalNavigation"], features: [\u0275\u0275NgOnChangesFeature], decls: 3, vars: 0, consts: [[1, "fuse-horizontal-navigation-wrapper"], [1, "fuse-horizontal-navigation-menu-item", 3, "item", "name"]], template: function FuseHorizontalNavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275repeaterCreate(1, FuseHorizontalNavigationComponent_For_2_Template, 1, 1, null, null, ctx.trackByFn, true);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.navigation);
      }
    }, dependencies: [
      FuseHorizontalNavigationBasicItemComponent,
      FuseHorizontalNavigationBranchItemComponent,
      FuseHorizontalNavigationSpacerItemComponent
    ], styles: ["/* src/@fuse/components/navigation/horizontal/horizontal.component.scss */\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper {\n  display: flex;\n  align-items: center;\n}\n@media (min-width: 600px) {\n  fuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-basic-item:hover .fuse-horizontal-navigation-item-wrapper,\n  fuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-branch-item:hover .fuse-horizontal-navigation-item-wrapper {\n    background-color: var(--fuse-bg-hover);\n  }\n}\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-wrapper,\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-branch-item .fuse-horizontal-navigation-item-wrapper {\n  border-radius: 4px;\n  overflow: hidden;\n}\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-wrapper .fuse-horizontal-navigation-item,\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-branch-item .fuse-horizontal-navigation-item-wrapper .fuse-horizontal-navigation-item {\n  padding: 0 16px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-wrapper .fuse-horizontal-navigation-item .fuse-horizontal-navigation-item-icon,\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-branch-item .fuse-horizontal-navigation-item-wrapper .fuse-horizontal-navigation-item .fuse-horizontal-navigation-item-icon {\n  margin-right: 12px;\n}\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active .fuse-horizontal-navigation-item-title,\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active-forced .fuse-horizontal-navigation-item-title {\n  --tw-text-opacity: 1 !important;\n  color: rgba(var(--fuse-primary-rgb), var(--tw-text-opacity, 1)) !important;\n}\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active .fuse-horizontal-navigation-item-subtitle,\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active-forced .fuse-horizontal-navigation-item-subtitle {\n  --tw-text-opacity: 1 !important;\n  color: rgba(var(--fuse-primary-400-rgb), var(--tw-text-opacity, 1)) !important;\n}\n.dark fuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active .fuse-horizontal-navigation-item-subtitle,\n.dark fuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active-forced .fuse-horizontal-navigation-item-subtitle {\n  --tw-text-opacity: 1 !important;\n  color: rgba(var(--fuse-primary-600-rgb), var(--tw-text-opacity, 1)) !important;\n}\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active .fuse-horizontal-navigation-item-icon,\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active-forced .fuse-horizontal-navigation-item-icon {\n  --tw-text-opacity: 1 !important;\n  color: rgba(var(--fuse-primary-rgb), var(--tw-text-opacity, 1)) !important;\n}\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-branch-item .fuse-horizontal-navigation-menu-active .fuse-horizontal-navigation-item-wrapper,\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-branch-item .fuse-horizontal-navigation-menu-active-forced .fuse-horizontal-navigation-item-wrapper {\n  background-color: var(--fuse-bg-hover);\n}\nfuse-horizontal-navigation .fuse-horizontal-navigation-wrapper fuse-horizontal-navigation-spacer-item {\n  margin: 12px 0;\n}\n.fuse-horizontal-navigation-menu-panel .fuse-horizontal-navigation-menu-item {\n  height: auto;\n  min-height: 0;\n  line-height: normal;\n  white-space: normal;\n}\n.fuse-horizontal-navigation-menu-panel .fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-basic-item,\n.fuse-horizontal-navigation-menu-panel .fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-branch-item,\n.fuse-horizontal-navigation-menu-panel .fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-divider-item {\n  display: flex;\n  flex: 1 1 auto;\n}\n.fuse-horizontal-navigation-menu-panel .fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-divider-item {\n  margin: 8px -16px;\n}\n.fuse-horizontal-navigation-menu-panel .fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-divider-item .fuse-horizontal-navigation-item-wrapper {\n  height: 1px;\n  box-shadow: 0 1px 0 0;\n}\n.fuse-horizontal-navigation-menu-item {\n}\n.fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active .fuse-horizontal-navigation-item-title,\n.fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active-forced .fuse-horizontal-navigation-item-title {\n  --tw-text-opacity: 1 !important;\n  color: rgba(var(--fuse-primary-rgb), var(--tw-text-opacity, 1)) !important;\n}\n.fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active .fuse-horizontal-navigation-item-subtitle,\n.fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active-forced .fuse-horizontal-navigation-item-subtitle {\n  --tw-text-opacity: 1 !important;\n  color: rgba(var(--fuse-primary-400-rgb), var(--tw-text-opacity, 1)) !important;\n}\n.dark .fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active .fuse-horizontal-navigation-item-subtitle,\n.dark .fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active-forced .fuse-horizontal-navigation-item-subtitle {\n  --tw-text-opacity: 1 !important;\n  color: rgba(var(--fuse-primary-600-rgb), var(--tw-text-opacity, 1)) !important;\n}\n.fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active .fuse-horizontal-navigation-item-icon,\n.fuse-horizontal-navigation-menu-item fuse-horizontal-navigation-basic-item .fuse-horizontal-navigation-item-active-forced .fuse-horizontal-navigation-item-icon {\n  --tw-text-opacity: 1 !important;\n  color: rgba(var(--fuse-primary-rgb), var(--tw-text-opacity, 1)) !important;\n}\n.fuse-horizontal-navigation-menu-item .fuse-horizontal-navigation-item-wrapper {\n  width: 100%;\n}\n.fuse-horizontal-navigation-menu-item .fuse-horizontal-navigation-item-wrapper.fuse-horizontal-navigation-item-has-subtitle .fuse-horizontal-navigation-item {\n  min-height: 56px;\n}\n.fuse-horizontal-navigation-menu-item .fuse-horizontal-navigation-item-wrapper .fuse-horizontal-navigation-item {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  min-height: 48px;\n  width: 100%;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n}\n.fuse-horizontal-navigation-menu-item .fuse-horizontal-navigation-item-wrapper .fuse-horizontal-navigation-item .fuse-horizontal-navigation-item-title-wrapper .fuse-horizontal-navigation-item-subtitle {\n  font-size: 12px;\n}\n.fuse-horizontal-navigation-menu-item .fuse-horizontal-navigation-item-wrapper .fuse-horizontal-navigation-item .fuse-horizontal-navigation-item-badge {\n  margin-left: auto;\n}\n.fuse-horizontal-navigation-menu-item .fuse-horizontal-navigation-item-wrapper .fuse-horizontal-navigation-item .fuse-horizontal-navigation-item-badge .fuse-horizontal-navigation-item-badge-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: 600;\n  white-space: nowrap;\n  height: 20px;\n}\n/*# sourceMappingURL=horizontal.component.css.map */\n"], encapsulation: 2, data: { animation: fuseAnimations }, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseHorizontalNavigationComponent, { className: "FuseHorizontalNavigationComponent", filePath: "src/@fuse/components/navigation/horizontal/horizontal.component.ts", lineNumber: 36 });
})();

export {
  FuseNavigationService,
  FuseHorizontalNavigationComponent,
  FuseScrollbarDirective,
  FuseVerticalNavigationComponent
};
/*! Bundled license information:

perfect-scrollbar/dist/perfect-scrollbar.esm.js:
  (*!
   * perfect-scrollbar v1.5.6
   * Copyright 2024 Hyunje Jun, MDBootstrap and Contributors
   * Licensed under MIT
   *)
*/
//# sourceMappingURL=chunk-MACOU75K.js.map
