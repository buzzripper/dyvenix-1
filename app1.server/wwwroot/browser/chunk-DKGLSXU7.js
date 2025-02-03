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
import "./chunk-OF77XAQN.js";
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
import "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import "./chunk-HKG3E5RP.js";
import "./chunk-WH7F4HUX.js";
import {
  RouterOutlet
} from "./chunk-WTEW5YKI.js";
import "./chunk-JL6CBEU5.js";
import "./chunk-M6AYR6A2.js";
import {
  ChangeDetectorRef,
  Subject,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵtext,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/ui/other-components/other-components.component.ts
var _c0 = ["matDrawer"];
var OtherComponentsComponent = class _OtherComponentsComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _fuseMediaWatcherService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this._unsubscribeAll = new Subject();
    this.menuData = [
      {
        id: "other-components.common",
        title: "Common",
        subtitle: "Custom made high-level components",
        type: "group",
        children: [
          {
            id: "other-components.common.overview",
            title: "Overview",
            type: "basic",
            link: "/ui/other-components/common/overview"
          },
          {
            id: "other-components.common.languages",
            title: "Languages",
            type: "basic",
            link: "/ui/other-components/common/languages"
          },
          {
            id: "other-components.common.messages",
            title: "Messages",
            type: "basic",
            link: "/ui/other-components/common/messages"
          },
          {
            id: "other-components.common.notifications",
            title: "Notifications",
            type: "basic",
            link: "/ui/other-components/common/notifications"
          },
          {
            id: "other-components.common.quick-chat",
            title: "Quick chat",
            type: "basic",
            link: "/ui/other-components/common/quick-chat"
          },
          {
            id: "other-components.common.search",
            title: "Search",
            type: "basic",
            link: "/ui/other-components/common/search"
          },
          {
            id: "other-components.common.shortcuts",
            title: "Shortcuts",
            type: "basic",
            link: "/ui/other-components/common/shortcuts"
          },
          {
            id: "other-components.common.user",
            title: "User",
            type: "basic",
            link: "/ui/other-components/common/user"
          }
        ]
      },
      {
        id: "other-components.divider-1",
        type: "divider"
      },
      {
        id: "other-components.third-party",
        title: "Third party",
        subtitle: "Supported components",
        type: "group",
        children: [
          {
            id: "other-components.third-party.apex-charts",
            title: "ApexCharts",
            type: "basic",
            link: "/ui/other-components/third-party/apex-charts"
          },
          {
            id: "other-components.third-party.quill-editor",
            title: "Quill editor",
            type: "basic",
            link: "/ui/other-components/third-party/quill-editor"
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
    this.\u0275fac = function OtherComponentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OtherComponentsComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FuseMediaWatcherService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OtherComponentsComponent, selectors: [["other-components"]], viewQuery: function OtherComponentsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.matDrawer = _t.first);
      }
    }, decls: 8, vars: 8, consts: [["matDrawer", ""], [1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-hidden"], [1, "h-full", "flex-auto"], [1, "flex", "w-60", "min-w-60", "dark:bg-gray-900", 3, "autoFocus", "mode", "opened"], [3, "navigation", "inner", "mode", "name", "opened"], ["fuseScrollReset", "", 1, "flex", "flex-col"], [1, "flex-auto"]], template: function OtherComponentsComponent_Template(rf, ctx) {
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
        \u0275\u0275property("navigation", ctx.menuData)("inner", true)("mode", "side")("name", "docs-common-components-navigation")("opened", true);
      }
    }, dependencies: [
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      FuseVerticalNavigationComponent,
      FuseScrollResetDirective,
      RouterOutlet
    ], styles: ["/* src/app/modules/admin/ui/other-components/other-components.component.scss */\nother-components fuse-vertical-navigation .fuse-vertical-navigation-wrapper {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=other-components.component.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OtherComponentsComponent, { className: "OtherComponentsComponent", filePath: "src/app/modules/admin/ui/other-components/other-components.component.ts", lineNumber: 33 });
})();

// src/app/modules/admin/ui/other-components/common/languages/languages.component.ts
var LanguagesComponent = class _LanguagesComponent {
  /**
   * Constructor
   */
  constructor(_otherComponentsComponent) {
    this._otherComponentsComponent = _otherComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._otherComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function LanguagesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LanguagesComponent)(\u0275\u0275directiveInject(OtherComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LanguagesComponent, selectors: [["languages"]], decls: 29, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "html"]], template: function LanguagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Other Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Common");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Languages ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function LanguagesComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " This component can be used for changing the language and managing the side effects of changing the active language such as updating the navigation. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h2");
        \u0275\u0275text(24, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, "Here's the basic usage of the component:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "textarea", 14);
        \u0275\u0275text(28, "            <language></language>\n        ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LanguagesComponent, { className: "LanguagesComponent", filePath: "src/app/modules/admin/ui/other-components/common/languages/languages.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/other-components/common/messages/messages.component.ts
var MessagesComponent = class _MessagesComponent {
  /**
   * Constructor
   */
  constructor(_otherComponentsComponent) {
    this._otherComponentsComponent = _otherComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._otherComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function MessagesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MessagesComponent)(\u0275\u0275directiveInject(OtherComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MessagesComponent, selectors: [["messages"]], decls: 150, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "html"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "mt-2", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], [1, "bg-card", "mt-4", "rounded", "shadow"], [1, "text-secondary", "border-b", "px-6", "py-3", "font-mono"], [1, "p-6"]], template: function MessagesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Other Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Common");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Messages ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function MessagesComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " This component can be used to show latest messages in a custom made panel. These messages can be either system wide messages or messages that sent to the currently logged in user from other users. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, "It has some basic features including");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "ul")(26, "li");
        \u0275\u0275text(27, "marking all messages as read");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "li");
        \u0275\u0275text(29, "marking individual messages as read");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "li");
        \u0275\u0275text(31, "removing individual messages from the list");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "h2");
        \u0275\u0275text(33, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "textarea", 14);
        \u0275\u0275text(35, "            <messages></messages>\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h2");
        \u0275\u0275text(37, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "textarea", 15);
        \u0275\u0275text(39, "            export interface Message\n            {\n                id: string;\n                icon?: string;\n                image?: string;\n                title?: string;\n                description?: string;\n                time: string;\n                link?: string;\n                useRouter?: boolean;\n                read: boolean;\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 16)(41, "table")(42, "thead")(43, "tr")(44, "th");
        \u0275\u0275text(45, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "tbody")(49, "tr")(50, "td", 17)(51, "div");
        \u0275\u0275text(52, "id");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "td");
        \u0275\u0275text(54, "Unique id of the message.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "tr")(56, "td", 17)(57, "div");
        \u0275\u0275text(58, "icon");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "td");
        \u0275\u0275text(60, "Icon name for the message.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "tr")(62, "td", 17)(63, "div");
        \u0275\u0275text(64, "image");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "td");
        \u0275\u0275text(66, "Image for the message.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "tr")(68, "td", 17)(69, "div");
        \u0275\u0275text(70, "title");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "td");
        \u0275\u0275text(72, "Title of the message.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "tr")(74, "td", 17)(75, "div");
        \u0275\u0275text(76, "description");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "td");
        \u0275\u0275text(78, "Description of the message.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "tr")(80, "td", 17)(81, "div");
        \u0275\u0275text(82, "time");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "td");
        \u0275\u0275text(84, " String representation of the time of the message (like ISO string). ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "tr")(86, "td", 17)(87, "div");
        \u0275\u0275text(88, "link");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "td");
        \u0275\u0275text(90, "Link of the message.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "tr")(92, "td", 17)(93, "div");
        \u0275\u0275text(94, "useRouter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "td");
        \u0275\u0275text(96, "Whether to use the Router to parse the link.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "tr")(98, "td", 17)(99, "div");
        \u0275\u0275text(100, "read");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "td");
        \u0275\u0275text(102, "Whether the message marked as read.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(103, "h2");
        \u0275\u0275text(104, "Messages Service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "p");
        \u0275\u0275text(106, " The ");
        \u0275\u0275elementStart(107, "code");
        \u0275\u0275text(108, "MessagesService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(109, " can be used to control the messages outside of the ");
        \u0275\u0275elementStart(110, "strong");
        \u0275\u0275text(111, "Messages");
        \u0275\u0275elementEnd();
        \u0275\u0275text(112, " component. This is particularly useful to control the messages from other components for actions like creating, updating or deleting them. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "h3");
        \u0275\u0275text(114, "Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "p");
        \u0275\u0275text(116, " Here's the list of all available methods from ");
        \u0275\u0275elementStart(117, "code");
        \u0275\u0275text(118, "MessagesService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 18)(121, "div", 19);
        \u0275\u0275text(122, " messages$: Observable<Message[]> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 20);
        \u0275\u0275text(124, "Getter for messages.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "div", 18)(126, "div", 19);
        \u0275\u0275text(127, " getAll(): Observable<Message[]> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "div", 20);
        \u0275\u0275text(129, "Get all messages from the server.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "div", 18)(131, "div", 19);
        \u0275\u0275text(132, " create(message: Message): Observable<Message> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "div", 20);
        \u0275\u0275text(134, "Create a new message on the server.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "div", 18)(136, "div", 19);
        \u0275\u0275text(137, " update(id: string, message: Message): Observable<Message> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 20);
        \u0275\u0275text(139, "Update the message on the server.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 18)(141, "div", 19);
        \u0275\u0275text(142, " delete(id: string): Observable<boolean> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "div", 20);
        \u0275\u0275text(144, "Delete the message on the server.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "div", 18)(146, "div", 19);
        \u0275\u0275text(147, " markAllAsRead(): Observable<boolean> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "div", 20);
        \u0275\u0275text(149, "Mark all messages as read.");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MessagesComponent, { className: "MessagesComponent", filePath: "src/app/modules/admin/ui/other-components/common/messages/messages.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/other-components/common/notifications/notifications.component.ts
var NotificationsComponent = class _NotificationsComponent {
  /**
   * Constructor
   */
  constructor(_otherComponentsComponent) {
    this._otherComponentsComponent = _otherComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._otherComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotificationsComponent)(\u0275\u0275directiveInject(OtherComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["notifications"]], decls: 150, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "html"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "mt-2", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], [1, "bg-card", "mt-4", "rounded", "shadow"], [1, "text-secondary", "border-b", "px-6", "py-3", "font-mono"], [1, "p-6"]], template: function NotificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Other Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Common");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Notifications ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " This component can be used to show latest notifications in a custom made panel. These notifications can be either system wide or applications that sent to the currently logged in user from other users. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "p");
        \u0275\u0275text(24, "It has some basic features including");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "ul")(26, "li");
        \u0275\u0275text(27, "marking all notification as read");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "li");
        \u0275\u0275text(29, "marking individual notifications as read");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "li");
        \u0275\u0275text(31, "removing individual notifications from the list");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(32, "h2");
        \u0275\u0275text(33, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "textarea", 14);
        \u0275\u0275text(35, "            <notifications></notifications>\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "h2");
        \u0275\u0275text(37, "Notification");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "textarea", 15);
        \u0275\u0275text(39, "            export interface Notification\n            {\n                id: string;\n                icon?: string;\n                image?: string;\n                title?: string;\n                description?: string;\n                time: string;\n                link?: string;\n                useRouter?: boolean;\n                read: boolean;\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 16)(41, "table")(42, "thead")(43, "tr")(44, "th");
        \u0275\u0275text(45, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "th");
        \u0275\u0275text(47, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(48, "tbody")(49, "tr")(50, "td", 17)(51, "div");
        \u0275\u0275text(52, "id");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "td");
        \u0275\u0275text(54, "Unique id of the notification.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "tr")(56, "td", 17)(57, "div");
        \u0275\u0275text(58, "icon");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "td");
        \u0275\u0275text(60, "Icon name for the notification.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "tr")(62, "td", 17)(63, "div");
        \u0275\u0275text(64, "image");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "td");
        \u0275\u0275text(66, "Image for the notification.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "tr")(68, "td", 17)(69, "div");
        \u0275\u0275text(70, "title");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(71, "td");
        \u0275\u0275text(72, "Title of the notification.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "tr")(74, "td", 17)(75, "div");
        \u0275\u0275text(76, "description");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(77, "td");
        \u0275\u0275text(78, "Description of the notification.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "tr")(80, "td", 17)(81, "div");
        \u0275\u0275text(82, "time");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(83, "td");
        \u0275\u0275text(84, " String representation of the time of the notification (like ISO string). ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(85, "tr")(86, "td", 17)(87, "div");
        \u0275\u0275text(88, "link");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "td");
        \u0275\u0275text(90, "Link of the notification.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(91, "tr")(92, "td", 17)(93, "div");
        \u0275\u0275text(94, "useRouter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(95, "td");
        \u0275\u0275text(96, "Whether to use the Router to parse the link.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(97, "tr")(98, "td", 17)(99, "div");
        \u0275\u0275text(100, "read");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "td");
        \u0275\u0275text(102, "Whether the notification marked as read.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(103, "h2");
        \u0275\u0275text(104, "Notifications Service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "p");
        \u0275\u0275text(106, " The ");
        \u0275\u0275elementStart(107, "code");
        \u0275\u0275text(108, "NotificationsService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(109, " can be used to control the notifications outside of the ");
        \u0275\u0275elementStart(110, "strong");
        \u0275\u0275text(111, "Notifications");
        \u0275\u0275elementEnd();
        \u0275\u0275text(112, " component. This is particularly useful to control the notifications from other components for actions like creating, updating or deleting them. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "h3");
        \u0275\u0275text(114, "Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "p");
        \u0275\u0275text(116, " Here's the list of all available methods from ");
        \u0275\u0275elementStart(117, "code");
        \u0275\u0275text(118, "NotificationsService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(119, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 18)(121, "div", 19);
        \u0275\u0275text(122, " notifications$: Observable<Notification[]> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "div", 20);
        \u0275\u0275text(124, "Getter for notifications.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(125, "div", 18)(126, "div", 19);
        \u0275\u0275text(127, " getAll(): Observable<Notification[]> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "div", 20);
        \u0275\u0275text(129, "Get all notifications from the server.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(130, "div", 18)(131, "div", 19);
        \u0275\u0275text(132, " create(notification: Notification): Observable<Notification> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "div", 20);
        \u0275\u0275text(134, "Create a new notification on the server.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "div", 18)(136, "div", 19);
        \u0275\u0275text(137, " update(id: string, notification: Notification): Observable<Notification> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 20);
        \u0275\u0275text(139, "Update the notification on the server.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 18)(141, "div", 19);
        \u0275\u0275text(142, " delete(id: string): Observable<boolean> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "div", 20);
        \u0275\u0275text(144, "Delete the notification on the server.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "div", 18)(146, "div", 19);
        \u0275\u0275text(147, " markAllAsRead(): Observable<boolean> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(148, "div", 20);
        \u0275\u0275text(149, "Mark all notifications as read.");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src/app/modules/admin/ui/other-components/common/notifications/notifications.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/other-components/common/overview/overview.component.ts
var OverviewComponent = class _OverviewComponent {
  /**
   * Constructor
   */
  constructor(_otherComponentsComponent) {
    this._otherComponentsComponent = _otherComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._otherComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function OverviewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _OverviewComponent)(\u0275\u0275directiveInject(OtherComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _OverviewComponent, selectors: [["overview"]], decls: 69, vars: 7, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], [3, "appearance", "type"], [1, "mt-4", 3, "appearance", "type"]], template: function OverviewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Other Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Common");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Overview ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function OverviewComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " Common components are custom made components that could require heavy modifications depending on the project. These components are mostly related with the layout therefore they are located in the ");
        \u0275\u0275elementStart(23, "code");
        \u0275\u0275text(24, "src/app/layout/common/");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " directory. You can modify them without touching the ");
        \u0275\u0275elementStart(26, "code");
        \u0275\u0275text(27, "@fuse");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, " directory. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "fuse-alert", 14);
        \u0275\u0275text(30, " These components are not very complex and they only provide some basic features. If you wish them to do more, you have to customize them, and that's exactly why they are not located in the ");
        \u0275\u0275elementStart(31, "code");
        \u0275\u0275text(32, "@fuse");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " directory like other components. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "fuse-alert", 15);
        \u0275\u0275text(35, " We may add more features and more custom components in the future if they will be beneficial for everyone. Components that are too specific to a project won't be included as custom components into Fuse! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "p");
        \u0275\u0275text(37, "Currently, there are five common components;");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "ul")(39, "li")(40, "p")(41, "strong");
        \u0275\u0275text(42, "Messages");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "p");
        \u0275\u0275text(44, "A panel to show latest messages.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(45, "li")(46, "p")(47, "strong");
        \u0275\u0275text(48, "Notifications");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(49, "p");
        \u0275\u0275text(50, "A panel to show latest notifications.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "li")(52, "p")(53, "strong");
        \u0275\u0275text(54, "Search");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "p");
        \u0275\u0275text(56, " An autocomplete search box with proper API endpoint setup. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "li")(58, "p")(59, "strong");
        \u0275\u0275text(60, "Shortcuts");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "p");
        \u0275\u0275text(62, " A user customizable panel to show shortcuts to internal/external pages. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "li")(64, "p")(65, "strong");
        \u0275\u0275text(66, "User");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "p");
        \u0275\u0275text(68, " A user avatar and menu component to show user related information and actions. ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(10);
        \u0275\u0275property("appearance", "border")("type", "info");
        \u0275\u0275advance(5);
        \u0275\u0275property("appearance", "border")("type", "info");
      }
    }, dependencies: [MatIconModule, MatIcon, MatButtonModule, MatIconButton, FuseAlertComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(OverviewComponent, { className: "OverviewComponent", filePath: "src/app/modules/admin/ui/other-components/common/overview/overview.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/other-components/common/quick-chat/quick-chat.component.ts
var QuickChatComponent = class _QuickChatComponent {
  /**
   * Constructor
   */
  constructor(_otherComponentsComponent) {
    this._otherComponentsComponent = _otherComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._otherComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function QuickChatComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuickChatComponent)(\u0275\u0275directiveInject(OtherComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuickChatComponent, selectors: [["quick-chat"]], decls: 29, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "html"]], template: function QuickChatComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Other Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Common");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Quick Chat ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function QuickChatComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " Quick Chat is a simple component to show a Chat sidebar across the entire layout. You can remove the component from the template file of your preferred layout to remove the Quick Chat completely. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h2");
        \u0275\u0275text(24, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, "Here's the basic usage of the component:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "textarea", 14);
        \u0275\u0275text(28, "            <quick-chat></quick-chat>\n        ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuickChatComponent, { className: "QuickChatComponent", filePath: "src/app/modules/admin/ui/other-components/common/quick-chat/quick-chat.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/other-components/common/search/search.component.ts
var SearchComponent = class _SearchComponent {
  /**
   * Constructor
   */
  constructor(_otherComponentsComponent) {
    this._otherComponentsComponent = _otherComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._otherComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function SearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SearchComponent)(\u0275\u0275directiveInject(OtherComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SearchComponent, selectors: [["search"]], decls: 94, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], [1, "whitespace-nowrap"]], template: function SearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Other Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Common");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Search ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function SearchComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " This component can be used for searching. It will make API calls as you start typing the search query into the search field and show the results in the ");
        \u0275\u0275elementStart(23, "em");
        \u0275\u0275text(24, "Autocomplete");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " panel. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "h2");
        \u0275\u0275text(27, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, "Here's the basic usage of the component:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "textarea", 14);
        \u0275\u0275text(31, `            <search [appearance]="'bar'"></search>
        `);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "h2");
        \u0275\u0275text(33, "Properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 15)(35, "table")(36, "thead")(37, "tr")(38, "th");
        \u0275\u0275text(39, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "th");
        \u0275\u0275text(41, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "th");
        \u0275\u0275text(43, "Default");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(44, "tbody")(45, "tr")(46, "td", 16)(47, "div");
        \u0275\u0275text(48, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div");
        \u0275\u0275text(50, "appearance: 'basic' | 'bar'");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "td");
        \u0275\u0275text(52, " Appearance of the search. ");
        \u0275\u0275elementStart(53, "strong");
        \u0275\u0275text(54, "basic");
        \u0275\u0275elementEnd();
        \u0275\u0275text(55, " will show a simple search field. ");
        \u0275\u0275elementStart(56, "strong");
        \u0275\u0275text(57, "bar");
        \u0275\u0275elementEnd();
        \u0275\u0275text(58, " will show a dropdown bar that covers the header. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "td")(60, "code", 17);
        \u0275\u0275text(61, "bar");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(62, "tr")(63, "td", 16)(64, "div");
        \u0275\u0275text(65, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "div");
        \u0275\u0275text(67, "debounce: number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "td");
        \u0275\u0275text(69, " Number of milliseconds to debounce the API calls. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "td")(71, "code", 17);
        \u0275\u0275text(72, "300");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(73, "tr")(74, "td", 16)(75, "div");
        \u0275\u0275text(76, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "div");
        \u0275\u0275text(78, "minLength: number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "td");
        \u0275\u0275text(80, " Minimum length of the search value required before making API calls. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "td")(82, "code", 17);
        \u0275\u0275text(83, "2");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(84, "tr")(85, "td", 16)(86, "div");
        \u0275\u0275text(87, "@Output()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "div");
        \u0275\u0275text(89, "search: EventEmitter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "td");
        \u0275\u0275text(91, "An event emitted after search happened.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "td");
        \u0275\u0275text(93, "-");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SearchComponent, { className: "SearchComponent", filePath: "src/app/modules/admin/ui/other-components/common/search/search.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/other-components/common/shortcuts/shortcuts.component.ts
var ShortcutsComponent = class _ShortcutsComponent {
  /**
   * Constructor
   */
  constructor(_otherComponentsComponent) {
    this._otherComponentsComponent = _otherComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._otherComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function ShortcutsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ShortcutsComponent)(\u0275\u0275directiveInject(OtherComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ShortcutsComponent, selectors: [["shortcuts"]], decls: 118, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "html"], ["fuse-highlight", "", "lang", "typescript"], [1, "bg-card", "mt-2", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], [1, "bg-card", "mt-4", "rounded", "shadow"], [1, "text-secondary", "border-b", "px-6", "py-3", "font-mono"], [1, "p-6"]], template: function ShortcutsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Other Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Common");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Shortcuts ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ShortcutsComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " This component can be used to show shortcuts to applications, pages or external sources. It can be controlled by the user and any changes will be persisted to the backend if setup correctly. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h2");
        \u0275\u0275text(24, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "textarea", 14);
        \u0275\u0275text(26, "            <shortcuts></shortcuts>\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h2");
        \u0275\u0275text(28, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "textarea", 15);
        \u0275\u0275text(30, "            export interface Shortcut\n            {\n                id: string;\n                label: string;\n                description?: string;\n                icon: string;\n                link: string;\n                useRouter: boolean;\n            }\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 16)(32, "table")(33, "thead")(34, "tr")(35, "th");
        \u0275\u0275text(36, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "Description");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(39, "tbody")(40, "tr")(41, "td", 17)(42, "div");
        \u0275\u0275text(43, "id");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(44, "td");
        \u0275\u0275text(45, "Unique id of the shortcut.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "tr")(47, "td", 17)(48, "div");
        \u0275\u0275text(49, "label");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "td");
        \u0275\u0275text(51, "Label of the shortcut.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "tr")(53, "td", 17)(54, "div");
        \u0275\u0275text(55, "description");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "td");
        \u0275\u0275text(57, "Description of the shortcut.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "tr")(59, "td", 17)(60, "div");
        \u0275\u0275text(61, "icon");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "td");
        \u0275\u0275text(63, "Icon name for the shortcut.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "tr")(65, "td", 17)(66, "div");
        \u0275\u0275text(67, "link");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(68, "td");
        \u0275\u0275text(69, "Link of the shortcut.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(70, "tr")(71, "td", 17)(72, "div");
        \u0275\u0275text(73, "useRouter");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "td");
        \u0275\u0275text(75, "Whether to use the Router to parse the link.");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(76, "h2");
        \u0275\u0275text(77, "Shortcuts Service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "p");
        \u0275\u0275text(79, " The ");
        \u0275\u0275elementStart(80, "code");
        \u0275\u0275text(81, "ShortcutsService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(82, " can be used to control the shortcuts outside of the ");
        \u0275\u0275elementStart(83, "strong");
        \u0275\u0275text(84, "Shortcuts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(85, " component. This is particularly useful to control the shortcuts from other components for actions like creating, updating or deleting them. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "h3");
        \u0275\u0275text(87, "Methods");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "p");
        \u0275\u0275text(89, " Here's the list of all available methods from ");
        \u0275\u0275elementStart(90, "code");
        \u0275\u0275text(91, "ShortcutsService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(92, ": ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "div", 18)(94, "div", 19);
        \u0275\u0275text(95, " shortcuts$: Observable<Shortcut[]> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 20);
        \u0275\u0275text(97, "Getter for shortcuts.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(98, "div", 18)(99, "div", 19);
        \u0275\u0275text(100, " getAll(): Observable<Shortcut[]> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "div", 20);
        \u0275\u0275text(102, "Get all shortcuts from the server.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(103, "div", 18)(104, "div", 19);
        \u0275\u0275text(105, " create(shortcut: Shortcut): Observable<Shortcut> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div", 20);
        \u0275\u0275text(107, "Create a new shortcut on the server.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(108, "div", 18)(109, "div", 19);
        \u0275\u0275text(110, " update(id: string, shortcut: Shortcut): Observable<Shortcut> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(111, "div", 20);
        \u0275\u0275text(112, "Update the shortcut on the server.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 18)(114, "div", 19);
        \u0275\u0275text(115, " delete(id: string): Observable<boolean> ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(116, "div", 20);
        \u0275\u0275text(117, "Delete the shortcut on the server.");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ShortcutsComponent, { className: "ShortcutsComponent", filePath: "src/app/modules/admin/ui/other-components/common/shortcuts/shortcuts.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/other-components/common/user/user.component.ts
var UserComponent = class _UserComponent {
  /**
   * Constructor
   */
  constructor(_otherComponentsComponent) {
    this._otherComponentsComponent = _otherComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._otherComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function UserComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserComponent)(\u0275\u0275directiveInject(OtherComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserComponent, selectors: [["user"]], decls: 56, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["fuse-highlight", "", "lang", "html"], [1, "bg-card", "rounded", "px-6", "py-3", "shadow"], [1, "text-secondary", "font-mono", "text-md"], [1, "whitespace-nowrap"]], template: function UserComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Other Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Common");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " User ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function UserComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p");
        \u0275\u0275text(22, " This component can be used for showing information and actions related to the currently logged in user. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h2");
        \u0275\u0275text(24, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "p");
        \u0275\u0275text(26, "Here's the basic usage of the component:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "textarea", 14);
        \u0275\u0275text(28, "            <user></user>\n        ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "h2");
        \u0275\u0275text(30, "Properties");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 15)(32, "table")(33, "thead")(34, "tr")(35, "th");
        \u0275\u0275text(36, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "th");
        \u0275\u0275text(38, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "th");
        \u0275\u0275text(40, "Default");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(41, "tbody")(42, "tr")(43, "td", 16)(44, "div");
        \u0275\u0275text(45, "@Input()");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div");
        \u0275\u0275text(47, "showAvatar: boolean");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "td");
        \u0275\u0275text(49, " Whether to show avatar of the user. If set to ");
        \u0275\u0275elementStart(50, "code");
        \u0275\u0275text(51, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(52, ", a generic icon will be shown. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(53, "td")(54, "code", 17);
        \u0275\u0275text(55, "true");
        \u0275\u0275elementEnd()()()()()()()();
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserComponent, { className: "UserComponent", filePath: "src/app/modules/admin/ui/other-components/common/user/user.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/other-components/third-party/apex-charts/apex-charts.component.ts
var ApexChartsComponent = class _ApexChartsComponent {
  /**
   * Constructor
   */
  constructor(_otherComponentsComponent) {
    this._otherComponentsComponent = _otherComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._otherComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function ApexChartsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ApexChartsComponent)(\u0275\u0275directiveInject(OtherComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ApexChartsComponent, selectors: [["apex-charts"]], decls: 33, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["href", "https://apexcharts.com/", "rel", "noreferrer", "target", "_blank"], ["href", "https://github.com/apexcharts/ng-apexcharts", "rel", "noreferrer", "target", "_blank"]], template: function ApexChartsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Other Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Third Party");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Apex Charts ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function ApexChartsComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "a", 14);
        \u0275\u0275text(23, "ApexCharts ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a modern and interactive open-source charts library. Fuse supports ApexCharts through official ");
        \u0275\u0275elementStart(25, "a", 15);
        \u0275\u0275text(26, "ng-apexcharts ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " component. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, "All charts in the Demo app built using ");
        \u0275\u0275elementStart(30, "em");
        \u0275\u0275text(31, "ApexCharts");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, ".");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ApexChartsComponent, { className: "ApexChartsComponent", filePath: "src/app/modules/admin/ui/other-components/third-party/apex-charts/apex-charts.component.ts", lineNumber: 11 });
})();

// src/app/modules/admin/ui/other-components/third-party/quill-editor/quill-editor.component.ts
var QuillEditorComponent = class _QuillEditorComponent {
  /**
   * Constructor
   */
  constructor(_otherComponentsComponent) {
    this._otherComponentsComponent = _otherComponentsComponent;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle the drawer
   */
  toggleDrawer() {
    this._otherComponentsComponent.matDrawer.toggle();
  }
  static {
    this.\u0275fac = function QuillEditorComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _QuillEditorComponent)(\u0275\u0275directiveInject(OtherComponentsComponent));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuillEditorComponent, selectors: [["quill-editor"]], decls: 39, vars: 3, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "ml-1", "flex", "items-center", "whitespace-nowrap"], [1, "text-secondary", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-primary-500"], [1, "text-secondary", "ml-1"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], ["mat-icon-button", "", 1, "order-first", "-ml-3", "mb-2", "sm:order-last", "sm:mb-0", "sm:ml-0", 3, "click"], [3, "svgIcon"], [1, "prose", "prose-sm", "max-w-3xl", "flex-auto", "p-6", "sm:p-10"], ["href", "https://quilljs.com/", "rel", "noreferrer", "target", "_blank"], ["href", "https://github.com/KillerCodeMonkey/ngx-quill", "rel", "noreferrer", "target", "_blank"]], template: function QuillEditorComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "Documentation");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "Other Components");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 5);
        \u0275\u0275element(12, "mat-icon", 6);
        \u0275\u0275elementStart(13, "span", 8);
        \u0275\u0275text(14, "Third Party");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "div", 9)(16, "h2", 10);
        \u0275\u0275text(17, " Quill Editor ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(18, "button", 11);
        \u0275\u0275listener("click", function QuillEditorComponent_Template_button_click_18_listener() {
          return ctx.toggleDrawer();
        });
        \u0275\u0275element(19, "mat-icon", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 13)(21, "p")(22, "a", 14);
        \u0275\u0275text(23, "Quill ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(24, " is a free, open source WYSIWYG editor built for the modern web. Fuse supports Quill editor through ");
        \u0275\u0275elementStart(25, "a", 15);
        \u0275\u0275text(26, "ngx-quill ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(27, " component. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, " The ");
        \u0275\u0275elementStart(30, "strong");
        \u0275\u0275text(31, "Compose");
        \u0275\u0275elementEnd();
        \u0275\u0275text(32, " dialog from ");
        \u0275\u0275elementStart(33, "strong");
        \u0275\u0275text(34, "Mail");
        \u0275\u0275elementEnd();
        \u0275\u0275text(35, " app includes the ");
        \u0275\u0275elementStart(36, "em");
        \u0275\u0275text(37, "Quill");
        \u0275\u0275elementEnd();
        \u0275\u0275text(38, " editor. ");
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuillEditorComponent, { className: "QuillEditorComponent", filePath: "src/app/modules/admin/ui/other-components/third-party/quill-editor/quill-editor.component.ts", lineNumber: 11 });
})();

// src/app/modules/admin/ui/other-components/other-components.routes.ts
var other_components_routes_default = [
  {
    path: "",
    component: OtherComponentsComponent,
    children: [
      {
        path: "",
        pathMatch: "full",
        redirectTo: "common/overview"
      },
      {
        path: "common",
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "overview"
          },
          {
            path: "overview",
            component: OverviewComponent
          },
          {
            path: "languages",
            component: LanguagesComponent
          },
          {
            path: "messages",
            component: MessagesComponent
          },
          {
            path: "notifications",
            component: NotificationsComponent
          },
          {
            path: "search",
            component: SearchComponent
          },
          {
            path: "quick-chat",
            component: QuickChatComponent
          },
          {
            path: "shortcuts",
            component: ShortcutsComponent
          },
          {
            path: "user",
            component: UserComponent
          }
        ]
      },
      {
        path: "third-party",
        children: [
          {
            path: "",
            pathMatch: "full",
            redirectTo: "apex-charts"
          },
          {
            path: "apex-charts",
            component: ApexChartsComponent
          },
          {
            path: "quill-editor",
            component: QuillEditorComponent
          }
        ]
      }
    ]
  }
];
export {
  other_components_routes_default as default
};
//# sourceMappingURL=chunk-DKGLSXU7.js.map
