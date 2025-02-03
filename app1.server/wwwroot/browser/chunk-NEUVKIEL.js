import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-QXUK6XXN.js";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable,
  MatTableModule
} from "./chunk-54TODX3J.js";
import {
  ChartComponent,
  NgApexchartsModule
} from "./chunk-FGKTZ4ZM.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-4XTS4DFY.js";
import {
  TranslocoDirective,
  TranslocoModule
} from "./chunk-KZOZJU63.js";
import "./chunk-ZTMQTGCF.js";
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
import "./chunk-BNTOCQMY.js";
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
import {
  MatRipple,
  MatRippleModule
} from "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import "./chunk-WH7F4HUX.js";
import {
  Router
} from "./chunk-WTEW5YKI.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  CurrencyPipe,
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
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction5,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/dashboards/project/project.service.ts
var ProjectService = class _ProjectService {
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
    return this._httpClient.get("api/dashboards/project").pipe(tap((response) => {
      this._data.next(response);
    }));
  }
  static {
    this.\u0275fac = function ProjectService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectService, factory: _ProjectService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/dashboards/project/project.component.ts
var _c0 = (a0, a1, a2, a3, a4) => ({ "bg-blue-500": a0, "bg-red-500": a1, "bg-green-500": a2, "bg-amber-500": a3, "bg-indigo-500": a4 });
function ProjectComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 40);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const t_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", t_r2("welcome-back"), ", Brian! ");
  }
}
function ProjectComponent_ng_template_43_For_189_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "mat-icon", 93);
    \u0275\u0275elementStart(2, "div", 94);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scheduleItem_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:clock");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", scheduleItem_r3.time, " ");
  }
}
function ProjectComponent_ng_template_43_For_189_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "mat-icon", 93);
    \u0275\u0275elementStart(2, "div", 94);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scheduleItem_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:map-pin");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", scheduleItem_r3.location, " ");
  }
}
function ProjectComponent_ng_template_43_For_189_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 69)(2, "div", 89);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 90);
    \u0275\u0275template(5, ProjectComponent_ng_template_43_For_189_Conditional_5_Template, 4, 2, "div", 20)(6, ProjectComponent_ng_template_43_For_189_Conditional_6_Template, 4, 2, "div", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 91);
    \u0275\u0275element(8, "mat-icon", 92);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const scheduleItem_r3 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", scheduleItem_r3.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(scheduleItem_r3.time ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(scheduleItem_r3.location ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_mini:chevron-right");
  }
}
function ProjectComponent_ng_template_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "div", 44);
    \u0275\u0275text(4, " Summary ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 45)(6, "button", 46);
    \u0275\u0275element(7, "mat-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-menu", null, 1)(10, "button", 47);
    \u0275\u0275text(11, " Yesterday ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 47);
    \u0275\u0275text(13, " 2 days ago ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 47);
    \u0275\u0275text(15, " 3 days ago ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 48)(17, "div", 49);
    \u0275\u0275text(18, " 21 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 50);
    \u0275\u0275text(20, " Due Tasks ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 51)(22, "div", 52);
    \u0275\u0275text(23, " Completed: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 53);
    \u0275\u0275text(25, " 13 ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "div", 42)(27, "div", 43)(28, "div", 44);
    \u0275\u0275text(29, " Overdue ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 45)(31, "button", 46);
    \u0275\u0275element(32, "mat-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-menu", null, 2)(35, "button", 47);
    \u0275\u0275text(36, " Yesterday ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "button", 47);
    \u0275\u0275text(38, " 2 days ago ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 47);
    \u0275\u0275text(40, " 3 days ago ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 48)(42, "div", 54);
    \u0275\u0275text(43, " 17 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 55);
    \u0275\u0275text(45, " Tasks ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 51)(47, "div", 52);
    \u0275\u0275text(48, " From yesterday: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 53);
    \u0275\u0275text(50, " 9 ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(51, "div", 42)(52, "div", 43)(53, "div", 44);
    \u0275\u0275text(54, " Issues ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 45)(56, "button", 46);
    \u0275\u0275element(57, "mat-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-menu", null, 3)(60, "button", 47);
    \u0275\u0275text(61, " Yesterday ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "button", 47);
    \u0275\u0275text(63, " 2 days ago ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 47);
    \u0275\u0275text(65, " 3 days ago ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(66, "div", 48)(67, "div", 56);
    \u0275\u0275text(68, " 24 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "div", 57);
    \u0275\u0275text(70, " Open ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "div", 51)(72, "div", 52);
    \u0275\u0275text(73, " Closed today: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "div", 53);
    \u0275\u0275text(75, " 19 ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(76, "div", 42)(77, "div", 43)(78, "div", 44);
    \u0275\u0275text(79, " Features ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(80, "div", 45)(81, "button", 46);
    \u0275\u0275element(82, "mat-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "mat-menu", null, 4)(85, "button", 47);
    \u0275\u0275text(86, " Yesterday ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "button", 47);
    \u0275\u0275text(88, " 2 days ago ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(89, "button", 47);
    \u0275\u0275text(90, " 3 days ago ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(91, "div", 48)(92, "div", 58);
    \u0275\u0275text(93, " 38 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 59);
    \u0275\u0275text(95, " Proposals ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(96, "div", 51)(97, "div", 52);
    \u0275\u0275text(98, " Implemented: ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 53);
    \u0275\u0275text(100, " 16 ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(101, "div", 60)(102, "div", 61)(103, "div", 44);
    \u0275\u0275text(104, " Github Issues Summary ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "div", 62)(106, "mat-button-toggle-group", 63, 5)(108, "mat-button-toggle", 64);
    \u0275\u0275text(109, "Last Week");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(110, "mat-button-toggle", 63);
    \u0275\u0275text(111, "This Week");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(112, "div", 65)(113, "div", 66)(114, "div", 67);
    \u0275\u0275text(115, " New vs. Closed ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 66);
    \u0275\u0275element(117, "apx-chart", 68);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(118, "div", 69)(119, "div", 67);
    \u0275\u0275text(120, " Overview ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(121, "div", 70)(122, "div", 71)(123, "div", 72);
    \u0275\u0275text(124);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(125, "div", 73);
    \u0275\u0275text(126, " New Issues ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(127, "div", 74)(128, "div", 72);
    \u0275\u0275text(129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(130, "div", 73);
    \u0275\u0275text(131, " Closed ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(132, "div", 75)(133, "div", 76);
    \u0275\u0275text(134);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(135, "div", 77);
    \u0275\u0275text(136, " Fixed ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(137, "div", 75)(138, "div", 76);
    \u0275\u0275text(139);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(140, "div", 77);
    \u0275\u0275text(141, " Won't Fix ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(142, "div", 75)(143, "div", 76);
    \u0275\u0275text(144);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(145, "div", 77);
    \u0275\u0275text(146, " Re-opened ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(147, "div", 75)(148, "div", 76);
    \u0275\u0275text(149);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(150, "div", 77);
    \u0275\u0275text(151, " Needs Triage ");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementStart(152, "div", 78)(153, "div", 61)(154, "div", 44);
    \u0275\u0275text(155, " Task Distribution ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(156, "div", 62)(157, "mat-button-toggle-group", 63, 6)(159, "mat-button-toggle", 64);
    \u0275\u0275text(160, "Last Week");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(161, "mat-button-toggle", 63);
    \u0275\u0275text(162, "This Week");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(163, "div", 79);
    \u0275\u0275element(164, "apx-chart", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(165, "div", 81)(166, "div", 82)(167, "div", 83);
    \u0275\u0275text(168);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(169, "div", 84);
    \u0275\u0275text(170, " New tasks ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(171, "div", 82)(172, "div", 83);
    \u0275\u0275text(173);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(174, "div", 84);
    \u0275\u0275text(175, " Completed tasks ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(176, "div", 78)(177, "div", 61)(178, "div", 44);
    \u0275\u0275text(179, " Schedule ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(180, "div", 62)(181, "mat-button-toggle-group", 85, 7)(183, "mat-button-toggle", 85);
    \u0275\u0275text(184, "Today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(185, "mat-button-toggle", 86);
    \u0275\u0275text(186, "Tomorrow");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(187, "div", 87);
    \u0275\u0275repeaterCreate(188, ProjectComponent_ng_template_43_For_189_Template, 9, 4, "div", 88, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const summaryMenu_r4 = \u0275\u0275reference(9);
    const overdueMenu_r5 = \u0275\u0275reference(34);
    const issuesMenu_r6 = \u0275\u0275reference(59);
    const featuresMenu_r7 = \u0275\u0275reference(84);
    const githubIssuesWeekSelector_r8 = \u0275\u0275reference(107);
    const taskDistributionWeekSelector_r9 = \u0275\u0275reference(158);
    const scheduleDaySelector_r10 = \u0275\u0275reference(182);
    const ctx_r10 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("matMenuTriggerFor", summaryMenu_r4);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_mini:ellipsis-vertical");
    \u0275\u0275advance(24);
    \u0275\u0275property("matMenuTriggerFor", overdueMenu_r5);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_mini:ellipsis-vertical");
    \u0275\u0275advance(24);
    \u0275\u0275property("matMenuTriggerFor", issuesMenu_r6);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_mini:ellipsis-vertical");
    \u0275\u0275advance(24);
    \u0275\u0275property("matMenuTriggerFor", featuresMenu_r7);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_mini:ellipsis-vertical");
    \u0275\u0275advance(35);
    \u0275\u0275property("chart", ctx_r10.chartGithubIssues.chart)("colors", ctx_r10.chartGithubIssues.colors)("dataLabels", ctx_r10.chartGithubIssues.dataLabels)("grid", ctx_r10.chartGithubIssues.grid)("labels", ctx_r10.chartGithubIssues.labels)("legend", ctx_r10.chartGithubIssues.legend)("plotOptions", ctx_r10.chartGithubIssues.plotOptions)("series", ctx_r10.chartGithubIssues.series[githubIssuesWeekSelector_r8.value])("states", ctx_r10.chartGithubIssues.states)("stroke", ctx_r10.chartGithubIssues.stroke)("tooltip", ctx_r10.chartGithubIssues.tooltip)("xaxis", ctx_r10.chartGithubIssues.xaxis)("yaxis", ctx_r10.chartGithubIssues.yaxis);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", ctx_r10.data.githubIssues.overview[githubIssuesWeekSelector_r8.value]["new-issues"], " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r10.data.githubIssues.overview[githubIssuesWeekSelector_r8.value]["closed-issues"], " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r10.data.githubIssues.overview[githubIssuesWeekSelector_r8.value]["fixed"], " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r10.data.githubIssues.overview[githubIssuesWeekSelector_r8.value]["wont-fix"], " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r10.data.githubIssues.overview[githubIssuesWeekSelector_r8.value]["re-opened"], " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r10.data.githubIssues.overview[githubIssuesWeekSelector_r8.value]["needs-triage"], " ");
    \u0275\u0275advance(15);
    \u0275\u0275property("chart", ctx_r10.chartTaskDistribution.chart)("labels", ctx_r10.chartTaskDistribution.labels)("legend", ctx_r10.chartTaskDistribution.legend)("plotOptions", ctx_r10.chartTaskDistribution.plotOptions)("series", ctx_r10.chartTaskDistribution.series[taskDistributionWeekSelector_r9.value])("states", ctx_r10.chartTaskDistribution.states)("stroke", ctx_r10.chartTaskDistribution.stroke)("theme", ctx_r10.chartTaskDistribution.theme)("tooltip", ctx_r10.chartTaskDistribution.tooltip)("yaxis", ctx_r10.chartTaskDistribution.yaxis);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r10.data.taskDistribution.overview[taskDistributionWeekSelector_r9.value]["new"], " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r10.data.taskDistribution.overview[taskDistributionWeekSelector_r9.value]["completed"], " ");
    \u0275\u0275advance(15);
    \u0275\u0275repeater(ctx_r10.data.schedule[scheduleDaySelector_r10.value]);
  }
}
function ProjectComponent_ng_template_45_th_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 122);
    \u0275\u0275text(1, " Type ");
    \u0275\u0275elementEnd();
  }
}
function ProjectComponent_ng_template_45_td_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 123)(1, "span", 20);
    \u0275\u0275element(2, "span", 124);
    \u0275\u0275elementStart(3, "span", 125);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const budget_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction5(2, _c0, budget_r12.id === 1, budget_r12.id === 2, budget_r12.id === 3, budget_r12.id === 4, budget_r12.id === 5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(budget_r12.type);
  }
}
function ProjectComponent_ng_template_45_th_100_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 122);
    \u0275\u0275text(1, " Total Budget ");
    \u0275\u0275elementEnd();
  }
}
function ProjectComponent_ng_template_45_td_101_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 123)(1, "span", 126);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const budget_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, budget_r13.total, "USD"), " ");
  }
}
function ProjectComponent_ng_template_45_th_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 122);
    \u0275\u0275text(1, " Expenses (USD) ");
    \u0275\u0275elementEnd();
  }
}
function ProjectComponent_ng_template_45_td_104_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 123);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const budget_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, budget_r14.expensesAmount, "USD"), " ");
  }
}
function ProjectComponent_ng_template_45_th_106_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 122);
    \u0275\u0275text(1, " Expenses (%) ");
    \u0275\u0275elementEnd();
  }
}
function ProjectComponent_ng_template_45_td_107_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 123);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const budget_r15 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", budget_r15.expensesPercentage, "% ");
  }
}
function ProjectComponent_ng_template_45_th_109_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 122);
    \u0275\u0275text(1, " Remaining (USD) ");
    \u0275\u0275elementEnd();
  }
}
function ProjectComponent_ng_template_45_td_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 123);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const budget_r16 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, budget_r16.remainingAmount, "USD"), " ");
  }
}
function ProjectComponent_ng_template_45_th_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 122);
    \u0275\u0275text(1, " Remaining (%) ");
    \u0275\u0275elementEnd();
  }
}
function ProjectComponent_ng_template_45_td_113_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 127);
    \u0275\u0275element(1, "span", 130);
    \u0275\u0275elementEnd();
  }
}
function ProjectComponent_ng_template_45_td_113_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 128);
    \u0275\u0275element(1, "span", 131);
    \u0275\u0275elementEnd();
  }
}
function ProjectComponent_ng_template_45_td_113_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 129);
    \u0275\u0275element(1, "span", 132);
    \u0275\u0275elementEnd();
  }
}
function ProjectComponent_ng_template_45_td_113_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 123)(1, "span", 20)(2, "span");
    \u0275\u0275template(3, ProjectComponent_ng_template_45_td_113_Conditional_3_Template, 2, 0, "span", 127)(4, ProjectComponent_ng_template_45_td_113_Conditional_4_Template, 2, 0, "span", 128)(5, ProjectComponent_ng_template_45_td_113_Conditional_5_Template, 2, 0, "span", 129);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 125);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const budget_r17 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(budget_r17.remainingPercentage < 30 ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(budget_r17.remainingPercentage >= 30 && budget_r17.remainingPercentage < 80 ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(budget_r17.remainingPercentage >= 80 ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", budget_r17.remainingPercentage, "%");
  }
}
function ProjectComponent_ng_template_45_tr_114_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 133);
  }
}
function ProjectComponent_ng_template_45_tr_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 134);
  }
}
function ProjectComponent_ng_template_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 95)(1, "div", 96)(2, "div", 44);
    \u0275\u0275text(3, " Budget Distribution ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 66);
    \u0275\u0275element(5, "apx-chart", 97);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 98)(7, "div", 99)(8, "div", 43)(9, "div", 44);
    \u0275\u0275text(10, " Weekly Expenses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 45)(12, "button", 46);
    \u0275\u0275element(13, "mat-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-menu", null, 8)(16, "button", 47);
    \u0275\u0275text(17, " This week ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 47);
    \u0275\u0275text(19, " Last week ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 47);
    \u0275\u0275text(21, " 2 weeks ago ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(22, "div", 100)(23, "div", 69)(24, "div", 101);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 20);
    \u0275\u0275element(28, "mat-icon", 102);
    \u0275\u0275elementStart(29, "div", 103)(30, "span", 104);
    \u0275\u0275text(31, "2%");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, " below projected ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 105);
    \u0275\u0275element(34, "apx-chart", 106);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 99)(36, "div", 43)(37, "div", 44);
    \u0275\u0275text(38, " Monthly Expenses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 45)(40, "button", 46);
    \u0275\u0275element(41, "mat-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-menu", null, 9)(44, "button", 47);
    \u0275\u0275text(45, " This week ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 47);
    \u0275\u0275text(47, " Last week ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "button", 47);
    \u0275\u0275text(49, " 2 weeks ago ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(50, "div", 100)(51, "div", 69)(52, "div", 101);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "div", 20);
    \u0275\u0275element(56, "mat-icon", 107);
    \u0275\u0275elementStart(57, "div", 103)(58, "span", 108);
    \u0275\u0275text(59, "4%");
    \u0275\u0275elementEnd();
    \u0275\u0275text(60, " above projected ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(61, "div", 105);
    \u0275\u0275element(62, "apx-chart", 106);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(63, "div", 99)(64, "div", 43)(65, "div", 44);
    \u0275\u0275text(66, " Yearly Expenses ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 45)(68, "button", 46);
    \u0275\u0275element(69, "mat-icon", 21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "mat-menu", null, 10)(72, "button", 47);
    \u0275\u0275text(73, " This week ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(74, "button", 47);
    \u0275\u0275text(75, " Last week ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "button", 47);
    \u0275\u0275text(77, " 2 weeks ago ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(78, "div", 100)(79, "div", 69)(80, "div", 101);
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 20);
    \u0275\u0275element(84, "mat-icon", 107);
    \u0275\u0275elementStart(85, "div", 103)(86, "span", 108);
    \u0275\u0275text(87, "3%");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88, " above projected ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(89, "div", 105);
    \u0275\u0275element(90, "apx-chart", 106);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(91, "div", 109)(92, "div", 44);
    \u0275\u0275text(93, " Budget Details ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(94, "div", 110)(95, "table", 111);
    \u0275\u0275elementContainerStart(96, 112);
    \u0275\u0275template(97, ProjectComponent_ng_template_45_th_97_Template, 2, 0, "th", 113)(98, ProjectComponent_ng_template_45_td_98_Template, 5, 8, "td", 114);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(99, 115);
    \u0275\u0275template(100, ProjectComponent_ng_template_45_th_100_Template, 2, 0, "th", 113)(101, ProjectComponent_ng_template_45_td_101_Template, 4, 4, "td", 114);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(102, 116);
    \u0275\u0275template(103, ProjectComponent_ng_template_45_th_103_Template, 2, 0, "th", 113)(104, ProjectComponent_ng_template_45_td_104_Template, 3, 4, "td", 114);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(105, 117);
    \u0275\u0275template(106, ProjectComponent_ng_template_45_th_106_Template, 2, 0, "th", 113)(107, ProjectComponent_ng_template_45_td_107_Template, 2, 1, "td", 114);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(108, 118);
    \u0275\u0275template(109, ProjectComponent_ng_template_45_th_109_Template, 2, 0, "th", 113)(110, ProjectComponent_ng_template_45_td_110_Template, 3, 4, "td", 114);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(111, 119);
    \u0275\u0275template(112, ProjectComponent_ng_template_45_th_112_Template, 2, 0, "th", 113)(113, ProjectComponent_ng_template_45_td_113_Template, 8, 4, "td", 114);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(114, ProjectComponent_ng_template_45_tr_114_Template, 1, 0, "tr", 120)(115, ProjectComponent_ng_template_45_tr_115_Template, 1, 0, "tr", 121);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const weeklyExpensesMenu_r18 = \u0275\u0275reference(15);
    const monthlyExpensesMenu_r19 = \u0275\u0275reference(43);
    const yearlyExpensesMenu_r20 = \u0275\u0275reference(71);
    const ctx_r10 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("chart", ctx_r10.chartBudgetDistribution.chart)("colors", ctx_r10.chartBudgetDistribution.colors)("dataLabels", ctx_r10.chartBudgetDistribution.dataLabels)("markers", ctx_r10.chartBudgetDistribution.markers)("plotOptions", ctx_r10.chartBudgetDistribution.plotOptions)("series", ctx_r10.chartBudgetDistribution.series)("stroke", ctx_r10.chartBudgetDistribution.stroke)("tooltip", ctx_r10.chartBudgetDistribution.tooltip)("xaxis", ctx_r10.chartBudgetDistribution.xaxis)("yaxis", ctx_r10.chartBudgetDistribution.yaxis);
    \u0275\u0275advance(7);
    \u0275\u0275property("matMenuTriggerFor", weeklyExpensesMenu_r18);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_mini:ellipsis-vertical");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 46, ctx_r10.data.weeklyExpenses.amount, "USD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:arrow-trending-down");
    \u0275\u0275advance(6);
    \u0275\u0275property("chart", ctx_r10.chartWeeklyExpenses.chart)("colors", ctx_r10.chartWeeklyExpenses.colors)("series", ctx_r10.chartWeeklyExpenses.series)("stroke", ctx_r10.chartWeeklyExpenses.stroke)("tooltip", ctx_r10.chartWeeklyExpenses.tooltip)("xaxis", ctx_r10.chartWeeklyExpenses.xaxis)("yaxis", ctx_r10.chartWeeklyExpenses.yaxis);
    \u0275\u0275advance(6);
    \u0275\u0275property("matMenuTriggerFor", monthlyExpensesMenu_r19);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_mini:ellipsis-vertical");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(54, 49, ctx_r10.data.monthlyExpenses.amount, "USD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:arrow-trending-up");
    \u0275\u0275advance(6);
    \u0275\u0275property("chart", ctx_r10.chartMonthlyExpenses.chart)("colors", ctx_r10.chartMonthlyExpenses.colors)("series", ctx_r10.chartMonthlyExpenses.series)("stroke", ctx_r10.chartMonthlyExpenses.stroke)("tooltip", ctx_r10.chartMonthlyExpenses.tooltip)("xaxis", ctx_r10.chartMonthlyExpenses.xaxis)("yaxis", ctx_r10.chartMonthlyExpenses.yaxis);
    \u0275\u0275advance(6);
    \u0275\u0275property("matMenuTriggerFor", yearlyExpensesMenu_r20);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_mini:ellipsis-vertical");
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(82, 52, ctx_r10.data.yearlyExpenses.amount, "USD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:arrow-trending-up");
    \u0275\u0275advance(6);
    \u0275\u0275property("chart", ctx_r10.chartYearlyExpenses.chart)("colors", ctx_r10.chartYearlyExpenses.colors)("series", ctx_r10.chartYearlyExpenses.series)("stroke", ctx_r10.chartYearlyExpenses.stroke)("tooltip", ctx_r10.chartYearlyExpenses.tooltip)("xaxis", ctx_r10.chartYearlyExpenses.xaxis)("yaxis", ctx_r10.chartYearlyExpenses.yaxis);
    \u0275\u0275advance(5);
    \u0275\u0275property("dataSource", ctx_r10.data.budgetDetails.rows);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r10.data.budgetDetails.columns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r10.data.budgetDetails.columns);
  }
}
function ProjectComponent_ng_template_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 135)(1, "span", 136);
    \u0275\u0275text(2, "Team");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 137);
    \u0275\u0275text(4, "9");
    \u0275\u0275elementEnd()();
  }
}
function ProjectComponent_ng_template_48_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "div", 140)(2, "div", 141);
    \u0275\u0275element(3, "img", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 143);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 144);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 145)(9, "a", 146);
    \u0275\u0275element(10, "mat-icon", 93);
    \u0275\u0275elementStart(11, "span", 25);
    \u0275\u0275text(12, "Email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 146);
    \u0275\u0275element(14, "mat-icon", 93);
    \u0275\u0275elementStart(15, "span", 25);
    \u0275\u0275text(16, "Call");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const member_r21 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275property("src", member_r21.avatar, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", member_r21.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", member_r21.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", "mailto:" + member_r21.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:envelope");
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "tel:" + member_r21.phone, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:phone");
  }
}
function ProjectComponent_ng_template_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138);
    \u0275\u0275repeaterCreate(1, ProjectComponent_ng_template_48_For_2_Template, 17, 7, "div", 139, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r10 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r10.data.teamMembers);
  }
}
var ProjectComponent = class _ProjectComponent {
  /**
   * Constructor
   */
  constructor(_projectService, _router) {
    this._projectService = _projectService;
    this._router = _router;
    this.chartGithubIssues = {};
    this.chartTaskDistribution = {};
    this.chartBudgetDistribution = {};
    this.chartWeeklyExpenses = {};
    this.chartMonthlyExpenses = {};
    this.chartYearlyExpenses = {};
    this.selectedProject = "ACME Corp. Backend App";
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._projectService.data$.pipe(takeUntil(this._unsubscribeAll)).subscribe((data) => {
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
    this.chartGithubIssues = {
      chart: {
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "line",
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      colors: ["#64748B", "#94A3B8"],
      dataLabels: {
        enabled: true,
        enabledOnSeries: [0],
        background: {
          borderWidth: 0
        }
      },
      grid: {
        borderColor: "var(--fuse-border)"
      },
      labels: this.data.githubIssues.labels,
      legend: {
        show: false
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },
      series: this.data.githubIssues.series,
      states: {
        hover: {
          filter: {
            type: "darken"
          }
        }
      },
      stroke: {
        width: [3, 0]
      },
      tooltip: {
        followCursor: true,
        theme: "dark"
      },
      xaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          color: "var(--fuse-border)"
        },
        labels: {
          style: {
            colors: "var(--fuse-text-secondary)"
          }
        },
        tooltip: {
          enabled: false
        }
      },
      yaxis: {
        labels: {
          offsetX: -16,
          style: {
            colors: "var(--fuse-text-secondary)"
          }
        }
      }
    };
    this.chartTaskDistribution = {
      chart: {
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "polarArea",
        toolbar: {
          show: false
        },
        zoom: {
          enabled: false
        }
      },
      labels: this.data.taskDistribution.labels,
      legend: {
        position: "bottom"
      },
      plotOptions: {
        polarArea: {
          spokes: {
            connectorColors: "var(--fuse-border)"
          },
          rings: {
            strokeColor: "var(--fuse-border)"
          }
        }
      },
      series: this.data.taskDistribution.series,
      states: {
        hover: {
          filter: {
            type: "darken"
          }
        }
      },
      stroke: {
        width: 2
      },
      theme: {
        monochrome: {
          enabled: true,
          color: "#93C5FD",
          shadeIntensity: 0.75,
          shadeTo: "dark"
        }
      },
      tooltip: {
        followCursor: true,
        theme: "dark"
      },
      yaxis: {
        labels: {
          style: {
            colors: "var(--fuse-text-secondary)"
          }
        }
      }
    };
    this.chartBudgetDistribution = {
      chart: {
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "radar",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#818CF8"],
      dataLabels: {
        enabled: true,
        formatter: (val) => `${val}%`,
        textAnchor: "start",
        style: {
          fontSize: "13px",
          fontWeight: 500
        },
        background: {
          borderWidth: 0,
          padding: 4
        },
        offsetY: -15
      },
      markers: {
        strokeColors: "#818CF8",
        strokeWidth: 4
      },
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: "var(--fuse-border)",
            connectorColors: "var(--fuse-border)"
          }
        }
      },
      series: this.data.budgetDistribution.series,
      stroke: {
        width: 2
      },
      tooltip: {
        theme: "dark",
        y: {
          formatter: (val) => `${val}%`
        }
      },
      xaxis: {
        labels: {
          show: true,
          style: {
            fontSize: "12px",
            fontWeight: "500"
          }
        },
        categories: this.data.budgetDistribution.categories
      },
      yaxis: {
        max: (max) => parseInt((max + 10).toFixed(0), 10),
        tickAmount: 7
      }
    };
    this.chartWeeklyExpenses = {
      chart: {
        animations: {
          enabled: false
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "line",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#22D3EE"],
      series: this.data.weeklyExpenses.series,
      stroke: {
        curve: "smooth"
      },
      tooltip: {
        theme: "dark"
      },
      xaxis: {
        type: "category",
        categories: this.data.weeklyExpenses.labels
      },
      yaxis: {
        labels: {
          formatter: (val) => `$${val}`
        }
      }
    };
    this.chartMonthlyExpenses = {
      chart: {
        animations: {
          enabled: false
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "line",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#4ADE80"],
      series: this.data.monthlyExpenses.series,
      stroke: {
        curve: "smooth"
      },
      tooltip: {
        theme: "dark"
      },
      xaxis: {
        type: "category",
        categories: this.data.monthlyExpenses.labels
      },
      yaxis: {
        labels: {
          formatter: (val) => `$${val}`
        }
      }
    };
    this.chartYearlyExpenses = {
      chart: {
        animations: {
          enabled: false
        },
        fontFamily: "inherit",
        foreColor: "inherit",
        height: "100%",
        type: "line",
        sparkline: {
          enabled: true
        }
      },
      colors: ["#FB7185"],
      series: this.data.yearlyExpenses.series,
      stroke: {
        curve: "smooth"
      },
      tooltip: {
        theme: "dark"
      },
      xaxis: {
        type: "category",
        categories: this.data.yearlyExpenses.labels
      },
      yaxis: {
        labels: {
          formatter: (val) => `$${val}`
        }
      }
    };
  }
  static {
    this.\u0275fac = function ProjectComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProjectComponent)(\u0275\u0275directiveInject(ProjectService), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProjectComponent, selectors: [["project"]], decls: 49, vars: 10, consts: [["projectsMenu", "matMenu"], ["summaryMenu", "matMenu"], ["overdueMenu", "matMenu"], ["issuesMenu", "matMenu"], ["featuresMenu", "matMenu"], ["githubIssuesWeekSelector", "matButtonToggleGroup"], ["taskDistributionWeekSelector", "matButtonToggleGroup"], ["scheduleDaySelector", "matButtonToggleGroup"], ["weeklyExpensesMenu", "matMenu"], ["monthlyExpensesMenu", "matMenu"], ["yearlyExpensesMenu", "matMenu"], [1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card"], [1, "mx-auto", "flex", "w-full", "max-w-screen-xl", "flex-col", "px-6", "sm:px-8"], [1, "my-8", "flex", "min-w-0", "flex-auto", "flex-col", "sm:my-12", "sm:flex-row", "sm:items-center"], [1, "flex", "min-w-0", "flex-auto", "items-center"], [1, "h-16", "w-16", "flex-0", "overflow-hidden", "rounded-full"], ["src", "images/avatars/brian-hughes.jpg", 1, "h-full", "w-full", "object-cover"], [1, "ml-4", "flex", "min-w-0", "flex-col"], [4, "transloco"], [1, "flex", "items-center"], [1, "icon-size-5", 3, "svgIcon"], [1, "text-secondary", "ml-1.5", "truncate", "leading-6"], [1, "mt-6", "flex", "items-center", "space-x-3", "sm:ml-2", "sm:mt-0"], ["mat-flat-button", "", 1, "bg-accent", 3, "color"], [1, "ml-2"], ["mat-flat-button", "", 3, "color"], ["matRipple", "", 1, "bg-default", "relative", "flex", "cursor-pointer", "self-start", "overflow-hidden", "rounded-t-xl", "border", "border-b-0", "pb-1", "pl-5", "pr-4", "pt-2", 3, "matMenuTriggerFor"], [1, "overflow-hidden"], [1, "truncate", "font-medium", "leading-6"], [1, "flex", "items-center", "justify-center", "pl-2"], [3, "xPosition"], ["mat-menu-item", "", 3, "click"], [1, "-mt-px", "flex-auto", "border-t", "pt-4", "sm:pt-6"], [1, "mx-auto", "w-full", "max-w-screen-xl"], ["mat-stretch-tabs", "false", 1, "sm:px-2", 3, "animationDuration"], ["label", "Home"], ["matTabContent", ""], ["label", "Budget"], ["mat-tab-label", ""], [1, "truncate", "text-2xl", "font-semibold", "leading-7", "tracking-tight", "md:text-5xl", "md:leading-snug"], [1, "grid", "w-full", "min-w-0", "grid-cols-1", "gap-6", "sm:grid-cols-2", "md:grid-cols-4"], [1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "p-6", "shadow"], [1, "flex", "items-start", "justify-between"], [1, "truncate", "text-lg", "font-medium", "leading-6", "tracking-tight"], [1, "-mr-3", "-mt-2", "ml-2"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], [1, "mt-2", "flex", "flex-col", "items-center"], [1, "text-7xl", "font-bold", "leading-none", "tracking-tight", "text-blue-500", "sm:text-8xl"], [1, "text-lg", "font-medium", "text-blue-600", "dark:text-blue-500"], [1, "text-secondary", "mt-5", "flex", "w-full", "items-baseline", "justify-center"], [1, "truncate", "text-md", "font-medium"], [1, "ml-1.5", "text-lg", "font-semibold"], [1, "text-7xl", "font-bold", "leading-none", "tracking-tight", "text-red-500", "sm:text-8xl"], [1, "text-lg", "font-medium", "text-red-600", "dark:text-red-500"], [1, "text-7xl", "font-bold", "leading-none", "tracking-tight", "text-amber-500", "sm:text-8xl"], [1, "text-lg", "font-medium", "text-amber-600", "dark:text-amber-500"], [1, "text-7xl", "font-bold", "leading-none", "tracking-tight", "text-green-500", "sm:text-8xl"], [1, "text-lg", "font-medium", "text-green-600", "dark:text-green-500"], [1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "p-6", "shadow", "sm:col-span-2", "md:col-span-4"], [1, "flex", "flex-col", "items-start", "justify-between", "sm:flex-row"], [1, "mt-3", "sm:ml-2", "sm:mt-0"], ["value", "this-week"], ["value", "last-week"], [1, "mt-8", "grid", "w-full", "grid-flow-row", "grid-cols-1", "gap-6", "sm:mt-4", "lg:grid-cols-2"], [1, "flex", "flex-auto", "flex-col"], [1, "text-secondary", "font-medium"], [1, "h-80", "w-full", "flex-auto", 3, "chart", "colors", "dataLabels", "grid", "labels", "legend", "plotOptions", "series", "states", "stroke", "tooltip", "xaxis", "yaxis"], [1, "flex", "flex-col"], [1, "mt-6", "grid", "flex-auto", "grid-cols-4", "gap-4"], [1, "col-span-2", "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "bg-indigo-50", "px-1", "py-8", "text-indigo-800", "dark:bg-white", "dark:bg-opacity-5", "dark:text-indigo-400"], [1, "text-5xl", "font-semibold", "leading-none", "tracking-tight", "sm:text-7xl"], [1, "mt-1", "text-sm", "font-medium", "sm:text-lg"], [1, "col-span-2", "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "bg-green-50", "px-1", "py-8", "text-green-800", "dark:bg-white", "dark:bg-opacity-5", "dark:text-green-500"], [1, "text-secondary", "col-span-2", "flex", "flex-col", "items-center", "justify-center", "rounded-2xl", "bg-gray-100", "px-1", "py-8", "dark:bg-white", "dark:bg-opacity-5", "sm:col-span-1"], [1, "text-5xl", "font-semibold", "leading-none", "tracking-tight"], [1, "mt-1", "text-center", "text-sm", "font-medium"], [1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "p-6", "shadow", "sm:col-span-2", "md:col-span-4", "lg:col-span-2"], [1, "mt-6", "flex", "flex-auto", "flex-col"], [1, "h-80", "w-full", "flex-auto", 3, "chart", "labels", "legend", "plotOptions", "series", "states", "stroke", "theme", "tooltip", "yaxis"], [1, "-m-6", "mt-4", "grid", "grid-cols-2", "divide-x", "border-t", "bg-gray-50", "dark:bg-transparent"], [1, "flex", "flex-col", "items-center", "justify-center", "p-6", "sm:p-8"], [1, "text-5xl", "font-semibold", "leading-none", "tracking-tighter"], [1, "text-secondary", "mt-1", "text-center"], ["value", "today"], ["value", "tomorrow"], [1, "mt-2", "flex", "flex-col", "divide-y"], [1, "flex", "flex-row", "items-center", "justify-between", "px-0.5", "py-4"], [1, "font-medium"], [1, "-ml-0.5", "mt-2", "flex", "flex-col", "space-y-1", "sm:mt-1", "sm:flex-row", "sm:items-center", "sm:space-x-3", "sm:space-y-0"], ["mat-icon-button", ""], [3, "svgIcon"], [1, "text-hint", "icon-size-5", 3, "svgIcon"], [1, "text-secondary", "ml-1.5", "text-md"], [1, "grid", "w-full", "min-w-0", "grid-cols-1", "gap-6", "sm:grid-cols-6"], [1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "p-6", "shadow", "sm:col-span-3", "lg:col-span-4"], [1, "h-80", "w-full", "flex-auto", 3, "chart", "colors", "dataLabels", "markers", "plotOptions", "series", "stroke", "tooltip", "xaxis", "yaxis"], [1, "grid", "grid-cols-1", "gap-y-6", "sm:col-span-3", "lg:col-span-2"], [1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "p-6", "shadow", "sm:col-span-2"], [1, "mt-1", "flex", "items-center"], [1, "text-3xl", "font-semibold", "leading-tight", "tracking-tight"], [1, "mr-1", "text-green-500", "icon-size-5", 3, "svgIcon"], [1, "text-secondary", "whitespace-nowrap", "text-sm", "font-medium", "leading-none"], [1, "text-green-500"], [1, "ml-8", "flex", "flex-auto", "flex-col"], [1, "h-16", "w-full", "flex-auto", 3, "chart", "colors", "series", "stroke", "tooltip", "xaxis", "yaxis"], [1, "mr-1", "text-red-500", "icon-size-5", 3, "svgIcon"], [1, "text-red-500"], [1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-hidden", "rounded-2xl", "p-6", "shadow", "sm:col-span-6"], [1, "mt-2", "flex", "flex-auto", "flex-col", "overflow-x-auto"], ["mat-table", "", 1, "min-w-240", "overflow-y-visible", 3, "dataSource"], ["matColumnDef", "type", "sticky", ""], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "total"], ["matColumnDef", "expensesAmount"], ["matColumnDef", "expensesPercentage"], ["matColumnDef", "remainingAmount"], ["matColumnDef", "remainingPercentage"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "h-2", "w-2", "rounded-full", 3, "ngClass"], [1, "ml-3", "leading-4"], [1, "text-right", "font-medium"], [1, "flex", "h-4", "w-1", "items-end", "overflow-hidden", "rounded", "bg-red-200"], [1, "flex", "h-4", "w-1", "items-end", "overflow-hidden", "rounded", "bg-orange-200"], [1, "flex", "h-4", "w-1", "items-end", "overflow-hidden", "rounded", "bg-green-100"], [1, "flex", "h-1/3", "w-full", "bg-red-600"], [1, "flex", "h-2/4", "w-full", "bg-orange-400"], [1, "flex", "h-full", "w-full", "bg-green-400"], ["mat-header-row", ""], ["mat-row", ""], [1, "inline-flex", "items-center", "space-x-2"], [1, ""], [1, "rounded-full", "bg-primary-100", "px-2", "py-1", "text-sm", "text-on-primary-100"], [1, "grid", "w-full", "min-w-0", "grid-cols-1", "gap-6", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4"], [1, "bg-card", "flex", "flex-auto", "flex-col", "items-center", "overflow-hidden", "rounded-2xl", "shadow"], [1, "flex", "w-full", "flex-auto", "flex-col", "p-8", "text-center"], [1, "mx-auto", "h-32", "w-32", "overflow-hidden", "rounded-full"], [1, "h-full", "w-full", "object-cover", 3, "src"], [1, "mt-6", "font-medium"], [1, "text-secondary"], [1, "flex", "w-full", "items-center", "divide-x", "border-t"], [1, "flex", "flex-auto", "items-center", "justify-center", "py-4", "hover:bg-hover", 3, "href"]], template: function ProjectComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "div", 13)(3, "div", 14)(4, "div", 15)(5, "div", 16);
        \u0275\u0275element(6, "img", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 18);
        \u0275\u0275template(8, ProjectComponent_ng_container_8_Template, 3, 1, "ng-container", 19);
        \u0275\u0275elementStart(9, "div", 20);
        \u0275\u0275element(10, "mat-icon", 21);
        \u0275\u0275elementStart(11, "div", 22);
        \u0275\u0275text(12, " You have 2 new messages and 15 new tasks ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(13, "div", 23)(14, "button", 24);
        \u0275\u0275element(15, "mat-icon", 21);
        \u0275\u0275elementStart(16, "span", 25);
        \u0275\u0275text(17, "Messages");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "button", 26);
        \u0275\u0275element(19, "mat-icon", 21);
        \u0275\u0275elementStart(20, "span", 25);
        \u0275\u0275text(21, "Settings");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(22, "div", 27)(23, "div", 20)(24, "div", 28)(25, "div", 29);
        \u0275\u0275text(26);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 30);
        \u0275\u0275element(28, "mat-icon", 21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "mat-menu", 31, 0)(31, "button", 32);
        \u0275\u0275listener("click", function ProjectComponent_Template_button_click_31_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectedProject = "ACME Corp. Backend App");
        });
        \u0275\u0275text(32, " ACME Corp. Backend App ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 32);
        \u0275\u0275listener("click", function ProjectComponent_Template_button_click_33_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectedProject = "ACME Corp. Frontend App");
        });
        \u0275\u0275text(34, " ACME Corp. Frontend App ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "button", 32);
        \u0275\u0275listener("click", function ProjectComponent_Template_button_click_35_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectedProject = "Creapond");
        });
        \u0275\u0275text(36, " Creapond ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "button", 32);
        \u0275\u0275listener("click", function ProjectComponent_Template_button_click_37_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.selectedProject = "Withinpixels");
        });
        \u0275\u0275text(38, " Withinpixels ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(39, "div", 33)(40, "div", 34)(41, "mat-tab-group", 35)(42, "mat-tab", 36);
        \u0275\u0275template(43, ProjectComponent_ng_template_43_Template, 190, 39, "ng-template", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "mat-tab", 38);
        \u0275\u0275template(45, ProjectComponent_ng_template_45_Template, 116, 55, "ng-template", 37);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "mat-tab");
        \u0275\u0275template(47, ProjectComponent_ng_template_47_Template, 5, 0, "ng-template", 39)(48, ProjectComponent_ng_template_48_Template, 3, 0, "ng-template", 37);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const projectsMenu_r22 = \u0275\u0275reference(30);
        \u0275\u0275advance(10);
        \u0275\u0275property("svgIcon", "heroicons_solid:bell");
        \u0275\u0275advance(4);
        \u0275\u0275property("color", "accent");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:envelope");
        \u0275\u0275advance(3);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:cog-8-tooth");
        \u0275\u0275advance(3);
        \u0275\u0275property("matMenuTriggerFor", projectsMenu_r22);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.selectedProject, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_mini:chevron-down");
        \u0275\u0275advance();
        \u0275\u0275property("xPosition", "before");
        \u0275\u0275advance(12);
        \u0275\u0275property("animationDuration", "0");
      }
    }, dependencies: [
      TranslocoModule,
      TranslocoDirective,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatTabsModule,
      MatTabContent,
      MatTabLabel,
      MatTab,
      MatTabGroup,
      MatButtonToggleModule,
      MatButtonToggleGroup,
      MatButtonToggle,
      NgApexchartsModule,
      ChartComponent,
      MatTableModule,
      MatTable,
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatHeaderCell,
      MatCell,
      MatHeaderRow,
      MatRow,
      NgClass,
      CurrencyPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProjectComponent, { className: "ProjectComponent", filePath: "src/app/modules/admin/dashboards/project/project.component.ts", lineNumber: 41 });
})();

// src/app/modules/admin/dashboards/project/project.routes.ts
var project_routes_default = [
  {
    path: "",
    component: ProjectComponent,
    resolve: {
      data: () => inject(ProjectService).getData()
    }
  }
];
export {
  project_routes_default as default
};
//# sourceMappingURL=chunk-NEUVKIEL.js.map
