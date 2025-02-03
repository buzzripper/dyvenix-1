import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-FGKTZ4ZM.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-5KZHZBIW.js";
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule
} from "./chunk-74A4XWO4.js";
import {
  DateTime
} from "./chunk-BY5HPQZY.js";
import {
  FuseMediaWatcherService
} from "./chunk-NDM3MP5U.js";
import "./chunk-YHH4B3V4.js";
import "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-GIY2YYWB.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-2W4O77WS.js";
import "./chunk-BNTOCQMY.js";
import {
  FormsModule,
  NgControlStatusGroup,
  NgForm,
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
  MatOptionModule
} from "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import "./chunk-WH7F4HUX.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  CurrencyPipe,
  DecimalPipe,
  NgClass,
  UpperCasePipe
} from "./chunk-M6AYR6A2.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Subject,
  inject,
  takeUntil,
  tap,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/dashboards/crypto/crypto.service.ts
var CryptoService = class _CryptoService {
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
    return this._httpClient.get("api/dashboards/crypto").pipe(tap((response) => {
      this._data.next(response);
    }));
  }
  static {
    this.\u0275fac = function CryptoService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CryptoService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CryptoService, factory: _CryptoService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/dashboards/crypto/crypto.component.ts
var _c0 = ["btcChartComponent"];
var _c1 = (a0, a1) => ({ "text-green-500": a0, "text-red-500": a1 });
var _c2 = () => ["#48BB78"];
var _c3 = () => ["#F56565"];
function CryptoComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 46)(2, "div", 47)(3, "div", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 49);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 50)(8, "div", 51);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "mat-icon", 52);
    \u0275\u0275elementStart(12, "div", 53);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "apx-chart", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" (", item_r2.iso, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(10, 13, item_r2.amount, "USD", "symbol", "1.2-4"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(18, _c1, item_r2.trend.dir === "up", item_r2.trend.dir === "down"))("svgIcon", item_r2.trend.dir === "up" ? "heroicons_mini:arrow-long-up" : "heroicons_mini:arrow-long-down");
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(21, _c1, item_r2.trend.dir === "up", item_r2.trend.dir === "down"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.trend.amount, "% ");
    \u0275\u0275advance();
    \u0275\u0275property("chart", ctx_r2.watchlistChartOptions.chart)("colors", item_r2.trend.dir === "up" ? \u0275\u0275pureFunction0(24, _c2) : \u0275\u0275pureFunction0(25, _c3))("series", item_r2.series)("stroke", ctx_r2.watchlistChartOptions.stroke)("tooltip", ctx_r2.watchlistChartOptions.tooltip)("xaxis", ctx_r2.watchlistChartOptions.xaxis);
  }
}
function CryptoComponent_Conditional_52_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, " $ ");
    \u0275\u0275elementEnd();
  }
}
function CryptoComponent_Conditional_52_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "It will cost:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buyAmount_r4 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    const walletSelector_r5 = \u0275\u0275reference(25);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(4, 1, buyAmount_r4.value * ctx_r2.data.prices[walletSelector_r5.value], "USD", "symbol", "1.2-4"), " ");
  }
}
function CryptoComponent_Conditional_52_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "You will receive:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const buyAmount_r4 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    const walletSelector_r5 = \u0275\u0275reference(25);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(4, 2, buyAmount_r4.value / ctx_r2.data.prices[walletSelector_r5.value], "1.2-6"), " ", \u0275\u0275pipeBind1(5, 5, walletSelector_r5.value), " ");
  }
}
function CryptoComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "mat-form-field", 18)(2, "mat-label");
    \u0275\u0275text(3, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 55, 4);
    \u0275\u0275elementStart(6, "mat-select", 56, 5)(8, "mat-option", 17);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 17);
    \u0275\u0275text(12, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, CryptoComponent_Conditional_52_Conditional_13_Template, 2, 0, "span", 57);
    \u0275\u0275elementStart(14, "mat-hint", 19);
    \u0275\u0275template(15, CryptoComponent_Conditional_52_Conditional_15_Template, 5, 6)(16, CryptoComponent_Conditional_52_Conditional_16_Template, 6, 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 58);
    \u0275\u0275text(18, " BUY ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const buyType_r6 = \u0275\u0275reference(7);
    \u0275\u0275nextContext();
    const walletSelector_r5 = \u0275\u0275reference(25);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", "coin");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "coin");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, walletSelector_r5.value));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "usd");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(buyType_r6.value === "usd" ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(buyType_r6.value === "coin" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(buyType_r6.value === "usd" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary");
  }
}
function CryptoComponent_Conditional_53_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, " $ ");
    \u0275\u0275elementEnd();
  }
}
function CryptoComponent_Conditional_53_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "You will receive:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const sellAmount_r7 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    const walletSelector_r5 = \u0275\u0275reference(25);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(4, 1, sellAmount_r7.value * ctx_r2.data.prices[walletSelector_r5.value], "USD", "symbol", "1.2-4"), " ");
  }
}
function CryptoComponent_Conditional_53_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1, "You will sell:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const sellAmount_r7 = \u0275\u0275reference(5);
    const ctx_r2 = \u0275\u0275nextContext();
    const walletSelector_r5 = \u0275\u0275reference(25);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(4, 2, sellAmount_r7.value / ctx_r2.data.prices[walletSelector_r5.value], "1.2-6"), " ", \u0275\u0275pipeBind1(5, 5, walletSelector_r5.value), " ");
  }
}
function CryptoComponent_Conditional_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 25)(1, "mat-form-field", 18)(2, "mat-label");
    \u0275\u0275text(3, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 55, 6);
    \u0275\u0275elementStart(6, "mat-select", 56, 7)(8, "mat-option", 17);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "uppercase");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-option", 17);
    \u0275\u0275text(12, "USD");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, CryptoComponent_Conditional_53_Conditional_13_Template, 2, 0, "span", 57);
    \u0275\u0275elementStart(14, "mat-hint", 19);
    \u0275\u0275template(15, CryptoComponent_Conditional_53_Conditional_15_Template, 5, 6)(16, CryptoComponent_Conditional_53_Conditional_16_Template, 6, 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 58);
    \u0275\u0275text(18, " SELL ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const sellType_r8 = \u0275\u0275reference(7);
    \u0275\u0275nextContext();
    const walletSelector_r5 = \u0275\u0275reference(25);
    \u0275\u0275advance(6);
    \u0275\u0275property("value", "coin");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "coin");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, walletSelector_r5.value));
    \u0275\u0275advance(2);
    \u0275\u0275property("value", "usd");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(sellType_r8.value === "usd" ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(sellType_r8.value === "coin" ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(sellType_r8.value === "usd" ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary");
  }
}
var CryptoComponent = class _CryptoComponent {
  /**
   * Constructor
   */
  constructor(_cryptoService, _changeDetectorRef, _fuseMediaWatcherService) {
    this._cryptoService = _cryptoService;
    this._changeDetectorRef = _changeDetectorRef;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this.btcOptions = {};
    this.drawerMode = "side";
    this.drawerOpened = true;
    this.watchlistChartOptions = {};
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._fuseMediaWatcherService.onMediaChange$.pipe(takeUntil(this._unsubscribeAll)).subscribe(({ matchingAliases }) => {
      if (matchingAliases.includes("lg")) {
        this.drawerMode = "side";
        this.drawerOpened = true;
      } else {
        this.drawerMode = "over";
        this.drawerOpened = false;
      }
      this._changeDetectorRef.markForCheck();
    });
    this._cryptoService.data$.pipe(takeUntil(this._unsubscribeAll)).subscribe((data) => {
      this.data = data;
      this._prepareChartData();
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
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Prepare the chart data from the data
   *
   * @private
   */
  _prepareChartData() {
    this.btcOptions = {
      chart: {
        animations: {
          enabled: false
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        width: "100%",
        height: "100%",
        type: "line",
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      colors: ["#5A67D8"],
      dataLabels: {
        enabled: false
      },
      grid: {
        borderColor: "var(--fuse-border)",
        position: "back",
        show: true,
        strokeDashArray: 6,
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: true
          }
        }
      },
      legend: {
        show: false
      },
      series: this.data.btc.price.series,
      stroke: {
        width: 2,
        curve: "straight"
      },
      tooltip: {
        shared: true,
        theme: "dark",
        y: {
          formatter: (value) => "$" + value.toFixed(2)
        }
      },
      xaxis: {
        type: "numeric",
        crosshairs: {
          show: true,
          position: "back",
          fill: {
            type: "color",
            color: "var(--fuse-border)"
          },
          width: 3,
          stroke: {
            dashArray: 0,
            width: 0
          },
          opacity: 0.9
        },
        tickAmount: 8,
        axisTicks: {
          show: true,
          color: "var(--fuse-border)"
        },
        axisBorder: {
          show: false
        },
        tooltip: {
          enabled: false
        },
        labels: {
          show: true,
          trim: false,
          rotate: 0,
          minHeight: 40,
          hideOverlappingLabels: true,
          formatter: (value) => DateTime.now().minus({ minutes: Math.abs(parseInt(value, 10)) }).toFormat("HH:mm"),
          style: {
            colors: "currentColor"
          }
        }
      },
      yaxis: {
        axisTicks: {
          show: true,
          color: "var(--fuse-border)"
        },
        axisBorder: {
          show: false
        },
        forceNiceScale: true,
        labels: {
          minWidth: 40,
          formatter: (value) => "$" + value.toFixed(0),
          style: {
            colors: "currentColor"
          }
        }
      }
    };
    this.watchlistChartOptions = {
      chart: {
        animations: {
          enabled: false
        },
        width: "100%",
        height: "100%",
        type: "line",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#A0AEC0"],
      stroke: {
        width: 2,
        curve: "smooth"
      },
      tooltip: {
        enabled: false
      },
      xaxis: {
        type: "category"
      }
    };
  }
  static {
    this.\u0275fac = function CryptoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CryptoComponent)(\u0275\u0275directiveInject(CryptoService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FuseMediaWatcherService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CryptoComponent, selectors: [["crypto"]], viewQuery: function CryptoComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.btcChartComponent = _t.first);
      }
    }, decls: 102, vars: 70, consts: [["matDrawer", ""], ["buySellSelect", "matSelect"], ["walletSelector", "matSelect"], ["btcChartComponent", ""], ["buyAmount", ""], ["buyType", "matSelect"], ["sellAmount", ""], ["sellType", "matSelect"], [1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-hidden"], [1, "h-full", "flex-auto"], [1, "w-80", 3, "autoFocus", "mode", "opened"], [1, "flex", "h-full", "flex-auto", "flex-col", "dark:bg-default"], [1, "flex", "flex-0", "flex-col"], [1, "flex", "flex-0", "items-center", "border-b", "p-5"], [1, "flex", "flex-auto", "shrink-0", "flex-col", "bg-gray-50", "pt-6", "dark:bg-transparent"], [1, "flex", "flex-col", "px-6", "pb-2"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], [3, "value"], [1, "w-full"], [1, "flex", "items-center"], [1, "text-hint", "mx-1"], [1, "flex", "items-center", "font-mono"], [1, "ml-1"], [1, "mr-1"], [1, "text-normal", "font-mono", "font-medium"], [1, "flex", "flex-col", "px-6"], [1, "flex", "flex-col"], [1, "bg-card", "flex", "min-h-full", "flex-auto", "flex-col", "dark:bg-default"], [1, "flex", "flex-wrap", "items-center", "border-b", "py-3", "pl-4", "pr-6", "md:pl-6"], ["mat-icon-button", "", 1, "mr-6", "lg:hidden", 3, "click"], [3, "svgIcon"], [1, "my-3", "mr-6", "flex", "flex-auto", "flex-col"], [1, "text-secondary", "mr-2", "text-2xl", "font-medium"], [1, "text-hint", "text-lg", "font-medium", "tracking-wider"], [1, "mt-1", "flex", "items-end"], [1, "mr-2", "font-mono", "text-3xl", "leading-none", "tracking-tight"], [1, "mb-px", "mr-0.5", "text-green-500", "icon-size-5", 3, "ngClass", "svgIcon"], [1, "mb-px", "font-mono", "text-lg", "font-medium", "leading-none", 3, "ngClass"], [1, "my-3", "hidden", "items-center", "sm:flex"], [1, "rounded-l-xl", "border", "border-r-0", "p-4", "leading-none"], [1, "text-secondary", "text-sm", "font-medium"], [1, "mt-2", "font-mono", "text-xl"], [1, "border", "border-r-0", "p-4", "leading-none"], [1, "rounded-r-xl", "border", "p-4", "leading-none"], [1, "relative", "flex", "flex-auto", "bg-gray-50", "dark:bg-transparent"], [1, "relative", "h-160", "w-full", "overflow-hidden", "md:absolute", "md:inset-0", "md:h-auto", 3, "chart", "colors", "dataLabels", "grid", "legend", "series", "stroke", "tooltip", "xaxis", "yaxis"], [1, "flex", "flex-auto", "flex-col", "pr-6"], [1, "flex", "items-baseline"], [1, "text-secondary", "mr-1", "text-md", "font-medium"], [1, "text-hint", "text-sm", "font-medium", "uppercase", "tracking-wider"], [1, "mt-2", "flex", "items-end"], [1, "min-w-20", "font-mono", "text-2xl", "leading-none", "tracking-tighter"], [1, "mx-0.5", "mb-px", "text-green-500", "icon-size-3.5", 3, "ngClass", "svgIcon"], [1, "mb-px", "font-mono", "text-sm", "font-medium", "leading-none", 3, "ngClass"], [1, "flex", "h-10", "flex-auto", "items-center", "overflow-hidden", 3, "chart", "colors", "series", "stroke", "tooltip", "xaxis"], ["matInput", "", "autocomplete", "off"], ["matSuffix", "", 3, "value"], ["matPrefix", ""], ["mat-flat-button", "", 1, "mb-8", "mt-4", 3, "color"]], template: function CryptoComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 8)(1, "mat-drawer-container", 9)(2, "mat-drawer", 10, 0)(4, "div", 11)(5, "div", 12);
        \u0275\u0275repeaterCreate(6, CryptoComponent_For_7_Template, 15, 26, "div", 13, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "mat-form-field")(11, "mat-label");
        \u0275\u0275text(12, "Action");
        \u0275\u0275elementEnd();
        \u0275\u0275element(13, "mat-icon", 16);
        \u0275\u0275elementStart(14, "mat-select", 17, 1)(16, "mat-option", 17);
        \u0275\u0275text(17, "Buy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "mat-option", 17);
        \u0275\u0275text(19, "Sell");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(20, "div", 15)(21, "mat-form-field", 18)(22, "mat-label");
        \u0275\u0275text(23, "Wallet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "mat-select", 17, 2)(26, "mat-select-trigger")(27, "span", 19)(28, "span");
        \u0275\u0275text(29);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "span", 20);
        \u0275\u0275text(31, "-");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "span", 21)(33, "span");
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "span", 22);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "uppercase");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(38, "mat-option", 17);
        \u0275\u0275text(39, "Bitcoin");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "mat-option", 17);
        \u0275\u0275text(41, "Ethereum");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "mat-option", 17);
        \u0275\u0275text(43, "Bitcoin Cash");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-option", 17);
        \u0275\u0275text(45, "XRP");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "mat-hint", 19)(47, "span", 23);
        \u0275\u0275text(48, "USD:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "span", 24);
        \u0275\u0275text(50);
        \u0275\u0275pipe(51, "currency");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(52, CryptoComponent_Conditional_52_Template, 19, 10, "form", 25)(53, CryptoComponent_Conditional_53_Template, 19, 10, "form", 25);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(54, "mat-drawer-content", 26)(55, "div", 27)(56, "div", 28)(57, "button", 29);
        \u0275\u0275listener("click", function CryptoComponent_Template_button_click_57_listener() {
          \u0275\u0275restoreView(_r1);
          const matDrawer_r9 = \u0275\u0275reference(3);
          return \u0275\u0275resetView(matDrawer_r9.toggle());
        });
        \u0275\u0275element(58, "mat-icon", 30);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "div", 31)(60, "div", 19)(61, "div", 32);
        \u0275\u0275text(62, " Bitcoin ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 33);
        \u0275\u0275text(64, " (BTC) ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(65, "div", 34)(66, "div", 35);
        \u0275\u0275text(67);
        \u0275\u0275pipe(68, "currency");
        \u0275\u0275elementEnd();
        \u0275\u0275element(69, "mat-icon", 36);
        \u0275\u0275elementStart(70, "div", 37);
        \u0275\u0275text(71);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 38)(73, "div", 39)(74, "div", 40);
        \u0275\u0275text(75, " Market Cap ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 41);
        \u0275\u0275text(77);
        \u0275\u0275pipe(78, "number");
        \u0275\u0275pipe(79, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(80, "div", 42)(81, "div", 40);
        \u0275\u0275text(82, " Volume ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(83, "div", 41);
        \u0275\u0275text(84);
        \u0275\u0275pipe(85, "number");
        \u0275\u0275pipe(86, "currency");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(87, "div", 42)(88, "div", 40);
        \u0275\u0275text(89, " Supply ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 41);
        \u0275\u0275text(91);
        \u0275\u0275pipe(92, "number");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "div", 43)(94, "div", 40);
        \u0275\u0275text(95, " All Time High ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 41);
        \u0275\u0275text(97);
        \u0275\u0275pipe(98, "currency");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(99, "div", 44);
        \u0275\u0275element(100, "apx-chart", 45, 3);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const buySellSelect_r10 = \u0275\u0275reference(15);
        const walletSelector_r5 = \u0275\u0275reference(25);
        \u0275\u0275advance(2);
        \u0275\u0275property("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.data.watchlist);
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", buySellSelect_r10.value === "buy" ? "heroicons_solid:arrow-down-tray" : "heroicons_solid:arrow-up-tray");
        \u0275\u0275advance();
        \u0275\u0275property("value", "buy");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "buy");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "sell");
        \u0275\u0275advance(6);
        \u0275\u0275property("value", "btc");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(walletSelector_r5.triggerValue);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.data.wallets[walletSelector_r5.value]);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 38, walletSelector_r5.value));
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "btc");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "eth");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "bch");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "xrp");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(51, 40, ctx.data.wallets[walletSelector_r5.value] * ctx.data.prices[walletSelector_r5.value], "USD"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(buySellSelect_r10.value === "buy" ? 52 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(buySellSelect_r10.value === "sell" ? 53 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind4(68, 43, ctx.data.btc.amount, "USD", "symbol", "1.2-2"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(64, _c1, ctx.data.btc.trend.dir === "up", ctx.data.btc.trend.dir === "down"))("svgIcon", ctx.data.btc.trend.dir === "up" ? "heroicons_mini:arrow-long-up" : "heroicons_mini:arrow-long-down");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(67, _c1, ctx.data.btc.trend.dir === "up", ctx.data.btc.trend.dir === "down"));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.data.btc.trend.amount, "% ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(79, 51, \u0275\u0275pipeBind2(78, 48, ctx.data.btc.marketCap / 1e9, "1.0-2")), "B ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(86, 56, \u0275\u0275pipeBind2(85, 53, ctx.data.btc.volume / 1e9, "1.0-2")), "B ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(92, 58, ctx.data.btc.supply / 1e6, "1.0-2"), "M ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(98, 61, ctx.data.btc.allTimeHigh, "USD"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("chart", ctx.btcOptions.chart)("colors", ctx.btcOptions.colors)("dataLabels", ctx.btcOptions.dataLabels)("grid", ctx.btcOptions.grid)("legend", ctx.btcOptions.legend)("series", ctx.btcOptions.series)("stroke", ctx.btcOptions.stroke)("tooltip", ctx.btcOptions.tooltip)("xaxis", ctx.btcOptions.xaxis)("yaxis", ctx.btcOptions.yaxis);
      }
    }, dependencies: [
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      MatIconModule,
      MatIcon,
      NgClass,
      NgApexchartsModule,
      ChartComponent,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatHint,
      MatPrefix,
      MatSuffix,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      MatOptionModule,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatusGroup,
      NgForm,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatIconButton,
      UpperCasePipe,
      DecimalPipe,
      CurrencyPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CryptoComponent, { className: "CryptoComponent", filePath: "src/app/modules/admin/dashboards/crypto/crypto.component.ts", lineNumber: 51 });
})();

// src/app/modules/admin/dashboards/crypto/crypto.routes.ts
var crypto_routes_default = [
  {
    path: "",
    component: CryptoComponent,
    resolve: {
      data: () => inject(CryptoService).getData()
    }
  }
];
export {
  crypto_routes_default as default
};
//# sourceMappingURL=chunk-2Z5JF26N.js.map
