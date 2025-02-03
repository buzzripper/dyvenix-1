import {
  CdkPortalOutlet,
  PortalModule,
  TemplatePortal
} from "./chunk-KMA6I4WH.js";
import {
  UniqueSelectionDispatcher
} from "./chunk-OF77XAQN.js";
import {
  FuseAlertComponent
} from "./chunk-OLPBZMG7.js";
import "./chunk-LWCQAMDH.js";
import {
  CdkTextareaAutosize,
  MatInput,
  MatInputModule,
  TextFieldModule
} from "./chunk-GIY2YYWB.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix
} from "./chunk-2W4O77WS.js";
import "./chunk-BNTOCQMY.js";
import {
  DefaultValueAccessor,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  RequiredValidator,
  UntypedFormBuilder,
  Validators,
  ɵNgNoValidate
} from "./chunk-J5XV3GIF.js";
import {
  MatAnchor,
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-JPDBWMRG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5AHQJJ5Y.js";
import {
  ENTER,
  FocusKeyManager,
  FocusMonitor,
  MatCommonModule,
  SPACE,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  hasModifierKey
} from "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import {
  fuseAnimations
} from "./chunk-HKG3E5RP.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-WH7F4HUX.js";
import {
  ActivatedRoute,
  Router,
  RouterLink
} from "./chunk-WTEW5YKI.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  DOCUMENT
} from "./chunk-M6AYR6A2.js";
import {
  ANIMATION_MODULE_TYPE,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  InjectionToken,
  Input,
  NgModule,
  NgZone,
  Output,
  QueryList,
  Renderer2,
  ReplaySubject,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  booleanAttribute,
  filter,
  inject,
  merge,
  numberAttribute,
  setClassMetadata,
  startWith,
  take,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// node_modules/@angular/cdk/fesm2022/accordion.mjs
var CDK_ACCORDION = new InjectionToken("CdkAccordion");
var CdkAccordion = class _CdkAccordion {
  /** Emits when the state of the accordion changes */
  _stateChanges = new Subject();
  /** Stream that emits true/false when openAll/closeAll is triggered. */
  _openCloseAllActions = new Subject();
  /** A readonly id value to use for unique selection coordination. */
  id = inject(_IdGenerator).getId("cdk-accordion-");
  /** Whether the accordion should allow multiple expanded accordion items simultaneously. */
  multi = false;
  /** Opens all enabled accordion items in an accordion where multi is enabled. */
  openAll() {
    if (this.multi) {
      this._openCloseAllActions.next(true);
    }
  }
  /** Closes all enabled accordion items. */
  closeAll() {
    this._openCloseAllActions.next(false);
  }
  ngOnChanges(changes) {
    this._stateChanges.next(changes);
  }
  ngOnDestroy() {
    this._stateChanges.complete();
    this._openCloseAllActions.complete();
  }
  static \u0275fac = function CdkAccordion_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordion)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordion,
    selectors: [["cdk-accordion"], ["", "cdkAccordion", ""]],
    inputs: {
      multi: [2, "multi", "multi", booleanAttribute]
    },
    exportAs: ["cdkAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CDK_ACCORDION,
      useExisting: _CdkAccordion
    }]), \u0275\u0275InputTransformsFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordion, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion, [cdkAccordion]",
      exportAs: "cdkAccordion",
      providers: [{
        provide: CDK_ACCORDION,
        useExisting: CdkAccordion
      }]
    }]
  }], null, {
    multi: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkAccordionItem = class _CdkAccordionItem {
  accordion = inject(CDK_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  _changeDetectorRef = inject(ChangeDetectorRef);
  _expansionDispatcher = inject(UniqueSelectionDispatcher);
  /** Subscription to openAll/closeAll events. */
  _openCloseAllSubscription = Subscription.EMPTY;
  /** Event emitted every time the AccordionItem is closed. */
  closed = new EventEmitter();
  /** Event emitted every time the AccordionItem is opened. */
  opened = new EventEmitter();
  /** Event emitted when the AccordionItem is destroyed. */
  destroyed = new EventEmitter();
  /**
   * Emits whenever the expanded state of the accordion changes.
   * Primarily used to facilitate two-way binding.
   * @docs-private
   */
  expandedChange = new EventEmitter();
  /** The unique AccordionItem id. */
  id = inject(_IdGenerator).getId("cdk-accordion-child-");
  /** Whether the AccordionItem is expanded. */
  get expanded() {
    return this._expanded;
  }
  set expanded(expanded) {
    if (this._expanded !== expanded) {
      this._expanded = expanded;
      this.expandedChange.emit(expanded);
      if (expanded) {
        this.opened.emit();
        const accordionId = this.accordion ? this.accordion.id : this.id;
        this._expansionDispatcher.notify(this.id, accordionId);
      } else {
        this.closed.emit();
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  _expanded = false;
  /** Whether the AccordionItem is disabled. */
  disabled = false;
  /** Unregister function for _expansionDispatcher. */
  _removeUniqueSelectionListener = () => {
  };
  constructor() {
  }
  ngOnInit() {
    this._removeUniqueSelectionListener = this._expansionDispatcher.listen((id, accordionId) => {
      if (this.accordion && !this.accordion.multi && this.accordion.id === accordionId && this.id !== id) {
        this.expanded = false;
      }
    });
    if (this.accordion) {
      this._openCloseAllSubscription = this._subscribeToOpenCloseAllActions();
    }
  }
  /** Emits an event for the accordion item being destroyed. */
  ngOnDestroy() {
    this.opened.complete();
    this.closed.complete();
    this.destroyed.emit();
    this.destroyed.complete();
    this._removeUniqueSelectionListener();
    this._openCloseAllSubscription.unsubscribe();
  }
  /** Toggles the expanded state of the accordion item. */
  toggle() {
    if (!this.disabled) {
      this.expanded = !this.expanded;
    }
  }
  /** Sets the expanded state of the accordion item to false. */
  close() {
    if (!this.disabled) {
      this.expanded = false;
    }
  }
  /** Sets the expanded state of the accordion item to true. */
  open() {
    if (!this.disabled) {
      this.expanded = true;
    }
  }
  _subscribeToOpenCloseAllActions() {
    return this.accordion._openCloseAllActions.subscribe((expanded) => {
      if (!this.disabled) {
        this.expanded = expanded;
      }
    });
  }
  static \u0275fac = function CdkAccordionItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionItem)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkAccordionItem,
    selectors: [["cdk-accordion-item"], ["", "cdkAccordionItem", ""]],
    inputs: {
      expanded: [2, "expanded", "expanded", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      closed: "closed",
      opened: "opened",
      destroyed: "destroyed",
      expandedChange: "expandedChange"
    },
    exportAs: ["cdkAccordionItem"],
    features: [\u0275\u0275ProvidersFeature([
      // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
      // registering to the same accordion.
      {
        provide: CDK_ACCORDION,
        useValue: void 0
      }
    ]), \u0275\u0275InputTransformsFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionItem, [{
    type: Directive,
    args: [{
      selector: "cdk-accordion-item, [cdkAccordionItem]",
      exportAs: "cdkAccordionItem",
      providers: [
        // Provide `CDK_ACCORDION` as undefined to prevent nested accordion items from
        // registering to the same accordion.
        {
          provide: CDK_ACCORDION,
          useValue: void 0
        }
      ]
    }]
  }], () => [], {
    closed: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    destroyed: [{
      type: Output
    }],
    expandedChange: [{
      type: Output
    }],
    expanded: [{
      type: Input,
      args: [{
        transform: booleanAttribute
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
var CdkAccordionModule = class _CdkAccordionModule {
  static \u0275fac = function CdkAccordionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkAccordionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkAccordionModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkAccordionModule, [{
    type: NgModule,
    args: [{
      imports: [CdkAccordion, CdkAccordionItem],
      exports: [CdkAccordion, CdkAccordionItem]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/expansion.mjs
var _c0 = ["body"];
var _c1 = ["bodyWrapper"];
var _c2 = [[["mat-expansion-panel-header"]], "*", [["mat-action-row"]]];
var _c3 = ["mat-expansion-panel-header", "*", "mat-action-row"];
function MatExpansionPanel_ng_template_7_Template(rf, ctx) {
}
var _c4 = [[["mat-panel-title"]], [["mat-panel-description"]], "*"];
var _c5 = ["mat-panel-title", "mat-panel-description", "*"];
function MatExpansionPanelHeader_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 1);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 2);
    \u0275\u0275element(2, "path", 3);
    \u0275\u0275elementEnd()();
  }
}
var MAT_ACCORDION = new InjectionToken("MAT_ACCORDION");
var MAT_EXPANSION_PANEL = new InjectionToken("MAT_EXPANSION_PANEL");
var MatExpansionPanelContent = class _MatExpansionPanelContent {
  _template = inject(TemplateRef);
  _expansionPanel = inject(MAT_EXPANSION_PANEL, {
    optional: true
  });
  constructor() {
  }
  static \u0275fac = function MatExpansionPanelContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelContent,
    selectors: [["ng-template", "matExpansionPanelContent", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelContent, [{
    type: Directive,
    args: [{
      selector: "ng-template[matExpansionPanelContent]"
    }]
  }], () => [], null);
})();
var MAT_EXPANSION_PANEL_DEFAULT_OPTIONS = new InjectionToken("MAT_EXPANSION_PANEL_DEFAULT_OPTIONS");
var MatExpansionPanel = class _MatExpansionPanel extends CdkAccordionItem {
  _viewContainerRef = inject(ViewContainerRef);
  _animationsDisabled = inject(ANIMATION_MODULE_TYPE, {
    optional: true
  }) === "NoopAnimations";
  _document = inject(DOCUMENT);
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  /** Whether the toggle indicator should be hidden. */
  get hideToggle() {
    return this._hideToggle || this.accordion && this.accordion.hideToggle;
  }
  set hideToggle(value) {
    this._hideToggle = value;
  }
  _hideToggle = false;
  /** The position of the expansion indicator. */
  get togglePosition() {
    return this._togglePosition || this.accordion && this.accordion.togglePosition;
  }
  set togglePosition(value) {
    this._togglePosition = value;
  }
  _togglePosition;
  /** An event emitted after the body's expansion animation happens. */
  afterExpand = new EventEmitter();
  /** An event emitted after the body's collapse animation happens. */
  afterCollapse = new EventEmitter();
  /** Stream that emits for changes in `@Input` properties. */
  _inputChanges = new Subject();
  /** Optionally defined accordion the expansion panel belongs to. */
  accordion = inject(MAT_ACCORDION, {
    optional: true,
    skipSelf: true
  });
  /** Content that will be rendered lazily. */
  _lazyContent;
  /** Element containing the panel's user-provided content. */
  _body;
  /** Element wrapping the panel body. */
  _bodyWrapper;
  /** Portal holding the user's content. */
  _portal;
  /** ID for the associated header element. Used for a11y labelling. */
  _headerId = inject(_IdGenerator).getId("mat-expansion-panel-header-");
  constructor() {
    super();
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    this._expansionDispatcher = inject(UniqueSelectionDispatcher);
    if (defaultOptions) {
      this.hideToggle = defaultOptions.hideToggle;
    }
  }
  /** Determines whether the expansion panel should have spacing between it and its siblings. */
  _hasSpacing() {
    if (this.accordion) {
      return this.expanded && this.accordion.displayMode === "default";
    }
    return false;
  }
  /** Gets the expanded state string. */
  _getExpandedState() {
    return this.expanded ? "expanded" : "collapsed";
  }
  /** Toggles the expanded state of the expansion panel. */
  toggle() {
    this.expanded = !this.expanded;
  }
  /** Sets the expanded state of the expansion panel to false. */
  close() {
    this.expanded = false;
  }
  /** Sets the expanded state of the expansion panel to true. */
  open() {
    this.expanded = true;
  }
  ngAfterContentInit() {
    if (this._lazyContent && this._lazyContent._expansionPanel === this) {
      this.opened.pipe(startWith(null), filter(() => this.expanded && !this._portal), take(1)).subscribe(() => {
        this._portal = new TemplatePortal(this._lazyContent._template, this._viewContainerRef);
      });
    }
    this._setupAnimationEvents();
  }
  ngOnChanges(changes) {
    this._inputChanges.next(changes);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._cleanupTransitionEnd?.();
    this._inputChanges.complete();
  }
  /** Checks whether the expansion panel's content contains the currently-focused element. */
  _containsFocus() {
    if (this._body) {
      const focusedElement = this._document.activeElement;
      const bodyElement = this._body.nativeElement;
      return focusedElement === bodyElement || bodyElement.contains(focusedElement);
    }
    return false;
  }
  _transitionEndListener = ({
    target,
    propertyName
  }) => {
    if (target === this._bodyWrapper?.nativeElement && propertyName === "grid-template-rows") {
      this._ngZone.run(() => {
        if (this.expanded) {
          this.afterExpand.emit();
        } else {
          this.afterCollapse.emit();
        }
      });
    }
  };
  _setupAnimationEvents() {
    this._ngZone.runOutsideAngular(() => {
      if (this._animationsDisabled) {
        this.opened.subscribe(() => this._ngZone.run(() => this.afterExpand.emit()));
        this.closed.subscribe(() => this._ngZone.run(() => this.afterCollapse.emit()));
      } else {
        setTimeout(() => {
          const element = this._elementRef.nativeElement;
          this._cleanupTransitionEnd = this._renderer.listen(element, "transitionend", this._transitionEndListener);
          element.classList.add("mat-expansion-panel-animations-enabled");
        }, 200);
      }
    });
  }
  static \u0275fac = function MatExpansionPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanel,
    selectors: [["mat-expansion-panel"]],
    contentQueries: function MatExpansionPanel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelContent, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._lazyContent = _t.first);
      }
    },
    viewQuery: function MatExpansionPanel_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._body = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._bodyWrapper = _t.first);
      }
    },
    hostAttrs: [1, "mat-expansion-panel"],
    hostVars: 4,
    hostBindings: function MatExpansionPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-expanded", ctx.expanded)("mat-expansion-panel-spacing", ctx._hasSpacing());
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      togglePosition: "togglePosition"
    },
    outputs: {
      afterExpand: "afterExpand",
      afterCollapse: "afterCollapse"
    },
    exportAs: ["matExpansionPanel"],
    features: [\u0275\u0275ProvidersFeature([
      // Provide MatAccordion as undefined to prevent nested expansion panels from registering
      // to the same accordion.
      {
        provide: MAT_ACCORDION,
        useValue: void 0
      },
      {
        provide: MAT_EXPANSION_PANEL,
        useExisting: _MatExpansionPanel
      }
    ]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 4,
    consts: [["bodyWrapper", ""], ["body", ""], [1, "mat-expansion-panel-content-wrapper"], ["role", "region", 1, "mat-expansion-panel-content", 3, "id"], [1, "mat-expansion-panel-body"], [3, "cdkPortalOutlet"]],
    template: function MatExpansionPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c2);
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2, 0)(3, "div", 3, 1)(5, "div", 4);
        \u0275\u0275projection(6, 1);
        \u0275\u0275template(7, MatExpansionPanel_ng_template_7_Template, 0, 0, "ng-template", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275projection(8, 2);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275attribute("inert", ctx.expanded ? null : "");
        \u0275\u0275advance(2);
        \u0275\u0275property("id", ctx.id);
        \u0275\u0275attribute("aria-labelledby", ctx._headerId);
        \u0275\u0275advance(4);
        \u0275\u0275property("cdkPortalOutlet", ctx._portal);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanel, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel",
      exportAs: "matExpansionPanel",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [
        // Provide MatAccordion as undefined to prevent nested expansion panels from registering
        // to the same accordion.
        {
          provide: MAT_ACCORDION,
          useValue: void 0
        },
        {
          provide: MAT_EXPANSION_PANEL,
          useExisting: MatExpansionPanel
        }
      ],
      host: {
        "class": "mat-expansion-panel",
        "[class.mat-expanded]": "expanded",
        "[class.mat-expansion-panel-spacing]": "_hasSpacing()"
      },
      imports: [CdkPortalOutlet],
      template: `<ng-content select="mat-expansion-panel-header"></ng-content>
<div class="mat-expansion-panel-content-wrapper" [attr.inert]="expanded ? null : ''" #bodyWrapper>
  <div class="mat-expansion-panel-content"
       role="region"
       [attr.aria-labelledby]="_headerId"
       [id]="id"
       #body>
    <div class="mat-expansion-panel-body">
      <ng-content></ng-content>
      <ng-template [cdkPortalOutlet]="_portal"></ng-template>
    </div>
    <ng-content select="mat-action-row"></ng-content>
  </div>
</div>
`,
      styles: [".mat-expansion-panel{box-sizing:content-box;display:block;margin:0;overflow:hidden;position:relative;background:var(--mat-expansion-container-background-color, var(--mat-sys-surface));color:var(--mat-expansion-container-text-color, var(--mat-sys-on-surface));border-radius:var(--mat-expansion-container-shape, 12px)}.mat-expansion-panel.mat-expansion-panel-animations-enabled{transition:margin 225ms cubic-bezier(0.4, 0, 0.2, 1),box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel:not([class*=mat-elevation-z]){box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}.mat-accordion .mat-expansion-panel:not(.mat-expanded),.mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing){border-radius:0}.mat-accordion .mat-expansion-panel:first-of-type{border-top-right-radius:var(--mat-expansion-container-shape, 12px);border-top-left-radius:var(--mat-expansion-container-shape, 12px)}.mat-accordion .mat-expansion-panel:last-of-type{border-bottom-right-radius:var(--mat-expansion-container-shape, 12px);border-bottom-left-radius:var(--mat-expansion-container-shape, 12px)}@media(forced-colors: active){.mat-expansion-panel{outline:solid 1px}}.mat-expansion-panel-content-wrapper{display:grid;grid-template-rows:0fr;grid-template-columns:100%}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper{transition:grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{grid-template-rows:1fr}@supports not (grid-template-rows: 0fr){.mat-expansion-panel-content-wrapper{height:0}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper{height:auto}}.mat-expansion-panel-content{display:flex;flex-direction:column;overflow:visible;min-height:0;visibility:hidden;font-family:var(--mat-expansion-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-expansion-container-text-size, var(--mat-sys-body-large-size));font-weight:var(--mat-expansion-container-text-weight, var(--mat-sys-body-large-weight));line-height:var(--mat-expansion-container-text-line-height, var(--mat-sys-body-large-line-height));letter-spacing:var(--mat-expansion-container-text-tracking, var(--mat-sys-body-large-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-content{transition:visibility 190ms linear}.mat-expansion-panel.mat-expanded>.mat-expansion-panel-content-wrapper>.mat-expansion-panel-content{visibility:visible}.mat-expansion-panel-body{padding:0 24px 16px}.mat-expansion-panel-spacing{margin:16px 0}.mat-accordion>.mat-expansion-panel-spacing:first-child,.mat-accordion>*:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-top:0}.mat-accordion>.mat-expansion-panel-spacing:last-child,.mat-accordion>*:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing{margin-bottom:0}.mat-action-row{border-top-style:solid;border-top-width:1px;display:flex;flex-direction:row;justify-content:flex-end;padding:16px 8px 16px 24px;border-top-color:var(--mat-expansion-actions-divider-color, var(--mat-sys-outline))}.mat-action-row .mat-button-base,.mat-action-row .mat-mdc-button-base{margin-left:8px}[dir=rtl] .mat-action-row .mat-button-base,[dir=rtl] .mat-action-row .mat-mdc-button-base{margin-left:0;margin-right:8px}"]
    }]
  }], () => [], {
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    togglePosition: [{
      type: Input
    }],
    afterExpand: [{
      type: Output
    }],
    afterCollapse: [{
      type: Output
    }],
    _lazyContent: [{
      type: ContentChild,
      args: [MatExpansionPanelContent]
    }],
    _body: [{
      type: ViewChild,
      args: ["body"]
    }],
    _bodyWrapper: [{
      type: ViewChild,
      args: ["bodyWrapper"]
    }]
  });
})();
var MatExpansionPanelActionRow = class _MatExpansionPanelActionRow {
  static \u0275fac = function MatExpansionPanelActionRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelActionRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelActionRow,
    selectors: [["mat-action-row"]],
    hostAttrs: [1, "mat-action-row"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelActionRow, [{
    type: Directive,
    args: [{
      selector: "mat-action-row",
      host: {
        class: "mat-action-row"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelHeader = class _MatExpansionPanelHeader {
  panel = inject(MatExpansionPanel, {
    host: true
  });
  _element = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _parentChangeSubscription = Subscription.EMPTY;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const panel = this.panel;
    const defaultOptions = inject(MAT_EXPANSION_PANEL_DEFAULT_OPTIONS, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const accordionHideToggleChange = panel.accordion ? panel.accordion._stateChanges.pipe(filter((changes) => !!(changes["hideToggle"] || changes["togglePosition"]))) : EMPTY;
    this.tabIndex = parseInt(tabIndex || "") || 0;
    this._parentChangeSubscription = merge(panel.opened, panel.closed, accordionHideToggleChange, panel._inputChanges.pipe(filter((changes) => {
      return !!(changes["hideToggle"] || changes["disabled"] || changes["togglePosition"]);
    }))).subscribe(() => this._changeDetectorRef.markForCheck());
    panel.closed.pipe(filter(() => panel._containsFocus())).subscribe(() => this._focusMonitor.focusVia(this._element, "program"));
    if (defaultOptions) {
      this.expandedHeight = defaultOptions.expandedHeight;
      this.collapsedHeight = defaultOptions.collapsedHeight;
    }
  }
  /** Height of the header while the panel is expanded. */
  expandedHeight;
  /** Height of the header while the panel is collapsed. */
  collapsedHeight;
  /** Tab index of the header. */
  tabIndex = 0;
  /**
   * Whether the associated panel is disabled. Implemented as a part of `FocusableOption`.
   * @docs-private
   */
  get disabled() {
    return this.panel.disabled;
  }
  /** Toggles the expanded state of the panel. */
  _toggle() {
    if (!this.disabled) {
      this.panel.toggle();
    }
  }
  /** Gets whether the panel is expanded. */
  _isExpanded() {
    return this.panel.expanded;
  }
  /** Gets the expanded state string of the panel. */
  _getExpandedState() {
    return this.panel._getExpandedState();
  }
  /** Gets the panel id. */
  _getPanelId() {
    return this.panel.id;
  }
  /** Gets the toggle position for the header. */
  _getTogglePosition() {
    return this.panel.togglePosition;
  }
  /** Gets whether the expand indicator should be shown. */
  _showToggle() {
    return !this.panel.hideToggle && !this.panel.disabled;
  }
  /**
   * Gets the current height of the header. Null if no custom height has been
   * specified, and if the default height from the stylesheet should be used.
   */
  _getHeaderHeight() {
    const isExpanded = this._isExpanded();
    if (isExpanded && this.expandedHeight) {
      return this.expandedHeight;
    } else if (!isExpanded && this.collapsedHeight) {
      return this.collapsedHeight;
    }
    return null;
  }
  /** Handle keydown event calling to toggle() if appropriate. */
  _keydown(event) {
    switch (event.keyCode) {
      // Toggle for space and enter keys.
      case SPACE:
      case ENTER:
        if (!hasModifierKey(event)) {
          event.preventDefault();
          this._toggle();
        }
        break;
      default:
        if (this.panel.accordion) {
          this.panel.accordion._handleHeaderKeydown(event);
        }
        return;
    }
  }
  /**
   * Focuses the panel header. Implemented as a part of `FocusableOption`.
   * @param origin Origin of the action that triggered the focus.
   * @docs-private
   */
  focus(origin, options) {
    if (origin) {
      this._focusMonitor.focusVia(this._element, origin, options);
    } else {
      this._element.nativeElement.focus(options);
    }
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this._element).subscribe((origin) => {
      if (origin && this.panel.accordion) {
        this.panel.accordion._handleHeaderFocus(this);
      }
    });
  }
  ngOnDestroy() {
    this._parentChangeSubscription.unsubscribe();
    this._focusMonitor.stopMonitoring(this._element);
  }
  static \u0275fac = function MatExpansionPanelHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelHeader)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatExpansionPanelHeader,
    selectors: [["mat-expansion-panel-header"]],
    hostAttrs: ["role", "button", 1, "mat-expansion-panel-header", "mat-focus-indicator"],
    hostVars: 13,
    hostBindings: function MatExpansionPanelHeader_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("click", function MatExpansionPanelHeader_click_HostBindingHandler() {
          return ctx._toggle();
        })("keydown", function MatExpansionPanelHeader_keydown_HostBindingHandler($event) {
          return ctx._keydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("id", ctx.panel._headerId)("tabindex", ctx.disabled ? -1 : ctx.tabIndex)("aria-controls", ctx._getPanelId())("aria-expanded", ctx._isExpanded())("aria-disabled", ctx.panel.disabled);
        \u0275\u0275styleProp("height", ctx._getHeaderHeight());
        \u0275\u0275classProp("mat-expanded", ctx._isExpanded())("mat-expansion-toggle-indicator-after", ctx._getTogglePosition() === "after")("mat-expansion-toggle-indicator-before", ctx._getTogglePosition() === "before");
      }
    },
    inputs: {
      expandedHeight: "expandedHeight",
      collapsedHeight: "collapsedHeight",
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)]
    },
    features: [\u0275\u0275InputTransformsFeature],
    ngContentSelectors: _c5,
    decls: 5,
    vars: 3,
    consts: [[1, "mat-content"], [1, "mat-expansion-indicator"], ["xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 -960 960 960", "aria-hidden", "true", "focusable", "false"], ["d", "M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"]],
    template: function MatExpansionPanelHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c4);
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275projection(1);
        \u0275\u0275projection(2, 1);
        \u0275\u0275projection(3, 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(4, MatExpansionPanelHeader_Conditional_4_Template, 3, 0, "span", 1);
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-content-hide-toggle", !ctx._showToggle());
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx._showToggle() ? 4 : -1);
      }
    },
    styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelHeader, [{
    type: Component,
    args: [{
      selector: "mat-expansion-panel-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      host: {
        "class": "mat-expansion-panel-header mat-focus-indicator",
        "role": "button",
        "[attr.id]": "panel._headerId",
        "[attr.tabindex]": "disabled ? -1 : tabIndex",
        "[attr.aria-controls]": "_getPanelId()",
        "[attr.aria-expanded]": "_isExpanded()",
        "[attr.aria-disabled]": "panel.disabled",
        "[class.mat-expanded]": "_isExpanded()",
        "[class.mat-expansion-toggle-indicator-after]": `_getTogglePosition() === 'after'`,
        "[class.mat-expansion-toggle-indicator-before]": `_getTogglePosition() === 'before'`,
        "[style.height]": "_getHeaderHeight()",
        "(click)": "_toggle()",
        "(keydown)": "_keydown($event)"
      },
      template: '<span class="mat-content" [class.mat-content-hide-toggle]="!_showToggle()">\n  <ng-content select="mat-panel-title"></ng-content>\n  <ng-content select="mat-panel-description"></ng-content>\n  <ng-content></ng-content>\n</span>\n\n@if (_showToggle()) {\n  <span class="mat-expansion-indicator">\n    <svg\n      xmlns="http://www.w3.org/2000/svg"\n      viewBox="0 -960 960 960"\n      aria-hidden="true"\n      focusable="false">\n      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z"/>\n    </svg>\n  </span>\n}\n',
      styles: ['.mat-expansion-panel-header{display:flex;flex-direction:row;align-items:center;padding:0 24px;border-radius:inherit;height:var(--mat-expansion-header-collapsed-state-height, 48px);font-family:var(--mat-expansion-header-text-font, var(--mat-sys-title-medium-font));font-size:var(--mat-expansion-header-text-size, var(--mat-sys-title-medium-size));font-weight:var(--mat-expansion-header-text-weight, var(--mat-sys-title-medium-weight));line-height:var(--mat-expansion-header-text-line-height, var(--mat-sys-title-medium-line-height));letter-spacing:var(--mat-expansion-header-text-tracking, var(--mat-sys-title-medium-tracking))}.mat-expansion-panel-animations-enabled .mat-expansion-panel-header{transition:height 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded{height:var(--mat-expansion-header-expanded-state-height, 64px)}.mat-expansion-panel-header[aria-disabled=true]{color:var(--mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}.mat-expansion-panel-header:not([aria-disabled=true]){cursor:pointer}.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-hover-state-layer-opacity) * 100%), transparent))}@media(hover: none){.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover{background:var(--mat-expansion-container-background-color, var(--mat-sys-surface))}}.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused,.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused{background:var(--mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-on-surface) calc(var(--mat-sys-focus-state-layer-opacity) * 100%), transparent))}.mat-expansion-panel-header._mat-animation-noopable{transition:none}.mat-expansion-panel-header:focus,.mat-expansion-panel-header:hover{outline:none}.mat-expansion-panel-header.mat-expanded:focus,.mat-expansion-panel-header.mat-expanded:hover{background:inherit}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before{flex-direction:row-reverse}.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 16px 0 0}[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator{margin:0 0 0 16px}.mat-content{display:flex;flex:1;flex-direction:row;overflow:hidden}.mat-content.mat-content-hide-toggle{margin-right:8px}[dir=rtl] .mat-content.mat-content-hide-toggle{margin-right:0;margin-left:8px}.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-left:24px;margin-right:0}[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle{margin-right:24px;margin-left:0}.mat-expansion-panel-header-title{color:var(--mat-expansion-header-text-color, var(--mat-sys-on-surface))}.mat-expansion-panel-header-title,.mat-expansion-panel-header-description{display:flex;flex-grow:1;flex-basis:0;margin-right:16px;align-items:center}[dir=rtl] .mat-expansion-panel-header-title,[dir=rtl] .mat-expansion-panel-header-description{margin-right:0;margin-left:16px}.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description{color:inherit}.mat-expansion-panel-header-description{flex-grow:2;color:var(--mat-expansion-header-description-color, var(--mat-sys-on-surface-variant))}.mat-expansion-panel-animations-enabled .mat-expansion-indicator{transition:transform 225ms cubic-bezier(0.4, 0, 0.2, 1)}.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator{transform:rotate(180deg)}.mat-expansion-indicator::after{border-style:solid;border-width:0 2px 2px 0;content:"";display:inline-block;padding:3px;transform:rotate(45deg);vertical-align:middle;color:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-legacy-header-indicator-display, none)}.mat-expansion-indicator svg{width:24px;height:24px;margin:0 -8px;vertical-align:middle;fill:var(--mat-expansion-header-indicator-color, var(--mat-sys-on-surface-variant));display:var(--mat-expansion-header-indicator-display, inline-block)}@media(forced-colors: active){.mat-expansion-panel-content{border-top:1px solid;border-top-left-radius:0;border-top-right-radius:0}}']
    }]
  }], () => [], {
    expandedHeight: [{
      type: Input
    }],
    collapsedHeight: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }]
  });
})();
var MatExpansionPanelDescription = class _MatExpansionPanelDescription {
  static \u0275fac = function MatExpansionPanelDescription_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelDescription)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelDescription,
    selectors: [["mat-panel-description"]],
    hostAttrs: [1, "mat-expansion-panel-header-description"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelDescription, [{
    type: Directive,
    args: [{
      selector: "mat-panel-description",
      host: {
        class: "mat-expansion-panel-header-description"
      }
    }]
  }], null, null);
})();
var MatExpansionPanelTitle = class _MatExpansionPanelTitle {
  static \u0275fac = function MatExpansionPanelTitle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionPanelTitle)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatExpansionPanelTitle,
    selectors: [["mat-panel-title"]],
    hostAttrs: [1, "mat-expansion-panel-header-title"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionPanelTitle, [{
    type: Directive,
    args: [{
      selector: "mat-panel-title",
      host: {
        class: "mat-expansion-panel-header-title"
      }
    }]
  }], null, null);
})();
var MatAccordion = class _MatAccordion extends CdkAccordion {
  _keyManager;
  /** Headers belonging to this accordion. */
  _ownHeaders = new QueryList();
  /** All headers inside the accordion. Includes headers inside nested accordions. */
  _headers;
  /** Whether the expansion indicator should be hidden. */
  hideToggle = false;
  /**
   * Display mode used for all expansion panels in the accordion. Currently two display
   * modes exist:
   *  default - a gutter-like spacing is placed around any expanded panel, placing the expanded
   *     panel at a different elevation from the rest of the accordion.
   *  flat - no spacing is placed around expanded panels, showing all panels at the same
   *     elevation.
   */
  displayMode = "default";
  /** The position of the expansion indicator. */
  togglePosition = "after";
  ngAfterContentInit() {
    this._headers.changes.pipe(startWith(this._headers)).subscribe((headers) => {
      this._ownHeaders.reset(headers.filter((header) => header.panel.accordion === this));
      this._ownHeaders.notifyOnChanges();
    });
    this._keyManager = new FocusKeyManager(this._ownHeaders).withWrap().withHomeAndEnd();
  }
  /** Handles keyboard events coming in from the panel headers. */
  _handleHeaderKeydown(event) {
    this._keyManager.onKeydown(event);
  }
  _handleHeaderFocus(header) {
    this._keyManager.updateActiveItem(header);
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._keyManager?.destroy();
    this._ownHeaders.destroy();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatAccordion_BaseFactory;
    return function MatAccordion_Factory(__ngFactoryType__) {
      return (\u0275MatAccordion_BaseFactory || (\u0275MatAccordion_BaseFactory = \u0275\u0275getInheritedFactory(_MatAccordion)))(__ngFactoryType__ || _MatAccordion);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAccordion,
    selectors: [["mat-accordion"]],
    contentQueries: function MatAccordion_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatExpansionPanelHeader, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._headers = _t);
      }
    },
    hostAttrs: [1, "mat-accordion"],
    hostVars: 2,
    hostBindings: function MatAccordion_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-accordion-multi", ctx.multi);
      }
    },
    inputs: {
      hideToggle: [2, "hideToggle", "hideToggle", booleanAttribute],
      displayMode: "displayMode",
      togglePosition: "togglePosition"
    },
    exportAs: ["matAccordion"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_ACCORDION,
      useExisting: _MatAccordion
    }]), \u0275\u0275InputTransformsFeature, \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAccordion, [{
    type: Directive,
    args: [{
      selector: "mat-accordion",
      exportAs: "matAccordion",
      providers: [{
        provide: MAT_ACCORDION,
        useExisting: MatAccordion
      }],
      host: {
        class: "mat-accordion",
        // Class binding which is only used by the test harness as there is no other
        // way for the harness to detect if multiple panel support is enabled.
        "[class.mat-accordion-multi]": "this.multi"
      }
    }]
  }], null, {
    _headers: [{
      type: ContentChildren,
      args: [MatExpansionPanelHeader, {
        descendants: true
      }]
    }],
    hideToggle: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    displayMode: [{
      type: Input
    }],
    togglePosition: [{
      type: Input
    }]
  });
})();
var MatExpansionModule = class _MatExpansionModule {
  static \u0275fac = function MatExpansionModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatExpansionModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatExpansionModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkAccordionModule, PortalModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatExpansionModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkAccordionModule, PortalModule, MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent],
      exports: [MatAccordion, MatExpansionPanel, MatExpansionPanelActionRow, MatExpansionPanelHeader, MatExpansionPanelTitle, MatExpansionPanelDescription, MatExpansionPanelContent]
    }]
  }], null, null);
})();
var EXPANSION_PANEL_ANIMATION_TIMING = "225ms cubic-bezier(0.4,0.0,0.2,1)";
var matExpansionAnimations = {
  /** Animation that rotates the indicator arrow. */
  indicatorRotate: trigger("indicatorRotate", [state("collapsed, void", style({
    transform: "rotate(0deg)"
  })), state("expanded", style({
    transform: "rotate(180deg)"
  })), transition("expanded <=> collapsed, void => collapsed", animate(EXPANSION_PANEL_ANIMATION_TIMING))]),
  /** Animation that expands and collapses the panel content. */
  bodyExpansion: trigger("bodyExpansion", [
    state("collapsed, void", style({
      height: "0px",
      visibility: "hidden"
    })),
    // Clear the `visibility` while open, otherwise the content will be visible when placed in
    // a parent that's `visibility: hidden`, because `visibility` doesn't apply to descendants
    // that have a `visibility` of their own (see #27436).
    state("expanded", style({
      height: "*",
      visibility: ""
    })),
    transition("expanded <=> collapsed, void => collapsed", animate(EXPANSION_PANEL_ANIMATION_TIMING))
  ])
};

// src/app/modules/admin/apps/help-center/help-center.service.ts
var HelpCenterService = class _HelpCenterService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._faqs = new ReplaySubject(1);
    this._guides = new ReplaySubject(1);
    this._guide = new ReplaySubject(1);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for FAQs
   */
  get faqs$() {
    return this._faqs.asObservable();
  }
  /**
   * Getter for guides
   */
  get guides$() {
    return this._guides.asObservable();
  }
  /**
   * Getter for guide
   */
  get guide$() {
    return this._guide.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get all FAQs
   */
  getAllFaqs() {
    return this._httpClient.get("api/apps/help-center/faqs").pipe(tap((response) => {
      this._faqs.next(response);
    }));
  }
  /**
   * Get FAQs by category using category slug
   *
   * @param slug
   */
  getFaqsByCategory(slug) {
    return this._httpClient.get("api/apps/help-center/faqs", {
      params: { slug }
    }).pipe(tap((response) => {
      this._faqs.next(response);
    }));
  }
  /**
   * Get all guides limited per category by the given number
   *
   * @param limit
   */
  getAllGuides(limit = "4") {
    return this._httpClient.get("api/apps/help-center/guides", {
      params: { limit }
    }).pipe(tap((response) => {
      this._guides.next(response);
    }));
  }
  /**
   * Get guides by category using category slug
   *
   * @param slug
   */
  getGuidesByCategory(slug) {
    return this._httpClient.get("api/apps/help-center/guides", {
      params: { slug }
    }).pipe(tap((response) => {
      this._guides.next(response);
    }));
  }
  /**
   * Get guide by category and guide slug
   *
   * @param categorySlug
   * @param guideSlug
   */
  getGuide(categorySlug, guideSlug) {
    return this._httpClient.get("api/apps/help-center/guide", {
      params: {
        categorySlug,
        guideSlug
      }
    }).pipe(tap((response) => {
      this._guide.next(response);
    }));
  }
  static {
    this.\u0275fac = function HelpCenterService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpCenterService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HelpCenterService, factory: _HelpCenterService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/apps/help-center/faqs/faqs.component.ts
var _c02 = () => ["../"];
function HelpCenterFaqsComponent_For_11_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-expansion-panel")(1, "mat-expansion-panel-header", 10)(2, "mat-panel-title", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("collapsedHeight", "56px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r1.question);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r1.answer, " ");
  }
}
function HelpCenterFaqsComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "mat-accordion", 9);
    \u0275\u0275repeaterCreate(3, HelpCenterFaqsComponent_For_11_For_4_Template, 5, 3, "mat-expansion-panel", null, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faqCategory_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faqCategory_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(faqCategory_r2.faqs);
  }
}
var HelpCenterFaqsComponent = class _HelpCenterFaqsComponent {
  /**
   * Constructor
   */
  constructor(_helpCenterService) {
    this._helpCenterService = _helpCenterService;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._helpCenterService.faqs$.pipe(takeUntil(this._unsubscribeAll)).subscribe((faqCategories) => {
      this.faqCategories = faqCategories;
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  static {
    this.\u0275fac = function HelpCenterFaqsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpCenterFaqsComponent)(\u0275\u0275directiveInject(HelpCenterService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpCenterFaqsComponent, selectors: [["help-center-faqs"]], decls: 12, vars: 4, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "flex", "flex-col", "items-center", "p-6", "sm:p-10"], [1, "flex", "w-full", "max-w-4xl", "flex-col"], [1, "-ml-4", "sm:mt-8"], ["mat-button", "", 3, "routerLink", "color"], [3, "svgIcon"], [1, "ml-2"], [1, "mt-2", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight", "sm:text-7xl"], [1, "mt-12", "text-3xl", "font-bold", "leading-tight", "tracking-tight", "sm:mt-16"], [1, "mt-8", "max-w-4xl"], [3, "collapsedHeight"], [1, "font-medium", "leading-tight"]], template: function HelpCenterFaqsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275element(5, "mat-icon", 5);
        \u0275\u0275elementStart(6, "span", 6);
        \u0275\u0275text(7, "Back to Help Center");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275text(9, " Frequently Asked Questions ");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(10, HelpCenterFaqsComponent_For_11_Template, 5, 1, null, null, ctx.trackByFn, true);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c02))("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-left");
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.faqCategories);
      }
    }, dependencies: [MatButtonModule, MatAnchor, RouterLink, MatIconModule, MatIcon, MatExpansionModule, MatAccordion, MatExpansionPanel, MatExpansionPanelHeader, MatExpansionPanelTitle], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpCenterFaqsComponent, { className: "HelpCenterFaqsComponent", filePath: "src/app/modules/admin/apps/help-center/faqs/faqs.component.ts", lineNumber: 16 });
})();

// src/app/modules/admin/apps/help-center/guides/category/category.component.ts
var _c03 = () => ["../"];
var _c12 = (a0) => [a0];
function HelpCenterGuidesCategoryComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const guide_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(2, _c12, guide_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", guide_r1.title, " ");
  }
}
var HelpCenterGuidesCategoryComponent = class _HelpCenterGuidesCategoryComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _helpCenterService, _router) {
    this._activatedRoute = _activatedRoute;
    this._helpCenterService = _helpCenterService;
    this._router = _router;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._helpCenterService.guides$.pipe(takeUntil(this._unsubscribeAll)).subscribe((guideCategories) => {
      this.guideCategory = guideCategories[0];
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  static {
    this.\u0275fac = function HelpCenterGuidesCategoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpCenterGuidesCategoryComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(HelpCenterService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpCenterGuidesCategoryComponent, selectors: [["help-center-guides-category"]], decls: 13, vars: 5, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "flex", "flex-col", "items-center", "p-6", "sm:p-10"], [1, "flex", "w-full", "max-w-4xl", "flex-col"], [1, "-ml-4", "sm:mt-8"], ["mat-button", "", 3, "routerLink", "color"], [3, "svgIcon"], [1, "ml-2"], [1, "mt-2", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight", "sm:text-7xl"], [1, "mt-8", "flex", "flex-col", "items-start", "space-y-2", "sm:mt-12"], [1, "font-medium", "text-primary-500", "hover:underline", 3, "routerLink"]], template: function HelpCenterGuidesCategoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275element(5, "mat-icon", 5);
        \u0275\u0275elementStart(6, "span", 6);
        \u0275\u0275text(7, "Back to Guides & Resources");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275repeaterCreate(11, HelpCenterGuidesCategoryComponent_For_12_Template, 2, 4, "a", 9, ctx.trackByFn, true);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c03))("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-left");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.guideCategory.title, " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.guideCategory.guides);
      }
    }, dependencies: [MatButtonModule, MatAnchor, RouterLink, MatIconModule, MatIcon], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpCenterGuidesCategoryComponent, { className: "HelpCenterGuidesCategoryComponent", filePath: "src/app/modules/admin/apps/help-center/guides/category/category.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin/apps/help-center/guides/guide/guide.component.ts
var _c04 = () => ["../"];
var HelpCenterGuidesGuideComponent = class _HelpCenterGuidesGuideComponent {
  /**
   * Constructor
   */
  constructor(_helpCenterService) {
    this._helpCenterService = _helpCenterService;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._helpCenterService.guide$.pipe(takeUntil(this._unsubscribeAll)).subscribe((guideCategory) => {
      this.guideCategory = guideCategory;
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  static {
    this.\u0275fac = function HelpCenterGuidesGuideComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpCenterGuidesGuideComponent)(\u0275\u0275directiveInject(HelpCenterService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpCenterGuidesGuideComponent, selectors: [["help-center-guides-guide"]], decls: 31, vars: 12, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "flex", "flex-col", "items-center", "p-6", "sm:p-10"], [1, "flex", "w-full", "max-w-4xl", "flex-col"], [1, "-ml-4", "sm:mt-8"], ["mat-button", "", 3, "routerLink", "color"], [3, "svgIcon"], [1, "ml-2"], [1, "mt-2", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight", "sm:text-7xl"], [1, "text-secondary", "mt-1", "tracking-tight", "sm:text-2xl"], [1, "prose", "prose-sm", "mt-8", "max-w-none", "sm:mt-12", 3, "innerHTML"], [1, "mt-10", "flex", "flex-col", "border-t", "pt-8", "sm:flex-row", "sm:items-center", "sm:justify-between"], [1, "text-secondary", "text-sm", "font-medium"], [1, "mt-2", "flex", "items-center", "sm:mt-0"], [1, "text-secondary", "font-medium"], [1, "ml-4"], ["mat-icon-button", ""], [1, "bg-card", "mt-8", "flex", "items-center", "justify-between", "rounded-2xl", "p-6", "shadow", "transition-shadow", "duration-150", "ease-in-out", "hover:shadow-lg", "sm:px-10", 3, "routerLink"], [1, "text-secondary"], [1, "text-lg", "font-semibold"], [1, "ml-3", 3, "svgIcon"]], template: function HelpCenterGuidesGuideComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275element(5, "mat-icon", 5);
        \u0275\u0275elementStart(6, "span", 6);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275text(9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "div", 9);
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11);
        \u0275\u0275text(15, " Last updated 2 months ago ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 12)(17, "div", 13);
        \u0275\u0275text(18, " Was this page helpful? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 14)(20, "button", 15);
        \u0275\u0275element(21, "mat-icon", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "button", 15);
        \u0275\u0275element(23, "mat-icon", 5);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "a", 16)(25, "div")(26, "div", 17);
        \u0275\u0275text(27, "Next");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div", 18);
        \u0275\u0275text(29, " Removing a media from a project ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(30, "mat-icon", 19);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c04))("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-left");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Back to ", ctx.guideCategory.title, "");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.guideCategory.guides[0].title, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.guideCategory.guides[0].subtitle, " ");
        \u0275\u0275advance();
        \u0275\u0275property("innerHTML", ctx.guideCategory.guides[0].content, \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(9);
        \u0275\u0275property("svgIcon", "heroicons_outline:thumb-up");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_outline:thumb-down");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", ".");
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-right");
      }
    }, dependencies: [MatButtonModule, MatAnchor, MatIconButton, RouterLink, MatIconModule, MatIcon], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpCenterGuidesGuideComponent, { className: "HelpCenterGuidesGuideComponent", filePath: "src/app/modules/admin/apps/help-center/guides/guide/guide.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin/apps/help-center/guides/guides.component.ts
var _c05 = () => ["../"];
var _c13 = (a0) => [a0];
var _c22 = (a0, a1) => [a0, a1];
function HelpCenterGuidesComponent_For_12_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const guide_r1 = ctx.$implicit;
    const guideCategory_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(2, _c22, guideCategory_r2.slug, guide_r1.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", guide_r1.title, " ");
  }
}
function HelpCenterGuidesComponent_For_12_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 12)(1, "span", 13);
    \u0275\u0275text(2, "View All");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "mat-icon", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const guideCategory_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("routerLink", guideCategory_r2.slug);
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-right");
  }
}
function HelpCenterGuidesComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "a", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, HelpCenterGuidesComponent_For_12_For_4_Template, 2, 5, "a", 11, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275template(5, HelpCenterGuidesComponent_For_12_Conditional_5_Template, 4, 2, "a", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const guideCategory_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c13, guideCategory_r2.slug));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", guideCategory_r2.title, " ");
    \u0275\u0275advance();
    \u0275\u0275repeater(guideCategory_r2.guides);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(guideCategory_r2.totalGuides > guideCategory_r2.visibleGuides ? 5 : -1);
  }
}
var HelpCenterGuidesComponent = class _HelpCenterGuidesComponent {
  /**
   * Constructor
   */
  constructor(_helpCenterService) {
    this._helpCenterService = _helpCenterService;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._helpCenterService.guides$.pipe(takeUntil(this._unsubscribeAll)).subscribe((guideCategories) => {
      this.guideCategories = guideCategories;
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  static {
    this.\u0275fac = function HelpCenterGuidesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpCenterGuidesComponent)(\u0275\u0275directiveInject(HelpCenterService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpCenterGuidesComponent, selectors: [["help-center-guides"]], decls: 13, vars: 4, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "flex", "flex-col", "items-center", "p-6", "sm:p-10"], [1, "flex", "w-full", "max-w-4xl", "flex-col"], [1, "-ml-4", "sm:mt-8"], ["mat-button", "", 3, "routerLink", "color"], [3, "svgIcon"], [1, "ml-2"], [1, "mt-2", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight", "sm:text-7xl"], [1, "mt-8", "grid", "grid-flow-row", "grid-cols-1", "gap-y-12", "sm:mt-12", "sm:grid-cols-2", "sm:gap-x-4"], [1, "flex", "flex-col", "items-start"], [1, "mb-1", "flex", "items-center", "text-2xl", "font-semibold", 3, "routerLink"], [1, "mt-3", "font-medium", "text-primary-500", "hover:underline", 3, "routerLink"], [1, "mt-5", "flex", "cursor-pointer", "items-center", "rounded-full", "bg-gray-200", "py-0.5", "pl-4", "pr-3", "hover:bg-gray-300", "dark:bg-gray-800", "dark:hover:bg-gray-700", 3, "routerLink"], [1, "text-secondary", "text-sm", "font-medium"], [1, "ml-2", "icon-size-5", 3, "svgIcon"]], template: function HelpCenterGuidesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "a", 4);
        \u0275\u0275element(5, "mat-icon", 5);
        \u0275\u0275elementStart(6, "span", 6);
        \u0275\u0275text(7, "Back to Help Center");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 7);
        \u0275\u0275text(9, " Guides & Resources ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275repeaterCreate(11, HelpCenterGuidesComponent_For_12_Template, 6, 5, "div", 9, ctx.trackByFn, true);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c05))("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-left");
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.guideCategories);
      }
    }, dependencies: [MatButtonModule, MatAnchor, RouterLink, MatIconModule, MatIcon], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpCenterGuidesComponent, { className: "HelpCenterGuidesComponent", filePath: "src/app/modules/admin/apps/help-center/guides/guides.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin/apps/help-center/help-center.component.ts
var _c06 = () => ["faqs"];
var _c14 = () => ["guides"];
var _c23 = () => ["support"];
function HelpCenterComponent_For_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-expansion-panel")(1, "mat-expansion-panel-header", 27)(2, "mat-panel-title");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const faq_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("collapsedHeight", "56px");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(faq_r1.question);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", faq_r1.answer, " ");
  }
}
var HelpCenterComponent = class _HelpCenterComponent {
  /**
   * Constructor
   */
  constructor(_helpCenterService) {
    this._helpCenterService = _helpCenterService;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._helpCenterService.faqs$.pipe(takeUntil(this._unsubscribeAll)).subscribe((faqCategories) => {
      this.faqCategory = faqCategories[0];
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Track by function for ngFor loops
   *
   * @param index
   * @param item
   */
  trackByFn(index, item) {
    return item.id || index;
  }
  static {
    this.\u0275fac = function HelpCenterComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpCenterComponent)(\u0275\u0275directiveInject(HelpCenterService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpCenterComponent, selectors: [["help-center"]], decls: 61, vars: 12, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "dark", "relative", "overflow-hidden", "bg-gray-800", "px-4", "pb-28", "pt-8", "dark:bg-gray-900", "sm:px-16", "sm:pb-48", "sm:pt-20"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], [1, "relative", "z-10", "flex", "flex-col", "items-center"], [1, "text-xl", "font-semibold"], [1, "mt-1", "text-center", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight", "sm:text-7xl"], [1, "text-secondary", "mt-3", "text-center", "tracking-tight", "sm:text-2xl"], [1, "fuse-mat-rounded", "fuse-mat-bold", "mt-10", "w-full", "max-w-80", "sm:mt-20", "sm:max-w-120", 3, "subscriptSizing"], ["matInput", "", 3, "placeholder"], ["matPrefix", "", 3, "svgIcon"], [1, "flex", "flex-col", "items-center", "px-6", "pb-6", "sm:px-10", "sm:pb-10"], [1, "-mt-16", "grid", "w-full", "max-w-sm", "grid-cols-1", "gap-y-8", "sm:-mt-24", "md:max-w-4xl", "md:grid-cols-3", "md:gap-x-6", "md:gap-y-0"], [1, "bg-card", "relative", "flex", "flex-col", "overflow-hidden", "rounded-2xl", "shadow", "transition-shadow", "duration-150", "ease-in-out", "hover:shadow-lg"], [1, "flex", "flex-auto", "flex-col", "items-center", "p-8", "text-center"], [1, "text-2xl", "font-semibold"], [1, "text-secondary", "mt-1", "md:max-w-40"], [1, "flex", "items-center", "justify-center", "bg-gray-50", "px-8", "py-4", "text-primary-500", "dark:border-t", "dark:bg-transparent", "dark:text-primary-400"], [1, "flex", "items-center", 3, "routerLink"], [1, "absolute", "inset-0"], [1, "font-medium"], [1, "ml-2", "text-current", "icon-size-5", 3, "svgIcon"], [1, "mt-24", "text-center", "text-3xl", "font-extrabold", "leading-tight", "tracking-tight", "sm:text-5xl"], [1, "text-secondary", "mt-2", "text-center", "text-xl"], [1, "mt-12", "max-w-4xl"], [3, "collapsedHeight"]], template: function HelpCenterComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 2)(3, "g", 3);
        \u0275\u0275element(4, "circle", 4)(5, "circle", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 6)(7, "h2", 7);
        \u0275\u0275text(8, "HELP CENTER");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275text(10, " How can we help you today? ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275text(12, " Search for a topic or question, check out our FAQs and guides, contact us for detailed support ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 10);
        \u0275\u0275element(14, "input", 11)(15, "mat-icon", 12);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 13)(17, "div", 14)(18, "div", 15)(19, "div", 16)(20, "div", 17);
        \u0275\u0275text(21, "FAQs");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 18);
        \u0275\u0275text(23, " Frequently asked questions and answers ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 19)(25, "a", 20);
        \u0275\u0275element(26, "span", 21);
        \u0275\u0275elementStart(27, "span", 22);
        \u0275\u0275text(28, "Go to FAQs");
        \u0275\u0275elementEnd();
        \u0275\u0275element(29, "mat-icon", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "div", 15)(31, "div", 16)(32, "div", 17);
        \u0275\u0275text(33, "Guides");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 18);
        \u0275\u0275text(35, " Articles and resources to guide you ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 19)(37, "a", 20);
        \u0275\u0275element(38, "span", 21);
        \u0275\u0275elementStart(39, "span", 22);
        \u0275\u0275text(40, "Check guides");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "mat-icon", 23);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 15)(43, "div", 16)(44, "div", 17);
        \u0275\u0275text(45, "Support");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 18);
        \u0275\u0275text(47, " Contact us for more detailed support ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 19)(49, "a", 20);
        \u0275\u0275element(50, "span", 21);
        \u0275\u0275elementStart(51, "span", 22);
        \u0275\u0275text(52, "Contact us");
        \u0275\u0275elementEnd();
        \u0275\u0275element(53, "mat-icon", 23);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(54, "div", 24);
        \u0275\u0275text(55, " Most frequently asked questions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 25);
        \u0275\u0275text(57, " Here are the most frequently asked questions you may check before getting started ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-accordion", 26);
        \u0275\u0275repeaterCreate(59, HelpCenterComponent_For_60_Template, 5, 3, "mat-expansion-panel", null, ctx.trackByFn, true);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(13);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance();
        \u0275\u0275property("placeholder", "Enter a question, topic or keyword");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:magnifying-glass");
        \u0275\u0275advance(10);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c06));
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-right");
        \u0275\u0275advance(8);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c14));
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-right");
        \u0275\u0275advance(8);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c23));
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-right");
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.faqCategory.faqs);
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatIconModule,
      MatIcon,
      RouterLink,
      MatExpansionModule,
      MatAccordion,
      MatExpansionPanel,
      MatExpansionPanelHeader,
      MatExpansionPanelTitle
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpCenterComponent, { className: "HelpCenterComponent", filePath: "src/app/modules/admin/apps/help-center/help-center.component.ts", lineNumber: 23 });
})();

// src/app/modules/admin/apps/help-center/support/support.component.ts
var _c07 = ["supportNgForm"];
var _c15 = () => ["../"];
function HelpCenterSupportComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("type", ctx_r1.alert.type)("showIcon", false);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert.message, " ");
  }
}
function HelpCenterSupportComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Required ");
    \u0275\u0275elementEnd();
  }
}
function HelpCenterSupportComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Required ");
    \u0275\u0275elementEnd();
  }
}
function HelpCenterSupportComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function HelpCenterSupportComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Required ");
    \u0275\u0275elementEnd();
  }
}
function HelpCenterSupportComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Required ");
    \u0275\u0275elementEnd();
  }
}
var HelpCenterSupportComponent = class _HelpCenterSupportComponent {
  /**
   * Constructor
   */
  constructor(_formBuilder, _helpCenterService) {
    this._formBuilder = _formBuilder;
    this._helpCenterService = _helpCenterService;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.supportForm = this._formBuilder.group({
      name: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      subject: ["", Validators.required],
      message: ["", Validators.required]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Clear the form
   */
  clearForm() {
    this.supportNgForm.resetForm();
  }
  /**
   * Send the form
   */
  sendForm() {
    console.log("Your message has been sent!");
    this.alert = {
      type: "success",
      message: "Your request has been delivered! A member of our support staff will respond as soon as possible."
    };
    setTimeout(() => {
      this.alert = null;
    }, 7e3);
    this.clearForm();
  }
  static {
    this.\u0275fac = function HelpCenterSupportComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _HelpCenterSupportComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(HelpCenterService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpCenterSupportComponent, selectors: [["help-center-support"]], viewQuery: function HelpCenterSupportComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c07, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.supportNgForm = _t.first);
      }
    }, decls: 45, vars: 24, consts: [["supportNgForm", "ngForm"], [1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "flex", "flex-auto", "flex-col", "items-center", "p-6", "sm:p-10"], [1, "flex", "w-full", "max-w-4xl", "flex-col"], [1, "-ml-4", "sm:mt-8"], ["mat-button", "", 3, "routerLink", "color"], [3, "svgIcon"], [1, "ml-2"], [1, "mt-2", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight", "sm:text-7xl"], [1, "bg-card", "mt-8", "rounded-2xl", "p-6", "pb-7", "shadow", "sm:mt-12", "sm:p-10", "sm:pb-7"], [1, "mb-8", 3, "type", "showIcon"], [1, "space-y-3", 3, "formGroup"], [1, "mb-6"], [1, "text-2xl", "font-bold", "tracking-tight"], [1, "text-secondary"], [1, "w-full"], ["matInput", "", 3, "formControlName", "required"], ["type", "email", "matInput", "", 3, "formControlName", "required"], ["matInput", "", "cdkTextareaAutosize", "", 3, "formControlName", "required", "rows"], [1, "flex", "items-center", "justify-end"], ["mat-button", "", 3, "click", "color", "disabled"], ["mat-flat-button", "", 1, "ml-2", 3, "click", "color", "disabled"]], template: function HelpCenterSupportComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "a", 5);
        \u0275\u0275element(5, "mat-icon", 6);
        \u0275\u0275elementStart(6, "span", 7);
        \u0275\u0275text(7, "Back to Help Center");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "div", 8);
        \u0275\u0275text(9, " Contact support ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275template(11, HelpCenterSupportComponent_Conditional_11_Template, 2, 3, "fuse-alert", 10);
        \u0275\u0275elementStart(12, "form", 11, 0)(14, "div", 12)(15, "div", 13);
        \u0275\u0275text(16, " Submit your request ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 14);
        \u0275\u0275text(18, " Your request will be processed and our support staff will get back to you in 24 hours. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "mat-form-field", 15);
        \u0275\u0275element(20, "input", 16);
        \u0275\u0275elementStart(21, "mat-label");
        \u0275\u0275text(22, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275template(23, HelpCenterSupportComponent_Conditional_23_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-form-field", 15);
        \u0275\u0275element(25, "input", 17);
        \u0275\u0275elementStart(26, "mat-label");
        \u0275\u0275text(27, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275template(28, HelpCenterSupportComponent_Conditional_28_Template, 2, 0, "mat-error")(29, HelpCenterSupportComponent_Conditional_29_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "mat-form-field", 15);
        \u0275\u0275element(31, "input", 16);
        \u0275\u0275elementStart(32, "mat-label");
        \u0275\u0275text(33, "Subject");
        \u0275\u0275elementEnd();
        \u0275\u0275template(34, HelpCenterSupportComponent_Conditional_34_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-form-field", 15);
        \u0275\u0275element(36, "textarea", 18);
        \u0275\u0275elementStart(37, "mat-label");
        \u0275\u0275text(38, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275template(39, HelpCenterSupportComponent_Conditional_39_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 19)(41, "button", 20);
        \u0275\u0275listener("click", function HelpCenterSupportComponent_Template_button_click_41_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.clearForm());
        });
        \u0275\u0275text(42, " Clear ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "button", 21);
        \u0275\u0275listener("click", function HelpCenterSupportComponent_Template_button_click_43_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.sendForm());
        });
        \u0275\u0275text(44, " Submit ");
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c15))("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-left");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.alert ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.supportForm);
        \u0275\u0275advance(8);
        \u0275\u0275property("formControlName", "name")("required", true);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.supportForm.get("name").hasError("required") ? 23 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("formControlName", "email")("required", true);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.supportForm.get("email").hasError("required") ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.supportForm.get("email").hasError("email") ? 29 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("formControlName", "subject")("required", true);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.supportForm.get("subject").hasError("required") ? 34 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("formControlName", "message")("required", true)("rows", 5);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.supportForm.get("message").hasError("required") ? 39 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "accent")("disabled", ctx.supportForm.pristine || ctx.supportForm.untouched);
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "primary")("disabled", ctx.supportForm.pristine || ctx.supportForm.invalid);
      }
    }, dependencies: [
      MatButtonModule,
      MatAnchor,
      MatButton,
      RouterLink,
      MatIconModule,
      MatIcon,
      FuseAlertComponent,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      RequiredValidator,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatError,
      MatInputModule,
      MatInput,
      CdkTextareaAutosize,
      TextFieldModule
    ], encapsulation: 2, data: { animation: fuseAnimations } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpCenterSupportComponent, { className: "HelpCenterSupportComponent", filePath: "src/app/modules/admin/apps/help-center/support/support.component.ts", lineNumber: 38 });
})();

// src/app/modules/admin/apps/help-center/help-center.routes.ts
var help_center_routes_default = [
  {
    path: "",
    component: HelpCenterComponent,
    resolve: {
      faqs: () => inject(HelpCenterService).getFaqsByCategory("most-asked")
    }
  },
  {
    path: "faqs",
    component: HelpCenterFaqsComponent,
    resolve: {
      faqs: () => inject(HelpCenterService).getAllFaqs()
    }
  },
  {
    path: "guides",
    children: [
      {
        path: "",
        component: HelpCenterGuidesComponent,
        resolve: {
          guides: () => inject(HelpCenterService).getAllGuides()
        }
      },
      {
        path: ":categorySlug",
        children: [
          {
            path: "",
            component: HelpCenterGuidesCategoryComponent,
            resolve: {
              guides: (route, state2) => inject(HelpCenterService).getGuidesByCategory(route.paramMap.get("categorySlug"))
            }
          },
          {
            path: ":guideSlug",
            component: HelpCenterGuidesGuideComponent,
            resolve: {
              guides: (route, state2) => inject(HelpCenterService).getGuide(route.parent.paramMap.get("categorySlug"), route.paramMap.get("guideSlug"))
            }
          }
        ]
      }
    ]
  },
  {
    path: "support",
    component: HelpCenterSupportComponent
  }
];
export {
  help_center_routes_default as default
};
//# sourceMappingURL=chunk-LHKLV2YZ.js.map
