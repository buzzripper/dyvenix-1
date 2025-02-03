import {
  FuseHighlightComponent
} from "./chunk-6QCSQUVR.js";
import {
  FuseCardComponent
} from "./chunk-QW3RDUMU.js";
import {
  FuseScrollResetDirective
} from "./chunk-GNYPANLX.js";
import {
  FuseMasonryComponent
} from "./chunk-3O4PN336.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup,
  MatTabsModule
} from "./chunk-4XTS4DFY.js";
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule
} from "./chunk-74A4XWO4.js";
import {
  FuseDrawerComponent,
  FuseLoadingService
} from "./chunk-CYJ5FECQ.js";
import {
  FuseNavigationService,
  FuseVerticalNavigationComponent
} from "./chunk-MACOU75K.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-F65M35UC.js";
import "./chunk-B6LWBRMU.js";
import "./chunk-BOL35CP3.js";
import {
  FuseMediaWatcherService
} from "./chunk-NDM3MP5U.js";
import "./chunk-YHH4B3V4.js";
import "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
import {
  FuseAlertComponent,
  FuseAlertService
} from "./chunk-OLPBZMG7.js";
import "./chunk-LWCQAMDH.js";
import "./chunk-BNTOCQMY.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-J5XV3GIF.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-JPDBWMRG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5AHQJJ5Y.js";
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatCommonModule,
  MatRipple,
  MatRippleModule,
  RippleState,
  _CdkPrivateStyleLoader,
  _StructuralStylesLoader
} from "./chunk-F6PEOSCL.js";
import {
  Directionality,
  Platform
} from "./chunk-EWZPTUTP.js";
import "./chunk-HKG3E5RP.js";
import "./chunk-WH7F4HUX.js";
import {
  RouterOutlet
} from "./chunk-WTEW5YKI.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import "./chunk-M6AYR6A2.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  Subject,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  booleanAttribute,
  finalize,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/ui/fuse-components/fuse-components.component.ts
var _c0 = ["matDrawer"];
var FuseComponentsComponent = class _FuseComponentsComponent {
  /**
   * Constructor
   */
  constructor(_fuseMediaWatcherService) {
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this._unsubscribeAll = new Subject();
    this.menuData = [
      {
        id: "fuse-components.libraries",
        title: "Libraries",
        type: "group",
        children: [
          {
            id: "fuse-components.libraries.mock-api",
            title: "MockAPI",
            type: "basic",
            link: "/ui/fuse-components/libraries/mock-api"
          }
        ]
      },
      {
        id: "fuse-components.components",
        title: "Components",
        type: "group",
        children: [
          {
            id: "fuse-components.components.alert",
            title: "Alert",
            type: "basic",
            link: "/ui/fuse-components/components/alert"
          },
          {
            id: "fuse-components.components.card",
            title: "Card",
            type: "basic",
            link: "/ui/fuse-components/components/card"
          },
          {
            id: "fuse-components.components.drawer",
            title: "Drawer",
            type: "basic",
            link: "/ui/fuse-components/components/drawer"
          },
          {
            id: "fuse-components.components.fullscreen",
            title: "Fullscreen",
            type: "basic",
            link: "/ui/fuse-components/components/fullscreen"
          },
          {
            id: "fuse-components.components.highlight",
            title: "Highlight",
            type: "basic",
            link: "/ui/fuse-components/components/highlight"
          },
          {
            id: "fuse-components.components.loading-bar",
            title: "Loading Bar",
            type: "basic",
            link: "/ui/fuse-components/components/loading-bar"
          },
          {
            id: "fuse-components.components.masonry",
            title: "Masonry",
            type: "basic",
            link: "/ui/fuse-components/components/masonry"
          },
          {
            id: "fuse-components.components.navigation",
            title: "Navigation",
            type: "basic",
            link: "/ui/fuse-components/components/navigation"
          }
        ]
      },
      {
        id: "fuse-components.directives",
        title: "Directives",
        type: "group",
        children: [
          {
            id: "fuse-components.directives.scrollbar",
            title: "Scrollbar",
            type: "basic",
            link: "/ui/fuse-components/directives/scrollbar"
          },
          {
            id: "fuse-components.directives.scroll-reset",
            title: "ScrollReset",
            type: "basic",
            link: "/ui/fuse-components/directives/scroll-reset"
          }
        ]
      },
      {
        id: "fuse-components.services",
        title: "Services",
        type: "group",
        children: [
          {
            id: "fuse-components.services.config",
            title: "Config",
            type: "basic",
            link: "/ui/fuse-components/services/config"
          },
          {
            id: "fuse-components.services.confirmation",
            title: "Confirmation",
            type: "basic",
            link: "/ui/fuse-components/services/confirmation"
          },
          {
            id: "fuse-components.services.splash-screen",
            title: "SplashScreen",
            type: "basic",
            link: "/ui/fuse-components/services/splash-screen"
          },
          {
            id: "fuse-components.services.media-watcher",
            title: "MediaWatcher",
            type: "basic",
            link: "/ui/fuse-components/services/media-watcher"
          }
        ]
      },
      {
        id: "fuse-components.pipes",
        title: "Pipes",
        type: "group",
        children: [
          {
            id: "fuse-components.pipes.find-by-key",
            title: "FindByKey",
            type: "basic",
            link: "/ui/fuse-components/pipes/find-by-key"
          }
        ]
      },
      {
        id: "fuse-components.validators",
        title: "Validators",
        type: "group",
        children: [
          {
            id: "fuse-components.validators.must-match",
            title: "MustMatch",
            type: "basic",
            link: "/ui/fuse-components/validators/must-match"
          }
        ]
      }
    ];
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._fuseMediaWatcherService.onMediaChange$.pipe(takeUntil(this._unsubscribeAll)).subscribe(({ matchingAliases }) => {
      if (matchingAliases.includes("md")) {
        this.drawerMode = "side";
        this.drawerOpened = true;
      } else {
        this.drawerMode = "over";
        this.drawerOpened = false;
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
  static {
    this.\u0275fac = function FuseComponentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseComponentsComponent)(\u0275\u0275directiveInject(FuseMediaWatcherService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseComponentsComponent, selectors: [["fuse-components"]], viewQuery: function FuseComponentsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.matDrawer = _t.first);
      }
    }, decls: 8, vars: 8, consts: [["matDrawer", ""], [1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-hidden"], [1, "h-full", "flex-auto"], [1, "flex", "w-60", "min-w-60", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], [3, "navigation", "inner", "mode", "name", "opened"], ["fuseScrollReset", "", 1, "flex", "flex-col"], [1, "flex-auto"]], template: function FuseComponentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-drawer-container", 2)(2, "mat-drawer", 3, 0);
        \u0275\u0275element(4, "fuse-vertical-navigation", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-drawer-content", 5)(6, "div", 6);
        \u0275\u0275element(7, "router-outlet");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        \u0275\u0275advance(2);
        \u0275\u0275property("navigation", ctx.menuData)("inner", true)("mode", "side")("name", "docs-core-features-navigation")("opened", true);
      }
    }, dependencies: [
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      FuseVerticalNavigationComponent,
      FuseScrollResetDirective,
      RouterOutlet
    ], styles: ["/* src/app/modules/admin/ui/fuse-components/fuse-components.component.scss */\nfuse-components fuse-vertical-navigation .fuse-vertical-navigation-wrapper {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=fuse-components.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseComponentsComponent, { className: "FuseComponentsComponent", filePath: "src/app/modules/admin/ui/fuse-components/fuse-components.component.ts", lineNumber: 30 });
})();

// src/app/modules/admin/ui/fuse-components/components/alert/alert.component.ts
function AlertComponent_ng_template_161_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 28)(1, "span", 29);
    \u0275\u0275text(2, "Primary alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Thank you for joining our newsletter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "fuse-alert", 28)(5, "span", 29);
    \u0275\u0275text(6, "Accent alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Your changes has been saved ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "fuse-alert", 28)(9, "span", 29);
    \u0275\u0275text(10, "Warn alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Fill all required fields to proceed next step ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "fuse-alert", 28)(13, "span", 29);
    \u0275\u0275text(14, "Basic alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " You have 3 new notifications ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "fuse-alert", 28)(17, "span", 29);
    \u0275\u0275text(18, "Info alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " This is a alert with an 'info' level severity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "fuse-alert", 28)(21, "span", 29);
    \u0275\u0275text(22, "Success alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " This is a alert with a 'success' level severity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "fuse-alert", 28)(25, "span", 29);
    \u0275\u0275text(26, "Warning alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " This is a alert with a 'warning' level severity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "fuse-alert", 28)(29, "span", 29);
    \u0275\u0275text(30, "Error alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " This is a alert with an 'error' level severity ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("type", "primary");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "accent");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "warn");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "basic");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "info");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "success");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "warning");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "error");
  }
}
function AlertComponent_ng_template_171_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 30)(1, "span", 29);
    \u0275\u0275text(2, "Primary alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Thank you for joining our newsletter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "fuse-alert", 30)(5, "span", 29);
    \u0275\u0275text(6, "Accent alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Your changes has been saved ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "fuse-alert", 30)(9, "span", 29);
    \u0275\u0275text(10, "Warn alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Fill all required fields to proceed next step ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "fuse-alert", 30)(13, "span", 29);
    \u0275\u0275text(14, "Basic alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " You have 3 new notifications ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "fuse-alert", 30)(17, "span", 29);
    \u0275\u0275text(18, "Info alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " This is a alert with an 'info' level severity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "fuse-alert", 30)(21, "span", 29);
    \u0275\u0275text(22, "Success alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " This is a alert with a 'success' level severity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "fuse-alert", 30)(25, "span", 29);
    \u0275\u0275text(26, "Warning alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " This is a alert with a 'warning' level severity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "fuse-alert", 30)(29, "span", 29);
    \u0275\u0275text(30, "Error alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " This is a alert with an 'error' level severity ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("type", "primary")("appearance", "outline");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "accent")("appearance", "outline");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "warn")("appearance", "outline");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "basic")("appearance", "outline");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "info")("appearance", "outline");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "success")("appearance", "outline");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "warning")("appearance", "outline");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "error")("appearance", "outline");
  }
}
function AlertComponent_ng_template_181_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 30)(1, "span", 29);
    \u0275\u0275text(2, "Primary alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Thank you for joining our newsletter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "fuse-alert", 30)(5, "span", 29);
    \u0275\u0275text(6, "Accent alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Your changes has been saved ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "fuse-alert", 30)(9, "span", 29);
    \u0275\u0275text(10, "Warn alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Fill all required fields to proceed next step ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "fuse-alert", 30)(13, "span", 29);
    \u0275\u0275text(14, "Basic alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " You have 3 new notifications ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "fuse-alert", 30)(17, "span", 29);
    \u0275\u0275text(18, "Info alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " This is a alert with an 'info' level severity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "fuse-alert", 30)(21, "span", 29);
    \u0275\u0275text(22, "Success alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " This is a alert with a 'success' level severity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "fuse-alert", 30)(25, "span", 29);
    \u0275\u0275text(26, "Warning alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " This is a alert with a 'warning' level severity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "fuse-alert", 30)(29, "span", 29);
    \u0275\u0275text(30, "Error alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " This is a alert with an 'error' level severity ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("type", "primary")("appearance", "fill");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "accent")("appearance", "fill");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "warn")("appearance", "fill");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "basic")("appearance", "fill");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "info")("appearance", "fill");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "success")("appearance", "fill");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "warning")("appearance", "fill");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "error")("appearance", "fill");
  }
}
function AlertComponent_ng_template_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 30)(1, "span", 29);
    \u0275\u0275text(2, "Primary alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Thank you for joining our newsletter ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "fuse-alert", 30)(5, "span", 29);
    \u0275\u0275text(6, "Accent alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Your changes has been saved ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "fuse-alert", 30)(9, "span", 29);
    \u0275\u0275text(10, "Warn alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Fill all required fields to proceed next step ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "fuse-alert", 30)(13, "span", 29);
    \u0275\u0275text(14, "Basic alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " You have 3 new notifications ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "fuse-alert", 30)(17, "span", 29);
    \u0275\u0275text(18, "Info alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " This is a alert with an 'info' level severity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "fuse-alert", 30)(21, "span", 29);
    \u0275\u0275text(22, "Success alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(23, " This is a alert with a 'success' level severity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "fuse-alert", 30)(25, "span", 29);
    \u0275\u0275text(26, "Warning alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " This is a alert with a 'warning' level severity ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "fuse-alert", 30)(29, "span", 29);
    \u0275\u0275text(30, "Error alert");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31, " This is a alert with an 'error' level severity ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("type", "primary")("appearance", "border");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "accent")("appearance", "border");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "warn")("appearance", "border");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "basic")("appearance", "border");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "info")("appearance", "border");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "success")("appearance", "border");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "warning")("appearance", "border");
    \u0275\u0275advance(4);
    \u0275\u0275property("type", "error")("appearance", "border");
  }
}
function AlertComponent_ng_template_211_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 31)(1, "span", 29);
    \u0275\u0275text(2, "Alert title");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " This is the alert content ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "fuse-alert", 31)(5, "span", 29);
    \u0275\u0275text(6, "Alert title without any content");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "fuse-alert", 31);
    \u0275\u0275text(8, " Simple alert without a title ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("appearance", "soft")("type", "info");
    \u0275\u0275advance(4);
    \u0275\u0275property("appearance", "soft")("type", "info");
    \u0275\u0275advance(3);
    \u0275\u0275property("appearance", "soft")("type", "info");
  }
}
function AlertComponent_ng_template_240_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 32);
    \u0275\u0275text(1, " Success alert with no icon ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("appearance", "soft")("type", "success")("showIcon", false);
  }
}
function AlertComponent_ng_template_257_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 31);
    \u0275\u0275element(1, "mat-icon", 33);
    \u0275\u0275text(2, " Info alert with a custom icon ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("appearance", "soft")("type", "info");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:lock-open");
  }
}
function AlertComponent_ng_template_294_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 34);
    \u0275\u0275text(1, " Your subscription model is successfully upgraded to the ");
    \u0275\u0275elementStart(2, "b");
    \u0275\u0275text(3, "Lifetime Pro");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "fuse-alert", 34);
    \u0275\u0275text(6, " This one has a lot of text so you can see how the text is going to be displayed. Also this is a dismissible alert box which can be dismissed by clicking the ");
    \u0275\u0275elementStart(7, "b");
    \u0275\u0275text(8, "dismiss");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " button. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("appearance", "soft")("dismissible", true)("dismissed", false)("name", "alertBox1")("type", "success");
    \u0275\u0275advance(5);
    \u0275\u0275property("appearance", "soft")("dismissible", true)("dismissed", false)("name", "alertBox2")("type", "info");
  }
}
function AlertComponent_ng_template_311_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function AlertComponent_ng_template_311_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.show("alertBox3");
      return \u0275\u0275resetView(ctx_r1.show("alertBox4"));
    });
    \u0275\u0275text(1, " Show alert boxes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 36);
    \u0275\u0275listener("click", function AlertComponent_ng_template_311_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.dismiss("alertBox3");
      return \u0275\u0275resetView(ctx_r1.dismiss("alertBox4"));
    });
    \u0275\u0275text(3, " Dismiss alert boxes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "fuse-alert", 34);
    \u0275\u0275text(5, " Your subscription model is successfully upgraded to the ");
    \u0275\u0275elementStart(6, "b");
    \u0275\u0275text(7, "Lifetime Pro");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, ". ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "fuse-alert", 34);
    \u0275\u0275text(10, " This one has a lot of text so you can see how the text is going to be displayed. Also this is a dismissible alert box which can be dismissed by clicking the ");
    \u0275\u0275elementStart(11, "b");
    \u0275\u0275text(12, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, " button. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("appearance", "soft")("dismissible", true)("dismissed", false)("name", "alertBox3")("type", "success");
    \u0275\u0275advance(5);
    \u0275\u0275property("appearance", "soft")("dismissible", true)("dismissed", false)("name", "alertBox4")("type", "info");
  }
}
var AlertComponent = class _AlertComponent {
  /**
   * Constructor
   */
  constructor(_fuseAlertService, _fuseComponentsComponent) {
    this._fuseAlertService = _fuseAlertService;
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Dismiss the alert via the service
   *
   * @param name
   */
  dismiss(name) {
    this._fuseAlertService.dismiss(name);
  }
  /**
   * Show the alert via the service
   *
   * @param name
   */
  show(name) {
    this._fuseAlertService.show(name);
  }
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function AlertComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AlertComponent)(\u0275\u0275directiveInject(FuseAlertService), \u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AlertComponent, selectors: [["alert"]], decls: 318, vars: 23, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], [1, "whitespace-nowrap"], [1, "example-viewer"], [1, "title"], [3, "animationDuration"], ["label", "Preview", 1, "bg-gray-200"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], ["label", "Preview"], ["mat-button", "", 3, "click", "color"], ["label", "Typescript"], [3, "type"], ["fuseAlertTitle", ""], [3, "type", "appearance"], [3, "appearance", "type"], [3, "appearance", "type", "showIcon"], ["fuseAlertIcon", "", 1, "icon-size-5", 3, "svgIcon"], [3, "appearance", "dismissible", "dismissed", "name", "type"], ["mat-flat-button", "", 1, "mr-3", 3, "click", "color"], ["mat-flat-button", "", 3, "click", "color"]], template: function AlertComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Alert ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function AlertComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "fuse-alert");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a customizable component for displaying all kinds of alerts across your app. They can be controlled from your components as well as from the ");
        \u0275\u0275elementStart(25, "code");
        \u0275\u0275text(26, "FuseAlertService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p")(29, "strong");
        \u0275\u0275text(30, "Exported as: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "code");
        \u0275\u0275text(32, "fuseAlert");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "h2");
        \u0275\u0275text(34, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "textarea", 14);
        \u0275\u0275text(36, "            import { FuseAlertModule } from '@fuse/components/alert';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "h2");
        \u0275\u0275text(38, "Properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 15)(40, "table")(41, "thead")(42, "tr")(43, "th");
        \u0275\u0275text(44, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "th");
        \u0275\u0275text(46, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Default");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "tbody")(50, "tr")(51, "td", 16)(52, "div");
        \u0275\u0275text(53, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div");
        \u0275\u0275text(55, "name: string");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "td");
        \u0275\u0275text(57, " A unique name for the alert box to access it from ");
        \u0275\u0275elementStart(58, "code");
        \u0275\u0275text(59, "FuseAlertService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "td")(62, "code", 17);
        \u0275\u0275text(63, "Auto generated");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(64, "tr")(65, "td", 16)(66, "div");
        \u0275\u0275text(67, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div");
        \u0275\u0275text(69, "appearance: FuseAlertAppearance");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "td");
        \u0275\u0275text(71, "Appearance of the alert box.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "td")(73, "code", 17);
        \u0275\u0275text(74, "soft");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "tr")(76, "td", 16)(77, "div");
        \u0275\u0275text(78, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div");
        \u0275\u0275text(80, "dismissed: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "td");
        \u0275\u0275text(82, "Whether the alert box is dismissed.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "td")(84, "code", 17);
        \u0275\u0275text(85, "false");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(86, "tr")(87, "td", 16)(88, "div");
        \u0275\u0275text(89, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div");
        \u0275\u0275text(91, "dismissible: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "td");
        \u0275\u0275text(93, " Whether the alert box is dismissible. This must be ");
        \u0275\u0275elementStart(94, "code");
        \u0275\u0275text(95, "true");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, " for ");
        \u0275\u0275elementStart(97, "code");
        \u0275\u0275text(98, "dismissed");
        \u0275\u0275elementEnd();
        \u0275\u0275text(99, " to work. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "td")(101, "code", 17);
        \u0275\u0275text(102, "false");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(103, "tr")(104, "td", 16)(105, "div");
        \u0275\u0275text(106, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div");
        \u0275\u0275text(108, "showIcon: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "td");
        \u0275\u0275text(110, "Whether the icon is shown.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "td")(112, "code", 17);
        \u0275\u0275text(113, "true");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(114, "tr")(115, "td", 16)(116, "div");
        \u0275\u0275text(117, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "div");
        \u0275\u0275text(119, "type: FuseAlertType");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(120, "td");
        \u0275\u0275text(121, "The type of the alert box.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "td")(123, "code", 17);
        \u0275\u0275text(124, "primary");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(125, "tr")(126, "td", 16)(127, "div");
        \u0275\u0275text(128, "@Output()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "div");
        \u0275\u0275text(130, "afterDismissed: true");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "td");
        \u0275\u0275text(132, "An event emitted after the alert box dismissed.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "td");
        \u0275\u0275text(134, "-");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "tr")(136, "td", 16)(137, "div");
        \u0275\u0275text(138, "@Output()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(139, "div");
        \u0275\u0275text(140, "afterShown: true");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(141, "td");
        \u0275\u0275text(142, "An event emitted after the alert box shown.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "td");
        \u0275\u0275text(144, "-");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(145, "h2");
        \u0275\u0275text(146, "Type aliases");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "textarea", 14);
        \u0275\u0275text(148, "            export type FuseAlertAppearance =\n                | 'border'\n                | 'fill'\n                | 'outline'\n                | 'soft';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "textarea", 14);
        \u0275\u0275text(150, "            export type FuseAlertType =\n                | 'primary'\n                | 'accent'\n                | 'warn'\n                | 'basic'\n                | 'info'\n                | 'success'\n                | 'warning'\n                | 'error';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "h2");
        \u0275\u0275text(152, "Appearance");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "p");
        \u0275\u0275text(154, " Alert component comes with 3 different built-in appearances to choose from: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 18)(156, "div", 19)(157, "h6");
        \u0275\u0275text(158, "Soft (default)");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(159, "mat-tab-group", 20)(160, "mat-tab", 21);
        \u0275\u0275template(161, AlertComponent_ng_template_161_Template, 32, 8, "ng-template", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "mat-tab", 23)(163, "textarea", 24);
        \u0275\u0275text(164, `
                        <!-- Primary -->
                        <fuse-alert [type]="'primary'">
                            <span fuseAlertTitle>Primary alert</span>
                            Thank you for joining our newsletter
                        </fuse-alert>

                        <!-- Accent -->
                        <fuse-alert [type]="'accent'">
                            <span fuseAlertTitle>Accent alert</span>
                            Your changes has been saved
                        </fuse-alert>

                        <!-- Warn -->
                        <fuse-alert [type]="'warn'">
                            <span fuseAlertTitle>Warn alert</span>
                            Fill all required fields to proceed next step
                        </fuse-alert>

                        <!-- Basic -->
                        <fuse-alert [type]="'basic'">
                            <span fuseAlertTitle>Basic alert</span>
                            You have 3 new notifications
                        </fuse-alert>

                        <!-- Info -->
                        <fuse-alert [type]="'info'">
                            <span fuseAlertTitle>Info alert</span>
                            This is a alert with an 'info' level severity
                        </fuse-alert>

                        <!-- Success -->
                        <fuse-alert [type]="'success'">
                            <span fuseAlertTitle>Success alert</span>
                            This is a alert with a 'success' level severity
                        </fuse-alert>

                        <!-- Warning -->
                        <fuse-alert [type]="'warning'">
                            <span fuseAlertTitle>Warning alert</span>
                            This is a alert with a 'warning' level severity
                        </fuse-alert>

                        <!-- Error -->
                        <fuse-alert [type]="'error'">
                            <span fuseAlertTitle>Error alert</span>
                            This is a alert with an 'error' level severity
                        </fuse-alert>

                    `);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(165, "div", 18)(166, "div", 19)(167, "h6");
        \u0275\u0275text(168, "Outline");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "mat-tab-group", 20)(170, "mat-tab", 25);
        \u0275\u0275template(171, AlertComponent_ng_template_171_Template, 32, 16, "ng-template", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "mat-tab", 23)(173, "textarea", 24);
        \u0275\u0275text(174, `
                        <!-- Primary -->
                        <fuse-alert
                            [type]="'primary'"
                            [appearance]="'outline'">
                            <span fuseAlertTitle>Primary alert</span>
                            Thank you for joining our newsletter
                        </fuse-alert>

                        <!-- Accent -->
                        <fuse-alert [type]="'accent'"
                                    [appearance]="'outline'">
                            <span fuseAlertTitle>Accent alert</span>
                            Your changes has been saved
                        </fuse-alert>

                        <!-- Warn -->
                        <fuse-alert
                            [type]="'warn'"
                            [appearance]="'outline'">
                            <span fuseAlertTitle>Warn alert</span>
                            Fill all required fields to proceed next step
                        </fuse-alert>

                        <!-- Basic -->
                        <fuse-alert
                            [type]="'basic'"
                            [appearance]="'outline'">
                            <span fuseAlertTitle>Basic alert</span>
                            You have 3 new notifications
                        </fuse-alert>

                        <!-- Info -->
                        <fuse-alert
                            [type]="'info'"
                            [appearance]="'outline'">
                            <span fuseAlertTitle>Info alert</span>
                            This is a alert with an 'info' level severity
                        </fuse-alert>

                        <!-- Success -->
                        <fuse-alert
                            [type]="'success'"
                            [appearance]="'outline'">
                            <span fuseAlertTitle>Success alert</span>
                            This is a alert with a 'success' level severity
                        </fuse-alert>

                        <!-- Warning -->
                        <fuse-alert
                            [type]="'warning'"
                            [appearance]="'outline'">
                            <span fuseAlertTitle>Warning alert</span>
                            This is a alert with a 'warning' level severity
                        </fuse-alert>

                        <!-- Error -->
                        <fuse-alert
                            [type]="'error'"
                            [appearance]="'outline'">
                            <span fuseAlertTitle>Error alert</span>
                            This is a alert with an 'error' level severity
                        </fuse-alert>
                    `);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(175, "div", 18)(176, "div", 19)(177, "h6");
        \u0275\u0275text(178, "Fill");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(179, "mat-tab-group", 20)(180, "mat-tab", 25);
        \u0275\u0275template(181, AlertComponent_ng_template_181_Template, 32, 16, "ng-template", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "mat-tab", 23)(183, "textarea", 24);
        \u0275\u0275text(184, `
                        <!-- Primary -->
                        <fuse-alert
                            [type]="'primary'"
                            [appearance]="'fill'">
                            <span fuseAlertTitle>Primary alert</span>
                            Thank you for joining our newsletter
                        </fuse-alert>

                        <!-- Accent -->
                        <fuse-alert
                            [type]="'accent'"
                            [appearance]="'fill'">
                            <span fuseAlertTitle>Accent alert</span>
                            Your changes has been saved
                        </fuse-alert>

                        <!-- Warn -->
                        <fuse-alert [type]="'warn'"
                        [appearance]="'fill'">
                        <span fuseAlertTitle>Warn alert</span>
                        Fill all required fields to proceed next step
                        </fuse-alert>

                        <!-- Basic -->
                        <fuse-alert
                            [type]="'basic'"
                            [appearance]="'fill'">
                            <span fuseAlertTitle>Basic alert</span>
                            You have 3 new notifications
                        </fuse-alert>

                        <!-- Info -->
                        <fuse-alert
                            [type]="'info'"
                            [appearance]="'fill'">
                            <span fuseAlertTitle>Info alert</span>
                            This is a alert with an 'info' level severity
                        </fuse-alert>

                        <!-- Success -->
                        <fuse-alert
                            [type]="'success'"
                            [appearance]="'fill'">
                            <span fuseAlertTitle>Success alert</span>
                            This is a alert with a 'success' level severity
                        </fuse-alert>

                        <!-- Warning -->
                        <fuse-alert
                            [type]="'warning'"
                            [appearance]="'fill'">
                            <span fuseAlertTitle>Warning alert</span>
                            This is a alert with a 'warning' level severity
                        </fuse-alert>

                        <!-- Error -->
                        <fuse-alert
                            [type]="'error'"
                            [appearance]="'fill'">
                            <span fuseAlertTitle>Error alert</span>
                            This is a alert with an 'error' level severity
                        </fuse-alert>
                    `);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(185, "div", 18)(186, "div", 19)(187, "h6");
        \u0275\u0275text(188, "Border");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(189, "mat-tab-group", 20)(190, "mat-tab", 25);
        \u0275\u0275template(191, AlertComponent_ng_template_191_Template, 32, 16, "ng-template", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "mat-tab", 23)(193, "textarea", 24);
        \u0275\u0275text(194, `                        <!-- Primary -->
                        <fuse-alert
                            [type]="'primary'"
                            [appearance]="'border'">
                            <span fuseAlertTitle>Primary alert</span>
                            Thank you for joining our newsletter
                        </fuse-alert>

                        <!-- Accent -->
                        <fuse-alert
                            [type]="'accent'"
                            [appearance]="'border'">
                            <span fuseAlertTitle>Accent alert</span>
                            Your changes has been saved
                        </fuse-alert>

                        <!-- Warn -->
                        <fuse-alert
                            [type]="'warn'"
                            [appearance]="'border'">
                            <span fuseAlertTitle>Warn alert</span>
                            Fill all required fields to proceed next step
                        </fuse-alert>

                        <!-- Basic -->
                        <fuse-alert
                            [type]="'basic'"
                            [appearance]="'border'">
                            <span fuseAlertTitle>Basic alert</span>
                            You have 3 new notifications
                        </fuse-alert>

                        <!-- Info -->
                        <fuse-alert
                            [type]="'info'"
                            [appearance]="'border'">
                            <span fuseAlertTitle>Info alert</span>
                            This is a alert with an 'info' level severity
                        </fuse-alert>

                        <!-- Success -->
                        <fuse-alert
                            [type]="'success'"
                            [appearance]="'border'">
                            <span fuseAlertTitle>Success alert</span>
                            This is a alert with a 'success' level severity
                        </fuse-alert>

                        <!-- Warning -->
                        <fuse-alert
                            [type]="'warning'"
                            [appearance]="'border'">
                            <span fuseAlertTitle>Warning alert</span>
                            This is a alert with a 'warning' level severity
                        </fuse-alert>

                        <!-- Error -->
                        <fuse-alert
                            [type]="'error'"
                            [appearance]="'border'">
                            <span fuseAlertTitle>Error alert</span>
                            This is a alert with an 'error' level severity
                        </fuse-alert>
                    `);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(195, "h2");
        \u0275\u0275text(196, "Title and alert");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "p");
        \u0275\u0275text(198, " All alert boxes have ");
        \u0275\u0275elementStart(199, "strong");
        \u0275\u0275text(200, "title");
        \u0275\u0275elementEnd();
        \u0275\u0275text(201, " and ");
        \u0275\u0275elementStart(202, "strong");
        \u0275\u0275text(203, "alert");
        \u0275\u0275elementEnd();
        \u0275\u0275text(204, " content that can be customized. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "div", 18)(206, "div", 19)(207, "h6");
        \u0275\u0275text(208, "Example");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(209, "mat-tab-group", 20)(210, "mat-tab", 25);
        \u0275\u0275template(211, AlertComponent_ng_template_211_Template, 9, 6, "ng-template", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(212, "mat-tab", 23)(213, "textarea", 24);
        \u0275\u0275text(214, `                        <fuse-alert
                            [appearance]="'soft'"
                            [type]="'info'">
                            <span fuseAlertTitle>Alert title</span>
                            This is the alert content
                        </fuse-alert>

                        <fuse-alert
                            [appearance]="'soft'"
                            [type]="'info'">
                            <span fuseAlertTitle>Alert title without any content</span>
                        </fuse-alert>

                        <fuse-alert
                            [appearance]="'soft'"
                            [type]="'info'">
                            Simple alert without a title
                        </fuse-alert>
                    `);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(215, "h2");
        \u0275\u0275text(216, "Icons");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "p");
        \u0275\u0275text(218, " The ");
        \u0275\u0275elementStart(219, "strong");
        \u0275\u0275text(220, "info");
        \u0275\u0275elementEnd();
        \u0275\u0275text(221, ", ");
        \u0275\u0275elementStart(222, "strong");
        \u0275\u0275text(223, "success");
        \u0275\u0275elementEnd();
        \u0275\u0275text(224, ", ");
        \u0275\u0275elementStart(225, "strong");
        \u0275\u0275text(226, "warning");
        \u0275\u0275elementEnd();
        \u0275\u0275text(227, " and ");
        \u0275\u0275elementStart(228, "strong");
        \u0275\u0275text(229, "error");
        \u0275\u0275elementEnd();
        \u0275\u0275text(230, " type alert boxes have default icons and they are visible by default. If you wish to hide those icons, use the ");
        \u0275\u0275elementStart(231, "code");
        \u0275\u0275text(232, '[showIcon]="false"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(233, " input. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "div", 18)(235, "div", 19)(236, "h6");
        \u0275\u0275text(237, "Example");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(238, "mat-tab-group", 20)(239, "mat-tab", 25);
        \u0275\u0275template(240, AlertComponent_ng_template_240_Template, 2, 3, "ng-template", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(241, "mat-tab", 23)(242, "textarea", 24);
        \u0275\u0275text(243, `                        <fuse-alert
                            [appearance]="'soft'"
                            [type]="'success'"
                            [showIcon]="false">
                            Success alert with no icon
                        </fuse-alert>
                    `);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(244, "h2");
        \u0275\u0275text(245, "Custom icons");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(246, "p");
        \u0275\u0275text(247, " All alert boxes come with custom icon support. To use a custom icon, simply use ");
        \u0275\u0275elementStart(248, "code");
        \u0275\u0275text(249, "fuseAlertIcon");
        \u0275\u0275elementEnd();
        \u0275\u0275text(250, " attribute on an element you wish to use as the icon. If there is a default icon for the alert box, custom icon will override it. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(251, "div", 18)(252, "div", 19)(253, "h6");
        \u0275\u0275text(254, "Example");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(255, "mat-tab-group", 20)(256, "mat-tab", 25);
        \u0275\u0275template(257, AlertComponent_ng_template_257_Template, 3, 3, "ng-template", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(258, "mat-tab", 23)(259, "textarea", 24);
        \u0275\u0275text(260, `                        <fuse-alert
                            [appearance]="'soft'"
                            [type]="'info'">
                            <mat-icon class="icon-size-5"
                                      fuseAlertIcon
                                      [svgIcon]="'heroicons_solid:lock-open'">
                            </mat-icon>
                            Info alert with a custom icon
                        </fuse-alert>
                    `);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(261, "h2");
        \u0275\u0275text(262, "Dismissible alerts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "p");
        \u0275\u0275text(264, " Dismissible alerts can be removed from the view by clicking their ");
        \u0275\u0275elementStart(265, "strong");
        \u0275\u0275text(266, "dismiss (x)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(267, " button. In order to get the dismiss button visible, the ");
        \u0275\u0275elementStart(268, "code");
        \u0275\u0275text(269, "[dismissed]");
        \u0275\u0275elementEnd();
        \u0275\u0275text(270, " input must be explicitly set either to ");
        \u0275\u0275elementStart(271, "code");
        \u0275\u0275text(272, "true");
        \u0275\u0275elementEnd();
        \u0275\u0275text(273, " or ");
        \u0275\u0275elementStart(274, "code");
        \u0275\u0275text(275, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(276, ". Setting the ");
        \u0275\u0275elementStart(277, "code");
        \u0275\u0275text(278, "[dismissed]");
        \u0275\u0275elementEnd();
        \u0275\u0275text(279, " input to ");
        \u0275\u0275elementStart(280, "code");
        \u0275\u0275text(281, "null");
        \u0275\u0275elementEnd();
        \u0275\u0275text(282, " or simply removing it from the element will remove the ");
        \u0275\u0275elementStart(283, "strong");
        \u0275\u0275text(284, "dismiss");
        \u0275\u0275elementEnd();
        \u0275\u0275text(285, " button. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(286, "div", 18)(287, "div", 19)(288, "h6");
        \u0275\u0275text(289, "Example");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(290, "button", 26);
        \u0275\u0275listener("click", function AlertComponent_Template_button_click_290_listener() {
          ctx.show("alertBox1");
          return ctx.show("alertBox2");
        });
        \u0275\u0275text(291, " Reset ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(292, "mat-tab-group", 20)(293, "mat-tab", 25);
        \u0275\u0275template(294, AlertComponent_ng_template_294_Template, 10, 10, "ng-template", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(295, "mat-tab", 23)(296, "textarea", 24);
        \u0275\u0275text(297, `                        <fuse-alert
                            [appearance]="'soft'"
                            [dismissible]="true"
                            [dismissed]="false"
                            [name]="'alertBox1'"
                            [type]="'success'">
                            Your subscription model is successfully upgraded to the <b>Lifetime Pro</b>.
                        </fuse-alert>

                        <fuse-alert
                            [appearance]="'soft'"
                            [dismissible]="true"
                            [dismissed]="false"
                            [name]="'alertBox2'"
                            [type]="'info'">
                            This one has a lot of text so you can see how the text is going to be displayed.
                            Also this is a dismissible alert box which can be dismissed by clicking the <b>dismiss</b> button.
                        </fuse-alert>
                    `);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(298, "h2");
        \u0275\u0275text(299, "Dismissible alerts controlled from the service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(300, "p");
        \u0275\u0275text(301, " Alerts can be shown and dismissed via ");
        \u0275\u0275elementStart(302, "code");
        \u0275\u0275text(303, "FuseAlertService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(304, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(305, "div", 18)(306, "div", 19)(307, "h6");
        \u0275\u0275text(308, "Example");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(309, "mat-tab-group", 20)(310, "mat-tab", 25);
        \u0275\u0275template(311, AlertComponent_ng_template_311_Template, 14, 12, "ng-template", 22);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(312, "mat-tab", 23)(313, "textarea", 24);
        \u0275\u0275text(314, `                        <button
                            class="mr-3"
                            mat-flat-button
                            [color]="'primary'"
                            (click)="show('alertBox3'); show('alertBox4')">
                            Show alert boxes
                        </button>

                        <button
                            mat-flat-button
                            [color]="'primary'"
                            (click)="dismiss('alertBox3'); dismiss('alertBox4')">
                            Dismiss alert boxes
                        </button>

                        <fuse-alert
                            [appearance]="'soft'"
                            [dismissible]="true"
                            [dismissed]="false"
                            [name]="'alertBox3'"
                            [type]="'success'">
                            Your subscription model is successfully upgraded to the <b>Lifetime Pro</b>.
                        </fuse-alert>

                        <fuse-alert
                            [appearance]="'soft'"
                            [dismissible]="true"
                            [dismissed]="false"
                            [name]="'alertBox4'"
                            [type]="'info'">
                            This one has a lot of text so you can see how the text is going to be displayed.
                            Also this is a dismissible alert box which can be dismissed by clicking the <b>close</b> button.
                        </fuse-alert>
                    `);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(315, "mat-tab", 27)(316, "textarea", 24);
        \u0275\u0275text(317, "\n                        private _fuseAlertService = inject(FuseAlertService);\n\n                        /**\n                         * Dismiss the alert via the service\n                         *\n                         * @param name\n                         */\n                        dismiss(name: string): void\n                        {\n                            this._fuseAlertService.dismiss(name);\n                        }\n\n                        /**\n                         * Show the alert via the service\n                         *\n                         * @param name\n                         */\n                        show(name: string): void\n                        {\n                            this._fuseAlertService.show(name);\n                        }\n\n                    ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(140);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(6);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(6);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(6);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(16);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(25);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(13);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(31);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(2);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(13);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(3);
        \u0275\u0275property("lang", "typescript");
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      FuseHighlightComponent,
      MatTabsModule,
      MatTabContent,
      MatTab,
      MatTabGroup,
      FuseAlertComponent
    ], styles: ["\n\nfuse-alert[_ngcontent-%COMP%] {\n  margin: 16px 0;\n}\n/*# sourceMappingURL=alert.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AlertComponent, { className: "AlertComponent", filePath: "src/app/modules/admin/ui/fuse-components/components/alert/alert.component.ts", lineNumber: 27 });
})();

// src/app/modules/admin/ui/fuse-components/components/card/card.component.ts
function CardComponent_ng_template_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "fuse-card");
    \u0275\u0275text(3, " This content is in the card and it doesn't have any style applied to it! ");
    \u0275\u0275elementEnd()()();
  }
}
function CardComponent_ng_template_113_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 36);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:chevron-down");
  }
}
function CardComponent_ng_template_113_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 36);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:chevron-up");
  }
}
function CardComponent_ng_template_113_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "fuse-card", 31, 0)(4, "div", 32);
    \u0275\u0275text(5, " Title of the card ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 10);
    \u0275\u0275text(7, " A paragraph, an image, a form or simply anything can go here to create the content of the card. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 33)(9, "button", 34);
    \u0275\u0275listener("click", function CardComponent_ng_template_113_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const fuseCard_r2 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(fuseCard_r2.expanded = !fuseCard_r2.expanded);
    });
    \u0275\u0275elementStart(10, "span", 35);
    \u0275\u0275text(11, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, CardComponent_ng_template_113_Conditional_12_Template, 1, 1, "mat-icon", 36)(13, CardComponent_ng_template_113_Conditional_13_Template, 1, 1, "mat-icon", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerStart(14, 37);
    \u0275\u0275elementStart(15, "div", 38);
    \u0275\u0275text(16, " This is the expansion and holds an extra information! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const fuseCard_r2 = \u0275\u0275reference(3);
    \u0275\u0275advance(9);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!fuseCard_r2.expanded ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(fuseCard_r2.expanded ? 13 : -1);
  }
}
function CardComponent_ng_template_136_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "fuse-card", 39, 0);
    \u0275\u0275elementContainerStart(4, 40);
    \u0275\u0275elementStart(5, "div", 41)(6, "div", 32);
    \u0275\u0275text(7, " Title of the card ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 10);
    \u0275\u0275text(9, " A paragraph, an image, a form or simply anything can go here to create the content of the card. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 42)(11, "button", 43);
    \u0275\u0275listener("click", function CardComponent_ng_template_136_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r3);
      const fuseCard_r4 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(fuseCard_r4.face = "back");
    });
    \u0275\u0275element(12, "mat-icon", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 44);
    \u0275\u0275elementStart(14, "div", 45)(15, "div", 46)(16, "button", 43);
    \u0275\u0275listener("click", function CardComponent_ng_template_136_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r3);
      const fuseCard_r4 = \u0275\u0275reference(3);
      return \u0275\u0275resetView(fuseCard_r4.face = "front");
    });
    \u0275\u0275element(17, "mat-icon", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "p", 47);
    \u0275\u0275text(19, " This is the back of the card and holds an extra information! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 47);
    \u0275\u0275text(21, " Also, the ");
    \u0275\u0275elementStart(22, "em");
    \u0275\u0275text(23, "back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24, " side of the card holds more information than the ");
    \u0275\u0275elementStart(25, "em");
    \u0275\u0275text(26, "front");
    \u0275\u0275elementEnd();
    \u0275\u0275text(27, " of the card which causes scrollbars to appear. ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("flippable", true);
    \u0275\u0275advance(9);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:arrow-right");
    \u0275\u0275advance(4);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:arrow-left");
  }
}
var CardComponent = class _CardComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function CardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CardComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CardComponent, selectors: [["card"]], decls: 140, vars: 9, consts: [["fuseCard", ""], [1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], [1, "whitespace-nowrap"], [1, "bg-card", "mt-4", "rounded", "shadow"], [1, "text-secondary", "border-b", "px-6", "py-3", "font-mono"], [1, "p-6"], [1, "example-viewer"], [1, "title"], [3, "animationDuration"], ["label", "Preview"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], [1, "bg-gray-100", "p-4"], [1, "mx-auto", "max-w-80"], [1, "flex", "flex-col", "px-8", "py-6", "pb-4"], [1, "text-lg", "font-bold"], [1, "-mx-3", "mt-3"], ["mat-button", "", 1, "px-3", 3, "click", "color"], [1, "mr-1"], [1, "icon-size-5", 3, "svgIcon"], ["fuseCardExpansion", ""], [1, "my-2"], [1, "flex", "flex-col", 3, "flippable"], ["fuseCardFront", ""], [1, "flex", "flex-col", "px-8", "py-6", "pb-3"], [1, "-mx-3", "mt-3", "self-end"], ["mat-icon-button", "", 3, "click", "color"], ["fuseCardBack", ""], [1, "flex", "flex-auto", "flex-col", "px-8", "py-6", "pt-3"], [1, "-mx-3", "mb-2"], [1, "text-secondary"]], template: function CardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div")(5, "a", 5);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275element(8, "mat-icon", 7);
        \u0275\u0275elementStart(9, "a", 8);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6);
        \u0275\u0275element(12, "mat-icon", 7);
        \u0275\u0275elementStart(13, "span", 9);
        \u0275\u0275text(14, "Components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 10)(16, "h2", 11);
        \u0275\u0275text(17, " Card ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 12);
        \u0275\u0275listener("click", function CardComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 14)(21, "p")(22, "strong");
        \u0275\u0275text(23, "fuse-card");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a basic card component to show any kind of information or content with features like flipping and expanding. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p")(26, "strong");
        \u0275\u0275text(27, "Exported as: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "code");
        \u0275\u0275text(29, "fuseCard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "h2");
        \u0275\u0275text(31, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "textarea", 15);
        \u0275\u0275text(33, "            import { FuseCardModule } from '@fuse/components/card';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "h2");
        \u0275\u0275text(35, "Properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 16)(37, "table")(38, "thead")(39, "tr")(40, "th");
        \u0275\u0275text(41, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45, "Default");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "tbody")(47, "tr")(48, "td", 17)(49, "div");
        \u0275\u0275text(50, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div");
        \u0275\u0275text(52, "flippable: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "td");
        \u0275\u0275text(54, "Whether the card is flippable.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "td")(56, "code", 18);
        \u0275\u0275text(57, "false");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(58, "h2");
        \u0275\u0275text(59, "Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "div", 19)(61, "div", 20);
        \u0275\u0275text(62, " expand(): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 21);
        \u0275\u0275text(64, "Expands the expansion of the card.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 19)(66, "div", 20);
        \u0275\u0275text(67, " collapse(): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 21);
        \u0275\u0275text(69, "Collapses the expansion of the card.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "div", 19)(71, "div", 20);
        \u0275\u0275text(72, " toggleExpanded(): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 21);
        \u0275\u0275text(74, "Toggles the expanded status of the expansion.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "div", 19)(76, "div", 20);
        \u0275\u0275text(77, " flip(): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 21);
        \u0275\u0275text(79, "Flip the card.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "h2");
        \u0275\u0275text(81, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "p");
        \u0275\u0275text(83, " Just wrap the content or the information with ");
        \u0275\u0275elementStart(84, "code");
        \u0275\u0275text(85, "fuse-card");
        \u0275\u0275elementEnd();
        \u0275\u0275text(86, " to show them within the card. ");
        \u0275\u0275elementStart(87, "strong");
        \u0275\u0275text(88, "fuse-card");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, " doesn't apply any kind of style to its content to make customization simpler: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 22)(91, "div", 23)(92, "h6");
        \u0275\u0275text(93, "Example");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(94, "mat-tab-group", 24)(95, "mat-tab", 25);
        \u0275\u0275template(96, CardComponent_ng_template_96_Template, 4, 0, "ng-template", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "mat-tab", 27)(98, "textarea", 28);
        \u0275\u0275text(99, "                        <fuse-card>\n                            This content is in the card and it doesn't have any style applied to it!\n                        </fuse-card>\n                    ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(100, "h3");
        \u0275\u0275text(101, "Expandable");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "p");
        \u0275\u0275text(103, " Expandable ");
        \u0275\u0275elementStart(104, "strong");
        \u0275\u0275text(105, "fuse-card");
        \u0275\u0275elementEnd();
        \u0275\u0275text(106, " holds an extra content or information hidden in its expandable area which can be toggled by accessing the component itself via a template reference: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div", 22)(108, "div", 23)(109, "h6");
        \u0275\u0275text(110, "Example");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "mat-tab-group", 24)(112, "mat-tab", 25);
        \u0275\u0275template(113, CardComponent_ng_template_113_Template, 17, 3, "ng-template", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "mat-tab", 27)(115, "textarea", 28);
        \u0275\u0275text(116, `                        <fuse-card
                            class="flex flex-col px-8 py-6 pb-4"
                            #fuseCard>
                            <div class="text-lg font-bold">Title of the card</div>
                            <div class="mt-2">
                                A paragraph, an image, a form or simply anything can go here to create the content of the card.
                            </div>
                            <div class="mt-3 -mx-3">
                                <button
                                    class="px-3"
                                    mat-button
                                    [color]="'primary'"
                                    (click)="fuseCard.expanded = !fuseCard.expanded">
                                    <span class="mr-1">Details</span>
                                    <mat-icon
                                        class="icon-size-5"
                                        *ngIf="!fuseCard.expanded"
                                        [svgIcon]="'heroicons_solid:chevron-down'"></mat-icon>
                                    <mat-icon
                                        class="icon-size-5"
                                        *ngIf="fuseCard.expanded"
                                        [svgIcon]="'heroicons_solid:chevron-up'"></mat-icon>
                                </button>
                            </div>

                            <!-- Expansion -->
                            <ng-container fuseCardExpansion>
                                <div class="my-2">
                                    This is the expansion and holds an extra information!
                                </div>
                            </ng-container>
                        </fuse-card>
                    `);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(117, "h3");
        \u0275\u0275text(118, "Flippable");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "p");
        \u0275\u0275text(120, " Flippable card holds content or information on both sides and can be flipped by accessing the component itself via a template reference. The only limitation with this type of cards is that the ");
        \u0275\u0275elementStart(121, "em");
        \u0275\u0275text(122, "back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(123, " of the card will share the same height as the ");
        \u0275\u0275elementStart(124, "em");
        \u0275\u0275text(125, "front");
        \u0275\u0275elementEnd();
        \u0275\u0275text(126, " of the card. If the ");
        \u0275\u0275elementStart(127, "em");
        \u0275\u0275text(128, "back");
        \u0275\u0275elementEnd();
        \u0275\u0275text(129, " side has more content, scrollbar will appear. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "div", 22)(131, "div", 23)(132, "h6");
        \u0275\u0275text(133, "Example");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(134, "mat-tab-group", 24)(135, "mat-tab", 25);
        \u0275\u0275template(136, CardComponent_ng_template_136_Template, 28, 5, "ng-template", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "mat-tab", 27)(138, "textarea", 28);
        \u0275\u0275text(139, `                        <fuse-card
                            class="flex flex-col"
                            [flippable]="true"
                            #fuseCard>
                            <!-- Front -->
                            <ng-container fuseCardFront>
                                <div class="flex flex-col px-8 py-6 pb-3">
                                    <div class="text-lg font-bold">Title of the card</div>
                                    <div class="mt-2">
                                        A paragraph, an image, a form or simply anything can go here to create the content of the card.
                                    </div>
                                    <div class="mt-3 -mx-3 self-end">
                                        <button
                                            mat-icon-button
                                            [color]="'primary'"
                                            (click)="fuseCard.face = 'back'">
                                                <mat-icon
                                                    class="icon-size-5"
                                                    [svgIcon]="'heroicons_outline:arrow-right'"></mat-icon>
                                        </button>
                                    </div>
                                </div>
                            </ng-container>

                            <!-- Back -->
                            <ng-container fuseCardBack>
                                <div class="flex flex-col flex-auto px-8 py-6 pt-3">
                                    <div class="mb-2 -mx-3">
                                        <button
                                            mat-icon-button
                                            [color]="'primary'"
                                            (click)="fuseCard.face = 'front'">
                                            <mat-icon
                                                class="icon-size-5"
                                                [svgIcon]="'heroicons_outline:arrow-left'"></mat-icon>
                                        </button>
                                    </div>
                                    <p class="text-secondary">
                                        This is the back of the card and holds an extra information!
                                    </p>
                                    <p class="text-secondary">
                                        Also, the <em>back</em> side of the card holds more information than the <em>front</em> of the card
                                        which causes scrollbars to appear.
                                    </p>
                                </div>
                            </ng-container>
                        </fuse-card>
                    `);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(75);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(13);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(19);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      FuseHighlightComponent,
      MatTabsModule,
      MatTabContent,
      MatTab,
      MatTabGroup,
      FuseCardComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CardComponent, { className: "CardComponent", filePath: "src/app/modules/admin/ui/fuse-components/components/card/card.component.ts", lineNumber: 20 });
})();

// src/app/modules/admin/ui/fuse-components/components/drawer/drawer.component.ts
function DrawerComponent_ng_template_213_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 30);
    \u0275\u0275listener("click", function DrawerComponent_ng_template_213_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDrawerMode());
    });
    \u0275\u0275text(1, " Toggle drawer mode ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 31);
    \u0275\u0275listener("click", function DrawerComponent_ng_template_213_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDrawerOpen());
    });
    \u0275\u0275text(3, " Toggle drawer open ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 32)(5, "fuse-drawer", 33);
    \u0275\u0275listener("openedChanged", function DrawerComponent_ng_template_213_Template_fuse_drawer_openedChanged_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.drawerOpenedChanged($event));
    });
    \u0275\u0275elementStart(6, "div", 34);
    \u0275\u0275text(7, " Left drawer ");
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 35);
    \u0275\u0275text(11, " Some content ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("name", "leftDrawer")("opened", ctx_r1.drawerOpened)("mode", ctx_r1.drawerMode);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Current mode: ", ctx_r1.drawerMode, "");
  }
}
var DrawerComponent = class _DrawerComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
    this.drawerMode = "side";
    this.drawerOpened = true;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer mode
   */
  toggleDrawerMode() {
    this.drawerMode = this.drawerMode === "side" ? "over" : "side";
  }
  /**
   * Toggle the drawer open
   */
  toggleDrawerOpen() {
    this.drawerOpened = !this.drawerOpened;
  }
  /**
   * Drawer opened changed
   *
   * @param opened
   */
  drawerOpenedChanged(opened) {
    this.drawerOpened = opened;
  }
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function DrawerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DrawerComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DrawerComponent, selectors: [["drawer"]], decls: 220, vars: 8, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], [3, "appearance", "type"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], [1, "whitespace-nowrap"], [1, "mb-2"], [1, "text-xs", "font-bold"], [1, "example-viewer"], [1, "title"], [3, "animationDuration"], ["label", "Preview"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], ["label", "Typescript"], ["mat-flat-button", "", 3, "click", "color"], ["mat-flat-button", "", 1, "ml-4", 3, "click", "color"], [1, "relative", "mt-8", "flex", "min-h-80", "overflow-hidden", "border"], [3, "openedChanged", "name", "opened", "mode"], [1, "p-4"], [1, "flex-auto", "bg-gray-100", "p-4"]], template: function DrawerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Drawer ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function DrawerComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "fuse-drawer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a simple drawer component that can be programmed in various ways. The main difference between Angular Material's ");
        \u0275\u0275elementStart(25, "strong");
        \u0275\u0275text(26, "mat-drawer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " component is that the ");
        \u0275\u0275elementStart(28, "strong");
        \u0275\u0275text(29, "fuse-drawer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " can be placed anywhere on the DOM and it doesn't have to wrap the content like ");
        \u0275\u0275elementStart(31, "strong");
        \u0275\u0275text(32, "mat-drawer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "fuse-alert", 14);
        \u0275\u0275text(35, " Since fuse-drawer works with ");
        \u0275\u0275elementStart(36, "em");
        \u0275\u0275text(37, "absolute");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " positioning by default, the parent of the drawer must have ");
        \u0275\u0275elementStart(39, "code");
        \u0275\u0275text(40, "position: relative");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, " and ");
        \u0275\u0275elementStart(42, "code");
        \u0275\u0275text(43, "overflow-x: hidden");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, " properties otherwise the drawer won't be able to work correctly. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p")(46, "strong");
        \u0275\u0275text(47, "Exported as: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "code");
        \u0275\u0275text(49, "fuseDrawer");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "h2");
        \u0275\u0275text(51, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "textarea", 15);
        \u0275\u0275text(53, "            import { FuseDrawerModule } from '@fuse/components/drawer';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "h2");
        \u0275\u0275text(55, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p");
        \u0275\u0275text(57, "Here's the basic usage of the ");
        \u0275\u0275elementStart(58, "code");
        \u0275\u0275text(59, "fuse-drawer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, ":");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "textarea", 16);
        \u0275\u0275text(62, `            <fuse-drawer
                [fixed]="true"
                [mode]="isScreenSmall ? 'over' : 'side'"
                [name]="'rightDrawer'"
                [opened]="!isScreenSmall"
                [position]="'right'"
                [transparentOverlay]="false">
            </fuse-drawer>
        `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "h2");
        \u0275\u0275text(64, "Properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 17)(66, "table")(67, "thead")(68, "tr")(69, "th");
        \u0275\u0275text(70, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "th");
        \u0275\u0275text(72, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "th");
        \u0275\u0275text(74, "Default");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(75, "tbody")(76, "tr")(77, "td", 18)(78, "div");
        \u0275\u0275text(79, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div");
        \u0275\u0275text(81, "fixed: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "td");
        \u0275\u0275text(83, " Whether the position of the drawer is ");
        \u0275\u0275elementStart(84, "em");
        \u0275\u0275text(85, "fixed");
        \u0275\u0275elementEnd();
        \u0275\u0275text(86, " or ");
        \u0275\u0275elementStart(87, "em");
        \u0275\u0275text(88, "absolute");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "td")(91, "code", 19);
        \u0275\u0275text(92, "false");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(93, "tr")(94, "td", 18)(95, "div");
        \u0275\u0275text(96, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div");
        \u0275\u0275text(98, "mode: FuseDrawerMode");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "td")(100, "strong");
        \u0275\u0275text(101, "over");
        \u0275\u0275elementEnd();
        \u0275\u0275text(102, " mode can be used to place the drawer on top of the content and ");
        \u0275\u0275elementStart(103, "strong");
        \u0275\u0275text(104, "side");
        \u0275\u0275elementEnd();
        \u0275\u0275text(105, " mode can be used to push the content and place the drawer next to it. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "td")(107, "code", 19);
        \u0275\u0275text(108, "side");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(109, "tr")(110, "td", 18)(111, "div", 20)(112, "code", 21);
        \u0275\u0275text(113, "REQUIRED");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(114, "div");
        \u0275\u0275text(115, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div");
        \u0275\u0275text(117, "name: string");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "td");
        \u0275\u0275text(119, " Unique name of the drawer. Required for drawer to work correctly. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "td");
        \u0275\u0275text(121, "-");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "tr")(123, "td", 18)(124, "div");
        \u0275\u0275text(125, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div");
        \u0275\u0275text(127, "opened: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(128, "td");
        \u0275\u0275text(129, " Whether the drawer is opened. Only works with ");
        \u0275\u0275elementStart(130, "strong");
        \u0275\u0275text(131, "over");
        \u0275\u0275elementEnd();
        \u0275\u0275text(132, " mode. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "td")(134, "code", 19);
        \u0275\u0275text(135, "false");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(136, "tr")(137, "td", 18)(138, "div");
        \u0275\u0275text(139, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "div");
        \u0275\u0275text(141, "position: FuseDrawerPosition");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "td");
        \u0275\u0275text(143, "Position of the drawer.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(144, "td")(145, "code", 19);
        \u0275\u0275text(146, "left");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(147, "tr")(148, "td", 18)(149, "div");
        \u0275\u0275text(150, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "div");
        \u0275\u0275text(152, "transparentOverlay: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(153, "td");
        \u0275\u0275text(154, " Whether the overlay of the drawer is transparent. Only works with ");
        \u0275\u0275elementStart(155, "strong");
        \u0275\u0275text(156, "over");
        \u0275\u0275elementEnd();
        \u0275\u0275text(157, " mode. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "td")(159, "code", 19);
        \u0275\u0275text(160, "false");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(161, "tr")(162, "td", 18)(163, "div");
        \u0275\u0275text(164, "@Output()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "div");
        \u0275\u0275text(166, "modeChanged: FuseNavigationMode");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(167, "td");
        \u0275\u0275text(168, " An event emitted after the mode of the navigation changed. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "td");
        \u0275\u0275text(170, "-");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(171, "tr")(172, "td", 18)(173, "div");
        \u0275\u0275text(174, "@Output()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "div");
        \u0275\u0275text(176, "openedChanged: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(177, "td");
        \u0275\u0275text(178, " An event emitted after the opened status of the drawer changed. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(179, "td");
        \u0275\u0275text(180, "-");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(181, "tr")(182, "td", 18)(183, "div");
        \u0275\u0275text(184, "@Output()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "div");
        \u0275\u0275text(186, "positionChanged: FuseNavigationPosition");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(187, "td");
        \u0275\u0275text(188, " An event emitted after the position of the drawer changed. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "td");
        \u0275\u0275text(190, "-");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(191, "h2");
        \u0275\u0275text(192, "Type aliases");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "textarea", 15);
        \u0275\u0275text(194, "            export type FuseDrawerMode =\n                | 'over'\n                | 'side';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "textarea", 15);
        \u0275\u0275text(196, "            export type FuseDrawerPosition =\n                | 'left'\n                | 'right';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(197, "h2");
        \u0275\u0275text(198, "Service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "p");
        \u0275\u0275text(200, " The ");
        \u0275\u0275elementStart(201, "code");
        \u0275\u0275text(202, "FuseDrawerService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(203, " can be used to remotely accessing to drawers using their ");
        \u0275\u0275elementStart(204, "strong");
        \u0275\u0275text(205, "name");
        \u0275\u0275elementEnd();
        \u0275\u0275text(206, " properties to control them: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "div", 22)(208, "div", 23)(209, "h6");
        \u0275\u0275text(210, "Example");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(211, "mat-tab-group", 24)(212, "mat-tab", 25);
        \u0275\u0275template(213, DrawerComponent_ng_template_213_Template, 12, 6, "ng-template", 26);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(214, "mat-tab", 27)(215, "textarea", 28);
        \u0275\u0275text(216, `                        <button
                            mat-flat-button
                            [color]="'primary'"
                            (click)="toggleDrawerMode();">
                                Toggle drawer mode
                        </button>

                        <button
                            class="ml-4"
                            mat-flat-button
                            [color]="'primary'"
                            (click)="toggleDrawerOpen();">
                            Toggle drawer open
                        </button>

                        <div class="relative flex overflow-hidden border mt-8 min-h-80">
                            <fuse-drawer
                                [name]="'leftDrawer'"
                                [opened]="drawerOpened"
                                [mode]="drawerMode">
                                <div class="p-4">
                                    Left drawer
                                </div>
                            </fuse-drawer>

                            <div class="flex-auto bg-gray-100 p-4">
                                Some content
                            </div>

                            <!-- Right drawer must be positioned after the content

                                <fuse-drawer
                                    [name]="'leftDrawer'"
                                    [opened]="true"
                                    [position]="'right'"
                                    [mode]="'side'">
                                    <div class="p-4">
                                        Right drawer
                                    </div>
                                </fuse-drawer>

                            -->
                        </div>
                    `);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(217, "mat-tab", 29)(218, "textarea", 28);
        \u0275\u0275text(219, "\n                        // Set the defaults\n                        this.drawerMode = 'side';\n                        this.drawerOpened = true;\n\n                        /**\n                         * Toggle the drawer mode\n                         */\n                        toggleDrawerMode(): void\n                        {\n                            this.drawerMode = this.drawerMode === 'side' ? 'over' : 'side';\n                        }\n\n                        /**\n                         * Toggle the drawer open\n                         */\n                        toggleDrawerOpen(): void\n                        {\n                            this.drawerOpened = !this.drawerOpened;\n                        }\n\n                        /**\n                         * Drawer opened changed\n                         *\n                         * @param opened\n                         */\n                        drawerOpenedChanged(opened: boolean): void\n                        {\n                            this.drawerOpened = opened;\n                        }\n\n                    ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(15);
        \u0275\u0275property("appearance", "border")("type", "info");
        \u0275\u0275advance(177);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(3);
        \u0275\u0275property("lang", "typescript");
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      FuseAlertComponent,
      FuseHighlightComponent,
      MatTabsModule,
      MatTabContent,
      MatTab,
      MatTabGroup,
      FuseDrawerComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DrawerComponent, { className: "DrawerComponent", filePath: "src/app/modules/admin/ui/fuse-components/components/drawer/drawer.component.ts", lineNumber: 22 });
})();

// src/app/modules/admin/ui/fuse-components/components/fullscreen/fullscreen.component.ts
var FullscreenComponent = class _FullscreenComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function FullscreenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FullscreenComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FullscreenComponent, selectors: [["fullscreen"]], decls: 80, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"]], template: function FullscreenComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Fullscreen ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function FullscreenComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "fuse-fullscreen");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a small component that toggles the fullscreen on and off. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p")(26, "strong");
        \u0275\u0275text(27, "Exported as: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "code");
        \u0275\u0275text(29, "fuseFullscreen");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "h2");
        \u0275\u0275text(31, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "textarea", 14);
        \u0275\u0275text(33, "            import { FuseFullscreenModule } from '@fuse/components/fullscreen';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "h2");
        \u0275\u0275text(35, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p");
        \u0275\u0275text(37, "Here's the basic usage of the ");
        \u0275\u0275elementStart(38, "code");
        \u0275\u0275text(39, "fuse-fullscreen");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, ":");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "textarea", 15);
        \u0275\u0275text(42, "            <");
        \u0275\u0275text(43, "fuse-fullscreen>");
        \u0275\u0275text(44, "<");
        \u0275\u0275text(45, "/fuse-fullscreen>");
        \u0275\u0275text(46, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "h2");
        \u0275\u0275text(48, "Properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div", 16)(50, "table")(51, "thead")(52, "tr")(53, "th");
        \u0275\u0275text(54, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "th");
        \u0275\u0275text(56, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "th");
        \u0275\u0275text(58, "Default");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(59, "tbody")(60, "tr")(61, "td", 17)(62, "div");
        \u0275\u0275text(63, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "div");
        \u0275\u0275text(65, "iconTpl: TemplateRef<any>");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "td");
        \u0275\u0275text(67, "Template reference for the icon.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "td");
        \u0275\u0275text(69, "-");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "tr")(71, "td", 17)(72, "div");
        \u0275\u0275text(73, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div");
        \u0275\u0275text(75, "tooltip: string");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "td");
        \u0275\u0275text(77, "Tooltip of the toggle button.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "td");
        \u0275\u0275text(79, "'Toggle Fullscreen'");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
      }
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton, FuseHighlightComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FullscreenComponent, { className: "FullscreenComponent", filePath: "src/app/modules/admin/ui/fuse-components/components/fullscreen/fullscreen.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/fuse-components/components/highlight/highlight.component.ts
var HighlightComponent = class _HighlightComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function HighlightComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HighlightComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HighlightComponent, selectors: [["highlight"]], decls: 117, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], ["href", "https://highlightjs.org/usage/", "rel", "noreferrer", "target", "_blank"]], template: function HighlightComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Highlight ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function HighlightComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "fuse-highlight");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a syntax highlighter component to display syntax highlighted codes within the content. Internally, it uses ");
        \u0275\u0275elementStart(25, "em");
        \u0275\u0275text(26, "highlight.js");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p")(29, "strong");
        \u0275\u0275text(30, "Exported as: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "code");
        \u0275\u0275text(32, "fuseHighlight");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "h2");
        \u0275\u0275text(34, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "textarea", 14);
        \u0275\u0275text(36, "            import { FuseHighlightModule } from '@fuse/components/highlight';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "h2");
        \u0275\u0275text(38, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40, "Here's the basic usage of the ");
        \u0275\u0275elementStart(41, "code");
        \u0275\u0275text(42, "fuse-highlight");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, ":");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "textarea", 15);
        \u0275\u0275text(45, "            <");
        \u0275\u0275text(46, 'textarea fuse-highlight\n                      lang="html">');
        \u0275\u0275text(47, "\n                <");
        \u0275\u0275text(48, "div>");
        \u0275\u0275text(49, "Some HTML code to highlight<");
        \u0275\u0275text(50, "/div>");
        \u0275\u0275text(51, "\n            <");
        \u0275\u0275text(52, "/textarea>");
        \u0275\u0275text(53, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "p")(55, "code");
        \u0275\u0275text(56, "fuse-highlight");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " doesn't have its own selector and cannot be used like any other components. It must be used with a ");
        \u0275\u0275elementStart(58, "code");
        \u0275\u0275text(59, "<textarea>");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p");
        \u0275\u0275text(62, " The main reason of this is that the Angular parses the templates before binding and running components. Because of this mechanic, anything you place into templates will be taken as a literal content and parsed by Angular. Only the contents of a ");
        \u0275\u0275elementStart(63, "code");
        \u0275\u0275text(64, "<textarea>");
        \u0275\u0275elementEnd();
        \u0275\u0275text(65, " can be preserved as is. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "h2");
        \u0275\u0275text(67, "Properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "div", 16)(69, "table")(70, "thead")(71, "tr")(72, "th");
        \u0275\u0275text(73, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "th");
        \u0275\u0275text(75, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "th");
        \u0275\u0275text(77, "Default");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "tbody")(79, "tr")(80, "td", 17)(81, "div");
        \u0275\u0275text(82, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div");
        \u0275\u0275text(84, "code: string");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "td");
        \u0275\u0275text(86, " Piece of code to highlight. If ");
        \u0275\u0275elementStart(87, "strong");
        \u0275\u0275text(88, "code");
        \u0275\u0275elementEnd();
        \u0275\u0275text(89, " input is not provided, the actual content of the ");
        \u0275\u0275elementStart(90, "strong");
        \u0275\u0275text(91, "textarea");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, " will be used. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "td");
        \u0275\u0275text(94, "-");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "tr")(96, "td", 17)(97, "div");
        \u0275\u0275text(98, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div");
        \u0275\u0275text(100, "lang: string");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "td");
        \u0275\u0275text(102, " Which language to highlight the code. See: ");
        \u0275\u0275elementStart(103, "a", 18);
        \u0275\u0275text(104, "https://highlightjs.org/usage/ ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(105, " for full list of supported languages. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "td");
        \u0275\u0275text(107, "-");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(108, "h2");
        \u0275\u0275text(109, "Service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "p");
        \u0275\u0275text(111, " The ");
        \u0275\u0275elementStart(112, "code");
        \u0275\u0275text(113, "FuseHighlightService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(114, " can also be used to format and highlight code: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "textarea", 14);
        \u0275\u0275text(116, "            private _fuseHighlightService = inject(FuseHighlightService);\n\n            code = '<div> Some code to highlight </div>'\n            highlightedCode = this._fuseHighlightService.highlight(code, 'html');\n        ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
      }
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton, FuseHighlightComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HighlightComponent, { className: "HighlightComponent", filePath: "src/app/modules/admin/ui/fuse-components/components/highlight/highlight.component.ts", lineNumber: 12 });
})();

// node_modules/@angular/material/fesm2022/slider.mjs
var _c02 = ["knob"];
var _c1 = ["valueIndicatorContainer"];
function MatSliderVisualThumb_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 1)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.valueIndicatorText);
  }
}
var _c2 = ["trackActive"];
var _c3 = ["*"];
function MatSlider_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const tickMark_r1 = ctx.$implicit;
    const \u0275$index_14_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(tickMark_r1 === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
    \u0275\u0275styleProp("transform", ctx_r2._calcTickMarkTransform(\u0275$index_14_r2));
  }
}
function MatSlider_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatSlider_Conditional_6_Conditional_2_For_1_Template, 1, 4, "div", 8, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2._tickMarks);
  }
}
function MatSlider_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6, 1);
    \u0275\u0275template(2, MatSlider_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2._cachedWidth ? 2 : -1);
  }
}
function MatSlider_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-slider-visual-thumb", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("discrete", ctx_r2.discrete)("thumbPosition", 1)("valueIndicatorText", ctx_r2.startValueIndicatorText);
  }
}
var _MatThumb;
(function(_MatThumb2) {
  _MatThumb2[_MatThumb2["START"] = 1] = "START";
  _MatThumb2[_MatThumb2["END"] = 2] = "END";
})(_MatThumb || (_MatThumb = {}));
var _MatTickMark;
(function(_MatTickMark2) {
  _MatTickMark2[_MatTickMark2["ACTIVE"] = 0] = "ACTIVE";
  _MatTickMark2[_MatTickMark2["INACTIVE"] = 1] = "INACTIVE";
})(_MatTickMark || (_MatTickMark = {}));
var MAT_SLIDER = new InjectionToken("_MatSlider");
var MAT_SLIDER_THUMB = new InjectionToken("_MatSliderThumb");
var MAT_SLIDER_RANGE_THUMB = new InjectionToken("_MatSliderRangeThumb");
var MAT_SLIDER_VISUAL_THUMB = new InjectionToken("_MatSliderVisualThumb");
var MatSliderVisualThumb = class _MatSliderVisualThumb {
  _cdr = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _slider = inject(MAT_SLIDER);
  _renderer = inject(Renderer2);
  _listenerCleanups;
  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  discrete;
  /** Indicates which slider thumb this input corresponds to. */
  thumbPosition;
  /** The display value of the slider thumb. */
  valueIndicatorText;
  /** The MatRipple for this slider thumb. */
  _ripple;
  /** The slider thumb knob. */
  _knob;
  /** The slider thumb value indicator container. */
  _valueIndicatorContainer;
  /** The slider input corresponding to this slider thumb. */
  _sliderInput;
  /** The native html element of the slider input corresponding to this thumb. */
  _sliderInputEl;
  /** The RippleRef for the slider thumbs hover state. */
  _hoverRippleRef;
  /** The RippleRef for the slider thumbs focus state. */
  _focusRippleRef;
  /** The RippleRef for the slider thumbs active state. */
  _activeRippleRef;
  /** Whether the slider thumb is currently being hovered. */
  _isHovered = false;
  /** Whether the slider thumb is currently being pressed. */
  _isActive = false;
  /** Whether the value indicator tooltip is visible. */
  _isValueIndicatorVisible = false;
  /** The host native HTML input element. */
  _hostElement = inject(ElementRef).nativeElement;
  _platform = inject(Platform);
  constructor() {
  }
  ngAfterViewInit() {
    const sliderInput = this._slider._getInput(this.thumbPosition);
    if (!sliderInput) {
      return;
    }
    this._ripple.radius = 24;
    this._sliderInput = sliderInput;
    this._sliderInputEl = this._sliderInput._hostElement;
    this._ngZone.runOutsideAngular(() => {
      const input = this._sliderInputEl;
      const renderer = this._renderer;
      this._listenerCleanups = [renderer.listen(input, "pointermove", this._onPointerMove), renderer.listen(input, "pointerdown", this._onDragStart), renderer.listen(input, "pointerup", this._onDragEnd), renderer.listen(input, "pointerleave", this._onMouseLeave), renderer.listen(input, "focus", this._onFocus), renderer.listen(input, "blur", this._onBlur)];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
  }
  _onPointerMove = (event) => {
    if (this._sliderInput._isFocused) {
      return;
    }
    const rect = this._hostElement.getBoundingClientRect();
    const isHovered = this._slider._isCursorOnSliderThumb(event, rect);
    this._isHovered = isHovered;
    if (isHovered) {
      this._showHoverRipple();
    } else {
      this._hideRipple(this._hoverRippleRef);
    }
  };
  _onMouseLeave = () => {
    this._isHovered = false;
    this._hideRipple(this._hoverRippleRef);
  };
  _onFocus = () => {
    this._hideRipple(this._hoverRippleRef);
    this._showFocusRipple();
    this._hostElement.classList.add("mdc-slider__thumb--focused");
  };
  _onBlur = () => {
    if (!this._isActive) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._isHovered) {
      this._showHoverRipple();
    }
    this._hostElement.classList.remove("mdc-slider__thumb--focused");
  };
  _onDragStart = (event) => {
    if (event.button !== 0) {
      return;
    }
    this._isActive = true;
    this._showActiveRipple();
  };
  _onDragEnd = () => {
    this._isActive = false;
    this._hideRipple(this._activeRippleRef);
    if (!this._sliderInput._isFocused) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._platform.SAFARI) {
      this._showHoverRipple();
    }
  };
  /** Handles displaying the hover ripple. */
  _showHoverRipple() {
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      });
      this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple");
    }
  }
  /** Handles displaying the focus ripple. */
  _showFocusRipple() {
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      }, true);
      this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple");
    }
  }
  /** Handles displaying the active ripple. */
  _showActiveRipple() {
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({
        enterDuration: 225,
        exitDuration: 400
      });
      this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple");
    }
  }
  /** Whether the given rippleRef is currently fading in or visible. */
  _isShowingRipple(rippleRef) {
    return rippleRef?.state === RippleState.FADING_IN || rippleRef?.state === RippleState.VISIBLE;
  }
  /** Manually launches the slider thumb ripple using the specified ripple animation config. */
  _showRipple(animation, ignoreGlobalRippleConfig) {
    if (this._slider.disabled) {
      return;
    }
    this._showValueIndicator();
    if (this._slider._isRange) {
      const sibling = this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
      sibling._showValueIndicator();
    }
    if (this._slider._globalRippleOptions?.disabled && !ignoreGlobalRippleConfig) {
      return;
    }
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {
        enterDuration: 0,
        exitDuration: 0
      } : animation,
      centered: true,
      persistent: true
    });
  }
  /**
   * Fades out the given ripple.
   * Also hides the value indicator if no ripple is showing.
   */
  _hideRipple(rippleRef) {
    rippleRef?.fadeOut();
    if (this._isShowingAnyRipple()) {
      return;
    }
    if (!this._slider._isRange) {
      this._hideValueIndicator();
    }
    const sibling = this._getSibling();
    if (!sibling._isShowingAnyRipple()) {
      this._hideValueIndicator();
      sibling._hideValueIndicator();
    }
  }
  /** Shows the value indicator ui. */
  _showValueIndicator() {
    this._hostElement.classList.add("mdc-slider__thumb--with-indicator");
  }
  /** Hides the value indicator ui. */
  _hideValueIndicator() {
    this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");
  }
  _getSibling() {
    return this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
  }
  /** Gets the value indicator container's native HTML element. */
  _getValueIndicatorContainer() {
    return this._valueIndicatorContainer?.nativeElement;
  }
  /** Gets the native HTML element of the slider thumb knob. */
  _getKnob() {
    return this._knob.nativeElement;
  }
  _isShowingAnyRipple() {
    return this._isShowingRipple(this._hoverRippleRef) || this._isShowingRipple(this._focusRippleRef) || this._isShowingRipple(this._activeRippleRef);
  }
  static \u0275fac = function MatSliderVisualThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderVisualThumb)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSliderVisualThumb,
    selectors: [["mat-slider-visual-thumb"]],
    viewQuery: function MatSliderVisualThumb_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatRipple, 5);
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._ripple = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._knob = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._valueIndicatorContainer = _t.first);
      }
    },
    hostAttrs: [1, "mdc-slider__thumb", "mat-mdc-slider-visual-thumb"],
    inputs: {
      discrete: "discrete",
      thumbPosition: "thumbPosition",
      valueIndicatorText: "valueIndicatorText"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER_VISUAL_THUMB,
      useExisting: _MatSliderVisualThumb
    }])],
    decls: 4,
    vars: 2,
    consts: [["knob", ""], ["valueIndicatorContainer", ""], [1, "mdc-slider__value-indicator-container"], [1, "mdc-slider__thumb-knob"], ["matRipple", "", 1, "mat-focus-indicator", 3, "matRippleDisabled"], [1, "mdc-slider__value-indicator"], [1, "mdc-slider__value-indicator-text"]],
    template: function MatSliderVisualThumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatSliderVisualThumb_Conditional_0_Template, 5, 1, "div", 2);
        \u0275\u0275element(1, "div", 3, 0)(3, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.discrete ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", true);
      }
    },
    dependencies: [MatRipple],
    styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderVisualThumb, [{
    type: Component,
    args: [{
      selector: "mat-slider-visual-thumb",
      host: {
        "class": "mdc-slider__thumb mat-mdc-slider-visual-thumb"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: MatSliderVisualThumb
      }],
      imports: [MatRipple],
      template: '@if (discrete) {\n  <div class="mdc-slider__value-indicator-container" #valueIndicatorContainer>\n    <div class="mdc-slider__value-indicator">\n      <span class="mdc-slider__value-indicator-text">{{valueIndicatorText}}</span>\n    </div>\n  </div>\n}\n<div class="mdc-slider__thumb-knob" #knob></div>\n<div matRipple class="mat-focus-indicator" [matRippleDisabled]="true"></div>\n',
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}"]
    }]
  }], () => [], {
    discrete: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    valueIndicatorText: [{
      type: Input
    }],
    _ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    _knob: [{
      type: ViewChild,
      args: ["knob"]
    }],
    _valueIndicatorContainer: [{
      type: ViewChild,
      args: ["valueIndicatorContainer"]
    }]
  });
})();
var MatSlider = class _MatSlider {
  _ngZone = inject(NgZone);
  _cdr = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  /** The active portion of the slider track. */
  _trackActive;
  /** The slider thumb(s). */
  _thumbs;
  /** The sliders hidden range input(s). */
  _input;
  /** The sliders hidden range input(s). */
  _inputs;
  /** Whether the slider is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    if (endInput) {
      endInput.disabled = this._disabled;
    }
    if (startInput) {
      startInput.disabled = this._disabled;
    }
  }
  _disabled = false;
  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  get discrete() {
    return this._discrete;
  }
  set discrete(v) {
    this._discrete = v;
    this._updateValueIndicatorUIs();
  }
  _discrete = false;
  /** Whether the slider displays tick marks along the slider track. */
  showTickMarks = false;
  /** The minimum value that the slider can have. */
  get min() {
    return this._min;
  }
  set min(v) {
    const min = isNaN(v) ? this._min : v;
    if (this._min !== min) {
      this._updateMin(min);
    }
  }
  _min = 0;
  /**
   * Theme color of the slider. This API is supported in M2 themes only, it
   * has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  color;
  /** Whether ripples are disabled in the slider. */
  disableRipple = false;
  _updateMin(min) {
    const prevMin = this._min;
    this._min = min;
    this._isRange ? this._updateMinRange({
      old: prevMin,
      new: min
    }) : this._updateMinNonRange(min);
    this._onMinMaxOrStepChange();
  }
  _updateMinRange(min) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    startInput.min = min.new;
    endInput.min = Math.max(min.new, startInput.value);
    startInput.max = Math.min(endInput.max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    min.new < min.old ? this._onTranslateXChangeBySideEffect(endInput, startInput) : this._onTranslateXChangeBySideEffect(startInput, endInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMinNonRange(min) {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.min = min;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /** The maximum value that the slider can have. */
  get max() {
    return this._max;
  }
  set max(v) {
    const max = isNaN(v) ? this._max : v;
    if (this._max !== max) {
      this._updateMax(max);
    }
  }
  _max = 100;
  _updateMax(max) {
    const prevMax = this._max;
    this._max = max;
    this._isRange ? this._updateMaxRange({
      old: prevMax,
      new: max
    }) : this._updateMaxNonRange(max);
    this._onMinMaxOrStepChange();
  }
  _updateMaxRange(max) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    endInput.max = max.new;
    startInput.max = Math.min(max.new, endInput.value);
    endInput.min = startInput.value;
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    max.new > max.old ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMaxNonRange(max) {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.max = max;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /** The values at which the thumb will snap. */
  get step() {
    return this._step;
  }
  set step(v) {
    const step = isNaN(v) ? this._step : v;
    if (this._step !== step) {
      this._updateStep(step);
    }
  }
  _step = 1;
  _updateStep(step) {
    this._step = step;
    this._isRange ? this._updateStepRange() : this._updateStepNonRange();
    this._onMinMaxOrStepChange();
  }
  _updateStepRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    const prevStartValue = startInput.value;
    endInput.min = this._min;
    startInput.max = this._max;
    endInput.step = this._step;
    startInput.step = this._step;
    if (this._platform.SAFARI) {
      endInput.value = endInput.value;
      startInput.value = startInput.value;
    }
    endInput.min = Math.max(this._min, startInput.value);
    startInput.max = Math.min(this._max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    endInput.value < prevStartValue ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateStepNonRange() {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.step = this._step;
      if (this._platform.SAFARI) {
        input.value = input.value;
      }
      input._updateThumbUIByValue();
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /**
   * Function that will be used to format the value before it is displayed
   * in the thumb label. Can be used to format very large number in order
   * for them to fit into the slider thumb.
   */
  displayWith = (value) => `${value}`;
  /** Used to keep track of & render the active & inactive tick marks on the slider track. */
  _tickMarks;
  /** Whether animations have been disabled. */
  _noopAnimations;
  /** Subscription to changes to the directionality (LTR / RTL) context for the application. */
  _dirChangeSubscription;
  /** Observer used to monitor size changes in the slider. */
  _resizeObserver;
  // Stored dimensions to avoid calling getBoundingClientRect redundantly.
  _cachedWidth;
  _cachedLeft;
  _rippleRadius = 24;
  // The value indicator tooltip text for the visual slider thumb(s).
  /** @docs-private */
  startValueIndicatorText = "";
  /** @docs-private */
  endValueIndicatorText = "";
  // Used to control the translateX of the visual slider thumb(s).
  _endThumbTransform;
  _startThumbTransform;
  _isRange = false;
  /** Whether the slider is rtl. */
  _isRtl = false;
  _hasViewInitialized = false;
  /**
   * The width of the tick mark track.
   * The tick mark track width is different from full track width
   */
  _tickMarkTrackWidth = 0;
  _hasAnimation = false;
  _resizeTimer = null;
  _platform = inject(Platform);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const animationMode = inject(ANIMATION_MODULE_TYPE, {
      optional: true
    });
    this._noopAnimations = animationMode === "NoopAnimations";
    if (this._dir) {
      this._dirChangeSubscription = this._dir.change.subscribe(() => this._onDirChange());
      this._isRtl = this._dir.value === "rtl";
    }
  }
  /** The radius of the native slider's knob. AFAIK there is no way to avoid hardcoding this. */
  _knobRadius = 8;
  _inputPadding;
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._updateDimensions();
    }
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    this._isRange = !!eInput && !!sInput;
    this._cdr.detectChanges();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      _validateInputs(this._isRange, this._getInput(_MatThumb.END), this._getInput(_MatThumb.START));
    }
    const thumb = this._getThumb(_MatThumb.END);
    this._rippleRadius = thumb._ripple.radius;
    this._inputPadding = this._rippleRadius - this._knobRadius;
    this._isRange ? this._initUIRange(eInput, sInput) : this._initUINonRange(eInput);
    this._updateTrackUI(eInput);
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._observeHostResize();
    this._cdr.detectChanges();
  }
  _initUINonRange(eInput) {
    eInput.initProps();
    eInput.initUI();
    this._updateValueIndicatorUI(eInput);
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
  }
  _initUIRange(eInput, sInput) {
    eInput.initProps();
    eInput.initUI();
    sInput.initProps();
    sInput.initUI();
    eInput._updateMinMax();
    sInput._updateMinMax();
    eInput._updateStaticStyles();
    sInput._updateStaticStyles();
    this._updateValueIndicatorUIs();
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
    sInput._updateThumbUIByValue();
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }
  /** Handles updating the slider ui after a dir change. */
  _onDirChange() {
    this._isRtl = this._dir?.value === "rtl";
    this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
    this._updateTickMarkUI();
  }
  _onDirChangeRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    endInput._setIsLeftThumb();
    startInput._setIsLeftThumb();
    endInput.translateX = endInput._calcTranslateXByValue();
    startInput.translateX = startInput._calcTranslateXByValue();
    endInput._updateStaticStyles();
    startInput._updateStaticStyles();
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    endInput._updateThumbUIByValue();
    startInput._updateThumbUIByValue();
  }
  _onDirChangeNonRange() {
    const input = this._getInput(_MatThumb.END);
    input._updateThumbUIByValue();
  }
  /** Starts observing and updating the slider if the host changes its size. */
  _observeHostResize() {
    if (typeof ResizeObserver === "undefined" || !ResizeObserver) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._isActive()) {
          return;
        }
        if (this._resizeTimer) {
          clearTimeout(this._resizeTimer);
        }
        this._onResize();
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }
  /** Whether any of the thumbs are currently active. */
  _isActive() {
    return this._getThumb(_MatThumb.START)._isActive || this._getThumb(_MatThumb.END)._isActive;
  }
  _getValue(thumbPosition = _MatThumb.END) {
    const input = this._getInput(thumbPosition);
    if (!input) {
      return this.min;
    }
    return input.value;
  }
  _skipUpdate() {
    return !!(this._getInput(_MatThumb.START)?._skipUIUpdate || this._getInput(_MatThumb.END)?._skipUIUpdate);
  }
  /** Stores the slider dimensions. */
  _updateDimensions() {
    this._cachedWidth = this._elementRef.nativeElement.offsetWidth;
    this._cachedLeft = this._elementRef.nativeElement.getBoundingClientRect().left;
  }
  /** Sets the styles for the active portion of the track. */
  _setTrackActiveStyles(styles) {
    const trackStyle = this._trackActive.nativeElement.style;
    trackStyle.left = styles.left;
    trackStyle.right = styles.right;
    trackStyle.transformOrigin = styles.transformOrigin;
    trackStyle.transform = styles.transform;
  }
  /** Returns the translateX positioning for a tick mark based on it's index. */
  _calcTickMarkTransform(index) {
    const translateX = index * (this._tickMarkTrackWidth / (this._tickMarks.length - 1));
    return `translateX(${translateX}px`;
  }
  // Handlers for updating the slider ui.
  _onTranslateXChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateThumbUI(source);
    this._updateTrackUI(source);
    this._updateOverlappingThumbUI(source);
  }
  _onTranslateXChangeBySideEffect(input1, input2) {
    if (!this._hasViewInitialized) {
      return;
    }
    input1._updateThumbUIByValue();
    input2._updateThumbUIByValue();
  }
  _onValueChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateValueIndicatorUI(source);
    this._updateTickMarkUI();
    this._cdr.detectChanges();
  }
  _onMinMaxOrStepChange() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }
  _onResize() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateDimensions();
    if (this._isRange) {
      const eInput = this._getInput(_MatThumb.END);
      const sInput = this._getInput(_MatThumb.START);
      eInput._updateThumbUIByValue();
      sInput._updateThumbUIByValue();
      eInput._updateStaticStyles();
      sInput._updateStaticStyles();
      eInput._updateMinMax();
      sInput._updateMinMax();
      eInput._updateWidthInactive();
      sInput._updateWidthInactive();
    } else {
      const eInput = this._getInput(_MatThumb.END);
      if (eInput) {
        eInput._updateThumbUIByValue();
      }
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.detectChanges();
  }
  /** Whether or not the slider thumbs overlap. */
  _thumbsOverlap = false;
  /** Returns true if the slider knobs are overlapping one another. */
  _areThumbsOverlapping() {
    const startInput = this._getInput(_MatThumb.START);
    const endInput = this._getInput(_MatThumb.END);
    if (!startInput || !endInput) {
      return false;
    }
    return endInput.translateX - startInput.translateX < 20;
  }
  /**
   * Updates the class names of overlapping slider thumbs so
   * that the current active thumb is styled to be on "top".
   */
  _updateOverlappingThumbClassNames(source) {
    const sibling = source.getSibling();
    const sourceThumb = this._getThumb(source.thumbPosition);
    const siblingThumb = this._getThumb(sibling.thumbPosition);
    siblingThumb._hostElement.classList.remove("mdc-slider__thumb--top");
    sourceThumb._hostElement.classList.toggle("mdc-slider__thumb--top", this._thumbsOverlap);
  }
  /** Updates the UI of slider thumbs when they begin or stop overlapping. */
  _updateOverlappingThumbUI(source) {
    if (!this._isRange || this._skipUpdate()) {
      return;
    }
    if (this._thumbsOverlap !== this._areThumbsOverlapping()) {
      this._thumbsOverlap = !this._thumbsOverlap;
      this._updateOverlappingThumbClassNames(source);
    }
  }
  // _MatThumb styles update conditions
  //
  // 1. TranslateX, resize, or dir change
  //    - Reason: The thumb styles need to be updated according to the new translateX.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the translateX of the given thumb. */
  _updateThumbUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const thumb = this._getThumb(source.thumbPosition === _MatThumb.END ? _MatThumb.END : _MatThumb.START);
    thumb._hostElement.style.transform = `translateX(${source.translateX}px)`;
  }
  // Value indicator text update conditions
  //
  // 1. Value
  //    - Reason: The value displayed needs to be updated.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the value indicator tooltip ui for the given thumb. */
  _updateValueIndicatorUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const valuetext = this.displayWith(source.value);
    this._hasViewInitialized ? source._valuetext.set(valuetext) : source._hostElement.setAttribute("aria-valuetext", valuetext);
    if (this.discrete) {
      source.thumbPosition === _MatThumb.START ? this.startValueIndicatorText = valuetext : this.endValueIndicatorText = valuetext;
      const visualThumb = this._getThumb(source.thumbPosition);
      valuetext.length < 3 ? visualThumb._hostElement.classList.add("mdc-slider__thumb--short-value") : visualThumb._hostElement.classList.remove("mdc-slider__thumb--short-value");
    }
  }
  /** Updates all value indicator UIs in the slider. */
  _updateValueIndicatorUIs() {
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    if (eInput) {
      this._updateValueIndicatorUI(eInput);
    }
    if (sInput) {
      this._updateValueIndicatorUI(sInput);
    }
  }
  // Update Tick Mark Track Width
  //
  // 1. Min, max, or step
  //    - Reason: The maximum reachable value may have changed.
  //    - Side note: The maximum reachable value is different from the maximum value set by the
  //      user. For example, a slider with [min: 5, max: 100, step: 10] would have a maximum
  //      reachable value of 95.
  // 2. Resize
  //    - Reason: The position for the maximum reachable value needs to be recalculated.
  /** Updates the width of the tick mark track. */
  _updateTickMarkTrackUI() {
    if (!this.showTickMarks || this._skipUpdate()) {
      return;
    }
    const step = this._step && this._step > 0 ? this._step : 1;
    const maxValue = Math.floor(this.max / step) * step;
    const percentage = (maxValue - this.min) / (this.max - this.min);
    this._tickMarkTrackWidth = this._cachedWidth * percentage - 6;
  }
  // Track active update conditions
  //
  // 1. TranslateX
  //    - Reason: The track active should line up with the new thumb position.
  // 2. Min or max
  //    - Reason #1: The 'active' percentage needs to be recalculated.
  //    - Reason #2: The value may have silently changed.
  // 3. Step
  //    - Reason: The value may have silently changed causing the thumb(s) to shift.
  // 4. Dir change
  //    - Reason: The track active will need to be updated according to the new thumb position(s).
  // 5. Resize
  //    - Reason: The total width the 'active' tracks translateX is based on has changed.
  /** Updates the scale on the active portion of the track. */
  _updateTrackUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    this._isRange ? this._updateTrackUIRange(source) : this._updateTrackUINonRange(source);
  }
  _updateTrackUIRange(source) {
    const sibling = source.getSibling();
    if (!sibling || !this._cachedWidth) {
      return;
    }
    const activePercentage = Math.abs(sibling.translateX - source.translateX) / this._cachedWidth;
    if (source._isLeftThumb && this._cachedWidth) {
      this._setTrackActiveStyles({
        left: "auto",
        right: `${this._cachedWidth - sibling.translateX}px`,
        transformOrigin: "right",
        transform: `scaleX(${activePercentage})`
      });
    } else {
      this._setTrackActiveStyles({
        left: `${sibling.translateX}px`,
        right: "auto",
        transformOrigin: "left",
        transform: `scaleX(${activePercentage})`
      });
    }
  }
  _updateTrackUINonRange(source) {
    this._isRtl ? this._setTrackActiveStyles({
      left: "auto",
      right: "0px",
      transformOrigin: "right",
      transform: `scaleX(${1 - source.fillPercentage})`
    }) : this._setTrackActiveStyles({
      left: "0px",
      right: "auto",
      transformOrigin: "left",
      transform: `scaleX(${source.fillPercentage})`
    });
  }
  // Tick mark update conditions
  //
  // 1. Value
  //    - Reason: a tick mark which was once active might now be inactive or vice versa.
  // 2. Min, max, or step
  //    - Reason #1: the number of tick marks may have changed.
  //    - Reason #2: The value may have silently changed.
  /** Updates the dots along the slider track. */
  _updateTickMarkUI() {
    if (!this.showTickMarks || this.step === void 0 || this.min === void 0 || this.max === void 0) {
      return;
    }
    const step = this.step > 0 ? this.step : 1;
    this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);
    if (this._isRtl) {
      this._tickMarks.reverse();
    }
  }
  _updateTickMarkUINonRange(step) {
    const value = this._getValue();
    let numActive = Math.max(Math.round((value - this.min) / step), 0);
    let numInactive = Math.max(Math.round((this.max - value) / step), 0);
    this._isRtl ? numActive++ : numInactive++;
    this._tickMarks = Array(numActive).fill(_MatTickMark.ACTIVE).concat(Array(numInactive).fill(_MatTickMark.INACTIVE));
  }
  _updateTickMarkUIRange(step) {
    const endValue = this._getValue();
    const startValue = this._getValue(_MatThumb.START);
    const numInactiveBeforeStartThumb = Math.max(Math.round((startValue - this.min) / step), 0);
    const numActive = Math.max(Math.round((endValue - startValue) / step) + 1, 0);
    const numInactiveAfterEndThumb = Math.max(Math.round((this.max - endValue) / step), 0);
    this._tickMarks = Array(numInactiveBeforeStartThumb).fill(_MatTickMark.INACTIVE).concat(Array(numActive).fill(_MatTickMark.ACTIVE), Array(numInactiveAfterEndThumb).fill(_MatTickMark.INACTIVE));
  }
  /** Gets the slider thumb input of the given thumb position. */
  _getInput(thumbPosition) {
    if (thumbPosition === _MatThumb.END && this._input) {
      return this._input;
    }
    if (this._inputs?.length) {
      return thumbPosition === _MatThumb.START ? this._inputs.first : this._inputs.last;
    }
    return;
  }
  /** Gets the slider thumb HTML input element of the given thumb position. */
  _getThumb(thumbPosition) {
    return thumbPosition === _MatThumb.END ? this._thumbs?.last : this._thumbs?.first;
  }
  _setTransition(withAnimation) {
    this._hasAnimation = !this._platform.IOS && withAnimation && !this._noopAnimations;
    this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation", this._hasAnimation);
  }
  /** Whether the given pointer event occurred within the bounds of the slider pointer's DOM Rect. */
  _isCursorOnSliderThumb(event, rect) {
    const radius = rect.width / 2;
    const centerX = rect.x + radius;
    const centerY = rect.y + radius;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
  }
  static \u0275fac = function MatSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlider)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlider,
    selectors: [["mat-slider"]],
    contentQueries: function MatSlider_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_THUMB, 5);
        \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_RANGE_THUMB, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputs = _t);
      }
    },
    viewQuery: function MatSlider_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(MAT_SLIDER_VISUAL_THUMB, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._trackActive = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._thumbs = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-slider", "mdc-slider"],
    hostVars: 12,
    hostBindings: function MatSlider_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275classProp("mdc-slider--range", ctx._isRange)("mdc-slider--disabled", ctx.disabled)("mdc-slider--discrete", ctx.discrete)("mdc-slider--tick-marks", ctx.showTickMarks)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      discrete: [2, "discrete", "discrete", booleanAttribute],
      showTickMarks: [2, "showTickMarks", "showTickMarks", booleanAttribute],
      min: [2, "min", "min", numberAttribute],
      color: "color",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      max: [2, "max", "max", numberAttribute],
      step: [2, "step", "step", numberAttribute],
      displayWith: "displayWith"
    },
    exportAs: ["matSlider"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER,
      useExisting: _MatSlider
    }]), \u0275\u0275InputTransformsFeature],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 5,
    consts: [["trackActive", ""], ["tickMarkContainer", ""], [1, "mdc-slider__track"], [1, "mdc-slider__track--inactive"], [1, "mdc-slider__track--active"], [1, "mdc-slider__track--active_fill"], [1, "mdc-slider__tick-marks"], [3, "discrete", "thumbPosition", "valueIndicatorText"], [3, "class", "transform"]],
    template: function MatSlider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275element(2, "div", 3);
        \u0275\u0275elementStart(3, "div", 4);
        \u0275\u0275element(4, "div", 5, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, MatSlider_Conditional_6_Template, 3, 1, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275template(7, MatSlider_Conditional_7_Template, 1, 3, "mat-slider-visual-thumb", 7);
        \u0275\u0275element(8, "mat-slider-visual-thumb", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.showTickMarks ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isRange ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("discrete", ctx.discrete)("thumbPosition", 2)("valueIndicatorText", ctx.endValueIndicatorText);
      }
    },
    dependencies: [MatSliderVisualThumb],
    styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mdc-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mdc-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mdc-slider-active-track-height, 4px);top:calc((var(--mdc-slider-inactive-track-height, 4px) - var(--mdc-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mdc-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mdc-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mdc-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mdc-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mdc-slider-inactive-track-height, 4px);border-radius:var(--mdc-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mdc-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:translateX(-50%);transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;border-radius:4px;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom;opacity:1;transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mdc-slider-label-container-color, var(--mat-sys-primary));color:var(--mdc-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mdc-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mdc-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mdc-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mdc-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mdc-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mdc-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mdc-slider-handle-width, 20px);height:var(--mdc-slider-handle-height, 20px);border-width:calc(var(--mdc-slider-handle-height, 20px)/2) calc(var(--mdc-slider-handle-width, 20px)/2);box-shadow:var(--mdc-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mdc-slider-handle-color, var(--mat-sys-primary));border-color:var(--mdc-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mdc-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mdc-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mdc-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mdc-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mdc-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mdc-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mdc-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mdc-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mdc-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mdc-slider-with-tick-marks-container-size, 2px);height:var(--mdc-slider-with-tick-marks-container-size, 2px);border-radius:var(--mdc-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mdc-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mdc-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mdc-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mdc-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:""}'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlider, [{
    type: Component,
    args: [{
      selector: "mat-slider",
      host: {
        "class": "mat-mdc-slider mdc-slider",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-slider--range]": "_isRange",
        "[class.mdc-slider--disabled]": "disabled",
        "[class.mdc-slider--discrete]": "discrete",
        "[class.mdc-slider--tick-marks]": "showTickMarks",
        "[class._mat-animation-noopable]": "_noopAnimations"
      },
      exportAs: "matSlider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER,
        useExisting: MatSlider
      }],
      imports: [MatSliderVisualThumb],
      template: `<!-- Inputs -->
<ng-content></ng-content>

<!-- Track -->
<div class="mdc-slider__track">
  <div class="mdc-slider__track--inactive"></div>
  <div class="mdc-slider__track--active">
    <div #trackActive class="mdc-slider__track--active_fill"></div>
  </div>
  @if (showTickMarks) {
    <div class="mdc-slider__tick-marks" #tickMarkContainer>
      @if (_cachedWidth) {
        @for (tickMark of _tickMarks; track i; let i = $index) {
          <div
            [class]="tickMark === 0 ? 'mdc-slider__tick-mark--active' : 'mdc-slider__tick-mark--inactive'"
            [style.transform]="_calcTickMarkTransform(i)"></div>
        }
      }
    </div>
  }
</div>

<!-- Thumbs -->
@if (_isRange) {
  <mat-slider-visual-thumb
    [discrete]="discrete"
    [thumbPosition]="1"
    [valueIndicatorText]="startValueIndicatorText">
  </mat-slider-visual-thumb>
}

<mat-slider-visual-thumb
  [discrete]="discrete"
  [thumbPosition]="2"
  [valueIndicatorText]="endValueIndicatorText">
</mat-slider-visual-thumb>
`,
      styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mdc-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mdc-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mdc-slider-active-track-height, 4px);top:calc((var(--mdc-slider-inactive-track-height, 4px) - var(--mdc-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mdc-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mdc-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mdc-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mdc-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mdc-slider-inactive-track-height, 4px);border-radius:var(--mdc-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mdc-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:translateX(-50%);transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;border-radius:4px;height:32px;padding:0 12px;transform:scale(0);transform-origin:bottom;opacity:1;transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mdc-slider-label-container-color, var(--mat-sys-primary));color:var(--mdc-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mdc-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mdc-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mdc-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mdc-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mdc-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mdc-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mdc-slider-handle-width, 20px);height:var(--mdc-slider-handle-height, 20px);border-width:calc(var(--mdc-slider-handle-height, 20px)/2) calc(var(--mdc-slider-handle-width, 20px)/2);box-shadow:var(--mdc-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mdc-slider-handle-color, var(--mat-sys-primary));border-color:var(--mdc-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mdc-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mdc-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mdc-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mdc-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mdc-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mdc-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mdc-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mdc-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mdc-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mdc-slider-with-tick-marks-container-size, 2px);height:var(--mdc-slider-with-tick-marks-container-size, 2px);border-radius:var(--mdc-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mdc-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mdc-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mdc-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mdc-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mdc-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:""}']
    }]
  }], () => [], {
    _trackActive: [{
      type: ViewChild,
      args: ["trackActive"]
    }],
    _thumbs: [{
      type: ViewChildren,
      args: [MAT_SLIDER_VISUAL_THUMB]
    }],
    _input: [{
      type: ContentChild,
      args: [MAT_SLIDER_THUMB]
    }],
    _inputs: [{
      type: ContentChildren,
      args: [MAT_SLIDER_RANGE_THUMB, {
        descendants: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    discrete: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTickMarks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    displayWith: [{
      type: Input
    }]
  });
})();
function _validateInputs(isRange, endInputElement, startInputElement) {
  const startValid = !isRange || startInputElement?._hostElement.hasAttribute("matSliderStartThumb");
  const endValid = endInputElement?._hostElement.hasAttribute(isRange ? "matSliderEndThumb" : "matSliderThumb");
  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}
function _throwInvalidInputConfigurationError() {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}
var MAT_SLIDER_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderThumb),
  multi: true
};
var MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderRangeThumb),
  multi: true
};
var MatSliderThumb = class _MatSliderThumb {
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _cdr = inject(ChangeDetectorRef);
  _slider = inject(MAT_SLIDER);
  _platform = inject(Platform);
  _listenerCleanups;
  get value() {
    return numberAttribute(this._hostElement.value, 0);
  }
  set value(value) {
    value = isNaN(value) ? 0 : value;
    const stringValue = value + "";
    if (!this._hasSetInitialValue) {
      this._initialValue = stringValue;
      return;
    }
    if (this._isActive) {
      return;
    }
    this._setValue(stringValue);
  }
  /**
   * Handles programmatic value setting. This has been split out to
   * allow the range thumb to override it and add additional necessary logic.
   */
  _setValue(value) {
    this._hostElement.value = value;
    this._updateThumbUIByValue();
    this._slider._onValueChange(this);
    this._cdr.detectChanges();
    this._slider._cdr.markForCheck();
  }
  /** Event emitted when the `value` is changed. */
  valueChange = new EventEmitter();
  /** Event emitted when the slider thumb starts being dragged. */
  dragStart = new EventEmitter();
  /** Event emitted when the slider thumb stops being dragged. */
  dragEnd = new EventEmitter();
  /**
   * The current translateX in px of the slider visual thumb.
   * @docs-private
   */
  get translateX() {
    if (this._slider.min >= this._slider.max) {
      this._translateX = this._tickMarkOffset;
      return this._translateX;
    }
    if (this._translateX === void 0) {
      this._translateX = this._calcTranslateXByValue();
    }
    return this._translateX;
  }
  set translateX(v) {
    this._translateX = v;
  }
  _translateX;
  /**
   * Indicates whether this thumb is the start or end thumb.
   * @docs-private
   */
  thumbPosition = _MatThumb.END;
  /** @docs-private */
  get min() {
    return numberAttribute(this._hostElement.min, 0);
  }
  set min(v) {
    this._hostElement.min = v + "";
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get max() {
    return numberAttribute(this._hostElement.max, 0);
  }
  set max(v) {
    this._hostElement.max = v + "";
    this._cdr.detectChanges();
  }
  get step() {
    return numberAttribute(this._hostElement.step, 0);
  }
  set step(v) {
    this._hostElement.step = v + "";
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get disabled() {
    return booleanAttribute(this._hostElement.disabled);
  }
  set disabled(v) {
    this._hostElement.disabled = v;
    this._cdr.detectChanges();
    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }
  /** The percentage of the slider that coincides with the value. */
  get percentage() {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }
  /** @docs-private */
  get fillPercentage() {
    if (!this._slider._cachedWidth) {
      return this._slider._isRtl ? 1 : 0;
    }
    if (this._translateX === 0) {
      return 0;
    }
    return this.translateX / this._slider._cachedWidth;
  }
  /** The host native HTML input element. */
  _hostElement = this._elementRef.nativeElement;
  /** The aria-valuetext string representation of the input's value. */
  _valuetext = signal("");
  /** The radius of a native html slider's knob. */
  _knobRadius = 8;
  /** The distance in px from the start of the slider track to the first tick mark. */
  _tickMarkOffset = 3;
  /** Whether user's cursor is currently in a mouse down state on the input. */
  _isActive = false;
  /** Whether the input is currently focused (either by tab or after clicking). */
  _isFocused = false;
  /** Used to relay updates to _isFocused to the slider visual thumbs. */
  _setIsFocused(v) {
    this._isFocused = v;
  }
  /**
   * Whether the initial value has been set.
   * This exists because the initial value cannot be immediately set because the min and max
   * must first be relayed from the parent MatSlider component, which can only happen later
   * in the component lifecycle.
   */
  _hasSetInitialValue = false;
  /** The stored initial value. */
  _initialValue;
  /** Defined when a user is using a form control to manage slider value & validation. */
  _formControl;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /**
   * Indicates whether UI updates should be skipped.
   *
   * This flag is used to avoid flickering
   * when correcting values on pointer up/down.
   */
  _skipUIUpdate = false;
  /** Callback called when the slider input value changes. */
  _onChangeFn;
  /** Callback called when the slider input has been touched. */
  _onTouchedFn = () => {
  };
  /**
   * Whether the NgModel has been initialized.
   *
   * This flag is used to ignore ghost null calls to
   * writeValue which can break slider initialization.
   *
   * See https://github.com/angular/angular/issues/14988.
   */
  _isControlInitialized = false;
  constructor() {
    const renderer = inject(Renderer2);
    this._ngZone.runOutsideAngular(() => {
      this._listenerCleanups = [renderer.listen(this._hostElement, "pointerdown", this._onPointerDown.bind(this)), renderer.listen(this._hostElement, "pointermove", this._onPointerMove.bind(this)), renderer.listen(this._hostElement, "pointerup", this._onPointerUp.bind(this))];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups.forEach((cleanup) => cleanup());
    this._destroyed.next();
    this._destroyed.complete();
    this.dragStart.complete();
    this.dragEnd.complete();
  }
  /** @docs-private */
  initProps() {
    this._updateWidthInactive();
    if (this.disabled !== this._slider.disabled) {
      this._slider.disabled = true;
    }
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
    this._initValue();
  }
  /** @docs-private */
  initUI() {
    this._updateThumbUIByValue();
  }
  _initValue() {
    this._hasSetInitialValue = true;
    if (this._initialValue === void 0) {
      this.value = this._getDefaultValue();
    } else {
      this._hostElement.value = this._initialValue;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
    }
  }
  _getDefaultValue() {
    return this.min;
  }
  _onBlur() {
    this._setIsFocused(false);
    this._onTouchedFn();
  }
  _onFocus() {
    this._slider._setTransition(false);
    this._slider._updateTrackUI(this);
    this._setIsFocused(true);
  }
  _onChange() {
    this.valueChange.emit(this.value);
    if (this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
  }
  _onInput() {
    this._onChangeFn?.(this.value);
    if (this._slider.step || !this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
    this._slider._onValueChange(this);
  }
  _onNgControlValueChange() {
    if (!this._isActive || !this._isFocused) {
      this._slider._onValueChange(this);
      this._updateThumbUIByValue();
    }
    this._slider.disabled = this._formControl.disabled;
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._platform.IOS) {
      const isCursorOnSliderThumb = this._slider._isCursorOnSliderThumb(event, this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());
      this._isActive = isCursorOnSliderThumb;
      this._updateWidthActive();
      this._slider._updateDimensions();
      return;
    }
    this._isActive = true;
    this._setIsFocused(true);
    this._updateWidthActive();
    this._slider._updateDimensions();
    if (!this._slider.step) {
      this._updateThumbUIByPointerEvent(event, {
        withAnimation: true
      });
    }
    if (!this.disabled) {
      this._handleValueCorrection(event);
      this.dragStart.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
    }
  }
  /**
   * Corrects the value of the slider on pointer up/down.
   *
   * Called on pointer down and up because the value is set based
   * on the inactive width instead of the active width.
   */
  _handleValueCorrection(event) {
    this._skipUIUpdate = true;
    setTimeout(() => {
      this._skipUIUpdate = false;
      this._fixValue(event);
    }, 0);
  }
  /** Corrects the value of the slider based on the pointer event's position. */
  _fixValue(event) {
    const xPos = event.clientX - this._slider._cachedLeft;
    const width = this._slider._cachedWidth;
    const step = this._slider.step === 0 ? 1 : this._slider.step;
    const numSteps = Math.floor((this._slider.max - this._slider.min) / step);
    const percentage = this._slider._isRtl ? 1 - xPos / width : xPos / width;
    const fixedPercentage = Math.round(percentage * numSteps) / numSteps;
    const impreciseValue = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;
    const value = Math.round(impreciseValue / step) * step;
    const prevValue = this.value;
    if (value === prevValue) {
      this._slider._onValueChange(this);
      this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
        withAnimation: this._slider._hasAnimation
      });
      return;
    }
    this.value = value;
    this.valueChange.emit(this.value);
    this._onChangeFn?.(this.value);
    this._slider._onValueChange(this);
    this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
      withAnimation: this._slider._hasAnimation
    });
  }
  _onPointerMove(event) {
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByPointerEvent(event);
    }
  }
  _onPointerUp() {
    if (this._isActive) {
      this._isActive = false;
      if (this._platform.SAFARI) {
        this._setIsFocused(false);
      }
      this.dragEnd.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
      setTimeout(() => this._updateWidthInactive(), this._platform.IOS ? 10 : 0);
    }
  }
  _clamp(v) {
    const min = this._tickMarkOffset;
    const max = this._slider._cachedWidth - this._tickMarkOffset;
    return Math.max(Math.min(v, max), min);
  }
  _calcTranslateXByValue() {
    if (this._slider._isRtl) {
      return (1 - this.percentage) * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
    }
    return this.percentage * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
  }
  _calcTranslateXByPointerEvent(event) {
    return event.clientX - this._slider._cachedLeft;
  }
  /**
   * Used to set the slider width to the correct
   * dimensions while the user is dragging.
   */
  _updateWidthActive() {
  }
  /**
   * Sets the slider input to disproportionate dimensions to allow for touch
   * events to be captured on touch devices.
   */
  _updateWidthInactive() {
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    this._hostElement.style.width = `calc(100% + ${this._slider._inputPadding - this._tickMarkOffset * 2}px)`;
    this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
  }
  _updateThumbUIByValue(options) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }
  _updateThumbUIByPointerEvent(event, options) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options);
  }
  _updateThumbUI(options) {
    this._slider._setTransition(!!options?.withAnimation);
    this._slider._onTranslateXChange(this);
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
    }
  }
  /**
   * Registers a callback to be invoked when the input's value changes from user input.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnChange(fn) {
    this._onChangeFn = fn;
    this._isControlInitialized = true;
  }
  /**
   * Registers a callback to be invoked when the input is blurred by the user.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnTouched(fn) {
    this._onTouchedFn = fn;
  }
  /**
   * Sets the disabled state of the slider.
   * @param isDisabled The new disabled state
   * @docs-private
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  focus() {
    this._hostElement.focus();
  }
  blur() {
    this._hostElement.blur();
  }
  static \u0275fac = function MatSliderThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderThumb,
    selectors: [["input", "matSliderThumb", ""]],
    hostAttrs: ["type", "range", 1, "mdc-slider__input"],
    hostVars: 1,
    hostBindings: function MatSliderThumb_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function MatSliderThumb_change_HostBindingHandler() {
          return ctx._onChange();
        })("input", function MatSliderThumb_input_HostBindingHandler() {
          return ctx._onInput();
        })("blur", function MatSliderThumb_blur_HostBindingHandler() {
          return ctx._onBlur();
        })("focus", function MatSliderThumb_focus_HostBindingHandler() {
          return ctx._onFocus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuetext", ctx._valuetext());
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd"
    },
    exportAs: ["matSliderThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_THUMB,
      useExisting: _MatSliderThumb
    }]), \u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderThumb]",
      exportAs: "matSliderThumb",
      host: {
        "class": "mdc-slider__input",
        "type": "range",
        "[attr.aria-valuetext]": "_valuetext()",
        "(change)": "_onChange()",
        "(input)": "_onInput()",
        // TODO(wagnermaciel): Consider using a global event listener instead.
        // Reason: I have found a semi-consistent way to mouse up without triggering this event.
        "(blur)": "_onBlur()",
        "(focus)": "_onFocus()"
      },
      providers: [MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: MatSliderThumb
      }]
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    valueChange: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }]
  });
})();
var MatSliderRangeThumb = class _MatSliderRangeThumb extends MatSliderThumb {
  _cdr = inject(ChangeDetectorRef);
  /** @docs-private */
  getSibling() {
    if (!this._sibling) {
      this._sibling = this._slider._getInput(this._isEndThumb ? _MatThumb.START : _MatThumb.END);
    }
    return this._sibling;
  }
  _sibling;
  /**
   * Returns the minimum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMinPos() {
    const sibling = this.getSibling();
    if (!this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._tickMarkOffset;
  }
  /**
   * Returns the maximum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMaxPos() {
    const sibling = this.getSibling();
    if (this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._cachedWidth - this._tickMarkOffset;
  }
  _setIsLeftThumb() {
    this._isLeftThumb = this._isEndThumb && this._slider._isRtl || !this._isEndThumb && !this._slider._isRtl;
  }
  /** Whether this slider corresponds to the input on the left hand side. */
  _isLeftThumb;
  /** Whether this slider corresponds to the input with greater value. */
  _isEndThumb;
  constructor() {
    super();
    this._isEndThumb = this._hostElement.hasAttribute("matSliderEndThumb");
    this._setIsLeftThumb();
    this.thumbPosition = this._isEndThumb ? _MatThumb.END : _MatThumb.START;
  }
  _getDefaultValue() {
    return this._isEndThumb && this._slider._isRange ? this.max : this.min;
  }
  _onInput() {
    super._onInput();
    this._updateSibling();
    if (!this._isActive) {
      this._updateWidthInactive();
    }
  }
  _onNgControlValueChange() {
    super._onNgControlValueChange();
    this.getSibling()?._updateMinMax();
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._sibling) {
      this._sibling._updateWidthActive();
      this._sibling._hostElement.classList.add("mat-mdc-slider-input-no-pointer-events");
    }
    super._onPointerDown(event);
  }
  _onPointerUp() {
    super._onPointerUp();
    if (this._sibling) {
      setTimeout(() => {
        this._sibling._updateWidthInactive();
        this._sibling._hostElement.classList.remove("mat-mdc-slider-input-no-pointer-events");
      });
    }
  }
  _onPointerMove(event) {
    super._onPointerMove(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }
  _fixValue(event) {
    super._fixValue(event);
    this._sibling?._updateMinMax();
  }
  _clamp(v) {
    return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
  }
  _updateMinMax() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, sibling.value);
    }
  }
  _updateWidthActive() {
    const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
    const maxWidth = this._slider._cachedWidth + this._slider._inputPadding - minWidth - this._tickMarkOffset * 2;
    const percentage = this._slider.min < this._slider.max ? (this.max - this.min) / (this._slider.max - this._slider.min) : 1;
    const width = maxWidth * percentage + minWidth;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
  }
  _updateWidthInactive() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    const maxWidth = this._slider._cachedWidth - this._tickMarkOffset * 2;
    const midValue = this._isEndThumb ? this.value - (this.value - sibling.value) / 2 : this.value + (sibling.value - this.value) / 2;
    const _percentage = this._isEndThumb ? (this.max - midValue) / (this._slider.max - this._slider.min) : (midValue - this.min) / (this._slider.max - this._slider.min);
    const percentage = this._slider.min < this._slider.max ? _percentage : 1;
    let ripplePadding = this._slider._rippleRadius;
    if (percentage === 1) {
      ripplePadding = 48;
    } else if (percentage === 0) {
      ripplePadding = 0;
    }
    const width = maxWidth * percentage + ripplePadding;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = "0px";
    if (this._isLeftThumb) {
      this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
      this._hostElement.style.right = "auto";
    } else {
      this._hostElement.style.left = "auto";
      this._hostElement.style.right = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
    }
  }
  _updateStaticStyles() {
    this._hostElement.classList.toggle("mat-slider__right-input", !this._isLeftThumb);
  }
  _updateSibling() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    sibling._updateMinMax();
    if (this._isActive) {
      sibling._updateWidthActive();
    } else {
      sibling._updateWidthInactive();
    }
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
      this._updateWidthInactive();
      this._updateSibling();
    }
  }
  _setValue(value) {
    super._setValue(value);
    this._updateWidthInactive();
    this._updateSibling();
  }
  static \u0275fac = function MatSliderRangeThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderRangeThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderRangeThumb,
    selectors: [["input", "matSliderStartThumb", ""], ["input", "matSliderEndThumb", ""]],
    exportAs: ["matSliderRangeThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_RANGE_THUMB,
      useExisting: _MatSliderRangeThumb
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderRangeThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderStartThumb], input[matSliderEndThumb]",
      exportAs: "matSliderRangeThumb",
      providers: [MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: MatSliderRangeThumb
      }]
    }]
  }], () => [], null);
})();
var MatSliderModule = class _MatSliderModule {
  static \u0275fac = function MatSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSliderModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatRippleModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
      exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb]
    }]
  }], null, null);
})();

// src/app/modules/admin/ui/fuse-components/components/loading-bar/loading-bar.component.ts
function LoadingBarComponent_ng_template_119_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30)(2, "button", 31);
    \u0275\u0275listener("click", function LoadingBarComponent_ng_template_119_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showLoadingBar());
    });
    \u0275\u0275text(3, " Show loading bar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function LoadingBarComponent_ng_template_119_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideLoadingBar());
    });
    \u0275\u0275text(5, " Hide loading bar ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
  }
}
function LoadingBarComponent_ng_template_132_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 32)(2, "mat-slide-toggle", 33);
    \u0275\u0275listener("change", function LoadingBarComponent_ng_template_132_Template_mat_slide_toggle_change_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setAutoMode($event));
    });
    \u0275\u0275text(3, " Auto Mode ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 34);
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function LoadingBarComponent_ng_template_132_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.makeAPICall());
    });
    \u0275\u0275text(6, " Make an API call (2000ms delay) ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 9);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", true)("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" API call status: ", ctx_r1.apiCallStatus, " ");
  }
}
function LoadingBarComponent_ng_template_145_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 35)(2, "div", 36)(3, "button", 31);
    \u0275\u0275listener("click", function LoadingBarComponent_ng_template_145_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showLoadingBar());
    });
    \u0275\u0275text(4, " Show loading bar ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275listener("click", function LoadingBarComponent_ng_template_145_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideLoadingBar());
    });
    \u0275\u0275text(6, " Hide loading bar ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-slide-toggle", 33);
    \u0275\u0275listener("change", function LoadingBarComponent_ng_template_145_Template_mat_slide_toggle_change_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMode());
    });
    \u0275\u0275text(8, " Toggle determinate mode ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div");
    \u0275\u0275text(10, " Progress value ");
    \u0275\u0275elementStart(11, "mat-slider", 37)(12, "input", 38);
    \u0275\u0275twoWayListener("valueChange", function LoadingBarComponent_ng_template_145_Template_input_valueChange_12_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.sliderValue, $event) || (ctx_r1.sliderValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("valueChange", function LoadingBarComponent_ng_template_145_Template_input_valueChange_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setProgress());
    });
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", false)("color", "primary");
    \u0275\u0275advance(4);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("value", ctx_r1.sliderValue);
  }
}
var LoadingBarComponent = class _LoadingBarComponent {
  /**
   * Constructor
   */
  constructor(_httpClient, _fuseComponentsComponent, _fuseLoadingService) {
    this._httpClient = _httpClient;
    this._fuseComponentsComponent = _fuseComponentsComponent;
    this._fuseLoadingService = _fuseLoadingService;
    this.apiCallStatus = "-";
    this.mode = "indeterminate";
    this.sliderValue = 0;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  /**
   * Show the loading bar
   */
  showLoadingBar() {
    this._fuseLoadingService.show();
  }
  /**
   * Hide the loading bar
   */
  hideLoadingBar() {
    this._fuseLoadingService.hide();
  }
  /**
   * Set the auto mode
   *
   * @param change
   */
  setAutoMode(change) {
    this._fuseLoadingService.setAutoMode(change.checked);
  }
  /**
   * Make a fake API call
   */
  makeAPICall() {
    this.apiCallStatus = "Waiting...";
    this._httpClient.get("https://jsonplaceholder.typicode.com/posts?_delay=2000").pipe(finalize(() => {
      this.apiCallStatus = "Finished!";
    })).subscribe((response) => {
      console.log(response);
    });
  }
  /**
   * Toggle the mode
   */
  toggleMode() {
    this._fuseLoadingService.show();
    this.mode = this.mode === "indeterminate" ? "determinate" : "indeterminate";
    this._fuseLoadingService.setMode(this.mode);
  }
  /**
   * Set the progress
   */
  setProgress() {
    this._fuseLoadingService.setProgress(this.sliderValue);
  }
  static {
    this.\u0275fac = function LoadingBarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LoadingBarComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(FuseComponentsComponent), \u0275\u0275directiveInject(FuseLoadingService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoadingBarComponent, selectors: [["loading-bar"]], decls: 152, vars: 13, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], [1, "bg-card", "mt-4", "rounded", "shadow"], [1, "text-secondary", "border-b", "px-6", "py-3", "font-mono"], [1, "p-6"], [1, "example-viewer"], [1, "title"], [3, "animationDuration"], ["label", "Preview"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], ["label", "Typescript"], [1, "bg-gray-100", "p-4"], [1, "mx-auto", "flex", "max-w-80", "space-x-4"], ["mat-flat-button", "", 3, "click", "color"], [1, "mx-auto", "flex", "max-w-80", "flex-col", "items-center"], [3, "change", "checked", "color"], [1, "mb-6", "w-24", "border-b", "pt-6"], [1, "mx-auto", "flex", "max-w-80", "flex-col", "items-center", "space-y-8"], [1, "flex", "items-center", "space-x-4"], [3, "color"], ["matSliderThumb", "", 3, "valueChange", "value"]], template: function LoadingBarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Loading Bar ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function LoadingBarComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "fuse-loading-bar");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a small component to show the loading status at the top of the page. It can be configured to the ");
        \u0275\u0275elementStart(25, "strong");
        \u0275\u0275text(26, "Auto Mode");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " to show/hide automatically on each HTTP request. It can also be toggled manually using its service. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p")(29, "strong");
        \u0275\u0275text(30, "Exported as: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "code");
        \u0275\u0275text(32, "fuseLoadingBar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "h2");
        \u0275\u0275text(34, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "textarea", 14);
        \u0275\u0275text(36, "            import { FuseLoadingBarModule } from '@fuse/components/loading-bar';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "h2");
        \u0275\u0275text(38, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40, " Here's the basic usage of the ");
        \u0275\u0275elementStart(41, "code");
        \u0275\u0275text(42, "fuse-loading-bar");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, ". We already placed the component to the layout templates for you but you can always move it! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "textarea", 15);
        \u0275\u0275text(45, "            <");
        \u0275\u0275text(46, "fuse-loading-bar>");
        \u0275\u0275text(47, "<");
        \u0275\u0275text(48, "/fuse-loading-bar>");
        \u0275\u0275text(49, "\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "h2");
        \u0275\u0275text(51, "Properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 16)(53, "table")(54, "thead")(55, "tr")(56, "th");
        \u0275\u0275text(57, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "th");
        \u0275\u0275text(59, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "th");
        \u0275\u0275text(61, "Default");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "tbody")(63, "tr")(64, "td", 17)(65, "div");
        \u0275\u0275text(66, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div");
        \u0275\u0275text(68, "autoMode: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "td");
        \u0275\u0275text(70, "Turn on or off the Auto Mode.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "td")(72, "code");
        \u0275\u0275text(73, "true");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(74, "h2");
        \u0275\u0275text(75, "Service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "p")(77, "code");
        \u0275\u0275text(78, "FuseLoadingService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(79, " can be injected to control the loading bar from anywhere. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div", 18)(81, "div", 19);
        \u0275\u0275text(82, " show(): void; ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 20);
        \u0275\u0275text(84, "Shows the loading bar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "div", 18)(86, "div", 19);
        \u0275\u0275text(87, " hide(): void; ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div", 20);
        \u0275\u0275text(89, "Hides the loading bar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div", 18)(91, "div", 19);
        \u0275\u0275text(92, " setAutoMode(value: boolean): void; ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 20);
        \u0275\u0275text(94, " Sets the Auto Mode. In Auto mode, loading bar will show when there is an HTTP request and it will hide when all HTTP requests are completed or failed. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "div", 18)(96, "div", 19);
        \u0275\u0275text(97, " setMode(value: 'determinate' | 'indeterminate'): void; ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "div", 20);
        \u0275\u0275text(99, " Sets the mode of the underlying ");
        \u0275\u0275elementStart(100, "code");
        \u0275\u0275text(101, "MatProgressBar");
        \u0275\u0275elementEnd();
        \u0275\u0275text(102, " component. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 18)(104, "div", 19);
        \u0275\u0275text(105, " setProgress(value: number): void; ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div", 20);
        \u0275\u0275text(107, " Sets the progress manually. Only available on ");
        \u0275\u0275elementStart(108, "code");
        \u0275\u0275text(109, "determinate");
        \u0275\u0275elementEnd();
        \u0275\u0275text(110, " mode. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "h2");
        \u0275\u0275text(112, "Examples");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 21)(114, "div", 22)(115, "h6");
        \u0275\u0275text(116, "Show / hide the loading bar manually");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(117, "mat-tab-group", 23)(118, "mat-tab", 24);
        \u0275\u0275template(119, LoadingBarComponent_ng_template_119_Template, 6, 2, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "mat-tab", 26)(121, "textarea", 27);
        \u0275\u0275text(122, `                        <button
                            mat-flat-button
                            [color]="'primary'"
                            (click)="showLoadingBar()">
                            Show loading bar
                        </button>

                        <button
                            mat-flat-button
                            [color]="'primary'"
                            (click)="hideLoadingBar()">
                            Hide loading bar
                        </button>
                    `);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "mat-tab", 28)(124, "textarea", 27);
        \u0275\u0275text(125, "                        private _fuseLoadingService = inject(FuseLoadingService);\n\n                        ...\n\n                        /**\n                         * Show the loading bar\n                         */\n                        showLoadingBar(): void\n                        {\n                            this._fuseLoadingService.show();\n                        }\n\n                        /**\n                         * Hide the loading bar\n                         */\n                        hideLoadingBar(): void\n                        {\n                            this._fuseLoadingService.hide();\n                        }\n                    ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(126, "div", 21)(127, "div", 22)(128, "h6");
        \u0275\u0275text(129, "Toggle the Auto Mode");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "mat-tab-group", 23)(131, "mat-tab", 24);
        \u0275\u0275template(132, LoadingBarComponent_ng_template_132_Template, 9, 4, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "mat-tab", 26)(134, "textarea", 27);
        \u0275\u0275text(135);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(136, "mat-tab", 28)(137, "textarea", 27);
        \u0275\u0275text(138, "                        private _httpClient = inject(HttpClient);\n                        private _fuseLoadingService = inject(FuseLoadingService);\n\n                        apiCallStatus: string = '-';\n\n                        ...\n\n                        /**\n                         * Set the auto mode\n                         *\n                         * @param change\n                         */\n                        setAutoMode(change: MatSlideToggleChange): void\n                        {\n                            this._fuseLoadingService.setAutoMode(change.checked);\n                        }\n\n                        /**\n                         * Make a fake API call\n                         */\n                        makeAPICall(): void\n                        {\n                            this.apiCallStatus = 'Waiting...';\n\n                            this._httpClient.get('https://jsonplaceholder.typicode.com/posts?_delay=2000')\n                                .pipe(finalize(() => { this.apiCallStatus = 'Finished!'; }))\n                                .subscribe((response) => {\n                                    console.log(response);\n                                });\n                        }\n                    ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(139, "div", 21)(140, "div", 22)(141, "h6");
        \u0275\u0275text(142, "Manually set the progress");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(143, "mat-tab-group", 23)(144, "mat-tab", 24);
        \u0275\u0275template(145, LoadingBarComponent_ng_template_145_Template, 13, 6, "ng-template", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "mat-tab", 26)(147, "textarea", 27);
        \u0275\u0275text(148, `                        <mat-slide-toggle
                            [checked]="false"
                            [color]="'primary'"
                            (change)="toggleMode()">
                            Toggle determinate mode
                        </mat-slide-toggle>

                        <mat-slider
                            [color]="'primary'"
                            (change)="setProgress($event)">
                            Progress value
                        </mat-slider>
                    `);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "mat-tab", 28)(150, "textarea", 27);
        \u0275\u0275text(151, "                        private _fuseLoadingService = inject(FuseLoadingService);\n\n                        mode: 'determinate' | 'indeterminate' = 'indeterminate';\n\n                        ...\n\n                        /**\n                         * Toggle the mode\n                         */\n                        toggleMode(): void\n                        {\n                            // Show the loading bar\n                            this._fuseLoadingService.show();\n\n                            // Turn off the auto mode\n                            this._fuseLoadingService.setAutoMode(false);\n\n                            // Set the mode\n                            this.mode = this.mode === 'indeterminate' ? 'determinate' : 'indeterminate';\n                            this._fuseLoadingService.setMode(this.mode);\n                        }\n\n                        /**\n                         * Set the progress\n                         *\n                         * @param change\n                         */\n                        setProgress(change: MatSliderChange): void\n                        {\n                            this._fuseLoadingService.setProgress(change.value);\n                        }\n                    ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(98);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(3);
        \u0275\u0275property("lang", "ts");
        \u0275\u0275advance(6);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(`                        <mat-slide-toggle
                            [checked]="true"
                            [color]="'primary'"
                            (change)="setAutoMode($event)">
                            Auto Mode
                        </mat-slide-toggle>

                        <div class="w-24 pt-6 mb-6 border-b"></div>

                        <button
                            mat-flat-button
                            [color]="'primary'"
                            (click)="makeAPICall()">
                            Make an API call (2000ms delay)
                        </button>

                        <div class="mt-2">API call status: `, ctx.apiCallStatus, "</div>\n                    ");
        \u0275\u0275advance(2);
        \u0275\u0275property("lang", "ts");
        \u0275\u0275advance(6);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(3);
        \u0275\u0275property("lang", "ts");
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      FuseHighlightComponent,
      MatTabsModule,
      MatTabContent,
      MatTab,
      MatTabGroup,
      MatSlideToggleModule,
      MatSlideToggle,
      MatSliderModule,
      MatSlider,
      MatSliderThumb
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoadingBarComponent, { className: "LoadingBarComponent", filePath: "src/app/modules/admin/ui/fuse-components/components/loading-bar/loading-bar.component.ts", lineNumber: 28 });
})();

// src/app/modules/admin/ui/fuse-components/components/masonry/masonry.component.ts
var _c03 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var _c12 = () => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
function MasonryComponent_ng_template_106_ng_template_3_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r1, " ");
  }
}
function MasonryComponent_ng_template_106_ng_template_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275repeaterCreate(1, MasonryComponent_ng_template_106_ng_template_3_For_1_For_2_Template, 2, 1, "div", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(column_r2.items);
  }
}
function MasonryComponent_ng_template_106_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MasonryComponent_ng_template_106_ng_template_3_For_1_Template, 3, 0, "div", 31, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const columns_r3 = ctx.$implicit;
    \u0275\u0275repeater(columns_r3);
  }
}
function MasonryComponent_ng_template_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275element(2, "fuse-masonry", 30);
    \u0275\u0275template(3, MasonryComponent_ng_template_106_ng_template_3_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const columnsTemplate_r4 = \u0275\u0275reference(4);
    \u0275\u0275advance(2);
    \u0275\u0275property("items", \u0275\u0275pureFunction0(3, _c03))("columns", 4)("columnsTemplate", columnsTemplate_r4);
  }
}
function MasonryComponent_ng_template_128_ng_template_3_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r5, " ");
  }
}
function MasonryComponent_ng_template_128_ng_template_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275repeaterCreate(1, MasonryComponent_ng_template_128_ng_template_3_For_1_For_2_Template, 2, 1, "div", 32, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(column_r6.items);
  }
}
function MasonryComponent_ng_template_128_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MasonryComponent_ng_template_128_ng_template_3_For_1_Template, 3, 0, "div", 31, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    const columns_r7 = ctx.$implicit;
    \u0275\u0275repeater(columns_r7);
  }
}
function MasonryComponent_ng_template_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29);
    \u0275\u0275element(2, "fuse-masonry", 30);
    \u0275\u0275template(3, MasonryComponent_ng_template_128_ng_template_3_Template, 2, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const columnsTemplate2_r8 = \u0275\u0275reference(4);
    const ctx_r8 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("items", \u0275\u0275pureFunction0(3, _c12))("columns", ctx_r8.columns)("columnsTemplate", columnsTemplate2_r8);
  }
}
var MasonryComponent = class _MasonryComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent, _fuseMediaWatcherService) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this.columns = 4;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._fuseMediaWatcherService.onMediaChange$.pipe(takeUntil(this._unsubscribeAll)).subscribe(({ matchingAliases }) => {
      if (matchingAliases.includes("xl")) {
        this.columns = 5;
      } else if (matchingAliases.includes("lg")) {
        this.columns = 4;
      } else if (matchingAliases.includes("md")) {
        this.columns = 3;
      } else if (matchingAliases.includes("sm")) {
        this.columns = 2;
      } else {
        this.columns = 1;
      }
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function MasonryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MasonryComponent)(\u0275\u0275directiveInject(FuseComponentsComponent), \u0275\u0275directiveInject(FuseMediaWatcherService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MasonryComponent, selectors: [["masonry"]], decls: 135, vars: 8, consts: [["columnsTemplate", ""], ["columnsTemplate2", ""], [1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], [1, "whitespace-nowrap"], [1, "example-viewer"], [1, "title"], [3, "animationDuration"], ["label", "Preview"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], ["label", "TypeScript"], [1, "bg-gray-100", "p-4"], [1, "mx-auto", "max-w-80"], [1, "-mx-2", 3, "items", "columns", "columnsTemplate"], [1, "mx-2", "flex-1", "space-y-2", "rounded", "border", "p-2"], [1, "rounded", "bg-primary", "p-2", "text-center", "text-on-primary"]], template: function MasonryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5)(4, "div")(5, "a", 6);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275element(8, "mat-icon", 8);
        \u0275\u0275elementStart(9, "a", 9);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 7);
        \u0275\u0275element(12, "mat-icon", 8);
        \u0275\u0275elementStart(13, "span", 10);
        \u0275\u0275text(14, "Components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 11)(16, "h2", 12);
        \u0275\u0275text(17, " Masonry ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 13);
        \u0275\u0275listener("click", function MasonryComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 15)(21, "p")(22, "strong");
        \u0275\u0275text(23, "fuse-masonry");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a basic Masonry layout component to show items in Masonry grid layout. Since it doesn't use any other third party library or complex calculations to keep everything smooth and fast; ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "ul")(26, "li");
        \u0275\u0275text(27, "It does NOT work with elements with different widths");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "li");
        \u0275\u0275text(29, " It does NOT sort items based on their heights (This here is the real performance killer) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "p");
        \u0275\u0275text(31, " If you don't need to mix and match different width items and don't need to sort items based on their heights, ");
        \u0275\u0275elementStart(32, "strong");
        \u0275\u0275text(33, "fuse-masonry");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " will do the job for you and it will do it very smoothly. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p")(36, "strong");
        \u0275\u0275text(37, "Exported as: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "code");
        \u0275\u0275text(39, "fuseMasonry");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "h2");
        \u0275\u0275text(41, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "textarea", 16);
        \u0275\u0275text(43, "            import { FuseMasonry } from '@fuse/components/masonry';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "h2");
        \u0275\u0275text(45, "Properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 17)(47, "table")(48, "thead")(49, "tr")(50, "th");
        \u0275\u0275text(51, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "th");
        \u0275\u0275text(53, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "th");
        \u0275\u0275text(55, "Default");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(56, "tbody")(57, "tr")(58, "td", 18)(59, "div");
        \u0275\u0275text(60, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div");
        \u0275\u0275text(62, "columnsTemplate: TemplateRef");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "td");
        \u0275\u0275text(64, " Column template for masonry component to lay out. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "td")(66, "code", 19);
        \u0275\u0275text(67, "undefined");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(68, "tr")(69, "td", 18)(70, "div");
        \u0275\u0275text(71, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div");
        \u0275\u0275text(73, "columns: number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "td");
        \u0275\u0275text(75, "Number of columns to create");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "td")(77, "code", 19);
        \u0275\u0275text(78, "undefined");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(79, "tr")(80, "td", 18)(81, "div");
        \u0275\u0275text(82, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div");
        \u0275\u0275text(84, "items: any[]");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "td");
        \u0275\u0275text(86, "Items to distribute into columns");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "td")(88, "code", 19);
        \u0275\u0275text(89, "[]");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(90, "h2");
        \u0275\u0275text(91, "Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "p");
        \u0275\u0275text(93, "This component doesn't have any public methods.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "h2");
        \u0275\u0275text(95, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "p")(97, "strong");
        \u0275\u0275text(98, "fuse-masonry");
        \u0275\u0275elementEnd();
        \u0275\u0275text(99, " doesn't provide a default template or styling to the items. You can think of it as a helper function but in a component form: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 20)(101, "div", 21)(102, "h6");
        \u0275\u0275text(103, "Example");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "mat-tab-group", 22)(105, "mat-tab", 23);
        \u0275\u0275template(106, MasonryComponent_ng_template_106_Template, 5, 4, "ng-template", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "mat-tab", 25)(108, "textarea", 26);
        \u0275\u0275text(109, '                        <fuse-masonry\n                            class="-mx-2"\n                            [items]="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]"\n                            [columns]="4"\n                            [columnsTemplate]="columnsTemplate">\n                        </fuse-masonry>\n\n                        <ng-template\n                            #columnsTemplate\n                            let-columns>\n                            <ng-container *ngFor="let column of columns">\n                                <!-- Column -->\n                                <div class="flex-1 mx-2 p-2 border rounded space-y-2">\n                                    <ng-container *ngFor="let item of column.items">\n                                        <!-- Item -->\n                                        <div class="p-2 text-center rounded bg-primary text-on-primary">\n                                            ITEM CONTENT\n                                        </div>\n                                    </ng-container>\n                                </div>\n                            </ng-container>\n                        </ng-template>\n                    ');
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(110, "h3");
        \u0275\u0275text(111, "Responsive");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(112, "p")(113, "strong");
        \u0275\u0275text(114, "fuse-masonry");
        \u0275\u0275elementEnd();
        \u0275\u0275text(115, " doesn't provide a way of changing the column count depending on breakpoints but this can easily be handled by combining ");
        \u0275\u0275elementStart(116, "code");
        \u0275\u0275text(117, "fuse-masonry");
        \u0275\u0275elementEnd();
        \u0275\u0275text(118, " with ");
        \u0275\u0275elementStart(119, "code");
        \u0275\u0275text(120, "FuseMediaWatcherService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(121, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 20)(123, "div", 21)(124, "h6");
        \u0275\u0275text(125, "Example");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(126, "mat-tab-group", 22)(127, "mat-tab", 23);
        \u0275\u0275template(128, MasonryComponent_ng_template_128_Template, 5, 4, "ng-template", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(129, "mat-tab", 25)(130, "textarea", 26);
        \u0275\u0275text(131, '                        <fuse-masonry\n                            class="-mx-2"\n                            [items]="[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"\n                            [columns]="columns"\n                            [columnsTemplate]="columnsTemplate">\n                        </fuse-masonry>\n\n                        <ng-template\n                            #columnsTemplate\n                            let-columns>\n                            <ng-container *ngFor="let column of columns">\n                                <!-- Column -->\n                                <div class="flex-1 mx-2 p-2 border rounded space-y-2">\n                                    <ng-container *ngFor="let item of column.items">\n                                        <!-- Item -->\n                                        <div class="p-2 text-center rounded bg-primary text-on-primary">\n                                            ITEM CONTENT\n                                        </div>\n                                    </ng-container>\n                                </div>\n                            </ng-container>\n                        </ng-template>\n                    ');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "mat-tab", 27)(133, "textarea", 26);
        \u0275\u0275text(134, "                        columns: number = 4;\n\n                        // Subscribe to media changes\n                        this._fuseMediaWatcherService.onMediaChange$\n                            .pipe(takeUntil(this._unsubscribeAll))\n                            .subscribe(({matchingAliases}) => {\n\n                                // Set the masonry columns\n                                //\n                                // This if block structured in a way so that only the\n                                // biggest matching alias will be used to set the column\n                                // count.\n                                if ( matchingAliases.includes('xl') )\n                                {\n                                    this.columns = 5;\n                                }\n                                else if ( matchingAliases.includes('lg') )\n                                {\n                                    this.columns = 4;\n                                }\n                                else if ( matchingAliases.includes('md') )\n                                {\n                                    this.columns = 3;\n                                }\n                                else if ( matchingAliases.includes('sm') )\n                                {\n                                    this.columns = 2;\n                                }\n                                else\n                                {\n                                    this.columns = 1;\n                                }\n                            });\n                    ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(85);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(18);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(3);
        \u0275\u0275property("lang", "ts");
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatIconButton,
      FuseHighlightComponent,
      MatTabsModule,
      MatTabContent,
      MatTab,
      MatTabGroup,
      FuseMasonryComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MasonryComponent, { className: "MasonryComponent", filePath: "src/app/modules/admin/ui/fuse-components/components/masonry/masonry.component.ts", lineNumber: 22 });
})();

// src/app/modules/admin/ui/fuse-components/components/navigation/navigation.component.ts
function NavigationComponent_ng_template_553_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function NavigationComponent_ng_template_553_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.getNavItem("documentation.changelog", "mainNavigation"));
    });
    \u0275\u0275text(1, " Get the Changelog item (See browser console) ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("color", "primary");
  }
}
function NavigationComponent_ng_template_576_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function NavigationComponent_ng_template_576_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateBadgeTitle("documentation.changelog", "mainNavigation", "9.9.99"));
    });
    \u0275\u0275text(1, " Update the 'Changelog' badge title ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("color", "primary");
  }
}
function NavigationComponent_ng_template_589_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function NavigationComponent_ng_template_589_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDisabled("documentation.changelog", "mainNavigation"));
    });
    \u0275\u0275text(1, " Toggle the disabled status of 'Changelog' item ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("color", "primary");
  }
}
function NavigationComponent_ng_template_606_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "fuse-alert", 34);
    \u0275\u0275text(1, " Reload the page to load the default navigation! ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 35);
    \u0275\u0275listener("click", function NavigationComponent_ng_template_606_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.swapNavigationData("mainNavigation"));
    });
    \u0275\u0275text(3, " Swap the entire navigation data ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
  }
}
var NavigationComponent = class _NavigationComponent {
  /**
   * Constructor
   */
  constructor(_fuseNavigationService, _fuseComponentsComponent) {
    this._fuseNavigationService = _fuseNavigationService;
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get navigation item
   *
   * @param itemId
   * @param navigationName
   */
  getNavItem(itemId, navigationName) {
    const navComponent = this._fuseNavigationService.getComponent(navigationName);
    if (!navComponent) {
      return null;
    }
    const navigation = navComponent.navigation;
    const item = this._fuseNavigationService.getItem(itemId, navigation);
    console.log(item);
    return item;
  }
  /**
   * Update badge title
   *
   * @param itemId
   * @param navigationName
   * @param title
   */
  updateBadgeTitle(itemId, navigationName, title) {
    const navComponent = this._fuseNavigationService.getComponent(navigationName);
    if (!navComponent) {
      return null;
    }
    const navigation = navComponent.navigation;
    const item = this._fuseNavigationService.getItem(itemId, navigation);
    item.badge.title = title;
    navComponent.refresh();
  }
  /**
   * Toggle disabled status
   *
   * @param itemId
   * @param navigationName
   */
  toggleDisabled(itemId, navigationName) {
    const navComponent = this._fuseNavigationService.getComponent(navigationName);
    if (!navComponent) {
      return null;
    }
    const navigation = navComponent.navigation;
    const item = this._fuseNavigationService.getItem(itemId, navigation);
    item.disabled = !item.disabled;
    navComponent.refresh();
  }
  /**
   * Swap navigation data
   *
   * @param navigationName
   */
  swapNavigationData(navigationName) {
    const navComponent = this._fuseNavigationService.getComponent(navigationName);
    if (!navComponent) {
      return null;
    }
    const newNavigation = [
      {
        id: "supported-components",
        title: "Supported components",
        subtitle: "Compatible third party components",
        type: "group",
        icon: "memory",
        children: [
          {
            id: "supported-components.apex-charts",
            title: "ApexCharts",
            type: "basic",
            icon: "insert_chart",
            link: "/supported-components/apex-charts"
          },
          {
            id: "supported-components.google-maps",
            title: "Google Maps",
            type: "basic",
            icon: "map",
            link: "/supported-components/google-maps"
          },
          {
            id: "supported-components.quill-editor",
            title: "Quill editor",
            type: "basic",
            icon: "font_download",
            link: "/supported-components/quill-editor"
          },
          {
            id: "supported-components.youtube-player",
            title: "Youtube player",
            type: "basic",
            icon: "play_circle_filled",
            link: "/supported-components/youtube-player"
          }
        ]
      }
    ];
    navComponent.navigation = newNavigation;
    navComponent.refresh();
  }
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function NavigationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NavigationComponent)(\u0275\u0275directiveInject(FuseNavigationService), \u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NavigationComponent, selectors: [["navigation"]], decls: 613, vars: 17, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], [3, "appearance", "type"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "mt-2", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], ["href", "https://angular.io/api/router/IsActiveMatchOptions", "target", "_blank", "rel", "noreferrer"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "rounded", "px-6", "py-3", "shadow"], [1, "whitespace-nowrap"], [1, "mb-2"], [1, "text-xs", "font-bold"], [1, "bg-card", "mt-4", "rounded", "px-6", "py-3", "shadow"], [1, "example-viewer"], [1, "title"], [3, "animationDuration"], ["label", "Preview"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], ["label", "Typescript"], ["mat-flat-button", "", 3, "click", "color"], ["appearance", "outline", "type", "info"], ["mat-flat-button", "", 1, "mt-4", 3, "click", "color"]], template: function NavigationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Components");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Navigation ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function NavigationComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "fuse-navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a set of components for creating navigations from data. It has two different variations; ");
        \u0275\u0275elementStart(25, "strong");
        \u0275\u0275text(26, "fuse-vertical-navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " for creating vertical and ");
        \u0275\u0275elementStart(28, "strong");
        \u0275\u0275text(29, "fuse-horizontal-navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " for creating horizontal navigations. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, " The ");
        \u0275\u0275elementStart(33, "em");
        \u0275\u0275text(34, "vertical");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " navigation comes with built-in drawer that can be programmed in various ways to show the navigation in different styles and to control the mobile behavior. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p")(37, "strong");
        \u0275\u0275text(38, "fuse-navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, " also provides a service which can be used to store navigation data as well as accessing navigation items with their ids from the navigation data. It's a utility service, you don't have to use it to make ");
        \u0275\u0275elementStart(40, "strong");
        \u0275\u0275text(41, "fuse-navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " work. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p")(44, "strong");
        \u0275\u0275text(45, "Exported as: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "code");
        \u0275\u0275text(47, "fuseVerticalNavigation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " and ");
        \u0275\u0275elementStart(49, "code");
        \u0275\u0275text(50, "fuseHorizontalNavigation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "fuse-alert", 14);
        \u0275\u0275text(52, " fuse-navigation designed to work with data and it must be supplied in certain format. If you want to create a navigation from an HTML structure, this component is not for you. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "h2");
        \u0275\u0275text(54, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "textarea", 15);
        \u0275\u0275text(56, "            import { FuseVerticalNavigationModule } from '@fuse/components/navigation';\n            import { FuseHorizontalNavigationModule } from '@fuse/components/navigation';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "h2");
        \u0275\u0275text(58, "Navigation item");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p");
        \u0275\u0275text(60, " This is the interface of the ");
        \u0275\u0275elementStart(61, "em");
        \u0275\u0275text(62, "Navigation item");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, ". Both ");
        \u0275\u0275elementStart(64, "em");
        \u0275\u0275text(65, "vertical");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, " and ");
        \u0275\u0275elementStart(67, "em");
        \u0275\u0275text(68, "horizontal");
        \u0275\u0275elementEnd();
        \u0275\u0275text(69, " navigation items use the same interface: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "textarea", 15);
        \u0275\u0275text(71, "            export interface FuseNavigationItem\n            {\n                id?: string;\n                title?: string;\n                subtitle?: string;\n                type:\n                    | 'aside'\n                    | 'basic'\n                    | 'collapsable'\n                    | 'divider'\n                    | 'group'\n                    | 'spacer';\n                hidden?: (item: FuseNavigationItem) => boolean;\n                active?: boolean;\n                disabled?: boolean;\n                tooltip?: string;\n                link?: string;\n                fragment?: string;\n                preserveFragment?: boolean;\n                queryParams?: Params | null;\n                queryParamsHandling?: QueryParamsHandling | null;\n                externalLink?: boolean;\n                target?:\n                    | '_blank'\n                    | '_self'\n                    | '_parent'\n                    | '_top'\n                    | string;\n                exactMatch?: boolean;\n                isActiveMatchOptions?: IsActiveMatchOptions;\n                function?: (item: FuseNavigationItem) => void;\n                classes?: {\n                    title?: string;\n                    subtitle?: string;\n                    icon?: string;\n                    wrapper?: string;\n                };\n                icon?: string;\n                badge?: {\n                    title?: string;\n                    classes?: string;\n                };\n                children?: FuseNavigationItem[];\n                meta?: any;\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 16)(73, "table")(74, "thead")(75, "tr")(76, "th");
        \u0275\u0275text(77, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "th");
        \u0275\u0275text(79, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(80, "tbody")(81, "tr")(82, "td", 17)(83, "div");
        \u0275\u0275text(84, "id");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "td");
        \u0275\u0275text(86, " Unique id of the navigation item. It's important to supply navigation items with ids if you want to access and modify them after generating the navigation. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "tr")(88, "td", 17)(89, "div");
        \u0275\u0275text(90, "title");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "td");
        \u0275\u0275text(92, "Title of the navigation item.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "tr")(94, "td", 17)(95, "div");
        \u0275\u0275text(96, "subtitle");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "td");
        \u0275\u0275text(98, "Subtitle of the navigation item.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "tr")(100, "td", 17)(101, "div");
        \u0275\u0275text(102, "type");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "td");
        \u0275\u0275text(104, "Type of the navigation item.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "tr")(106, "td", 17)(107, "div");
        \u0275\u0275text(108, "hidden");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "td");
        \u0275\u0275text(110, " A function that returns a boolean. It gets one parameter which is the navigation item. Returning ");
        \u0275\u0275elementStart(111, "code");
        \u0275\u0275text(112, "true");
        \u0275\u0275elementEnd();
        \u0275\u0275text(113, " from the function will hide the item and ");
        \u0275\u0275elementStart(114, "code");
        \u0275\u0275text(115, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(116, " will show it. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(117, "tr")(118, "td", 17)(119, "div");
        \u0275\u0275text(120, "active");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "td");
        \u0275\u0275text(122, " Whether to force the navigation item to be active. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(123, "tr")(124, "td", 17)(125, "div");
        \u0275\u0275text(126, "disabled");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(127, "td");
        \u0275\u0275text(128, "Whether the navigation item is disabled.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "tr")(130, "td", 17)(131, "div");
        \u0275\u0275text(132, "tooltip");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(133, "td");
        \u0275\u0275text(134, " Tooltip to show on item hover. Empty string will remove the tooltip. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "tr")(136, "td", 17)(137, "div");
        \u0275\u0275text(138, "link");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(139, "td");
        \u0275\u0275text(140, " String representation of the item link. It can be either a ");
        \u0275\u0275elementStart(141, "em");
        \u0275\u0275text(142, "router");
        \u0275\u0275elementEnd();
        \u0275\u0275text(143, " link or a normal, outgoing link. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "tr")(145, "td", 17)(146, "div");
        \u0275\u0275text(147, "fragment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(148, "td");
        \u0275\u0275text(149, "Sets the hash fragment for the URL.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "tr")(151, "td", 17)(152, "div");
        \u0275\u0275text(153, "preserveFragment");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(154, "td");
        \u0275\u0275text(155, " When true, preserves the URL fragment for the next navigation. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "tr")(157, "td", 17)(158, "div");
        \u0275\u0275text(159, "queryParams");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(160, "td");
        \u0275\u0275text(161, "Sets query parameters to the URL.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(162, "tr")(163, "td", 17)(164, "div");
        \u0275\u0275text(165, "queryParamsHandling");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(166, "td");
        \u0275\u0275text(167, " How to handle query parameters in the router link for the next navigation. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(168, "tr")(169, "td", 17)(170, "div");
        \u0275\u0275text(171, "externalLink");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(172, "td");
        \u0275\u0275text(173, " Whether the supplied link should be parsed as an external link. It must be ");
        \u0275\u0275elementStart(174, "strong");
        \u0275\u0275text(175, "true");
        \u0275\u0275elementEnd();
        \u0275\u0275text(176, " if you supply a normal, outgoing link in the ");
        \u0275\u0275elementStart(177, "strong");
        \u0275\u0275text(178, "link");
        \u0275\u0275elementEnd();
        \u0275\u0275text(179, " property. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(180, "tr")(181, "td", 17)(182, "div");
        \u0275\u0275text(183, "target");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(184, "td");
        \u0275\u0275text(185, " Sets the ");
        \u0275\u0275elementStart(186, "em");
        \u0275\u0275text(187, "target");
        \u0275\u0275elementEnd();
        \u0275\u0275text(188, " attribute of the external, outgoing link. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(189, "tr")(190, "td", 17)(191, "div");
        \u0275\u0275text(192, "exactMatch");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(193, "td");
        \u0275\u0275text(194, " Sets the ");
        \u0275\u0275elementStart(195, "em");
        \u0275\u0275text(196, "exact");
        \u0275\u0275elementEnd();
        \u0275\u0275text(197, " parameter on the ");
        \u0275\u0275elementStart(198, "em");
        \u0275\u0275text(199, "[routerLinkActiveOptions]");
        \u0275\u0275elementEnd();
        \u0275\u0275text(200, ". ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(201, "tr")(202, "td", 17)(203, "div");
        \u0275\u0275text(204, "isActiveMatchOptions");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(205, "td");
        \u0275\u0275text(206, " Sets the ");
        \u0275\u0275elementStart(207, "em");
        \u0275\u0275text(208, "isActiveMatchOptions");
        \u0275\u0275elementEnd();
        \u0275\u0275text(209, " object on the ");
        \u0275\u0275elementStart(210, "em");
        \u0275\u0275text(211, "[routerLinkActiveOptions]");
        \u0275\u0275elementEnd();
        \u0275\u0275text(212, ". If provided, ");
        \u0275\u0275elementStart(213, "em");
        \u0275\u0275text(214, "exactMatch");
        \u0275\u0275elementEnd();
        \u0275\u0275text(215, " option will be ignored. ");
        \u0275\u0275elementStart(216, "a", 18);
        \u0275\u0275text(217, "https://angular.io/api/router/IsActiveMatchOptions ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(218, "tr")(219, "td", 17)(220, "div");
        \u0275\u0275text(221, "function");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(222, "td");
        \u0275\u0275text(223, " A function to run on navigation item click. It gets one parameter which is the navigation item. Supplying function will ");
        \u0275\u0275elementStart(224, "strong");
        \u0275\u0275text(225, "NOT");
        \u0275\u0275elementEnd();
        \u0275\u0275text(226, " override the link functionality of the navigation item, they will run in parallel. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(227, "tr")(228, "td", 17)(229, "div");
        \u0275\u0275text(230, "classes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(231, "td");
        \u0275\u0275text(232, " Custom class names for the navigation item's specific parts. Multiple class names can be added by separating them with whitespace: ");
        \u0275\u0275elementStart(233, "code");
        \u0275\u0275text(234, "'class1 class2 class3'");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(235, "tr")(236, "td", 17)(237, "div");
        \u0275\u0275text(238, "icon");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(239, "td");
        \u0275\u0275text(240, "Icon name for the navigation item.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(241, "tr")(242, "td", 17)(243, "div");
        \u0275\u0275text(244, "badge.title");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(245, "td");
        \u0275\u0275text(246, "Title of the badge.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(247, "tr")(248, "td", 17)(249, "div");
        \u0275\u0275text(250, "badge.classes");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(251, "td");
        \u0275\u0275text(252, " Classes to add to the badge. This can be used to customize the look of the badge. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(253, "tr")(254, "td", 17)(255, "div");
        \u0275\u0275text(256, "children");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(257, "td");
        \u0275\u0275text(258, " Array of navigation items to create child items. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(259, "tr")(260, "td", 17)(261, "div");
        \u0275\u0275text(262, "meta");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(263, "td");
        \u0275\u0275text(264, " An object to hold custom data for the navigation item. It can be used for anything such as storing the access role and authorization of the navigation item. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(265, "h2");
        \u0275\u0275text(266, "Vertical navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(267, "h3");
        \u0275\u0275text(268, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(269, "p");
        \u0275\u0275text(270, " Here's the basic usage of the ");
        \u0275\u0275elementStart(271, "code");
        \u0275\u0275text(272, "fuse-vertical-navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(273, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(274, "textarea", 19);
        \u0275\u0275text(275, `            <fuse-vertical-navigation
                [appearance]="'classic'"
                [autoCollapse]="true"
                [inner]="false"
                [mode]="isScreenSmall ? 'over' : 'side'"
                [name]="'leftNavigation'"
                [navigation]="navigationData"
                [opened]="!isScreenSmall"
                [position]="'left'"
                [transparentOverlay]="false">
            </fuse-vertical-navigation>
        `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(276, "h3");
        \u0275\u0275text(277, "Properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(278, "div", 20)(279, "table")(280, "thead")(281, "tr")(282, "th");
        \u0275\u0275text(283, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(284, "th");
        \u0275\u0275text(285, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(286, "th");
        \u0275\u0275text(287, "Default");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(288, "tbody")(289, "tr")(290, "td", 17)(291, "div");
        \u0275\u0275text(292, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(293, "div");
        \u0275\u0275text(294, " appearance: FuseVerticalNavigationAppearance ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(295, "td");
        \u0275\u0275text(296, " Appearance of the navigation and its drawer. This is a string type and can be used to override the style of the navigation. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(297, "td")(298, "code", 21);
        \u0275\u0275text(299, "classic");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(300, "tr")(301, "td", 17)(302, "div");
        \u0275\u0275text(303, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(304, "div");
        \u0275\u0275text(305, "autoCollapse: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(306, "td");
        \u0275\u0275text(307, " Whether expanding an expandable navigation item should close other expanded items excluding the active menu item's parent. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(308, "td")(309, "code", 21);
        \u0275\u0275text(310, "true");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(311, "tr")(312, "td", 17)(313, "div");
        \u0275\u0275text(314, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(315, "div");
        \u0275\u0275text(316, "inner: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(317, "td");
        \u0275\u0275text(318, " Whether the inner mode is active. This mode allows using navigation without its drawer. Suitable for using it inside ");
        \u0275\u0275elementStart(319, "strong");
        \u0275\u0275text(320, "mat-sidenav");
        \u0275\u0275elementEnd();
        \u0275\u0275text(321, " or ");
        \u0275\u0275elementStart(322, "strong");
        \u0275\u0275text(323, "mat-drawer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(324, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(325, "td")(326, "code", 21);
        \u0275\u0275text(327, "false");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(328, "tr")(329, "td", 17)(330, "div");
        \u0275\u0275text(331, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(332, "div");
        \u0275\u0275text(333, "mode: FuseVerticalNavigationMode");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(334, "td")(335, "strong");
        \u0275\u0275text(336, "over");
        \u0275\u0275elementEnd();
        \u0275\u0275text(337, " mode can be used to place the drawer on top of the content and ");
        \u0275\u0275elementStart(338, "strong");
        \u0275\u0275text(339, "side");
        \u0275\u0275elementEnd();
        \u0275\u0275text(340, " mode can be used to push the content and place the drawer next to it. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(341, "td")(342, "code", 21);
        \u0275\u0275text(343, "side");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(344, "tr")(345, "td", 17)(346, "div", 22)(347, "code", 23);
        \u0275\u0275text(348, "REQUIRED");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(349, "div");
        \u0275\u0275text(350, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(351, "div");
        \u0275\u0275text(352, "name: string");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(353, "td");
        \u0275\u0275text(354, " Unique name of the navigation. Required for navigation and its drawer to work correctly. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(355, "td");
        \u0275\u0275text(356, "-");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(357, "tr")(358, "td", 17)(359, "div");
        \u0275\u0275text(360, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(361, "div");
        \u0275\u0275text(362, "navigation: FuseNavigationItem[]");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(363, "td");
        \u0275\u0275text(364, " Array of navigation items to build the navigation from. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(365, "td");
        \u0275\u0275text(366, "-");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(367, "tr")(368, "td", 17)(369, "div");
        \u0275\u0275text(370, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(371, "div");
        \u0275\u0275text(372, "opened: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(373, "td");
        \u0275\u0275text(374, " Whether the navigation drawer is opened. Only works with ");
        \u0275\u0275elementStart(375, "strong");
        \u0275\u0275text(376, "over");
        \u0275\u0275elementEnd();
        \u0275\u0275text(377, " mode. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(378, "td")(379, "code", 21);
        \u0275\u0275text(380, "false");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(381, "tr")(382, "td", 17)(383, "div");
        \u0275\u0275text(384, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(385, "div");
        \u0275\u0275text(386, "position: FuseVerticalNavigationPosition");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(387, "td");
        \u0275\u0275text(388, "Position of the drawer.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(389, "td")(390, "code", 21);
        \u0275\u0275text(391, "left");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(392, "tr")(393, "td", 17)(394, "div");
        \u0275\u0275text(395, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(396, "div");
        \u0275\u0275text(397, "transparentOverlay: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(398, "td");
        \u0275\u0275text(399, " Whether the overlay of the drawer is transparent. Only works with ");
        \u0275\u0275elementStart(400, "strong");
        \u0275\u0275text(401, "over");
        \u0275\u0275elementEnd();
        \u0275\u0275text(402, " mode. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(403, "td")(404, "code", 21);
        \u0275\u0275text(405, "false");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(406, "tr")(407, "td", 17)(408, "div");
        \u0275\u0275text(409, "@Output()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(410, "div");
        \u0275\u0275text(411, " appearanceChanged: FuseVerticalNavigationAppearance ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(412, "td");
        \u0275\u0275text(413, " An event emitted after the appearance of the navigation changed. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(414, "td");
        \u0275\u0275text(415, "-");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(416, "tr")(417, "td", 17)(418, "div");
        \u0275\u0275text(419, "@Output()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(420, "div");
        \u0275\u0275text(421, "modeChanged: FuseVerticalNavigationMode");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(422, "td");
        \u0275\u0275text(423, " An event emitted after the mode of the navigation changed. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(424, "td");
        \u0275\u0275text(425, "-");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(426, "tr")(427, "td", 17)(428, "div");
        \u0275\u0275text(429, "@Output()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(430, "div");
        \u0275\u0275text(431, "openedChanged: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(432, "td");
        \u0275\u0275text(433, " An event emitted after the opened status of the navigation changed. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(434, "td");
        \u0275\u0275text(435, "-");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(436, "tr")(437, "td", 17)(438, "div");
        \u0275\u0275text(439, "@Output()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(440, "div");
        \u0275\u0275text(441, " positionChanged: FuseVerticalNavigationPosition ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(442, "td");
        \u0275\u0275text(443, " An event emitted after the position of the navigation changed. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(444, "td");
        \u0275\u0275text(445, "-");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(446, "h3");
        \u0275\u0275text(447, "Custom content hooks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(448, "p");
        \u0275\u0275text(449, " Since the entire navigation will be created from the supplied navigation data, it's only possible to attach custom content inside the navigation drawer using custom content hooks. There are four of these hooks; ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(450, "div", 24)(451, "table")(452, "thead")(453, "tr")(454, "th");
        \u0275\u0275text(455, "Hook");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(456, "th");
        \u0275\u0275text(457, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(458, "tbody")(459, "tr")(460, "td", 17)(461, "div");
        \u0275\u0275text(462, "fuseVerticalNavigationHeader");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(463, "td");
        \u0275\u0275text(464, " Fixed header hook. Anything put inside this hook will not scroll with drawer content. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(465, "tr")(466, "td", 17)(467, "div");
        \u0275\u0275text(468, "fuseVerticalNavigationContentHeader");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(469, "td");
        \u0275\u0275text(470, " Header hook. Anything put inside this hook will be scrolled with the drawer content. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(471, "tr")(472, "td", 17)(473, "div");
        \u0275\u0275text(474, "fuseVerticalNavigationFooter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(475, "td");
        \u0275\u0275text(476, " Fixed footer hook. Anything put inside this hook will not scroll with drawer content. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(477, "tr")(478, "td", 17)(479, "div");
        \u0275\u0275text(480, "fuseVerticalNavigationContentFooter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(481, "td");
        \u0275\u0275text(482, " Footer hook. Anything put inside this hook will be scrolled with the drawer content. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(483, "textarea", 19);
        \u0275\u0275text(484, "            <!-- Navigation -->\n            <fuse-vertical-navigation>\n\n                <div fuseVerticalNavigationHeader>\n                    At the top, fixed into position.\n                </div>\n\n                <div fuseVerticalNavigationContentHeader>\n                    At the top, scrolls with the content.\n                </div>\n\n                <div fuseVerticalNavigationContentFooter>\n                    At the bottom, scrolls with the content.\n                </div>\n\n                <div fuseVerticalNavigationFooter>\n                    At the bottom, fixed into position.\n                </div>\n\n            </fuse-vertical-navigation>\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(485, "h3");
        \u0275\u0275text(486, "Type aliases");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(487, "textarea", 15);
        \u0275\u0275text(488, "            export type FuseVerticalNavigationAppearance =\n                | 'default'\n                | 'compact'\n                | 'dense'\n                | 'futuristic'\n                | 'thin'\n                | string;\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(489, "textarea", 15);
        \u0275\u0275text(490, "            export type FuseVerticalNavigationMode =\n                | 'over'\n                | 'side';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(491, "textarea", 15);
        \u0275\u0275text(492, "            export type FuseVerticalNavigationPosition =\n                | 'left'\n                | 'right';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(493, "h2");
        \u0275\u0275text(494, "Horizontal navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(495, "h3");
        \u0275\u0275text(496, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(497, "p");
        \u0275\u0275text(498, " Here's the basic usage of the ");
        \u0275\u0275elementStart(499, "code");
        \u0275\u0275text(500, "fuse-horizontal-navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(501, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(502, "textarea", 19);
        \u0275\u0275text(503, `            <fuse-horizontal-navigation
                [name]="'topNavigation'"
                [navigation]="navigationData">
            </fuse-horizontal-navigation>
        `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(504, "h3");
        \u0275\u0275text(505, "Properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(506, "div", 20)(507, "table")(508, "thead")(509, "tr")(510, "th");
        \u0275\u0275text(511, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(512, "th");
        \u0275\u0275text(513, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(514, "th");
        \u0275\u0275text(515, "Default");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(516, "tbody")(517, "tr")(518, "td", 17)(519, "div", 22)(520, "code", 23);
        \u0275\u0275text(521, "REQUIRED");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(522, "div");
        \u0275\u0275text(523, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(524, "div");
        \u0275\u0275text(525, "name: string");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(526, "td");
        \u0275\u0275text(527, " Unique name of the navigation. Required for navigation and its drawer to work correctly. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(528, "td");
        \u0275\u0275text(529, "-");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(530, "tr")(531, "td", 17)(532, "div");
        \u0275\u0275text(533, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(534, "div");
        \u0275\u0275text(535, "navigation: FuseNavigationItem[]");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(536, "td");
        \u0275\u0275text(537, " Array of navigation items to build the navigation from. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(538, "td");
        \u0275\u0275text(539, "-");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(540, "h2");
        \u0275\u0275text(541, "Accessing navigation items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(542, "p");
        \u0275\u0275text(543, " The ");
        \u0275\u0275elementStart(544, "code");
        \u0275\u0275text(545, "FuseNavigationService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(546, " provides couple helper methods to access navigation items from the navigation data using their ids. This is especially useful if you want to change something from any item like updating its badge title, hiding or disabling it. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(547, "div", 25)(548, "div", 26)(549, "h6");
        \u0275\u0275text(550, "Example");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(551, "mat-tab-group", 27)(552, "mat-tab", 28);
        \u0275\u0275template(553, NavigationComponent_ng_template_553_Template, 2, 1, "ng-template", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(554, "mat-tab", 30)(555, "textarea", 31);
        \u0275\u0275text(556, `                        <button
                            mat-flat-button
                            [color]="'primary'"
                            (click)="getNavItem('documentation.changelog', 'mainNavigation');">
                            Get the Changelog item (See browser console)
                        </button>
                    `);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(557, "mat-tab", 32)(558, "textarea", 31);
        \u0275\u0275text(559, "\n                        /**\n                         * Get navigation item\n                         *\n                         * @param itemId\n                         * @param navigationName\n                         */\n                        getNavItem(itemId, navigationName): FuseNavigationItem | null\n                        {\n                            // Get the component -> navigation data -> item\n                            const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(navigationName);\n\n                            // Return if the navigation component does not exist\n                            if ( !navComponent )\n                            {\n                                return null;\n                            }\n\n                            // Get the navigation item\n                            const navigation = navComponent.navigation;\n                            const item = this._fuseNavigationService.getItem(itemId, navigation);\n                            console.log(item);\n                            return item;\n                        }\n\n                    ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(560, "h2");
        \u0275\u0275text(561, "Modifying navigation items");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(562, "p");
        \u0275\u0275text(563, " After accessing a navigation item, you can simply modify the object and then call the ");
        \u0275\u0275elementStart(564, "code");
        \u0275\u0275text(565, "refresh()");
        \u0275\u0275elementEnd();
        \u0275\u0275text(566, " method on the ");
        \u0275\u0275elementStart(567, "em");
        \u0275\u0275text(568, "Navigation component");
        \u0275\u0275elementEnd();
        \u0275\u0275text(569, " to apply the changes. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(570, "div", 25)(571, "div", 26)(572, "h6");
        \u0275\u0275text(573, "Change badge title");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(574, "mat-tab-group", 27)(575, "mat-tab", 28);
        \u0275\u0275template(576, NavigationComponent_ng_template_576_Template, 2, 1, "ng-template", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(577, "mat-tab", 30)(578, "textarea", 31);
        \u0275\u0275text(579, `                        <button
                            mat-flat-button
                            [color]="'primary'"
                            (click)="updateBadgeTitle('documentation.changelog', 'mainNavigation', '9.9.99');">
                            Update the 'Changelog' badge title
                        </button>
                    `);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(580, "mat-tab", 32)(581, "textarea", 31);
        \u0275\u0275text(582, "\n                        /**\n                         * Update badge title\n                         *\n                         * @param itemId\n                         * @param navigationName\n                         * @param title\n                         */\n                        updateBadgeTitle(itemId, navigationName, title): void\n                        {\n                            // Get the component -> navigation data -> item\n                            const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(navigationName);\n\n                            // Return if the navigation component does not exist\n                            if ( !navComponent )\n                            {\n                                return null;\n                            }\n\n                            // Get the navigation item, update the badge and refresh the component\n                            const navigation = navComponent.navigation;\n                            const item = this._fuseNavigationService.getItem(itemId, navigation);\n                            item.badge.title = title;\n                            navComponent.refresh();\n                        }\n\n                    ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(583, "div", 25)(584, "div", 26)(585, "h6");
        \u0275\u0275text(586, "Disable/Enable navigation item");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(587, "mat-tab-group", 27)(588, "mat-tab", 28);
        \u0275\u0275template(589, NavigationComponent_ng_template_589_Template, 2, 1, "ng-template", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(590, "mat-tab", 30)(591, "textarea", 31);
        \u0275\u0275text(592, `                        <button
                            mat-flat-button
                            [color]="'primary'"
                            (click)="toggleDisabled('documentation.changelog', 'mainNavigation');">
                            Toggle the disabled status of 'Changelog' item
                        </button>
                    `);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(593, "mat-tab", 32)(594, "textarea", 31);
        \u0275\u0275text(595, "\n                        /**\n                         * Toggle disabled status\n                         *\n                         * @param itemId\n                         * @param navigationName\n                         */\n                        toggleDisabled(itemId, navigationName): void\n                        {\n                            // Get the component -> navigation data -> item\n                            const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(navigationName);\n\n                            // Return if the navigation component does not exist\n                            if ( !navComponent )\n                            {\n                                return null;\n                            }\n\n                            // Get the navigation item, update the badge and refresh the component\n                            const navigation = navComponent.navigation;\n                            const item = this._fuseNavigationService.getItem(itemId, navigation);\n                            item.disabled = !item.disabled;\n                            navComponent.refresh();\n                        }\n\n                    ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(596, "h2");
        \u0275\u0275text(597, "Swapping entire navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(598, "p");
        \u0275\u0275text(599, " Sometimes it's best to use more than one set of data and swap between them to provide correct navigation. An example use case would be user roles. Different roles may require access to different areas and rather than showing/hiding individual navigation items, it's best to swap the entire navigation data to show a personalized navigation for that role. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(600, "div", 25)(601, "div", 26)(602, "h6");
        \u0275\u0275text(603, "Swap the entire navigation data");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(604, "mat-tab-group", 27)(605, "mat-tab", 28);
        \u0275\u0275template(606, NavigationComponent_ng_template_606_Template, 4, 1, "ng-template", 29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(607, "mat-tab", 30)(608, "textarea", 31);
        \u0275\u0275text(609, `                        <button
                            mat-flat-button
                            [color]="'primary'"
                            (click)="swapNavigationData('mainNavigation');">
                            Swap the entire navigation data
                        </button>
                    `);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(610, "mat-tab", 32)(611, "textarea", 31);
        \u0275\u0275text(612, "\n                        /**\n                         * Swap navigation data\n                         *\n                         * @param navigationName\n                         */\n                        swapNavigationData(navigationName): void\n                        {\n                            // Get the component -> navigation data -> item\n                            const navComponent = this._fuseNavigationService.getComponent<FuseVerticalNavigationComponent>(navigationName);\n\n                            // Return if the navigation component does not exist\n                            if ( !navComponent )\n                            {\n                                return null;\n                            }\n\n                            // A navigation data to replace with\n                            const newNavigation: FuseNavigationItem[] = [\n                                {\n                                    id      : 'supported-components',\n                                    title   : 'Supported components',\n                                    subtitle: 'Compatible third party components',\n                                    type    : 'group',\n                                    icon    : 'memory',\n                                    children: [\n                                        {\n                                            id   : 'supported-components.apex-charts',\n                                            title: 'ApexCharts',\n                                            type : 'basic',\n                                            icon : 'insert_chart',\n                                            link : '/supported-components/apex-charts'\n                                        },\n                                        {\n                                            id   : 'supported-components.full-calendar',\n                                            title: 'FullCalendar',\n                                            type : 'basic',\n                                            icon : 'today',\n                                            link : '/supported-components/full-calendar'\n                                        },\n                                        {\n                                            id   : 'supported-components.google-maps',\n                                            title: 'Google Maps',\n                                            type : 'basic',\n                                            icon : 'map',\n                                            link : '/supported-components/google-maps'\n                                        },\n                                        {\n                                            id   : 'supported-components.quill-editor',\n                                            title: 'Quill editor',\n                                            type : 'basic',\n                                            icon : 'font_download',\n                                            link : '/supported-components/quill-editor'\n                                        },\n                                        {\n                                            id   : 'supported-components.youtube-player',\n                                            title: 'Youtube player',\n                                            type : 'basic',\n                                            icon : 'play_circle_filled',\n                                            link : '/supported-components/youtube-player'\n                                        }\n                                    ]\n                                }\n                            ];\n\n                            // Replace the navigation data\n                            navComponent.navigation = newNavigation;\n                            navComponent.refresh();\n                        }\n\n                    ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(32);
        \u0275\u0275property("appearance", "border")("type", "info");
        \u0275\u0275advance(500);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(3);
        \u0275\u0275property("lang", "typescript");
        \u0275\u0275advance(16);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(3);
        \u0275\u0275property("lang", "typescript");
        \u0275\u0275advance(6);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(3);
        \u0275\u0275property("lang", "typescript");
        \u0275\u0275advance(10);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(3);
        \u0275\u0275property("lang", "typescript");
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      FuseAlertComponent,
      FuseHighlightComponent,
      MatTabsModule,
      MatTabContent,
      MatTab,
      MatTabGroup
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NavigationComponent, { className: "NavigationComponent", filePath: "src/app/modules/admin/ui/fuse-components/components/navigation/navigation.component.ts", lineNumber: 25 });
})();

// src/app/modules/admin/ui/fuse-components/directives/scroll-reset/scroll-reset.component.ts
var ScrollResetComponent = class _ScrollResetComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function ScrollResetComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollResetComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrollResetComponent, selectors: [["scroll-reset"]], decls: 56, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"], ["fuse-highlight", "", "lang", "html", 1, "mt-8"]], template: function ScrollResetComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Directives");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " ScrollReset ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ScrollResetComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "fuseScrollReset");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a helper directive to reset the given element's scroll position to the top on route changes. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, " This directive is especially useful in situations like having a ");
        \u0275\u0275elementStart(27, "code");
        \u0275\u0275text(28, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " inside a scrollable area such as ");
        \u0275\u0275elementStart(30, "code");
        \u0275\u0275text(31, "mat-drawer-content");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, ", ");
        \u0275\u0275elementStart(33, "code");
        \u0275\u0275text(34, "mat-sidenav-content");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " or a custom scrollable element. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p")(37, "strong");
        \u0275\u0275text(38, "Exported as: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "code");
        \u0275\u0275text(40, "fuseScrollReset");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "h2");
        \u0275\u0275text(42, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "textarea", 14);
        \u0275\u0275text(44, "            import { FuseScrollResetModule } from '@fuse/directives/scroll-reset';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "h2");
        \u0275\u0275text(46, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "p");
        \u0275\u0275text(48, " Here are some of the basic usages of the ");
        \u0275\u0275elementStart(49, "code");
        \u0275\u0275text(50, "fuseScrollReset");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "textarea", 15);
        \u0275\u0275text(53, "            <mat-drawer-content fuseScrollReset>\n                <router-outlet></router-outlet>\n            </mat-drawer-content>\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "textarea", 16);
        \u0275\u0275text(55, '            <div class="mail">\n                <div\n                    class="threads"\n                    fuseScrollReset>\n                    <router-outlet></router-outlet>\n                </div>\n            </div>\n        ');
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
      }
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton, FuseHighlightComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrollResetComponent, { className: "ScrollResetComponent", filePath: "src/app/modules/admin/ui/fuse-components/directives/scroll-reset/scroll-reset.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/fuse-components/directives/scrollbar/scrollbar.component.ts
var ScrollbarComponent = class _ScrollbarComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function ScrollbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrollbarComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrollbarComponent, selectors: [["scrollbar"]], decls: 166, vars: 4, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["href", "https://github.com/mdbootstrap/perfect-scrollbar", "rel", "noreferrer", "target", "_blank"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], [1, "whitespace-nowrap"], [1, "bg-card", "mt-4", "rounded", "shadow"], [1, "text-secondary", "border-b", "px-6", "py-3", "font-mono"], [1, "p-6"]], template: function ScrollbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Directives");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Scrollbar ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ScrollbarComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "fuseScrollbar");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a wrapper directive for ");
        \u0275\u0275elementStart(25, "a", 14);
        \u0275\u0275text(26, "Perfect Scrollbar ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " plugin. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p")(29, "strong");
        \u0275\u0275text(30, "Exported as: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "code");
        \u0275\u0275text(32, "fuseScrollbar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "h2");
        \u0275\u0275text(34, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "textarea", 15);
        \u0275\u0275text(36, "            import { FuseScrollbarModule } from '@fuse/directives/scrollbar';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "h2");
        \u0275\u0275text(38, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40, "Here's the basic usage of the ");
        \u0275\u0275elementStart(41, "code");
        \u0275\u0275text(42, "fuseScrollbar");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, ":");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "textarea", 16);
        \u0275\u0275text(45, '            <div fuseScrollbar\n                 [fuseScrollbarOptions]="{wheelPropagation: false, suppressScrollX: true}">\n                A very long content to add scrollbars.\n            </div>\n        ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "h2");
        \u0275\u0275text(47, "Properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 17)(49, "table")(50, "thead")(51, "tr")(52, "th");
        \u0275\u0275text(53, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "th");
        \u0275\u0275text(55, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "th");
        \u0275\u0275text(57, "Default");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "tbody")(59, "tr")(60, "td", 18)(61, "div");
        \u0275\u0275text(62, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div");
        \u0275\u0275text(64, "fuseScrollbar: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "td");
        \u0275\u0275text(66, " Whether to enable or disable the custom scrollbars. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "td")(68, "code", 19);
        \u0275\u0275text(69, "''");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(70, "tr")(71, "td", 18)(72, "div");
        \u0275\u0275text(73, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "div");
        \u0275\u0275text(75, "fuseScrollbarOptions: any");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(76, "td");
        \u0275\u0275text(77, "Perfect Scrollbar options");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "td")(79, "code", 19);
        \u0275\u0275text(80);
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(81, "h2");
        \u0275\u0275text(82, "Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "p");
        \u0275\u0275text(84, " It's possible to access the methods of this directive using a ");
        \u0275\u0275elementStart(85, "em");
        \u0275\u0275text(86, "@ViewChild");
        \u0275\u0275elementEnd();
        \u0275\u0275text(87, " or ");
        \u0275\u0275elementStart(88, "em");
        \u0275\u0275text(89, "@ViewChildren");
        \u0275\u0275elementEnd();
        \u0275\u0275text(90, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "textarea", 16);
        \u0275\u0275text(92, "            <!-- Content #1 with custom scrollbar -->\n            <div fuseScrollbar>\n                A very long content to add scrollbars.\n            </div>\n\n            <!-- Content #2 with custom scrollbar -->\n            <div fuseScrollbar>\n                Another long content to add scrollbars.\n            </div>\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "textarea", 15);
        \u0275\u0275text(94, "            import { FuseScrollbarDirective } from '@fuse/directives/scrollbar/scrollbar.directive';\n\n            @ViewChildren(FuseScrollbarDirective)\n            private _fuseScrollbarDirectives: QueryList<FuseScrollbarDirective>\n\n            ngAfterViewInit(): void\n            {\n                // Iterate through the directives and update all of them\n                fuseScrollbarDirectives.forEach((fuseScrollbarDirective) => {\n                    fuseScrollbarDirective.update();\n                });\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "p");
        \u0275\u0275text(96, "Here's the list of all available methods:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 20)(98, "div", 21);
        \u0275\u0275text(99, " update(): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 22);
        \u0275\u0275text(101, "Updates the scrollbar.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 20)(103, "div", 21);
        \u0275\u0275text(104, " destroy(): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "div", 22);
        \u0275\u0275text(106, "Destroy the custom scrollbar instance.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "div", 20)(108, "div", 21);
        \u0275\u0275text(109, " geometry(prefix: string = 'scroll'): ScrollbarGeometry ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(110, "div", 22);
        \u0275\u0275text(111, " Returns the geometry of the scrollable element (scrollLeft, scrollTop, scrollHeight, scrollWidth etc.) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(112, "div", 20)(113, "div", 21);
        \u0275\u0275text(114, " position(absolute: boolean = false): ScrollbarPosition ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 22);
        \u0275\u0275text(116, " Returns the position of the scrollable element (scrollLeft, scrollTop) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(117, "div", 20)(118, "div", 21);
        \u0275\u0275text(119, " scrollTo(x: number, y?: number, speed?: number): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 22);
        \u0275\u0275text(121, "Scrolls to given position.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(122, "div", 20)(123, "div", 21);
        \u0275\u0275text(124, " scrollToX(x: number, speed?: number): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "div", 22);
        \u0275\u0275text(126, "Scrolls to given position on X axis.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(127, "div", 20)(128, "div", 21);
        \u0275\u0275text(129, " scrollToY(y: number, speed?: number): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "div", 22);
        \u0275\u0275text(131, "Scrolls to given position on Y axis.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(132, "div", 20)(133, "div", 21);
        \u0275\u0275text(134, " scrollToTop(offset: number = 0, speed?: number): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "div", 22);
        \u0275\u0275text(136, "Scrolls to top.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "div", 20)(138, "div", 21);
        \u0275\u0275text(139, " scrollToBottom(offset: number = 0, speed?: number): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "div", 22);
        \u0275\u0275text(141, "Scrolls to bottom.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "div", 20)(143, "div", 21);
        \u0275\u0275text(144, " scrollToLeft(offset: number = 0, speed?: number): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "div", 22);
        \u0275\u0275text(146, "Scrolls to left.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(147, "div", 20)(148, "div", 21);
        \u0275\u0275text(149, " scrollToRight(offset: number = 0, speed?: number): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div", 22);
        \u0275\u0275text(151, "Scrolls to right.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(152, "div", 20)(153, "div", 21);
        \u0275\u0275text(154, " scrollToElement(qs: string, offset: number = 0, ignoreVisible: boolean = false, speed?: number): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "div", 22);
        \u0275\u0275text(156, " Scrolls to found element based on the given ");
        \u0275\u0275elementStart(157, "strong");
        \u0275\u0275text(158, "QuerySelector");
        \u0275\u0275elementEnd();
        \u0275\u0275text(159, ". If ");
        \u0275\u0275elementStart(160, "code");
        \u0275\u0275text(161, "ignoreVisible");
        \u0275\u0275elementEnd();
        \u0275\u0275text(162, " is ");
        \u0275\u0275elementStart(163, "strong");
        \u0275\u0275text(164, "true");
        \u0275\u0275elementEnd();
        \u0275\u0275text(165, " then scroll won't be triggered if the element is already inside the current viewport. ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(61);
        \u0275\u0275textInterpolate("{}");
      }
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton, FuseHighlightComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrollbarComponent, { className: "ScrollbarComponent", filePath: "src/app/modules/admin/ui/fuse-components/directives/scrollbar/scrollbar.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/fuse-components/libraries/mock-api/mock-api.component.ts
var MockApiComponent = class _MockApiComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function MockApiComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MockApiComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MockApiComponent, selectors: [["mock-api"]], decls: 329, vars: 9, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], [3, "appearance", "type"], [1, "bg-card", "mt-4", "rounded", "shadow"], [1, "text-secondary", "border-b", "px-6", "py-3", "font-mono"], [1, "p-6"], [1, "bg-card", "mb-4", "mt-4", "rounded", "shadow"], ["href", "https://en.wikipedia.org/wiki/List_of_HTTP_status_codes", "rel", "noreferrer", "target", "_blank"], ["fuse-highlight", "", "lang", "typescript"], [1, "text-secondary", "bg-card", "mt-6", "rounded", "p-6", "font-mono", "shadow"]], template: function MockApiComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Libraries");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Mock API ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function MockApiComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a helper library developed specifically for Fuse to mock API endpoints and provide data to your app without having to create an actual backend application. This way, you can focus on your frontend app and once you finish with the frontend, you can create your backend application to provide real API endpoints with real data. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, " This not only makes you progress faster and put together your app very quickly but you will also know exactly what you will be needing from your API. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "p");
        \u0275\u0275text(28, " While ");
        \u0275\u0275elementStart(29, "strong");
        \u0275\u0275text(30, "MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " is not suitable for every use case or for every project, there are some cases that using it would make your life easier. These cases are but not limited to: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "ul")(33, "li");
        \u0275\u0275text(34, "If you want to focus on the frontend first");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "li");
        \u0275\u0275text(36, " If you want to create a mockup of your idea to see if it's going to work or not ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "li");
        \u0275\u0275text(38, " If you want to create a small side project for yourself or for your colleagues/company ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "li");
        \u0275\u0275text(40, " If you need to present your idea to your client or to your boss without spending many hours and resources ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "fuse-alert", 14);
        \u0275\u0275text(42, " MockAPI is NOT a database or a backend replacement! It works on memory. As soon as you reload your app, all the changes you have made using Mock API endpoints will go away and replaced with defaults. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "h2");
        \u0275\u0275text(44, "How it works?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p")(46, "strong");
        \u0275\u0275text(47, "MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " module provides an ");
        \u0275\u0275elementStart(49, "em");
        \u0275\u0275text(50, "HttpInterceptor");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, " which intercepts all outgoing http requests to return a mock response based on user provided callback functions. While it intercepts all requests, if the ");
        \u0275\u0275elementStart(52, "strong");
        \u0275\u0275text(53, "MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, " module cannot find a callback function for the request type and url, it will let the request to pass through. This way, you can use the ");
        \u0275\u0275elementStart(55, "strong");
        \u0275\u0275text(56, "MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " along with your real API endpoints. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "h2");
        \u0275\u0275text(59, "FuseMockApiService");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "p");
        \u0275\u0275text(61, " The ");
        \u0275\u0275elementStart(62, "code");
        \u0275\u0275text(63, "FuseMockApiService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(64, " is the core of the ");
        \u0275\u0275elementStart(65, "em");
        \u0275\u0275text(66, "MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " module. This singleton service is used to register API endpoints and callbacks. This is the only thing you will need to mock API endpoints. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "h3");
        \u0275\u0275text(69, "Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "p");
        \u0275\u0275text(71, " All methods return an instance of ");
        \u0275\u0275elementStart(72, "code");
        \u0275\u0275text(73, "FuseMockApiHandler");
        \u0275\u0275elementEnd();
        \u0275\u0275text(74, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 15)(76, "div", 16);
        \u0275\u0275text(77, " .onGet(url: string, delay?: number): FuseMockApiHandler ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 17);
        \u0275\u0275text(79, " Registers a url for ");
        \u0275\u0275elementStart(80, "em");
        \u0275\u0275text(81, "GET");
        \u0275\u0275elementEnd();
        \u0275\u0275text(82, " requests. ");
        \u0275\u0275elementStart(83, "em");
        \u0275\u0275text(84, "Delay (milliseconds)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(85, " can be set to delay the response. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div", 15)(87, "div", 16);
        \u0275\u0275text(88, " .onPatch(url: string, delay?: number): FuseMockApiHandler ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 17);
        \u0275\u0275text(90, " Registers a url for ");
        \u0275\u0275elementStart(91, "em");
        \u0275\u0275text(92, "PATCH");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, " requests. ");
        \u0275\u0275elementStart(94, "em");
        \u0275\u0275text(95, "Delay (milliseconds)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, " can be set to delay the response. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "div", 15)(98, "div", 16);
        \u0275\u0275text(99, " .onPost(url: string, delay?: number): FuseMockApiHandler ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 17);
        \u0275\u0275text(101, " Registers a url for ");
        \u0275\u0275elementStart(102, "em");
        \u0275\u0275text(103, "POST");
        \u0275\u0275elementEnd();
        \u0275\u0275text(104, " requests. ");
        \u0275\u0275elementStart(105, "em");
        \u0275\u0275text(106, "Delay (milliseconds)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(107, " can be set to delay the response. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div", 15)(109, "div", 16);
        \u0275\u0275text(110, " .onPut(url: string, delay?: number): FuseMockApiHandler ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 17);
        \u0275\u0275text(112, " Registers a url for ");
        \u0275\u0275elementStart(113, "em");
        \u0275\u0275text(114, "PUT");
        \u0275\u0275elementEnd();
        \u0275\u0275text(115, " requests. ");
        \u0275\u0275elementStart(116, "em");
        \u0275\u0275text(117, "Delay (milliseconds)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(118, " can be set to delay the response. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "div", 15)(120, "div", 16);
        \u0275\u0275text(121, " .onDelete(url: string, delay?: number): FuseMockApiHandler ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 17);
        \u0275\u0275text(123, " Registers a url for ");
        \u0275\u0275elementStart(124, "em");
        \u0275\u0275text(125, "DELETE");
        \u0275\u0275elementEnd();
        \u0275\u0275text(126, " requests. ");
        \u0275\u0275elementStart(127, "em");
        \u0275\u0275text(128, "Delay (milliseconds)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(129, " can be set to delay the response. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "h3");
        \u0275\u0275text(131, "FuseMockApiHandler");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "p");
        \u0275\u0275text(133, " This is the return type of all methods from the service. This class instance is not directly accessible. It can only be accessed through the ");
        \u0275\u0275elementStart(134, "code");
        \u0275\u0275text(135, "FuseMockApiService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(136, " allowing method chaining. It has 2 methods: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "div", 18)(138, "div", 16);
        \u0275\u0275text(139, " .reply(callback: FuseMockApiReplyCallback): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "div", 16);
        \u0275\u0275text(141, " .replyCount(count: number): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(142, "div", 17)(143, "p");
        \u0275\u0275text(144, " These methods can be used to register the callback function for the request. The ");
        \u0275\u0275elementStart(145, "em");
        \u0275\u0275text(146, "callback");
        \u0275\u0275elementEnd();
        \u0275\u0275text(147, " has an access to the outgoing ");
        \u0275\u0275elementStart(148, "em");
        \u0275\u0275text(149, "HttpRequest");
        \u0275\u0275elementEnd();
        \u0275\u0275text(150, " which can be used to access anything from the request such as form data and headers. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "p");
        \u0275\u0275text(152, " You can limit the reply by chaining the ");
        \u0275\u0275elementStart(153, "code");
        \u0275\u0275text(154, ".replyCount");
        \u0275\u0275elementEnd();
        \u0275\u0275text(155, ` and providing the number of times this request should be handled. After the limit has reached, the request handler will throw an error and won't let the request to pass through. It can be useful for creating one-time-use endpoints to test "Reset Password" links or testing an unreachable API endpoints and etc. `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "p");
        \u0275\u0275text(157, " The callbacks must return either an array ");
        \u0275\u0275elementStart(158, "code");
        \u0275\u0275text(159, "[number, any | string]");
        \u0275\u0275elementEnd();
        \u0275\u0275text(160, " or an observable that returns the said array. The ");
        \u0275\u0275elementStart(161, "code");
        \u0275\u0275text(162, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275text(163, " represents the ");
        \u0275\u0275elementStart(164, "a", 19);
        \u0275\u0275text(165, "HTTP status code ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(166, " of the response while the ");
        \u0275\u0275elementStart(167, "code");
        \u0275\u0275text(168, "any | string");
        \u0275\u0275elementEnd();
        \u0275\u0275text(169, " represents the actual response. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(170, "h3");
        \u0275\u0275text(171, "Basic usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "textarea", 20);
        \u0275\u0275text(173, "            this.fuseMockApiService\n                .onPut('api/navigation')\n                .reply(({request: HttpRequest<any>}) => {\n\n                    // Get the body from the request\n                    const body = request.body;\n\n                    // Do something with your data\n\n                    // Return a success code along with some data\n                    return [200, { newNavigation }];\n            })\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "textarea", 20);
        \u0275\u0275text(175, "            this.fuseMockApiService\n                .onGet('api/navigation')\n                .reply(() => {\n\n                    // Do something with your data\n\n                    // Return an observable with success code and data\n                    return of(someFunctionToCall()).pipe(map((response) => {\n\n                        // Do some stuff with the response from 'someFunctionToCall()'\n\n                        // Return a success code along with some data\n                        return [200, { newNavigation }];\n                    });\n            });\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "h2");
        \u0275\u0275text(177, "Step by step guide to start using FuseMockApi");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "p");
        \u0275\u0275text(179, " It's pretty easy and straightforward to setup the ");
        \u0275\u0275elementStart(180, "strong");
        \u0275\u0275text(181, "MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(182, " module for mocking API endpoints and their responses. Once you understand the underlying mechanic, you will be able to mock API endpoints in no time. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "fuse-alert", 14);
        \u0275\u0275text(184, " Please keep in mind that the following step-by-step guide assumes you are doing everything from scratch for the ");
        \u0275\u0275elementStart(185, "em");
        \u0275\u0275text(186, "MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(187, " like creating directories, adding files, exporting via barrels etc. Majority of these already setup in both Demo and Starter apps for you so it's a bit easier to start working with the ");
        \u0275\u0275elementStart(188, "em");
        \u0275\u0275text(189, "MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(190, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "h3");
        \u0275\u0275text(192, "1. Prepare the files");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "p");
        \u0275\u0275text(194, " Choose a location to store your mocks. By default the Demo app uses ");
        \u0275\u0275elementStart(195, "code");
        \u0275\u0275text(196, "src/app/mock-api/");
        \u0275\u0275elementEnd();
        \u0275\u0275text(197, " directory. You can use the same directory or choose another one. For this guide, we will assume you are going to use the default directory. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "fuse-alert", 14);
        \u0275\u0275text(199, " It's important to keep all mock related files in the same directory because we will create a barrel file that exports all the mock classes and provide that to the ");
        \u0275\u0275elementStart(200, "code");
        \u0275\u0275text(201, "FuseMockApiModule");
        \u0275\u0275elementEnd();
        \u0275\u0275text(202, " so it can register and use them. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "p");
        \u0275\u0275text(204, " After choosing the location, create a sub-directory relevant to your endpoint and create 2 files in it; one for the mock class and one for the data json: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(205, "p", 21);
        \u0275\u0275text(206, " src/app/mock-api/");
        \u0275\u0275element(207, "br");
        \u0275\u0275text(208, " \xA0\u2514\u2500 navigation/");
        \u0275\u0275element(209, "br");
        \u0275\u0275text(210, " \xA0\xA0\xA0\xA0\u2514\u2500 data.ts");
        \u0275\u0275element(211, "br");
        \u0275\u0275text(212, " \xA0\xA0\xA0\xA0\u2514\u2500 api.ts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "h3");
        \u0275\u0275text(214, "2. Create the class");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "p");
        \u0275\u0275text(216, " Edit the ");
        \u0275\u0275elementStart(217, "code");
        \u0275\u0275text(218, "api.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(219, " file and inside create an injectable class. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(220, "p");
        \u0275\u0275text(221, " The ");
        \u0275\u0275elementStart(222, "code");
        \u0275\u0275text(223, "FuseMockApi");
        \u0275\u0275elementEnd();
        \u0275\u0275text(224, " requires one public method called ");
        \u0275\u0275elementStart(225, "code");
        \u0275\u0275text(226, "registerHandlers()");
        \u0275\u0275elementEnd();
        \u0275\u0275text(227, " and it must be implemented. It also needs to be called within the ");
        \u0275\u0275elementStart(228, "code");
        \u0275\u0275text(229, "constructor");
        \u0275\u0275elementEnd();
        \u0275\u0275text(230, " of your mock class: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "textarea", 20);
        \u0275\u0275text(232, "            import { Injectable } from '@angular/core';\n            import { FuseMockApiService } from '@fuse/lib/mock-api';\n\n            @Injectable({\n                providedIn: 'root'\n            })\n            export class NavigationMockApi\n            {\n                private _fuseMockApiService = inject(FuseMockApiService);\n\n                /**\n                 * Constructor\n                 */\n                constructor()\n                {\n                    // Register Mock API handlers\n                    this.registerHandlers();\n                }\n\n                /**\n                * Register Mock API handlers\n                */\n                registerHandlers(): void\n                {\n\n                }\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(233, "h3");
        \u0275\u0275text(234, "3. Create the data");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(235, "p");
        \u0275\u0275text(236, " Edit the ");
        \u0275\u0275elementStart(237, "code");
        \u0275\u0275text(238, "data.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(239, " file and add your default data as an ");
        \u0275\u0275elementStart(240, "strong");
        \u0275\u0275text(241, "exported const");
        \u0275\u0275elementEnd();
        \u0275\u0275text(242, " value. You can have more than one ");
        \u0275\u0275elementStart(243, "code");
        \u0275\u0275text(244, "const");
        \u0275\u0275elementEnd();
        \u0275\u0275text(245, " per file, just remember to export all of them: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(246, "textarea", 20);
        \u0275\u0275text(247, "            // An array of navigation items for compact layout\n            export const compactNavigation = [ ]\n\n            // An array of navigation items for default layout\n            export const defaultNavigation = [ ]\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(248, "h3");
        \u0275\u0275text(249, "3. Import the data into the Mock class");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(250, "p");
        \u0275\u0275text(251, " Return back to ");
        \u0275\u0275elementStart(252, "code");
        \u0275\u0275text(253, "api.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(254, " file, import your data and set them as class properties so they can be accessible within the class: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(255, "textarea", 20);
        \u0275\u0275text(256, "            import { Injectable } from '@angular/core';\n            import { FuseMockApiService } from '@fuse/lib/mock-api';\n            import { compactNavigation, defaultNavigation } from 'app/mock-api/navigation/data';\n\n            @Injectable({\n                providedIn: 'root'\n            })\n            export class NavigationMockApi\n            {\n                private _fuseMockApiService = inject(FuseMockApiService);\n\n                private readonly _compactNavigation: any[];\n                private readonly _defaultNavigation: any[];\n\n                /**\n                 * Constructor\n                 */\n                constructor()\n                {\n                    // Set the data\n                    this._compactNavigation = compactNavigation;\n                    this._defaultNavigation = defaultNavigation;\n\n                    // Register Mock API handlers\n                    this.registerHandlers();\n                }\n\n                /**\n                 * Register Mock API handlers\n                 */\n                registerHandlers(): void\n                {\n\n                }\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(257, "h3");
        \u0275\u0275text(258, "4. Register the endpoints and callbacks");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(259, "p");
        \u0275\u0275text(260, " Inside the ");
        \u0275\u0275elementStart(261, "code");
        \u0275\u0275text(262, "registerHandlers()");
        \u0275\u0275elementEnd();
        \u0275\u0275text(263, " method, define your endpoints and callbacks to provide data: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(264, "textarea", 20);
        \u0275\u0275text(265, "            import { Injectable } from '@angular/core';\n            import { cloneDeep } 'lodash-es';\n            import { FuseMockApiService, FuseMockApiUtils } from '@fuse/lib/mock-api';\n            import { compactNavigation, defaultNavigation } from 'app/mock-api/navigation/data';\n\n            @Injectable({\n                providedIn: 'root'\n            })\n            export class NavigationMockApi\n            {\n                ...\n\n                /**\n                 * Register Mock API handlers\n                 */\n                registerHandlers(): void\n                {\n                    // Navigation - GET\n                    this._fuseMockApiService\n                        .onGet('api/navigation')\n                        .reply(() => {\n\n                        // Clone the data to preserve the originals\n                        const compactNavigation = cloneDeep(this._compactNavigation);\n                        const defaultNavigation = cloneDeep(this._defaultNavigation);\n\n                        // Do some stuff with your data\n\n                        // Return\n                        return [200, {\n                            compact: compactNavigation,\n                            default: defaultNavigation,\n                        }];\n                    })\n\n                    // Navigation - PUT\n                    this._fuseMockApiService\n                        .onPut('api/navigation')\n                        .reply(({request}) => {\n\n                        // Save the new navigation item\n                        const newNavigationItem = cloneDeep(request.body.navigationItem);\n                        newNavigationItem.id = FuseMockApiUtils.guid();\n                        this._defaultNavigation.unshift(newNavigationItem);\n\n                        // Return\n                        return [200, newNavigationItem];\n                    });\n                }\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(266, "h3");
        \u0275\u0275text(267, "5. Create a barrel file");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(268, "p");
        \u0275\u0275text(269, " Navigate back to the root of your mock data directory, by default it's the ");
        \u0275\u0275elementStart(270, "code");
        \u0275\u0275text(271, "src/app/mock-api/");
        \u0275\u0275elementEnd();
        \u0275\u0275text(272, " directory, and create an ");
        \u0275\u0275elementStart(273, "strong");
        \u0275\u0275text(274, "index.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(275, " file. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(276, "p", 21);
        \u0275\u0275text(277, " src/app/mock-api/");
        \u0275\u0275element(278, "br");
        \u0275\u0275text(279, " \xA0\u2514\u2500 auth/");
        \u0275\u0275element(280, "br");
        \u0275\u0275text(281, " \xA0\u2514\u2500 navigation/");
        \u0275\u0275element(282, "br");
        \u0275\u0275text(283, " \xA0\u2514\u2500 user/");
        \u0275\u0275element(284, "br");
        \u0275\u0275text(285, " \xA0\u2514\u2500 ");
        \u0275\u0275elementStart(286, "strong");
        \u0275\u0275text(287, "index.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275element(288, "br");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(289, "p");
        \u0275\u0275text(290, " Edit the ");
        \u0275\u0275elementStart(291, "code");
        \u0275\u0275text(292, "index.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(293, " file to create a barrel from the services. Only import the services and not the data files, create an array from them and then export that array: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(294, "textarea", 20);
        \u0275\u0275text(295, "            import { AuthMockApi } from 'app/mock-api/auth';\n            import { NavigationMockApi } from 'app/mock-api/navigation';\n            import { UserMockApi } from 'app/mock-api/user';\n\n            export const mockApiServices = [\n                AuthMockApi,\n                NavigationMockApi,\n                UserMockApi\n            ];\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(296, "p");
        \u0275\u0275text(297, " After that, head to the ");
        \u0275\u0275elementStart(298, "code");
        \u0275\u0275text(299, "app.config.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(300, " file, provide the array of services you have exported: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(301, "textarea", 20);
        \u0275\u0275text(302, "            ...\n            import { provideFuse } from '@fuse';\n            import { mockApiServices } from 'app/mock-api';\n\n            provideFuse({\n                mockApi: {\n                    services: mockApiServices,\n                },\n            ...\n            })\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(303, "h3");
        \u0275\u0275text(304, "6. (Optional) Set a global delay");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(305, "p");
        \u0275\u0275text(306, " You can also set a global delay (ms) to all of your Mock API endpoints to simulate a slow connection, a server that's under attack or failing, some kind of service interruption and etc. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(307, "textarea", 20);
        \u0275\u0275text(308, "            ...\n            import { provideFuse } from '@fuse';\n            import { mockApiServices } from 'app/mock-api';\n\n            provideFuse({\n                mockApi: {\n                    delay   : 250,\n                    services: mockApiServices,\n                },\n            ...\n            })\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(309, "h3");
        \u0275\u0275text(310, "7. Consume the mock API endpoints");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(311, "p");
        \u0275\u0275text(312, " Now you can consume your mock API endpoints anywhere from your app using Angular's ");
        \u0275\u0275elementStart(313, "em");
        \u0275\u0275text(314, "HttpClient");
        \u0275\u0275elementEnd();
        \u0275\u0275text(315, " and the ");
        \u0275\u0275elementStart(316, "strong");
        \u0275\u0275text(317, "MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(318, " module will catch the requests. If there is a matching url and a request type, the ");
        \u0275\u0275elementStart(319, "strong");
        \u0275\u0275text(320, "MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(321, " will provide the response from the provided callback. If there isn't one, then the ");
        \u0275\u0275elementStart(322, "strong");
        \u0275\u0275text(323, "MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(324, " will let the request to pass through allowing you to use a real API endpoints along with the mocked ones. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(325, "textarea", 20);
        \u0275\u0275text(326, "            /**\n             * Get navigation\n             */\n            getNavigation(): Observable<");
        \u0275\u0275text(327, "any>");
        \u0275\u0275text(328, "\n            {\n                return this._httpClient.get<any[]>('api/navigation').pipe(\n                    tap((response: any) => {\n                        this._navigation.next(response);\n                    })\n                );\n            }\n        ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(22);
        \u0275\u0275property("appearance", "border")("type", "warning");
        \u0275\u0275advance(142);
        \u0275\u0275property("appearance", "border")("type", "info");
        \u0275\u0275advance(15);
        \u0275\u0275property("appearance", "border")("type", "info");
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatIconButton,
      FuseAlertComponent,
      FuseHighlightComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MockApiComponent, { className: "MockApiComponent", filePath: "src/app/modules/admin/ui/fuse-components/libraries/mock-api/mock-api.component.ts", lineNumber: 18 });
})();

// src/app/modules/admin/ui/fuse-components/pipes/find-by-key/find-by-key.component.ts
var FindByKeyComponent = class _FindByKeyComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function FindByKeyComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FindByKeyComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindByKeyComponent, selectors: [["find-by-key"]], decls: 78, vars: 7, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"], ["fuse-highlight", "", "lang", "html"]], template: function FindByKeyComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Pipes");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " findByKey ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function FindByKeyComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "fuseFindByKey");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a helper pipe that finds entries from an object using given key-source set. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h2");
        \u0275\u0275text(26, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "textarea", 14);
        \u0275\u0275text(28, "            import { FuseFindByKeyPipeModule } from '@fuse/pipe/find-by-key';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h2");
        \u0275\u0275text(30, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "textarea", 15);
        \u0275\u0275text(32, "            value | fuseFindByKey:key:source\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p");
        \u0275\u0275text(34, " Consider this array of objects representing the ");
        \u0275\u0275elementStart(35, "em");
        \u0275\u0275text(36, "tags");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " and ");
        \u0275\u0275elementStart(38, "em");
        \u0275\u0275text(39, "tasks");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " data stored on the backend: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "textarea", 14);
        \u0275\u0275text(42, "            const tags = [\n                {\n                    id   : 'tag-00',\n                    title: 'Api',\n                    color: 'red'\n                },\n                {\n                    id   : 'tag-01',\n                    title: 'Frontend',\n                    color: 'blue'\n                },\n                {\n                    id   : 'tag-02',\n                    title: 'Bug',\n                    color: 'green'\n                }\n            ];\n\n            const tasks = [\n                {\n                    id   : 'task-00',\n                    title: 'Company internal application v2.0.0',\n                    tags : [\n                        'tag-00',\n                        'tag-01'\n                    ]\n                },\n                {\n                    id   : 'task-01',\n                    title: 'Create the landing/marketing page and host it on the beta channel',\n                    tags : [\n                        'tag-02'\n                    ]\n                },\n                {\n                    id   : 'task-01',\n                    title: 'Move dependency system to Yarn for easier package management',\n                    tags : [\n                        'tag-00',\n                        'tag-01',\n                        'tag-02'\n                    ]\n                }\n            ]\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "p");
        \u0275\u0275text(44, " Normally, you would ");
        \u0275\u0275elementStart(45, "em");
        \u0275\u0275text(46, "join");
        \u0275\u0275elementEnd();
        \u0275\u0275text(47, " these two data together in the backend before sending it to the frontend so you can access tags of a task right from the task itself: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "textarea", 14);
        \u0275\u0275text(49, "            const tasksWithTags = [\n                {\n                    id   : 'task-00',\n                    title: 'Company internal application v2.0.0',\n                    tags : [\n                        {\n                            id   : 'tag-00',\n                            title: 'Api',\n                            color: 'red'\n                        },\n                        {\n                            id   : 'tag-01',\n                            title: 'Frontend',\n                            color: 'blue'\n                        }\n                    ]\n                },\n                {\n                    id   : 'task-01',\n                    title: 'Create the landing/marketing page and host it on the beta channel',\n                    tags : [\n                        {\n                            id   : 'tag-02',\n                            title: 'Bug',\n                            color: 'green'\n                        }\n                    ]\n                },\n                {\n                    id   : 'task-01',\n                    title: 'Move dependency system to Yarn for easier package management',\n                    tags : [\n                        {\n                            id   : 'tag-00',\n                            title: 'Api',\n                            color: 'red'\n                        },\n                        {\n                            id   : 'tag-01',\n                            title: 'Frontend',\n                            color: 'blue'\n                        },\n                        {\n                            id   : 'tag-02',\n                            title: 'Bug',\n                            color: 'green'\n                        }\n                    ]\n                }\n            ]\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "p");
        \u0275\u0275text(51, " But, let's say you cannot ");
        \u0275\u0275elementStart(52, "em");
        \u0275\u0275text(53, "join");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, " them. You have no access to the backend app or you cannot make any changes to it and you have to work with what you have. In this case, you can use the ");
        \u0275\u0275elementStart(55, "code");
        \u0275\u0275text(56, "fuseFindByKey");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " pipe to get the tags of a task without joining the two data using javascript: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "textarea", 15);
        \u0275\u0275text(59);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "p");
        \u0275\u0275text(61, " The above code will iterate through the tasks, and for each task, it will also iterate the task's tags. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p")(63, "code");
        \u0275\u0275text(64, "task.tags");
        \u0275\u0275elementEnd();
        \u0275\u0275text(65, " array normally holds the ");
        \u0275\u0275elementStart(66, "em");
        \u0275\u0275text(67, "ids");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, " of the assigned tags. But using ");
        \u0275\u0275elementStart(69, "code");
        \u0275\u0275text(70, "fuseFindByKey");
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, " pipe, we can use those ");
        \u0275\u0275elementStart(72, "em");
        \u0275\u0275text(73, "ids");
        \u0275\u0275elementEnd();
        \u0275\u0275text(74, " to extract the actual tag object from the ");
        \u0275\u0275elementStart(75, "em");
        \u0275\u0275text(76, "tags");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " array. ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(40);
        \u0275\u0275textInterpolate4(`            <!-- Iterate through the tasks -->
            <ng-container *ngFor="let task of tasks">

                <!-- Iterate through the tags of the task but rather than returning
                     the tag id, use that id to find the actual tag object from 'tags'
                     so we can access the properties like title and color of the tag -->
                <ng-container *ngFor="let tag of (task.tags | fuseFindByKey:'id':tags);">
                    <div>`, "{", "", "{", "tag.title", "}", "", "}", "</div>\n                </ng-container>\n\n            </ng-container>\n        ");
      }
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton, FuseHighlightComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindByKeyComponent, { className: "FindByKeyComponent", filePath: "src/app/modules/admin/ui/fuse-components/pipes/find-by-key/find-by-key.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/fuse-components/services/config/config.component.ts
var ConfigComponent = class _ConfigComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function ConfigComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfigComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfigComponent, selectors: [["config"]], decls: 74, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"]], template: function ConfigComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Services");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Config ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ConfigComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "FuseConfigService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a singleton service to store and access an application wide configuration object. It can be used to store any kind of data and can be accessed from anywhere within your application. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h2");
        \u0275\u0275text(26, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "textarea", 14);
        \u0275\u0275text(28, "            import { FuseConfigModule } from '@fuse/services/config';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h2");
        \u0275\u0275text(30, "Default configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, " By default, the application wide configuration is stored in ");
        \u0275\u0275elementStart(33, "code");
        \u0275\u0275text(34, "src/app.config.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " file and it includes the ");
        \u0275\u0275elementStart(36, "strong");
        \u0275\u0275text(37, "layout style");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " as well as the ");
        \u0275\u0275elementStart(39, "strong");
        \u0275\u0275text(40, "color theme");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, " configurations: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "textarea", 14);
        \u0275\u0275text(43, "            provideFuse({\n                ...\n                fuse   : {\n                    layout : 'classy',\n                    scheme : 'light',\n                    screens: {\n                        sm: '600px',\n                        md: '960px',\n                        lg: '1280px',\n                        xl: '1440px',\n                    },\n                    theme  : 'theme-default',\n                    themes : [{\n                        id  : 'theme-default',\n                        name: 'Default',\n                    },\n                    {\n                        id  : 'theme-brand',\n                        name: 'Brand',\n                    },\n                    {\n                        id  : 'theme-teal',\n                        name: 'Teal',\n                    },\n                    {\n                        id  : 'theme-rose',\n                        name: 'Rose',\n                    },\n                    {\n                        id  : 'theme-purple',\n                        name: 'Purple',\n                    },\n                    {\n                        id  : 'theme-amber',\n                        name: 'Amber',\n                    }],\n                },\n            }),\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p");
        \u0275\u0275text(45, " The default configuration is supplied to the ");
        \u0275\u0275elementStart(46, "strong");
        \u0275\u0275text(47, "FuseConfigService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " automatically: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h2");
        \u0275\u0275text(50, "Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p");
        \u0275\u0275text(52, " To set a configuration use ");
        \u0275\u0275elementStart(53, "code");
        \u0275\u0275text(54, "config");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, " setter on ");
        \u0275\u0275elementStart(56, "strong");
        \u0275\u0275text(57, "FuseConfigService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(58, ". The setter will intelligently merge the configuration by replacing only the given options if they exist while preserving others. If the supplied option does not exist on the configuration, it will be added: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "textarea", 14);
        \u0275\u0275text(60, "            import { FuseConfigService } from '@fuse/services/config';\n\n            private _fuseConfigService = inject(FuseConfigService);\n\n            /**\n             * Constructor\n             */\n            constructor()\n            {\n                this._fuseConfigService.config = {layout: 'classy'};\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "p");
        \u0275\u0275text(62, " To get the configuration use ");
        \u0275\u0275elementStart(63, "code");
        \u0275\u0275text(64, "config$");
        \u0275\u0275elementEnd();
        \u0275\u0275text(65, " getter on ");
        \u0275\u0275elementStart(66, "strong");
        \u0275\u0275text(67, "FuseConfigService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, " which returns an ");
        \u0275\u0275elementStart(69, "code");
        \u0275\u0275text(70, "Observable");
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, " of the configuration object: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "textarea", 14);
        \u0275\u0275text(73, "            import { FuseConfigService } from '@fuse/services/config';\n            import { AppConfig } from 'app/core/config/app.config';\n\n            private _fuseConfigService = inject(FuseConfigService);\n\n            config: AppConfig;\n\n            /**\n             * Constructor\n             */\n            constructor()\n            {\n                this._fuseConfigService.config$\n                    .pipe(takeUntil(this._unsubscribeAll))\n                    .subscribe((config: AppConfig) => {\n                        this.config = config;\n                    }\n            });\n        ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
      }
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton, FuseHighlightComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfigComponent, { className: "ConfigComponent", filePath: "src/app/modules/admin/ui/fuse-components/services/config/config.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/fuse-components/services/confirmation/confirmation.component.ts
var ConfirmationComponent = class _ConfirmationComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function ConfirmationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmationComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmationComponent, selectors: [["confirmation"]], decls: 180, vars: 4, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "mt-2", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], [1, "bg-card", "mt-4", "rounded", "shadow"], [1, "text-secondary", "border-b", "px-6", "py-3", "font-mono"], [1, "p-6"], ["href", "https://material.angular.io/components/dialog/api#MatDialogRef", "target", "_blank", "rel", "noreferrer"], ["fuse-highlight", "", 3, "lang"]], template: function ConfirmationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Services");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Confirmation ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ConfirmationComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "FuseConfirmationService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a singleton service for creating confirmation and information dialogs. Internally it uses MatDialog to create and show the dialog. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h2");
        \u0275\u0275text(26, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "textarea", 14);
        \u0275\u0275text(28, "            import { FuseConfirmationModule } from '@fuse/services/confirmation';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h2");
        \u0275\u0275text(30, "Confirmation Config");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, " Here is the interface for the ");
        \u0275\u0275elementStart(33, "em");
        \u0275\u0275text(34, "Confirmation configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "textarea", 14);
        \u0275\u0275text(37, "            export interface FuseConfirmationConfig\n            {\n                title?: string;\n                message?: string;\n                icon?: {\n                    show?: boolean;\n                    name?: string;\n                    color?:\n                        | 'primary'\n                        | 'accent'\n                        | 'warn'\n                        | 'basic'\n                        | 'info'\n                        | 'success'\n                        | 'warning'\n                        | 'error';\n                };\n                actions?: {\n                    confirm?: {\n                        show?: boolean;\n                        label?: string;\n                        color?:\n                            | 'primary'\n                            | 'accent'\n                            | 'warn';\n                    };\n                    cancel?: {\n                        show?: boolean;\n                        label?: string;\n                    };\n                };\n                dismissible?: boolean;\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 15)(39, "table")(40, "thead")(41, "tr")(42, "th");
        \u0275\u0275text(43, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "th");
        \u0275\u0275text(45, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "tbody")(47, "tr")(48, "td", 16)(49, "div");
        \u0275\u0275text(50, "title");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "td");
        \u0275\u0275text(52, " Title of the confirmation dialog, HTML is allowed. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "tr")(54, "td", 16)(55, "div");
        \u0275\u0275text(56, "message");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "td");
        \u0275\u0275text(58, " Message of the confirmation dialog, HTML is allowed. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "tr")(60, "td", 16)(61, "div");
        \u0275\u0275text(62, "icon.show");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "td");
        \u0275\u0275text(64, "Whether to show the icon.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "tr")(66, "td", 16)(67, "div");
        \u0275\u0275text(68, "icon.name");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "td");
        \u0275\u0275text(70, "Name of the icon.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "tr")(72, "td", 16)(73, "div");
        \u0275\u0275text(74, "icon.color");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(75, "td");
        \u0275\u0275text(76, "Color of the icon.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "tr")(78, "td", 16)(79, "div");
        \u0275\u0275text(80, "actions.confirm.show");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "td");
        \u0275\u0275text(82, "Whether to show the confirmation button.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "tr")(84, "td", 16)(85, "div");
        \u0275\u0275text(86, "actions.confirm.label");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "td");
        \u0275\u0275text(88, "Label of the confirmation button.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "tr")(90, "td", 16)(91, "div");
        \u0275\u0275text(92, "actions.confirm.color");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "td");
        \u0275\u0275text(94, "Color of the confirmation button.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "tr")(96, "td", 16)(97, "div");
        \u0275\u0275text(98, "actions.cancel.show");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "td");
        \u0275\u0275text(100, "Whether to show the cancel button.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "tr")(102, "td", 16)(103, "div");
        \u0275\u0275text(104, "actions.confirm.label");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "td");
        \u0275\u0275text(106, "Label of the cancel button.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(107, "tr")(108, "td", 16)(109, "div");
        \u0275\u0275text(110, "dismissible");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "td");
        \u0275\u0275text(112, " Sets the dismissible status of the confirmation dialog.");
        \u0275\u0275element(113, "br");
        \u0275\u0275text(114, " If ");
        \u0275\u0275elementStart(115, "code");
        \u0275\u0275text(116, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(117, ", confirmation dialog cannot be closed by clicking on backdrop or pressing Escape key. The close button on the top right corner also won't show up. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(118, "h2");
        \u0275\u0275text(119, "Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 17)(121, "div", 18);
        \u0275\u0275text(122, " open(config: FuseConfirmationConfig): MatDialogRef<FuseConfirmationDialogComponent> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 19);
        \u0275\u0275text(124, " Opens the confirmation dialog with the given configuration ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "h2");
        \u0275\u0275text(126, "MatDialogRef");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(127, "p");
        \u0275\u0275text(128, " Since ");
        \u0275\u0275elementStart(129, "code");
        \u0275\u0275text(130, "FuseConfirmationService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(131, " uses ");
        \u0275\u0275elementStart(132, "em");
        \u0275\u0275text(133, "MatDialog");
        \u0275\u0275elementEnd();
        \u0275\u0275text(134, " behind the scenes, it returns a reference to the created dialog. You can use all available methods from that reference such as ");
        \u0275\u0275elementStart(135, "code");
        \u0275\u0275text(136, "updateSize");
        \u0275\u0275elementEnd();
        \u0275\u0275text(137, " and ");
        \u0275\u0275elementStart(138, "code");
        \u0275\u0275text(139, "updatePosition");
        \u0275\u0275elementEnd();
        \u0275\u0275text(140, " to further customize the dialog. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "p");
        \u0275\u0275text(142, " See ");
        \u0275\u0275elementStart(143, "a", 20);
        \u0275\u0275text(144, " https://material.angular.io/components/dialog/api#MatDialogRef ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(145, " for the complete list of available methods. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(146, "p");
        \u0275\u0275text(147, "Using the reference, you can also access to the user input:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "textarea", 21);
        \u0275\u0275text(149, "            // Open the confirmation and save the reference\n            const dialogRef = this._fuseConfirmationService.open({...});\n\n            // Subscribe to afterClosed from the dialog reference\n            dialogRef.afterClosed().subscribe((result) => {\n                console.log(result);\n            });\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "div", 15)(151, "table")(152, "thead")(153, "tr")(154, "th");
        \u0275\u0275text(155, "Result");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "th");
        \u0275\u0275text(157, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(158, "tbody")(159, "tr")(160, "td", 16)(161, "div")(162, "code");
        \u0275\u0275text(163, "'confirmed'");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(164, "td");
        \u0275\u0275text(165, " This is the result if the user pressed the Confirm button. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(166, "tr")(167, "td", 16)(168, "div")(169, "code");
        \u0275\u0275text(170, "'cancelled'");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(171, "td");
        \u0275\u0275text(172, " This is the result if the user pressed the Cancel button. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(173, "tr")(174, "td", 16)(175, "div")(176, "code");
        \u0275\u0275text(177, "undefined");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(178, "td");
        \u0275\u0275text(179, " This is the result if the confirmation dismissed either using the close button, clicking on the backdrop or pressing the Escape key. ");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(129);
        \u0275\u0275property("lang", "ts");
      }
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton, FuseHighlightComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmationComponent, { className: "ConfirmationComponent", filePath: "src/app/modules/admin/ui/fuse-components/services/confirmation/confirmation.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/fuse-components/services/media-watcher/media-watcher.component.ts
var MediaWatcherComponent = class _MediaWatcherComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function MediaWatcherComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MediaWatcherComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MediaWatcherComponent, selectors: [["media-watcher"]], decls: 45, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"]], template: function MediaWatcherComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Services");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Media Watcher ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function MediaWatcherComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "FuseMediaWatcherService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a singleton service to watch media changes. It automatically registers the breakpoints from TailwindCSS configuration, so you can use the service without needing to configure it first. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h2");
        \u0275\u0275text(26, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "textarea", 14);
        \u0275\u0275text(28, "            import { FuseMediaWatcherModule } from '@fuse/services/media-watcher';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h2");
        \u0275\u0275text(30, "Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, " To watch changes on registered breakpoints, you can use the ");
        \u0275\u0275elementStart(33, "strong");
        \u0275\u0275text(34, "onMediaChange$");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " getter: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "textarea", 14);
        \u0275\u0275text(37, "            import { FuseMediaWatcherService } from '@fuse/services/config';\n\n            private _fuseMediaWatcherService = inject(FuseMediaWatcherService);\n\n            /**\n             * Constructor\n             */\n            constructor()\n            {\n                // Subscribe to media changes\n                this._fuseMediaWatcherService.onMediaChange$\n                    .pipe(takeUntil(this._unsubscribeAll))\n                    .subscribe(({matchingAliases}) => {\n\n                        // Check if the breakpoint is 'md' and up\n                        this.isScreenSmall = matchingAliases.includes('md');\n                    });\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39, " You can also listen for custom media queries using ");
        \u0275\u0275elementStart(40, "code");
        \u0275\u0275text(41, "onMediaQueryChange$(query: string)");
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " method: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "textarea", 14);
        \u0275\u0275text(44, "            import { FuseMediaWatcherService } from '@fuse/services/config';\n\n            private _fuseMediaWatcherService = inject(FuseMediaWatcherService);\n\n            /**\n             * Constructor\n             */\n            constructor()\n            {\n                // Subscribe to media changes\n                this._fuseMediaWatcherService.onMediaQueryChange$('(min-width: 1440px)')\n                    .pipe(takeUntil(this._unsubscribeAll))\n                    .subscribe((state) => {\n\n                        // Calculate the drawer mode\n                        this.drawerMode = state.matches ? 'side' : 'over';\n                    });\n            }\n        ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
      }
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton, FuseHighlightComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MediaWatcherComponent, { className: "MediaWatcherComponent", filePath: "src/app/modules/admin/ui/fuse-components/services/media-watcher/media-watcher.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/fuse-components/services/splash-screen/splash-screen.component.ts
var SplashScreenComponent = class _SplashScreenComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function SplashScreenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SplashScreenComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SplashScreenComponent, selectors: [["splash-screen"]], decls: 41, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "mt-4", "rounded", "shadow"], [1, "text-secondary", "border-b", "px-6", "py-3", "font-mono"], [1, "p-6"]], template: function SplashScreenComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Services");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Splash Screen ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function SplashScreenComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "strong");
        \u0275\u0275text(23, "FuseSplashScreenService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a singleton service to control the splash screen. By default, the splash screen goes away automatically as soon as Angular loads for the first time but, you can still show or hide it using the service afterwards. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "h2");
        \u0275\u0275text(26, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "textarea", 14);
        \u0275\u0275text(28, "            import { FuseSplashScreenModule } from '@fuse/services/splash-screen';\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h2");
        \u0275\u0275text(30, "Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 15)(32, "div", 16);
        \u0275\u0275text(33, " show(): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 17);
        \u0275\u0275text(35, "Shows the splash screen.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 15)(37, "div", 16);
        \u0275\u0275text(38, " hide(): void ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 17);
        \u0275\u0275text(40, "Hides the splash screen.");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
      }
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton, FuseHighlightComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SplashScreenComponent, { className: "SplashScreenComponent", filePath: "src/app/modules/admin/ui/fuse-components/services/splash-screen/splash-screen.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/fuse-components/validators/must-match/must-match.component.ts
var MustMatchComponent = class _MustMatchComponent {
  /**
   * Constructor
   */
  constructor(_fuseComponentsComponent) {
    this._fuseComponentsComponent = _fuseComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._fuseComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function MustMatchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MustMatchComponent)(\u0275\u0275directiveInject(FuseComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MustMatchComponent, selectors: [["must-match"]], decls: 82, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "mb-4", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], ["fuse-highlight", "", "lang", "html"]], template: function MustMatchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Fuse Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Validators");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " mustMatch ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function MustMatchComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " The ");
        \u0275\u0275elementStart(23, "code");
        \u0275\u0275text(24, "mustMatch");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " validator can be used to check if two different form fields has the same value. For example, a ");
        \u0275\u0275elementStart(26, "strong");
        \u0275\u0275text(27, "Confirm password");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " should have the same value with the ");
        \u0275\u0275elementStart(29, "strong");
        \u0275\u0275text(30, "Password");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " field. To validate that, the ");
        \u0275\u0275elementStart(32, "code");
        \u0275\u0275text(33, "mustMatch");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " validator can be used. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "h3");
        \u0275\u0275text(36, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "textarea", 14);
        \u0275\u0275text(38, "            FuseValidators.mustMatch(controlPath, matchingControlPath)\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "h3");
        \u0275\u0275text(40, "Parameters");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 15)(42, "table")(43, "thead")(44, "tr")(45, "th");
        \u0275\u0275text(46, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "th");
        \u0275\u0275text(48, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "tbody")(50, "tr")(51, "td", 16)(52, "div");
        \u0275\u0275text(53, "controlPath: string");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(54, "td");
        \u0275\u0275text(55, " A dot-delimited string values that define the path to the control. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "tr")(57, "td", 16)(58, "div");
        \u0275\u0275text(59, "matchingControlPath: string");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "td");
        \u0275\u0275text(61, " A dot-delimited string values that define the path to the matching control. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(62, "p");
        \u0275\u0275text(63, " Because the ");
        \u0275\u0275elementStart(64, "code");
        \u0275\u0275text(65, "mustMatch");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, " validator requires parameters, it must be used within the ");
        \u0275\u0275elementStart(67, "code");
        \u0275\u0275text(68, "validators");
        \u0275\u0275elementEnd();
        \u0275\u0275text(69, " option of the form builder: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "textarea", 14);
        \u0275\u0275text(71, "            import { FuseValidators } from '@fuse/validators';\n\n            // Create the reset password form\n            this.resetPasswordForm = this._formBuilder.group(\n                {\n                    password       : ['', Validators.required],\n                    passwordConfirm: ['', Validators.required]\n                },\n                {\n                    validators: FuseValidators.mustMatch('password', 'passwordConfirm')\n                }\n            );\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p");
        \u0275\u0275text(73, " To show an error message on the field, the ");
        \u0275\u0275elementStart(74, "code");
        \u0275\u0275text(75, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275text(76, " element can be used within the ");
        \u0275\u0275elementStart(77, "code");
        \u0275\u0275text(78, "mat-form-field");
        \u0275\u0275elementEnd();
        \u0275\u0275text(79, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "textarea", 17);
        \u0275\u0275text(81, `            <mat-error *ngIf="resetPasswordForm.get('passwordConfirm').hasError('mustMatch')">
                Passwords must match
            </mat-error>
        `);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
      }
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton, FuseHighlightComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MustMatchComponent, { className: "MustMatchComponent", filePath: "src/app/modules/admin/ui/fuse-components/validators/must-match/must-match.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/fuse-components/fuse-components.routes.ts
var fuse_components_routes_default = [
  {
    path: "",
    component: FuseComponentsComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "libraries/mock-api"
      },
      {
        path: "libraries",
        children: [
          {
            path: "mock-api",
            component: MockApiComponent
          }
        ]
      },
      {
        path: "components",
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "alert"
          },
          {
            path: "alert",
            component: AlertComponent
          },
          {
            path: "card",
            component: CardComponent
          },
          {
            path: "drawer",
            component: DrawerComponent
          },
          {
            path: "fullscreen",
            component: FullscreenComponent
          },
          {
            path: "highlight",
            component: HighlightComponent
          },
          {
            path: "loading-bar",
            component: LoadingBarComponent
          },
          {
            path: "masonry",
            component: MasonryComponent
          },
          {
            path: "navigation",
            component: NavigationComponent
          }
        ]
      },
      {
        path: "directives",
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "scrollbar"
          },
          {
            path: "scrollbar",
            component: ScrollbarComponent
          },
          {
            path: "scroll-reset",
            component: ScrollResetComponent
          }
        ]
      },
      {
        path: "services",
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "config"
          },
          {
            path: "config",
            component: ConfigComponent
          },
          {
            path: "confirmation",
            component: ConfirmationComponent
          },
          {
            path: "splash-screen",
            component: SplashScreenComponent
          },
          {
            path: "media-watcher",
            component: MediaWatcherComponent
          }
        ]
      },
      {
        path: "pipes",
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "find-by-key"
          },
          {
            path: "find-by-key",
            component: FindByKeyComponent
          }
        ]
      },
      {
        path: "validators",
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "must-match"
          },
          {
            path: "must-match",
            component: MustMatchComponent
          }
        ]
      }
    ]
  }
];
export {
  fuse_components_routes_default as default
};
//# sourceMappingURL=chunk-LSTL67DW.js.map
