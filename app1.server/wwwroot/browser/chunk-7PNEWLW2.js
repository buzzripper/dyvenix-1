import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-QXUK6XXN.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-FGKTZ4ZM.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-B6LWBRMU.js";
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
import "./chunk-J5XV3GIF.js";
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
  Router
} from "./chunk-WTEW5YKI.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  DecimalPipe
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/dashboards/analytics/analytics.service.ts
var AnalyticsService = class _AnalyticsService {
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
    return this._httpClient.get("api/dashboards/analytics").pipe(tap((response) => {
      this._data.next(response);
    }));
  }
  static {
    this.\u0275fac = function AnalyticsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnalyticsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AnalyticsService, factory: _AnalyticsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/dashboards/analytics/analytics.component.ts
function AnalyticsComponent_For_224_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 48);
    \u0275\u0275element(2, "div", 69);
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 71);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 72);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dataset_r1 = ctx.$implicit;
    const \u0275$index_369_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r2.chartNewVsReturning.colors[\u0275$index_369_r2]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.data.newVsReturning.labels[\u0275$index_369_r2], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, ctx_r2.data.newVsReturning.uniqueVisitors * dataset_r1 / 100, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", dataset_r1, "% ");
  }
}
function AnalyticsComponent_For_246_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 48);
    \u0275\u0275element(2, "div", 69);
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 71);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 72);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dataset_r4 = ctx.$implicit;
    const \u0275$index_419_r5 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r2.chartGender.colors[\u0275$index_419_r5]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.data.gender.labels[\u0275$index_419_r5], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, ctx_r2.data.gender.uniqueVisitors * dataset_r4 / 100, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", dataset_r4, "% ");
  }
}
function AnalyticsComponent_For_268_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 48);
    \u0275\u0275element(2, "div", 69);
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 71);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 72);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dataset_r6 = ctx.$implicit;
    const \u0275$index_469_r7 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r2.chartAge.colors[\u0275$index_469_r7]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.data.age.labels[\u0275$index_469_r7], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, ctx_r2.data.age.uniqueVisitors * dataset_r6 / 100, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", dataset_r6, "% ");
  }
}
function AnalyticsComponent_For_290_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 48);
    \u0275\u0275element(2, "div", 69);
    \u0275\u0275elementStart(3, "div", 70);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 71);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 72);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const dataset_r8 = ctx.$implicit;
    const \u0275$index_519_r9 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r2.chartLanguage.colors[\u0275$index_519_r9]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.data.language.labels[\u0275$index_519_r9], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 5, ctx_r2.data.language.uniqueVisitors * dataset_r8 / 100, "1.0-0"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", dataset_r8, "% ");
  }
}
var AnalyticsComponent = class _AnalyticsComponent {
  /**
   * Constructor
   */
  constructor(_analyticsService, _router) {
    this._analyticsService = _analyticsService;
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
    this._analyticsService.data$.pipe(takeUntil(this._unsubscribeAll)).subscribe((data) => {
      this.data = data;
      this._prepareChartData();
    });
    window["Apex"] = {
      chart: {
        events: {
          mounted: (chart, options) => {
            this._fixSvgFill(chart.el);
          },
          updated: (chart, options) => {
            this._fixSvgFill(chart.el);
          }
        }
      }
    };
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
   * Fix the SVG fill references. This fix must be applied to all ApexCharts
   * charts in order to fix 'black color on gradient fills on certain browsers'
   * issue caused by the '<base>' tag.
   *
   * Fix based on https://gist.github.com/Kamshak/c84cdc175209d1a30f711abd6a81d472
   *
   * @param element
   * @private
   */
  _fixSvgFill(element) {
    const currentURL = this._router.url;
    Array.from(element.querySelectorAll("*[fill]")).filter((el) => el.getAttribute("fill").indexOf("url(") !== -1).forEach((el) => {
      const attrVal = el.getAttribute("fill");
      el.setAttribute("fill", `url(${currentURL}${attrVal.slice(attrVal.indexOf("#"))}`);
    });
  }
  /**
   * Prepare the chart data from the data
   *
   * @private
   */
  _prepareChartData() {
    this.chartVisitors = {
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
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      colors: ["#818CF8"],
      dataLabels: {
        enabled: false
      },
      fill: {
        colors: ["#312E81"]
      },
      grid: {
        show: true,
        borderColor: "#334155",
        padding: {
          top: 10,
          bottom: -40,
          left: 0,
          right: 0
        },
        position: "back",
        xaxis: {
          lines: {
            show: true
          }
        }
      },
      series: this.data.visitors.series,
      stroke: {
        width: 2
      },
      tooltip: {
        followCursor: true,
        theme: "dark",
        x: {
          format: "MMM dd, yyyy"
        },
        y: {
          formatter: (value) => `${value}`
        }
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        crosshairs: {
          stroke: {
            color: "#475569",
            dashArray: 0,
            width: 2
          }
        },
        labels: {
          offsetY: -20,
          style: {
            colors: "#CBD5E1"
          }
        },
        tickAmount: 20,
        tooltip: {
          enabled: false
        },
        type: "datetime"
      },
      yaxis: {
        axisTicks: {
          show: false
        },
        axisBorder: {
          show: false
        },
        min: (min) => min - 750,
        max: (max) => max + 250,
        tickAmount: 5,
        show: false
      }
    };
    this.chartConversions = {
      chart: {
        animations: {
          enabled: false
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "area",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#38BDF8"],
      fill: {
        colors: ["#38BDF8"],
        opacity: 0.5
      },
      series: this.data.conversions.series,
      stroke: {
        curve: "smooth"
      },
      tooltip: {
        followCursor: true,
        theme: "dark"
      },
      xaxis: {
        type: "category",
        categories: this.data.conversions.labels
      },
      yaxis: {
        labels: {
          formatter: (val) => val.toString()
        }
      }
    };
    this.chartImpressions = {
      chart: {
        animations: {
          enabled: false
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "area",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#34D399"],
      fill: {
        colors: ["#34D399"],
        opacity: 0.5
      },
      series: this.data.impressions.series,
      stroke: {
        curve: "smooth"
      },
      tooltip: {
        followCursor: true,
        theme: "dark"
      },
      xaxis: {
        type: "category",
        categories: this.data.impressions.labels
      },
      yaxis: {
        labels: {
          formatter: (val) => val.toString()
        }
      }
    };
    this.chartVisits = {
      chart: {
        animations: {
          enabled: false
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "area",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#FB7185"],
      fill: {
        colors: ["#FB7185"],
        opacity: 0.5
      },
      series: this.data.visits.series,
      stroke: {
        curve: "smooth"
      },
      tooltip: {
        followCursor: true,
        theme: "dark"
      },
      xaxis: {
        type: "category",
        categories: this.data.visits.labels
      },
      yaxis: {
        labels: {
          formatter: (val) => val.toString()
        }
      }
    };
    this.chartVisitorsVsPageViews = {
      chart: {
        animations: {
          enabled: false
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "area",
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      colors: ["#64748B", "#94A3B8"],
      dataLabels: {
        enabled: false
      },
      fill: {
        colors: ["#64748B", "#94A3B8"],
        opacity: 0.5
      },
      grid: {
        show: false,
        padding: {
          bottom: -40,
          left: 0,
          right: 0
        }
      },
      legend: {
        show: false
      },
      series: this.data.visitorsVsPageViews.series,
      stroke: {
        curve: "smooth",
        width: 2
      },
      tooltip: {
        followCursor: true,
        theme: "dark",
        x: {
          format: "MMM dd, yyyy"
        }
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        labels: {
          offsetY: -20,
          rotate: 0,
          style: {
            colors: "var(--fuse-text-secondary)"
          }
        },
        tickAmount: 3,
        tooltip: {
          enabled: false
        },
        type: "datetime"
      },
      yaxis: {
        labels: {
          style: {
            colors: "var(--fuse-text-secondary)"
          }
        },
        max: (max) => max + 250,
        min: (min) => min - 250,
        show: false,
        tickAmount: 5
      }
    };
    this.chartNewVsReturning = {
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false
          }
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "donut",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#3182CE", "#63B3ED"],
      labels: this.data.newVsReturning.labels,
      plotOptions: {
        pie: {
          customScale: 0.9,
          expandOnClick: false,
          donut: {
            size: "70%"
          }
        }
      },
      series: this.data.newVsReturning.series,
      states: {
        hover: {
          filter: {
            type: "none"
          }
        },
        active: {
          filter: {
            type: "none"
          }
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: "dark",
        custom: ({ seriesIndex, w }) => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                                    <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                                                    <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
                                                </div>`
      }
    };
    this.chartGender = {
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false
          }
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "donut",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#319795", "#4FD1C5"],
      labels: this.data.gender.labels,
      plotOptions: {
        pie: {
          customScale: 0.9,
          expandOnClick: false,
          donut: {
            size: "70%"
          }
        }
      },
      series: this.data.gender.series,
      states: {
        hover: {
          filter: {
            type: "none"
          }
        },
        active: {
          filter: {
            type: "none"
          }
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: "dark",
        custom: ({ seriesIndex, w }) => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
                                                     <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                                     <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                                                     <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
                                                 </div>`
      }
    };
    this.chartAge = {
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false
          }
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "donut",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#DD6B20", "#F6AD55"],
      labels: this.data.age.labels,
      plotOptions: {
        pie: {
          customScale: 0.9,
          expandOnClick: false,
          donut: {
            size: "70%"
          }
        }
      },
      series: this.data.age.series,
      states: {
        hover: {
          filter: {
            type: "none"
          }
        },
        active: {
          filter: {
            type: "none"
          }
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: "dark",
        custom: ({ seriesIndex, w }) => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                                    <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                                                    <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
                                                </div>`
      }
    };
    this.chartLanguage = {
      chart: {
        animations: {
          speed: 400,
          animateGradually: {
            enabled: false
          }
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "donut",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#805AD5", "#B794F4"],
      labels: this.data.language.labels,
      plotOptions: {
        pie: {
          customScale: 0.9,
          expandOnClick: false,
          donut: {
            size: "70%"
          }
        }
      },
      series: this.data.language.series,
      states: {
        hover: {
          filter: {
            type: "none"
          }
        },
        active: {
          filter: {
            type: "none"
          }
        }
      },
      tooltip: {
        enabled: true,
        fillSeriesColor: false,
        theme: "dark",
        custom: ({ seriesIndex, w }) => `<div class="flex items-center h-8 min-h-8 max-h-8 px-3">
                                                    <div class="w-3 h-3 rounded-full" style="background-color: ${w.config.colors[seriesIndex]};"></div>
                                                    <div class="ml-2 text-md leading-none">${w.config.labels[seriesIndex]}:</div>
                                                    <div class="ml-2 text-md font-bold leading-none">${w.config.series[seriesIndex]}%</div>
                                                </div>`
      }
    };
  }
  static {
    this.\u0275fac = function AnalyticsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnalyticsComponent)(\u0275\u0275directiveInject(AnalyticsService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnalyticsComponent, selectors: [["analytics"]], decls: 291, vars: 117, consts: [["actionsMenu", "matMenu"], ["visitorsYearSelector", "matButtonToggleGroup"], ["visitorsMenu", "matMenu"], ["conversionMenu", "matMenu"], ["impressionsMenu", "matMenu"], [1, "flex", "w-full", "flex-auto", "flex-col"], [1, "mx-auto", "flex", "w-full", "max-w-screen-xl", "flex-wrap", "p-6", "md:p-8"], [1, "flex", "w-full", "items-center", "justify-between"], [1, "text-3xl", "font-semibold", "leading-8", "tracking-tight"], [1, "text-secondary", "font-medium", "tracking-tight"], [1, "ml-6", "flex", "items-center"], ["mat-stroked-button", "", 1, "hidden", "sm:inline-flex"], [1, "icon-size-5", 3, "svgIcon"], [1, "ml-2"], ["mat-flat-button", "", 1, "ml-3", "hidden", "sm:inline-flex", 3, "color"], [1, "sm:hidden"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [3, "svgIcon"], ["mat-menu-item", ""], [1, "mt-8", "grid", "w-full", "grid-cols-1", "gap-8", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "bg-card", "dark", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "shadow", "sm:col-span-2", "lg:col-span-3"], [1, "ml-10", "mr-6", "mt-10", "flex", "items-center", "justify-between", "sm:mr-10"], [1, "flex", "flex-col"], [1, "mr-4", "text-2xl", "font-semibold", "leading-7", "tracking-tight", "md:text-3xl"], [1, "text-secondary", "font-medium"], ["value", "this-year", 1, "hidden", "space-x-1", "border-none", "sm:inline-flex"], ["value", "last-year", 1, "overflow-hidden", "rounded-full", "border-none", "px-1.5", "font-medium"], ["value", "this-year", 1, "overflow-hidden", "rounded-full", "border-none", "px-1.5", "font-medium"], [1, "flex", "h-80", "flex-auto", "flex-col"], [1, "h-full", "w-full", "flex-auto", 3, "chart", "colors", "dataLabels", "fill", "grid", "series", "stroke", "tooltip", "xaxis", "yaxis"], [1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "shadow", "sm:col-span-2", "lg:col-span-1"], [1, "m-6", "mb-0", "flex", "items-start", "justify-between"], [1, "truncate", "text-lg", "font-medium", "leading-6", "tracking-tight"], ["mat-button", "", 1, "bg-hover", "h-6", "min-h-6", "rounded-full", "px-2", 3, "matMenuTriggerFor"], [1, "text-secondary", "text-sm", "font-medium"], [1, "mx-6", "mt-3", "flex", "flex-col", "lg:flex-row", "lg:items-center"], [1, "text-7xl", "font-bold", "leading-tight", "tracking-tighter"], [1, "flex", "lg:ml-3", "lg:flex-col"], [1, "text-red-500", "icon-size-5", 3, "svgIcon"], [1, "text-secondary", "ml-1", "flex", "items-center", "whitespace-nowrap", "text-md", "leading-none", "lg:ml-0", "lg:mt-0.5"], [1, "font-medium", "text-red-500"], [1, "ml-1"], [1, "flex", "h-20", "flex-auto", "flex-col"], [1, "h-full", "w-full", "flex-auto", 3, "chart", "colors", "series", "stroke", "tooltip", "xaxis", "yaxis"], [1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "shadow"], [1, "bg-card", "mt-8", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "shadow"], [1, "mx-6", "mt-6", "flex", "items-start"], [1, "grid", "grid-cols-1", "gap-8", "sm:grid-cols-3", "sm:gap-12"], [1, "flex", "items-center"], [1, "text-secondary", "font-medium", "leading-5"], [1, "text-hint", "ml-1.5", "icon-size-4", 3, "svgIcon", "matTooltip"], [1, "mt-2", "flex", "items-start"], [1, "text-4xl", "font-bold", "leading-none", "tracking-tight"], [1, "ml-2", "flex", "items-center"], [1, "text-green-500", "icon-size-5", 3, "svgIcon"], [1, "ml-1", "text-md", "font-medium", "text-green-500"], [1, "ml-1", "text-md", "font-medium", "text-red-500"], [1, "mt-3", "flex", "h-80", "flex-auto", "flex-col"], [1, "h-full", "w-full", "flex-auto", 3, "chart", "colors", "dataLabels", "grid", "legend", "series", "stroke", "tooltip", "xaxis", "yaxis"], [1, "mt-12", "w-full"], [1, "text-2xl", "font-semibold", "leading-6", "tracking-tight"], [1, "mt-6", "grid", "w-full", "grid-cols-1", "gap-8", "sm:grid-cols-2", "md:mt-8", "lg:grid-cols-4"], [1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "p-6", "shadow"], [1, "flex", "items-start", "justify-between"], [1, "mt-6", "flex", "h-44", "flex-auto", "flex-col"], [1, "flex", "h-full", "w-full", "flex-auto", "items-center", "justify-center", 3, "chart", "colors", "labels", "plotOptions", "series", "states", "tooltip"], [1, "mt-8"], [1, "-my-3", "divide-y"], [1, "grid", "grid-cols-3", "py-3"], [1, "h-2", "w-2", "flex-0", "rounded-full"], [1, "ml-3", "truncate"], [1, "text-right", "font-medium"], [1, "text-secondary", "text-right"]], template: function AnalyticsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 5)(1, "div", 6)(2, "div", 7)(3, "div")(4, "div", 8);
        \u0275\u0275text(5, " Analytics dashboard ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 9);
        \u0275\u0275text(7, " Monitor metrics, check reports and review performance ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 10)(9, "button", 11);
        \u0275\u0275element(10, "mat-icon", 12);
        \u0275\u0275elementStart(11, "span", 13);
        \u0275\u0275text(12, "Settings");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "button", 14);
        \u0275\u0275element(14, "mat-icon", 12);
        \u0275\u0275elementStart(15, "span", 13);
        \u0275\u0275text(16, "Export");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 15)(18, "button", 16);
        \u0275\u0275element(19, "mat-icon", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-menu", null, 0)(22, "button", 18);
        \u0275\u0275text(23, "Export");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "button", 18);
        \u0275\u0275text(25, "Settings");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(26, "div", 19)(27, "div", 20)(28, "div", 21)(29, "div", 22)(30, "div", 23);
        \u0275\u0275text(31, " Visitors Overview ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 24);
        \u0275\u0275text(33, " Number of unique visitors ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(34, "div", 13)(35, "mat-button-toggle-group", 25, 1)(37, "mat-button-toggle", 26);
        \u0275\u0275text(38, "Last Year ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "mat-button-toggle", 27);
        \u0275\u0275text(40, "This Year ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 15)(42, "button", 16);
        \u0275\u0275element(43, "mat-icon", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-menu", null, 2)(46, "button", 18);
        \u0275\u0275text(47, "This Year");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "button", 18);
        \u0275\u0275text(49, "Last Year");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(50, "div", 28);
        \u0275\u0275element(51, "apx-chart", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(52, "div", 30)(53, "div", 31)(54, "div", 32);
        \u0275\u0275text(55, " Conversions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "div", 13)(57, "button", 33)(58, "span", 34);
        \u0275\u0275text(59, "30 days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "mat-menu", null, 3)(62, "button", 18);
        \u0275\u0275text(63, "30 days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "button", 18);
        \u0275\u0275text(65, "3 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(66, "button", 18);
        \u0275\u0275text(67, "9 months");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(68, "div", 35)(69, "div", 36);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(72, "div", 37);
        \u0275\u0275element(73, "mat-icon", 38);
        \u0275\u0275elementStart(74, "div", 39)(75, "span", 40);
        \u0275\u0275text(76, "2%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(77, "span", 41);
        \u0275\u0275text(78, "below target");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(79, "div", 42);
        \u0275\u0275element(80, "apx-chart", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(81, "div", 44)(82, "div", 31)(83, "div", 32);
        \u0275\u0275text(84, " Impressions ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "div", 13)(86, "button", 33)(87, "span", 34);
        \u0275\u0275text(88, "30 days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(89, "mat-menu", null, 4)(91, "button", 18);
        \u0275\u0275text(92, "30 days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(93, "button", 18);
        \u0275\u0275text(94, "3 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(95, "button", 18);
        \u0275\u0275text(96, "9 months");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(97, "div", 35)(98, "div", 36);
        \u0275\u0275text(99);
        \u0275\u0275pipe(100, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "div", 37);
        \u0275\u0275element(102, "mat-icon", 38);
        \u0275\u0275elementStart(103, "div", 39)(104, "span", 40);
        \u0275\u0275text(105, "4%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(106, "span", 41);
        \u0275\u0275text(107, "below target");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(108, "div", 42);
        \u0275\u0275element(109, "apx-chart", 43);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(110, "div", 44)(111, "div", 31)(112, "div", 32);
        \u0275\u0275text(113, " Visits ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(114, "div", 13)(115, "button", 33)(116, "span", 34);
        \u0275\u0275text(117, "30 days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(118, "mat-menu", null, 4)(120, "button", 18);
        \u0275\u0275text(121, "30 days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(122, "button", 18);
        \u0275\u0275text(123, "3 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(124, "button", 18);
        \u0275\u0275text(125, "9 months");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(126, "div", 35)(127, "div", 36);
        \u0275\u0275text(128);
        \u0275\u0275pipe(129, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(130, "div", 37);
        \u0275\u0275element(131, "mat-icon", 38);
        \u0275\u0275elementStart(132, "div", 39)(133, "span", 40);
        \u0275\u0275text(134, "4%");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(135, "span", 41);
        \u0275\u0275text(136, "below target");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(137, "div", 42);
        \u0275\u0275element(138, "apx-chart", 43);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(139, "div", 45)(140, "div", 31)(141, "div", 32);
        \u0275\u0275text(142, " Visitors vs. Page Views ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(143, "div", 13)(144, "button", 33)(145, "span", 34);
        \u0275\u0275text(146, "30 days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(147, "mat-menu", null, 3)(149, "button", 18);
        \u0275\u0275text(150, "30 days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(151, "button", 18);
        \u0275\u0275text(152, "3 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(153, "button", 18);
        \u0275\u0275text(154, "9 months");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(155, "div", 46)(156, "div", 47)(157, "div", 22)(158, "div", 48)(159, "div", 49);
        \u0275\u0275text(160, " Overall Score ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(161, "mat-icon", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(162, "div", 51)(163, "div", 52);
        \u0275\u0275text(164);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "div", 53);
        \u0275\u0275element(166, "mat-icon", 54);
        \u0275\u0275elementStart(167, "div", 55);
        \u0275\u0275text(168, " 42.9% ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(169, "div", 22)(170, "div", 48)(171, "div", 49);
        \u0275\u0275text(172, " Average Ratio ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(173, "mat-icon", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "div", 51)(175, "div", 52);
        \u0275\u0275text(176);
        \u0275\u0275pipe(177, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "div", 53);
        \u0275\u0275element(179, "mat-icon", 38);
        \u0275\u0275elementStart(180, "div", 56);
        \u0275\u0275text(181, " 13.1% ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(182, "div", 22)(183, "div", 48)(184, "div", 49);
        \u0275\u0275text(185, " Predicted Ratio ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(186, "mat-icon", 50);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(187, "div", 51)(188, "div", 52);
        \u0275\u0275text(189);
        \u0275\u0275pipe(190, "number");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(191, "div", 53);
        \u0275\u0275element(192, "mat-icon", 54);
        \u0275\u0275elementStart(193, "div", 55);
        \u0275\u0275text(194, " 22.2% ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(195, "div", 57);
        \u0275\u0275element(196, "apx-chart", 58);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(197, "div", 59)(198, "div", 60);
        \u0275\u0275text(199, " Your Audience ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(200, "div", 9);
        \u0275\u0275text(201, " Demographic properties of your users ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(202, "div", 61)(203, "div", 62)(204, "div", 63)(205, "div", 32);
        \u0275\u0275text(206, " New vs. Returning ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(207, "div", 13)(208, "button", 33)(209, "span", 34);
        \u0275\u0275text(210, "30 days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(211, "mat-menu", null, 3)(213, "button", 18);
        \u0275\u0275text(214, "30 days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(215, "button", 18);
        \u0275\u0275text(216, "3 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(217, "button", 18);
        \u0275\u0275text(218, "9 months");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(219, "div", 64);
        \u0275\u0275element(220, "apx-chart", 65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(221, "div", 66)(222, "div", 67);
        \u0275\u0275repeaterCreate(223, AnalyticsComponent_For_224_Template, 10, 8, "div", 68, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(225, "div", 62)(226, "div", 63)(227, "div", 32);
        \u0275\u0275text(228, " Gender ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(229, "div", 13)(230, "button", 33)(231, "span", 34);
        \u0275\u0275text(232, "30 days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(233, "mat-menu", null, 3)(235, "button", 18);
        \u0275\u0275text(236, "30 days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(237, "button", 18);
        \u0275\u0275text(238, "3 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(239, "button", 18);
        \u0275\u0275text(240, "9 months");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(241, "div", 64);
        \u0275\u0275element(242, "apx-chart", 65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(243, "div", 66)(244, "div", 67);
        \u0275\u0275repeaterCreate(245, AnalyticsComponent_For_246_Template, 10, 8, "div", 68, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(247, "div", 62)(248, "div", 63)(249, "div", 32);
        \u0275\u0275text(250, " Age ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(251, "div", 13)(252, "button", 33)(253, "span", 34);
        \u0275\u0275text(254, "30 days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(255, "mat-menu", null, 3)(257, "button", 18);
        \u0275\u0275text(258, "30 days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(259, "button", 18);
        \u0275\u0275text(260, "3 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(261, "button", 18);
        \u0275\u0275text(262, "9 months");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(263, "div", 64);
        \u0275\u0275element(264, "apx-chart", 65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(265, "div", 66)(266, "div", 67);
        \u0275\u0275repeaterCreate(267, AnalyticsComponent_For_268_Template, 10, 8, "div", 68, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(269, "div", 62)(270, "div", 63)(271, "div", 32);
        \u0275\u0275text(272, " Language ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(273, "div", 13)(274, "button", 33)(275, "span", 34);
        \u0275\u0275text(276, "30 days");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(277, "mat-menu", null, 3)(279, "button", 18);
        \u0275\u0275text(280, "30 days");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(281, "button", 18);
        \u0275\u0275text(282, "3 months");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(283, "button", 18);
        \u0275\u0275text(284, "9 months");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(285, "div", 64);
        \u0275\u0275element(286, "apx-chart", 65);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(287, "div", 66)(288, "div", 67);
        \u0275\u0275repeaterCreate(289, AnalyticsComponent_For_290_Template, 10, 8, "div", 68, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        const actionsMenu_r10 = \u0275\u0275reference(21);
        const visitorsYearSelector_r11 = \u0275\u0275reference(36);
        const visitorsMenu_r12 = \u0275\u0275reference(45);
        const conversionMenu_r13 = \u0275\u0275reference(61);
        const impressionsMenu_r14 = \u0275\u0275reference(90);
        \u0275\u0275advance(10);
        \u0275\u0275property("svgIcon", "heroicons_solid:cog-8-tooth");
        \u0275\u0275advance(3);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:arrow-up-tray");
        \u0275\u0275advance(4);
        \u0275\u0275property("matMenuTriggerFor", actionsMenu_r10);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:ellipsis-vertical");
        \u0275\u0275advance(23);
        \u0275\u0275property("matMenuTriggerFor", visitorsMenu_r12);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:ellipsis-vertical");
        \u0275\u0275advance(8);
        \u0275\u0275property("chart", ctx.chartVisitors.chart)("colors", ctx.chartVisitors.colors)("dataLabels", ctx.chartVisitors.dataLabels)("fill", ctx.chartVisitors.fill)("grid", ctx.chartVisitors.grid)("series", ctx.chartVisitors.series[visitorsYearSelector_r11.value])("stroke", ctx.chartVisitors.stroke)("tooltip", ctx.chartVisitors.tooltip)("xaxis", ctx.chartVisitors.xaxis)("yaxis", ctx.chartVisitors.yaxis);
        \u0275\u0275advance(6);
        \u0275\u0275property("matMenuTriggerFor", conversionMenu_r13);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(71, 102, ctx.data.conversions.amount, "1.0-0"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_mini:arrow-trending-down");
        \u0275\u0275advance(7);
        \u0275\u0275property("chart", ctx.chartConversions.chart)("colors", ctx.chartConversions.colors)("series", ctx.chartConversions.series)("stroke", ctx.chartConversions.stroke)("tooltip", ctx.chartConversions.tooltip)("xaxis", ctx.chartConversions.xaxis)("yaxis", ctx.chartConversions.yaxis);
        \u0275\u0275advance(6);
        \u0275\u0275property("matMenuTriggerFor", impressionsMenu_r14);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(100, 105, ctx.data.impressions.amount, "1.0-0"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_mini:arrow-trending-down");
        \u0275\u0275advance(7);
        \u0275\u0275property("chart", ctx.chartImpressions.chart)("colors", ctx.chartImpressions.colors)("series", ctx.chartImpressions.series)("stroke", ctx.chartImpressions.stroke)("tooltip", ctx.chartImpressions.tooltip)("xaxis", ctx.chartImpressions.xaxis)("yaxis", ctx.chartImpressions.yaxis);
        \u0275\u0275advance(6);
        \u0275\u0275property("matMenuTriggerFor", impressionsMenu_r14);
        \u0275\u0275advance(13);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(129, 108, ctx.data.visits.amount, "1.0-0"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_mini:arrow-trending-down");
        \u0275\u0275advance(7);
        \u0275\u0275property("chart", ctx.chartVisits.chart)("colors", ctx.chartVisits.colors)("series", ctx.chartVisits.series)("stroke", ctx.chartVisits.stroke)("tooltip", ctx.chartVisits.tooltip)("xaxis", ctx.chartVisits.xaxis)("yaxis", ctx.chartVisits.yaxis);
        \u0275\u0275advance(6);
        \u0275\u0275property("matMenuTriggerFor", conversionMenu_r13);
        \u0275\u0275advance(17);
        \u0275\u0275property("svgIcon", "heroicons_mini:information-circle")("matTooltip", "Score is calculated by using the historical ratio between Page Views and Visitors. Best score is 1000, worst score is 0.");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.data.visitorsVsPageViews.overallScore, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:arrow-up-circle");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_mini:information-circle")("matTooltip", "Average Ratio is the average ratio between Page Views and Visitors");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(177, 111, ctx.data.visitorsVsPageViews.averageRatio, "1.0-0"), "% ");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:arrow-down-circle");
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_mini:information-circle")("matTooltip", "Predicted Ratio is calculated by using historical ratio, current trends and your goal targets.");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(190, 114, ctx.data.visitorsVsPageViews.predictedRatio, "1.0-0"), "% ");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:arrow-up-circle");
        \u0275\u0275advance(4);
        \u0275\u0275property("chart", ctx.chartVisitorsVsPageViews.chart)("colors", ctx.chartVisitorsVsPageViews.colors)("dataLabels", ctx.chartVisitorsVsPageViews.dataLabels)("grid", ctx.chartVisitorsVsPageViews.grid)("legend", ctx.chartVisitorsVsPageViews.legend)("series", ctx.chartVisitorsVsPageViews.series)("stroke", ctx.chartVisitorsVsPageViews.stroke)("tooltip", ctx.chartVisitorsVsPageViews.tooltip)("xaxis", ctx.chartVisitorsVsPageViews.xaxis)("yaxis", ctx.chartVisitorsVsPageViews.yaxis);
        \u0275\u0275advance(12);
        \u0275\u0275property("matMenuTriggerFor", conversionMenu_r13);
        \u0275\u0275advance(12);
        \u0275\u0275property("chart", ctx.chartNewVsReturning.chart)("colors", ctx.chartNewVsReturning.colors)("labels", ctx.chartNewVsReturning.labels)("plotOptions", ctx.chartNewVsReturning.plotOptions)("series", ctx.chartNewVsReturning.series)("states", ctx.chartNewVsReturning.states)("tooltip", ctx.chartNewVsReturning.tooltip);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.data.newVsReturning.series);
        \u0275\u0275advance(7);
        \u0275\u0275property("matMenuTriggerFor", conversionMenu_r13);
        \u0275\u0275advance(12);
        \u0275\u0275property("chart", ctx.chartGender.chart)("colors", ctx.chartGender.colors)("labels", ctx.chartGender.labels)("plotOptions", ctx.chartGender.plotOptions)("series", ctx.chartGender.series)("states", ctx.chartGender.states)("tooltip", ctx.chartGender.tooltip);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.data.gender.series);
        \u0275\u0275advance(7);
        \u0275\u0275property("matMenuTriggerFor", conversionMenu_r13);
        \u0275\u0275advance(12);
        \u0275\u0275property("chart", ctx.chartAge.chart)("colors", ctx.chartAge.colors)("labels", ctx.chartAge.labels)("plotOptions", ctx.chartAge.plotOptions)("series", ctx.chartAge.series)("states", ctx.chartAge.states)("tooltip", ctx.chartAge.tooltip);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.data.age.series);
        \u0275\u0275advance(7);
        \u0275\u0275property("matMenuTriggerFor", conversionMenu_r13);
        \u0275\u0275advance(12);
        \u0275\u0275property("chart", ctx.chartLanguage.chart)("colors", ctx.chartLanguage.colors)("labels", ctx.chartLanguage.labels)("plotOptions", ctx.chartLanguage.plotOptions)("series", ctx.chartLanguage.series)("states", ctx.chartLanguage.states)("tooltip", ctx.chartLanguage.tooltip);
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.data.language.series);
      }
    }, dependencies: [MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatButtonToggleModule, MatButtonToggleGroup, MatButtonToggle, NgApexchartsModule, ChartComponent, MatTooltipModule, MatTooltip, DecimalPipe], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnalyticsComponent, { className: "AnalyticsComponent", filePath: "src/app/modules/admin/dashboards/analytics/analytics.component.ts", lineNumber: 34 });
})();

// src/app/modules/admin/dashboards/analytics/analytics.routes.ts
var analytics_routes_default = [
  {
    path: "",
    component: AnalyticsComponent,
    resolve: {
      data: () => inject(AnalyticsService).getData()
    }
  }
];
export {
  analytics_routes_default as default
};
//# sourceMappingURL=chunk-7PNEWLW2.js.map
