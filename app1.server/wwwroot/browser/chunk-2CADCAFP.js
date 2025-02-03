import {
  FuseHighlightComponent
} from "./chunk-6QCSQUVR.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-5KZHZBIW.js";
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
  MatLabel
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
  UntypedFormBuilder,
  ɵNgNoValidate
} from "./chunk-J5XV3GIF.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-JPDBWMRG.js";
import {
  MatOption,
  MatOptionModule
} from "./chunk-F6PEOSCL.js";
import {
  coerceBooleanProperty
} from "./chunk-EWZPTUTP.js";
import "./chunk-WH7F4HUX.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-WTEW5YKI.js";
import "./chunk-JL6CBEU5.js";
import {
  JsonPipe
} from "./chunk-M6AYR6A2.js";
import {
  Subject,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtext
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/ui/advanced-search/advanced-search.component.ts
var AdvancedSearchComponent = class _AdvancedSearchComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _formBuilder, _router) {
    this._activatedRoute = _activatedRoute;
    this._formBuilder = _formBuilder;
    this._router = _router;
    this.searchFormDefaults = {
      keywords: "",
      type: "any",
      isTrashed: false,
      isArchived: false,
      isStarred: false
    };
    this._unsubscribeAll = new Subject();
    this.searchForm = this._formBuilder.group({
      keywords: [this.searchFormDefaults.keywords],
      type: [this.searchFormDefaults.type],
      isTrashed: [this.searchFormDefaults.isTrashed],
      isArchived: [this.searchFormDefaults.isArchived],
      isStarred: [this.searchFormDefaults.isStarred]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._activatedRoute.queryParams.pipe(takeUntil(this._unsubscribeAll)).subscribe((queryParams) => {
      this.queryParams = queryParams;
      this.searchForm.setValue({
        keywords: queryParams?.keywords ?? this.searchFormDefaults.keywords,
        type: queryParams?.type ?? this.searchFormDefaults.type,
        isTrashed: queryParams?.isTrashed ? coerceBooleanProperty(queryParams?.isTrashed) : this.searchFormDefaults.isTrashed,
        isArchived: queryParams?.isArchived ? coerceBooleanProperty(queryParams?.isArchived) : this.searchFormDefaults.isArchived,
        isStarred: queryParams?.isStarred ? coerceBooleanProperty(queryParams?.isStarred) : this.searchFormDefaults.isStarred
      }, { emitEvent: false });
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
   * Reset the search form using the default
   */
  reset() {
    this.searchForm.reset(this.searchFormDefaults);
  }
  /**
   * Perform the search
   */
  search() {
    this._router.navigate(["./"], {
      queryParams: this.searchForm.value,
      relativeTo: this._activatedRoute
    });
  }
  static {
    this.\u0275fac = function AdvancedSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AdvancedSearchComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdvancedSearchComponent, selectors: [["advanced-search"]], decls: 64, vars: 20, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "max-w-3xl"], [1, "prose", "prose-sm", "max-w-3xl"], [1, "bg-card", "mt-8", "flex", "w-full", "max-w-3xl", "flex-col", "items-start", "space-y-8", "overflow-hidden", "rounded-2xl", "p-8", "shadow", 3, "formGroup"], [1, "w-full", 3, "subscriptSizing"], ["matInput", "", 3, "autocomplete", "formControlName"], [3, "formControlName"], [3, "value"], [1, "-ml-2", "flex", "flex-col", "items-start"], [3, "color", "formControlName"], [1, "mt-8", "flex", "w-full", "items-center", "justify-end"], ["type", "button", "mat-button", "", 3, "click"], ["type", "button", "mat-flat-button", "", 1, "ml-2", 3, "click", "color"], [1, "dark", "mt-8", "w-full", "overflow-hidden", "rounded-2xl", "p-4"], ["fuse-highlight", "", 3, "code", "lang"]], template: function AdvancedSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "User Interface");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "h2", 6);
        \u0275\u0275text(9, " Advanced Search ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "p");
        \u0275\u0275text(14, " This page demonstrates a query parameters based search using Angular's built-in ");
        \u0275\u0275elementStart(15, "code");
        \u0275\u0275text(16, "routerLink");
        \u0275\u0275elementEnd();
        \u0275\u0275text(17, " directive and its ");
        \u0275\u0275elementStart(18, "code");
        \u0275\u0275text(19, "queryParams");
        \u0275\u0275elementEnd();
        \u0275\u0275text(20, " input. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "p");
        \u0275\u0275text(22, " Fill the form, hit the ");
        \u0275\u0275elementStart(23, "strong");
        \u0275\u0275text(24, "Search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(25, " button and then observe the address bar of your browser. If you reload the page with the parameters, you will see that the form will be populated automatically. We also added an output window so you can observe the query parameters object. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "p");
        \u0275\u0275text(27, " This method can be used for implementing ");
        \u0275\u0275elementStart(28, "em");
        \u0275\u0275text(29, "Advanced search");
        \u0275\u0275elementEnd();
        \u0275\u0275text(30, " mechanics as well as ");
        \u0275\u0275elementStart(31, "em");
        \u0275\u0275text(32, "Filtering");
        \u0275\u0275elementEnd();
        \u0275\u0275text(33, " similar to the products filtering that you can find in most eCommerce websites. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "form", 10)(35, "mat-form-field", 11)(36, "mat-label");
        \u0275\u0275text(37, "Keywords");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "input", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-form-field", 11)(40, "mat-label");
        \u0275\u0275text(41, "Type");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-select", 13)(43, "mat-option", 14);
        \u0275\u0275text(44, "Any");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "mat-option", 14);
        \u0275\u0275text(46, "Files");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "mat-option", 14);
        \u0275\u0275text(48, "Folders");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(49, "div", 15)(50, "mat-checkbox", 16);
        \u0275\u0275text(51, " In trash ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "mat-checkbox", 16);
        \u0275\u0275text(53, " Archived ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "mat-checkbox", 16);
        \u0275\u0275text(55, " Starred ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(56, "div", 17)(57, "button", 18);
        \u0275\u0275listener("click", function AdvancedSearchComponent_Template_button_click_57_listener() {
          return ctx.reset();
        });
        \u0275\u0275text(58, " Reset ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "button", 19);
        \u0275\u0275listener("click", function AdvancedSearchComponent_Template_button_click_59_listener() {
          return ctx.search();
        });
        \u0275\u0275text(60, " Search ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(61, "div", 20);
        \u0275\u0275element(62, "textarea", 21);
        \u0275\u0275pipe(63, "json");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(34);
        \u0275\u0275property("formGroup", ctx.searchForm);
        \u0275\u0275advance();
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("autocomplete", "off")("formControlName", "keywords");
        \u0275\u0275advance();
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "type");
        \u0275\u0275advance();
        \u0275\u0275property("value", "any");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "files");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "folders");
        \u0275\u0275advance(3);
        \u0275\u0275property("color", "primary")("formControlName", "isTrashed");
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "primary")("formControlName", "isArchived");
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "primary")("formControlName", "isStarred");
        \u0275\u0275advance(5);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(3);
        \u0275\u0275property("code", \u0275\u0275pipeBind1(63, 18, ctx.queryParams))("lang", "json");
      }
    }, dependencies: [
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatOptionModule,
      MatCheckboxModule,
      MatCheckbox,
      MatButtonModule,
      MatButton,
      FuseHighlightComponent,
      JsonPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdvancedSearchComponent, { className: "AdvancedSearchComponent", filePath: "src/app/modules/admin/ui/advanced-search/advanced-search.component.ts", lineNumber: 44 });
})();

// src/app/modules/admin/ui/advanced-search/advanced-search.routes.ts
var advanced_search_routes_default = [
  {
    path: "",
    component: AdvancedSearchComponent
  }
];
export {
  advanced_search_routes_default as default
};
//# sourceMappingURL=chunk-2CADCAFP.js.map
