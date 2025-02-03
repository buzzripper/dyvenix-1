import {
  NavigationEnd,
  Router
} from "./chunk-WTEW5YKI.js";
import {
  ElementRef,
  Subject,
  filter,
  inject,
  takeUntil,
  ɵɵdefineDirective
} from "./chunk-4ASYWLFB.js";

// src/@fuse/directives/scroll-reset/scroll-reset.directive.ts
var FuseScrollResetDirective = class _FuseScrollResetDirective {
  constructor() {
    this._elementRef = inject(ElementRef);
    this._router = inject(Router);
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._router.events.pipe(filter((event) => event instanceof NavigationEnd), takeUntil(this._unsubscribeAll)).subscribe(() => {
      this._elementRef.nativeElement.scrollTop = 0;
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
    this.\u0275fac = function FuseScrollResetDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseScrollResetDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _FuseScrollResetDirective, selectors: [["", "fuseScrollReset", ""]], exportAs: ["fuseScrollReset"] });
  }
};

export {
  FuseScrollResetDirective
};
//# sourceMappingURL=chunk-GNYPANLX.js.map
