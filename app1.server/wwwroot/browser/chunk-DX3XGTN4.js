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

// src/app/modules/admin/pages/pricing/modern/modern.component.ts
var _c0 = (a0, a1) => ({ "bg-card pointer-events-none shadow": a0, "bg-transparent": a1 });
function PricingModernComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $6.00 ");
  }
}
function PricingModernComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $9.00 ");
  }
}
function PricingModernComponent_Conditional_37_Template(rf, ctx) {
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
function PricingModernComponent_Conditional_38_Template(rf, ctx) {
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
function PricingModernComponent_Conditional_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $12.00 ");
  }
}
function PricingModernComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $15.00 ");
  }
}
function PricingModernComponent_Conditional_85_Template(rf, ctx) {
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
function PricingModernComponent_Conditional_86_Template(rf, ctx) {
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
function PricingModernComponent_Conditional_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $49.00 ");
  }
}
function PricingModernComponent_Conditional_128_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $69.00 ");
  }
}
function PricingModernComponent_Conditional_130_Template(rf, ctx) {
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
function PricingModernComponent_Conditional_131_Template(rf, ctx) {
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
var PricingModernComponent = class _PricingModernComponent {
  /**
   * Constructor
   */
  constructor() {
    this.yearlyBilling = true;
  }
  static {
    this.\u0275fac = function PricingModernComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PricingModernComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingModernComponent, selectors: [["pricing-modern"]], decls: 257, vars: 44, consts: [[1, "relative", "flex", "min-w-0", "flex-auto", "flex-col", "overflow-hidden"], [1, "relative", "overflow-hidden", "px-6", "pb-12", "pt-8", "sm:px-16", "sm:pb-24", "sm:pt-20"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "-z-1", "absolute", "inset-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "opacity-40", "text-gray-200", "dark:text-gray-800"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], [1, "flex", "flex-col", "items-center"], [1, "text-xl", "font-semibold"], [1, "mt-1", "text-center", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight", "sm:text-7xl"], [1, "text-secondary", "mt-3", "text-center", "tracking-tight", "sm:text-2xl"], [1, ""], [1, "mt-8", "flex", "items-center", "overflow-hidden", "rounded-full", "bg-gray-200", "p-0.5", "dark:bg-gray-700", "sm:mt-16"], ["mat-flat-button", "", "disableRipple", "", 1, "px-6", 3, "click", "ngClass"], [1, "mt-10", "flex", "justify-center", "sm:mt-20"], [1, "w-full", "max-w-sm", "md:max-w-7xl"], [1, "grid", "grid-cols-1", "gap-y-6", "md:grid-cols-2", "md:gap-x-6", "lg:grid-cols-3", "lg:gap-y-0"], [1, "max-w-sm", "flex-col", "p-6", "sm:px-10", "sm:py-12", "md:max-w-none"], [1, "text-4xl", "font-bold", "leading-tight", "tracking-tight"], [1, "text-secondary", "mt-2", "text-lg", "font-medium", "tracking-tight"], [1, "my-10", "h-1", "w-8", "rounded", "bg-accent"], [1, "flex", "items-baseline", "whitespace-nowrap"], [1, "mr-2", "text-2xl"], [1, "text-6xl", "font-semibold", "leading-tight", "tracking-tight"], [1, "text-secondary", "mt-2", "flex", "flex-col"], ["mat-stroked-button", "", 1, "fuse-mat-button-large", "mt-10", 3, "color"], [1, "mt-12", "flex", "flex-col"], [1, "font-semibold"], [1, "mt-4", "space-y-2"], [1, "flex"], [1, "text-green-600", "icon-size-5", 3, "svgIcon"], [1, "ml-2", "leading-5"], [1, "max-w-sm", "flex-col", "overflow-visible", "p-6", "ring-2", "ring-primary", "sm:px-10", "sm:py-12", "md:max-w-none"], [1, "absolute", "inset-x-0", "-top-4", "flex", "items-center", "justify-center"], [1, "flex", "h-8", "items-center", "rounded-full", "bg-primary", "px-8", "text-center", "font-medium", "leading-none", "text-on-primary"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "mt-10", 3, "color"], [1, "flex", "flex-col", "items-center", "bg-white", "px-6", "py-10", "dark:bg-gray-800", "sm:px-16", "sm:pb-20", "sm:pt-18"], [1, "w-full", "max-w-7xl"], [1, "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "text-secondary", "mt-2", "max-w-xl", "text-xl"], [1, "mt-12", "grid", "w-full", "grid-cols-1", "gap-x-6", "gap-y-12", "sm:mt-16", "sm:grid-cols-2", "lg:grid-cols-3", "lg:gap-16"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded", "bg-primary"], [1, "text-white", 3, "svgIcon"], [1, "mt-4", "text-xl", "font-medium"], [1, "text-secondary", "mt-2", "leading-6"], [1, "bg-primary-600", "px-6", "py-10", "text-on-primary-600", "sm:px-16", "sm:py-12"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "items-center", "text-center"], [1, "text-3xl", "font-extrabold", "leading-6", "sm:text-4xl", "sm:text-5xl", "sm:leading-10"], [1, "mt-2", "text-3xl", "font-extrabold", "leading-6", "text-black", "text-opacity-70", "sm:text-4xl", "sm:text-5xl", "sm:leading-10"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "mt-8", "bg-white", "px-12", "text-primary-800"], [1, "text-lg"], [1, "flex", "flex-col", "items-center", "bg-gray-50", "px-6", "pb-8", "pt-12", "dark:bg-gray-800", "sm:px-16", "sm:pb-20", "sm:pt-18"], [1, "mt-12", "grid", "w-full", "grid-cols-1", "gap-x-6", "gap-y-12", "sm:mt-16", "sm:grid-cols-2", "lg:gap-x-16"], [1, "mt-2"]], template: function PricingModernComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("click", function PricingModernComponent_Template_button_click_17_listener() {
          return ctx.yearlyBilling = true;
        });
        \u0275\u0275text(18, " Yearly billing ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 12);
        \u0275\u0275listener("click", function PricingModernComponent_Template_button_click_19_listener() {
          return ctx.yearlyBilling = false;
        });
        \u0275\u0275text(20, " Monthly billing ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 13)(22, "div", 14)(23, "div", 15)(24, "fuse-card", 16)(25, "div", 17);
        \u0275\u0275text(26, " Personal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 18);
        \u0275\u0275text(28, " Perfect for an individual or a small team starting to get bigger ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "div", 19);
        \u0275\u0275elementStart(30, "div", 20)(31, "div", 21);
        \u0275\u0275text(32, "USD");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 22);
        \u0275\u0275template(34, PricingModernComponent_Conditional_34_Template, 1, 0)(35, PricingModernComponent_Conditional_35_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 23);
        \u0275\u0275template(37, PricingModernComponent_Conditional_37_Template, 6, 0)(38, PricingModernComponent_Conditional_38_Template, 6, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "button", 24);
        \u0275\u0275text(40, " Get Started ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 25)(42, "div", 26);
        \u0275\u0275text(43, " Core features, including: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 27)(45, "div", 28);
        \u0275\u0275element(46, "mat-icon", 29);
        \u0275\u0275elementStart(47, "div", 30)(48, "b");
        \u0275\u0275text(49, "10");
        \u0275\u0275elementEnd();
        \u0275\u0275text(50, " projects ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(51, "div", 28);
        \u0275\u0275element(52, "mat-icon", 29);
        \u0275\u0275elementStart(53, "div", 30)(54, "b");
        \u0275\u0275text(55, "5GB");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " storage ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div", 28);
        \u0275\u0275element(58, "mat-icon", 29);
        \u0275\u0275elementStart(59, "div", 30);
        \u0275\u0275text(60, "Analytics");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 28);
        \u0275\u0275element(62, "mat-icon", 29);
        \u0275\u0275elementStart(63, "div", 30);
        \u0275\u0275text(64, " Free mobile app ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 28);
        \u0275\u0275element(66, "mat-icon", 29);
        \u0275\u0275elementStart(67, "div", 30);
        \u0275\u0275text(68, " Access to forums ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(69, "fuse-card", 31)(70, "div", 32)(71, "div", 33);
        \u0275\u0275text(72, " POPULAR ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(73, "div", 17);
        \u0275\u0275text(74, " Premium ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 18);
        \u0275\u0275text(76, " Perfect for growing teams wanting to be in more control ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(77, "div", 19);
        \u0275\u0275elementStart(78, "div", 20)(79, "div", 21);
        \u0275\u0275text(80, "USD");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(81, "div", 22);
        \u0275\u0275template(82, PricingModernComponent_Conditional_82_Template, 1, 0)(83, PricingModernComponent_Conditional_83_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 23);
        \u0275\u0275template(85, PricingModernComponent_Conditional_85_Template, 6, 0)(86, PricingModernComponent_Conditional_86_Template, 6, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "button", 34);
        \u0275\u0275text(88, " Start a free 14-day trial ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "div", 25)(90, "div", 26);
        \u0275\u0275text(91, " Personal features, plus: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(92, "div", 27)(93, "div", 28);
        \u0275\u0275element(94, "mat-icon", 29);
        \u0275\u0275elementStart(95, "div", 30)(96, "b");
        \u0275\u0275text(97, "Unlimited");
        \u0275\u0275elementEnd();
        \u0275\u0275text(98, " projects ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(99, "div", 28);
        \u0275\u0275element(100, "mat-icon", 29);
        \u0275\u0275elementStart(101, "div", 30)(102, "b");
        \u0275\u0275text(103, "Unlimited");
        \u0275\u0275elementEnd();
        \u0275\u0275text(104, " storage ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(105, "div", 28);
        \u0275\u0275element(106, "mat-icon", 29);
        \u0275\u0275elementStart(107, "div", 30);
        \u0275\u0275text(108, " Custom domains ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "div", 28);
        \u0275\u0275element(110, "mat-icon", 29);
        \u0275\u0275elementStart(111, "div", 30);
        \u0275\u0275text(112, " Bulk editing ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div", 28);
        \u0275\u0275element(114, "mat-icon", 29);
        \u0275\u0275elementStart(115, "div", 30);
        \u0275\u0275text(116, " 12 / 5 support ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(117, "fuse-card", 16)(118, "div", 17);
        \u0275\u0275text(119, " Enterprise ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 18);
        \u0275\u0275text(121, " Perfect for companies wanting advanced tools and support ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(122, "div", 19);
        \u0275\u0275elementStart(123, "div", 20)(124, "div", 21);
        \u0275\u0275text(125, "USD");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 22);
        \u0275\u0275template(127, PricingModernComponent_Conditional_127_Template, 1, 0)(128, PricingModernComponent_Conditional_128_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "div", 23);
        \u0275\u0275template(130, PricingModernComponent_Conditional_130_Template, 6, 0)(131, PricingModernComponent_Conditional_131_Template, 6, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(132, "button", 24);
        \u0275\u0275text(133, " Start a free 7-day trial ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "div", 25)(135, "div", 26);
        \u0275\u0275text(136, " Premium features, plus: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "div", 27)(138, "div", 28);
        \u0275\u0275element(139, "mat-icon", 29);
        \u0275\u0275elementStart(140, "div", 30)(141, "b");
        \u0275\u0275text(142, "Dedicated");
        \u0275\u0275elementEnd();
        \u0275\u0275text(143, " hardware ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "div", 28);
        \u0275\u0275element(145, "mat-icon", 29);
        \u0275\u0275elementStart(146, "div", 30)(147, "b");
        \u0275\u0275text(148, "%99.9");
        \u0275\u0275elementEnd();
        \u0275\u0275text(149, " uptime ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(150, "div", 28);
        \u0275\u0275element(151, "mat-icon", 29);
        \u0275\u0275elementStart(152, "div", 30);
        \u0275\u0275text(153, " Advanced analytics ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(154, "div", 28);
        \u0275\u0275element(155, "mat-icon", 29);
        \u0275\u0275elementStart(156, "div", 30);
        \u0275\u0275text(157, " 3rd party integrations ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div", 28);
        \u0275\u0275element(159, "mat-icon", 29);
        \u0275\u0275elementStart(160, "div", 30);
        \u0275\u0275text(161, " 24 / 7 support ");
        \u0275\u0275elementEnd()()()()()()()()();
        \u0275\u0275elementStart(162, "div", 35)(163, "div", 36)(164, "div")(165, "div", 37);
        \u0275\u0275text(166, " Everything you need to build efficiently ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(167, "div", 38);
        \u0275\u0275text(168, " Start building your app using our tools, be efficient, spend less time with details more time with your business ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(169, "div", 39)(170, "div")(171, "span", 40);
        \u0275\u0275element(172, "mat-icon", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(173, "div", 42);
        \u0275\u0275text(174, " Create and Edit Projects ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(175, "div", 43);
        \u0275\u0275text(176, " Create and edit projects, upload images via drag drop, add categories, add custom fields, create interactive forms and more. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(177, "div")(178, "span", 40);
        \u0275\u0275element(179, "mat-icon", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "div", 42);
        \u0275\u0275text(181, " Search and Filter ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "div", 43);
        \u0275\u0275text(183, " Search and filter within the projects, categories and custom fields. Save search and filter details for easy access. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(184, "div")(185, "span", 40);
        \u0275\u0275element(186, "mat-icon", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "div", 42);
        \u0275\u0275text(188, " Real Time Updates ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "div", 43);
        \u0275\u0275text(190, " Real time updates that doesn't require page reload. Lean back and watch the changes happen in real time. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(191, "div")(192, "span", 40);
        \u0275\u0275element(193, "mat-icon", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "div", 42);
        \u0275\u0275text(195, "Meta Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(196, "div", 43);
        \u0275\u0275text(197, " Add and remove meta information to custom fields to differentiate them in reports and analytics results, use them for detailed reports. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(198, "div")(199, "span", 40);
        \u0275\u0275element(200, "mat-icon", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "div", 42);
        \u0275\u0275text(202, " Pre-rendered Results ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(203, "div", 43);
        \u0275\u0275text(204, " Pre-render results to make reports and analytics more accessible by screen readers and other accessibility tools. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(205, "div")(206, "span", 40);
        \u0275\u0275element(207, "mat-icon", 41);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "div", 42);
        \u0275\u0275text(209, "Simple Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(210, "div", 43);
        \u0275\u0275text(211, " Simple analytics with no unnecessary data flow or weight. More readable results with less data consumption. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(212, "div", 44)(213, "div", 45)(214, "div", 46);
        \u0275\u0275text(215, " Boost your productivity. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(216, "div", 47);
        \u0275\u0275text(217, " Start using Fuse today. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(218, "button", 48)(219, "span", 49);
        \u0275\u0275text(220, "Sign up for free");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(221, "div", 50)(222, "div", 36)(223, "div")(224, "div", 37);
        \u0275\u0275text(225, " Frequently asked questions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "div", 38);
        \u0275\u0275text(227, " Here are the most frequently asked questions you may check before getting started ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(228, "div", 51)(229, "div")(230, "div", 7);
        \u0275\u0275text(231, " What is the duration of the free trial? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "div", 43)(233, "p");
        \u0275\u0275text(234, " Our app is free to try for 14 days, if you want more, you can provide payment details which will extend your trial to 30 days providing you an extra 16 more days to try our app. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(235, "div")(236, "div", 7);
        \u0275\u0275text(237, " Are there discounts for non-profits or educational use? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(238, "div", 43)(239, "p");
        \u0275\u0275text(240, " Yes, our Personal and Premium packages are free for non-profits and educational use. E-mail your details to us after starting your Free Trial and we will upgrade your account if you qualify. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(241, "div")(242, "div", 7);
        \u0275\u0275text(243, " What is the storage is for? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(244, "div", 43)(245, "p");
        \u0275\u0275text(246, " Since we provide an extremely detailed reporting and analytics tool, they require quite a bit storage space. For average use, you don\u2019t have to worry about running out of space since the Personal package limits the projects you can have. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(247, "p", 52);
        \u0275\u0275text(248, " For some reason if you run out of space, contact us and we will see what can be done about it and make sure you are not generating unnecessary reports and/or analytics data. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(249, "div")(250, "div", 7);
        \u0275\u0275text(251, " What happens if I\u2019m not satisfied? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(252, "div", 43)(253, "p");
        \u0275\u0275text(254, " If you are still in your free trial period, you can cancel your account at anytime with a single click of a button. If you already paid for your first month, we also offer 30-day money-back guarantee with no questions asked. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(255, "p", 52);
        \u0275\u0275text(256, " After first month, you can still cancel your account at any time but we will calculate the amount that corresponds to days you have been using our app for that month and refund only the remaining amount. ");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(17);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(38, _c0, ctx.yearlyBilling, !ctx.yearlyBilling));
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(41, _c0, !ctx.yearlyBilling, ctx.yearlyBilling));
        \u0275\u0275advance(15);
        \u0275\u0275conditional(ctx.yearlyBilling ? 34 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 35 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.yearlyBilling ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(16);
        \u0275\u0275conditional(ctx.yearlyBilling ? 82 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 83 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.yearlyBilling ? 85 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 86 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.yearlyBilling ? 127 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 128 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.yearlyBilling ? 130 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 131 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(13);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingModernComponent, { className: "PricingModernComponent", filePath: "src/app/modules/admin/pages/pricing/modern/modern.component.ts", lineNumber: 18 });
})();

// src/app/modules/admin/pages/pricing/modern/modern.routes.ts
var modern_routes_default = [
  {
    path: "",
    component: PricingModernComponent
  }
];
export {
  modern_routes_default as default
};
//# sourceMappingURL=chunk-DX3XGTN4.js.map
