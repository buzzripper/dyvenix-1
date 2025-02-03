import {
  fuseAnimations
} from "./chunk-HKG3E5RP.js";
import {
  NgTemplateOutlet
} from "./chunk-M6AYR6A2.js";
import {
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵtemplate
} from "./chunk-4ASYWLFB.js";

// src/@fuse/components/masonry/masonry.component.ts
var _c0 = (a0) => ({ $implicit: a0 });
function FuseMasonryComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
var FuseMasonryComponent = class _FuseMasonryComponent {
  constructor() {
    this.items = [];
    this.distributedColumns = [];
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
    if ("columns" in changes) {
      this._distributeItems();
    }
    if ("items" in changes) {
      this._distributeItems();
    }
  }
  /**
   * After view init
   */
  ngAfterViewInit() {
    this._distributeItems();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Distribute items into columns
   */
  _distributeItems() {
    if (this.items.length === 0) {
      this.distributedColumns = [];
      return;
    }
    this.distributedColumns = Array.from(Array(this.columns), (item) => ({
      items: []
    }));
    for (let i = 0; i < this.items.length; i++) {
      this.distributedColumns[i % this.columns].items.push(this.items[i]);
    }
  }
  static {
    this.\u0275fac = function FuseMasonryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseMasonryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseMasonryComponent, selectors: [["fuse-masonry"]], inputs: { columnsTemplate: "columnsTemplate", columns: "columns", items: "items" }, exportAs: ["fuseMasonry"], features: [\u0275\u0275NgOnChangesFeature], decls: 2, vars: 4, consts: [[1, "flex"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function FuseMasonryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275template(1, FuseMasonryComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.columnsTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c0, ctx.distributedColumns));
      }
    }, dependencies: [NgTemplateOutlet], encapsulation: 2, data: { animation: fuseAnimations } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseMasonryComponent, { className: "FuseMasonryComponent", filePath: "src/@fuse/components/masonry/masonry.component.ts", lineNumber: 21 });
})();

export {
  FuseMasonryComponent
};
//# sourceMappingURL=chunk-3O4PN336.js.map
