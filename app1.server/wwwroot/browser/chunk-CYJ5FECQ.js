import {
  FuseUtilsService
} from "./chunk-LWCQAMDH.js";
import {
  coerceBooleanProperty
} from "./chunk-EWZPTUTP.js";
import {
  AnimationBuilder,
  animate,
  style
} from "./chunk-WH7F4HUX.js";
import {
  BehaviorSubject,
  ElementRef,
  EventEmitter,
  Renderer2,
  finalize,
  inject,
  take,
  ɵsetClassDebugInfo,
  ɵɵNgOnChangesFeature,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵstyleMap
} from "./chunk-4ASYWLFB.js";

// src/@fuse/services/loading/loading.service.ts
var FuseLoadingService = class _FuseLoadingService {
  constructor() {
    this._auto$ = new BehaviorSubject(true);
    this._mode$ = new BehaviorSubject("indeterminate");
    this._progress$ = new BehaviorSubject(0);
    this._show$ = new BehaviorSubject(false);
    this._urlMap = /* @__PURE__ */ new Map();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for auto mode
   */
  get auto$() {
    return this._auto$.asObservable();
  }
  /**
   * Getter for mode
   */
  get mode$() {
    return this._mode$.asObservable();
  }
  /**
   * Getter for progress
   */
  get progress$() {
    return this._progress$.asObservable();
  }
  /**
   * Getter for show
   */
  get show$() {
    return this._show$.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Show the loading bar
   */
  show() {
    this._show$.next(true);
  }
  /**
   * Hide the loading bar
   */
  hide() {
    this._show$.next(false);
  }
  /**
   * Set the auto mode
   *
   * @param value
   */
  setAutoMode(value) {
    this._auto$.next(value);
  }
  /**
   * Set the mode
   *
   * @param value
   */
  setMode(value) {
    this._mode$.next(value);
  }
  /**
   * Set the progress of the bar manually
   *
   * @param value
   */
  setProgress(value) {
    if (value < 0 || value > 100) {
      console.error("Progress value must be between 0 and 100!");
      return;
    }
    this._progress$.next(value);
  }
  /**
   * Sets the loading status on the given url
   *
   * @param status
   * @param url
   */
  _setLoadingStatus(status, url) {
    if (!url) {
      console.error("The request URL must be provided!");
      return;
    }
    if (status === true) {
      this._urlMap.set(url, status);
      this._show$.next(true);
    } else if (status === false && this._urlMap.has(url)) {
      this._urlMap.delete(url);
    }
    if (this._urlMap.size === 0) {
      this._show$.next(false);
    }
  }
  static {
    this.\u0275fac = function FuseLoadingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseLoadingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuseLoadingService, factory: _FuseLoadingService.\u0275fac, providedIn: "root" });
  }
};

// src/@fuse/services/loading/loading.interceptor.ts
var fuseLoadingInterceptor = (req, next) => {
  const fuseLoadingService = inject(FuseLoadingService);
  let handleRequestsAutomatically = false;
  fuseLoadingService.auto$.pipe(take(1)).subscribe((value) => {
    handleRequestsAutomatically = value;
  });
  if (!handleRequestsAutomatically) {
    return next(req);
  }
  fuseLoadingService._setLoadingStatus(true, req.url);
  return next(req).pipe(finalize(() => {
    fuseLoadingService._setLoadingStatus(false, req.url);
  }));
};

// src/@fuse/components/drawer/drawer.service.ts
var FuseDrawerService = class _FuseDrawerService {
  constructor() {
    this._componentRegistry = /* @__PURE__ */ new Map();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Register drawer component
   *
   * @param name
   * @param component
   */
  registerComponent(name, component) {
    this._componentRegistry.set(name, component);
  }
  /**
   * Deregister drawer component
   *
   * @param name
   */
  deregisterComponent(name) {
    this._componentRegistry.delete(name);
  }
  /**
   * Get drawer component from the registry
   *
   * @param name
   */
  getComponent(name) {
    return this._componentRegistry.get(name);
  }
  static {
    this.\u0275fac = function FuseDrawerService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseDrawerService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuseDrawerService, factory: _FuseDrawerService.\u0275fac, providedIn: "root" });
  }
};

// src/@fuse/components/drawer/drawer.component.ts
var _c0 = ["*"];
var FuseDrawerComponent = class _FuseDrawerComponent {
  constructor() {
    this._animationBuilder = inject(AnimationBuilder);
    this._elementRef = inject(ElementRef);
    this._renderer2 = inject(Renderer2);
    this._fuseDrawerService = inject(FuseDrawerService);
    this._fuseUtilsService = inject(FuseUtilsService);
    this.fixed = false;
    this.mode = "side";
    this.name = this._fuseUtilsService.randomId();
    this.opened = false;
    this.position = "left";
    this.transparentOverlay = false;
    this.fixedChanged = new EventEmitter();
    this.modeChanged = new EventEmitter();
    this.openedChanged = new EventEmitter();
    this.positionChanged = new EventEmitter();
    this._animationsEnabled = false;
    this._handleOverlayClick = () => this.close();
    this._hovered = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Host binding for component classes
   */
  get classList() {
    return {
      "fuse-drawer-animations-enabled": this._animationsEnabled,
      "fuse-drawer-fixed": this.fixed,
      "fuse-drawer-hover": this._hovered,
      [`fuse-drawer-mode-${this.mode}`]: true,
      "fuse-drawer-opened": this.opened,
      [`fuse-drawer-position-${this.position}`]: true
    };
  }
  /**
   * Host binding for component inline styles
   */
  get styleList() {
    return {
      visibility: this.opened ? "visible" : "hidden"
    };
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Decorated methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * On mouseenter
   *
   * @private
   */
  _onMouseenter() {
    this._enableAnimations();
    this._hovered = true;
  }
  /**
   * On mouseleave
   *
   * @private
   */
  _onMouseleave() {
    this._enableAnimations();
    this._hovered = false;
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
    if ("fixed" in changes) {
      this.fixed = coerceBooleanProperty(changes.fixed.currentValue);
      this.fixedChanged.next(this.fixed);
    }
    if ("mode" in changes) {
      const previousMode = changes.mode.previousValue;
      const currentMode = changes.mode.currentValue;
      this._disableAnimations();
      if (previousMode === "over" && currentMode === "side") {
        this._hideOverlay();
      }
      if (previousMode === "side" && currentMode === "over") {
        if (this.opened) {
          this._showOverlay();
        }
      }
      this.modeChanged.next(currentMode);
      setTimeout(() => {
        this._enableAnimations();
      }, 500);
    }
    if ("opened" in changes) {
      const open = coerceBooleanProperty(changes.opened.currentValue);
      this._toggleOpened(open);
    }
    if ("position" in changes) {
      this.positionChanged.next(this.position);
    }
    if ("transparentOverlay" in changes) {
      this.transparentOverlay = coerceBooleanProperty(changes.transparentOverlay.currentValue);
    }
  }
  /**
   * On init
   */
  ngOnInit() {
    this._fuseDrawerService.registerComponent(this.name, this);
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    if (this._player) {
      this._player.finish();
    }
    this._fuseDrawerService.deregisterComponent(this.name);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Open the drawer
   */
  open() {
    if (this.opened) {
      return;
    }
    this._toggleOpened(true);
  }
  /**
   * Close the drawer
   */
  close() {
    if (!this.opened) {
      return;
    }
    this._toggleOpened(false);
  }
  /**
   * Toggle the drawer
   */
  toggle() {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Enable the animations
   *
   * @private
   */
  _enableAnimations() {
    if (this._animationsEnabled) {
      return;
    }
    this._animationsEnabled = true;
  }
  /**
   * Disable the animations
   *
   * @private
   */
  _disableAnimations() {
    if (!this._animationsEnabled) {
      return;
    }
    this._animationsEnabled = false;
  }
  /**
   * Show the backdrop
   *
   * @private
   */
  _showOverlay() {
    this._overlay = this._renderer2.createElement("div");
    this._overlay.classList.add("fuse-drawer-overlay");
    if (this.fixed) {
      this._overlay.classList.add("fuse-drawer-overlay-fixed");
    }
    if (this.transparentOverlay) {
      this._overlay.classList.add("fuse-drawer-overlay-transparent");
    }
    this._renderer2.appendChild(this._elementRef.nativeElement.parentElement, this._overlay);
    this._player = this._animationBuilder.build([
      style({ opacity: 0 }),
      animate("300ms cubic-bezier(0.25, 0.8, 0.25, 1)", style({ opacity: 1 }))
    ]).create(this._overlay);
    this._player.play();
    this._overlay.addEventListener("click", this._handleOverlayClick);
  }
  /**
   * Hide the backdrop
   *
   * @private
   */
  _hideOverlay() {
    if (!this._overlay) {
      return;
    }
    this._player = this._animationBuilder.build([
      animate("300ms cubic-bezier(0.25, 0.8, 0.25, 1)", style({ opacity: 0 }))
    ]).create(this._overlay);
    this._player.play();
    this._player.onDone(() => {
      if (this._overlay) {
        this._overlay.removeEventListener("click", this._handleOverlayClick);
        this._overlay.parentNode.removeChild(this._overlay);
        this._overlay = null;
      }
    });
  }
  /**
   * Open/close the drawer
   *
   * @param open
   * @private
   */
  _toggleOpened(open) {
    this.opened = open;
    this._enableAnimations();
    if (this.mode === "over") {
      if (open) {
        this._showOverlay();
      } else {
        this._hideOverlay();
      }
    }
    this.openedChanged.next(open);
  }
  static {
    this.\u0275fac = function FuseDrawerComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseDrawerComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FuseDrawerComponent, selectors: [["fuse-drawer"]], hostVars: 4, hostBindings: function FuseDrawerComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mouseenter", function FuseDrawerComponent_mouseenter_HostBindingHandler() {
          return ctx._onMouseenter();
        })("mouseleave", function FuseDrawerComponent_mouseleave_HostBindingHandler() {
          return ctx._onMouseleave();
        });
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.styleList);
        \u0275\u0275classMap(ctx.classList);
      }
    }, inputs: { fixed: "fixed", mode: "mode", name: "name", opened: "opened", position: "position", transparentOverlay: "transparentOverlay" }, outputs: { fixedChanged: "fixedChanged", modeChanged: "modeChanged", openedChanged: "openedChanged", positionChanged: "positionChanged" }, exportAs: ["fuseDrawer"], features: [\u0275\u0275NgOnChangesFeature], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "fuse-drawer-content"]], template: function FuseDrawerComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275projection(1);
        \u0275\u0275elementEnd();
      }
    }, styles: ["/* src/@fuse/components/drawer/drawer.component.scss */\n:root {\n  --fuse-drawer-width: 320px;\n}\nfuse-drawer {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n  width: var(--fuse-drawer-width);\n  min-width: var(--fuse-drawer-width);\n  max-width: var(--fuse-drawer-width);\n  z-index: 300;\n  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.35);\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--fuse-bg-card-rgb), var(--tw-bg-opacity));\n}\nfuse-drawer.fuse-drawer-animations-enabled {\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property:\n    visibility,\n    margin-left,\n    margin-right,\n    transform,\n    width,\n    max-width,\n    min-width;\n}\nfuse-drawer.fuse-drawer-animations-enabled .fuse-drawer-content {\n  transition-duration: 400ms;\n  transition-timing-function: cubic-bezier(0.25, 0.8, 0.25, 1);\n  transition-property:\n    width,\n    max-width,\n    min-width;\n}\nfuse-drawer.fuse-drawer-mode-over {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n}\nfuse-drawer.fuse-drawer-mode-over.fuse-drawer-fixed {\n  position: fixed;\n}\nfuse-drawer.fuse-drawer-position-left {\n}\nfuse-drawer.fuse-drawer-position-left.fuse-drawer-mode-side {\n  margin-left: calc(var(--fuse-drawer-width) * -1);\n}\nfuse-drawer.fuse-drawer-position-left.fuse-drawer-mode-side.fuse-drawer-opened {\n  margin-left: 0;\n}\nfuse-drawer.fuse-drawer-position-left.fuse-drawer-mode-over {\n  left: 0;\n  transform: translate3d(-100%, 0, 0);\n}\nfuse-drawer.fuse-drawer-position-left.fuse-drawer-mode-over.fuse-drawer-opened {\n  transform: translate3d(0, 0, 0);\n}\nfuse-drawer.fuse-drawer-position-left .fuse-drawer-content {\n  left: 0;\n}\nfuse-drawer.fuse-drawer-position-right {\n}\nfuse-drawer.fuse-drawer-position-right.fuse-drawer-mode-side {\n  margin-right: calc(var(--fuse-drawer-width) * -1);\n}\nfuse-drawer.fuse-drawer-position-right.fuse-drawer-mode-side.fuse-drawer-opened {\n  margin-right: 0;\n}\nfuse-drawer.fuse-drawer-position-right.fuse-drawer-mode-over {\n  right: 0;\n  transform: translate3d(100%, 0, 0);\n}\nfuse-drawer.fuse-drawer-position-right.fuse-drawer-mode-over.fuse-drawer-opened {\n  transform: translate3d(0, 0, 0);\n}\nfuse-drawer.fuse-drawer-position-right .fuse-drawer-content {\n  right: 0;\n}\nfuse-drawer .fuse-drawer-content {\n  position: absolute;\n  display: flex;\n  flex: 1 1 auto;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--fuse-bg-card-rgb), var(--tw-bg-opacity));\n}\n.fuse-drawer-overlay {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: 299;\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.fuse-drawer-overlay.fuse-drawer-overlay-fixed {\n  position: fixed;\n}\n.fuse-drawer-overlay.fuse-drawer-overlay-transparent {\n  background-color: transparent;\n}\n/*# sourceMappingURL=drawer.component.css.map */\n"], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FuseDrawerComponent, { className: "FuseDrawerComponent", filePath: "src/@fuse/components/drawer/drawer.component.ts", lineNumber: 39 });
})();

export {
  FuseLoadingService,
  fuseLoadingInterceptor,
  FuseDrawerComponent
};
//# sourceMappingURL=chunk-CYJ5FECQ.js.map
