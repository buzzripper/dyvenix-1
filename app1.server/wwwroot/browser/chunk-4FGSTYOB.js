import {
  FuseCardComponent
} from "./chunk-QW3RDUMU.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-JPDBWMRG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5AHQJJ5Y.js";
import "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import "./chunk-HKG3E5RP.js";
import "./chunk-WH7F4HUX.js";
import "./chunk-JL6CBEU5.js";
import {
  NgClass
} from "./chunk-M6AYR6A2.js";
import {
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵproperty,
  ɵɵpureFunction2,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/pages/pricing/simple/simple.component.ts
var _c0 = (a0, a1) => ({ "bg-card pointer-events-none shadow": a0, "bg-transparent": a1 });
function PricingSimpleComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $6 ");
  }
}
function PricingSimpleComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $9 ");
  }
}
function PricingSimpleComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "billed yearly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "b");
    \u0275\u0275text(4, "$9.00");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " billed monthly");
    \u0275\u0275elementEnd();
  }
}
function PricingSimpleComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "billed monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "b");
    \u0275\u0275text(4, "$6.00");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " billed yearly");
    \u0275\u0275elementEnd();
  }
}
function PricingSimpleComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $12 ");
  }
}
function PricingSimpleComponent_Conditional_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $15 ");
  }
}
function PricingSimpleComponent_Conditional_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "billed yearly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "b");
    \u0275\u0275text(4, "$15.00");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " billed monthly");
    \u0275\u0275elementEnd();
  }
}
function PricingSimpleComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "billed monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "b");
    \u0275\u0275text(4, "$12.00");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " billed yearly");
    \u0275\u0275elementEnd();
  }
}
function PricingSimpleComponent_Conditional_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $49 ");
  }
}
function PricingSimpleComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $69 ");
  }
}
function PricingSimpleComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "billed yearly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "b");
    \u0275\u0275text(4, "$69.00");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " billed monthly");
    \u0275\u0275elementEnd();
  }
}
function PricingSimpleComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1, "billed monthly");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div")(3, "b");
    \u0275\u0275text(4, "$49.00");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " billed yearly");
    \u0275\u0275elementEnd();
  }
}
var PricingSimpleComponent = class _PricingSimpleComponent {
  /**
   * Constructor
   */
  constructor() {
    this.yearlyBilling = true;
  }
  static {
    this.\u0275fac = function PricingSimpleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PricingSimpleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingSimpleComponent, selectors: [["pricing-simple"]], decls: 208, vars: 29, consts: [[1, "relative", "flex", "min-w-0", "flex-auto", "flex-col", "overflow-hidden"], [1, "relative", "overflow-hidden", "px-6", "pb-12", "pt-8", "sm:px-16", "sm:pb-24", "sm:pt-20"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "-z-1", "absolute", "inset-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "opacity-40", "text-gray-200", "dark:text-gray-800"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], [1, "flex", "flex-col", "items-center"], [1, "text-xl", "font-semibold"], [1, "mt-1", "text-center", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight", "sm:text-7xl"], [1, "text-secondary", "mt-3", "text-center", "tracking-tight", "sm:text-2xl"], [1, ""], [1, "mt-8", "flex", "items-center", "overflow-hidden", "rounded-full", "bg-gray-200", "p-0.5", "dark:bg-gray-700", "sm:mt-16"], ["mat-flat-button", "", "disableRipple", "", 1, "px-6", 3, "click", "ngClass"], [1, "mt-10", "flex", "justify-center", "sm:mt-20"], [1, "w-full", "max-w-sm", "md:max-w-7xl"], [1, "grid", "grid-cols-1", "gap-y-6", "md:grid-cols-2", "md:gap-x-6", "lg:grid-cols-3", "lg:gap-x-0", "lg:gap-y-0"], [1, "max-w-sm", "flex-col", "items-center", "p-8", "text-center", "sm:px-10", "sm:py-12", "md:max-w-none", "lg:my-16", "lg:rounded-none", "lg:rounded-l-2xl"], [1, "text-4xl", "font-bold", "leading-tight", "tracking-tight"], [1, "mt-8", "flex", "items-baseline", "whitespace-nowrap"], [1, "text-6xl", "font-semibold", "leading-tight", "tracking-tight"], [1, "text-secondary", "ml-2", "text-2xl"], [1, "text-secondary", "mt-2", "flex", "flex-col"], [1, "mt-8", "space-y-2"], ["mat-stroked-button", "", 1, "fuse-mat-button-large", "mt-10", "w-full", 3, "color"], [1, "relative", "max-w-sm", "flex-col", "items-center", "p-8", "text-center", "sm:px-10", "sm:py-12", "md:max-w-none", "lg:z-99", "lg:overflow-visible", "lg:pb-28", "lg:shadow-2xl"], [1, "flex", "h-8", "items-center", "rounded-full", "bg-primary-100", "px-8", "text-center", "font-semibold", "leading-none", "text-on-primary-100"], [1, "mt-8", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "mt-10", "w-full", 3, "color"], [1, "max-w-sm", "flex-col", "items-center", "p-8", "text-center", "sm:px-10", "sm:py-12", "md:max-w-none", "lg:my-16", "lg:rounded-none", "lg:rounded-r-2xl"], [1, "flex", "flex-col", "items-center", "bg-white", "px-6", "py-10", "dark:bg-gray-800", "sm:px-16", "sm:pb-20", "sm:pt-18"], [1, "w-full", "max-w-7xl"], [1, "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "text-secondary", "mt-2", "max-w-xl", "text-xl"], [1, "mt-12", "grid", "w-full", "grid-cols-1", "gap-x-6", "gap-y-12", "sm:mt-16", "sm:grid-cols-2", "lg:grid-cols-3", "lg:gap-16"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded", "bg-primary"], [1, "text-white", 3, "svgIcon"], [1, "mt-4", "text-xl", "font-medium"], [1, "text-secondary", "mt-2", "leading-6"], [1, "bg-primary-600", "px-6", "py-10", "text-on-primary-600", "sm:px-16", "sm:py-12"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "items-center", "text-center"], [1, "text-3xl", "font-extrabold", "leading-6", "sm:text-4xl", "sm:text-5xl", "sm:leading-10"], [1, "mt-2", "text-3xl", "font-extrabold", "leading-6", "text-black", "text-opacity-70", "sm:text-4xl", "sm:text-5xl", "sm:leading-10"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "mt-8", "bg-white", "px-12", "text-primary-800"], [1, "text-lg"], [1, "flex", "flex-col", "items-center", "bg-gray-50", "px-6", "pb-8", "pt-12", "dark:bg-gray-800", "sm:px-16", "sm:pb-20", "sm:pt-18"], [1, "mt-12", "grid", "w-full", "grid-cols-1", "gap-x-6", "gap-y-12", "sm:mt-16", "sm:grid-cols-2", "lg:gap-x-16"], [1, "mt-2"]], template: function PricingSimpleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 2)(3, "g", 3);
        \u0275\u0275element(4, "circle", 4)(5, "circle", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 6)(7, "h2", 7);
        \u0275\u0275text(8, "PRICING");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275text(10, " Take control of your productivity ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10);
        \u0275\u0275text(13, "Start small and free, upgrade as you go.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 10);
        \u0275\u0275text(15, "Take control of everything.");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 11)(17, "button", 12);
        \u0275\u0275listener("click", function PricingSimpleComponent_Template_button_click_17_listener() {
          return ctx.yearlyBilling = true;
        });
        \u0275\u0275text(18, " Yearly billing ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 12);
        \u0275\u0275listener("click", function PricingSimpleComponent_Template_button_click_19_listener() {
          return ctx.yearlyBilling = false;
        });
        \u0275\u0275text(20, " Monthly billing ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "fuse-card", 16)(25, "div", 17);
        \u0275\u0275text(26, " Personal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 18)(28, "div", 19);
        \u0275\u0275template(29, PricingSimpleComponent_Conditional_29_Template, 1, 0)(30, PricingSimpleComponent_Conditional_30_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 20);
        \u0275\u0275text(32, " / month ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 21);
        \u0275\u0275template(34, PricingSimpleComponent_Conditional_34_Template, 6, 0)(35, PricingSimpleComponent_Conditional_35_Template, 6, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 22)(37, "div")(38, "b");
        \u0275\u0275text(39, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275text(40, " projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div")(42, "b");
        \u0275\u0275text(43, "5GB");
        \u0275\u0275elementEnd();
        \u0275\u0275text(44, " storage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div");
        \u0275\u0275text(46, "Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div");
        \u0275\u0275text(48, "Free mobile app");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "div");
        \u0275\u0275text(50, "Access to forums");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "button", 23);
        \u0275\u0275text(52, " Start your trial ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "fuse-card", 24)(54, "div", 25);
        \u0275\u0275text(55, " POPULAR ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 26);
        \u0275\u0275text(57, " Premium ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "div", 18)(59, "div", 19);
        \u0275\u0275template(60, PricingSimpleComponent_Conditional_60_Template, 1, 0)(61, PricingSimpleComponent_Conditional_61_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 20);
        \u0275\u0275text(63, " / month ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(64, "div", 21);
        \u0275\u0275template(65, PricingSimpleComponent_Conditional_65_Template, 6, 0)(66, PricingSimpleComponent_Conditional_66_Template, 6, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 22)(68, "div")(69, "b");
        \u0275\u0275text(70, "Unlimited");
        \u0275\u0275elementEnd();
        \u0275\u0275text(71, " projects");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div")(73, "b");
        \u0275\u0275text(74, "Unlimited");
        \u0275\u0275elementEnd();
        \u0275\u0275text(75, " storage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div");
        \u0275\u0275text(77, "Custom domains");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div");
        \u0275\u0275text(79, "Bulk editing");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "div");
        \u0275\u0275text(81, "12 / 5 support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "button", 27);
        \u0275\u0275text(83, " Start your trial ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "fuse-card", 28)(85, "div", 17);
        \u0275\u0275text(86, " Enterprise ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "div", 18)(88, "div", 19);
        \u0275\u0275template(89, PricingSimpleComponent_Conditional_89_Template, 1, 0)(90, PricingSimpleComponent_Conditional_90_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "div", 20);
        \u0275\u0275text(92, " / month ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 21);
        \u0275\u0275template(94, PricingSimpleComponent_Conditional_94_Template, 6, 0)(95, PricingSimpleComponent_Conditional_95_Template, 6, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 22)(97, "div")(98, "b");
        \u0275\u0275text(99, "Dedicated");
        \u0275\u0275elementEnd();
        \u0275\u0275text(100, " hardware");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "div")(102, "b");
        \u0275\u0275text(103, "%99.9");
        \u0275\u0275elementEnd();
        \u0275\u0275text(104, " uptime");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "div");
        \u0275\u0275text(106, "Advanced analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(107, "div");
        \u0275\u0275text(108, "3rd party integrations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div");
        \u0275\u0275text(110, "24 / 7 support");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(111, "button", 23);
        \u0275\u0275text(112, " Start your trial ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(113, "div", 29)(114, "div", 30)(115, "div")(116, "div", 31);
        \u0275\u0275text(117, " Everything you need to build efficiently ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(118, "div", 32);
        \u0275\u0275text(119, " Start building your app using our tools, be efficient, spend less time with details more time with your business ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(120, "div", 33)(121, "div")(122, "span", 34);
        \u0275\u0275element(123, "mat-icon", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "div", 36);
        \u0275\u0275text(125, " Create and Edit Projects ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 37);
        \u0275\u0275text(127, " Create and edit projects, upload images via drag drop, add categories, add custom fields, create interactive forms and more. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(128, "div")(129, "span", 34);
        \u0275\u0275element(130, "mat-icon", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(131, "div", 36);
        \u0275\u0275text(132, " Search and Filter ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "div", 37);
        \u0275\u0275text(134, " Search and filter within the projects, categories and custom fields. Save search and filter details for easy access. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "div")(136, "span", 34);
        \u0275\u0275element(137, "mat-icon", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 36);
        \u0275\u0275text(139, " Real Time Updates ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(140, "div", 37);
        \u0275\u0275text(141, " Real time updates that doesn't require page reload. Lean back and watch the changes happen in real time. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(142, "div")(143, "span", 34);
        \u0275\u0275element(144, "mat-icon", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "div", 36);
        \u0275\u0275text(146, "Meta Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "div", 37);
        \u0275\u0275text(148, " Add and remove meta information to custom fields to differentiate them in reports and analytics results, use them for detailed reports. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "div")(150, "span", 34);
        \u0275\u0275element(151, "mat-icon", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "div", 36);
        \u0275\u0275text(153, " Pre-rendered Results ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "div", 37);
        \u0275\u0275text(155, " Pre-render results to make reports and analytics more accessible by screen readers and other accessibility tools. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(156, "div")(157, "span", 34);
        \u0275\u0275element(158, "mat-icon", 35);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(159, "div", 36);
        \u0275\u0275text(160, "Simple Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "div", 37);
        \u0275\u0275text(162, " Simple analytics with no unnecessary data flow or weight. More readable results with less data consumption. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(163, "div", 38)(164, "div", 39)(165, "div", 40);
        \u0275\u0275text(166, " Boost your productivity. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "div", 41);
        \u0275\u0275text(168, " Start using Fuse today. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(169, "button", 42)(170, "span", 43);
        \u0275\u0275text(171, "Sign up for free");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(172, "div", 44)(173, "div", 30)(174, "div")(175, "div", 31);
        \u0275\u0275text(176, " Frequently asked questions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(177, "div", 32);
        \u0275\u0275text(178, " Here are the most frequently asked questions you may check before getting started ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(179, "div", 45)(180, "div")(181, "div", 7);
        \u0275\u0275text(182, " What is the duration of the free trial? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(183, "div", 37)(184, "p");
        \u0275\u0275text(185, " Our app is free to try for 14 days, if you want more, you can provide payment details which will extend your trial to 30 days providing you an extra 16 more days to try our app. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(186, "div")(187, "div", 7);
        \u0275\u0275text(188, " Are there discounts for non-profits or educational use? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "div", 37)(190, "p");
        \u0275\u0275text(191, " Yes, our Personal and Premium packages are free for non-profits and educational use. E-mail your details to us after starting your Free Trial and we will upgrade your account if you qualify. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(192, "div")(193, "div", 7);
        \u0275\u0275text(194, " What is the storage is for? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(195, "div", 37)(196, "p");
        \u0275\u0275text(197, " Since we provide an extremely detailed reporting and analytics tool, they require quite a bit storage space. For average use, you don\u2019t have to worry about running out of space since the Personal package limits the projects you can have. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(198, "p", 46);
        \u0275\u0275text(199, " For some reason if you run out of space, contact us and we will see what can be done about it and make sure you are not generating unnecessary reports and/or analytics data. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(200, "div")(201, "div", 7);
        \u0275\u0275text(202, " What happens if I\u2019m not satisfied? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "div", 37)(204, "p");
        \u0275\u0275text(205, " If you are still in your free trial period, you can cancel your account at anytime with a single click of a button. If you already paid for your first month, we also offer 30-day money-back guarantee with no questions asked. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "p", 46);
        \u0275\u0275text(207, " After first month, you can still cancel your account at any time but we will calculate the amount that corresponds to days you have been using our app for that month and refund only the remaining amount. ");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(23, _c0, ctx.yearlyBilling, !ctx.yearlyBilling));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(26, _c0, !ctx.yearlyBilling, ctx.yearlyBilling));
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.yearlyBilling ? 29 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 30 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.yearlyBilling ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 35 : -1);
        \u0275\u0275advance(16);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.yearlyBilling ? 60 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 61 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.yearlyBilling ? 65 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 66 : -1);
        \u0275\u0275advance(16);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(7);
        \u0275\u0275conditional(ctx.yearlyBilling ? 89 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 90 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.yearlyBilling ? 94 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 95 : -1);
        \u0275\u0275advance(16);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(12);
        \u0275\u0275property("svgIcon", "heroicons_outline:pencil-square");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:funnel");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-path");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:tag");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:document-text");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:chart-bar-square");
      }
    }, dependencies: [MatButtonModule, MatButton, NgClass, FuseCardComponent, MatIconModule, MatIcon], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingSimpleComponent, { className: "PricingSimpleComponent", filePath: "src/app/modules/admin/pages/pricing/simple/simple.component.ts", lineNumber: 18 });
})();

// src/app/modules/admin/pages/pricing/simple/simple.routes.ts
var simple_routes_default = [
  {
    path: "",
    component: PricingSimpleComponent
  }
];
export {
  simple_routes_default as default
};
//# sourceMappingURL=chunk-4FGSTYOB.js.map
