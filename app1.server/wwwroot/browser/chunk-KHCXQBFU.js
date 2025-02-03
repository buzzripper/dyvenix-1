import {
  MatRipple,
  MatRippleModule
} from "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import {
  fuseAnimations
} from "./chunk-HKG3E5RP.js";
import "./chunk-WH7F4HUX.js";
import "./chunk-M6AYR6A2.js";
import {
  ɵsetClassDebugInfo,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/ui/colors/colors.component.ts
var ColorsComponent = class _ColorsComponent {
  /**
   * Constructor
   */
  constructor() {
  }
  static {
    this.\u0275fac = function ColorsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ColorsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ColorsComponent, selectors: [["colors"]], decls: 160, vars: 0, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "prose", "prose-sm", "max-w-3xl"], [1, "my-8", "space-y-8"], [1, "grid", "grid-cols-3", "gap-4"], ["matRipple", "", 1, "flex", "flex-auto", "flex-col", "items-start", "justify-center", "rounded", "bg-primary", "p-6", "text-on-primary"], [1, "font-medium"], [1, "my-4", "w-full", "border-b", "border-on-primary", "border-opacity-50"], [1, "text-on-primary"], ["matRipple", "", 1, "flex", "flex-auto", "flex-col", "items-start", "justify-center", "rounded", "bg-accent", "p-6", "text-on-accent"], [1, "my-4", "w-full", "border-b", "border-on-accent", "border-opacity-50"], [1, "text-on-accent"], ["matRipple", "", 1, "flex", "flex-auto", "flex-col", "items-start", "justify-center", "rounded", "bg-warn", "p-6", "text-on-warn"], [1, "my-4", "w-full", "border-b", "border-on-warn", "border-opacity-50"], [1, "text-on-warn"], ["matRipple", "", 1, "flex", "flex-auto", "flex-col", "items-start", "justify-center", "rounded", "bg-primary-200", "p-6", "text-on-primary-200"], [1, "my-4", "w-full", "border-b", "border-on-primary-200", "border-opacity-50"], [1, "text-on-primary-200"], ["matRipple", "", 1, "flex", "flex-auto", "flex-col", "items-start", "justify-center", "rounded", "bg-accent-300", "p-6", "text-on-accent-300"], [1, "my-4", "w-full", "border-b", "border-on-accent-300", "border-opacity-50"], [1, "text-on-accent-300"], ["matRipple", "", 1, "flex", "flex-auto", "flex-col", "items-start", "justify-center", "rounded", "bg-warn-400", "p-6", "text-on-warn-400"], [1, "my-4", "w-full", "border-b", "border-on-warn-400", "border-opacity-50"], [1, "text-on-warn-400"], [1, "my-8", "flex", "space-x-16"], [1, "flex", "flex-col", "space-y-4"], [1, "text-default"], [1, "text-secondary"], [1, "text-hint"], [1, "text-disabled"], [1, "divider"], [1, "bg-card", "rounded", "px-2", "py-1"], [1, "bg-default", "rounded", "px-2", "py-1"], [1, "bg-dialog", "rounded", "px-2", "py-1"], [1, "bg-hover", "rounded", "px-2", "py-1"]], template: function ColorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "User Interface");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "h2", 6);
        \u0275\u0275text(9, " Colors ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "p");
        \u0275\u0275text(13, " Since Fuse uses Tailwind, all color related utilities such as ");
        \u0275\u0275elementStart(14, "code");
        \u0275\u0275text(15, "text-red-50");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " or ");
        \u0275\u0275elementStart(17, "code");
        \u0275\u0275text(18, "bg-indigo-900");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " are available by default and they can be configured using Tailwind's configuration. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p");
        \u0275\u0275text(21, " In addition to default Tailwind colors, Fuse also provides utilities that changes depending on the selected theme. These utilities are meant to be used in places where you want to have a theme dependent colors such as buttons, backgrounds or texts. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "h2");
        \u0275\u0275text(23, "Primary, Accent & Warn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p");
        \u0275\u0275text(25, " Fuse provides ");
        \u0275\u0275elementStart(26, "strong");
        \u0275\u0275text(27, "Primary");
        \u0275\u0275elementEnd();
        \u0275\u0275text(28, ", ");
        \u0275\u0275elementStart(29, "strong");
        \u0275\u0275text(30, "Accent");
        \u0275\u0275elementEnd();
        \u0275\u0275text(31, " and ");
        \u0275\u0275elementStart(32, "strong");
        \u0275\u0275text(33, "Warn");
        \u0275\u0275elementEnd();
        \u0275\u0275text(34, " utilities to go with Angular Material theming. These utilities hold variable colors and they change depending on the selected theme color. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p");
        \u0275\u0275text(36, " Having these utilities allow you to have dynamic theming throughout your application without hard coding any colors. Each of these utilities also have a complementary ");
        \u0275\u0275elementStart(37, "code");
        \u0275\u0275text(38, ".text-on-XXX");
        \u0275\u0275elementEnd();
        \u0275\u0275text(39, " utility to provide a contrasting text color. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 9)(41, "div", 10)(42, "div", 11)(43, "div", 12);
        \u0275\u0275text(44, "Primary");
        \u0275\u0275elementEnd();
        \u0275\u0275element(45, "div", 13);
        \u0275\u0275elementStart(46, "code", 14);
        \u0275\u0275text(47, "bg-primary");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "code", 14);
        \u0275\u0275text(49, "text-on-primary");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div", 15)(51, "div", 12);
        \u0275\u0275text(52, "Accent");
        \u0275\u0275elementEnd();
        \u0275\u0275element(53, "div", 16);
        \u0275\u0275elementStart(54, "code", 17);
        \u0275\u0275text(55, "bg-accent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "code", 17);
        \u0275\u0275text(57, "text-on-accent");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(58, "div", 18)(59, "div", 12);
        \u0275\u0275text(60, "Warn");
        \u0275\u0275elementEnd();
        \u0275\u0275element(61, "div", 19);
        \u0275\u0275elementStart(62, "code", 20);
        \u0275\u0275text(63, "bg-warn");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "code", 20);
        \u0275\u0275text(65, "text-on-warn");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 21)(67, "div", 12);
        \u0275\u0275text(68, "Primary 200");
        \u0275\u0275elementEnd();
        \u0275\u0275element(69, "div", 22);
        \u0275\u0275elementStart(70, "code", 23);
        \u0275\u0275text(71, "bg-primary-200");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "code", 23);
        \u0275\u0275text(73, "text-on-primary-200");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(74, "div", 24)(75, "div", 12);
        \u0275\u0275text(76, "Accent 300");
        \u0275\u0275elementEnd();
        \u0275\u0275element(77, "div", 25);
        \u0275\u0275elementStart(78, "code", 26);
        \u0275\u0275text(79, "bg-accent-300");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(80, "code", 26);
        \u0275\u0275text(81, "text-on-accent-300");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "div", 27)(83, "div", 12);
        \u0275\u0275text(84, "Warn 400");
        \u0275\u0275elementEnd();
        \u0275\u0275element(85, "div", 28);
        \u0275\u0275elementStart(86, "code", 29);
        \u0275\u0275text(87, "bg-warn-400");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(88, "code", 29);
        \u0275\u0275text(89, "text-on-warn-400");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(90, "p");
        \u0275\u0275text(91, " You can change the theme from the ");
        \u0275\u0275elementStart(92, "i");
        \u0275\u0275text(93, "Settings");
        \u0275\u0275elementEnd();
        \u0275\u0275text(94, " panel to observe the primary color changing. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "p");
        \u0275\u0275text(96, " These variable colors have different hue values just like a default Tailwind color palette and they are also available for other Tailwind color utilities such as ");
        \u0275\u0275elementStart(97, "strong");
        \u0275\u0275text(98, "border");
        \u0275\u0275elementEnd();
        \u0275\u0275text(99, ", ");
        \u0275\u0275elementStart(100, "strong");
        \u0275\u0275text(101, "ring");
        \u0275\u0275elementEnd();
        \u0275\u0275text(102, " and etc: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(103, "p")(104, "code");
        \u0275\u0275text(105, "bg-primary-50");
        \u0275\u0275elementEnd();
        \u0275\u0275text(106, ", ");
        \u0275\u0275elementStart(107, "code");
        \u0275\u0275text(108, "text-accent-900");
        \u0275\u0275elementEnd();
        \u0275\u0275text(109, ", ");
        \u0275\u0275elementStart(110, "code");
        \u0275\u0275text(111, "text-on-warn-500");
        \u0275\u0275elementEnd();
        \u0275\u0275text(112, ", ");
        \u0275\u0275elementStart(113, "code");
        \u0275\u0275text(114, "border-primary");
        \u0275\u0275elementEnd();
        \u0275\u0275text(115, ", ");
        \u0275\u0275elementStart(116, "code");
        \u0275\u0275text(117, "ring-warn-600");
        \u0275\u0275elementEnd();
        \u0275\u0275text(118, " ... ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(119, "h2");
        \u0275\u0275text(120, "Text and Background colors");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(121, "p");
        \u0275\u0275text(122, " Fuse also provides set of utilities to have consistent text and background colors throughout your application without hard coding any colors. They also allow working with dark variant of the selected theme. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "p");
        \u0275\u0275text(124, " For example, a text node with a ");
        \u0275\u0275elementStart(125, "code");
        \u0275\u0275text(126, ".text-secondary");
        \u0275\u0275elementEnd();
        \u0275\u0275text(127, " class will have a proper lighter color compared to main text color depending on the selected scheme. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "p");
        \u0275\u0275text(129, " Here's the complete list of the available text and background utilities: ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "div", 30)(131, "div", 31)(132, "div")(133, "code", 32);
        \u0275\u0275text(134, ".text-default");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(135, "div")(136, "code", 33);
        \u0275\u0275text(137, ".text-secondary");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(138, "div")(139, "code", 34);
        \u0275\u0275text(140, ".text-hint");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(141, "div")(142, "code", 35);
        \u0275\u0275text(143, ".text-disabled");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(144, "div")(145, "code", 36);
        \u0275\u0275text(146, ".divider");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(147, "div", 31)(148, "div", 37)(149, "code");
        \u0275\u0275text(150, ".bg-card");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(151, "div", 38)(152, "code");
        \u0275\u0275text(153, ".bg-default");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(154, "div", 39)(155, "code");
        \u0275\u0275text(156, ".bg-dialog");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(157, "div", 40)(158, "code");
        \u0275\u0275text(159, ".bg-hover");
        \u0275\u0275elementEnd()()()()()()();
      }
    }, dependencies: [MatRippleModule, MatRipple], encapsulation: 2, data: { animation: fuseAnimations } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ColorsComponent, { className: "ColorsComponent", filePath: "src/app/modules/admin/ui/colors/colors.component.ts", lineNumber: 12 });
})();

// src/app/modules/admin/ui/colors/colors.routes.ts
var colors_routes_default = [
  {
    path: "",
    component: ColorsComponent
  }
];
export {
  colors_routes_default as default
};
//# sourceMappingURL=chunk-KHCXQBFU.js.map
