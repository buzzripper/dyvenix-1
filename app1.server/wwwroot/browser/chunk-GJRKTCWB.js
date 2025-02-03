import {
  FuseHighlightComponent
} from "./chunk-6QCSQUVR.js";
import {
  FuseScrollResetDirective
} from "./chunk-GNYPANLX.js";
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule
} from "./chunk-74A4XWO4.js";
import {
  FuseVerticalNavigationComponent
} from "./chunk-MACOU75K.js";
import "./chunk-B6LWBRMU.js";
import "./chunk-BOL35CP3.js";
import {
  FuseMediaWatcherService
} from "./chunk-NDM3MP5U.js";
import "./chunk-YHH4B3V4.js";
import "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import {
  DataSource,
  SelectionModel,
  isDataSource
} from "./chunk-OF77XAQN.js";
import {
  FuseAlertComponent
} from "./chunk-OLPBZMG7.js";
import "./chunk-LWCQAMDH.js";
import {
  MatButtonModule,
  MatIconButton
} from "./chunk-JPDBWMRG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5AHQJJ5Y.js";
import {
  MatCommonModule,
  TREE_KEY_MANAGER,
  coerceObservable
} from "./chunk-F6PEOSCL.js";
import {
  Directionality
} from "./chunk-EWZPTUTP.js";
import "./chunk-HKG3E5RP.js";
import "./chunk-WH7F4HUX.js";
import {
  RouterLink,
  RouterOutlet
} from "./chunk-WTEW5YKI.js";
import "./chunk-JL6CBEU5.js";
import "./chunk-M6AYR6A2.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  InjectionToken,
  Input,
  IterableDiffers,
  NgModule,
  Output,
  Subject,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  booleanAttribute,
  combineLatest,
  concat,
  concatMap,
  distinctUntilChanged,
  inject,
  isObservable,
  map,
  merge,
  numberAttribute,
  of,
  reduce,
  setClassMetadata,
  startWith,
  switchMap,
  take,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵhostProperty,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/admin/docs/guides/guides.component.ts
var _c0 = ["matDrawer"];
var GuidesComponent = class _GuidesComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _fuseMediaWatcherService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this._unsubscribeAll = new Subject();
    this.menuData = [
      {
        id: "getting-started",
        title: "Getting started",
        type: "group",
        children: [
          {
            id: "getting-started.introduction",
            title: "Introduction",
            type: "basic",
            link: "/docs/guides/getting-started/introduction"
          },
          {
            id: "getting-started.prerequisites",
            title: "Prerequisites",
            type: "basic",
            link: "/docs/guides/getting-started/prerequisites"
          },
          {
            id: "getting-started.installation",
            title: "Installation",
            type: "basic",
            link: "/docs/guides/getting-started/installation"
          },
          {
            id: "getting-started.serving",
            title: "Serving",
            type: "basic",
            link: "/docs/guides/getting-started/serving"
          }
        ]
      },
      {
        id: "development",
        title: "Development",
        type: "group",
        children: [
          {
            id: "development.directory-structure",
            title: "Directory structure",
            type: "basic",
            link: "/docs/guides/development/directory-structure"
          },
          {
            id: "development.component-structure",
            title: "Component structure",
            type: "basic",
            link: "/docs/guides/development/component-structure"
          },
          {
            id: "development.starter-kit",
            title: "Starter kit",
            type: "basic",
            link: "/docs/guides/development/starter-kit"
          },
          {
            id: "development.deployment",
            title: "Deployment",
            type: "basic",
            link: "/docs/guides/development/deployment"
          },
          {
            id: "development.updating",
            title: "Updating",
            type: "basic",
            link: "/docs/guides/development/updating"
          }
        ]
      },
      {
        id: "customization",
        title: "Customization",
        type: "group",
        children: [
          {
            id: "customization.theme-layouts",
            title: "Theme layouts",
            type: "basic",
            link: "/docs/guides/customization/theme-layouts"
          },
          {
            id: "customization.page-layouts",
            title: "Page layouts",
            type: "basic",
            link: "/docs/guides/customization/page-layouts"
          },
          {
            id: "customization.tailwindcss",
            title: "TailwindCSS",
            type: "basic",
            link: "/docs/guides/customization/tailwindcss"
          },
          {
            id: "customization.theming",
            title: "Theming",
            type: "basic",
            link: "/docs/guides/customization/theming"
          },
          {
            id: "customization.component-theming",
            title: "Component theming",
            type: "basic",
            link: "/docs/guides/customization/component-theming"
          },
          {
            id: "customization.splash-screen",
            title: "Splash screen",
            type: "basic",
            link: "/docs/guides/customization/splash-screen"
          },
          {
            id: "customization.multi-language",
            title: "Multi language",
            type: "basic",
            link: "/docs/guides/customization/multi-language"
          }
        ]
      },
      {
        id: "authentication",
        title: "Authentication",
        type: "group",
        children: [
          {
            id: "authentication.jwt",
            title: "JWT",
            type: "basic",
            link: "/docs/guides/authentication/jwt"
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
    this.\u0275fac = function GuidesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GuidesComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FuseMediaWatcherService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GuidesComponent, selectors: [["guides"]], viewQuery: function GuidesComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.matDrawer = _t.first);
      }
    }, decls: 8, vars: 8, consts: [["matDrawer", ""], [1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-hidden"], [1, "h-full", "flex-auto"], [1, "w-60", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], [3, "navigation", "inner", "mode", "name", "opened"], ["fuseScrollReset", "", 1, "flex", "flex-col"], [1, "flex-auto"]], template: function GuidesComponent_Template(rf, ctx) {
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
        \u0275\u0275property("navigation", ctx.menuData)("inner", true)("mode", "side")("name", "docs-guides-navigation")("opened", true);
      }
    }, dependencies: [
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      FuseVerticalNavigationComponent,
      FuseScrollResetDirective,
      RouterOutlet
    ], styles: ["/* src/app/modules/admin/docs/guides/guides.component.scss */\nguides fuse-vertical-navigation .fuse-vertical-navigation-wrapper {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=guides.component.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GuidesComponent, { className: "GuidesComponent", filePath: "src/app/modules/admin/docs/guides/guides.component.ts", lineNumber: 33 });
})();

// src/app/modules/admin/docs/guides/authentication/jwt/jwt.ts
var JwtComponent = class _JwtComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function JwtComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _JwtComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _JwtComponent, selectors: [["jwt"]], decls: 124, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"]], template: function JwtComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Authentication");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " JWT ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function JwtComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " Fuse provides an implementation for JWT authorization. You can immediately hook up your backend API where you generate a JWT token and send it back and start using Fuse's JWT implementation. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, " This implementation of JWT can be found within ");
        \u0275\u0275elementStart(25, "code");
        \u0275\u0275text(26, "app/core/auth/");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " directory. Here's the quick overview of provided files: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "ul")(29, "li")(30, "p")(31, "strong");
        \u0275\u0275text(32, "Guards:");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "p")(34, "em");
        \u0275\u0275text(35, "auth");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " and ");
        \u0275\u0275elementStart(37, "em");
        \u0275\u0275text(38, "noAuth");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, " guards to protect the routes. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "li")(41, "p")(42, "strong");
        \u0275\u0275text(43, "AuthInterceptor");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "p");
        \u0275\u0275text(45, " An interceptor to attach the ");
        \u0275\u0275elementStart(46, "em");
        \u0275\u0275text(47, "access token");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " to the header of the requests and catching 401 responses. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "li")(50, "p")(51, "strong");
        \u0275\u0275text(52, "AuthService");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "p");
        \u0275\u0275text(54, " A service for signing in and out as well as checking the authenticated status of the user. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "li")(56, "p")(57, "strong");
        \u0275\u0275text(58, "AuthUtils");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "p");
        \u0275\u0275text(60, "Set of utilities to decode the JWT token.");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "h2");
        \u0275\u0275text(62, "Setting up");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "h3");
        \u0275\u0275text(64, "1. Set up your backend API");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "p");
        \u0275\u0275text(66, " Before start doing anything within Fuse, prepare your backend API. You will need API endpoints for ");
        \u0275\u0275elementStart(67, "strong");
        \u0275\u0275text(68, "signing in");
        \u0275\u0275elementEnd();
        \u0275\u0275text(69, ", ");
        \u0275\u0275elementStart(70, "strong");
        \u0275\u0275text(71, "signing out");
        \u0275\u0275elementEnd();
        \u0275\u0275text(72, " and ");
        \u0275\u0275elementStart(73, "strong");
        \u0275\u0275text(74, "refreshing the token");
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, ". These will usually be provided with your choice of JWT backend implementation by default so you don't have to do too much work. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "h3");
        \u0275\u0275text(77, "2. Configure the AuthService");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "p")(79, "strong");
        \u0275\u0275text(80, "AuthService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(81, " includes methods for signing in and out as well as refreshing the token. Edit the ");
        \u0275\u0275elementStart(82, "strong");
        \u0275\u0275text(83, "AuthService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(84, " file and change the API endpoints so the requests can go through. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "p");
        \u0275\u0275text(86, " And that's pretty much it! You can now sign in, sign out and refresh the access token. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "h2");
        \u0275\u0275text(88, "A note about storing the access token");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "p");
        \u0275\u0275text(90, " Fuse stores the access token in the ");
        \u0275\u0275elementStart(91, "strong");
        \u0275\u0275text(92, "local storage");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, ". There are a lot of debates going on about whether it is safe or not to store it in the local storage. We believe it doesn't matter. Javascript always going to be executed in the browser, it doesn't matter where you store the JWT token, whether in the local storage or in the memory as a variable, it can always be accessed and read! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(94, "p");
        \u0275\u0275text(95, " The only thing you have to be careful about is to protect your app against attacks like XSS, CSRF or XSRF. Angular does an amazingly good job to protect you against these attacks by default but still, you have to be careful what to include into your app. And if you happen to have a security hole that can cause these attacks and allows attackers to run their own Javascript code on your app, local JWT token is going to be the least of your worries. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "h2");
        \u0275\u0275text(97, "Refresh token");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(98, "p")(99, "em");
        \u0275\u0275text(100, "Refresh token");
        \u0275\u0275elementEnd();
        \u0275\u0275text(101, " is another type of token that usually sent with the ");
        \u0275\u0275elementStart(102, "em");
        \u0275\u0275text(103, "access token");
        \u0275\u0275elementEnd();
        \u0275\u0275text(104, " when you first login and it allows refreshing the ");
        \u0275\u0275elementStart(105, "em");
        \u0275\u0275text(106, "access token");
        \u0275\u0275elementEnd();
        \u0275\u0275text(107, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "p");
        \u0275\u0275text(109, " We are not going to go into any details about it since you can do your own research, but the premise is, you store the ");
        \u0275\u0275elementStart(110, "em");
        \u0275\u0275text(111, "refresh token");
        \u0275\u0275elementEnd();
        \u0275\u0275text(112, " in an ");
        \u0275\u0275elementStart(113, "strong");
        \u0275\u0275text(114, "HTTPOnly");
        \u0275\u0275elementEnd();
        \u0275\u0275text(115, " cookie which will be automatically added into the header of any request and can be used to sending back a fresh ");
        \u0275\u0275elementStart(116, "em");
        \u0275\u0275text(117, "access token");
        \u0275\u0275elementEnd();
        \u0275\u0275text(118, " from your backend API if needed. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "p");
        \u0275\u0275text(120, " The ");
        \u0275\u0275elementStart(121, "em");
        \u0275\u0275text(122, "refresh token");
        \u0275\u0275elementEnd();
        \u0275\u0275text(123, " implementation needs to be done in your backend, there is nothing that can be done in Fuse or in Javascript. ");
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
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(JwtComponent, { className: "JwtComponent", filePath: "src/app/modules/admin/docs/guides/authentication/jwt/jwt.ts", lineNumber: 11 });
})();

// src/app/modules/admin/docs/guides/customization/component-theming/component-theming.ts
var ComponentThemingComponent = class _ComponentThemingComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function ComponentThemingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComponentThemingComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComponentThemingComponent, selectors: [["component-theming"]], decls: 56, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "html"]], template: function ComponentThemingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Customization");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Component Theming ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ComponentThemingComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " Normally, Angular Material requires a separate .scss file for theming and that file must be included into a mixin where the defined Angular Material themes can be applied. This approach not only forces you to create another .scss file for component theming, but it also forces you to import that file from another place just so you can use the Angular Material mixin to apply the theme. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, " This breaks the modularity because now you have a reference to your component's theming file from who knows where and you also have to remember to do all this again and again every time you want to use the theme colors from your components. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, " Fuse, on the other hand, provides a way easier method to add theming to your components: Tailwind utilities! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h3");
        \u0275\u0275text(28, "Color palette utilities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p");
        \u0275\u0275text(30, ` As mentioned before, Angular Material uses 3 main palettes to generate themes; "Primary", "Accent" and "Warn". Being able to access these palettes and use their colors with your components is a must have feature, otherwise you wouldn't be able to create components, apps or pages that "belong" to your app. `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, " All palette colors are available as Tailwind utility classes, and since these palettes are no more than Tailwind color palettes, they are processed as one by Tailwind, therefore, every single color related utility you have in Tailwind also have ");
        \u0275\u0275elementStart(33, "strong");
        \u0275\u0275text(34, "primary");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, ", ");
        \u0275\u0275elementStart(36, "strong");
        \u0275\u0275text(37, "accent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " and ");
        \u0275\u0275elementStart(39, "strong");
        \u0275\u0275text(40, "warn");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, " colors and you can use them just like any other color utility: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "textarea", 14);
        \u0275\u0275text(43, `            <!-- Default primary color as the text color -->
            <h1 class="text-primary">I'm a Title</h1>

            <!-- accent-300 as the text color -->
            <h1 class="text-accent-300">I'm a Title</h1>

            <!-- warn-800 as the text color -->
            <h1 class="text-warn-800">I'm a Title</h1>
        `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "textarea", 14);
        \u0275\u0275text(45, '            <!-- Default primary color as the bg color -->\n            <div class="bg-primary"></div>\n\n            <!-- accent-300 as the bg color -->\n            <div class="bg-accent-300"></div>\n\n            <!-- warn-800 as the bg color -->\n            <div class="bg-warn-800"></div>\n        ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "textarea", 14);
        \u0275\u0275text(47, '            <!-- primary-600 as the bg and the contrasting color as the text color -->\n            <div class="bg-primary-600 text-on-primary-600"></div>\n\n            <!-- accent-300 as the bg and the contrasting color as the text color -->\n            <div class="bg-accent-300 text-on-accent-300"></div>\n\n            <!-- warn-800 as the bg and the contrasting color as the text color -->\n            <div class="bg-warn-800 text-on-warn-800"></div>\n        ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "textarea", 14);
        \u0275\u0275text(49, '            <!-- Some more examples -->\n            <div class="text-primary bg-primary-100 border-accent ring-warn-400 ..."></div>\n\n            <!-- Some more examples -->\n            <div class="text-primary text-opacity-50"></div>\n\n            <!-- Some more examples -->\n            <div class="bg-accent-900 bg-opacity-5"></div>\n        ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "h3");
        \u0275\u0275text(51, "Other color utilities");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "p");
        \u0275\u0275text(53, ` There are also other color utilities to quickly set the background or the text color of an element. These special utilities have different values on different schemes. For example, "bg-card" will have different colors depending on the selected scheme so you don't have to set the background color explicitly for "Dark" themes. `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "textarea", 14);
        \u0275\u0275text(55, "            <!-- Default text color -->\n            .text-default\n\n            <!-- Secondary text color -->\n            .text-secondary\n\n            <!-- Hint text color -->\n            .text-hint\n\n            <!-- Disabled text color -->\n            .text-disabled\n\n            <!-- Default border color -->\n            .divider\n\n            <!-- Card background color -->\n            .bg-card\n\n            <!-- Faded background color for hovered states -->\n            .bg-hover\n\n            <!-- Default background color -->\n            .bg-default\n\n            <!-- Default dialog background color -->\n            .bg-dialog'\n\n            <!-- Default background color as the ring color -->\n            .ring-bg-default\n\n            <!-- Default card background color as the ring color -->\n            .ring-bg-card\n        ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComponentThemingComponent, { className: "ComponentThemingComponent", filePath: "src/app/modules/admin/docs/guides/customization/component-theming/component-theming.ts", lineNumber: 12 });
})();

// src/app/modules/admin/docs/guides/customization/multi-language/multi-language.ts
var MultiLanguageCustomizationComponent = class _MultiLanguageCustomizationComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function MultiLanguageCustomizationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MultiLanguageCustomizationComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MultiLanguageCustomizationComponent, selectors: [["multi-language"]], decls: 95, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"]], template: function MultiLanguageCustomizationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Customization");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Multi Language ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function MultiLanguageCustomizationComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " Fuse uses ");
        \u0275\u0275elementStart(23, "strong");
        \u0275\u0275text(24, "Transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " library for the multi language support. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "h2");
        \u0275\u0275text(27, "Official documentation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, " You can access the official documentation of ");
        \u0275\u0275elementStart(30, "strong");
        \u0275\u0275text(31, "Transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, " over here: https://ngneat.github.io/transloco/docs/installation ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "p");
        \u0275\u0275text(34, " Other than the initial setup, Fuse doesn't introduce anything to ");
        \u0275\u0275elementStart(35, "strong");
        \u0275\u0275text(36, "Transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " or change any of its functionality. You can follow the official documentation to get started. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "h2");
        \u0275\u0275text(39, "Translating the navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "p");
        \u0275\u0275text(41, " Since ");
        \u0275\u0275elementStart(42, "code");
        \u0275\u0275text(43, "FuseNavigation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, " supports runtime data swapping, you can replace the navigation data either partially or completely when the language changes. The ");
        \u0275\u0275elementStart(45, "strong");
        \u0275\u0275text(46, "LanguageComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(47, " is a suitable place to do this and it's located at ");
        \u0275\u0275elementStart(48, "code");
        \u0275\u0275text(49, "src/app/layout/common/languages");
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "h2");
        \u0275\u0275text(52, "Removing Transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p");
        \u0275\u0275text(54, " If you don't need multi language support in your project, you may remove the ");
        \u0275\u0275elementStart(55, "strong");
        \u0275\u0275text(56, "Transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " support. Here's a step by step guide to remove the ");
        \u0275\u0275elementStart(58, "strong");
        \u0275\u0275text(59, "Transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " from Fuse: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "ol")(62, "li");
        \u0275\u0275text(63, " Navigate to ");
        \u0275\u0275elementStart(64, "code");
        \u0275\u0275text(65, "src/app.config.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, " file and remove the lines marked with the comment ");
        \u0275\u0275elementStart(67, "code");
        \u0275\u0275text(68, "// Transloco Config");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "li");
        \u0275\u0275text(70, "Remove the ");
        \u0275\u0275elementStart(71, "code");
        \u0275\u0275text(72, "src/app/core/transloco");
        \u0275\u0275elementEnd();
        \u0275\u0275text(73, " directory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "li");
        \u0275\u0275text(75, " Do a project wide search for ");
        \u0275\u0275elementStart(76, "code");
        \u0275\u0275text(77, "<languages></languages>");
        \u0275\u0275elementEnd();
        \u0275\u0275text(78, " and remove all instances ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "li");
        \u0275\u0275text(80, " Remove the ");
        \u0275\u0275elementStart(81, "code");
        \u0275\u0275text(82, "src/app/layout/common/languages");
        \u0275\u0275elementEnd();
        \u0275\u0275text(83, " directory ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "li");
        \u0275\u0275text(85, " Finally navigate to the ");
        \u0275\u0275elementStart(86, "code");
        \u0275\u0275text(87, "package.json");
        \u0275\u0275elementEnd();
        \u0275\u0275text(88, " file, remove the ");
        \u0275\u0275elementStart(89, "strong");
        \u0275\u0275text(90, '"@ngneat/transloco"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, " from dependencies list and run ");
        \u0275\u0275elementStart(92, "code");
        \u0275\u0275text(93, "npm install");
        \u0275\u0275elementEnd();
        \u0275\u0275text(94, " command ");
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
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MultiLanguageCustomizationComponent, { className: "MultiLanguageCustomizationComponent", filePath: "src/app/modules/admin/docs/guides/customization/multi-language/multi-language.ts", lineNumber: 11 });
})();

// src/app/modules/admin/docs/guides/customization/page-layouts/page-layouts.ts
var PageLayoutsComponent = class _PageLayoutsComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function PageLayoutsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PageLayoutsComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PageLayoutsComponent, selectors: [["page-layouts"]], decls: 33, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"]], template: function PageLayoutsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Customization");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Page Layouts ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function PageLayoutsComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " Like Theme layouts, Fuse also provides examples for variety of different page layouts. These layouts are designed for the content of the app and they provide consistency. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, " Unlike Theme layouts, ");
        \u0275\u0275elementStart(25, "em");
        \u0275\u0275text(26, "Page layouts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " are ");
        \u0275\u0275elementStart(28, "strong");
        \u0275\u0275text(29, "NOT");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " components, they are basically pre-made pages for you to reference and use it as the shell for your pages. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, " All page layouts can be found within the Demo app, you can try them over there and choose one that fits your needs. ");
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
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PageLayoutsComponent, { className: "PageLayoutsComponent", filePath: "src/app/modules/admin/docs/guides/customization/page-layouts/page-layouts.ts", lineNumber: 11 });
})();

// src/app/modules/admin/docs/guides/customization/splash-screen/splash-screen.ts
var SplashScreenCustomizationComponent = class _SplashScreenCustomizationComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function SplashScreenCustomizationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SplashScreenCustomizationComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SplashScreenCustomizationComponent, selectors: [["splash-screen"]], decls: 102, vars: 5, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], [3, "appearance", "type"], ["fuse-highlight", "", "lang", "html"]], template: function SplashScreenCustomizationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Customization");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Splash Screen ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function SplashScreenCustomizationComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " The ");
        \u0275\u0275elementStart(23, "strong");
        \u0275\u0275text(24, "splash screen");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " is the screen that shows up when your app is loading. It's ");
        \u0275\u0275elementStart(26, "strong");
        \u0275\u0275text(27, "NOT");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " just a cosmetic screen or something that you can make ");
        \u0275\u0275elementStart(29, "em");
        \u0275\u0275text(30, "faster");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, ", it simply shows up while Angular loads and hides immediately after it finishes loading. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "h2");
        \u0275\u0275text(33, "How it works?");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "p");
        \u0275\u0275text(35, " When you first arrive your app via its website address, the ");
        \u0275\u0275elementStart(36, "strong");
        \u0275\u0275text(37, "index.html");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " loads first. It has all the required scripts injected in it by the AngularCLI, so as soon as it loads, it also starts loading the required script files. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40, " After those required script files loaded, Angular starts the Bootstrapping progress and loads the first component (usually the ");
        \u0275\u0275elementStart(41, "em");
        \u0275\u0275text(42, "AppComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, "). Then ");
        \u0275\u0275elementStart(44, "em");
        \u0275\u0275text(45, "AppComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, " takes over and loads other modules and components and your app starts running. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "p");
        \u0275\u0275text(48, " While all of these happening, you will see nothing on the screen simply because the ");
        \u0275\u0275elementStart(49, "strong");
        \u0275\u0275text(50, "index.html");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, " file has nothing in it except the script injections and the entry point for your ");
        \u0275\u0275elementStart(52, "em");
        \u0275\u0275text(53, "AppComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, ". That's where the ");
        \u0275\u0275elementStart(55, "strong");
        \u0275\u0275text(56, "splash screen");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " comes into play and hides the ");
        \u0275\u0275elementStart(58, "em");
        \u0275\u0275text(59, "white screen of loading");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "h2");
        \u0275\u0275text(62, "Customizing the screen");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p");
        \u0275\u0275text(64, " Splash screen content stays in the ");
        \u0275\u0275elementStart(65, "code");
        \u0275\u0275text(66, "index.html");
        \u0275\u0275elementEnd();
        \u0275\u0275text(67, " file. The ");
        \u0275\u0275elementStart(68, "code");
        \u0275\u0275text(69, "fuse-splash-screen");
        \u0275\u0275elementEnd();
        \u0275\u0275text(70, " dummy element holds everything related to the splash screen. This element is not an actual Angular component, it's just a simple wrapper to hold everything you may want to show on the splash screen. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "p");
        \u0275\u0275text(72, " Splash screen styles are located in ");
        \u0275\u0275elementStart(73, "code");
        \u0275\u0275text(74, "public/styles/splash-screen.css");
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, " file. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "p");
        \u0275\u0275text(77, " You can change the styles to modify the look of the splash screen and put anything you want into the ");
        \u0275\u0275elementStart(78, "code");
        \u0275\u0275text(79, "fuse-splash-screen");
        \u0275\u0275elementEnd();
        \u0275\u0275text(80, " element to show on the page. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "fuse-alert", 14);
        \u0275\u0275text(82, " Please note, you cannot run Angular components in here. Basically, by the time you can run Angular components, you won't be needing the splash screen because everything would already be loaded! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "p");
        \u0275\u0275text(84, " If you don't want to show the splash screen and you are happy with the ");
        \u0275\u0275elementStart(85, "em");
        \u0275\u0275text(86, "white screen of loading");
        \u0275\u0275elementEnd();
        \u0275\u0275text(87, ", then you can simply remove the ");
        \u0275\u0275elementStart(88, "code");
        \u0275\u0275text(89, "fuse-splash-screen");
        \u0275\u0275elementEnd();
        \u0275\u0275text(90, " dummy element and its content from the ");
        \u0275\u0275elementStart(91, "strong");
        \u0275\u0275text(92, "index.html");
        \u0275\u0275elementEnd();
        \u0275\u0275text(93, " file as well as the ");
        \u0275\u0275elementStart(94, "code");
        \u0275\u0275text(95, "link");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, " element that loads the ");
        \u0275\u0275elementStart(97, "code");
        \u0275\u0275text(98, "splash-screen.css");
        \u0275\u0275elementEnd();
        \u0275\u0275text(99, " file: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "textarea", 15);
        \u0275\u0275text(101, '        ...\n\n        <!-- Splash screen styles -->\n        <link\n              href="styles/splash-screen.css"\n              rel="stylesheet">\n\n        ...\n\n        <!-- Splash screen -->\n        <fuse-splash-screen>\n            <img\n                src="images/logo/logo.svg"\n                alt="Fuse logo">\n            <div class="spinner">\n                <div class="bounce1"></div>\n                <div class="bounce2"></div>\n                <div class="bounce3"></div>\n            </div>\n        </fuse-splash-screen>\n\n        ...\n        ');
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(62);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SplashScreenCustomizationComponent, { className: "SplashScreenCustomizationComponent", filePath: "src/app/modules/admin/docs/guides/customization/splash-screen/splash-screen.ts", lineNumber: 18 });
})();

// src/app/modules/admin/docs/guides/customization/tailwindcss/tailwindcss.ts
var TailwindCSSComponent = class _TailwindCSSComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function TailwindCSSComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TailwindCSSComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TailwindCSSComponent, selectors: [["tailwindcss"]], decls: 50, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["href", "https://tailwindcss.com/", "rel", "noreferrer", "target", "_blank", 1, "link"]], template: function TailwindCSSComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Customization");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " TailwindCSS ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function TailwindCSSComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " As per the official page of Tailwind CSS, it is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, " To simply put, Tailwind provides helper classes for almost every CSS rule available. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, " Fuse includes and uses Tailwind whenever it's possible. There are no traditional styles available within the Fuse, Though there are edge cases that cannot be styled using Tailwind, 99% of the Fuse is styled using Tailwind. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h2");
        \u0275\u0275text(28, "Configuration");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p");
        \u0275\u0275text(30, " To use Tailwind, you don't need to do any setup as all Tailwind classes can be accessible from any HTML file you create by default. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, " Tailwind configuration can be found in ");
        \u0275\u0275elementStart(33, "code");
        \u0275\u0275text(34, "/src/tailwind.config.js");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " file. This file is used to configure the generated classes by Tailwind. We already configured the Tailwind using the config file to provide sensible defaults for a web app. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h2");
        \u0275\u0275text(37, "Tailwind and Fuse");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "p");
        \u0275\u0275text(39, " Fuse also uses Tailwind as its main configuration source for Angular Material theming. If you want to add/edit/remove any color or change the font families, you have to do that via the Tailwind's config file ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "h2");
        \u0275\u0275text(41, "Building Tailwind");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p");
        \u0275\u0275text(43, " Since Angular v11, Tailwind support has been added into the AngularCLI so you don't have to do anything to build Tailwind. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "h2");
        \u0275\u0275text(45, "Official docs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "p");
        \u0275\u0275text(47, " Official Tailwind CSS documentation: ");
        \u0275\u0275elementStart(48, "a", 14);
        \u0275\u0275text(49, "https://tailwindcss.com/ ");
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
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TailwindCSSComponent, { className: "TailwindCSSComponent", filePath: "src/app/modules/admin/docs/guides/customization/tailwindcss/tailwindcss.ts", lineNumber: 11 });
})();

// src/app/modules/admin/docs/guides/customization/theme-layouts/theme-layouts.ts
var _c02 = () => ["/ui/fuse-components/services/config"];
var ThemeLayoutsComponent = class _ThemeLayoutsComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function ThemeLayoutsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemeLayoutsComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemeLayoutsComponent, selectors: [["theme-layouts"]], decls: 95, vars: 7, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], [3, "appearance", "type"], [3, "routerLink"], ["fuse-highlight", "", "lang", "typescript"]], template: function ThemeLayoutsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Customization");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Theme Layouts ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ThemeLayoutsComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " As previously mentioned, Fuse comes with variety of different layouts. These layouts are on the theme level, meaning that when changed, they can completely alter the look of your app. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, " By default, layouts are applied automatically via the ");
        \u0275\u0275elementStart(25, "code");
        \u0275\u0275text(26, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, ". The default layout is set by the ");
        \u0275\u0275elementStart(28, "code");
        \u0275\u0275text(29, "app.config.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " file from ");
        \u0275\u0275elementStart(31, "strong");
        \u0275\u0275text(32, "src/app/");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " directory and it's available via ");
        \u0275\u0275elementStart(34, "code");
        \u0275\u0275text(35, "FuseConfigService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "fuse-alert", 14);
        \u0275\u0275text(38, " More detailed information about ");
        \u0275\u0275elementStart(39, "code");
        \u0275\u0275text(40, "FuseConfigService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(41, " can be found in the ");
        \u0275\u0275elementStart(42, "a", 15);
        \u0275\u0275text(43, " Fuse Components > Services > Config ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, " section of this documentation. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p");
        \u0275\u0275text(46, " After the default layout is read and set from the configuration service, ");
        \u0275\u0275elementStart(47, "code");
        \u0275\u0275text(48, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, " will also read the current route tree, walk through it starting from the root all the way to the current route and look for the ");
        \u0275\u0275elementStart(50, "strong");
        \u0275\u0275text(51, "layout");
        \u0275\u0275elementEnd();
        \u0275\u0275text(52, " key-value from the ");
        \u0275\u0275elementStart(53, "em");
        \u0275\u0275text(54, "data");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, " object. If found, ");
        \u0275\u0275elementStart(56, "code");
        \u0275\u0275text(57, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(58, " will switch to that layout. This is particularly useful if you want to have different layouts for different portions of your app. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "p");
        \u0275\u0275text(60, " Here's an example from ");
        \u0275\u0275elementStart(61, "code");
        \u0275\u0275text(62, "app.routing.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " file that loads the ");
        \u0275\u0275elementStart(64, "code");
        \u0275\u0275text(65, "EmptyLayout");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, " for ");
        \u0275\u0275elementStart(67, "b");
        \u0275\u0275text(68, "authentication");
        \u0275\u0275elementEnd();
        \u0275\u0275text(69, " pages: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "textarea", 16);
        \u0275\u0275text(71, "            // Auth routes (guest)\n            {\n                path: '',\n                canActivate: [NoAuthGuard],\n                canActivateChild: [NoAuthGuard],\n                component: LayoutComponent,\n                data: {\n                    layout: 'empty'\n                },\n                children: [\n                    {\n                        path: 'sign-in'\n                        ...\n                    },\n                ]\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "p");
        \u0275\u0275text(73, "And here's another example that loads the ");
        \u0275\u0275elementStart(74, "b");
        \u0275\u0275text(75, "classic");
        \u0275\u0275elementEnd();
        \u0275\u0275text(76, " layout:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "textarea", 16);
        \u0275\u0275text(78, "            {\n                path       : 'some-path',\n                component  : SomeComponent,\n                data: {\n                    layout: 'classic' // Load the classic layout for this route\n                }\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "h2");
        \u0275\u0275text(80, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "p");
        \u0275\u0275text(82, " The ");
        \u0275\u0275elementStart(83, "code");
        \u0275\u0275text(84, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(85, " plays an important part for managing important things such as the ");
        \u0275\u0275elementStart(86, "b");
        \u0275\u0275text(87, "current layout");
        \u0275\u0275elementEnd();
        \u0275\u0275text(88, " and the ");
        \u0275\u0275elementStart(89, "b");
        \u0275\u0275text(90, "color theme");
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, ". Because of it, removing the ");
        \u0275\u0275elementStart(92, "code");
        \u0275\u0275text(93, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(94, " and using the individual layouts by themselves is not possible. ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(18);
        \u0275\u0275property("appearance", "border")("type", "info");
        \u0275\u0275advance(5);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c02));
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatIconButton,
      FuseAlertComponent,
      RouterLink,
      FuseHighlightComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemeLayoutsComponent, { className: "ThemeLayoutsComponent", filePath: "src/app/modules/admin/docs/guides/customization/theme-layouts/theme-layouts.ts", lineNumber: 20 });
})();

// src/app/modules/admin/docs/guides/customization/theming/theming.ts
var ThemingComponent = class _ThemingComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function ThemingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ThemingComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ThemingComponent, selectors: [["theming"]], decls: 134, vars: 5, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["href", "https://material.angular.io/guide/theming-your-components", "rel", "noreferrer", "target", "_blank"], ["fuse-highlight", "", "lang", "js"], [1, "font-medium"], [3, "appearance", "type"], [1, "prose", "prose-sm", "max-w-none", "text-current"], ["href", "https://material.angular.io/guide/theming", "rel", "noreferrer", "target", "_blank"], [1, "mt-12"]], template: function ThemingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Customization");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Theming ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ThemingComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " Since Fuse uses ");
        \u0275\u0275elementStart(23, "em");
        \u0275\u0275text(24, "Angular Material");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " as its primary UI library, it also uses the ");
        \u0275\u0275elementStart(26, "a", 14);
        \u0275\u0275text(27, "Angular Material Theming ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " with a twist. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "p");
        \u0275\u0275text(30, " Rather than using Angular Material's default theming process, Fuse incorporates that into the Tailwind's build process. This way, you can configure your application using Tailwind's configuration file and things like colors, font families, breakpoints and etc. will be carried over and applied to the Angular Material components. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, " You can also create color themes using Tailwind's configuration and they will also be carried over and used for building Angular Material themes. Here's an example theme configuration from Tailwind's configuration: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "textarea", 15);
        \u0275\u0275text(34, "            // tailwind.config.js\n\n            /**\n             * Themes\n             */\n            const themes = {\n\n                // Default theme is required for theming system to work correctly\n                'default': {\n                    primary  : {\n                        ...colors.indigo,\n                        DEFAULT: colors.indigo[600]\n                    },\n                    accent   : {\n                        ...colors.slate,\n                        DEFAULT: colors.slate[800]\n                    },\n                    warn     : {\n                        ...colors.red,\n                        DEFAULT: colors.red[600]\n                    },\n                    'on-warn': {\n                        500: colors.red['50']\n                    }\n                },\n\n                // Rest of the themes will use the 'default' as the base theme\n                // and extend them with their given configuration\n                'brand'  : {\n                    primary: customPalettes.brand\n                },\n                'teal'   : {\n                    primary: {\n                        ...colors.teal,\n                        DEFAULT: colors.teal[600]\n                    }\n                },\n                'purple' : {\n                    primary: {\n                        ...colors.purple,\n                        DEFAULT: colors.purple[600]\n                    }\n                },\n                'amber'  : {\n                    primary: colors.amber\n                }\n            };\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p");
        \u0275\u0275text(36, "Here's the general structure of a theme configuration:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "textarea", 15);
        \u0275\u0275text(38, "            THEME_NAME: {\n                primary     : { ... },\n                accent      : { ... },\n                warn        : { ... },\n                'on-primary': { ... }\n                'on-accent' : { ... }\n                'on-warn'   : { ... }\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "ul")(40, "li")(41, "p", 16);
        \u0275\u0275text(42, "primary, accent, warn");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, " These are the 3 main color palettes of the theme. They ");
        \u0275\u0275elementStart(44, "strong");
        \u0275\u0275text(45, "must");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, " be a Tailwind color palette. If DEFAULT is provided, that will become the main color of that palette otherwise the 500 hue level from the same palette will be used as the DEFAULT. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "li")(48, "p", 16);
        \u0275\u0275text(49, "on-primary, on-accent, on-warn");
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, ' These are the 3 main contrasting color palettes of the theme. They can be either a complete or a partial Tailwind color palette. By default, Fuse will automatically generate contrasting colors using the colors from "Primary", "Accent" and "Warn" palettes but for some reason, if you want more control over the contrasting colors, you can use these objects to customize them. ');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "fuse-alert", 17)(52, "div", 18)(53, "p");
        \u0275\u0275text(54, " Angular Material library uses 3 main color palettes and their contrasting colors to theme their components. Here we basically moved that configuration (in a customized and simplified way) into the Tailwind. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p");
        \u0275\u0275text(56, " In order to have a complete understanding how Angular Material components are themed, you can check their official guides here: ");
        \u0275\u0275elementStart(57, "a", 19);
        \u0275\u0275text(58, "https://material.angular.io/guide/theming ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(59, "p", 20);
        \u0275\u0275text(60, " Let's break down the 'default' theme configuration. This one is required for entire theming system and Fuse to work correctly: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "textarea", 15);
        \u0275\u0275text(62, `            // tailwind.config.js

            'default': {

                // Here we define the "Primary" palette for the default theme.
                // It uses the default "indigo" color palette from Tailwind's default
                // color palettes and sets the 600 hue level as the DEFAULT color.
                // If you omit the DEFAULT, 500 hue level will become the DEFAULT.
                primary  : {
                    ...colors.indigo,
                    DEFAULT: colors.indigo[600]
                },

                // Here we define the "Accent" palette for the default theme.
                // It uses the default "slate" color palette from Tailwind's default
                // color palettes and sets the 800 hue level as the DEFAULT color.
                accent   : {
                    ...colors.slate,
                    DEFAULT: colors.slate[800]
                },

                // Here we define the "Warn" palette for the default theme.
                // It uses the default "red" color palette from Tailwind's default
                // color palettes and sets the 600 hue level as the DEFAULT color.
                warn     : {
                    ...colors.red,
                    DEFAULT: colors.red[600]
                },

                // Since we want Fuse to automatically generate contrasting colors
                // for "Primary" and "Accent" palettes, we omit "on-primary" and
                // "on-accent" objects.

                // Here we define the "on-warn" palette. As you can see, it's not a
                // complete palette but a partial one. Fuse will actually automatically
                // generate the contrasting colors for "Warn" palette as well but it will
                // also merge the below configuration so the contrasting color for
                // red.500 will be red.50 from the same palette.
                'on-warn': {
                    500: colors.red['50']
                }
            }
        `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p", 20);
        \u0275\u0275text(64, " Let's break down the rest of the theme configuration: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "textarea", 15);
        \u0275\u0275text(66, `            // tailwind.config.js

            // All themes will inherit the configuration from the "default" theme so you
            // can only change the palettes you want to change. Rest will be the same as
            // the "default" palette.

            // Here we have a theme called "brand". This theme uses a custom Tailwind
            // color palette called "brand". You can either manually create custom color
            // palettes or use our custom helper method to generate them from a single
            // color.
            'brand'  : {
                primary: customPalettes.brand
            },

            // Here we have a custom theme called "teal". This one only defines the
            // "Primary" palette and uses the "Teal" palette from the default Tailwind
            // palettes.
            'teal'   : {
                primary: {
                    ...colors.teal,
                    DEFAULT: colors.teal[600]
                }
            },

            // Here we have a custom theme called "purple". This one only defines the
            // "Primary" palette and uses the "Purple" palette from the default Tailwind
            // palettes.
            'purple' : {
                primary: {
                    ...colors.purple,
                    DEFAULT: colors.purple[600]
                }
            },

            // Here we have a custom theme called "amber". This one only defines the
            // "Primary" palette and uses the "Amber" palette from the default Tailwind
            // palettes.
            'amber'  : {
                primary: colors.amber
            }
        `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "h2");
        \u0275\u0275text(68, "Color palettes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "p");
        \u0275\u0275text(70, " By default, Tailwind provides lots of color palettes so you can always use them to create themes. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "p");
        \u0275\u0275text(72, " If you have a different color that you want to use, like a brand color or a custom hand picked one, you must generate a Tailwind-like color palette in order to be able to generate themes with. There are couple ways of creating such palettes; ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "ol")(74, "li");
        \u0275\u0275text(75, " You can create them by hand. Though this gives you complete freedom, it is by far the hardest one especially if you don't have any experience with colors and their relations. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "li");
        \u0275\u0275text(77, " You can use online tools to generate Tailwind color palettes. They usually do a decent job for creating palettes but they could be a little off in some cases. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "li");
        \u0275\u0275text(79, " You can use our custom ");
        \u0275\u0275elementStart(80, "code");
        \u0275\u0275text(81, "generatePalette()");
        \u0275\u0275elementEnd();
        \u0275\u0275text(82, " helper method to create palettes either from a single color, or from multiple colors. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "h3")(84, "code");
        \u0275\u0275text(85, "generatePalette()");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "p");
        \u0275\u0275text(87, " This custom helper method allows you to generate Tailwind-like palettes from either a single color or multiple colors: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "textarea", 15);
        \u0275\u0275text(89, "            // tailwind.config.js\n\n            const generatePalette = require(path.resolve(__dirname, ('src/@fuse/tailwind/utils/generate-palette')));\n\n            /**\n             * Custom palettes\n             *\n             * Uses the generatePalette helper method to generate\n             * Tailwind-like color palettes automatically\n             */\n            const customPalettes = {\n                brand         : generatePalette('#F50057'),\n                myColorPalette: generatePalette({\n                    200: '#c7d2fe',\n                    500: '#6366f1',\n                    800: '#3730a3',\n                })\n            };\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "p");
        \u0275\u0275text(91, " Usually, if you are working on an app by yourself, both designing and developing it, generating a complete Tailwind-like palette from a single color is a great option. But that's not always the case and most palette generators only give you an option to generate a palette using a single color. That becomes problematic if you have more than one color because then you would have to go through the generated palette and try to fit your remaining colors into it. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "p");
        \u0275\u0275text(93, " This is exactly where the ");
        \u0275\u0275elementStart(94, "code");
        \u0275\u0275text(95, "generatePalette()");
        \u0275\u0275elementEnd();
        \u0275\u0275text(96, " method shines! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "p");
        \u0275\u0275text(98, " You can provide an object with multiple color levels and it will handle the rest for you. The best thing about the ");
        \u0275\u0275elementStart(99, "code");
        \u0275\u0275text(100, "generatePalette()");
        \u0275\u0275elementEnd();
        \u0275\u0275text(101, " method is that it will actually respect the colors you choose. It will adjust the palette to make sure all the colors you provided will fit into it seamlessly. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(102, "p");
        \u0275\u0275text(103, " Once you generate the palettes, you can use them to create color themes for your app. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "h2");
        \u0275\u0275text(105, "Setting the default theme");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "p");
        \u0275\u0275text(107, ' By default, the "default" theme will be used as the default theme for your application. If for some reason, you want to have more than one themes and choose something other than the "default", you can do so by setting the default theme via ');
        \u0275\u0275elementStart(108, "code");
        \u0275\u0275text(109, "src/app.config.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(110, " file. You can also change the theme runtime using the ");
        \u0275\u0275elementStart(111, "code");
        \u0275\u0275text(112, "FuseConfigService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(113, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "h2");
        \u0275\u0275text(115, "Schemes");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "p");
        \u0275\u0275text(117, " Every color theme you configure will automatically have 2 schemes; ");
        \u0275\u0275elementStart(118, "strong");
        \u0275\u0275text(119, "Light");
        \u0275\u0275elementEnd();
        \u0275\u0275text(120, " and ");
        \u0275\u0275elementStart(121, "strong");
        \u0275\u0275text(122, "Dark");
        \u0275\u0275elementEnd();
        \u0275\u0275text(123, '. This way you can immediately change to a "dark" mode without losing your theme or setting up a separate "dark" theme. ');
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "p");
        \u0275\u0275text(125, " You can set the default scheme via ");
        \u0275\u0275elementStart(126, "code");
        \u0275\u0275text(127, "src/app.config.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(128, " file. You can also change the scheme runtime using the ");
        \u0275\u0275elementStart(129, "code");
        \u0275\u0275text(130, "FuseConfigService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(131, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "p");
        \u0275\u0275text(133, ` While you can set the scheme to "light" or "dark" you can also set it to "auto". "auto" mode will automatically switch between the "light" and "dark" schemes depending on the user's operating system's setting. `);
        \u0275\u0275elementEnd()()();
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
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatIconButton,
      FuseHighlightComponent,
      FuseAlertComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ThemingComponent, { className: "ThemingComponent", filePath: "src/app/modules/admin/docs/guides/customization/theming/theming.ts", lineNumber: 18 });
})();

// src/app/modules/admin/docs/guides/development/component-structure/component-structure.ts
var _c03 = () => ["../../customization/theme-layouts"];
var ComponentStructureComponent = class _ComponentStructureComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function ComponentStructureComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComponentStructureComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComponentStructureComponent, selectors: [["component-structure"]], decls: 120, vars: 7, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], [3, "appearance", "type"], [1, "bg-card", "my-8", "rounded", "p-8", "shadow"], [1, "relative", "h-120", "rounded", "border-2", "border-gray-400", "p-6", "pt-12"], [1, "bg-card", "absolute", "left-0", "top-0", "-mt-px", "ml-3", "-translate-y-1/2", "px-2", "font-medium", "text-gray-500"], [1, "relative", "h-full", "w-full", "rounded", "border-2", "border-purple-400", "p-6", "pt-12"], [1, "bg-card", "absolute", "left-0", "top-0", "-mt-px", "ml-3", "-translate-y-1/2", "px-2", "font-medium", "text-purple-500"], [1, "relative", "h-full", "w-full", "rounded", "border-2", "border-green-400"], [1, "bg-card", "absolute", "left-0", "top-0", "-mt-px", "ml-3", "-translate-y-1/2", "px-2", "font-medium", "text-green-500"], [1, "flex", "h-full", "w-full"], [1, "relative", "w-1/4", "border-r-2", "border-green-400"], [1, "absolute", "left-0", "top-0", "p-3", "pl-6", "font-medium", "text-green-700"], [1, "flex", "w-3/4", "flex-col"], [1, "relative", "h-12", "w-full", "border-b-2", "border-green-400"], [1, "relative", "flex", "w-full", "flex-auto"], [1, "relative", "h-12", "w-full", "border-t-2", "border-green-400"], ["fuse-highlight", "", "lang", "typescript"], [3, "routerLink"]], template: function ComponentStructureComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Development");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Component Structure ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ComponentStructureComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "fuse-alert", 14)(22, "span");
        \u0275\u0275text(23, " Fuse uses route based component loading strategy. There are componentless and empty-path routes specifically structured to load components without hard coding them into templates. This provides great extensibility and scalability to the app and we strongly suggest you to follow the same path. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "p");
        \u0275\u0275text(25, " Here's the diagram of the Fuse's default component structure for the reference: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 15)(27, "div", 16)(28, "span", 17);
        \u0275\u0275text(29, "AppComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 18)(31, "span", 19);
        \u0275\u0275text(32, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 20)(34, "span", 21);
        \u0275\u0275text(35, "Layout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 22)(37, "div", 23)(38, "span", 24);
        \u0275\u0275text(39, "Navigation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 25)(41, "div", 26)(42, "span", 24);
        \u0275\u0275text(43, "Header");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "div", 27)(45, "span", 24);
        \u0275\u0275text(46, "<router-outlet>");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "div", 28)(48, "span", 24);
        \u0275\u0275text(49, "Footer");
        \u0275\u0275elementEnd()()()()()()()();
        \u0275\u0275elementStart(50, "h2");
        \u0275\u0275text(51, "AppComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "p");
        \u0275\u0275text(53, " This is the entry point of the application. It imports all the necessary modules in order for Fuse and your app to work. All 3rd party modules also imported and configured here. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "h2");
        \u0275\u0275text(55, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "p");
        \u0275\u0275text(57, " This component makes the layout switching easier. Fuse provides variety of different layouts like ");
        \u0275\u0275elementStart(58, "strong");
        \u0275\u0275text(59, "ClassicLayout");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " or ");
        \u0275\u0275elementStart(61, "strong");
        \u0275\u0275text(62, "EnterpriseLayout");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " and this component can load or switch those layouts at any time. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "p");
        \u0275\u0275text(65, " To understand how ");
        \u0275\u0275elementStart(66, "strong");
        \u0275\u0275text(67, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(68, " works, look at this portion of the ");
        \u0275\u0275elementStart(69, "code");
        \u0275\u0275text(70, "app.routing.ts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, " file: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "textarea", 29);
        \u0275\u0275text(73, "            // Admin routes\n            {\n                path       : '',\n                canActivate: [AuthGuard],\n                canActivateChild: [AuthGuard],\n                component  : LayoutComponent,\n                resolve    : {\n                    initialData: InitialDataResolver,\n                },\n                children   : [\n\n                    // Apps\n                    {path: 'apps', children: [\n\n                    // Dashboards\n                    {path: 'dashboard', children: [\n\n                    ...\n                ]\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "p");
        \u0275\u0275text(75, " As you can see, there is an empty-path route at the beginning of the ");
        \u0275\u0275elementStart(76, "strong");
        \u0275\u0275text(77, "Admin");
        \u0275\u0275elementEnd();
        \u0275\u0275text(78, " routes which essentially loads the ");
        \u0275\u0275elementStart(79, "code");
        \u0275\u0275text(80, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(81, " into the ");
        \u0275\u0275elementStart(82, "code");
        \u0275\u0275text(83, "<router-outlet>");
        \u0275\u0275elementEnd();
        \u0275\u0275text(84, " of the ");
        \u0275\u0275elementStart(85, "em");
        \u0275\u0275text(86, "AppComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(87, ". ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "p");
        \u0275\u0275text(89, " After that, ");
        \u0275\u0275elementStart(90, "code");
        \u0275\u0275text(91, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, " loads the selected layout. All layouts includes a ");
        \u0275\u0275elementStart(93, "code");
        \u0275\u0275text(94, "<router-outlet>");
        \u0275\u0275elementEnd();
        \u0275\u0275text(95, " in their templates which then loads the actual component that's being requested depending on the active route. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "p");
        \u0275\u0275text(97, " More detailed information about layouts can be found in the ");
        \u0275\u0275elementStart(98, "a", 30);
        \u0275\u0275text(99, "Customization > Theme layouts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(100, " section of this documentation. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "h2");
        \u0275\u0275text(102, "Layout");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "p");
        \u0275\u0275text(104, " This is the selected layout that's being loaded by the ");
        \u0275\u0275elementStart(105, "code");
        \u0275\u0275text(106, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(107, ". All layouts located at the ");
        \u0275\u0275elementStart(108, "code");
        \u0275\u0275text(109, "app/layout/layouts/");
        \u0275\u0275elementEnd();
        \u0275\u0275text(110, " directory and these layouts include common components like ");
        \u0275\u0275elementStart(111, "strong");
        \u0275\u0275text(112, "Navigation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(113, ", ");
        \u0275\u0275elementStart(114, "strong");
        \u0275\u0275text(115, "Header");
        \u0275\u0275elementEnd();
        \u0275\u0275text(116, " and ");
        \u0275\u0275elementStart(117, "strong");
        \u0275\u0275text(118, "Footer");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, ". ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(2);
        \u0275\u0275property("appearance", "border")("type", "info");
        \u0275\u0275advance(77);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c03));
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatIconButton,
      FuseAlertComponent,
      FuseHighlightComponent,
      RouterLink
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComponentStructureComponent, { className: "ComponentStructureComponent", filePath: "src/app/modules/admin/docs/guides/development/component-structure/component-structure.ts", lineNumber: 20 });
})();

// src/app/modules/admin/docs/guides/development/deployment/deployment.ts
var DeploymentComponent = class _DeploymentComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function DeploymentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeploymentComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeploymentComponent, selectors: [["deployment"]], decls: 53, vars: 5, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "bash"], [1, "mb-12"], [3, "appearance", "type"]], template: function DeploymentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Development");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Deployment ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function DeploymentComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " To deploy your application, you have to compile it, and then host the JavaScript, CSS, and HTML on a web server. Built Angular applications are very portable and can live in any environment or served by any technology, such as Node, Java, .NET, PHP, and many others. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, " To build your application for production, run the following command: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "textarea", 14);
        \u0275\u0275text(26, "            ng build\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h2");
        \u0275\u0275text(28, "Alternate command");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "textarea", 14);
        \u0275\u0275text(30, "            npm run build\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p", 15);
        \u0275\u0275text(32, "Alias for ");
        \u0275\u0275elementStart(33, "code");
        \u0275\u0275text(34, "ng build");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, ".");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "fuse-alert", 16);
        \u0275\u0275text(37, " If you are getting error messages that includes keywords like ");
        \u0275\u0275elementStart(38, "strong");
        \u0275\u0275text(39, "HEAP");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, ", ");
        \u0275\u0275elementStart(41, "strong");
        \u0275\u0275text(42, "JS stack tree");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, ", ");
        \u0275\u0275elementStart(44, "strong");
        \u0275\u0275text(45, "out of memory");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, " while trying to run ");
        \u0275\u0275elementStart(47, "code");
        \u0275\u0275text(48, "ng build --prod");
        \u0275\u0275elementEnd();
        \u0275\u0275text(49, " or ");
        \u0275\u0275elementStart(50, "code");
        \u0275\u0275text(51, "npm run build:prod");
        \u0275\u0275elementEnd();
        \u0275\u0275text(52, " commands, you may have an older Node.js version, try updating your Node.js to the latest LTS version and then try again. ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(17);
        \u0275\u0275property("appearance", "border")("type", "info");
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatIconButton,
      FuseHighlightComponent,
      FuseAlertComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeploymentComponent, { className: "DeploymentComponent", filePath: "src/app/modules/admin/docs/guides/development/deployment/deployment.ts", lineNumber: 18 });
})();

// node_modules/@angular/cdk/fesm2022/tree.mjs
var BaseTreeControl = class {
  /** Saved data node for `expandAll` action. */
  dataNodes;
  /** A selection model with multi-selection to track expansion status. */
  expansionModel = new SelectionModel(true);
  /**
   * Returns the identifier by which a dataNode should be tracked, should its
   * reference change.
   *
   * Similar to trackBy for *ngFor
   */
  trackBy;
  /** Get depth of a given data node, return the level number. This is for flat tree node. */
  getLevel;
  /**
   * Whether the data node is expandable. Returns true if expandable.
   * This is for flat tree node.
   */
  isExpandable;
  /** Gets a stream that emits whenever the given data node's children change. */
  getChildren;
  /** Toggles one single data node's expanded/collapsed state. */
  toggle(dataNode) {
    this.expansionModel.toggle(this._trackByValue(dataNode));
  }
  /** Expands one single data node. */
  expand(dataNode) {
    this.expansionModel.select(this._trackByValue(dataNode));
  }
  /** Collapses one single data node. */
  collapse(dataNode) {
    this.expansionModel.deselect(this._trackByValue(dataNode));
  }
  /** Whether a given data node is expanded or not. Returns true if the data node is expanded. */
  isExpanded(dataNode) {
    return this.expansionModel.isSelected(this._trackByValue(dataNode));
  }
  /** Toggles a subtree rooted at `node` recursively. */
  toggleDescendants(dataNode) {
    this.expansionModel.isSelected(this._trackByValue(dataNode)) ? this.collapseDescendants(dataNode) : this.expandDescendants(dataNode);
  }
  /** Collapse all dataNodes in the tree. */
  collapseAll() {
    this.expansionModel.clear();
  }
  /** Expands a subtree rooted at given data node recursively. */
  expandDescendants(dataNode) {
    let toBeProcessed = [dataNode];
    toBeProcessed.push(...this.getDescendants(dataNode));
    this.expansionModel.select(...toBeProcessed.map((value) => this._trackByValue(value)));
  }
  /** Collapses a subtree rooted at given data node recursively. */
  collapseDescendants(dataNode) {
    let toBeProcessed = [dataNode];
    toBeProcessed.push(...this.getDescendants(dataNode));
    this.expansionModel.deselect(...toBeProcessed.map((value) => this._trackByValue(value)));
  }
  _trackByValue(value) {
    return this.trackBy ? this.trackBy(value) : value;
  }
};
var FlatTreeControl = class extends BaseTreeControl {
  getLevel;
  isExpandable;
  options;
  /** Construct with flat tree data node functions getLevel and isExpandable. */
  constructor(getLevel, isExpandable, options) {
    super();
    this.getLevel = getLevel;
    this.isExpandable = isExpandable;
    this.options = options;
    if (this.options) {
      this.trackBy = this.options.trackBy;
    }
  }
  /**
   * Gets a list of the data node's subtree of descendent data nodes.
   *
   * To make this working, the `dataNodes` of the TreeControl must be flattened tree nodes
   * with correct levels.
   */
  getDescendants(dataNode) {
    const startIndex = this.dataNodes.indexOf(dataNode);
    const results = [];
    for (let i = startIndex + 1; i < this.dataNodes.length && this.getLevel(dataNode) < this.getLevel(this.dataNodes[i]); i++) {
      results.push(this.dataNodes[i]);
    }
    return results;
  }
  /**
   * Expands all data nodes in the tree.
   *
   * To make this working, the `dataNodes` variable of the TreeControl must be set to all flattened
   * data nodes of the tree.
   */
  expandAll() {
    this.expansionModel.select(...this.dataNodes.map((node) => this._trackByValue(node)));
  }
};
var CDK_TREE_NODE_OUTLET_NODE = new InjectionToken("CDK_TREE_NODE_OUTLET_NODE");
var CdkTreeNodeOutlet = class _CdkTreeNodeOutlet {
  viewContainer = inject(ViewContainerRef);
  _node = inject(CDK_TREE_NODE_OUTLET_NODE, {
    optional: true
  });
  constructor() {
  }
  static \u0275fac = function CdkTreeNodeOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodeOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodeOutlet,
    selectors: [["", "cdkTreeNodeOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeOutlet]"
    }]
  }], () => [], null);
})();
var CdkTreeNodeOutletContext = class {
  /** Data for the node. */
  $implicit;
  /** Depth of the node. */
  level;
  /** Index location of the node. */
  index;
  /** Length of the number of total dataNodes. */
  count;
  constructor(data) {
    this.$implicit = data;
  }
};
var CdkTreeNodeDef = class _CdkTreeNodeDef {
  /** @docs-private */
  template = inject(TemplateRef);
  /**
   * Function that should return true if this node template should be used for the provided node
   * data and index. If left undefined, this node will be considered the default node template to
   * use when no other when functions return true for the data.
   * For every node, there must be at least one when function that passes or an undefined to
   * default.
   */
  when;
  constructor() {
  }
  static \u0275fac = function CdkTreeNodeDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodeDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodeDef,
    selectors: [["", "cdkTreeNodeDef", ""]],
    inputs: {
      when: [0, "cdkTreeNodeDefWhen", "when"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeDef, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeDef]",
      inputs: [{
        name: "when",
        alias: "cdkTreeNodeDefWhen"
      }]
    }]
  }], () => [], null);
})();
function getTreeNoValidDataSourceError() {
  return Error(`A valid data source must be provided.`);
}
function getTreeMultipleDefaultNodeDefsError() {
  return Error(`There can only be one default row without a when predicate function.`);
}
function getTreeMissingMatchingNodeDefError() {
  return Error(`Could not find a matching node definition for the provided node data.`);
}
function getTreeControlMissingError() {
  return Error(`Could not find a tree control, levelAccessor, or childrenAccessor for the tree.`);
}
function getMultipleTreeControlsError() {
  return Error(`More than one of tree control, levelAccessor, or childrenAccessor were provided.`);
}
var CdkTree = class _CdkTree {
  _differs = inject(IterableDiffers);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality);
  /** Subject that emits when the component has been destroyed. */
  _onDestroy = new Subject();
  /** Differ used to find the changes in the data provided by the data source. */
  _dataDiffer;
  /** Stores the node definition that does not have a when predicate. */
  _defaultNodeDef;
  /** Data subscription */
  _dataSubscription;
  /** Level of nodes */
  _levels = /* @__PURE__ */ new Map();
  /** The immediate parents for a node. This is `null` if there is no parent. */
  _parents = /* @__PURE__ */ new Map();
  /**
   * Nodes grouped into each set, which is a list of nodes displayed together in the DOM.
   *
   * Lookup key is the parent of a set. Root nodes have key of null.
   *
   * Values is a 'set' of tree nodes. Each tree node maps to a treeitem element. Sets are in the
   * order that it is rendered. Each set maps directly to aria-posinset and aria-setsize attributes.
   */
  _ariaSets = /* @__PURE__ */ new Map();
  /**
   * Provides a stream containing the latest data array to render. Influenced by the tree's
   * stream of view window (what dataNodes are currently on screen).
   * Data source can be an observable of data array, or a data array to render.
   */
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  _dataSource;
  /**
   * The tree controller
   *
   * @deprecated Use one of `levelAccessor` or `childrenAccessor` instead. To be removed in a
   * future version.
   * @breaking-change 21.0.0
   */
  treeControl;
  /**
   * Given a data node, determines what tree level the node is at.
   *
   * One of levelAccessor or childrenAccessor must be specified, not both.
   * This is enforced at run-time.
   */
  levelAccessor;
  /**
   * Given a data node, determines what the children of that node are.
   *
   * One of levelAccessor or childrenAccessor must be specified, not both.
   * This is enforced at run-time.
   */
  childrenAccessor;
  /**
   * Tracking function that will be used to check the differences in data changes. Used similarly
   * to `ngFor` `trackBy` function. Optimize node operations by identifying a node based on its data
   * relative to the function to know if a node should be added/removed/moved.
   * Accepts a function that takes two parameters, `index` and `item`.
   */
  trackBy;
  /**
   * Given a data node, determines the key by which we determine whether or not this node is expanded.
   */
  expansionKey;
  // Outlets within the tree's template where the dataNodes will be inserted.
  _nodeOutlet;
  /** The tree node template for the tree */
  _nodeDefs;
  // TODO(tinayuangao): Setup a listener for scrolling, emit the calculated view to viewChange.
  //     Remove the MAX_VALUE in viewChange
  /**
   * Stream containing the latest information on what rows are being displayed on screen.
   * Can be used by the data source to as a heuristic of what data should be provided.
   */
  viewChange = new BehaviorSubject({
    start: 0,
    end: Number.MAX_VALUE
  });
  /** Keep track of which nodes are expanded. */
  _expansionModel;
  /**
   * Maintain a synchronous cache of flattened data nodes. This will only be
   * populated after initial render, and in certain cases, will be delayed due to
   * relying on Observable `getChildren` calls.
   */
  _flattenedNodes = new BehaviorSubject([]);
  /** The automatically determined node type for the tree. */
  _nodeType = new BehaviorSubject(null);
  /** The mapping between data and the node that is rendered. */
  _nodes = new BehaviorSubject(/* @__PURE__ */ new Map());
  /**
   * Synchronous cache of nodes for the `TreeKeyManager`. This is separate
   * from `_flattenedNodes` so they can be independently updated at different
   * times.
   */
  _keyManagerNodes = new BehaviorSubject([]);
  _keyManagerFactory = inject(TREE_KEY_MANAGER);
  /** The key manager for this tree. Handles focus and activation based on user keyboard input. */
  _keyManager;
  _viewInit = false;
  constructor() {
  }
  ngAfterContentInit() {
    this._initializeKeyManager();
  }
  ngAfterContentChecked() {
    this._updateDefaultNodeDefinition();
    this._subscribeToDataChanges();
  }
  ngOnDestroy() {
    this._nodeOutlet.viewContainer.clear();
    this.viewChange.complete();
    this._onDestroy.next();
    this._onDestroy.complete();
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();
      this._dataSubscription = null;
    }
    this._keyManager?.destroy();
  }
  ngOnInit() {
    this._checkTreeControlUsage();
    this._initializeDataDiffer();
  }
  ngAfterViewInit() {
    this._viewInit = true;
  }
  _updateDefaultNodeDefinition() {
    const defaultNodeDefs = this._nodeDefs.filter((def) => !def.when);
    if (defaultNodeDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMultipleDefaultNodeDefsError();
    }
    this._defaultNodeDef = defaultNodeDefs[0];
  }
  /**
   * Sets the node type for the tree, if it hasn't been set yet.
   *
   * This will be called by the first node that's rendered in order for the tree
   * to determine what data transformations are required.
   */
  _setNodeTypeIfUnset(newType) {
    const currentType = this._nodeType.value;
    if (currentType === null) {
      this._nodeType.next(newType);
    } else if ((typeof ngDevMode === "undefined" || ngDevMode) && currentType !== newType) {
      console.warn(`Tree is using conflicting node types which can cause unexpected behavior. Please use tree nodes of the same type (e.g. only flat or only nested). Current node type: "${currentType}", new node type "${newType}".`);
    }
  }
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the node outlet. Otherwise start listening for new data.
   */
  _switchDataSource(dataSource) {
    if (this._dataSource && typeof this._dataSource.disconnect === "function") {
      this.dataSource.disconnect(this);
    }
    if (this._dataSubscription) {
      this._dataSubscription.unsubscribe();
      this._dataSubscription = null;
    }
    if (!dataSource) {
      this._nodeOutlet.viewContainer.clear();
    }
    this._dataSource = dataSource;
    if (this._nodeDefs) {
      this._subscribeToDataChanges();
    }
  }
  _getExpansionModel() {
    if (!this.treeControl) {
      this._expansionModel ??= new SelectionModel(true);
      return this._expansionModel;
    }
    return this.treeControl.expansionModel;
  }
  /** Set up a subscription for the data provided by the data source. */
  _subscribeToDataChanges() {
    if (this._dataSubscription) {
      return;
    }
    let dataStream;
    if (isDataSource(this._dataSource)) {
      dataStream = this._dataSource.connect(this);
    } else if (isObservable(this._dataSource)) {
      dataStream = this._dataSource;
    } else if (Array.isArray(this._dataSource)) {
      dataStream = of(this._dataSource);
    }
    if (!dataStream) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        throw getTreeNoValidDataSourceError();
      }
      return;
    }
    this._dataSubscription = this._getRenderData(dataStream).pipe(takeUntil(this._onDestroy)).subscribe((renderingData) => {
      this._renderDataChanges(renderingData);
    });
  }
  /** Given an Observable containing a stream of the raw data, returns an Observable containing the RenderingData */
  _getRenderData(dataStream) {
    const expansionModel = this._getExpansionModel();
    return combineLatest([
      dataStream,
      this._nodeType,
      // We don't use the expansion data directly, however we add it here to essentially
      // trigger data rendering when expansion changes occur.
      expansionModel.changed.pipe(startWith(null), tap((expansionChanges) => {
        this._emitExpansionChanges(expansionChanges);
      }))
    ]).pipe(switchMap(([data, nodeType]) => {
      if (nodeType === null) {
        return of({
          renderNodes: data,
          flattenedNodes: null,
          nodeType
        });
      }
      return this._computeRenderingData(data, nodeType).pipe(map((convertedData) => __spreadProps(__spreadValues({}, convertedData), {
        nodeType
      })));
    }));
  }
  _renderDataChanges(data) {
    if (data.nodeType === null) {
      this.renderNodeChanges(data.renderNodes);
      return;
    }
    this._updateCachedData(data.flattenedNodes);
    this.renderNodeChanges(data.renderNodes);
    this._updateKeyManagerItems(data.flattenedNodes);
  }
  _emitExpansionChanges(expansionChanges) {
    if (!expansionChanges) {
      return;
    }
    const nodes = this._nodes.value;
    for (const added of expansionChanges.added) {
      const node = nodes.get(added);
      node?._emitExpansionState(true);
    }
    for (const removed of expansionChanges.removed) {
      const node = nodes.get(removed);
      node?._emitExpansionState(false);
    }
  }
  _initializeKeyManager() {
    const items = combineLatest([this._keyManagerNodes, this._nodes]).pipe(map(([keyManagerNodes, renderNodes]) => keyManagerNodes.reduce((items2, data) => {
      const node = renderNodes.get(this._getExpansionKey(data));
      if (node) {
        items2.push(node);
      }
      return items2;
    }, [])));
    const keyManagerOptions = {
      trackBy: (node) => this._getExpansionKey(node.data),
      skipPredicate: (node) => !!node.isDisabled,
      typeAheadDebounceInterval: true,
      horizontalOrientation: this._dir.value
    };
    this._keyManager = this._keyManagerFactory(items, keyManagerOptions);
  }
  _initializeDataDiffer() {
    const trackBy = this.trackBy ?? ((_index, item) => this._getExpansionKey(item));
    this._dataDiffer = this._differs.find([]).create(trackBy);
  }
  _checkTreeControlUsage() {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      let numTreeControls = 0;
      if (this.treeControl) {
        numTreeControls++;
      }
      if (this.levelAccessor) {
        numTreeControls++;
      }
      if (this.childrenAccessor) {
        numTreeControls++;
      }
      if (!numTreeControls) {
        throw getTreeControlMissingError();
      } else if (numTreeControls > 1) {
        throw getMultipleTreeControlsError();
      }
    }
  }
  /** Check for changes made in the data and render each change (node added/removed/moved). */
  renderNodeChanges(data, dataDiffer = this._dataDiffer, viewContainer = this._nodeOutlet.viewContainer, parentData) {
    const changes = dataDiffer.diff(data);
    if (!changes && !this._viewInit) {
      return;
    }
    changes?.forEachOperation((item, adjustedPreviousIndex, currentIndex) => {
      if (item.previousIndex == null) {
        this.insertNode(data[currentIndex], currentIndex, viewContainer, parentData);
      } else if (currentIndex == null) {
        viewContainer.remove(adjustedPreviousIndex);
      } else {
        const view = viewContainer.get(adjustedPreviousIndex);
        viewContainer.move(view, currentIndex);
      }
    });
    changes?.forEachIdentityChange((record) => {
      const newData = record.item;
      if (record.currentIndex != void 0) {
        const view = viewContainer.get(record.currentIndex);
        view.context.$implicit = newData;
      }
    });
    if (parentData) {
      this._changeDetectorRef.markForCheck();
    } else {
      this._changeDetectorRef.detectChanges();
    }
  }
  /**
   * Finds the matching node definition that should be used for this node data. If there is only
   * one node definition, it is returned. Otherwise, find the node definition that has a when
   * predicate that returns true with the data. If none return true, return the default node
   * definition.
   */
  _getNodeDef(data, i) {
    if (this._nodeDefs.length === 1) {
      return this._nodeDefs.first;
    }
    const nodeDef = this._nodeDefs.find((def) => def.when && def.when(i, data)) || this._defaultNodeDef;
    if (!nodeDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTreeMissingMatchingNodeDefError();
    }
    return nodeDef;
  }
  /**
   * Create the embedded view for the data node template and place it in the correct index location
   * within the data node view container.
   */
  insertNode(nodeData, index, viewContainer, parentData) {
    const levelAccessor = this._getLevelAccessor();
    const node = this._getNodeDef(nodeData, index);
    const key = this._getExpansionKey(nodeData);
    const context = new CdkTreeNodeOutletContext(nodeData);
    parentData ??= this._parents.get(key) ?? void 0;
    if (levelAccessor) {
      context.level = levelAccessor(nodeData);
    } else if (parentData !== void 0 && this._levels.has(this._getExpansionKey(parentData))) {
      context.level = this._levels.get(this._getExpansionKey(parentData)) + 1;
    } else {
      context.level = 0;
    }
    this._levels.set(key, context.level);
    const container = viewContainer ? viewContainer : this._nodeOutlet.viewContainer;
    container.createEmbeddedView(node.template, context, index);
    if (CdkTreeNode.mostRecentTreeNode) {
      CdkTreeNode.mostRecentTreeNode.data = nodeData;
    }
  }
  /** Whether the data node is expanded or collapsed. Returns true if it's expanded. */
  isExpanded(dataNode) {
    return !!(this.treeControl?.isExpanded(dataNode) || this._expansionModel?.isSelected(this._getExpansionKey(dataNode)));
  }
  /** If the data node is currently expanded, collapse it. Otherwise, expand it. */
  toggle(dataNode) {
    if (this.treeControl) {
      this.treeControl.toggle(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.toggle(this._getExpansionKey(dataNode));
    }
  }
  /** Expand the data node. If it is already expanded, does nothing. */
  expand(dataNode) {
    if (this.treeControl) {
      this.treeControl.expand(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.select(this._getExpansionKey(dataNode));
    }
  }
  /** Collapse the data node. If it is already collapsed, does nothing. */
  collapse(dataNode) {
    if (this.treeControl) {
      this.treeControl.collapse(dataNode);
    } else if (this._expansionModel) {
      this._expansionModel.deselect(this._getExpansionKey(dataNode));
    }
  }
  /**
   * If the data node is currently expanded, collapse it and all its descendants.
   * Otherwise, expand it and all its descendants.
   */
  toggleDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.toggleDescendants(dataNode);
    } else if (this._expansionModel) {
      if (this.isExpanded(dataNode)) {
        this.collapseDescendants(dataNode);
      } else {
        this.expandDescendants(dataNode);
      }
    }
  }
  /**
   * Expand the data node and all its descendants. If they are already expanded, does nothing.
   */
  expandDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.expandDescendants(dataNode);
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.select(this._getExpansionKey(dataNode));
      this._getDescendants(dataNode).pipe(take(1), takeUntil(this._onDestroy)).subscribe((children) => {
        expansionModel.select(...children.map((child) => this._getExpansionKey(child)));
      });
    }
  }
  /** Collapse the data node and all its descendants. If it is already collapsed, does nothing. */
  collapseDescendants(dataNode) {
    if (this.treeControl) {
      this.treeControl.collapseDescendants(dataNode);
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.deselect(this._getExpansionKey(dataNode));
      this._getDescendants(dataNode).pipe(take(1), takeUntil(this._onDestroy)).subscribe((children) => {
        expansionModel.deselect(...children.map((child) => this._getExpansionKey(child)));
      });
    }
  }
  /** Expands all data nodes in the tree. */
  expandAll() {
    if (this.treeControl) {
      this.treeControl.expandAll();
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.select(...this._flattenedNodes.value.map((child) => this._getExpansionKey(child)));
    }
  }
  /** Collapse all data nodes in the tree. */
  collapseAll() {
    if (this.treeControl) {
      this.treeControl.collapseAll();
    } else if (this._expansionModel) {
      const expansionModel = this._expansionModel;
      expansionModel.deselect(...this._flattenedNodes.value.map((child) => this._getExpansionKey(child)));
    }
  }
  /** Level accessor, used for compatibility between the old Tree and new Tree */
  _getLevelAccessor() {
    return this.treeControl?.getLevel?.bind(this.treeControl) ?? this.levelAccessor;
  }
  /** Children accessor, used for compatibility between the old Tree and new Tree */
  _getChildrenAccessor() {
    return this.treeControl?.getChildren?.bind(this.treeControl) ?? this.childrenAccessor;
  }
  /**
   * Gets the direct children of a node; used for compatibility between the old tree and the
   * new tree.
   */
  _getDirectChildren(dataNode) {
    const levelAccessor = this._getLevelAccessor();
    const expansionModel = this._expansionModel ?? this.treeControl?.expansionModel;
    if (!expansionModel) {
      return of([]);
    }
    const key = this._getExpansionKey(dataNode);
    const isExpanded = expansionModel.changed.pipe(switchMap((changes) => {
      if (changes.added.includes(key)) {
        return of(true);
      } else if (changes.removed.includes(key)) {
        return of(false);
      }
      return EMPTY;
    }), startWith(this.isExpanded(dataNode)));
    if (levelAccessor) {
      return combineLatest([isExpanded, this._flattenedNodes]).pipe(map(([expanded, flattenedNodes]) => {
        if (!expanded) {
          return [];
        }
        return this._findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, 1);
      }));
    }
    const childrenAccessor = this._getChildrenAccessor();
    if (childrenAccessor) {
      return coerceObservable(childrenAccessor(dataNode) ?? []);
    }
    throw getTreeControlMissingError();
  }
  /**
   * Given the list of flattened nodes, the level accessor, and the level range within
   * which to consider children, finds the children for a given node.
   *
   * For example, for direct children, `levelDelta` would be 1. For all descendants,
   * `levelDelta` would be Infinity.
   */
  _findChildrenByLevel(levelAccessor, flattenedNodes, dataNode, levelDelta) {
    const key = this._getExpansionKey(dataNode);
    const startIndex = flattenedNodes.findIndex((node) => this._getExpansionKey(node) === key);
    const dataNodeLevel = levelAccessor(dataNode);
    const expectedLevel = dataNodeLevel + levelDelta;
    const results = [];
    for (let i = startIndex + 1; i < flattenedNodes.length; i++) {
      const currentLevel = levelAccessor(flattenedNodes[i]);
      if (currentLevel <= dataNodeLevel) {
        break;
      }
      if (currentLevel <= expectedLevel) {
        results.push(flattenedNodes[i]);
      }
    }
    return results;
  }
  /**
   * Adds the specified node component to the tree's internal registry.
   *
   * This primarily facilitates keyboard navigation.
   */
  _registerNode(node) {
    this._nodes.value.set(this._getExpansionKey(node.data), node);
    this._nodes.next(this._nodes.value);
  }
  /** Removes the specified node component from the tree's internal registry. */
  _unregisterNode(node) {
    this._nodes.value.delete(this._getExpansionKey(node.data));
    this._nodes.next(this._nodes.value);
  }
  /**
   * For the given node, determine the level where this node appears in the tree.
   *
   * This is intended to be used for `aria-level` but is 0-indexed.
   */
  _getLevel(node) {
    return this._levels.get(this._getExpansionKey(node));
  }
  /**
   * For the given node, determine the size of the parent's child set.
   *
   * This is intended to be used for `aria-setsize`.
   */
  _getSetSize(dataNode) {
    const set = this._getAriaSet(dataNode);
    return set.length;
  }
  /**
   * For the given node, determine the index (starting from 1) of the node in its parent's child set.
   *
   * This is intended to be used for `aria-posinset`.
   */
  _getPositionInSet(dataNode) {
    const set = this._getAriaSet(dataNode);
    const key = this._getExpansionKey(dataNode);
    return set.findIndex((node) => this._getExpansionKey(node) === key) + 1;
  }
  /** Given a CdkTreeNode, gets the node that renders that node's parent's data. */
  _getNodeParent(node) {
    const parent = this._parents.get(this._getExpansionKey(node.data));
    return parent && this._nodes.value.get(this._getExpansionKey(parent));
  }
  /** Given a CdkTreeNode, gets the nodes that renders that node's child data. */
  _getNodeChildren(node) {
    return this._getDirectChildren(node.data).pipe(map((children) => children.reduce((nodes, child) => {
      const value = this._nodes.value.get(this._getExpansionKey(child));
      if (value) {
        nodes.push(value);
      }
      return nodes;
    }, [])));
  }
  /** `keydown` event handler; this just passes the event to the `TreeKeyManager`. */
  _sendKeydownToKeyManager(event) {
    if (event.target === this._elementRef.nativeElement) {
      this._keyManager.onKeydown(event);
    } else {
      const nodes = this._nodes.getValue();
      for (const [, node] of nodes) {
        if (event.target === node._elementRef.nativeElement) {
          this._keyManager.onKeydown(event);
          break;
        }
      }
    }
  }
  /** Gets all nested descendants of a given node. */
  _getDescendants(dataNode) {
    if (this.treeControl) {
      return of(this.treeControl.getDescendants(dataNode));
    }
    if (this.levelAccessor) {
      const results = this._findChildrenByLevel(this.levelAccessor, this._flattenedNodes.value, dataNode, Infinity);
      return of(results);
    }
    if (this.childrenAccessor) {
      return this._getAllChildrenRecursively(dataNode).pipe(reduce((allChildren, nextChildren) => {
        allChildren.push(...nextChildren);
        return allChildren;
      }, []));
    }
    throw getTreeControlMissingError();
  }
  /**
   * Gets all children and sub-children of the provided node.
   *
   * This will emit multiple times, in the order that the children will appear
   * in the tree, and can be combined with a `reduce` operator.
   */
  _getAllChildrenRecursively(dataNode) {
    if (!this.childrenAccessor) {
      return of([]);
    }
    return coerceObservable(this.childrenAccessor(dataNode)).pipe(take(1), switchMap((children) => {
      for (const child of children) {
        this._parents.set(this._getExpansionKey(child), dataNode);
      }
      return of(...children).pipe(concatMap((child) => concat(of([child]), this._getAllChildrenRecursively(child))));
    }));
  }
  _getExpansionKey(dataNode) {
    return this.expansionKey?.(dataNode) ?? dataNode;
  }
  _getAriaSet(node) {
    const key = this._getExpansionKey(node);
    const parent = this._parents.get(key);
    const parentKey = parent ? this._getExpansionKey(parent) : null;
    const set = this._ariaSets.get(parentKey);
    return set ?? [node];
  }
  /**
   * Finds the parent for the given node. If this is a root node, this
   * returns null. If we're unable to determine the parent, for example,
   * if we don't have cached node data, this returns undefined.
   */
  _findParentForNode(node, index, cachedNodes) {
    if (!cachedNodes.length) {
      return null;
    }
    const currentLevel = this._levels.get(this._getExpansionKey(node)) ?? 0;
    for (let parentIndex = index - 1; parentIndex >= 0; parentIndex--) {
      const parentNode = cachedNodes[parentIndex];
      const parentLevel = this._levels.get(this._getExpansionKey(parentNode)) ?? 0;
      if (parentLevel < currentLevel) {
        return parentNode;
      }
    }
    return null;
  }
  /**
   * Given a set of root nodes and the current node level, flattens any nested
   * nodes into a single array.
   *
   * If any nodes are not expanded, then their children will not be added into the array.
   * This will still traverse all nested children in order to build up our internal data
   * models, but will not include them in the returned array.
   */
  _flattenNestedNodesWithExpansion(nodes, level = 0) {
    const childrenAccessor = this._getChildrenAccessor();
    if (!childrenAccessor) {
      return of([...nodes]);
    }
    return of(...nodes).pipe(concatMap((node) => {
      const parentKey = this._getExpansionKey(node);
      if (!this._parents.has(parentKey)) {
        this._parents.set(parentKey, null);
      }
      this._levels.set(parentKey, level);
      const children = coerceObservable(childrenAccessor(node));
      return concat(of([node]), children.pipe(take(1), tap((childNodes) => {
        this._ariaSets.set(parentKey, [...childNodes ?? []]);
        for (const child of childNodes ?? []) {
          const childKey = this._getExpansionKey(child);
          this._parents.set(childKey, node);
          this._levels.set(childKey, level + 1);
        }
      }), switchMap((childNodes) => {
        if (!childNodes) {
          return of([]);
        }
        return this._flattenNestedNodesWithExpansion(childNodes, level + 1).pipe(map((nestedNodes) => this.isExpanded(node) ? nestedNodes : []));
      })));
    }), reduce((results, children) => {
      results.push(...children);
      return results;
    }, []));
  }
  /**
   * Converts children for certain tree configurations.
   *
   * This also computes parent, level, and group data.
   */
  _computeRenderingData(nodes, nodeType) {
    if (this.childrenAccessor && nodeType === "flat") {
      this._ariaSets.set(null, [...nodes]);
      return this._flattenNestedNodesWithExpansion(nodes).pipe(map((flattenedNodes) => ({
        renderNodes: flattenedNodes,
        flattenedNodes
      })));
    } else if (this.levelAccessor && nodeType === "nested") {
      const levelAccessor = this.levelAccessor;
      return of(nodes.filter((node) => levelAccessor(node) === 0)).pipe(map((rootNodes) => ({
        renderNodes: rootNodes,
        flattenedNodes: nodes
      })), tap(({
        flattenedNodes
      }) => {
        this._calculateParents(flattenedNodes);
      }));
    } else if (nodeType === "flat") {
      return of({
        renderNodes: nodes,
        flattenedNodes: nodes
      }).pipe(tap(({
        flattenedNodes
      }) => {
        this._calculateParents(flattenedNodes);
      }));
    } else {
      this._ariaSets.set(null, [...nodes]);
      return this._flattenNestedNodesWithExpansion(nodes).pipe(map((flattenedNodes) => ({
        renderNodes: nodes,
        flattenedNodes
      })));
    }
  }
  _updateCachedData(flattenedNodes) {
    this._flattenedNodes.next(flattenedNodes);
  }
  _updateKeyManagerItems(flattenedNodes) {
    this._keyManagerNodes.next(flattenedNodes);
  }
  /** Traverse the flattened node data and compute parents, levels, and group data. */
  _calculateParents(flattenedNodes) {
    const levelAccessor = this._getLevelAccessor();
    if (!levelAccessor) {
      return;
    }
    this._parents.clear();
    this._ariaSets.clear();
    for (let index = 0; index < flattenedNodes.length; index++) {
      const dataNode = flattenedNodes[index];
      const key = this._getExpansionKey(dataNode);
      this._levels.set(key, levelAccessor(dataNode));
      const parent = this._findParentForNode(dataNode, index, flattenedNodes);
      this._parents.set(key, parent);
      const parentKey = parent ? this._getExpansionKey(parent) : null;
      const group = this._ariaSets.get(parentKey) ?? [];
      group.splice(index, 0, dataNode);
      this._ariaSets.set(parentKey, group);
    }
  }
  static \u0275fac = function CdkTree_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTree)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkTree,
    selectors: [["cdk-tree"]],
    contentQueries: function CdkTree_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkTreeNodeDef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nodeDefs = _t);
      }
    },
    viewQuery: function CdkTree_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkTreeNodeOutlet, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nodeOutlet = _t.first);
      }
    },
    hostAttrs: ["role", "tree", 1, "cdk-tree"],
    hostBindings: function CdkTree_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function CdkTree_keydown_HostBindingHandler($event) {
          return ctx._sendKeydownToKeyManager($event);
        });
      }
    },
    inputs: {
      dataSource: "dataSource",
      treeControl: "treeControl",
      levelAccessor: "levelAccessor",
      childrenAccessor: "childrenAccessor",
      trackBy: "trackBy",
      expansionKey: "expansionKey"
    },
    exportAs: ["cdkTree"],
    decls: 1,
    vars: 0,
    consts: [["cdkTreeNodeOutlet", ""]],
    template: function CdkTree_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkTreeNodeOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTree, [{
    type: Component,
    args: [{
      selector: "cdk-tree",
      exportAs: "cdkTree",
      template: `<ng-container cdkTreeNodeOutlet></ng-container>`,
      host: {
        "class": "cdk-tree",
        "role": "tree",
        "(keydown)": "_sendKeydownToKeyManager($event)"
      },
      encapsulation: ViewEncapsulation.None,
      // The "OnPush" status for the `CdkTree` component is effectively a noop, so we are removing it.
      // The view for `CdkTree` consists entirely of templates declared in other views. As they are
      // declared elsewhere, they are checked when their declaration points are checked.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkTreeNodeOutlet]
    }]
  }], () => [], {
    dataSource: [{
      type: Input
    }],
    treeControl: [{
      type: Input
    }],
    levelAccessor: [{
      type: Input
    }],
    childrenAccessor: [{
      type: Input
    }],
    trackBy: [{
      type: Input
    }],
    expansionKey: [{
      type: Input
    }],
    _nodeOutlet: [{
      type: ViewChild,
      args: [CdkTreeNodeOutlet, {
        static: true
      }]
    }],
    _nodeDefs: [{
      type: ContentChildren,
      args: [CdkTreeNodeDef, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var CdkTreeNode = class _CdkTreeNode {
  _elementRef = inject(ElementRef);
  _tree = inject(CdkTree);
  _tabindex = -1;
  _type = "flat";
  /**
   * The role of the tree node.
   *
   * @deprecated This will be ignored; the tree will automatically determine the appropriate role
   * for tree node. This input will be removed in a future version.
   * @breaking-change 21.0.0
   */
  get role() {
    return "treeitem";
  }
  set role(_role) {
  }
  /**
   * Whether or not this node is expandable.
   *
   * If not using `FlatTreeControl`, or if `isExpandable` is not provided to
   * `NestedTreeControl`, this should be provided for correct node a11y.
   */
  get isExpandable() {
    return this._isExpandable();
  }
  set isExpandable(isExpandable) {
    this._inputIsExpandable = isExpandable;
    if (this.data && !this._isExpandable || !this._inputIsExpandable) {
      return;
    }
    if (this._inputIsExpanded) {
      this.expand();
    } else if (this._inputIsExpanded === false) {
      this.collapse();
    }
  }
  get isExpanded() {
    return this._tree.isExpanded(this._data);
  }
  set isExpanded(isExpanded) {
    this._inputIsExpanded = isExpanded;
    if (isExpanded) {
      this.expand();
    } else {
      this.collapse();
    }
  }
  /**
   * Whether or not this node is disabled. If it's disabled, then the user won't be able to focus
   * or activate this node.
   */
  isDisabled;
  /**
   * The text used to locate this item during typeahead. If not specified, the `textContent` will
   * will be used.
   */
  typeaheadLabel;
  getLabel() {
    return this.typeaheadLabel || this._elementRef.nativeElement.textContent?.trim() || "";
  }
  /** This emits when the node has been programatically activated or activated by keyboard. */
  activation = new EventEmitter();
  /** This emits when the node's expansion status has been changed. */
  expandedChange = new EventEmitter();
  /**
   * The most recently created `CdkTreeNode`. We save it in static variable so we can retrieve it
   * in `CdkTree` and set the data to it.
   */
  static mostRecentTreeNode = null;
  /** Subject that emits when the component has been destroyed. */
  _destroyed = new Subject();
  /** Emits when the node's data has changed. */
  _dataChanges = new Subject();
  _inputIsExpandable = false;
  _inputIsExpanded = void 0;
  /**
   * Flag used to determine whether or not we should be focusing the actual element based on
   * some user interaction (click or focus). On click, we don't forcibly focus the element
   * since the click could trigger some other component that wants to grab its own focus
   * (e.g. menu, dialog).
   */
  _shouldFocus = true;
  _parentNodeAriaLevel;
  /** The tree node's data. */
  get data() {
    return this._data;
  }
  set data(value) {
    if (value !== this._data) {
      this._data = value;
      this._dataChanges.next();
    }
  }
  _data;
  /* If leaf node, return true to not assign aria-expanded attribute */
  get isLeafNode() {
    if (this._tree.treeControl?.isExpandable !== void 0 && !this._tree.treeControl.isExpandable(this._data)) {
      return true;
    } else if (this._tree.treeControl?.isExpandable === void 0 && this._tree.treeControl?.getDescendants(this._data).length === 0) {
      return true;
    }
    return false;
  }
  get level() {
    return this._tree._getLevel(this._data) ?? this._parentNodeAriaLevel;
  }
  /** Determines if the tree node is expandable. */
  _isExpandable() {
    if (this._tree.treeControl) {
      if (this.isLeafNode) {
        return false;
      }
      return true;
    }
    return this._inputIsExpandable;
  }
  /**
   * Determines the value for `aria-expanded`.
   *
   * For non-expandable nodes, this is `null`.
   */
  _getAriaExpanded() {
    if (!this._isExpandable()) {
      return null;
    }
    return String(this.isExpanded);
  }
  /**
   * Determines the size of this node's parent's child set.
   *
   * This is intended to be used for `aria-setsize`.
   */
  _getSetSize() {
    return this._tree._getSetSize(this._data);
  }
  /**
   * Determines the index (starting from 1) of this node in its parent's child set.
   *
   * This is intended to be used for `aria-posinset`.
   */
  _getPositionInSet() {
    return this._tree._getPositionInSet(this._data);
  }
  _changeDetectorRef = inject(ChangeDetectorRef);
  constructor() {
    _CdkTreeNode.mostRecentTreeNode = this;
  }
  ngOnInit() {
    this._parentNodeAriaLevel = getParentNodeAriaLevel(this._elementRef.nativeElement);
    this._tree._getExpansionModel().changed.pipe(map(() => this.isExpanded), distinctUntilChanged()).subscribe(() => this._changeDetectorRef.markForCheck());
    this._tree._setNodeTypeIfUnset(this._type);
    this._tree._registerNode(this);
  }
  ngOnDestroy() {
    if (_CdkTreeNode.mostRecentTreeNode === this) {
      _CdkTreeNode.mostRecentTreeNode = null;
    }
    this._dataChanges.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }
  getParent() {
    return this._tree._getNodeParent(this) ?? null;
  }
  getChildren() {
    return this._tree._getNodeChildren(this);
  }
  /** Focuses this data node. Implemented for TreeKeyManagerItem. */
  focus() {
    this._tabindex = 0;
    if (this._shouldFocus) {
      this._elementRef.nativeElement.focus();
    }
    this._changeDetectorRef.markForCheck();
  }
  /** Defocus this data node. */
  unfocus() {
    this._tabindex = -1;
    this._changeDetectorRef.markForCheck();
  }
  /** Emits an activation event. Implemented for TreeKeyManagerItem. */
  activate() {
    if (this.isDisabled) {
      return;
    }
    this.activation.next(this._data);
  }
  /** Collapses this data node. Implemented for TreeKeyManagerItem. */
  collapse() {
    if (this.isExpandable) {
      this._tree.collapse(this._data);
    }
  }
  /** Expands this data node. Implemented for TreeKeyManagerItem. */
  expand() {
    if (this.isExpandable) {
      this._tree.expand(this._data);
    }
  }
  /** Makes the node focusable. Implemented for TreeKeyManagerItem. */
  makeFocusable() {
    this._tabindex = 0;
    this._changeDetectorRef.markForCheck();
  }
  _focusItem() {
    if (this.isDisabled) {
      return;
    }
    this._tree._keyManager.focusItem(this);
  }
  _setActiveItem() {
    if (this.isDisabled) {
      return;
    }
    this._shouldFocus = false;
    this._tree._keyManager.focusItem(this);
    this._shouldFocus = true;
  }
  _emitExpansionState(expanded) {
    this.expandedChange.emit(expanded);
  }
  static \u0275fac = function CdkTreeNode_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNode)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNode,
    selectors: [["cdk-tree-node"]],
    hostAttrs: ["role", "treeitem", 1, "cdk-tree-node"],
    hostVars: 5,
    hostBindings: function CdkTreeNode_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkTreeNode_click_HostBindingHandler() {
          return ctx._setActiveItem();
        })("focus", function CdkTreeNode_focus_HostBindingHandler() {
          return ctx._focusItem();
        });
      }
      if (rf & 2) {
        \u0275\u0275hostProperty("tabindex", ctx._tabindex);
        \u0275\u0275attribute("aria-expanded", ctx._getAriaExpanded())("aria-level", ctx.level + 1)("aria-posinset", ctx._getPositionInSet())("aria-setsize", ctx._getSetSize());
      }
    },
    inputs: {
      role: "role",
      isExpandable: [2, "isExpandable", "isExpandable", booleanAttribute],
      isExpanded: "isExpanded",
      isDisabled: [2, "isDisabled", "isDisabled", booleanAttribute],
      typeaheadLabel: [0, "cdkTreeNodeTypeaheadLabel", "typeaheadLabel"]
    },
    outputs: {
      activation: "activation",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkTreeNode"],
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-tree-node",
      exportAs: "cdkTreeNode",
      host: {
        "class": "cdk-tree-node",
        "[attr.aria-expanded]": "_getAriaExpanded()",
        "[attr.aria-level]": "level + 1",
        "[attr.aria-posinset]": "_getPositionInSet()",
        "[attr.aria-setsize]": "_getSetSize()",
        "[tabindex]": "_tabindex",
        "role": "treeitem",
        "(click)": "_setActiveItem()",
        "(focus)": "_focusItem()"
      }
    }]
  }], () => [], {
    role: [{
      type: Input
    }],
    isExpandable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    isExpanded: [{
      type: Input
    }],
    isDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    typeaheadLabel: [{
      type: Input,
      args: ["cdkTreeNodeTypeaheadLabel"]
    }],
    activation: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }]
  });
})();
function getParentNodeAriaLevel(nodeElement) {
  let parent = nodeElement.parentElement;
  while (parent && !isNodeElement(parent)) {
    parent = parent.parentElement;
  }
  if (!parent) {
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw Error("Incorrect tree structure containing detached node.");
    } else {
      return -1;
    }
  } else if (parent.classList.contains("cdk-nested-tree-node")) {
    return numberAttribute(parent.getAttribute("aria-level"));
  } else {
    return 0;
  }
}
function isNodeElement(element) {
  const classList = element.classList;
  return !!(classList?.contains("cdk-nested-tree-node") || classList?.contains("cdk-tree"));
}
var CdkNestedTreeNode = class _CdkNestedTreeNode extends CdkTreeNode {
  _type = "nested";
  _differs = inject(IterableDiffers);
  /** Differ used to find the changes in the data provided by the data source. */
  _dataDiffer;
  /** The children data dataNodes of current node. They will be placed in `CdkTreeNodeOutlet`. */
  _children;
  /** The children node placeholder. */
  nodeOutlet;
  constructor() {
    super();
  }
  ngAfterContentInit() {
    this._dataDiffer = this._differs.find([]).create(this._tree.trackBy);
    this._tree._getDirectChildren(this.data).pipe(takeUntil(this._destroyed)).subscribe((result) => this.updateChildrenNodes(result));
    this.nodeOutlet.changes.pipe(takeUntil(this._destroyed)).subscribe(() => this.updateChildrenNodes());
  }
  ngOnDestroy() {
    this._clear();
    super.ngOnDestroy();
  }
  /** Add children dataNodes to the NodeOutlet */
  updateChildrenNodes(children) {
    const outlet = this._getNodeOutlet();
    if (children) {
      this._children = children;
    }
    if (outlet && this._children) {
      const viewContainer = outlet.viewContainer;
      this._tree.renderNodeChanges(this._children, this._dataDiffer, viewContainer, this._data);
    } else {
      this._dataDiffer.diff([]);
    }
  }
  /** Clear the children dataNodes. */
  _clear() {
    const outlet = this._getNodeOutlet();
    if (outlet) {
      outlet.viewContainer.clear();
      this._dataDiffer.diff([]);
    }
  }
  /** Gets the outlet for the current node. */
  _getNodeOutlet() {
    const outlets = this.nodeOutlet;
    return outlets && outlets.find((outlet) => !outlet._node || outlet._node === this);
  }
  static \u0275fac = function CdkNestedTreeNode_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkNestedTreeNode)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkNestedTreeNode,
    selectors: [["cdk-nested-tree-node"]],
    contentQueries: function CdkNestedTreeNode_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkTreeNodeOutlet, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.nodeOutlet = _t);
      }
    },
    hostAttrs: [1, "cdk-nested-tree-node"],
    exportAs: ["cdkNestedTreeNode"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkTreeNode,
      useExisting: _CdkNestedTreeNode
    }, {
      provide: CDK_TREE_NODE_OUTLET_NODE,
      useExisting: _CdkNestedTreeNode
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNestedTreeNode, [{
    type: Directive,
    args: [{
      selector: "cdk-nested-tree-node",
      exportAs: "cdkNestedTreeNode",
      providers: [{
        provide: CdkTreeNode,
        useExisting: CdkNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: CdkNestedTreeNode
      }],
      host: {
        "class": "cdk-nested-tree-node"
      }
    }]
  }], () => [], {
    nodeOutlet: [{
      type: ContentChildren,
      args: [CdkTreeNodeOutlet, {
        // We need to use `descendants: true`, because Ivy will no longer match
        // indirect descendants if it's left as false.
        descendants: true
      }]
    }]
  });
})();
var cssUnitPattern = /([A-Za-z%]+)$/;
var CdkTreeNodePadding = class _CdkTreeNodePadding {
  _treeNode = inject(CdkTreeNode);
  _tree = inject(CdkTree);
  _element = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  /** Current padding value applied to the element. Used to avoid unnecessarily hitting the DOM. */
  _currentPadding;
  /** Subject that emits when the component has been destroyed. */
  _destroyed = new Subject();
  /** CSS units used for the indentation value. */
  indentUnits = "px";
  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
  get level() {
    return this._level;
  }
  set level(value) {
    this._setLevelInput(value);
  }
  _level;
  /**
   * The indent for each level. Can be a number or a CSS string.
   * Default number 40px from material design menu sub-menu spec.
   */
  get indent() {
    return this._indent;
  }
  set indent(indent) {
    this._setIndentInput(indent);
  }
  _indent = 40;
  constructor() {
    this._setPadding();
    this._dir?.change.pipe(takeUntil(this._destroyed)).subscribe(() => this._setPadding(true));
    this._treeNode._dataChanges.subscribe(() => this._setPadding());
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
  }
  /** The padding indent value for the tree node. Returns a string with px numbers if not null. */
  _paddingIndent() {
    const nodeLevel = (this._treeNode.data && this._tree._getLevel(this._treeNode.data)) ?? null;
    const level = this._level == null ? nodeLevel : this._level;
    return typeof level === "number" ? `${level * this._indent}${this.indentUnits}` : null;
  }
  _setPadding(forceChange = false) {
    const padding = this._paddingIndent();
    if (padding !== this._currentPadding || forceChange) {
      const element = this._element.nativeElement;
      const paddingProp = this._dir && this._dir.value === "rtl" ? "paddingRight" : "paddingLeft";
      const resetProp = paddingProp === "paddingLeft" ? "paddingRight" : "paddingLeft";
      element.style[paddingProp] = padding || "";
      element.style[resetProp] = "";
      this._currentPadding = padding;
    }
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setLevelInput(value) {
    this._level = isNaN(value) ? null : value;
    this._setPadding();
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setIndentInput(indent) {
    let value = indent;
    let units = "px";
    if (typeof indent === "string") {
      const parts = indent.split(cssUnitPattern);
      value = parts[0];
      units = parts[1] || units;
    }
    this.indentUnits = units;
    this._indent = numberAttribute(value);
    this._setPadding();
  }
  static \u0275fac = function CdkTreeNodePadding_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodePadding)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodePadding,
    selectors: [["", "cdkTreeNodePadding", ""]],
    inputs: {
      level: [2, "cdkTreeNodePadding", "level", numberAttribute],
      indent: [0, "cdkTreeNodePaddingIndent", "indent"]
    },
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodePadding, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodePadding]"
    }]
  }], () => [], {
    level: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodePadding",
        transform: numberAttribute
      }]
    }],
    indent: [{
      type: Input,
      args: ["cdkTreeNodePaddingIndent"]
    }]
  });
})();
var CdkTreeNodeToggle = class _CdkTreeNodeToggle {
  _tree = inject(CdkTree);
  _treeNode = inject(CdkTreeNode);
  /** Whether expand/collapse the node recursively. */
  recursive = false;
  constructor() {
  }
  // Toggle the expanded or collapsed state of this node.
  //
  // Focus this node with expanding or collapsing it. This ensures that the active node will always
  // be visible when expanding and collapsing.
  _toggle() {
    this.recursive ? this._tree.toggleDescendants(this._treeNode.data) : this._tree.toggle(this._treeNode.data);
    this._tree._keyManager.focusItem(this._treeNode);
  }
  static \u0275fac = function CdkTreeNodeToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeNodeToggle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkTreeNodeToggle,
    selectors: [["", "cdkTreeNodeToggle", ""]],
    hostAttrs: ["tabindex", "-1"],
    hostBindings: function CdkTreeNodeToggle_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function CdkTreeNodeToggle_click_HostBindingHandler($event) {
          ctx._toggle();
          return $event.stopPropagation();
        })("keydown.Enter", function CdkTreeNodeToggle_keydown_Enter_HostBindingHandler($event) {
          ctx._toggle();
          return $event.preventDefault();
        })("keydown.Space", function CdkTreeNodeToggle_keydown_Space_HostBindingHandler($event) {
          ctx._toggle();
          return $event.preventDefault();
        });
      }
    },
    inputs: {
      recursive: [2, "cdkTreeNodeToggleRecursive", "recursive", booleanAttribute]
    },
    features: [\u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeNodeToggle, [{
    type: Directive,
    args: [{
      selector: "[cdkTreeNodeToggle]",
      host: {
        "(click)": "_toggle(); $event.stopPropagation();",
        "(keydown.Enter)": "_toggle(); $event.preventDefault();",
        "(keydown.Space)": "_toggle(); $event.preventDefault();",
        "tabindex": "-1"
      }
    }]
  }], () => [], {
    recursive: [{
      type: Input,
      args: [{
        alias: "cdkTreeNodeToggleRecursive",
        transform: booleanAttribute
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkNestedTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle, CdkTree, CdkTreeNode, CdkTreeNodeOutlet];
var CdkTreeModule = class _CdkTreeModule {
  static \u0275fac = function CdkTreeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTreeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkTreeModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTreeModule, [{
    type: NgModule,
    args: [{
      imports: EXPORTED_DECLARATIONS,
      exports: EXPORTED_DECLARATIONS
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/tree.mjs
function isNoopTreeKeyManager(keyManager) {
  return !!keyManager._isNoopTreeKeyManager;
}
var MatTreeNode = class _MatTreeNode extends CdkTreeNode {
  /**
   * The tabindex of the tree node.
   *
   * @deprecated By default MatTreeNode manages focus using TreeKeyManager instead of tabIndex.
   *   Recommend to avoid setting tabIndex directly to prevent TreeKeyManager form getting into
   *   an unexpected state. Tabindex to be removed in a future version.
   * @breaking-change 21.0.0 Remove this attribute.
   */
  get tabIndexInputBinding() {
    return this._tabIndexInputBinding;
  }
  set tabIndexInputBinding(value) {
    this._tabIndexInputBinding = value;
  }
  _tabIndexInputBinding;
  /**
   * The default tabindex of the tree node.
   *
   * @deprecated By default MatTreeNode manages focus using TreeKeyManager instead of tabIndex.
   *   Recommend to avoid setting tabIndex directly to prevent TreeKeyManager form getting into
   *   an unexpected state. Tabindex to be removed in a future version.
   * @breaking-change 21.0.0 Remove this attribute.
   */
  defaultTabIndex = 0;
  _getTabindexAttribute() {
    if (isNoopTreeKeyManager(this._tree._keyManager)) {
      return this.tabIndexInputBinding;
    }
    return this._tabindex;
  }
  /**
   * Whether the component is disabled.
   *
   * @deprecated This is an alias for `isDisabled`.
   * @breaking-change 21.0.0 Remove this input
   */
  get disabled() {
    return this.isDisabled;
  }
  set disabled(value) {
    this.isDisabled = value;
  }
  constructor() {
    super();
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this.tabIndexInputBinding = Number(tabIndex) || this.defaultTabIndex;
  }
  // This is a workaround for https://github.com/angular/angular/issues/23091
  // In aot mode, the lifecycle hooks from parent class are not called.
  ngOnInit() {
    super.ngOnInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static \u0275fac = function MatTreeNode_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTreeNode)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTreeNode,
    selectors: [["mat-tree-node"]],
    hostAttrs: [1, "mat-tree-node"],
    hostVars: 5,
    hostBindings: function MatTreeNode_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatTreeNode_click_HostBindingHandler() {
          return ctx._focusItem();
        });
      }
      if (rf & 2) {
        \u0275\u0275hostProperty("tabindex", ctx._getTabindexAttribute());
        \u0275\u0275attribute("aria-expanded", ctx._getAriaExpanded())("aria-level", ctx.level + 1)("aria-posinset", ctx._getPositionInSet())("aria-setsize", ctx._getSetSize());
      }
    },
    inputs: {
      tabIndexInputBinding: [2, "tabIndex", "tabIndexInputBinding", (value) => value == null ? 0 : numberAttribute(value)],
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      activation: "activation",
      expandedChange: "expandedChange"
    },
    exportAs: ["matTreeNode"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkTreeNode,
      useExisting: _MatTreeNode
    }]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNode, [{
    type: Directive,
    args: [{
      selector: "mat-tree-node",
      exportAs: "matTreeNode",
      outputs: ["activation", "expandedChange"],
      providers: [{
        provide: CdkTreeNode,
        useExisting: MatTreeNode
      }],
      host: {
        "class": "mat-tree-node",
        "[attr.aria-expanded]": "_getAriaExpanded()",
        "[attr.aria-level]": "level + 1",
        "[attr.aria-posinset]": "_getPositionInSet()",
        "[attr.aria-setsize]": "_getSetSize()",
        "(click)": "_focusItem()",
        "[tabindex]": "_getTabindexAttribute()"
      }
    }]
  }], () => [], {
    tabIndexInputBinding: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value),
        alias: "tabIndex"
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatTreeNodeDef = class _MatTreeNodeDef extends CdkTreeNodeDef {
  data;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTreeNodeDef_BaseFactory;
    return function MatTreeNodeDef_Factory(__ngFactoryType__) {
      return (\u0275MatTreeNodeDef_BaseFactory || (\u0275MatTreeNodeDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatTreeNodeDef)))(__ngFactoryType__ || _MatTreeNodeDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTreeNodeDef,
    selectors: [["", "matTreeNodeDef", ""]],
    inputs: {
      when: [0, "matTreeNodeDefWhen", "when"],
      data: [0, "matTreeNode", "data"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkTreeNodeDef,
      useExisting: _MatTreeNodeDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNodeDef, [{
    type: Directive,
    args: [{
      selector: "[matTreeNodeDef]",
      inputs: [{
        name: "when",
        alias: "matTreeNodeDefWhen"
      }],
      providers: [{
        provide: CdkTreeNodeDef,
        useExisting: MatTreeNodeDef
      }]
    }]
  }], null, {
    data: [{
      type: Input,
      args: ["matTreeNode"]
    }]
  });
})();
var MatNestedTreeNode = class _MatNestedTreeNode extends CdkNestedTreeNode {
  node;
  /**
   * Whether the node is disabled.
   *
   * @deprecated This is an alias for `isDisabled`.
   * @breaking-change 21.0.0 Remove this input
   */
  get disabled() {
    return this.isDisabled;
  }
  set disabled(value) {
    this.isDisabled = value;
  }
  /** Tabindex of the node. */
  get tabIndex() {
    return this.isDisabled ? -1 : this._tabIndex;
  }
  set tabIndex(value) {
    this._tabIndex = value;
  }
  _tabIndex;
  // This is a workaround for https://github.com/angular/angular/issues/19145
  // In aot mode, the lifecycle hooks from parent class are not called.
  // TODO(tinayuangao): Remove when the angular issue #19145 is fixed
  ngOnInit() {
    super.ngOnInit();
  }
  ngAfterContentInit() {
    super.ngAfterContentInit();
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatNestedTreeNode_BaseFactory;
    return function MatNestedTreeNode_Factory(__ngFactoryType__) {
      return (\u0275MatNestedTreeNode_BaseFactory || (\u0275MatNestedTreeNode_BaseFactory = \u0275\u0275getInheritedFactory(_MatNestedTreeNode)))(__ngFactoryType__ || _MatNestedTreeNode);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatNestedTreeNode,
    selectors: [["mat-nested-tree-node"]],
    hostAttrs: [1, "mat-nested-tree-node"],
    inputs: {
      node: [0, "matNestedTreeNode", "node"],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
    },
    outputs: {
      activation: "activation",
      expandedChange: "expandedChange"
    },
    exportAs: ["matNestedTreeNode"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkNestedTreeNode,
      useExisting: _MatNestedTreeNode
    }, {
      provide: CdkTreeNode,
      useExisting: _MatNestedTreeNode
    }, {
      provide: CDK_TREE_NODE_OUTLET_NODE,
      useExisting: _MatNestedTreeNode
    }]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNestedTreeNode, [{
    type: Directive,
    args: [{
      selector: "mat-nested-tree-node",
      exportAs: "matNestedTreeNode",
      outputs: ["activation", "expandedChange"],
      providers: [{
        provide: CdkNestedTreeNode,
        useExisting: MatNestedTreeNode
      }, {
        provide: CdkTreeNode,
        useExisting: MatNestedTreeNode
      }, {
        provide: CDK_TREE_NODE_OUTLET_NODE,
        useExisting: MatNestedTreeNode
      }],
      host: {
        "class": "mat-nested-tree-node"
      }
    }]
  }], null, {
    node: [{
      type: Input,
      args: ["matNestedTreeNode"]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }]
  });
})();
var MatTreeNodePadding = class _MatTreeNodePadding extends CdkTreeNodePadding {
  /** The level of depth of the tree node. The padding will be `level * indent` pixels. */
  get level() {
    return this._level;
  }
  set level(value) {
    this._setLevelInput(value);
  }
  /** The indent for each level. Default number 40px from material design menu sub-menu spec. */
  get indent() {
    return this._indent;
  }
  set indent(indent) {
    this._setIndentInput(indent);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTreeNodePadding_BaseFactory;
    return function MatTreeNodePadding_Factory(__ngFactoryType__) {
      return (\u0275MatTreeNodePadding_BaseFactory || (\u0275MatTreeNodePadding_BaseFactory = \u0275\u0275getInheritedFactory(_MatTreeNodePadding)))(__ngFactoryType__ || _MatTreeNodePadding);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTreeNodePadding,
    selectors: [["", "matTreeNodePadding", ""]],
    inputs: {
      level: [2, "matTreeNodePadding", "level", numberAttribute],
      indent: [0, "matTreeNodePaddingIndent", "indent"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkTreeNodePadding,
      useExisting: _MatTreeNodePadding
    }]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNodePadding, [{
    type: Directive,
    args: [{
      selector: "[matTreeNodePadding]",
      providers: [{
        provide: CdkTreeNodePadding,
        useExisting: MatTreeNodePadding
      }]
    }]
  }], null, {
    level: [{
      type: Input,
      args: [{
        alias: "matTreeNodePadding",
        transform: numberAttribute
      }]
    }],
    indent: [{
      type: Input,
      args: ["matTreeNodePaddingIndent"]
    }]
  });
})();
var MatTreeNodeOutlet = class _MatTreeNodeOutlet {
  viewContainer = inject(ViewContainerRef);
  _node = inject(CDK_TREE_NODE_OUTLET_NODE, {
    optional: true
  });
  static \u0275fac = function MatTreeNodeOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTreeNodeOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTreeNodeOutlet,
    selectors: [["", "matTreeNodeOutlet", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkTreeNodeOutlet,
      useExisting: _MatTreeNodeOutlet
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNodeOutlet, [{
    type: Directive,
    args: [{
      selector: "[matTreeNodeOutlet]",
      providers: [{
        provide: CdkTreeNodeOutlet,
        useExisting: MatTreeNodeOutlet
      }]
    }]
  }], null, null);
})();
var MatTree = class _MatTree extends CdkTree {
  // Outlets within the tree's template where the dataNodes will be inserted.
  // We need an initializer here to avoid a TS error. The value will be set in `ngAfterViewInit`.
  _nodeOutlet = void 0;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTree_BaseFactory;
    return function MatTree_Factory(__ngFactoryType__) {
      return (\u0275MatTree_BaseFactory || (\u0275MatTree_BaseFactory = \u0275\u0275getInheritedFactory(_MatTree)))(__ngFactoryType__ || _MatTree);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTree,
    selectors: [["mat-tree"]],
    viewQuery: function MatTree_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatTreeNodeOutlet, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nodeOutlet = _t.first);
      }
    },
    hostAttrs: [1, "mat-tree"],
    exportAs: ["matTree"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkTree,
      useExisting: _MatTree
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["matTreeNodeOutlet", ""]],
    template: function MatTree_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [MatTreeNodeOutlet],
    styles: [".mat-tree{display:block;background-color:var(--mat-tree-container-background-color, var(--mat-sys-surface))}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color, var(--mat-sys-on-surface));font-family:var(--mat-tree-node-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-tree-node-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-tree-node-text-weight, var(--mat-sys-body-large-weight))}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height, 48px)}.mat-nested-tree-node{border-bottom-width:0}"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTree, [{
    type: Component,
    args: [{
      selector: "mat-tree",
      exportAs: "matTree",
      template: `<ng-container matTreeNodeOutlet></ng-container>`,
      host: {
        "class": "mat-tree"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: CdkTree,
        useExisting: MatTree
      }],
      imports: [MatTreeNodeOutlet],
      styles: [".mat-tree{display:block;background-color:var(--mat-tree-container-background-color, var(--mat-sys-surface))}.mat-tree-node,.mat-nested-tree-node{color:var(--mat-tree-node-text-color, var(--mat-sys-on-surface));font-family:var(--mat-tree-node-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-tree-node-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-tree-node-text-weight, var(--mat-sys-body-large-weight))}.mat-tree-node{display:flex;align-items:center;flex:1;word-wrap:break-word;min-height:var(--mat-tree-node-min-height, 48px)}.mat-nested-tree-node{border-bottom-width:0}"]
    }]
  }], null, {
    _nodeOutlet: [{
      type: ViewChild,
      args: [MatTreeNodeOutlet, {
        static: true
      }]
    }]
  });
})();
var MatTreeNodeToggle = class _MatTreeNodeToggle extends CdkTreeNodeToggle {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTreeNodeToggle_BaseFactory;
    return function MatTreeNodeToggle_Factory(__ngFactoryType__) {
      return (\u0275MatTreeNodeToggle_BaseFactory || (\u0275MatTreeNodeToggle_BaseFactory = \u0275\u0275getInheritedFactory(_MatTreeNodeToggle)))(__ngFactoryType__ || _MatTreeNodeToggle);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTreeNodeToggle,
    selectors: [["", "matTreeNodeToggle", ""]],
    inputs: {
      recursive: [0, "matTreeNodeToggleRecursive", "recursive"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkTreeNodeToggle,
      useExisting: _MatTreeNodeToggle
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeNodeToggle, [{
    type: Directive,
    args: [{
      selector: "[matTreeNodeToggle]",
      providers: [{
        provide: CdkTreeNodeToggle,
        useExisting: MatTreeNodeToggle
      }],
      inputs: [{
        name: "recursive",
        alias: "matTreeNodeToggleRecursive"
      }]
    }]
  }], null, null);
})();
var MAT_TREE_DIRECTIVES = [MatNestedTreeNode, MatTreeNodeDef, MatTreeNodePadding, MatTreeNodeToggle, MatTree, MatTreeNode, MatTreeNodeOutlet];
var MatTreeModule = class _MatTreeModule {
  static \u0275fac = function MatTreeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTreeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatTreeModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [CdkTreeModule, MatCommonModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTreeModule, [{
    type: NgModule,
    args: [{
      imports: [CdkTreeModule, MatCommonModule, ...MAT_TREE_DIRECTIVES],
      exports: [MatCommonModule, MAT_TREE_DIRECTIVES]
    }]
  }], null, null);
})();
var MatTreeFlattener = class {
  transformFunction;
  getLevel;
  isExpandable;
  getChildren;
  constructor(transformFunction, getLevel, isExpandable, getChildren) {
    this.transformFunction = transformFunction;
    this.getLevel = getLevel;
    this.isExpandable = isExpandable;
    this.getChildren = getChildren;
  }
  _flattenNode(node, level, resultNodes, parentMap) {
    const flatNode = this.transformFunction(node, level);
    resultNodes.push(flatNode);
    if (this.isExpandable(flatNode)) {
      const childrenNodes = this.getChildren(node);
      if (childrenNodes) {
        if (Array.isArray(childrenNodes)) {
          this._flattenChildren(childrenNodes, level, resultNodes, parentMap);
        } else {
          childrenNodes.pipe(take(1)).subscribe((children) => {
            this._flattenChildren(children, level, resultNodes, parentMap);
          });
        }
      }
    }
    return resultNodes;
  }
  _flattenChildren(children, level, resultNodes, parentMap) {
    children.forEach((child, index) => {
      let childParentMap = parentMap.slice();
      childParentMap.push(index != children.length - 1);
      this._flattenNode(child, level + 1, resultNodes, childParentMap);
    });
  }
  /**
   * Flatten a list of node type T to flattened version of node F.
   * Please note that type T may be nested, and the length of `structuredData` may be different
   * from that of returned list `F[]`.
   */
  flattenNodes(structuredData) {
    let resultNodes = [];
    structuredData.forEach((node) => this._flattenNode(node, 0, resultNodes, []));
    return resultNodes;
  }
  /**
   * Expand flattened node with current expansion status.
   * The returned list may have different length.
   */
  expandFlattenedNodes(nodes, treeControl) {
    let results = [];
    let currentExpand = [];
    currentExpand[0] = true;
    nodes.forEach((node) => {
      let expand = true;
      for (let i = 0; i <= this.getLevel(node); i++) {
        expand = expand && currentExpand[i];
      }
      if (expand) {
        results.push(node);
      }
      if (this.isExpandable(node)) {
        currentExpand[this.getLevel(node) + 1] = treeControl.isExpanded(node);
      }
    });
    return results;
  }
};
var MatTreeFlatDataSource = class extends DataSource {
  _treeControl;
  _treeFlattener;
  _flattenedData = new BehaviorSubject([]);
  _expandedData = new BehaviorSubject([]);
  get data() {
    return this._data.value;
  }
  set data(value) {
    this._data.next(value);
    this._flattenedData.next(this._treeFlattener.flattenNodes(this.data));
    this._treeControl.dataNodes = this._flattenedData.value;
  }
  _data = new BehaviorSubject([]);
  constructor(_treeControl, _treeFlattener, initialData) {
    super();
    this._treeControl = _treeControl;
    this._treeFlattener = _treeFlattener;
    if (initialData) {
      this.data = initialData;
    }
  }
  connect(collectionViewer) {
    return merge(collectionViewer.viewChange, this._treeControl.expansionModel.changed, this._flattenedData).pipe(map(() => {
      this._expandedData.next(this._treeFlattener.expandFlattenedNodes(this._flattenedData.value, this._treeControl));
      return this._expandedData.value;
    }));
  }
  disconnect() {
  }
};

// src/app/modules/admin/docs/guides/development/directory-structure/directory-structure.ts
var _c04 = () => ["/ui/fuse-components/libraries/mock-api"];
var _c1 = () => ["../../customization/theme-layouts"];
function DirectoryStructureComponent_mat_tree_node_43_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " \u251C\u2500 ");
    \u0275\u0275elementEnd();
  }
}
function DirectoryStructureComponent_mat_tree_node_43_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " \u2514\u2500 ");
    \u0275\u0275elementEnd();
  }
}
function DirectoryStructureComponent_mat_tree_node_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tree-node", 20)(1, "div", 21);
    \u0275\u0275template(2, DirectoryStructureComponent_mat_tree_node_43_Conditional_2_Template, 2, 0, "div", 22)(3, DirectoryStructureComponent_mat_tree_node_43_Conditional_3_Template, 2, 0, "div", 22);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const node_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!node_r1.last ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r1.last ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", node_r1.name, " ");
  }
}
function DirectoryStructureComponent_mat_tree_node_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tree-node", 20)(1, "button", 23)(2, "mat-icon", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "toggle " + node_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.generalTree.treeControl.isExpanded(node_r2) ? "remove" : "add", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", node_r2.name, " ");
  }
}
function DirectoryStructureComponent_mat_tree_node_75_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, " \u251C\u2500 ");
    \u0275\u0275elementEnd();
  }
}
function DirectoryStructureComponent_mat_tree_node_75_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1, " \u2514\u2500 ");
    \u0275\u0275elementEnd();
  }
}
function DirectoryStructureComponent_mat_tree_node_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tree-node", 20)(1, "div", 21);
    \u0275\u0275template(2, DirectoryStructureComponent_mat_tree_node_75_Conditional_2_Template, 2, 0, "div", 26)(3, DirectoryStructureComponent_mat_tree_node_75_Conditional_3_Template, 2, 0, "div", 26);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const node_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!node_r4.last ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(node_r4.last ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", node_r4.name, " ");
  }
}
function DirectoryStructureComponent_mat_tree_node_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tree-node", 20)(1, "button", 23)(2, "mat-icon", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 25);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const node_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", "toggle " + node_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.appTree.treeControl.isExpanded(node_r5) ? "remove" : "add", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", node_r5.name, " ");
  }
}
var DirectoryStructureComponent = class _DirectoryStructureComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
    this.appDir = [
      {
        name: "app/",
        children: [
          {
            name: "core/",
            children: [
              { name: "auth/" },
              { name: "icons/" },
              { name: "navigation/" },
              { name: "transloco/" },
              { name: "user/" }
            ]
          },
          {
            name: "layout/",
            children: [
              { name: "common/" },
              { name: "layouts/" },
              { name: "layout.component.html" },
              { name: "layout.component.scss" },
              { name: "layout.component.ts" }
            ]
          },
          {
            name: "mock-api/",
            children: [
              { name: "apps/" },
              { name: "common/" },
              { name: "dashboards/" },
              { name: "pages/" },
              { name: "ui/" },
              { name: "index.ts" }
            ]
          },
          {
            name: "modules/",
            children: [
              { name: "admin/" },
              { name: "auth/" },
              { name: "landing/" }
            ]
          },
          { name: "app.component.html" },
          { name: "app.component.scss" },
          { name: "app.component.ts" },
          { name: "app.config.ts" },
          { name: "app.resolvers.ts" },
          { name: "app.routes.ts" }
        ]
      }
    ];
    this.generalDir = [
      {
        name: "public",
        children: [
          { name: "fonts/" },
          { name: "i18n/" },
          { name: "icons/" },
          { name: "images/" },
          { name: "styles/" },
          { name: "favicon-16x16.png" },
          { name: "favicon-32x32.png" }
        ]
      },
      {
        name: "src/",
        children: [
          {
            name: "@fuse/",
            children: [
              { name: "animations/" },
              { name: "components/" },
              { name: "directives/" },
              { name: "lib/" },
              { name: "pipes/" },
              { name: "services/" },
              { name: "styles/" },
              { name: "tailwind/" },
              { name: "validators/" },
              { name: "version/" },
              { name: "fuse.provider.ts" },
              { name: "index.ts" }
            ]
          },
          this.appDir[0],
          {
            name: "styles/",
            children: [
              { name: "styles.scss" },
              { name: "tailwind.scss" },
              { name: "vendors.scss" }
            ]
          },
          { name: "index.html" },
          { name: "main.ts" }
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
    this.appTree = this.createTree(this.appDir);
    this.generalTree = this.createTree(this.generalDir);
    this.appTree.treeControl.dataNodes.forEach((node, index, nodes) => {
      nodes[index].last = false;
      if (nodes[index + 1]) {
        nodes[index].last = nodes[index + 1].level === node.level - 1;
      } else {
        nodes[index].last = true;
      }
    });
    this.generalTree.treeControl.dataNodes.forEach((node, index, nodes) => {
      nodes[index].last = false;
      if (nodes[index + 1]) {
        nodes[index].last = nodes[index + 1].level === node.level - 1;
      } else {
        nodes[index].last = true;
      }
    });
    this.appTree.treeControl.expand(this.appTree.treeControl.dataNodes[0]);
    this.generalTree.treeControl.expand(this.generalTree.treeControl.dataNodes[8]);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Has child
   *
   * @param _
   * @param node
   */
  hasChild(_, node) {
    return node.expandable;
  }
  /**
   * Create a new tree
   */
  createTree(data) {
    const treeControl = new FlatTreeControl((node) => node.level, (node) => node.expandable);
    const dataSource = new MatTreeFlatDataSource(treeControl, new MatTreeFlattener((node, level) => ({
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level
    }), (node) => node.level, (node) => node.expandable, (node) => node.children));
    dataSource.data = data;
    return {
      treeControl,
      dataSource
    };
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function DirectoryStructureComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DirectoryStructureComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DirectoryStructureComponent, selectors: [["directory-structure"]], decls: 220, vars: 15, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], [3, "appearance", "type"], [1, "bg-card", "mt-6", "rounded", "p-6", "pl-3", "shadow"], [3, "dataSource", "treeControl"], ["matTreeNodePaddingIndent", "32", "matTreeNodePadding", "", 4, "matTreeNodeDef"], ["matTreeNodePaddingIndent", "32", "matTreeNodePadding", "", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [3, "routerLink"], ["matTreeNodePaddingIndent", "32", "matTreeNodePadding", ""], [1, "flex", "items-center", "font-mono"], [1, "text-hint", "mr-2", "flex", "h-8", "w-8", "items-center", "justify-center"], ["mat-icon-button", "", "matTreeNodeToggle", ""], [1, "icon-size-4"], [1, "font-mono"], [1, "mr-2", "flex", "h-8", "w-8", "items-center", "justify-center"]], template: function DirectoryStructureComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Development");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Directory Structure ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function DirectoryStructureComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "fuse-alert", 14);
        \u0275\u0275text(22, " Fuse's directory structure might look overwhelming and intimidating at first, but following this page and giving a bit time to understand it before jumping right into code will help immensely. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, " Fuse built around the idea of multi-purpose and multi-layout. You can think of Fuse as a ");
        \u0275\u0275elementStart(25, "em");
        \u0275\u0275text(26, "Starter kit");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " and a ");
        \u0275\u0275elementStart(28, "em");
        \u0275\u0275text(29, "guide");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " rather than just a simple template. The purpose of Fuse is not only provide a pre-made styles for visual elements but is also be a guide to follow while building an app. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "p");
        \u0275\u0275text(32, " It's more of an answer to the questions like ");
        \u0275\u0275elementStart(33, "strong");
        \u0275\u0275text(34, "Where should I put this file?");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " or ");
        \u0275\u0275elementStart(36, "strong");
        \u0275\u0275text(37, "Which file should I put this piece of code into?");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " rather than just a compilation of example pages and ready to use styles. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40, " Here's a simplified version of the entire directory structure of the Fuse: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 15)(42, "mat-tree", 16);
        \u0275\u0275template(43, DirectoryStructureComponent_mat_tree_node_43_Template, 6, 3, "mat-tree-node", 17)(44, DirectoryStructureComponent_mat_tree_node_44_Template, 6, 3, "mat-tree-node", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "h2");
        \u0275\u0275text(46, "/public");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "p");
        \u0275\u0275text(48, " Default folder for static assets like images, fonts, static styles and etc. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "h2");
        \u0275\u0275text(50, "/src/@fuse/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "p");
        \u0275\u0275text(52, " This is the core directory of the Fuse. It includes components, directives, services, pipes, custom validators, animations, base styles and much more. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "p");
        \u0275\u0275text(54, " Modifications on this directory is ");
        \u0275\u0275elementStart(55, "strong");
        \u0275\u0275text(56, "NOT");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " recommended. Since majority of changes happen within this directory on updates, any modifications to this directory and its content will make the updating process complex and time consuming. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "h2");
        \u0275\u0275text(59, "src/app/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "p");
        \u0275\u0275text(61, " This directory contains all application related codes. This is where you put your code. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "p");
        \u0275\u0275text(63, " Fuse provides a sensible default directory structure within the ");
        \u0275\u0275elementStart(64, "strong");
        \u0275\u0275text(65, "app");
        \u0275\u0275elementEnd();
        \u0275\u0275text(66, " directory. You can of course completely remove everything from it and design your own structure but the provided structure is designed to handle applications from ");
        \u0275\u0275elementStart(67, "em");
        \u0275\u0275text(68, "small");
        \u0275\u0275elementEnd();
        \u0275\u0275text(69, " to ");
        \u0275\u0275elementStart(70, "em");
        \u0275\u0275text(71, "enterprise");
        \u0275\u0275elementEnd();
        \u0275\u0275text(72, " grade: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 15)(74, "mat-tree", 16);
        \u0275\u0275template(75, DirectoryStructureComponent_mat_tree_node_75_Template, 6, 3, "mat-tree-node", 17)(76, DirectoryStructureComponent_mat_tree_node_76_Template, 6, 3, "mat-tree-node", 18);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "h3");
        \u0275\u0275text(78, "src/app/core/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "p");
        \u0275\u0275text(80, " This directory is designed to contain your application's core; Singleton services, default configurations, default states and likes. It's ");
        \u0275\u0275elementStart(81, "strong");
        \u0275\u0275text(82, "NOT");
        \u0275\u0275elementEnd();
        \u0275\u0275text(83, " recommended to put any components, directives, pipes or simply anything has a template or related to templates in here. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "p");
        \u0275\u0275text(85, " Example files that can go into this directory includes, but not limited to: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "ul")(87, "li")(88, "p")(89, "strong");
        \u0275\u0275text(90, "Singleton services:");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "p");
        \u0275\u0275text(92, "Auth service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "p");
        \u0275\u0275text(94, "Logger service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "p");
        \u0275\u0275text(96, "SplashScreen service");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "li")(98, "p")(99, "strong");
        \u0275\u0275text(100, "Guards");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "p");
        \u0275\u0275text(102, "Auth guard");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "p");
        \u0275\u0275text(104, "NoAuth guard");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "li")(106, "p")(107, "strong");
        \u0275\u0275text(108, "Defaults");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "p");
        \u0275\u0275text(110, "Default configurations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "p");
        \u0275\u0275text(112, "Default state");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "li")(114, "p")(115, "strong");
        \u0275\u0275text(116, "Custom validators");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(117, "p");
        \u0275\u0275text(118, "Phone number validator");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "p");
        \u0275\u0275text(120, "Confirm validator");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(121, "p");
        \u0275\u0275text(122, "and etc...");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "h3");
        \u0275\u0275text(124, "src/app/mock-api/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "p");
        \u0275\u0275text(126, " This directory is designed to contain data services for custom made MockAPI library. Detailed information about this directory and the MockAPI library can be found in the ");
        \u0275\u0275elementStart(127, "a", 19);
        \u0275\u0275text(128, "Fuse Components > Libraries > MockAPI");
        \u0275\u0275elementEnd();
        \u0275\u0275text(129, " section of this documentation. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "h3");
        \u0275\u0275text(131, "src/app/layout/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "p");
        \u0275\u0275text(133, " This directory designed to contain everything related to the layout of your app. By default, Fuse provides variety of different layout options for you to use. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "p");
        \u0275\u0275text(135, " The ");
        \u0275\u0275elementStart(136, "code");
        \u0275\u0275text(137, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(138, " is an entry component and it provides an easy way of switching between different layouts. More information about how the ");
        \u0275\u0275elementStart(139, "code");
        \u0275\u0275text(140, "LayoutComponent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(141, " works can be found in the ");
        \u0275\u0275elementStart(142, "a", 19);
        \u0275\u0275text(143, "Customization > Theme layouts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(144, " section of this documentation. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "p");
        \u0275\u0275text(146, " The ");
        \u0275\u0275elementStart(147, "strong");
        \u0275\u0275text(148, "app/layout/common/");
        \u0275\u0275elementEnd();
        \u0275\u0275text(149, " folder includes common components for layouts such as: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(150, "ul")(151, "li");
        \u0275\u0275text(152, "Messages");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "li");
        \u0275\u0275text(154, "Notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(155, "li");
        \u0275\u0275text(156, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "li");
        \u0275\u0275text(158, "Shortcuts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "li");
        \u0275\u0275text(160, "User Menu");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(161, "p");
        \u0275\u0275text(162, " These components are being used across different layouts, so if you use multiple layouts and want to create a component, directive or a pipe for using within your layouts, you can put them inside the ");
        \u0275\u0275elementStart(163, "strong");
        \u0275\u0275text(164, "common");
        \u0275\u0275elementEnd();
        \u0275\u0275text(165, " folder. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(166, "h3");
        \u0275\u0275text(167, "src/app/modules/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "p");
        \u0275\u0275text(169, " This directory is designed to contain your application's feature modules. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "p");
        \u0275\u0275text(171, " For example; Authentication related pages such as Sign In, Sign Up, Lost Password and etc. can be grouped into ");
        \u0275\u0275elementStart(172, "strong");
        \u0275\u0275text(173, "auth/");
        \u0275\u0275elementEnd();
        \u0275\u0275text(174, " directory while your main admin components and modules grouped into ");
        \u0275\u0275elementStart(175, "strong");
        \u0275\u0275text(176, "admin/");
        \u0275\u0275elementEnd();
        \u0275\u0275text(177, " directory. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "p");
        \u0275\u0275text(179, " If you use SSR (Server Side Rendering) you can even include your ");
        \u0275\u0275elementStart(180, "strong");
        \u0275\u0275text(181, "landing");
        \u0275\u0275elementEnd();
        \u0275\u0275text(182, " page as one of the modules and keep everything in a single app. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "h2");
        \u0275\u0275text(184, "src/styles/");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "p");
        \u0275\u0275text(186, "This folder contains 4 different scss files:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "ul")(188, "li")(189, "p")(190, "strong");
        \u0275\u0275text(191, "styles.scss");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(192, "p");
        \u0275\u0275text(193, " This file is for adding/importing global styles to the app. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(194, "li")(195, "p")(196, "strong");
        \u0275\u0275text(197, "tailwind.scss");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(198, "p");
        \u0275\u0275text(199, "This is the main Tailwind file for Tailwind utilities.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(200, "li")(201, "p")(202, "strong");
        \u0275\u0275text(203, "vendors.scss");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(204, "p");
        \u0275\u0275text(205, " This file is designed to import 3rd party library css/scss files into the project. Any style here can be overridden by ");
        \u0275\u0275elementStart(206, "em");
        \u0275\u0275text(207, "styles.scss");
        \u0275\u0275elementEnd();
        \u0275\u0275text(208, " file allowing you to overwrite/modify 3rd party library styles and make them visually compatible with your app. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(209, "p");
        \u0275\u0275text(210, " For example, let's say you use ");
        \u0275\u0275elementStart(211, "strong");
        \u0275\u0275text(212, "FullCalendar");
        \u0275\u0275elementEnd();
        \u0275\u0275text(213, " 3rd party library. You use the ");
        \u0275\u0275elementStart(214, "em");
        \u0275\u0275text(215, "vendors.scss");
        \u0275\u0275elementEnd();
        \u0275\u0275text(216, " file to import default styles of the FullCalendar into your project so it looks and works correctly. Then, you can add custom styles to the ");
        \u0275\u0275elementStart(217, "em");
        \u0275\u0275text(218, "styles.scss");
        \u0275\u0275elementEnd();
        \u0275\u0275text(219, " file to overwrite those default styles to make FullCalendar compatible with your app's design. ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(2);
        \u0275\u0275property("appearance", "border")("type", "info");
        \u0275\u0275advance(21);
        \u0275\u0275property("dataSource", ctx.generalTree.dataSource)("treeControl", ctx.generalTree.treeControl);
        \u0275\u0275advance(2);
        \u0275\u0275property("matTreeNodeDefWhen", ctx.hasChild);
        \u0275\u0275advance(30);
        \u0275\u0275property("dataSource", ctx.appTree.dataSource)("treeControl", ctx.appTree.treeControl);
        \u0275\u0275advance(2);
        \u0275\u0275property("matTreeNodeDefWhen", ctx.hasChild);
        \u0275\u0275advance(51);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c04));
        \u0275\u0275advance(15);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c1));
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatIconButton,
      FuseAlertComponent,
      MatTreeModule,
      MatTreeNodeDef,
      MatTreeNodePadding,
      MatTreeNodeToggle,
      MatTree,
      MatTreeNode,
      RouterLink
    ], styles: ['/* angular:styles/component:scss;0d88097d37bec241efc2249957e30e2a1d7601f0a43df0f3d0cd9f9777f99b2a;D:/Code/buzzripper/dyvenix-1/app1.client/src/app/modules/admin/docs/guides/development/directory-structure/directory-structure.ts */\ndirectory-structure .mat-tree {\n  font-family:\n    "IBM Plex Mono",\n    Menlo,\n    Monaco,\n    Consolas,\n    "Liberation Mono",\n    "Courier New",\n    monospace;\n}\ndirectory-structure .mat-tree-node {\n  min-height: 32px;\n}\ndirectory-structure .mat-tree .mat-icon-button {\n  width: 32px;\n  height: 32px;\n  min-height: 32px;\n  line-height: 32px;\n  margin-right: 8px;\n}\n/*# sourceMappingURL=directory-structure.css.map */\n'], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DirectoryStructureComponent, { className: "DirectoryStructureComponent", filePath: "src/app/modules/admin/docs/guides/development/directory-structure/directory-structure.ts", lineNumber: 62 });
})();

// src/app/modules/admin/docs/guides/development/starter-kit/starter-kit.ts
var StarterKitComponent = class _StarterKitComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function StarterKitComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StarterKitComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StarterKitComponent, selectors: [["starter-kit"]], decls: 34, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"]], template: function StarterKitComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Development");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Starter Kit ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function StarterKitComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " Starter kit is the bare minimum version of the Fuse. All the Demo applications and pages are stripped from it and includes only the essential components and modules for you to start building your app. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, " It's ");
        \u0275\u0275elementStart(25, "strong");
        \u0275\u0275text(26, "strongly recommended");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " that you build your app on top of the ");
        \u0275\u0275elementStart(28, "strong");
        \u0275\u0275text(29, "Starter kit");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " rather then the ");
        \u0275\u0275elementStart(31, "em");
        \u0275\u0275text(32, "Demo");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, ". Demo includes lots of sample content and some of them would never be used together (like multiple Pricing page designs, multiple Auth page designs etc.) which can slow down your app a lot more than usual. ");
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
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StarterKitComponent, { className: "StarterKitComponent", filePath: "src/app/modules/admin/docs/guides/development/starter-kit/starter-kit.ts", lineNumber: 11 });
})();

// src/app/modules/admin/docs/guides/development/updating/updating.ts
var UpdatingComponent = class _UpdatingComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function UpdatingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UpdatingComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpdatingComponent, selectors: [["updating"]], decls: 49, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"]], template: function UpdatingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Development");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Updating ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function UpdatingComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " Since Fuse is built as a ");
        \u0275\u0275elementStart(23, "em");
        \u0275\u0275text(24, "Starter kit");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " and an ");
        \u0275\u0275elementStart(26, "em");
        \u0275\u0275text(27, "Admin template");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, ", there is no easy or a set way of updating it like a normal library. Though it's completely up to you to keep the Fuse updated, there are two key points that might help you with the task: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "ul")(30, "li")(31, "p");
        \u0275\u0275text(32, " Do ");
        \u0275\u0275elementStart(33, "strong");
        \u0275\u0275text(34, "NOT");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " touch the ");
        \u0275\u0275elementStart(36, "strong");
        \u0275\u0275text(37, "@fuse");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " folder unless you absolutely have to. Keeping that folder intact is the key to have easier upgrades. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "li")(40, "p");
        \u0275\u0275text(41, " Fork the original Fuse repo from its Github and build on top of that. That way, you can merge the changes from the origin repo as updates released. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "p");
        \u0275\u0275text(43, " If you follow these two rules, it will make the updating process a little bit more easier. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p");
        \u0275\u0275text(45, " The best way of updating Fuse is to compare the latest version with your version using Github's compare feature. After that, you can either manually patch your setup or merge (and resolve conflicts) through Github. Every release is tagged and available under the ");
        \u0275\u0275elementStart(46, "strong");
        \u0275\u0275text(47, "Releases");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " tab of Fuse's Github repo. ");
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
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpdatingComponent, { className: "UpdatingComponent", filePath: "src/app/modules/admin/docs/guides/development/updating/updating.ts", lineNumber: 11 });
})();

// src/app/modules/admin/docs/guides/getting-started/installation/installation.ts
var InstallationComponent = class _InstallationComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function InstallationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InstallationComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InstallationComponent, selectors: [["installation"]], decls: 99, vars: 7, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], [3, "appearance", "type"], [1, "prose", "prose-sm", "max-w-none", "text-current"], ["fuse-highlight", "", "lang", "bash"]], template: function InstallationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Getting Started");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Installation ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function InstallationComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " Before you begin installing Fuse, prepare a folder where you can unzip the downloaded .zip file. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h2");
        \u0275\u0275text(24, "1. Choose which version you want to install");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, " When you unzip the .zip file you have downloaded from Themeforest, you will find 2 additional .zip files along with other files. One of those .zip files is the ");
        \u0275\u0275elementStart(27, "strong");
        \u0275\u0275text(28, "Demo");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " version, and the other one is the ");
        \u0275\u0275elementStart(30, "strong");
        \u0275\u0275text(31, "Starter");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, " version: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "ul")(34, "li")(35, "p")(36, "strong");
        \u0275\u0275text(37, "Demo ");
        \u0275\u0275elementStart(38, "code");
        \u0275\u0275text(39, "fuse-demo-vX.X.X.zip");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(40, "p");
        \u0275\u0275text(41, " This .zip file includes the Demo version which includes all the applications, pages and UI sections from the Demo application. This version is for referencing purposes only and it should be only used for copying code/modules from it. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p");
        \u0275\u0275text(43, " Do ");
        \u0275\u0275elementStart(44, "strong");
        \u0275\u0275text(45, "NOT");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, " use the Demo version to build your app, otherwise you will have a lot of unnecessary weight to your app right from the start and it will provide a poor development experience. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "li")(48, "p")(49, "strong");
        \u0275\u0275text(50, "Starter ");
        \u0275\u0275elementStart(51, "code");
        \u0275\u0275text(52, "fuse-starter-vX.X.X.zip");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "p");
        \u0275\u0275text(54, " This .zip file includes the Starter version which includes all the core components and functionality of Fuse ");
        \u0275\u0275elementStart(55, "em");
        \u0275\u0275text(56, "without");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " the Demo applications, pages and UI sections. ");
        \u0275\u0275elementStart(58, "strong");
        \u0275\u0275text(59, "DO");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " use the Starter version to build your app on top. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "h2");
        \u0275\u0275text(62, "2. Unzip");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "p");
        \u0275\u0275text(64, " After choosing the version you want to install, unzip the .zip file of that version into your workspace directory. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "fuse-alert", 14)(66, "div", 15)(67, "p");
        \u0275\u0275text(68, " You can completely skip the steps #1 and #2 and instead fork the project from Fuse's Github repo directly. This will not only make things simpler, but it will also make any future updates easier as you can merge the changes from the original repo into your fork. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "p");
        \u0275\u0275text(70, " For more information and to access Fuse's Github repo, check out the Fuse's Themeforest description page. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(71, "h2");
        \u0275\u0275text(72, "3. Run the installation command");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "p");
        \u0275\u0275text(74, " Open a console/terminal window and navigate into your workspace directory. You must be at the same folder with the ");
        \u0275\u0275elementStart(75, "code");
        \u0275\u0275text(76, "package.json");
        \u0275\u0275elementEnd();
        \u0275\u0275text(77, " file in order to run the commands. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "p");
        \u0275\u0275text(79, "To complete the installation, enter the following command:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "textarea", 16);
        \u0275\u0275text(81, "            npm install\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(82, "p");
        \u0275\u0275text(83, " This command will take some time and install all the required libraries into the ");
        \u0275\u0275elementStart(84, "strong");
        \u0275\u0275text(85, "node_modules");
        \u0275\u0275elementEnd();
        \u0275\u0275text(86, " directory in order for you to start developing. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "fuse-alert", 14)(88, "div", 15)(89, "p");
        \u0275\u0275text(90, " After the installation completes, you may see warnings about deprecated packages and security risks. You can safely ignore those messages as Fuse (and other Angular apps) use Node.js for only development environment. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "p");
        \u0275\u0275text(92, " Unless you explicitly add a package to your ");
        \u0275\u0275elementStart(93, "strong");
        \u0275\u0275text(94, "dependencies");
        \u0275\u0275elementEnd();
        \u0275\u0275text(95, " list in ");
        \u0275\u0275elementStart(96, "em");
        \u0275\u0275text(97, "package.json");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " file, they won't be included into the final application therefore they are not going cause any security risks. ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(46);
        \u0275\u0275property("appearance", "border")("type", "info");
        \u0275\u0275advance(22);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InstallationComponent, { className: "InstallationComponent", filePath: "src/app/modules/admin/docs/guides/getting-started/installation/installation.ts", lineNumber: 18 });
})();

// src/app/modules/admin/docs/guides/getting-started/introduction/introduction.ts
var IntroductionComponent = class _IntroductionComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function IntroductionComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _IntroductionComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _IntroductionComponent, selectors: [["introduction"]], decls: 57, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["href", "https://angular.io/", "rel", "noreferrer", "target", "_blank"], ["href", "https://material.angular.io/components", "rel", "noreferrer", "target", "_blank"], ["href", "https://tailwindcss.com/", "rel", "noreferrer", "target", "_blank"]], template: function IntroductionComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Getting Started");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Introduction ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function IntroductionComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "h2");
        \u0275\u0275text(22, "Thank you for choosing Fuse.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, " Fuse is a multi-purpose, multi-layout Angular admin template featuring custom made Application and Page layouts, UI elements and UX best practices. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, " In this documentation, you will find starter guides and API documentation of the custom made Fuse components. ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(27, "hr");
        \u0275\u0275elementStart(28, "h2");
        \u0275\u0275text(29, "Main libraries");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p");
        \u0275\u0275text(31, " Fuse powered by 3 main libraries; ");
        \u0275\u0275elementStart(32, "strong");
        \u0275\u0275text(33, "Angular");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, ", ");
        \u0275\u0275elementStart(35, "strong");
        \u0275\u0275text(36, "Angular Material");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, " and ");
        \u0275\u0275elementStart(38, "strong");
        \u0275\u0275text(39, "TailwindCSS");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "ul")(42, "li")(43, "a", 14);
        \u0275\u0275text(44, "Angular ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "p");
        \u0275\u0275text(46, " It is the core of the Fuse. This version only works with Angular. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(47, "li")(48, "a", 15);
        \u0275\u0275text(49, "Angular Material ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "p");
        \u0275\u0275text(51, " Provides the main UI components such as Buttons, Form fields, Tabs, Progress bars and more. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "li")(53, "a", 16);
        \u0275\u0275text(54, "TailwindCSS ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(55, "p");
        \u0275\u0275text(56, " It is the core of the style configuration and it provides utility classes for almost every CSS rule available. ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
      }
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(IntroductionComponent, { className: "IntroductionComponent", filePath: "src/app/modules/admin/docs/guides/getting-started/introduction/introduction.ts", lineNumber: 11 });
})();

// src/app/modules/admin/docs/guides/getting-started/prerequisites/prerequisites.ts
var PrerequisitesComponent = class _PrerequisitesComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function PrerequisitesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PrerequisitesComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PrerequisitesComponent, selectors: [["prerequisites"]], decls: 48, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["href", "https://nodejs.org/", "rel", "noreferrer", "target", "_blank"], ["href", "https://cli.angular.io/", "rel", "noreferrer", "target", "_blank"], ["fuse-highlight", "", "lang", "bash"]], template: function PrerequisitesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Getting Started");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Prerequisites ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function PrerequisitesComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " Before you begin developing with Fuse, make sure your development environment includes Node.js, npm and Angular CLI. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h2");
        \u0275\u0275text(24, "1. Node.js");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, " To install Node.js, go to ");
        \u0275\u0275elementStart(27, "a", 14);
        \u0275\u0275text(28, "Node.js ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " and install the active LTS version. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "h2");
        \u0275\u0275text(31, "2. npm");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "p");
        \u0275\u0275text(33, " To download and install npm packages, you must have the npm package manager. This guide uses the npm client command line interface, which is installed with Node.js by default. To check that you have the npm client installed, run ");
        \u0275\u0275elementStart(34, "code");
        \u0275\u0275text(35, "npm -v");
        \u0275\u0275elementEnd();
        \u0275\u0275text(36, " in a terminal/console window. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "h2");
        \u0275\u0275text(38, "3. Angular CLI");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "p");
        \u0275\u0275text(40, " You will use the ");
        \u0275\u0275elementStart(41, "a", 15);
        \u0275\u0275text(42, "Angular CLI ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(43, " to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "p");
        \u0275\u0275text(45, " To install the CLI using npm, open a terminal/console window and enter the following command: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "textarea", 16);
        \u0275\u0275text(47, "            npm install -g @angular/cli\n        ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PrerequisitesComponent, { className: "PrerequisitesComponent", filePath: "src/app/modules/admin/docs/guides/getting-started/prerequisites/prerequisites.ts", lineNumber: 12 });
})();

// src/app/modules/admin/docs/guides/getting-started/serving/serving.ts
var ServingComponent = class _ServingComponent {
  /**
   * Constructor
   */
  constructor(_guidesComponent) {
    this._guidesComponent = _guidesComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._guidesComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function ServingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ServingComponent)(\u0275\u0275directiveInject(GuidesComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServingComponent, selectors: [["serving"]], decls: 64, vars: 5, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "bash"], [1, "mb-12"], [3, "appearance", "type"]], template: function ServingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Guides");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Getting Started");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Serving ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ServingComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " After the installation process finishes, run the following command while still in your workspace directory: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "textarea", 14);
        \u0275\u0275text(24, "            ng serve --open\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, " The ");
        \u0275\u0275elementStart(27, "code");
        \u0275\u0275text(28, "ng serve");
        \u0275\u0275elementEnd();
        \u0275\u0275text(29, " command launches the server, watches your files, and rebuilds the app as you make changes to those files. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "p");
        \u0275\u0275text(31, " The ");
        \u0275\u0275elementStart(32, "code");
        \u0275\u0275text(33, "--open");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " (or just ");
        \u0275\u0275elementStart(35, "code");
        \u0275\u0275text(36, "-o");
        \u0275\u0275elementEnd();
        \u0275\u0275text(37, ") option automatically opens your browser to http://localhost:4200/. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "h2");
        \u0275\u0275text(39, "Alternate command");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "textarea", 14);
        \u0275\u0275text(41, "            npm start\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "p", 15);
        \u0275\u0275text(43, "Alias for ");
        \u0275\u0275elementStart(44, "code");
        \u0275\u0275text(45, "ng serve --open");
        \u0275\u0275elementEnd();
        \u0275\u0275text(46, ".");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "fuse-alert", 16);
        \u0275\u0275text(48, " If you are getting error messages that includes keywords like ");
        \u0275\u0275elementStart(49, "strong");
        \u0275\u0275text(50, "HEAP");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, ", ");
        \u0275\u0275elementStart(52, "strong");
        \u0275\u0275text(53, "JS stack tree");
        \u0275\u0275elementEnd();
        \u0275\u0275text(54, ", ");
        \u0275\u0275elementStart(55, "strong");
        \u0275\u0275text(56, "out of memory");
        \u0275\u0275elementEnd();
        \u0275\u0275text(57, " while trying to run ");
        \u0275\u0275elementStart(58, "code");
        \u0275\u0275text(59, "ng serve --open");
        \u0275\u0275elementEnd();
        \u0275\u0275text(60, " or ");
        \u0275\u0275elementStart(61, "code");
        \u0275\u0275text(62, "npm start");
        \u0275\u0275elementEnd();
        \u0275\u0275text(63, " commands, you may have an older Node.js version, try updating your Node.js to the latest LTS version and then try again. ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(28);
        \u0275\u0275property("appearance", "border")("type", "info");
      }
    }, dependencies: [
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatIconButton,
      FuseHighlightComponent,
      FuseAlertComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServingComponent, { className: "ServingComponent", filePath: "src/app/modules/admin/docs/guides/getting-started/serving/serving.ts", lineNumber: 18 });
})();

// src/app/modules/admin/docs/guides/guides.routes.ts
var guides_routes_default = [
  {
    path: "",
    component: GuidesComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "getting-started"
      },
      {
        path: "getting-started",
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "introduction"
          },
          {
            path: "introduction",
            component: IntroductionComponent
          },
          {
            path: "prerequisites",
            component: PrerequisitesComponent
          },
          {
            path: "installation",
            component: InstallationComponent
          },
          {
            path: "serving",
            component: ServingComponent
          }
        ]
      },
      {
        path: "development",
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "structure"
          },
          {
            path: "directory-structure",
            component: DirectoryStructureComponent
          },
          {
            path: "component-structure",
            component: ComponentStructureComponent
          },
          {
            path: "starter-kit",
            component: StarterKitComponent
          },
          {
            path: "deployment",
            component: DeploymentComponent
          },
          {
            path: "updating",
            component: UpdatingComponent
          }
        ]
      },
      {
        path: "customization",
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "theme-layouts"
          },
          {
            path: "theme-layouts",
            component: ThemeLayoutsComponent
          },
          {
            path: "page-layouts",
            component: PageLayoutsComponent
          },
          {
            path: "tailwindcss",
            component: TailwindCSSComponent
          },
          {
            path: "theming",
            component: ThemingComponent
          },
          {
            path: "component-theming",
            component: ComponentThemingComponent
          },
          {
            path: "splash-screen",
            component: SplashScreenCustomizationComponent
          },
          {
            path: "multi-language",
            component: MultiLanguageCustomizationComponent
          }
        ]
      },
      {
        path: "authentication",
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "jwt"
          },
          {
            path: "jwt",
            component: JwtComponent
          }
        ]
      }
    ]
  }
];
export {
  guides_routes_default as default
};
//# sourceMappingURL=chunk-GJRKTCWB.js.map
