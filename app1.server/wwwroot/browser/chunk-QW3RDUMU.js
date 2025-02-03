import {
  coerceBooleanProperty
} from "./chunk-EWZPTUTP.js";
import {
  fuseAnimations
} from "./chunk-HKG3E5RP.js";
import {
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵtemplate
} from "./chunk-4ASYWLFB.js";

// src/@fuse/components/card/card.component.ts
var _c0 = [[["", "fuseCardFront", ""]], [["", "fuseCardBack", ""]], "*", [["", "fuseCardExpansion", ""]]];
var _c1 = ["[fuseCardFront]", "[fuseCardBack]", "*", "[fuseCardExpansion]"];
function FuseCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1);
    \u0275\u0275projection(3, 1);
    \u0275\u0275elementEnd();
  }
}
function FuseCardComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275projection(1, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("@expandCollapse", void 0);
  }
}
function FuseCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
    \u0275\u0275template(1, FuseCardComponent_Conditional_1_Conditional_1_Template, 2, 1, "div", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.expanded ? 1 : -1);
  }
}
var FuseCardComponent = class _FuseCardComponent {
  constructor() {
    this.expanded = false;
    this.face = "front";
    this.flippable = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Host binding for component classes
   */
  get classList() {
    return {
      "fuse-card-expanded": this.expanded,
      "fuse-card-face-back": this.flippable && this.face === "back",
      "fuse-card-face-front": this.flippable && this.face === "front",
      "fuse-card-flippable": this.flippable
    };
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
    if ("expanded" in changes) {
      this.expanded = coerceBooleanProperty(changes.expanded.currentValue);
    }
    if ("flippable" in changes) {
      this.flippable = coerceBooleanProperty(changes.flippable.currentValue);
    }
  }
  static {
    this.\u0275fac = function FuseCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseCardComponent, selectors: [["fuse-card"]], hostVars: 2, hostBindings: function FuseCardComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap(ctx.classList);
      }
    }, inputs: { expanded: "expanded", face: "face", flippable: "flippable" }, exportAs: ["fuseCard"], features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c1, decls: 2, vars: 2, consts: [[1, "fuse-card-front"], [1, "fuse-card-back"], [1, "fuse-card-expansion"]], template: function FuseCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275template(0, FuseCardComponent_Conditional_0_Template, 4, 0)(1, FuseCardComponent_Conditional_1_Template, 2, 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.flippable ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.flippable ? 1 : -1);
      }
    }, styles: ["/* src/@fuse/components/card/card.component.scss */\nfuse-card {\n  position: relative;\n  display: flex;\n  overflow: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--fuse-bg-card-rgb), var(--tw-bg-opacity));\n  border-radius: 1rem;\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\nfuse-card.fuse-card-flippable {\n  border-radius: 0;\n  overflow: visible;\n  transform-style: preserve-3d;\n  transition: transform 1s;\n  perspective: 600px;\n  background: transparent;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\nfuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-front {\n  visibility: hidden;\n  opacity: 0;\n  transform: rotateY(180deg);\n}\nfuse-card.fuse-card-flippable.fuse-card-face-back .fuse-card-back {\n  visibility: visible;\n  opacity: 1;\n  transform: rotateY(360deg);\n}\nfuse-card.fuse-card-flippable .fuse-card-front,\nfuse-card.fuse-card-flippable .fuse-card-back {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  z-index: 10;\n  transition:\n    transform 0.5s ease-out 0s,\n    visibility 0s ease-in 0.2s,\n    opacity 0s ease-in 0.2s;\n  backface-visibility: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--fuse-bg-card-rgb), var(--tw-bg-opacity));\n  border-radius: 1rem;\n  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\nfuse-card.fuse-card-flippable .fuse-card-front {\n  position: relative;\n  opacity: 1;\n  visibility: visible;\n  transform: rotateY(0deg);\n  overflow: hidden;\n}\nfuse-card.fuse-card-flippable .fuse-card-back {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  opacity: 0;\n  visibility: hidden;\n  transform: rotateY(180deg);\n  overflow: hidden auto;\n}\n/*# sourceMappingURL=card.component.css.map */\n"], encapsulation: 2, data: { animation: fuseAnimations } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseCardComponent, { className: "FuseCardComponent", filePath: "src/@fuse/components/card/card.component.ts", lineNumber: 23 });
})();

export {
  FuseCardComponent
};
//# sourceMappingURL=chunk-QW3RDUMU.js.map
