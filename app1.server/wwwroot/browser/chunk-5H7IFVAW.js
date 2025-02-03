import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-GAOBHCVE.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-5KZHZBIW.js";
import {
  FuseConfirmationService
} from "./chunk-7Z6ZIB4I.js";
import "./chunk-M6DXA547.js";
import {
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-F65M35UC.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-B6LWBRMU.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-YALL3E64.js";
import "./chunk-YHH4B3V4.js";
import "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-LCOBNKPY.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-GIY2YYWB.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-2W4O77WS.js";
import "./chunk-BNTOCQMY.js";
import {
  DefaultValueAccessor,
  FormControlDirective,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
  ɵNgNoValidate
} from "./chunk-J5XV3GIF.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-JPDBWMRG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5AHQJJ5Y.js";
import {
  MatOption,
  MatOptionModule,
  MatRipple,
  MatRippleModule,
  _IdGenerator
} from "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import {
  fuseAnimations
} from "./chunk-HKG3E5RP.js";
import "./chunk-WH7F4HUX.js";
import {
  RouterOutlet
} from "./chunk-WTEW5YKI.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  AsyncPipe,
  CurrencyPipe,
  NgClass,
  NgTemplateOutlet
} from "./chunk-M6AYR6A2.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Inject,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Optional,
  Output,
  ReplaySubject,
  SkipSelf,
  Subject,
  ViewEncapsulation,
  booleanAttribute,
  debounceTime,
  filter,
  inject,
  map,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  switchMap,
  take,
  takeUntil,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵInputTransformsFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/apps/ecommerce/inventory/inventory.component.ts
var InventoryComponent = class _InventoryComponent {
  /**
   * Constructor
   */
  constructor() {
  }
  static {
    this.\u0275fac = function InventoryComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InventoryComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryComponent, selectors: [["inventory"]], decls: 1, vars: 0, template: function InventoryComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryComponent, { className: "InventoryComponent", filePath: "src/app/modules/admin/apps/ecommerce/inventory/inventory.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin/apps/ecommerce/inventory/inventory.service.ts
var InventoryService = class _InventoryService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._brands = new BehaviorSubject(null);
    this._categories = new BehaviorSubject(null);
    this._pagination = new BehaviorSubject(null);
    this._product = new BehaviorSubject(null);
    this._products = new BehaviorSubject(null);
    this._tags = new BehaviorSubject(null);
    this._vendors = new BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for brands
   */
  get brands$() {
    return this._brands.asObservable();
  }
  /**
   * Getter for categories
   */
  get categories$() {
    return this._categories.asObservable();
  }
  /**
   * Getter for pagination
   */
  get pagination$() {
    return this._pagination.asObservable();
  }
  /**
   * Getter for product
   */
  get product$() {
    return this._product.asObservable();
  }
  /**
   * Getter for products
   */
  get products$() {
    return this._products.asObservable();
  }
  /**
   * Getter for tags
   */
  get tags$() {
    return this._tags.asObservable();
  }
  /**
   * Getter for vendors
   */
  get vendors$() {
    return this._vendors.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get brands
   */
  getBrands() {
    return this._httpClient.get("api/apps/ecommerce/inventory/brands").pipe(tap((brands) => {
      this._brands.next(brands);
    }));
  }
  /**
   * Get categories
   */
  getCategories() {
    return this._httpClient.get("api/apps/ecommerce/inventory/categories").pipe(tap((categories) => {
      this._categories.next(categories);
    }));
  }
  /**
   * Get products
   *
   *
   * @param page
   * @param size
   * @param sort
   * @param order
   * @param search
   */
  getProducts(page = 0, size = 10, sort = "name", order = "asc", search = "") {
    return this._httpClient.get("api/apps/ecommerce/inventory/products", {
      params: {
        page: "" + page,
        size: "" + size,
        sort,
        order,
        search
      }
    }).pipe(tap((response) => {
      this._pagination.next(response.pagination);
      this._products.next(response.products);
    }));
  }
  /**
   * Get product by id
   */
  getProductById(id) {
    return this._products.pipe(take(1), map((products) => {
      const product = products.find((item) => item.id === id) || null;
      this._product.next(product);
      return product;
    }), switchMap((product) => {
      if (!product) {
        return throwError("Could not found product with id of " + id + "!");
      }
      return of(product);
    }));
  }
  /**
   * Create product
   */
  createProduct() {
    return this.products$.pipe(take(1), switchMap((products) => this._httpClient.post("api/apps/ecommerce/inventory/product", {}).pipe(map((newProduct) => {
      this._products.next([newProduct, ...products]);
      return newProduct;
    }))));
  }
  /**
   * Update product
   *
   * @param id
   * @param product
   */
  updateProduct(id, product) {
    return this.products$.pipe(take(1), switchMap((products) => this._httpClient.patch("api/apps/ecommerce/inventory/product", {
      id,
      product
    }).pipe(map((updatedProduct) => {
      const index = products.findIndex((item) => item.id === id);
      products[index] = updatedProduct;
      this._products.next(products);
      return updatedProduct;
    }), switchMap((updatedProduct) => this.product$.pipe(take(1), filter((item) => item && item.id === id), tap(() => {
      this._product.next(updatedProduct);
      return updatedProduct;
    }))))));
  }
  /**
   * Delete the product
   *
   * @param id
   */
  deleteProduct(id) {
    return this.products$.pipe(take(1), switchMap((products) => this._httpClient.delete("api/apps/ecommerce/inventory/product", {
      params: { id }
    }).pipe(map((isDeleted) => {
      const index = products.findIndex((item) => item.id === id);
      products.splice(index, 1);
      this._products.next(products);
      return isDeleted;
    }))));
  }
  /**
   * Get tags
   */
  getTags() {
    return this._httpClient.get("api/apps/ecommerce/inventory/tags").pipe(tap((tags) => {
      this._tags.next(tags);
    }));
  }
  /**
   * Create tag
   *
   * @param tag
   */
  createTag(tag) {
    return this.tags$.pipe(take(1), switchMap((tags) => this._httpClient.post("api/apps/ecommerce/inventory/tag", {
      tag
    }).pipe(map((newTag) => {
      this._tags.next([...tags, newTag]);
      return newTag;
    }))));
  }
  /**
   * Update the tag
   *
   * @param id
   * @param tag
   */
  updateTag(id, tag) {
    return this.tags$.pipe(take(1), switchMap((tags) => this._httpClient.patch("api/apps/ecommerce/inventory/tag", {
      id,
      tag
    }).pipe(map((updatedTag) => {
      const index = tags.findIndex((item) => item.id === id);
      tags[index] = updatedTag;
      this._tags.next(tags);
      return updatedTag;
    }))));
  }
  /**
   * Delete the tag
   *
   * @param id
   */
  deleteTag(id) {
    return this.tags$.pipe(take(1), switchMap((tags) => this._httpClient.delete("api/apps/ecommerce/inventory/tag", {
      params: { id }
    }).pipe(map((isDeleted) => {
      const index = tags.findIndex((item) => item.id === id);
      tags.splice(index, 1);
      this._tags.next(tags);
      return isDeleted;
    }), filter((isDeleted) => isDeleted), switchMap((isDeleted) => this.products$.pipe(take(1), map((products) => {
      products.forEach((product) => {
        const tagIndex = product.tags.findIndex((tag) => tag === id);
        if (tagIndex > -1) {
          product.tags.splice(tagIndex, 1);
        }
      });
      return isDeleted;
    }))))));
  }
  /**
   * Get vendors
   */
  getVendors() {
    return this._httpClient.get("api/apps/ecommerce/inventory/vendors").pipe(tap((vendors) => {
      this._vendors.next(vendors);
    }));
  }
  static {
    this.\u0275fac = function InventoryService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InventoryService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InventoryService, factory: _InventoryService.\u0275fac, providedIn: "root" });
  }
};

// node_modules/@angular/material/fesm2022/paginator.mjs
function MatPaginator_Conditional_2_Conditional_3_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pageSizeOption_r3 = ctx.$implicit;
    \u0275\u0275property("value", pageSizeOption_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", pageSizeOption_r3, " ");
  }
}
function MatPaginator_Conditional_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 14)(1, "mat-select", 16, 0);
    \u0275\u0275listener("selectionChange", function MatPaginator_Conditional_2_Conditional_3_Template_mat_select_selectionChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1._changePageSize($event.value));
    });
    \u0275\u0275repeaterCreate(3, MatPaginator_Conditional_2_Conditional_3_For_4_Template, 2, 2, "mat-option", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275listener("click", function MatPaginator_Conditional_2_Conditional_3_Template_div_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const selectRef_r4 = \u0275\u0275reference(2);
      return \u0275\u0275resetView(selectRef_r4.open());
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("appearance", ctx_r1._formFieldAppearance)("color", ctx_r1.color);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r1.pageSize)("disabled", ctx_r1.disabled)("aria-labelledby", ctx_r1._pageSizeLabelId)("panelClass", ctx_r1.selectConfig.panelClass || "")("disableOptionCentering", ctx_r1.selectConfig.disableOptionCentering);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1._displayedPageSizeOptions);
  }
}
function MatPaginator_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pageSize);
  }
}
function MatPaginator_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, MatPaginator_Conditional_2_Conditional_3_Template, 6, 7, "mat-form-field", 14)(4, MatPaginator_Conditional_2_Conditional_4_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275attribute("id", ctx_r1._pageSizeLabelId);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1._intl.itemsPerPageLabel, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1._displayedPageSizeOptions.length > 1 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1._displayedPageSizeOptions.length <= 1 ? 4 : -1);
  }
}
function MatPaginator_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function MatPaginator_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._buttonClicked(0, ctx_r1._previousButtonsDisabled()));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.firstPageLabel)("matTooltipDisabled", ctx_r1._previousButtonsDisabled())("disabled", ctx_r1._previousButtonsDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1._intl.firstPageLabel);
  }
}
function MatPaginator_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function MatPaginator_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1._buttonClicked(ctx_r1.getNumberOfPages() - 1, ctx_r1._nextButtonsDisabled()));
    });
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 8);
    \u0275\u0275element(2, "path", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1._intl.lastPageLabel)("matTooltipDisabled", ctx_r1._nextButtonsDisabled())("disabled", ctx_r1._nextButtonsDisabled());
    \u0275\u0275attribute("aria-label", ctx_r1._intl.lastPageLabel);
  }
}
var MatPaginatorIntl = class _MatPaginatorIntl {
  /**
   * Stream to emit from when labels are changed. Use this to notify components when the labels have
   * changed after initialization.
   */
  changes = new Subject();
  /** A label for the page size selector. */
  itemsPerPageLabel = "Items per page:";
  /** A label for the button that increments the current page. */
  nextPageLabel = "Next page";
  /** A label for the button that decrements the current page. */
  previousPageLabel = "Previous page";
  /** A label for the button that moves to the first page. */
  firstPageLabel = "First page";
  /** A label for the button that moves to the last page. */
  lastPageLabel = "Last page";
  /** A label for the range of items within the current page and the length of the whole list. */
  getRangeLabel = (page, pageSize, length) => {
    if (length == 0 || pageSize == 0) {
      return `0 of ${length}`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
    return `${startIndex + 1} \u2013 ${endIndex} of ${length}`;
  };
  static \u0275fac = function MatPaginatorIntl_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginatorIntl)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatPaginatorIntl,
    factory: _MatPaginatorIntl.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorIntl, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function MAT_PAGINATOR_INTL_PROVIDER_FACTORY(parentIntl) {
  return parentIntl || new MatPaginatorIntl();
}
var MAT_PAGINATOR_INTL_PROVIDER = {
  // If there is already an MatPaginatorIntl available, use that. Otherwise, provide a new one.
  provide: MatPaginatorIntl,
  deps: [[new Optional(), new SkipSelf(), MatPaginatorIntl]],
  useFactory: MAT_PAGINATOR_INTL_PROVIDER_FACTORY
};
var DEFAULT_PAGE_SIZE = 50;
var MAT_PAGINATOR_DEFAULT_OPTIONS = new InjectionToken("MAT_PAGINATOR_DEFAULT_OPTIONS");
var MatPaginator = class _MatPaginator {
  _intl;
  _changeDetectorRef;
  /** If set, styles the "page size" form field with the designated style. */
  _formFieldAppearance;
  /** ID for the DOM node containing the paginator's items per page label. */
  _pageSizeLabelId = inject(_IdGenerator).getId("mat-paginator-page-size-label-");
  _intlChanges;
  _isInitialized = false;
  _initializedStream = new ReplaySubject(1);
  /**
   * Theme color of the underlying form controls. This API is supported in M2
   * themes only,it has no effect in M3 themes.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.io/guide/theming#using-component-color-variants.
   */
  color;
  /** The zero-based page index of the displayed list of items. Defaulted to 0. */
  get pageIndex() {
    return this._pageIndex;
  }
  set pageIndex(value) {
    this._pageIndex = Math.max(value || 0, 0);
    this._changeDetectorRef.markForCheck();
  }
  _pageIndex = 0;
  /** The length of the total number of items that are being paginated. Defaulted to 0. */
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value || 0;
    this._changeDetectorRef.markForCheck();
  }
  _length = 0;
  /** Number of items to display on a page. By default set to 50. */
  get pageSize() {
    return this._pageSize;
  }
  set pageSize(value) {
    this._pageSize = Math.max(value || 0, 0);
    this._updateDisplayedPageSizeOptions();
  }
  _pageSize;
  /** The set of provided page size options to display to the user. */
  get pageSizeOptions() {
    return this._pageSizeOptions;
  }
  set pageSizeOptions(value) {
    this._pageSizeOptions = (value || []).map((p) => numberAttribute(p, 0));
    this._updateDisplayedPageSizeOptions();
  }
  _pageSizeOptions = [];
  /** Whether to hide the page size selection UI from the user. */
  hidePageSize = false;
  /** Whether to show the first/last buttons UI to the user. */
  showFirstLastButtons = false;
  /** Used to configure the underlying `MatSelect` inside the paginator. */
  selectConfig = {};
  /** Whether the paginator is disabled. */
  disabled = false;
  /** Event emitted when the paginator changes the page size or page index. */
  page = new EventEmitter();
  /** Displayed set of page size options. Will be sorted and include current page size. */
  _displayedPageSizeOptions;
  /** Emits when the paginator is initialized. */
  initialized = this._initializedStream;
  constructor(_intl, _changeDetectorRef, defaults) {
    this._intl = _intl;
    this._changeDetectorRef = _changeDetectorRef;
    this._intlChanges = _intl.changes.subscribe(() => this._changeDetectorRef.markForCheck());
    if (defaults) {
      const {
        pageSize,
        pageSizeOptions,
        hidePageSize,
        showFirstLastButtons
      } = defaults;
      if (pageSize != null) {
        this._pageSize = pageSize;
      }
      if (pageSizeOptions != null) {
        this._pageSizeOptions = pageSizeOptions;
      }
      if (hidePageSize != null) {
        this.hidePageSize = hidePageSize;
      }
      if (showFirstLastButtons != null) {
        this.showFirstLastButtons = showFirstLastButtons;
      }
    }
    this._formFieldAppearance = defaults?.formFieldAppearance || "outline";
  }
  ngOnInit() {
    this._isInitialized = true;
    this._updateDisplayedPageSizeOptions();
    this._initializedStream.next();
  }
  ngOnDestroy() {
    this._initializedStream.complete();
    this._intlChanges.unsubscribe();
  }
  /** Advances to the next page if it exists. */
  nextPage() {
    if (this.hasNextPage()) {
      this._navigate(this.pageIndex + 1);
    }
  }
  /** Move back to the previous page if it exists. */
  previousPage() {
    if (this.hasPreviousPage()) {
      this._navigate(this.pageIndex - 1);
    }
  }
  /** Move to the first page if not already there. */
  firstPage() {
    if (this.hasPreviousPage()) {
      this._navigate(0);
    }
  }
  /** Move to the last page if not already there. */
  lastPage() {
    if (this.hasNextPage()) {
      this._navigate(this.getNumberOfPages() - 1);
    }
  }
  /** Whether there is a previous page. */
  hasPreviousPage() {
    return this.pageIndex >= 1 && this.pageSize != 0;
  }
  /** Whether there is a next page. */
  hasNextPage() {
    const maxPageIndex = this.getNumberOfPages() - 1;
    return this.pageIndex < maxPageIndex && this.pageSize != 0;
  }
  /** Calculate the number of pages */
  getNumberOfPages() {
    if (!this.pageSize) {
      return 0;
    }
    return Math.ceil(this.length / this.pageSize);
  }
  /**
   * Changes the page size so that the first item displayed on the page will still be
   * displayed using the new page size.
   *
   * For example, if the page size is 10 and on the second page (items indexed 10-19) then
   * switching so that the page size is 5 will set the third page as the current page so
   * that the 10th item will still be displayed.
   */
  _changePageSize(pageSize) {
    const startIndex = this.pageIndex * this.pageSize;
    const previousPageIndex = this.pageIndex;
    this.pageIndex = Math.floor(startIndex / pageSize) || 0;
    this.pageSize = pageSize;
    this._emitPageEvent(previousPageIndex);
  }
  /** Checks whether the buttons for going forwards should be disabled. */
  _nextButtonsDisabled() {
    return this.disabled || !this.hasNextPage();
  }
  /** Checks whether the buttons for going backwards should be disabled. */
  _previousButtonsDisabled() {
    return this.disabled || !this.hasPreviousPage();
  }
  /**
   * Updates the list of page size options to display to the user. Includes making sure that
   * the page size is an option and that the list is sorted.
   */
  _updateDisplayedPageSizeOptions() {
    if (!this._isInitialized) {
      return;
    }
    if (!this.pageSize) {
      this._pageSize = this.pageSizeOptions.length != 0 ? this.pageSizeOptions[0] : DEFAULT_PAGE_SIZE;
    }
    this._displayedPageSizeOptions = this.pageSizeOptions.slice();
    if (this._displayedPageSizeOptions.indexOf(this.pageSize) === -1) {
      this._displayedPageSizeOptions.push(this.pageSize);
    }
    this._displayedPageSizeOptions.sort((a, b) => a - b);
    this._changeDetectorRef.markForCheck();
  }
  /** Emits an event notifying that a change of the paginator's properties has been triggered. */
  _emitPageEvent(previousPageIndex) {
    this.page.emit({
      previousPageIndex,
      pageIndex: this.pageIndex,
      pageSize: this.pageSize,
      length: this.length
    });
  }
  /** Navigates to a specific page index. */
  _navigate(index) {
    const previousIndex = this.pageIndex;
    if (index !== previousIndex) {
      this.pageIndex = index;
      this._emitPageEvent(previousIndex);
    }
  }
  /**
   * Callback invoked when one of the navigation buttons is called.
   * @param targetIndex Index to which the paginator should navigate.
   * @param isDisabled Whether the button is disabled.
   */
  _buttonClicked(targetIndex, isDisabled) {
    if (!isDisabled) {
      this._navigate(targetIndex);
    }
  }
  static \u0275fac = function MatPaginator_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginator)(\u0275\u0275directiveInject(MatPaginatorIntl), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_PAGINATOR_DEFAULT_OPTIONS, 8));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatPaginator,
    selectors: [["mat-paginator"]],
    hostAttrs: ["role", "group", 1, "mat-mdc-paginator"],
    inputs: {
      color: "color",
      pageIndex: [2, "pageIndex", "pageIndex", numberAttribute],
      length: [2, "length", "length", numberAttribute],
      pageSize: [2, "pageSize", "pageSize", numberAttribute],
      pageSizeOptions: "pageSizeOptions",
      hidePageSize: [2, "hidePageSize", "hidePageSize", booleanAttribute],
      showFirstLastButtons: [2, "showFirstLastButtons", "showFirstLastButtons", booleanAttribute],
      selectConfig: "selectConfig",
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    outputs: {
      page: "page"
    },
    exportAs: ["matPaginator"],
    features: [\u0275\u0275InputTransformsFeature],
    decls: 14,
    vars: 12,
    consts: [["selectRef", ""], [1, "mat-mdc-paginator-outer-container"], [1, "mat-mdc-paginator-container"], [1, "mat-mdc-paginator-page-size"], [1, "mat-mdc-paginator-range-actions"], ["aria-live", "polite", 1, "mat-mdc-paginator-range-label"], ["mat-icon-button", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "matTooltip", "matTooltipDisabled", "disabled"], ["mat-icon-button", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-previous", 3, "click", "matTooltip", "matTooltipDisabled", "disabled"], ["viewBox", "0 0 24 24", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-paginator-icon"], ["d", "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"], ["mat-icon-button", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-next", 3, "click", "matTooltip", "matTooltipDisabled", "disabled"], ["d", "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"], ["mat-icon-button", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "matTooltip", "matTooltipDisabled", "disabled"], [1, "mat-mdc-paginator-page-size-label"], [1, "mat-mdc-paginator-page-size-select", 3, "appearance", "color"], [1, "mat-mdc-paginator-page-size-value"], ["hideSingleSelectionIndicator", "", 3, "selectionChange", "value", "disabled", "aria-labelledby", "panelClass", "disableOptionCentering"], [3, "value"], [1, "mat-mdc-paginator-touch-target", 3, "click"], ["mat-icon-button", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-first", 3, "click", "matTooltip", "matTooltipDisabled", "disabled"], ["d", "M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"], ["mat-icon-button", "", "type", "button", "matTooltipPosition", "above", "disabledInteractive", "", 1, "mat-mdc-paginator-navigation-last", 3, "click", "matTooltip", "matTooltipDisabled", "disabled"], ["d", "M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"]],
    template: function MatPaginator_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275template(2, MatPaginator_Conditional_2_Template, 5, 4, "div", 3);
        \u0275\u0275elementStart(3, "div", 4)(4, "div", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275template(6, MatPaginator_Conditional_6_Template, 3, 4, "button", 6);
        \u0275\u0275elementStart(7, "button", 7);
        \u0275\u0275listener("click", function MatPaginator_Template_button_click_7_listener() {
          return ctx._buttonClicked(ctx.pageIndex - 1, ctx._previousButtonsDisabled());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 8);
        \u0275\u0275element(9, "path", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(10, "button", 10);
        \u0275\u0275listener("click", function MatPaginator_Template_button_click_10_listener() {
          return ctx._buttonClicked(ctx.pageIndex + 1, ctx._nextButtonsDisabled());
        });
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(11, "svg", 8);
        \u0275\u0275element(12, "path", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275template(13, MatPaginator_Conditional_13_Template, 3, 4, "button", 12);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hidePageSize ? 2 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx._intl.getRangeLabel(ctx.pageIndex, ctx.pageSize, ctx.length), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.showFirstLastButtons ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", ctx._intl.previousPageLabel)("matTooltipDisabled", ctx._previousButtonsDisabled())("disabled", ctx._previousButtonsDisabled());
        \u0275\u0275attribute("aria-label", ctx._intl.previousPageLabel);
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", ctx._intl.nextPageLabel)("matTooltipDisabled", ctx._nextButtonsDisabled())("disabled", ctx._nextButtonsDisabled());
        \u0275\u0275attribute("aria-label", ctx._intl.nextPageLabel);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.showFirstLastButtons ? 13 : -1);
      }
    },
    dependencies: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
    styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height:var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginator, [{
    type: Component,
    args: [{
      selector: "mat-paginator",
      exportAs: "matPaginator",
      host: {
        "class": "mat-mdc-paginator",
        "role": "group"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [MatFormField, MatSelect, MatOption, MatIconButton, MatTooltip],
      template: `<div class="mat-mdc-paginator-outer-container">
  <div class="mat-mdc-paginator-container">
    @if (!hidePageSize) {
      <div class="mat-mdc-paginator-page-size">
        <div class="mat-mdc-paginator-page-size-label" [attr.id]="_pageSizeLabelId">
          {{_intl.itemsPerPageLabel}}
        </div>

        @if (_displayedPageSizeOptions.length > 1) {
          <mat-form-field
            [appearance]="_formFieldAppearance!"
            [color]="color"
            class="mat-mdc-paginator-page-size-select">
            <mat-select
              #selectRef
              [value]="pageSize"
              [disabled]="disabled"
              [aria-labelledby]="_pageSizeLabelId"
              [panelClass]="selectConfig.panelClass || ''"
              [disableOptionCentering]="selectConfig.disableOptionCentering"
              (selectionChange)="_changePageSize($event.value)"
              hideSingleSelectionIndicator>
              @for (pageSizeOption of _displayedPageSizeOptions; track pageSizeOption) {
                <mat-option [value]="pageSizeOption">
                  {{pageSizeOption}}
                </mat-option>
              }
            </mat-select>
          <div class="mat-mdc-paginator-touch-target" (click)="selectRef.open()"></div>
          </mat-form-field>
        }

        @if (_displayedPageSizeOptions.length <= 1) {
          <div class="mat-mdc-paginator-page-size-value">{{pageSize}}</div>
        }
      </div>
    }

    <div class="mat-mdc-paginator-range-actions">
      <div class="mat-mdc-paginator-range-label" aria-live="polite">
        {{_intl.getRangeLabel(pageIndex, pageSize, length)}}
      </div>

      @if (showFirstLastButtons) {
        <button mat-icon-button type="button"
                class="mat-mdc-paginator-navigation-first"
                (click)="_buttonClicked(0, _previousButtonsDisabled())"
                [attr.aria-label]="_intl.firstPageLabel"
                [matTooltip]="_intl.firstPageLabel"
                [matTooltipDisabled]="_previousButtonsDisabled()"
                matTooltipPosition="above"
                [disabled]="_previousButtonsDisabled()"
                disabledInteractive>
          <svg class="mat-mdc-paginator-icon"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true">
            <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"/>
          </svg>
        </button>
      }
      <button mat-icon-button type="button"
              class="mat-mdc-paginator-navigation-previous"
              (click)="_buttonClicked(pageIndex - 1, _previousButtonsDisabled())"
              [attr.aria-label]="_intl.previousPageLabel"
              [matTooltip]="_intl.previousPageLabel"
              [matTooltipDisabled]="_previousButtonsDisabled()"
              matTooltipPosition="above"
              [disabled]="_previousButtonsDisabled()"
              disabledInteractive>
        <svg class="mat-mdc-paginator-icon"
             viewBox="0 0 24 24"
             focusable="false"
             aria-hidden="true">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/>
        </svg>
      </button>
      <button mat-icon-button type="button"
              class="mat-mdc-paginator-navigation-next"
              (click)="_buttonClicked(pageIndex + 1, _nextButtonsDisabled())"
              [attr.aria-label]="_intl.nextPageLabel"
              [matTooltip]="_intl.nextPageLabel"
              [matTooltipDisabled]="_nextButtonsDisabled()"
              matTooltipPosition="above"
              [disabled]="_nextButtonsDisabled()"
              disabledInteractive>
        <svg class="mat-mdc-paginator-icon"
             viewBox="0 0 24 24"
             focusable="false"
             aria-hidden="true">
          <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/>
        </svg>
      </button>
      @if (showFirstLastButtons) {
        <button mat-icon-button type="button"
                class="mat-mdc-paginator-navigation-last"
                (click)="_buttonClicked(getNumberOfPages() - 1, _nextButtonsDisabled())"
                [attr.aria-label]="_intl.lastPageLabel"
                [matTooltip]="_intl.lastPageLabel"
                [matTooltipDisabled]="_nextButtonsDisabled()"
                matTooltipPosition="above"
                [disabled]="_nextButtonsDisabled()"
                disabledInteractive>
          <svg class="mat-mdc-paginator-icon"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true">
            <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"/>
          </svg>
        </button>
      }
    </div>
  </div>
</div>
`,
      styles: [".mat-mdc-paginator{display:block;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;color:var(--mat-paginator-container-text-color, var(--mat-sys-on-surface));background-color:var(--mat-paginator-container-background-color, var(--mat-sys-surface));font-family:var(--mat-paginator-container-text-font, var(--mat-sys-body-small-font));line-height:var(--mat-paginator-container-text-line-height, var(--mat-sys-body-small-line-height));font-size:var(--mat-paginator-container-text-size, var(--mat-sys-body-small-size));font-weight:var(--mat-paginator-container-text-weight, var(--mat-sys-body-small-weight));letter-spacing:var(--mat-paginator-container-text-tracking, var(--mat-sys-body-small-tracking));--mat-form-field-container-height:var(--mat-paginator-form-field-container-height, 40px);--mat-form-field-container-vertical-padding:var(--mat-paginator-form-field-container-vertical-padding, 8px)}.mat-mdc-paginator .mat-mdc-select-value{font-size:var(--mat-paginator-select-trigger-text-size, var(--mat-sys-body-small-size))}.mat-mdc-paginator .mat-mdc-form-field-subscript-wrapper{display:none}.mat-mdc-paginator .mat-mdc-select{line-height:1.5}.mat-mdc-paginator-outer-container{display:flex}.mat-mdc-paginator-container{display:flex;align-items:center;justify-content:flex-end;padding:0 8px;flex-wrap:wrap;width:100%;min-height:var(--mat-paginator-container-size, 56px)}.mat-mdc-paginator-page-size{display:flex;align-items:baseline;margin-right:8px}[dir=rtl] .mat-mdc-paginator-page-size{margin-right:0;margin-left:8px}.mat-mdc-paginator-page-size-label{margin:0 4px}.mat-mdc-paginator-page-size-select{margin:0 4px;width:84px}.mat-mdc-paginator-range-label{margin:0 32px 0 24px}.mat-mdc-paginator-range-actions{display:flex;align-items:center}.mat-mdc-paginator-icon{display:inline-block;width:28px;fill:var(--mat-paginator-enabled-icon-color, var(--mat-sys-on-surface-variant))}.mat-mdc-icon-button[aria-disabled] .mat-mdc-paginator-icon{fill:var(--mat-paginator-disabled-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}[dir=rtl] .mat-mdc-paginator-icon{transform:rotate(180deg)}@media(forced-colors: active){.mat-mdc-icon-button[disabled] .mat-mdc-paginator-icon,.mat-mdc-paginator-icon{fill:currentColor;fill:CanvasText}.mat-mdc-paginator-range-actions .mat-mdc-icon-button{outline:solid 1px}}.mat-mdc-paginator-touch-target{display:var(--mat-paginator-touch-target-display, block);position:absolute;top:50%;left:50%;width:84px;height:48px;background-color:rgba(0,0,0,0);transform:translate(-50%, -50%);cursor:pointer}"]
    }]
  }], () => [{
    type: MatPaginatorIntl
  }, {
    type: ChangeDetectorRef
  }, {
    type: void 0,
    decorators: [{
      type: Optional
    }, {
      type: Inject,
      args: [MAT_PAGINATOR_DEFAULT_OPTIONS]
    }]
  }], {
    color: [{
      type: Input
    }],
    pageIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    length: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    pageSizeOptions: [{
      type: Input
    }],
    hidePageSize: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showFirstLastButtons: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectConfig: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    page: [{
      type: Output
    }]
  });
})();
var MatPaginatorModule = class _MatPaginatorModule {
  static \u0275fac = function MatPaginatorModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginatorModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatPaginatorModule
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MAT_PAGINATOR_INTL_PROVIDER],
    imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatorModule, [{
    type: NgModule,
    args: [{
      imports: [MatButtonModule, MatSelectModule, MatTooltipModule, MatPaginator],
      exports: [MatPaginator],
      providers: [MAT_PAGINATOR_INTL_PROVIDER]
    }]
  }], null, null);
})();

// src/app/modules/admin/apps/ecommerce/inventory/list/inventory.component.ts
var _c0 = (a0) => ({ "pointer-events-none": a0 });
var _c1 = () => [5, 10, 25, 100];
var _c2 = (a0) => ({ $implicit: a0 });
function InventoryListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-progress-bar", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("mode", "indeterminate");
  }
}
function InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 28);
  }
  if (rf & 2) {
    const product_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("alt", "Product thumbnail image")("src", product_r3.thumbnail, \u0275\u0275sanitizeUrl);
  }
}
function InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1, " NO THUMB ");
    \u0275\u0275elementEnd();
  }
}
function InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275element(1, "div", 42);
    \u0275\u0275elementEnd();
  }
}
function InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "div", 43);
    \u0275\u0275elementEnd();
  }
}
function InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "div", 44);
    \u0275\u0275elementEnd();
  }
}
function InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 38);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:check");
  }
}
function InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 39);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:x-mark");
  }
}
function InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_25_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_25_ng_container_0_Template, 1, 0, "ng-container", 45);
  }
  if (rf & 2) {
    const product_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(4);
    const rowDetailsTemplate_r5 = \u0275\u0275reference(18);
    \u0275\u0275property("ngTemplateOutlet", rowDetailsTemplate_r5)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, product_r3));
  }
}
function InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26)(2, "div", 27);
    \u0275\u0275template(3, InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_3_Template, 1, 2, "img", 28)(4, InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_4_Template, 2, 0, "div", 29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 31);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 23);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 32)(13, "div", 33);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_15_Template, 2, 0, "div", 34)(16, InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_16_Template, 2, 0, "div", 35)(17, InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_17_Template, 2, 0, "div", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 37);
    \u0275\u0275template(19, InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_19_Template, 1, 1, "mat-icon", 38)(20, InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_20_Template, 1, 1, "mat-icon", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div")(22, "button", 40);
    \u0275\u0275listener("click", function InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Template_button_click_22_listener() {
      const product_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r3.toggleDetails(product_r3.id));
    });
    \u0275\u0275element(23, "mat-icon", 41);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 17);
    \u0275\u0275template(25, InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Conditional_25_Template, 1, 4, "ng-container");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const product_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(product_r3.thumbnail ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!product_r3.thumbnail ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", product_r3.sku, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", product_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(11, 13, product_r3.price, "USD", "symbol", "1.2-2"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", product_r3.stock, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(product_r3.stock < 20 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(product_r3.stock >= 20 && product_r3.stock < 30 ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(product_r3.stock >= 30 ? 17 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(product_r3.active ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!product_r3.active ? 20 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", (ctx_r3.selectedProduct == null ? null : ctx_r3.selectedProduct.id) === product_r3.id ? "heroicons_solid:chevron-up" : "heroicons_solid:chevron-down");
    \u0275\u0275advance(2);
    \u0275\u0275conditional((ctx_r3.selectedProduct == null ? null : ctx_r3.selectedProduct.id) === product_r3.id ? 25 : -1);
  }
}
function InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_For_1_Template, 26, 18, null, null, \u0275\u0275componentInstance().trackByFn, true);
  }
  if (rf & 2) {
    \u0275\u0275repeater(ctx);
  }
}
function InventoryListComponent_Conditional_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275element(2, "div");
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4, " SKU ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275text(8, " Price ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22);
    \u0275\u0275text(10, " Stock ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 22);
    \u0275\u0275text(12, " Active ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 23);
    \u0275\u0275text(14, "Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, InventoryListComponent_Conditional_15_Conditional_0_Conditional_15_Template, 2, 0);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "mat-paginator", 24);
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("mat-sort-header", "sku");
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-sort-header", "name");
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-sort-header", "price");
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-sort-header", "stock");
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-sort-header", "active");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_9_0 = \u0275\u0275pipeBind1(16, 12, ctx_r3.products$)) ? 15 : -1, tmp_9_0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c0, ctx_r3.isLoading))("length", ctx_r3.pagination.length)("pageIndex", ctx_r3.pagination.page)("pageSize", ctx_r3.pagination.size)("pageSizeOptions", \u0275\u0275pureFunction0(16, _c1))("showFirstLastButtons", true);
  }
}
function InventoryListComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " There are no products! ");
    \u0275\u0275elementEnd();
  }
}
function InventoryListComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, InventoryListComponent_Conditional_15_Conditional_0_Template, 18, 17)(1, InventoryListComponent_Conditional_15_Conditional_1_Template, 2, 0, "div", 16);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length > 0 ? 0 : 1);
  }
}
function InventoryListComponent_ng_template_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 53);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r3.selectedProductForm.get("images").value[ctx_r3.selectedProductForm.get("currentImageIndex").value], \u0275\u0275sanitizeUrl);
  }
}
function InventoryListComponent_ng_template_17_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 54);
    \u0275\u0275text(1, "NO IMAGE");
    \u0275\u0275elementEnd();
  }
}
function InventoryListComponent_ng_template_17_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55)(1, "button", 87);
    \u0275\u0275listener("click", function InventoryListComponent_ng_template_17_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.cycleImages(false));
    });
    \u0275\u0275element(2, "mat-icon", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 87);
    \u0275\u0275listener("click", function InventoryListComponent_ng_template_17_Conditional_9_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.cycleImages(true));
    });
    \u0275\u0275element(6, "mat-icon", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-left");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r3.selectedProductForm.get("currentImageIndex").value + 1, " of ", ctx_r3.selectedProductForm.get("images").value.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-right");
  }
}
function InventoryListComponent_ng_template_17_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r8 = ctx.$implicit;
    \u0275\u0275property("value", category_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", category_r8.name, " ");
  }
}
function InventoryListComponent_ng_template_17_For_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const brand_r9 = ctx.$implicit;
    \u0275\u0275property("value", brand_r9.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", brand_r9.name, " ");
  }
}
function InventoryListComponent_ng_template_17_For_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const vendor_r10 = ctx.$implicit;
    \u0275\u0275property("value", vendor_r10.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", vendor_r10.name, " ");
  }
}
function InventoryListComponent_ng_template_17_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 41);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:pencil-square");
  }
}
function InventoryListComponent_ng_template_17_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 41);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:check");
  }
}
function InventoryListComponent_ng_template_17_Conditional_102_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 90);
    \u0275\u0275listener("change", function InventoryListComponent_ng_template_17_Conditional_102_For_1_Template_mat_checkbox_change_0_listener($event) {
      const tag_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.toggleProductTag(tag_r12, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r12 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("color", "primary")("checked", ctx_r3.selectedProduct.tags.includes(tag_r12.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r12.title, " ");
  }
}
function InventoryListComponent_ng_template_17_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, InventoryListComponent_ng_template_17_Conditional_102_For_1_Template, 2, 3, "mat-checkbox", 89, \u0275\u0275componentInstance().trackByFn, true);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r3.filteredTags);
  }
}
function InventoryListComponent_ng_template_17_Conditional_103_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 91)(1, "input", 92);
    \u0275\u0275listener("input", function InventoryListComponent_ng_template_17_Conditional_103_For_2_Template_input_input_1_listener($event) {
      const tag_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.updateTagTitle(tag_r14, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 93);
    \u0275\u0275listener("click", function InventoryListComponent_ng_template_17_Conditional_103_For_2_Template_button_click_2_listener() {
      const tag_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.deleteTag(tag_r14));
    });
    \u0275\u0275element(3, "mat-icon", 41);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r14 = ctx.$implicit;
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("value", tag_r14.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_solid:trash");
  }
}
function InventoryListComponent_ng_template_17_Conditional_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275repeaterCreate(1, InventoryListComponent_ng_template_17_Conditional_103_For_2_Template, 4, 3, "mat-form-field", 91, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.filteredTags);
  }
}
function InventoryListComponent_ng_template_17_Conditional_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94);
    \u0275\u0275listener("click", function InventoryListComponent_ng_template_17_Conditional_104_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      \u0275\u0275nextContext();
      const newTagInput_r16 = \u0275\u0275reference(97);
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.createTag(newTagInput_r16.value);
      return \u0275\u0275resetView(newTagInput_r16.value = "");
    });
    \u0275\u0275element(1, "mat-icon", 95);
    \u0275\u0275elementStart(2, "div", 96);
    \u0275\u0275text(3, ' Create "');
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, '" ');
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const newTagInput_r16 = \u0275\u0275reference(97);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:plus-circle");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(newTagInput_r16.value);
  }
}
function InventoryListComponent_ng_template_17_Conditional_109_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 97);
    \u0275\u0275elementStart(1, "span", 98);
    \u0275\u0275text(2, "Product updated");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_outline:check");
  }
}
function InventoryListComponent_ng_template_17_Conditional_109_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 99);
    \u0275\u0275elementStart(1, "span", 98);
    \u0275\u0275text(2, "An error occurred, try again!");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_outline:x-mark");
  }
}
function InventoryListComponent_ng_template_17_Conditional_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275template(1, InventoryListComponent_ng_template_17_Conditional_109_Conditional_1_Template, 3, 1)(2, InventoryListComponent_ng_template_17_Conditional_109_Conditional_2_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.flashMessage === "success" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.flashMessage === "error" ? 2 : -1);
  }
}
function InventoryListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "form", 48)(3, "div", 49)(4, "div", 50)(5, "div", 51)(6, "div", 52);
    \u0275\u0275template(7, InventoryListComponent_ng_template_17_Conditional_7_Template, 1, 1, "img", 53)(8, InventoryListComponent_ng_template_17_Conditional_8_Template, 2, 0, "span", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, InventoryListComponent_ng_template_17_Conditional_9_Template, 7, 4, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 56)(11, "span", 57);
    \u0275\u0275text(12, "Product status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-slide-toggle", 58);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 59)(16, "div", 60)(17, "mat-form-field", 61)(18, "mat-label");
    \u0275\u0275text(19, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 63)(22, "mat-form-field", 64)(23, "mat-label");
    \u0275\u0275text(24, "SKU");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "mat-form-field", 65)(27, "mat-label");
    \u0275\u0275text(28, "Barcode");
    \u0275\u0275elementEnd();
    \u0275\u0275element(29, "input", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 63)(31, "mat-form-field", 64)(32, "mat-label");
    \u0275\u0275text(33, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "mat-select", 66);
    \u0275\u0275repeaterCreate(35, InventoryListComponent_ng_template_17_For_36_Template, 2, 2, "mat-option", 67, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "mat-form-field", 68)(38, "mat-label");
    \u0275\u0275text(39, "Brand");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-select", 66);
    \u0275\u0275repeaterCreate(41, InventoryListComponent_ng_template_17_For_42_Template, 2, 2, "mat-option", 67, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "mat-form-field", 69)(44, "mat-label");
    \u0275\u0275text(45, "Vendor");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "mat-select", 66);
    \u0275\u0275repeaterCreate(47, InventoryListComponent_ng_template_17_For_48_Template, 2, 2, "mat-option", 67, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 63)(50, "mat-form-field", 64)(51, "mat-label");
    \u0275\u0275text(52, "Stock");
    \u0275\u0275elementEnd();
    \u0275\u0275element(53, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "mat-form-field", 69)(55, "mat-label");
    \u0275\u0275text(56, "Reserved");
    \u0275\u0275elementEnd();
    \u0275\u0275element(57, "input", 70);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 71)(59, "mat-form-field", 61)(60, "mat-label");
    \u0275\u0275text(61, "Cost");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "span", 72);
    \u0275\u0275text(63, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "mat-form-field", 61)(66, "mat-label");
    \u0275\u0275text(67, "Base Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "span", 72);
    \u0275\u0275text(69, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(70, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "mat-form-field", 61)(72, "mat-label");
    \u0275\u0275text(73, "Tax");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "span", 73);
    \u0275\u0275text(75, "%");
    \u0275\u0275elementEnd();
    \u0275\u0275element(76, "input", 70);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "mat-form-field", 61)(78, "mat-label");
    \u0275\u0275text(79, "Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "span", 73);
    \u0275\u0275text(81, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275element(82, "input", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(83, "div", 71)(84, "mat-form-field", 61)(85, "mat-label");
    \u0275\u0275text(86, "Weight");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "span", 73);
    \u0275\u0275text(88, "lbs.");
    \u0275\u0275elementEnd();
    \u0275\u0275element(89, "input", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span", 74);
    \u0275\u0275text(91, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 75)(93, "div", 76)(94, "div", 77);
    \u0275\u0275element(95, "mat-icon", 41);
    \u0275\u0275elementStart(96, "input", 78, 1);
    \u0275\u0275listener("input", function InventoryListComponent_ng_template_17_Template_input_input_96_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.filterTags($event));
    })("keydown", function InventoryListComponent_ng_template_17_Template_input_keydown_96_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.filterTagsInputKeyDown($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(98, "button", 79);
    \u0275\u0275listener("click", function InventoryListComponent_ng_template_17_Template_button_click_98_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleTagsEditMode());
    });
    \u0275\u0275template(99, InventoryListComponent_ng_template_17_Conditional_99_Template, 1, 1, "mat-icon", 41)(100, InventoryListComponent_ng_template_17_Conditional_100_Template, 1, 1, "mat-icon", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(101, "div", 80);
    \u0275\u0275template(102, InventoryListComponent_ng_template_17_Conditional_102_Template, 2, 0)(103, InventoryListComponent_ng_template_17_Conditional_103_Template, 3, 0, "div", 81)(104, InventoryListComponent_ng_template_17_Conditional_104_Template, 7, 2, "div", 82);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(105, "div", 83)(106, "button", 84);
    \u0275\u0275listener("click", function InventoryListComponent_ng_template_17_Template_button_click_106_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteSelectedProduct());
    });
    \u0275\u0275text(107, " Delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "div", 26);
    \u0275\u0275template(109, InventoryListComponent_ng_template_17_Conditional_109_Template, 3, 2, "div", 85);
    \u0275\u0275elementStart(110, "button", 86);
    \u0275\u0275listener("click", function InventoryListComponent_ng_template_17_Template_button_click_110_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateSelectedProduct());
    });
    \u0275\u0275text(111, " Update ");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    const newTagInput_r16 = \u0275\u0275reference(97);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r3.selectedProductForm);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r3.selectedProductForm.get("images").value.length ? 7 : 8);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.selectedProductForm.get("images").value.length ? 9 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "active")("color", "primary");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.selectedProductForm.get("active").value === true ? "Active" : "Disabled", " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "name");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "sku");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "barcode");
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "category");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.categories);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "brand");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.brands);
    \u0275\u0275advance(5);
    \u0275\u0275property("formControlName", "vendor");
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r3.vendors);
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "stock");
    \u0275\u0275advance(4);
    \u0275\u0275property("formControlName", "reserved");
    \u0275\u0275advance(7);
    \u0275\u0275property("formControlName", "cost");
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "basePrice");
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "taxPercent");
    \u0275\u0275advance(6);
    \u0275\u0275property("formControlName", "price");
    \u0275\u0275advance(7);
    \u0275\u0275property("formControlName", "weight");
    \u0275\u0275advance(6);
    \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
    \u0275\u0275advance();
    \u0275\u0275property("maxLength", 50);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r3.tagsEditMode ? 99 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.tagsEditMode ? 100 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.tagsEditMode ? 102 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.tagsEditMode ? 103 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.shouldShowCreateTagButton(newTagInput_r16.value) ? 104 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "warn");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.flashMessage ? 109 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary");
  }
}
var InventoryListComponent = class _InventoryListComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _fuseConfirmationService, _formBuilder, _inventoryService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._fuseConfirmationService = _fuseConfirmationService;
    this._formBuilder = _formBuilder;
    this._inventoryService = _inventoryService;
    this.flashMessage = null;
    this.isLoading = false;
    this.searchInputControl = new UntypedFormControl();
    this.selectedProduct = null;
    this.tagsEditMode = false;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.selectedProductForm = this._formBuilder.group({
      id: [""],
      category: [""],
      name: ["", [Validators.required]],
      description: [""],
      tags: [[]],
      sku: [""],
      barcode: [""],
      brand: [""],
      vendor: [""],
      stock: [""],
      reserved: [""],
      cost: [""],
      basePrice: [""],
      taxPercent: [""],
      price: [""],
      weight: [""],
      thumbnail: [""],
      images: [[]],
      currentImageIndex: [0],
      // Image index that is currently being viewed
      active: [false]
    });
    this._inventoryService.brands$.pipe(takeUntil(this._unsubscribeAll)).subscribe((brands) => {
      this.brands = brands;
      this._changeDetectorRef.markForCheck();
    });
    this._inventoryService.categories$.pipe(takeUntil(this._unsubscribeAll)).subscribe((categories) => {
      this.categories = categories;
      this._changeDetectorRef.markForCheck();
    });
    this._inventoryService.pagination$.pipe(takeUntil(this._unsubscribeAll)).subscribe((pagination) => {
      this.pagination = pagination;
      this._changeDetectorRef.markForCheck();
    });
    this.products$ = this._inventoryService.products$;
    this._inventoryService.tags$.pipe(takeUntil(this._unsubscribeAll)).subscribe((tags) => {
      this.tags = tags;
      this.filteredTags = tags;
      this._changeDetectorRef.markForCheck();
    });
    this._inventoryService.vendors$.pipe(takeUntil(this._unsubscribeAll)).subscribe((vendors) => {
      this.vendors = vendors;
      this._changeDetectorRef.markForCheck();
    });
    this.searchInputControl.valueChanges.pipe(takeUntil(this._unsubscribeAll), debounceTime(300), switchMap((query) => {
      this.closeDetails();
      this.isLoading = true;
      return this._inventoryService.getProducts(0, 10, "name", "asc", query);
    }), map(() => {
      this.isLoading = false;
    })).subscribe();
  }
  /**
   * After view init
   */
  ngAfterViewInit() {
    if (this._sort && this._paginator) {
      this._sort.sort({
        id: "name",
        start: "asc",
        disableClear: true
      });
      this._changeDetectorRef.markForCheck();
      this._sort.sortChange.pipe(takeUntil(this._unsubscribeAll)).subscribe(() => {
        this._paginator.pageIndex = 0;
        this.closeDetails();
      });
      merge(this._sort.sortChange, this._paginator.page).pipe(switchMap(() => {
        this.closeDetails();
        this.isLoading = true;
        return this._inventoryService.getProducts(this._paginator.pageIndex, this._paginator.pageSize, this._sort.active, this._sort.direction);
      }), map(() => {
        this.isLoading = false;
      })).subscribe();
    }
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
   * Toggle product details
   *
   * @param productId
   */
  toggleDetails(productId) {
    if (this.selectedProduct && this.selectedProduct.id === productId) {
      this.closeDetails();
      return;
    }
    this._inventoryService.getProductById(productId).subscribe((product) => {
      this.selectedProduct = product;
      this.selectedProductForm.patchValue(product);
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * Close the details
   */
  closeDetails() {
    this.selectedProduct = null;
  }
  /**
   * Cycle through images of selected product
   */
  cycleImages(forward = true) {
    const count = this.selectedProductForm.get("images").value.length;
    const currentIndex = this.selectedProductForm.get("currentImageIndex").value;
    const nextIndex = currentIndex + 1 === count ? 0 : currentIndex + 1;
    const prevIndex = currentIndex - 1 < 0 ? count - 1 : currentIndex - 1;
    if (forward) {
      this.selectedProductForm.get("currentImageIndex").setValue(nextIndex);
    } else {
      this.selectedProductForm.get("currentImageIndex").setValue(prevIndex);
    }
  }
  /**
   * Toggle the tags edit mode
   */
  toggleTagsEditMode() {
    this.tagsEditMode = !this.tagsEditMode;
  }
  /**
   * Filter tags
   *
   * @param event
   */
  filterTags(event) {
    const value = event.target.value.toLowerCase();
    this.filteredTags = this.tags.filter((tag) => tag.title.toLowerCase().includes(value));
  }
  /**
   * Filter tags input key down event
   *
   * @param event
   */
  filterTagsInputKeyDown(event) {
    if (event.key !== "Enter") {
      return;
    }
    if (this.filteredTags.length === 0) {
      this.createTag(event.target.value);
      event.target.value = "";
      return;
    }
    const tag = this.filteredTags[0];
    const isTagApplied = this.selectedProduct.tags.find((id) => id === tag.id);
    if (isTagApplied) {
      this.removeTagFromProduct(tag);
    } else {
      this.addTagToProduct(tag);
    }
  }
  /**
   * Create a new tag
   *
   * @param title
   */
  createTag(title) {
    const tag = {
      title
    };
    this._inventoryService.createTag(tag).subscribe((response) => {
      this.addTagToProduct(response);
    });
  }
  /**
   * Update the tag title
   *
   * @param tag
   * @param event
   */
  updateTagTitle(tag, event) {
    tag.title = event.target.value;
    this._inventoryService.updateTag(tag.id, tag).pipe(debounceTime(300)).subscribe();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Delete the tag
   *
   * @param tag
   */
  deleteTag(tag) {
    this._inventoryService.deleteTag(tag.id).subscribe();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Add tag to the product
   *
   * @param tag
   */
  addTagToProduct(tag) {
    this.selectedProduct.tags.unshift(tag.id);
    this.selectedProductForm.get("tags").patchValue(this.selectedProduct.tags);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Remove tag from the product
   *
   * @param tag
   */
  removeTagFromProduct(tag) {
    this.selectedProduct.tags.splice(this.selectedProduct.tags.findIndex((item) => item === tag.id), 1);
    this.selectedProductForm.get("tags").patchValue(this.selectedProduct.tags);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Toggle product tag
   *
   * @param tag
   * @param change
   */
  toggleProductTag(tag, change) {
    if (change.checked) {
      this.addTagToProduct(tag);
    } else {
      this.removeTagFromProduct(tag);
    }
  }
  /**
   * Should the create tag button be visible
   *
   * @param inputValue
   */
  shouldShowCreateTagButton(inputValue) {
    return !!!(inputValue === "" || this.tags.findIndex((tag) => tag.title.toLowerCase() === inputValue.toLowerCase()) > -1);
  }
  /**
   * Create product
   */
  createProduct() {
    this._inventoryService.createProduct().subscribe((newProduct) => {
      this.selectedProduct = newProduct;
      this.selectedProductForm.patchValue(newProduct);
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * Update the selected product using the form data
   */
  updateSelectedProduct() {
    const product = this.selectedProductForm.getRawValue();
    delete product.currentImageIndex;
    this._inventoryService.updateProduct(product.id, product).subscribe(() => {
      this.showFlashMessage("success");
    });
  }
  /**
   * Delete the selected product using the form data
   */
  deleteSelectedProduct() {
    const confirmation = this._fuseConfirmationService.open({
      title: "Delete product",
      message: "Are you sure you want to remove this product? This action cannot be undone!",
      actions: {
        confirm: {
          label: "Delete"
        }
      }
    });
    confirmation.afterClosed().subscribe((result) => {
      if (result === "confirmed") {
        const product = this.selectedProductForm.getRawValue();
        this._inventoryService.deleteProduct(product.id).subscribe(() => {
          this.closeDetails();
        });
      }
    });
  }
  /**
   * Show flash message
   */
  showFlashMessage(type) {
    this.flashMessage = type;
    this._changeDetectorRef.markForCheck();
    setTimeout(() => {
      this.flashMessage = null;
      this._changeDetectorRef.markForCheck();
    }, 3e3);
  }
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
    this.\u0275fac = function InventoryListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InventoryListComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FuseConfirmationService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(InventoryService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InventoryListComponent, selectors: [["inventory-list"]], viewQuery: function InventoryListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatPaginator, 5);
        \u0275\u0275viewQuery(MatSort, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._paginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._sort = _t.first);
      }
    }, decls: 19, vars: 11, consts: [["rowDetailsTemplate", ""], ["newTagInput", ""], [1, "bg-card", "flex", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "relative", "flex", "flex-0", "flex-col", "border-b", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "absolute", "inset-x-0", "bottom-0"], [1, "text-4xl", "font-extrabold", "tracking-tight"], [1, "mt-6", "flex", "shrink-0", "items-center", "sm:ml-4", "sm:mt-0"], [1, "fuse-mat-dense", "fuse-mat-rounded", "min-w-64", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "formControl", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "ml-4", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "flex", "flex-auto", "overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "overflow-hidden", "sm:mb-18", "sm:overflow-y-auto"], [3, "mode"], [1, "border-t", "p-8", "text-center", "text-4xl", "font-semibold", "tracking-tight", "sm:p-16"], [1, "grid"], ["matSort", "", "matSortDisableClear", "", 1, "inventory-grid", "text-secondary", "sticky", "top-0", "z-10", "grid", "gap-4", "bg-gray-50", "px-6", "py-4", "text-md", "font-semibold", "shadow", "dark:bg-black", "dark:bg-opacity-5", "md:px-8"], [1, "hidden", "md:block", 3, "mat-sort-header"], [3, "mat-sort-header"], [1, "hidden", "sm:block", 3, "mat-sort-header"], [1, "hidden", "lg:block", 3, "mat-sort-header"], [1, "hidden", "sm:block"], [1, "z-10", "border-b", "bg-gray-50", "dark:bg-transparent", "sm:absolute", "sm:inset-x-0", "sm:bottom-0", "sm:border-b-0", "sm:border-t", 3, "ngClass", "length", "pageIndex", "pageSize", "pageSizeOptions", "showFirstLastButtons"], [1, "inventory-grid", "grid", "items-center", "gap-4", "border-b", "px-6", "py-3", "md:px-8"], [1, "flex", "items-center"], [1, "relative", "mr-6", "flex", "h-12", "w-12", "flex-0", "items-center", "justify-center", "overflow-hidden", "rounded", "border"], [1, "w-8", 3, "alt", "src"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "text-center", "text-xs", "font-semibold", "uppercase", "leading-none"], [1, "hidden", "truncate", "md:block"], [1, "truncate"], [1, "hidden", "items-center", "lg:flex"], [1, "min-w-4"], [1, "ml-2", "flex", "h-4", "w-1", "items-end", "overflow-hidden", "rounded", "bg-red-200"], [1, "ml-2", "flex", "h-4", "w-1", "items-end", "overflow-hidden", "rounded", "bg-orange-200"], [1, "ml-2", "flex", "h-4", "w-1", "items-end", "overflow-hidden", "rounded", "bg-green-100"], [1, "hidden", "lg:block"], [1, "text-green-400", "icon-size-5", 3, "svgIcon"], [1, "text-gray-400", "icon-size-5", 3, "svgIcon"], ["mat-stroked-button", "", 1, "h-7", "min-h-7", "min-w-10", "px-2", "leading-6", 3, "click"], [1, "icon-size-5", 3, "svgIcon"], [1, "flex", "h-1/3", "w-full", "bg-red-600"], [1, "flex", "h-2/4", "w-full", "bg-orange-400"], [1, "flex", "h-full", "w-full", "bg-green-400"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "overflow-hidden", "shadow-lg"], [1, "flex", "border-b"], [1, "flex", "w-full", "flex-col", 3, "formGroup"], [1, "flex", "flex-col", "p-8", "sm:flex-row"], [1, "mb-8", "flex", "flex-col", "items-center", "sm:mb-0", "sm:items-start"], [1, "flex", "flex-col", "items-center"], [1, "h-44", "w-32", "overflow-hidden", "rounded", "border"], [1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "min-h-20", "items-center", "text-lg", "font-semibold"], [1, "mt-2", "flex", "items-center", "whitespace-nowrap"], [1, "mt-8", "flex", "flex-col"], [1, "mb-2", "font-semibold"], [3, "formControlName", "color"], [1, "flex", "flex-auto", "flex-wrap"], [1, "flex", "w-full", "flex-col", "sm:pl-8", "lg:w-2/4"], [1, "w-full"], ["matInput", "", 3, "formControlName"], [1, "flex"], [1, "w-1/3", "pr-2"], [1, "w-2/3", "pl-2"], [3, "formControlName"], [3, "value"], [1, "w-1/3", "px-2"], [1, "w-1/3", "pl-2"], ["type", "number", "matInput", "", 3, "formControlName"], [1, "flex", "w-full", "flex-col", "sm:pl-8", "lg:w-1/4"], ["matPrefix", ""], ["matSuffix", ""], [1, "mb-px", "font-medium", "leading-tight"], [1, "mt-1.5", "overflow-hidden", "rounded-md", "border", "border-gray-300", "shadow-sm", "dark:border-gray-500"], [1, "-my-px", "flex", "items-center", "px-3", "py-2"], [1, "flex", "min-w-0", "flex-auto", "items-center"], ["type", "text", "placeholder", "Enter tag name", 1, "ml-2", "min-w-0", "border-0", "py-1", 3, "input", "keydown", "maxLength"], ["mat-icon-button", "", 1, "ml-3", "h-8", "min-h-8", "w-8", 3, "click"], [1, "h-44", "overflow-y-auto", "border-t", "border-gray-300", "leading-none", "dark:border-gray-500"], [1, "space-y-2", "p-4"], ["matRipple", "", 1, "-ml-0.5", "flex", "h-10", "min-h-10", "cursor-pointer", "items-center", "border-t", "pl-4", "pr-3", "leading-none", "dark:hover:bg-hover", "hover:bg-gray-50"], [1, "flex", "w-full", "items-center", "justify-between", "border-t", "px-8", "py-4"], ["mat-button", "", 1, "-ml-4", 3, "click", "color"], [1, "mr-4", "flex", "items-center"], ["mat-flat-button", "", 3, "click", "color"], ["mat-icon-button", "", 3, "click"], [1, "font-sm", "mx-2"], [1, "flex", "h-10", "min-h-10", "items-center", "pl-1", "pr-4", 3, "color", "checked"], [1, "flex", "h-10", "min-h-10", "items-center", "pl-1", "pr-4", 3, "change", "color", "checked"], [1, "fuse-mat-dense", "w-full", 3, "subscriptSizing"], ["matInput", "", 3, "input", "value"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], ["matRipple", "", 1, "-ml-0.5", "flex", "h-10", "min-h-10", "cursor-pointer", "items-center", "border-t", "pl-4", "pr-3", "leading-none", "dark:hover:bg-hover", "hover:bg-gray-50", 3, "click"], [1, "mr-2", "icon-size-5", 3, "svgIcon"], [1, "break-all"], [1, "text-green-500", 3, "svgIcon"], [1, "ml-2"], [1, "text-red-500", 3, "svgIcon"]], template: function InventoryListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
        \u0275\u0275template(2, InventoryListComponent_Conditional_2_Template, 2, 1, "div", 4);
        \u0275\u0275elementStart(3, "div", 5);
        \u0275\u0275text(4, "Inventory");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 6)(6, "mat-form-field", 7);
        \u0275\u0275element(7, "mat-icon", 8)(8, "input", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "button", 10);
        \u0275\u0275listener("click", function InventoryListComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.createProduct());
        });
        \u0275\u0275element(10, "mat-icon", 11);
        \u0275\u0275elementStart(11, "span", 12);
        \u0275\u0275text(12, "Add");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "div", 13)(14, "div", 14);
        \u0275\u0275template(15, InventoryListComponent_Conditional_15_Template, 2, 1);
        \u0275\u0275pipe(16, "async");
        \u0275\u0275template(17, InventoryListComponent_ng_template_17_Template, 112, 29, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        let tmp_9_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.isLoading ? 2 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
        \u0275\u0275advance();
        \u0275\u0275property("formControl", ctx.searchInputControl)("autocomplete", "off")("placeholder", "Search products");
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:plus");
        \u0275\u0275advance(5);
        \u0275\u0275conditional((tmp_9_0 = \u0275\u0275pipeBind1(16, 9, ctx.products$)) ? 15 : -1, tmp_9_0);
      }
    }, dependencies: [
      MatProgressBarModule,
      MatProgressBar,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatSuffix,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NumberValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatSortModule,
      MatSort,
      MatSortHeader,
      NgTemplateOutlet,
      MatPaginatorModule,
      MatPaginator,
      NgClass,
      MatSlideToggleModule,
      MatSlideToggle,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatOptionModule,
      MatCheckboxModule,
      MatCheckbox,
      MatRippleModule,
      MatRipple,
      AsyncPipe,
      CurrencyPipe
    ], styles: ["/* angular:styles/component:scss;81f0cb578b508bba0253920fcde9f1ea507ab05f9ec33248428c635545e06d01;D:/Code/buzzripper/dyvenix-1/app1.client/src/app/modules/admin/apps/ecommerce/inventory/list/inventory.component.ts */\n.inventory-grid {\n  grid-template-columns: 48px auto 40px;\n}\n@media (min-width: 600px) {\n  .inventory-grid {\n    grid-template-columns: 48px auto 112px 72px;\n  }\n}\n@media (min-width: 960px) {\n  .inventory-grid {\n    grid-template-columns: 48px 112px auto 112px 72px;\n  }\n}\n@media (min-width: 1280px) {\n  .inventory-grid {\n    grid-template-columns: 48px 112px auto 112px 96px 96px 72px;\n  }\n}\n/*# sourceMappingURL=inventory.component.css.map */\n"], encapsulation: 2, data: { animation: fuseAnimations }, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InventoryListComponent, { className: "InventoryListComponent", filePath: "src/app/modules/admin/apps/ecommerce/inventory/list/inventory.component.ts", lineNumber: 107 });
})();

// src/app/modules/admin/apps/ecommerce/ecommerce.routes.ts
var ecommerce_routes_default = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "inventory"
  },
  {
    path: "inventory",
    component: InventoryComponent,
    children: [
      {
        path: "",
        component: InventoryListComponent,
        resolve: {
          brands: () => inject(InventoryService).getBrands(),
          categories: () => inject(InventoryService).getCategories(),
          products: () => inject(InventoryService).getProducts(),
          tags: () => inject(InventoryService).getTags(),
          vendors: () => inject(InventoryService).getVendors()
        }
      }
    ]
  }
];
export {
  ecommerce_routes_default as default
};
//# sourceMappingURL=chunk-5H7IFVAW.js.map
