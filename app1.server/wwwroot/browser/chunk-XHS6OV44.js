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

// src/app/modules/admin/pages/pricing/table/table.component.ts
var _c0 = (a0, a1) => ({ "bg-card pointer-events-none shadow": a0, "bg-transparent": a1 });
function PricingTableComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $6 ");
  }
}
function PricingTableComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $9 ");
  }
}
function PricingTableComponent_Conditional_39_Template(rf, ctx) {
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
function PricingTableComponent_Conditional_40_Template(rf, ctx) {
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
function PricingTableComponent_Conditional_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $12 ");
  }
}
function PricingTableComponent_Conditional_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $15 ");
  }
}
function PricingTableComponent_Conditional_62_Template(rf, ctx) {
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
function PricingTableComponent_Conditional_63_Template(rf, ctx) {
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
function PricingTableComponent_Conditional_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $49 ");
  }
}
function PricingTableComponent_Conditional_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " $69 ");
  }
}
function PricingTableComponent_Conditional_82_Template(rf, ctx) {
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
function PricingTableComponent_Conditional_83_Template(rf, ctx) {
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
var PricingTableComponent = class _PricingTableComponent {
  /**
   * Constructor
   */
  constructor() {
    this.yearlyBilling = true;
  }
  static {
    this.\u0275fac = function PricingTableComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PricingTableComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PricingTableComponent, selectors: [["pricing-table"]], decls: 262, vars: 44, consts: [[1, "relative", "flex", "min-w-0", "flex-auto", "flex-col", "overflow-hidden"], [1, "relative", "overflow-hidden", "px-6", "pb-12", "pt-8", "sm:px-16", "sm:pb-24", "sm:pt-20"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "-z-1", "absolute", "inset-0"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "opacity-40", "text-gray-200", "dark:text-gray-800"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], [1, "flex", "flex-col", "items-center"], [1, "text-xl", "font-semibold"], [1, "mt-1", "text-center", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight", "sm:text-7xl"], [1, "text-secondary", "mt-3", "text-center", "tracking-tight", "sm:text-2xl"], [1, ""], [1, "mt-8", "flex", "items-center", "overflow-hidden", "rounded-full", "bg-gray-200", "p-0.5", "dark:bg-gray-700", "sm:mt-16"], ["mat-flat-button", "", "disableRipple", "", 1, "px-6", 3, "click", "ngClass"], [1, "mt-10", "flex", "flex-col", "items-center", "sm:mt-20"], [1, "w-full", "flex-col", "overflow-x-auto", "overflow-y-hidden", "lg:max-w-7xl", "lg:flex-row"], [1, "grid", "min-w-max", "grid-flow-col", "divide-x", "lg:min-w-0", "lg:grid-flow-row", "lg:divide-x-0", "lg:divide-y"], [1, "bg-card", "sticky", "left-0", "grid", "grid-flow-row", "auto-rows-fr", "divide-y", "rounded-l", "border-r", "shadow-lg", "lg:max-w-none", "lg:auto-cols-fr", "lg:grid-flow-col", "lg:divide-x", "lg:divide-y-0", "lg:rounded-l-none", "lg:border-r-0", "lg:shadow-none"], [1, "px-4", "py-8"], [1, "flex", "flex-col"], [1, "flex", "flex-col", "justify-center", "p-4", "pt-3", "lg:py-8"], [1, "text-xl", "font-medium", "lg:text-2xl"], [1, "flex", "items-baseline", "whitespace-nowrap", "lg:mt-4"], [1, "text-secondary", "hidden", "text-lg", "lg:block"], [1, "text-2xl", "font-bold", "tracking-tight", "lg:ml-2", "lg:text-4xl"], [1, "text-secondary", "ml-2", "text-lg"], [1, "text-secondary", "mt-1", "text-sm", "lg:mt-3", "lg:text-base"], ["mat-stroked-button", "", 1, "mt-3", "h-8", "min-h-8", "w-full", "lg:mt-6", "lg:h-10", "lg:min-h-10", 3, "color"], [1, "lg:hidden"], [1, "hidden", "lg:inline-flex"], [1, "flex", "items-center"], [1, "ml-3", "hidden", "h-6", "items-center", "rounded-full", "bg-primary-100", "px-3", "text-sm", "font-semibold", "leading-6", "tracking-wide", "text-primary-600", "lg:flex"], ["mat-flat-button", "", 1, "mt-3", "h-8", "min-h-8", "w-full", "lg:mt-6", "lg:h-10", "lg:min-h-10", 3, "color"], [1, "col-span-full", "hidden", "bg-gray-100", "p-4", "dark:bg-transparent", "lg:block"], [1, "text-md", "font-semibold"], [1, "grid", "grid-flow-row", "auto-rows-fr", "divide-y", "lg:auto-cols-fr", "lg:grid-flow-col", "lg:divide-x", "lg:divide-y-0"], [1, "flex", "max-w-32", "items-center", "p-4", "text-center", "font-medium", "lg:max-w-none", "lg:items-start", "lg:text-left", "lg:font-normal"], [1, "flex", "items-center", "justify-center", "p-4", "lg:justify-start"], [1, "text-green-600", "icon-size-5", 3, "svgIcon"], [1, "icon-size-5", 3, "svgIcon"], [1, "flex", "flex-col", "items-center", "bg-white", "px-6", "py-10", "dark:bg-gray-800", "sm:px-16", "sm:pb-20", "sm:pt-18"], [1, "w-full", "max-w-7xl"], [1, "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "text-secondary", "mt-2", "max-w-xl", "text-xl"], [1, "mt-12", "grid", "w-full", "grid-cols-1", "gap-x-6", "gap-y-12", "sm:mt-16", "sm:grid-cols-2", "lg:grid-cols-3", "lg:gap-16"], [1, "flex", "h-12", "w-12", "items-center", "justify-center", "rounded", "bg-primary"], [1, "text-white", 3, "svgIcon"], [1, "mt-4", "text-xl", "font-medium"], [1, "text-secondary", "mt-2", "leading-6"], [1, "bg-primary-600", "px-6", "py-10", "text-on-primary-600", "sm:px-16", "sm:py-12"], [1, "mx-auto", "flex", "w-full", "max-w-7xl", "flex-col", "items-center", "text-center"], [1, "text-3xl", "font-extrabold", "leading-6", "sm:text-4xl", "sm:text-5xl", "sm:leading-10"], [1, "mt-2", "text-3xl", "font-extrabold", "leading-6", "text-black", "text-opacity-70", "sm:text-4xl", "sm:text-5xl", "sm:leading-10"], ["mat-flat-button", "", 1, "fuse-mat-button-large", "mt-8", "bg-white", "px-12", "text-primary-800"], [1, "text-lg"], [1, "flex", "flex-col", "items-center", "bg-gray-50", "px-6", "pb-8", "pt-12", "dark:bg-gray-800", "sm:px-16", "sm:pb-20", "sm:pt-18"], [1, "mt-12", "grid", "w-full", "grid-cols-1", "gap-x-6", "gap-y-12", "sm:mt-16", "sm:grid-cols-2", "lg:gap-x-16"], [1, "mt-2"]], template: function PricingTableComponent_Template(rf, ctx) {
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
        \u0275\u0275listener("click", function PricingTableComponent_Template_button_click_17_listener() {
          return ctx.yearlyBilling = true;
        });
        \u0275\u0275text(18, " Yearly billing ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 12);
        \u0275\u0275listener("click", function PricingTableComponent_Template_button_click_19_listener() {
          return ctx.yearlyBilling = false;
        });
        \u0275\u0275text(20, " Monthly billing ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 13)(22, "fuse-card", 14)(23, "div", 15)(24, "div", 16);
        \u0275\u0275element(25, "div", 17);
        \u0275\u0275elementStart(26, "div", 18)(27, "div", 19)(28, "div", 20);
        \u0275\u0275text(29, " Personal ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 21)(31, "div", 22);
        \u0275\u0275text(32, " USD ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 23);
        \u0275\u0275template(34, PricingTableComponent_Conditional_34_Template, 1, 0)(35, PricingTableComponent_Conditional_35_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(36, "div", 24);
        \u0275\u0275text(37, " / mo ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(38, "div", 25);
        \u0275\u0275template(39, PricingTableComponent_Conditional_39_Template, 6, 0)(40, PricingTableComponent_Conditional_40_Template, 6, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "button", 26)(42, "span", 27);
        \u0275\u0275text(43, "Buy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "span", 28);
        \u0275\u0275text(45, "Buy Personal");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(46, "div", 18)(47, "div", 19)(48, "div", 29)(49, "div", 20);
        \u0275\u0275text(50, " Premium ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "div", 30);
        \u0275\u0275text(52, " POPULAR ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 21)(54, "div", 22);
        \u0275\u0275text(55, " USD ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 23);
        \u0275\u0275template(57, PricingTableComponent_Conditional_57_Template, 1, 0)(58, PricingTableComponent_Conditional_58_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 24);
        \u0275\u0275text(60, " / mo ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(61, "div", 25);
        \u0275\u0275template(62, PricingTableComponent_Conditional_62_Template, 6, 0)(63, PricingTableComponent_Conditional_63_Template, 6, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "button", 31)(65, "span", 27);
        \u0275\u0275text(66, "Buy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "span", 28);
        \u0275\u0275text(68, "Buy Premium");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(69, "div", 18)(70, "div", 19)(71, "div", 20);
        \u0275\u0275text(72, " Enterprise ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 21)(74, "div", 22);
        \u0275\u0275text(75, " USD ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 23);
        \u0275\u0275template(77, PricingTableComponent_Conditional_77_Template, 1, 0)(78, PricingTableComponent_Conditional_78_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "div", 24);
        \u0275\u0275text(80, " / mo ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 25);
        \u0275\u0275template(82, PricingTableComponent_Conditional_82_Template, 6, 0)(83, PricingTableComponent_Conditional_83_Template, 6, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "button", 26)(85, "span", 27);
        \u0275\u0275text(86, "Buy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "span", 28);
        \u0275\u0275text(88, "Buy Enterprise");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(89, "div", 32)(90, "div", 33);
        \u0275\u0275text(91, "FEATURES");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(92, "div", 34)(93, "div", 35);
        \u0275\u0275text(94, " Unlimited projects ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "div", 36);
        \u0275\u0275element(96, "mat-icon", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "div", 36);
        \u0275\u0275element(98, "mat-icon", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(99, "div", 36);
        \u0275\u0275element(100, "mat-icon", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(101, "div", 34)(102, "div", 35);
        \u0275\u0275text(103, " Unlimited storage ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(104, "div", 36);
        \u0275\u0275element(105, "mat-icon", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "div", 36);
        \u0275\u0275element(107, "mat-icon", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(108, "div", 36);
        \u0275\u0275element(109, "mat-icon", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 34)(111, "div", 35);
        \u0275\u0275text(112, " Custom domain support ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(113, "div", 36);
        \u0275\u0275element(114, "mat-icon", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(115, "div", 36);
        \u0275\u0275element(116, "mat-icon", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 36);
        \u0275\u0275element(118, "mat-icon", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(119, "div", 34)(120, "div", 35);
        \u0275\u0275text(121, " Dedicated hardware ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "div", 36);
        \u0275\u0275element(123, "mat-icon", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "div", 36);
        \u0275\u0275element(125, "mat-icon", 38);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(126, "div", 36);
        \u0275\u0275element(127, "mat-icon", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(128, "div", 32)(129, "div", 33);
        \u0275\u0275text(130, "PAYMENTS");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(131, "div", 34)(132, "div", 35);
        \u0275\u0275text(133, " Fraud analysis ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(134, "div", 36);
        \u0275\u0275element(135, "mat-icon", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(136, "div", 36);
        \u0275\u0275element(137, "mat-icon", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(138, "div", 36);
        \u0275\u0275element(139, "mat-icon", 37);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 34)(141, "div", 35);
        \u0275\u0275text(142, " Rates for in-house payment systems ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "div", 36);
        \u0275\u0275text(144, " 2.9% + 30\xA2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(145, "div", 36);
        \u0275\u0275text(146, " 2.6% + 30\xA2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(147, "div", 36);
        \u0275\u0275text(148, " 2.4% + 30\xA2 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(149, "div", 34)(150, "div", 35);
        \u0275\u0275text(151, " Rates for other payment systems ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "div", 36);
        \u0275\u0275text(153, " 4.9% + 30\xA2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(154, "div", 36);
        \u0275\u0275text(155, " 4.6% + 30\xA2 ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(156, "div", 36);
        \u0275\u0275text(157, " 4.4% + 30\xA2 ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(158, "div", 34)(159, "div", 35);
        \u0275\u0275text(160, " Additional fees using other payment systems ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(161, "div", 36);
        \u0275\u0275text(162, " 2% ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(163, "div", 36);
        \u0275\u0275text(164, " 1% ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "div", 36);
        \u0275\u0275text(166, " 0.5% ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(167, "div", 39)(168, "div", 40)(169, "div")(170, "div", 41);
        \u0275\u0275text(171, " Everything you need to build efficiently ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "div", 42);
        \u0275\u0275text(173, " Start building your app using our tools, be efficient, spend less time with details more time with your business ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(174, "div", 43)(175, "div")(176, "span", 44);
        \u0275\u0275element(177, "mat-icon", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 46);
        \u0275\u0275text(179, " Create and Edit Projects ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "div", 47);
        \u0275\u0275text(181, " Create and edit projects, upload images via drag drop, add categories, add custom fields, create interactive forms and more. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(182, "div")(183, "span", 44);
        \u0275\u0275element(184, "mat-icon", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(185, "div", 46);
        \u0275\u0275text(186, " Search and Filter ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "div", 47);
        \u0275\u0275text(188, " Search and filter within the projects, categories and custom fields. Save search and filter details for easy access. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(189, "div")(190, "span", 44);
        \u0275\u0275element(191, "mat-icon", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(192, "div", 46);
        \u0275\u0275text(193, " Real Time Updates ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(194, "div", 47);
        \u0275\u0275text(195, " Real time updates that doesn't require page reload. Lean back and watch the changes happen in real time. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(196, "div")(197, "span", 44);
        \u0275\u0275element(198, "mat-icon", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(199, "div", 46);
        \u0275\u0275text(200, "Meta Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(201, "div", 47);
        \u0275\u0275text(202, " Add and remove meta information to custom fields to differentiate them in reports and analytics results, use them for detailed reports. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(203, "div")(204, "span", 44);
        \u0275\u0275element(205, "mat-icon", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(206, "div", 46);
        \u0275\u0275text(207, " Pre-rendered Results ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "div", 47);
        \u0275\u0275text(209, " Pre-render results to make reports and analytics more accessible by screen readers and other accessibility tools. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(210, "div")(211, "span", 44);
        \u0275\u0275element(212, "mat-icon", 45);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(213, "div", 46);
        \u0275\u0275text(214, "Simple Analytics");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "div", 47);
        \u0275\u0275text(216, " Simple analytics with no unnecessary data flow or weight. More readable results with less data consumption. ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(217, "div", 48)(218, "div", 49)(219, "div", 50);
        \u0275\u0275text(220, " Boost your productivity. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(221, "div", 51);
        \u0275\u0275text(222, " Start using Fuse today. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "button", 52)(224, "span", 53);
        \u0275\u0275text(225, "Sign up for free");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(226, "div", 54)(227, "div", 40)(228, "div")(229, "div", 41);
        \u0275\u0275text(230, " Frequently asked questions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(231, "div", 42);
        \u0275\u0275text(232, " Here are the most frequently asked questions you may check before getting started ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(233, "div", 55)(234, "div")(235, "div", 7);
        \u0275\u0275text(236, " What is the duration of the free trial? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "div", 47)(238, "p");
        \u0275\u0275text(239, " Our app is free to try for 14 days, if you want more, you can provide payment details which will extend your trial to 30 days providing you an extra 16 more days to try our app. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(240, "div")(241, "div", 7);
        \u0275\u0275text(242, " Are there discounts for non-profits or educational use? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(243, "div", 47)(244, "p");
        \u0275\u0275text(245, " Yes, our Personal and Premium packages are free for non-profits and educational use. E-mail your details to us after starting your Free Trial and we will upgrade your account if you qualify. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(246, "div")(247, "div", 7);
        \u0275\u0275text(248, " What is the storage is for? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "div", 47)(250, "p");
        \u0275\u0275text(251, " Since we provide an extremely detailed reporting and analytics tool, they require quite a bit storage space. For average use, you don\u2019t have to worry about running out of space since the Personal package limits the projects you can have. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(252, "p", 56);
        \u0275\u0275text(253, " For some reason if you run out of space, contact us and we will see what can be done about it and make sure you are not generating unnecessary reports and/or analytics data. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(254, "div")(255, "div", 7);
        \u0275\u0275text(256, " What happens if I\u2019m not satisfied? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(257, "div", 47)(258, "p");
        \u0275\u0275text(259, " If you are still in your free trial period, you can cancel your account at anytime with a single click of a button. If you already paid for your first month, we also offer 30-day money-back guarantee with no questions asked. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(260, "p", 56);
        \u0275\u0275text(261, " After first month, you can still cancel your account at any time but we will calculate the amount that corresponds to days you have been using our app for that month and refund only the remaining amount. ");
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
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.yearlyBilling ? 39 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(16);
        \u0275\u0275conditional(ctx.yearlyBilling ? 57 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 58 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.yearlyBilling ? 62 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 63 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(13);
        \u0275\u0275conditional(ctx.yearlyBilling ? 77 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 78 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.yearlyBilling ? 82 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.yearlyBilling ? 83 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(12);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:minus");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:minus");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:minus");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:check");
        \u0275\u0275advance(38);
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PricingTableComponent, { className: "PricingTableComponent", filePath: "src/app/modules/admin/pages/pricing/table/table.component.ts", lineNumber: 18 });
})();

// src/app/modules/admin/pages/pricing/table/table.routes.ts
var table_routes_default = [
  {
    path: "",
    component: PricingTableComponent
  }
];
export {
  table_routes_default as default
};
//# sourceMappingURL=chunk-XHS6OV44.js.map
