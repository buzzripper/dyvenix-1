import {
  MatSort,
  MatSortHeader,
  MatSortModule
} from "./chunk-GAOBHCVE.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatFooterCell,
  MatFooterCellDef,
  MatFooterRow,
  MatFooterRowDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableDataSource,
  MatTableModule
} from "./chunk-54TODX3J.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-FGKTZ4ZM.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-TARAMFMK.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-YALL3E64.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-BOL35CP3.js";
import "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-JPDBWMRG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5AHQJJ5Y.js";
import "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import "./chunk-WH7F4HUX.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  CurrencyPipe,
  DatePipe,
  NgClass
} from "./chunk-M6AYR6A2.js";
import {
  BehaviorSubject,
  Subject,
  inject,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵloadQuery,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/dashboards/finance/finance.service.ts
var FinanceService = class _FinanceService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._data = new BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for data
   */
  get data$() {
    return this._data.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get data
   */
  getData() {
    return this._httpClient.get("api/dashboards/finance").pipe(tap((response) => {
      this._data.next(response);
    }));
  }
  static {
    this.\u0275fac = function FinanceService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FinanceService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FinanceService, factory: _FinanceService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/dashboards/finance/finance.component.ts
var _c0 = ["recentTransactionsTable"];
var _c1 = () => ["recentOrdersTableFooter"];
var _c2 = (a0, a1) => ({ "bg-red-200 text-red-800 dark:bg-red-600 dark:text-red-50": a0, "bg-green-200 text-green-800 dark:bg-green-600 dark:text-green-50": a1 });
function FinanceComponent_th_199_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 87);
    \u0275\u0275text(1, " Transaction ID ");
    \u0275\u0275elementEnd();
  }
}
function FinanceComponent_td_200_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 88)(1, "span", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transaction_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", transaction_r1.transactionId, " ");
  }
}
function FinanceComponent_th_202_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 87);
    \u0275\u0275text(1, " Date ");
    \u0275\u0275elementEnd();
  }
}
function FinanceComponent_td_203_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 88)(1, "span", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transaction_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, transaction_r2.date, "MMM dd, y"), " ");
  }
}
function FinanceComponent_th_205_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 87);
    \u0275\u0275text(1, " Name ");
    \u0275\u0275elementEnd();
  }
}
function FinanceComponent_td_206_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 88)(1, "span", 90);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transaction_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", transaction_r3.name, " ");
  }
}
function FinanceComponent_th_208_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 87);
    \u0275\u0275text(1, " Amount ");
    \u0275\u0275elementEnd();
  }
}
function FinanceComponent_td_209_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 88)(1, "span", 91);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const transaction_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, transaction_r4.amount, "USD"), " ");
  }
}
function FinanceComponent_th_211_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 87);
    \u0275\u0275text(1, " Status ");
    \u0275\u0275elementEnd();
  }
}
function FinanceComponent_td_212_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 88)(1, "span", 92)(2, "span", 93);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const transaction_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c2, transaction_r5.status === "pending", transaction_r5.status === "completed"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(transaction_r5.status);
  }
}
function FinanceComponent_td_214_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 94)(1, "button", 95);
    \u0275\u0275text(2, " See all transactions ");
    \u0275\u0275elementEnd()();
  }
}
function FinanceComponent_tr_215_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 96);
  }
}
function FinanceComponent_tr_216_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 97);
  }
}
function FinanceComponent_tr_217_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 98);
  }
}
var FinanceComponent = class _FinanceComponent {
  /**
   * Constructor
   */
  constructor(_financeService) {
    this._financeService = _financeService;
    this.recentTransactionsDataSource = new MatTableDataSource();
    this.recentTransactionsTableColumns = [
      "transactionId",
      "date",
      "name",
      "amount",
      "status"
    ];
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._financeService.data$.pipe(takeUntil(this._unsubscribeAll)).subscribe((data) => {
      this.data = data;
      this.recentTransactionsDataSource.data = data.recentTransactions;
      this._prepareChartData();
    });
  }
  /**
   * After view init
   */
  ngAfterViewInit() {
    this.recentTransactionsDataSource.sort = this.recentTransactionsTableMatSort;
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
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Prepare the chart data from the data
   *
   * @private
   */
  _prepareChartData() {
    this.accountBalanceOptions = {
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false
          }
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        width: "100%",
        height: "100%",
        type: "area",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#A3BFFA", "#667EEA"],
      fill: {
        colors: ["#CED9FB", "#AECDFD"],
        opacity: 0.5,
        type: "solid"
      },
      series: this.data.accountBalance.series,
      stroke: {
        curve: "straight",
        width: 2
      },
      tooltip: {
        followCursor: true,
        theme: "dark",
        x: {
          format: "MMM dd, yyyy"
        },
        y: {
          formatter: (value) => value + "%"
        }
      },
      xaxis: {
        type: "datetime"
      }
    };
  }
  static {
    this.\u0275fac = function FinanceComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FinanceComponent)(\u0275\u0275directiveInject(FinanceService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FinanceComponent, selectors: [["finance"]], viewQuery: function FinanceComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5, MatSort);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.recentTransactionsTableMatSort = _t.first);
      }
    }, decls: 309, vars: 96, consts: [["actionsMenu", "matMenu"], ["previousStatementMenu", "matMenu"], ["currentStatementMenu", "matMenu"], ["accountBalanceMenu", "matMenu"], ["recentTransactionsTable", ""], ["budgetMenu", "matMenu"], [1, "flex", "w-full", "flex-auto", "flex-col"], [1, "mx-auto", "flex", "w-full", "max-w-screen-xl", "flex-wrap", "p-6", "md:p-8"], [1, "flex", "w-full", "items-center", "justify-between"], [1, "text-3xl", "font-semibold", "leading-8", "tracking-tight"], [1, "text-secondary", "font-medium", "tracking-tight"], [1, "ml-6", "flex", "items-center"], ["mat-stroked-button", "", 1, "hidden", "sm:inline-flex"], [1, "icon-size-5", 3, "svgIcon"], [1, "ml-2"], ["mat-stroked-button", "", 1, "ml-3", "hidden", "sm:inline-flex"], ["mat-flat-button", "", 1, "ml-3", "hidden", "sm:inline-flex", 3, "color"], [1, "sm:hidden"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [3, "svgIcon"], ["mat-menu-item", ""], [1, "mt-8", "grid", "w-full", "grid-cols-1", "gap-8", "xl:grid-cols-2"], [1, "grid", "gap-8", "sm:grid-flow-col", "xl:grid-flow-row"], [1, "bg-card", "relative", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "p-6", "pb-3", "pr-3", "shadow"], [1, "absolute", "bottom-0", "right-0", "-m-6", "h-24", "w-24"], [1, "text-green-500", "opacity-25", "icon-size-24", "dark:text-green-400", 3, "svgIcon"], [1, "flex", "items-center"], [1, "flex", "flex-col"], [1, "truncate", "text-lg", "font-medium", "leading-6", "tracking-tight"], [1, "text-sm", "font-medium", "text-green-600"], [1, "-mt-2", "ml-auto"], [1, "mr-3", "icon-size-5", 3, "svgIcon"], [1, "my-2"], [1, "-mx-6", "mt-4", "flex", "flex-row", "flex-wrap"], [1, "mx-6", "my-3", "flex", "flex-col"], [1, "text-secondary", "text-sm", "font-medium", "leading-none"], [1, "mt-2", "text-3xl", "font-medium", "leading-none"], [1, "text-red-500", "opacity-25", "icon-size-24", "dark:text-red-400", 3, "svgIcon"], [1, "text-sm", "font-medium", "text-red-600"], [1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "shadow"], [1, "flex", "flex-col", "p-6", "pb-4"], [1, "flex", "items-center", "justify-between"], [1, "mr-4", "truncate", "text-lg", "font-medium", "leading-6", "tracking-tight"], [1, "text-secondary", "font-medium"], ["mat-button", "", 1, "bg-hover", "h-6", "min-h-6", "rounded-full", "px-2", 3, "matMenuTriggerFor"], [1, "text-secondary", "text-sm", "font-medium"], [1, "mr-2", "mt-6", "flex", "items-start"], [1, "text-3xl", "font-semibold", "tracking-tighter", "md:text-5xl"], [1, "ml-8", "flex", "flex-col", "md:ml-16"], [1, "flex", "flex-auto", "flex-col"], [1, "h-full", "w-full", "flex-auto", 3, "chart", "colors", "fill", "series", "stroke", "tooltip", "xaxis"], [1, "mt-8", "grid", "w-full", "grid-cols-1", "gap-8", "xl:grid-cols-3"], [1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "shadow", "xl:col-span-2"], [1, "p-6"], [1, "mx-6", "overflow-x-auto"], ["mat-table", "", "matSort", "", 1, "w-full", "bg-transparent", 3, "dataSource", "trackBy"], ["matColumnDef", "transactionId"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "date"], ["matColumnDef", "name"], ["matColumnDef", "amount"], ["matColumnDef", "status"], ["matColumnDef", "recentOrdersTableFooter"], ["class", "border-0 px-0 py-6", "mat-footer-cell", "", "colspan", "6", 4, "matFooterCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["class", "order-row h-16", "mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["class", "h-16 border-0", "mat-footer-row", "", 4, "matFooterRowDef"], [1, "bg-card", "flex", "flex-auto", "flex-col", "rounded-2xl", "p-6", "shadow"], [1, "-mr-2", "-mt-2", "ml-auto"], [1, "mt-6"], [1, "my-8", "space-y-8"], [1, "flex", "h-14", "w-14", "items-center", "justify-center", "rounded", "bg-red-100", "text-red-800", "dark:bg-red-600", "dark:text-red-50"], [1, "text-current", 3, "svgIcon"], [1, "ml-4", "flex-auto", "leading-none"], [1, "mt-2", "text-2xl", "font-medium"], [1, "mt-3", "rounded-full", 3, "color", "mode", "value"], [1, "ml-6", "mt-auto", "flex", "min-w-18", "items-end", "justify-end"], [1, "text-lg", "leading-none"], [1, "ml-1", "text-green-600", "icon-size-4", 3, "svgIcon"], [1, "flex", "h-14", "w-14", "items-center", "justify-center", "rounded", "bg-indigo-100", "text-indigo-800", "dark:bg-indigo-600", "dark:text-indigo-50"], [1, "mt-3", "rounded-full", 3, "mode", "value"], [1, "ml-1", "text-red-600", "icon-size-4", 3, "svgIcon"], [1, "flex", "h-14", "w-14", "items-center", "justify-center", "rounded", "bg-teal-100", "text-teal-800", "dark:bg-teal-600", "dark:text-teal-50"], [1, "text-secondary", "mt-3", "text-md"], [1, "mt-auto", "flex", "items-center"], ["mat-stroked-button", "", 1, "mt-2"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], [1, "text-secondary", "whitespace-nowrap", "pr-6", "text-sm", "font-medium"], [1, "whitespace-nowrap", "pr-6"], [1, "whitespace-nowrap", "pr-6", "font-medium"], [1, "inline-flex", "items-center", "rounded-full", "px-2.5", "py-0.5", "text-xs", "font-bold", "uppercase", "tracking-wide", 3, "ngClass"], [1, "whitespace-nowrap", "leading-relaxed"], ["mat-footer-cell", "", "colspan", "6", 1, "border-0", "px-0", "py-6"], ["mat-stroked-button", ""], ["mat-header-row", ""], ["mat-row", "", 1, "order-row", "h-16"], ["mat-footer-row", "", 1, "h-16", "border-0"]], template: function FinanceComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "div")(4, "h2", 9);
        \u0275\u0275text(5, " Finance dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 10);
        \u0275\u0275text(7, " Keep track of your financial status ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 11)(9, "button", 12);
        \u0275\u0275element(10, "mat-icon", 13);
        \u0275\u0275elementStart(11, "span", 14);
        \u0275\u0275text(12, "Reports");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 15);
        \u0275\u0275element(14, "mat-icon", 13);
        \u0275\u0275elementStart(15, "span", 14);
        \u0275\u0275text(16, "Settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "button", 16);
        \u0275\u0275element(18, "mat-icon", 13);
        \u0275\u0275elementStart(19, "span", 14);
        \u0275\u0275text(20, "Export");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 17)(22, "button", 18);
        \u0275\u0275element(23, "mat-icon", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-menu", null, 0)(26, "button", 20);
        \u0275\u0275text(27, "Export");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "button", 20);
        \u0275\u0275text(29, "Reports");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "button", 20);
        \u0275\u0275text(31, "Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(32, "div", 21)(33, "div", 22)(34, "div", 23)(35, "div", 24);
        \u0275\u0275element(36, "mat-icon", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 26)(38, "div", 27)(39, "div", 28);
        \u0275\u0275text(40, " Previous Statement ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 29);
        \u0275\u0275text(42);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(43, "div", 30)(44, "button", 18);
        \u0275\u0275element(45, "mat-icon", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-menu", null, 1)(48, "button", 20)(49, "span", 26);
        \u0275\u0275element(50, "mat-icon", 31);
        \u0275\u0275elementStart(51, "span");
        \u0275\u0275text(52, "View statement");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(53, "button", 20)(54, "span", 26);
        \u0275\u0275element(55, "mat-icon", 31);
        \u0275\u0275elementStart(56, "span");
        \u0275\u0275text(57, "Spending breakdown");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(58, "button", 20)(59, "span", 26);
        \u0275\u0275element(60, "mat-icon", 31);
        \u0275\u0275elementStart(61, "span");
        \u0275\u0275text(62, "Tax breakdown");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(63, "mat-divider", 32);
        \u0275\u0275elementStart(64, "button", 20)(65, "span", 26);
        \u0275\u0275element(66, "mat-icon", 31);
        \u0275\u0275elementStart(67, "span");
        \u0275\u0275text(68, "Print statement");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(69, "button", 20)(70, "span", 26);
        \u0275\u0275element(71, "mat-icon", 31);
        \u0275\u0275elementStart(72, "span");
        \u0275\u0275text(73, "Email statement");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(74, "div", 33)(75, "div", 34)(76, "div", 35);
        \u0275\u0275text(77, " Card Limit ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 36);
        \u0275\u0275text(79);
        \u0275\u0275pipe(80, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 34)(82, "div", 35);
        \u0275\u0275text(83, " Spent ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 36);
        \u0275\u0275text(85);
        \u0275\u0275pipe(86, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "div", 34)(88, "div", 35);
        \u0275\u0275text(89, " Minimum ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 36);
        \u0275\u0275text(91);
        \u0275\u0275pipe(92, "currency");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(93, "div", 23)(94, "div", 24);
        \u0275\u0275element(95, "mat-icon", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 26)(97, "div", 27)(98, "div", 28);
        \u0275\u0275text(99, " Current Statement ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(100, "div", 38);
        \u0275\u0275text(101);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(102, "div", 30)(103, "button", 18);
        \u0275\u0275element(104, "mat-icon", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(105, "mat-menu", null, 2)(107, "button", 20)(108, "span", 26);
        \u0275\u0275element(109, "mat-icon", 31);
        \u0275\u0275elementStart(110, "span");
        \u0275\u0275text(111, "View statement");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(112, "button", 20)(113, "span", 26);
        \u0275\u0275element(114, "mat-icon", 31);
        \u0275\u0275elementStart(115, "span");
        \u0275\u0275text(116, "Spending breakdown");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(117, "button", 20)(118, "span", 26);
        \u0275\u0275element(119, "mat-icon", 31);
        \u0275\u0275elementStart(120, "span");
        \u0275\u0275text(121, "Tax breakdown");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(122, "mat-divider", 32);
        \u0275\u0275elementStart(123, "button", 20)(124, "span", 26);
        \u0275\u0275element(125, "mat-icon", 31);
        \u0275\u0275elementStart(126, "span");
        \u0275\u0275text(127, "Print statement");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(128, "button", 20)(129, "span", 26);
        \u0275\u0275element(130, "mat-icon", 31);
        \u0275\u0275elementStart(131, "span");
        \u0275\u0275text(132, "Email statement");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(133, "div", 33)(134, "div", 34)(135, "div", 35);
        \u0275\u0275text(136, " Card Limit ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "div", 36);
        \u0275\u0275text(138);
        \u0275\u0275pipe(139, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(140, "div", 34)(141, "div", 35);
        \u0275\u0275text(142, " Spent ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "div", 36);
        \u0275\u0275text(144);
        \u0275\u0275pipe(145, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(146, "div", 34)(147, "div", 35);
        \u0275\u0275text(148, " Minimum ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "div", 36);
        \u0275\u0275text(150);
        \u0275\u0275pipe(151, "currency");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(152, "div", 39)(153, "div", 40)(154, "div", 41)(155, "div", 27)(156, "div", 42);
        \u0275\u0275text(157, " Account Balance ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(158, "div", 43);
        \u0275\u0275text(159, " Monthly balance growth and avg. monthly income ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(160, "div", 14)(161, "button", 44)(162, "span", 45);
        \u0275\u0275text(163, "12 months");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(164, "mat-menu", null, 3)(166, "button", 20);
        \u0275\u0275text(167, "3 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(168, "button", 20);
        \u0275\u0275text(169, "6 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "button", 20);
        \u0275\u0275text(171, "9 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(172, "button", 20);
        \u0275\u0275text(173, "12 months");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(174, "div", 46)(175, "div", 27)(176, "div", 47);
        \u0275\u0275text(177);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 35);
        \u0275\u0275text(179, " Average Monthly Growth ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(180, "div", 48)(181, "div", 47);
        \u0275\u0275text(182);
        \u0275\u0275pipe(183, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(184, "div", 35);
        \u0275\u0275text(185, " Average Monthly Income ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(186, "div", 49);
        \u0275\u0275element(187, "apx-chart", 50);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(188, "div", 51)(189, "div", 52)(190, "div", 53)(191, "div", 42);
        \u0275\u0275text(192, " Recent transactions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "div", 43);
        \u0275\u0275text(194, " 1 pending, 4 completed ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(195, "div", 54)(196, "table", 55, 4);
        \u0275\u0275elementContainerStart(198, 56);
        \u0275\u0275template(199, FinanceComponent_th_199_Template, 2, 0, "th", 57)(200, FinanceComponent_td_200_Template, 3, 1, "td", 58);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(201, 59);
        \u0275\u0275template(202, FinanceComponent_th_202_Template, 2, 0, "th", 57)(203, FinanceComponent_td_203_Template, 4, 4, "td", 58);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(204, 60);
        \u0275\u0275template(205, FinanceComponent_th_205_Template, 2, 0, "th", 57)(206, FinanceComponent_td_206_Template, 3, 1, "td", 58);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(207, 61);
        \u0275\u0275template(208, FinanceComponent_th_208_Template, 2, 0, "th", 57)(209, FinanceComponent_td_209_Template, 4, 4, "td", 58);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(210, 62);
        \u0275\u0275template(211, FinanceComponent_th_211_Template, 2, 0, "th", 57)(212, FinanceComponent_td_212_Template, 4, 5, "td", 58);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275elementContainerStart(213, 63);
        \u0275\u0275template(214, FinanceComponent_td_214_Template, 3, 0, "td", 64);
        \u0275\u0275elementContainerEnd();
        \u0275\u0275template(215, FinanceComponent_tr_215_Template, 1, 0, "tr", 65)(216, FinanceComponent_tr_216_Template, 1, 0, "tr", 66)(217, FinanceComponent_tr_217_Template, 1, 0, "tr", 67);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(218, "div", 68)(219, "div", 26)(220, "div", 27)(221, "div", 42);
        \u0275\u0275text(222, " Budget ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(223, "div", 43);
        \u0275\u0275text(224, " Monthly budget summary ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(225, "div", 69)(226, "button", 18);
        \u0275\u0275element(227, "mat-icon", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(228, "mat-menu", null, 5)(230, "button", 20);
        \u0275\u0275text(231, "Expenses breakdown");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "button", 20);
        \u0275\u0275text(233, "Savings breakdown");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "button", 20);
        \u0275\u0275text(235, "Bills breakdown");
        \u0275\u0275elementEnd();
        \u0275\u0275element(236, "mat-divider", 32);
        \u0275\u0275elementStart(237, "button", 20)(238, "span", 26);
        \u0275\u0275element(239, "mat-icon", 31);
        \u0275\u0275elementStart(240, "span");
        \u0275\u0275text(241, "Print budget summary");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(242, "button", 20)(243, "span", 26);
        \u0275\u0275element(244, "mat-icon", 31);
        \u0275\u0275elementStart(245, "span");
        \u0275\u0275text(246, "Email budget summary");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(247, "div", 70);
        \u0275\u0275text(248, " Last month; you had ");
        \u0275\u0275elementStart(249, "strong");
        \u0275\u0275text(250, "223");
        \u0275\u0275elementEnd();
        \u0275\u0275text(251, " expense transactions, ");
        \u0275\u0275elementStart(252, "strong");
        \u0275\u0275text(253, "12");
        \u0275\u0275elementEnd();
        \u0275\u0275text(254, " savings entries and ");
        \u0275\u0275elementStart(255, "strong");
        \u0275\u0275text(256, "4");
        \u0275\u0275elementEnd();
        \u0275\u0275text(257, " bills. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(258, "div", 71)(259, "div", 27)(260, "div", 26)(261, "div", 72);
        \u0275\u0275element(262, "mat-icon", 73);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(263, "div", 74)(264, "div", 45);
        \u0275\u0275text(265, " Expenses ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(266, "div", 75);
        \u0275\u0275text(267);
        \u0275\u0275pipe(268, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275element(269, "mat-progress-bar", 76);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(270, "div", 77)(271, "div", 78);
        \u0275\u0275text(272, "2.6%");
        \u0275\u0275elementEnd();
        \u0275\u0275element(273, "mat-icon", 79);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(274, "div", 27)(275, "div", 26)(276, "div", 80);
        \u0275\u0275element(277, "mat-icon", 73);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(278, "div", 74)(279, "div", 45);
        \u0275\u0275text(280, " Savings ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "div", 75);
        \u0275\u0275text(282);
        \u0275\u0275pipe(283, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275element(284, "mat-progress-bar", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(285, "div", 77)(286, "div", 78);
        \u0275\u0275text(287, "12.7%");
        \u0275\u0275elementEnd();
        \u0275\u0275element(288, "mat-icon", 82);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(289, "div", 27)(290, "div", 26)(291, "div", 83);
        \u0275\u0275element(292, "mat-icon", 73);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(293, "div", 74)(294, "div", 45);
        \u0275\u0275text(295, " Bills ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(296, "div", 75);
        \u0275\u0275text(297);
        \u0275\u0275pipe(298, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275element(299, "mat-progress-bar", 81);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(300, "div", 77)(301, "div", 78);
        \u0275\u0275text(302, "105.7%");
        \u0275\u0275elementEnd();
        \u0275\u0275element(303, "mat-icon", 82);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(304, "div", 84);
        \u0275\u0275text(305, " Exceeded your personal limit! Be careful next month. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(306, "div", 85)(307, "button", 86);
        \u0275\u0275text(308, " Download Summary ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        const actionsMenu_r6 = \u0275\u0275reference(25);
        const previousStatementMenu_r7 = \u0275\u0275reference(47);
        const currentStatementMenu_r8 = \u0275\u0275reference(106);
        const accountBalanceMenu_r9 = \u0275\u0275reference(165);
        const budgetMenu_r10 = \u0275\u0275reference(229);
        \u0275\u0275advance(10);
        \u0275\u0275property("svgIcon", "heroicons_solid:document-chart-bar");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_solid:cog-8-tooth");
        \u0275\u0275advance(3);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:arrow-up-tray");
        \u0275\u0275advance(4);
        \u0275\u0275property("matMenuTriggerFor", actionsMenu_r6);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_mini:ellipsis-vertical");
        \u0275\u0275advance(13);
        \u0275\u0275property("svgIcon", "heroicons_outline:check-circle");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" Paid on ", ctx.data.previousStatement.date, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", previousStatementMenu_r7);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_mini:ellipsis-vertical");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:credit-card");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:banknotes");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:receipt-percent");
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:printer");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:envelope");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(80, 65, ctx.data.previousStatement.limit, "USD"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(86, 68, ctx.data.previousStatement.spent, "USD"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(92, 71, ctx.data.previousStatement.minimum, "USD"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_outline:exclamation-circle");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" Must be paid before ", ctx.data.currentStatement.date, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", currentStatementMenu_r8);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_mini:ellipsis-vertical");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:credit-card");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:banknotes");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:receipt-percent");
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_solid:printer");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:envelope");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(139, 74, ctx.data.currentStatement.limit, "USD"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(145, 77, ctx.data.currentStatement.spent, "USD"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(151, 80, ctx.data.currentStatement.minimum, "USD"), " ");
        \u0275\u0275advance(11);
        \u0275\u0275property("matMenuTriggerFor", accountBalanceMenu_r9);
        \u0275\u0275advance(16);
        \u0275\u0275textInterpolate1(" ", ctx.data.accountBalance.growRate, "% ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(183, 83, ctx.data.accountBalance.ami, "USD"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("chart", ctx.accountBalanceOptions.chart)("colors", ctx.accountBalanceOptions.colors)("fill", ctx.accountBalanceOptions.fill)("series", ctx.accountBalanceOptions.series)("stroke", ctx.accountBalanceOptions.stroke)("tooltip", ctx.accountBalanceOptions.tooltip)("xaxis", ctx.accountBalanceOptions.xaxis);
        \u0275\u0275advance(9);
        \u0275\u0275property("dataSource", ctx.recentTransactionsDataSource)("trackBy", ctx.trackByFn);
        \u0275\u0275advance(19);
        \u0275\u0275property("matHeaderRowDef", ctx.recentTransactionsTableColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matRowDefColumns", ctx.recentTransactionsTableColumns);
        \u0275\u0275advance();
        \u0275\u0275property("matFooterRowDef", \u0275\u0275pureFunction0(95, _c1));
        \u0275\u0275advance(9);
        \u0275\u0275property("matMenuTriggerFor", budgetMenu_r10);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_mini:ellipsis-vertical");
        \u0275\u0275advance(12);
        \u0275\u0275property("svgIcon", "heroicons_solid:printer");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:envelope");
        \u0275\u0275advance(18);
        \u0275\u0275property("svgIcon", "heroicons_outline:credit-card");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(268, 86, ctx.data.budget.expenses, "USD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "warn")("mode", "determinate")("value", ctx.data.budget.expenses * 100 / ctx.data.budget.expensesLimit);
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-down");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_outline:banknotes");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(283, 89, ctx.data.budget.savings, "USD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("mode", "determinate")("value", ctx.data.budget.savings * 100 / ctx.data.budget.savingsGoal);
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-up");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_outline:light-bulb");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(298, 92, ctx.data.budget.bills, "USD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("mode", "determinate")("value", ctx.data.budget.bills * 100 / ctx.data.budget.billsLimit);
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-up");
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatDividerModule,
      MatDivider,
      NgApexchartsModule,
      ChartComponent,
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatFooterCellDef,
      MatFooterRowDef,
      MatHeaderCell,
      MatCell,
      MatFooterCell,
      MatHeaderRow,
      MatRow,
      MatFooterRow,
      MatSortModule,
      MatSort,
      MatSortHeader,
      NgClass,
      MatProgressBarModule,
      MatProgressBar,
      CurrencyPipe,
      DatePipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FinanceComponent, { className: "FinanceComponent", filePath: "src/app/modules/admin/dashboards/finance/finance.component.ts", lineNumber: 41 });
})();

// src/app/modules/admin/dashboards/finance/finance.routes.ts
var finance_routes_default = [
  {
    path: "",
    component: FinanceComponent,
    resolve: {
      data: () => inject(FinanceService).getData()
    }
  }
];
export {
  finance_routes_default as default
};
//# sourceMappingURL=chunk-BN3KFKQF.js.map
