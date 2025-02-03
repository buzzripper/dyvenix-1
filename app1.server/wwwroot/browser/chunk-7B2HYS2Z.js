import {
  CdkDrag,
  CdkDragHandle,
  CdkDragPreview,
  CdkDropList,
  moveItemInArray
} from "./chunk-IKSJJL6J.js";
import {
  MatDatepicker,
  MatDatepickerActions,
  MatDatepickerApply,
  MatDatepickerCancel,
  MatDatepickerInput,
  MatDatepickerModule
} from "./chunk-UPDLTK7N.js";
import {
  FuseFindByKeyPipe
} from "./chunk-G4MGEPS3.js";
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule
} from "./chunk-74A4XWO4.js";
import {
  FuseNavigationService
} from "./chunk-MACOU75K.js";
import {
  FuseConfirmationService
} from "./chunk-7Z6ZIB4I.js";
import "./chunk-M6DXA547.js";
import {
  MatDivider,
  MatDividerModule
} from "./chunk-TARAMFMK.js";
import {
  DateTime
} from "./chunk-BY5HPQZY.js";
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
import {
  FuseMediaWatcherService
} from "./chunk-NDM3MP5U.js";
import {
  assign_default
} from "./chunk-YHH4B3V4.js";
import {
  Overlay
} from "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import {
  TemplatePortal
} from "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-LCOBNKPY.js";
import "./chunk-LWCQAMDH.js";
import {
  CdkTextareaAutosize,
  MatInput,
  MatInputModule,
  TextFieldModule
} from "./chunk-GIY2YYWB.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatSuffix
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
  MatButtonModule,
  MatIconAnchor,
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
import "./chunk-HKG3E5RP.js";
import "./chunk-WH7F4HUX.js";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterLink,
  RouterOutlet
} from "./chunk-WTEW5YKI.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  DOCUMENT,
  DatePipe,
  NgClass,
  TitleCasePipe
} from "./chunk-M6AYR6A2.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Renderer2,
  Subject,
  ViewContainerRef,
  catchError,
  debounceTime,
  filter,
  fromEvent,
  inject,
  map,
  of,
  switchMap,
  take,
  takeUntil,
  tap,
  throwError,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵcomponentInstance,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/apps/tasks/tasks.service.ts
var TasksService = class _TasksService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._tags = new BehaviorSubject(null);
    this._task = new BehaviorSubject(null);
    this._tasks = new BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for tags
   */
  get tags$() {
    return this._tags.asObservable();
  }
  /**
   * Getter for task
   */
  get task$() {
    return this._task.asObservable();
  }
  /**
   * Getter for tasks
   */
  get tasks$() {
    return this._tasks.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get tags
   */
  getTags() {
    return this._httpClient.get("api/apps/tasks/tags").pipe(tap((response) => {
      this._tags.next(response);
    }));
  }
  /**
   * Crate tag
   *
   * @param tag
   */
  createTag(tag) {
    return this.tags$.pipe(take(1), switchMap((tags) => this._httpClient.post("api/apps/tasks/tag", { tag }).pipe(map((newTag) => {
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
    return this.tags$.pipe(take(1), switchMap((tags) => this._httpClient.patch("api/apps/tasks/tag", {
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
    return this.tags$.pipe(take(1), switchMap((tags) => this._httpClient.delete("api/apps/tasks/tag", { params: { id } }).pipe(map((isDeleted) => {
      const index = tags.findIndex((item) => item.id === id);
      tags.splice(index, 1);
      this._tags.next(tags);
      return isDeleted;
    }), filter((isDeleted) => isDeleted), switchMap((isDeleted) => this.tasks$.pipe(take(1), map((tasks) => {
      tasks.forEach((task) => {
        const tagIndex = task.tags.findIndex((tag) => tag === id);
        if (tagIndex > -1) {
          task.tags.splice(tagIndex, 1);
        }
      });
      return isDeleted;
    }))))));
  }
  /**
   * Get tasks
   */
  getTasks() {
    return this._httpClient.get("api/apps/tasks/all").pipe(tap((response) => {
      this._tasks.next(response);
    }));
  }
  /**
   * Update tasks orders
   *
   * @param tasks
   */
  updateTasksOrders(tasks) {
    return this._httpClient.patch("api/apps/tasks/order", {
      tasks
    });
  }
  /**
   * Search tasks with given query
   *
   * @param query
   */
  searchTasks(query) {
    return this._httpClient.get("api/apps/tasks/search", {
      params: { query }
    });
  }
  /**
   * Get task by id
   */
  getTaskById(id) {
    return this._tasks.pipe(take(1), map((tasks) => {
      const task = tasks.find((item) => item.id === id) || null;
      this._task.next(task);
      return task;
    }), switchMap((task) => {
      if (!task) {
        return throwError("Could not found task with id of " + id + "!");
      }
      return of(task);
    }));
  }
  /**
   * Create task
   *
   * @param type
   */
  createTask(type) {
    return this.tasks$.pipe(take(1), switchMap((tasks) => this._httpClient.post("api/apps/tasks/task", { type }).pipe(map((newTask) => {
      this._tasks.next([newTask, ...tasks]);
      return newTask;
    }))));
  }
  /**
   * Update task
   *
   * @param id
   * @param task
   */
  updateTask(id, task) {
    return this.tasks$.pipe(take(1), switchMap((tasks) => this._httpClient.patch("api/apps/tasks/task", {
      id,
      task
    }).pipe(map((updatedTask) => {
      const index = tasks.findIndex((item) => item.id === id);
      tasks[index] = updatedTask;
      this._tasks.next(tasks);
      return updatedTask;
    }), switchMap((updatedTask) => this.task$.pipe(take(1), filter((item) => item && item.id === id), tap(() => {
      this._task.next(updatedTask);
      return updatedTask;
    }))))));
  }
  /**
   * Delete the task
   *
   * @param id
   */
  deleteTask(id) {
    return this.tasks$.pipe(take(1), switchMap((tasks) => this._httpClient.delete("api/apps/tasks/task", { params: { id } }).pipe(map((isDeleted) => {
      const index = tasks.findIndex((item) => item.id === id);
      tasks.splice(index, 1);
      this._tasks.next(tasks);
      return isDeleted;
    }))));
  }
  static {
    this.\u0275fac = function TasksService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TasksService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TasksService, factory: _TasksService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/apps/tasks/list/list.component.ts
var _c0 = ["matDrawer"];
var _c1 = (a0, a1, a2) => ({ "h-12 bg-gray-50 text-lg font-semibold dark:bg-transparent": a0, "h-16": a1, "text-hint": a2 });
var _c2 = (a0) => [a0];
function TasksListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "All tasks completed!");
    \u0275\u0275elementEnd();
  }
}
function TasksListComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r1.tasksCount.incomplete, " remaining tasks");
  }
}
function TasksListComponent_Conditional_23_For_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 30);
  }
}
function TasksListComponent_Conditional_23_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 21);
  }
}
function TasksListComponent_Conditional_23_For_2_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 32);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_outline:check-circle");
  }
}
function TasksListComponent_Conditional_23_For_2_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 33);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_outline:check-circle");
  }
}
function TasksListComponent_Conditional_23_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275listener("click", function TasksListComponent_Conditional_23_For_2_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const task_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleCompleted(task_r5));
    });
    \u0275\u0275template(1, TasksListComponent_Conditional_23_For_2_Conditional_6_Conditional_1_Template, 1, 1, "mat-icon", 32)(2, TasksListComponent_Conditional_23_For_2_Conditional_6_Conditional_2_Template, 1, 1, "mat-icon", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r5.completed ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!task_r5.completed ? 2 : -1);
  }
}
function TasksListComponent_Conditional_23_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(task_r5.title);
  }
}
function TasksListComponent_Conditional_23_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(2, 1, task_r5.type), " title");
  }
}
function TasksListComponent_Conditional_23_For_2_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 34);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-down")("title", "Low");
  }
}
function TasksListComponent_Conditional_23_For_2_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 35);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-up")("title", "High");
  }
}
function TasksListComponent_Conditional_23_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, TasksListComponent_Conditional_23_For_2_Conditional_11_Conditional_1_Template, 1, 2, "mat-icon", 34)(2, TasksListComponent_Conditional_23_For_2_Conditional_11_Conditional_2_Template, 1, 2, "mat-icon", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r5.priority === 0 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r5.priority === 2 ? 2 : -1);
  }
}
function TasksListComponent_Conditional_23_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const task_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, task_r5.dueDate, "LLL dd"), " ");
  }
}
function TasksListComponent_Conditional_23_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275template(1, TasksListComponent_Conditional_23_For_2_div_1_Template, 1, 0, "div", 19);
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275template(3, TasksListComponent_Conditional_23_For_2_Conditional_3_Template, 1, 0, "div", 21);
    \u0275\u0275elementStart(4, "div", 22);
    \u0275\u0275element(5, "mat-icon", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, TasksListComponent_Conditional_23_For_2_Conditional_6_Template, 3, 2, "button", 24);
    \u0275\u0275elementStart(7, "a", 25)(8, "div", 26);
    \u0275\u0275template(9, TasksListComponent_Conditional_23_For_2_Conditional_9_Template, 2, 1, "span")(10, TasksListComponent_Conditional_23_For_2_Conditional_10_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, TasksListComponent_Conditional_23_For_2_Conditional_11_Template, 3, 2, "div", 28)(12, TasksListComponent_Conditional_23_For_2_Conditional_12_Template, 3, 4, "div", 29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const task_r5 = ctx.$implicit;
    const \u0275$index_49_r6 = ctx.$index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-t", \u0275$index_49_r6 === 0);
    \u0275\u0275property("id", "task-" + task_r5.id)("ngClass", \u0275\u0275pureFunction3(13, _c1, task_r5.type === "section", task_r5.type === "task", task_r5.completed))("cdkDragLockAxis", "y");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.selectedTask && ctx_r1.selectedTask.id === task_r5.id ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_solid:bars-3");
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r5.type === "task" ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(17, _c2, task_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(task_r5.title ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!task_r5.title ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r5.type === "task" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r5.type === "task" ? 12 : -1);
  }
}
function TasksListComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275listener("cdkDropListDropped", function TasksListComponent_Conditional_23_Template_div_cdkDropListDropped_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dropped($event));
    });
    \u0275\u0275repeaterCreate(1, TasksListComponent_Conditional_23_For_2_Template, 13, 19, "div", 17, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("cdkDropListData", ctx_r1.tasks);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.tasks);
  }
}
function TasksListComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "mat-icon", 36);
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275text(3, " Add a task to start planning! ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:clipboard-document-list");
  }
}
var TasksListComponent = class _TasksListComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _changeDetectorRef, _document, _router, _tasksService, _fuseMediaWatcherService, _fuseNavigationService) {
    this._activatedRoute = _activatedRoute;
    this._changeDetectorRef = _changeDetectorRef;
    this._document = _document;
    this._router = _router;
    this._tasksService = _tasksService;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this._fuseNavigationService = _fuseNavigationService;
    this.tasksCount = {
      completed: 0,
      incomplete: 0,
      total: 0
    };
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._tasksService.tags$.pipe(takeUntil(this._unsubscribeAll)).subscribe((tags) => {
      this.tags = tags;
      this._changeDetectorRef.markForCheck();
    });
    this._tasksService.tasks$.pipe(takeUntil(this._unsubscribeAll)).subscribe((tasks) => {
      this.tasks = tasks;
      this.tasksCount.total = this.tasks.filter((task) => task.type === "task").length;
      this.tasksCount.completed = this.tasks.filter((task) => task.type === "task" && task.completed).length;
      this.tasksCount.incomplete = this.tasksCount.total - this.tasksCount.completed;
      this._changeDetectorRef.markForCheck();
      setTimeout(() => {
        const mainNavigationComponent = this._fuseNavigationService.getComponent("mainNavigation");
        if (mainNavigationComponent) {
          const mainNavigation = mainNavigationComponent.navigation;
          const menuItem = this._fuseNavigationService.getItem("apps.tasks", mainNavigation);
          menuItem.subtitle = this.tasksCount.incomplete + " remaining tasks";
          mainNavigationComponent.refresh();
        }
      });
    });
    this._tasksService.task$.pipe(takeUntil(this._unsubscribeAll)).subscribe((task) => {
      this.selectedTask = task;
      this._changeDetectorRef.markForCheck();
    });
    this._fuseMediaWatcherService.onMediaQueryChange$("(min-width: 1440px)").pipe(takeUntil(this._unsubscribeAll)).subscribe((state) => {
      this.drawerMode = state.matches ? "side" : "over";
      this._changeDetectorRef.markForCheck();
    });
    fromEvent(this._document, "keydown").pipe(takeUntil(this._unsubscribeAll), filter(
      (event) => (event.ctrlKey === true || event.metaKey) && // Ctrl or Cmd
      (event.key === "/" || event.key === ".")
      // '/' or '.' key
    )).subscribe((event) => {
      if (event.key === "/") {
        this.createTask("task");
      }
      if (event.key === ".") {
        this.createTask("section");
      }
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
   * On backdrop clicked
   */
  onBackdropClicked() {
    this._router.navigate(["./"], { relativeTo: this._activatedRoute });
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Create task
   *
   * @param type
   */
  createTask(type) {
    this._tasksService.createTask(type).subscribe((newTask) => {
      this._router.navigate(["./", newTask.id], {
        relativeTo: this._activatedRoute
      });
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * Toggle the completed status
   * of the given task
   *
   * @param task
   */
  toggleCompleted(task) {
    task.completed = !task.completed;
    this._tasksService.updateTask(task.id, task).subscribe();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Task dropped
   *
   * @param event
   */
  dropped(event) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    this._tasksService.updateTasksOrders(event.container.data).subscribe();
    this._changeDetectorRef.markForCheck();
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
    this.\u0275fac = function TasksListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TasksListComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(FuseMediaWatcherService), \u0275\u0275directiveInject(FuseNavigationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksListComponent, selectors: [["tasks-list"]], viewQuery: function TasksListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.matDrawer = _t.first);
      }
    }, decls: 25, vars: 13, consts: [["matDrawer", ""], [1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-hidden"], [1, "bg-card", "h-full", "flex-auto", "dark:bg-transparent", 3, "backdropClick"], [1, "w-full", "dark:bg-gray-900", "sm:w-128", 3, "mode", "opened", "position", "disableClose"], [1, "flex", "flex-col"], [1, "flex", "flex-auto", "flex-col"], [1, "flex", "flex-col", "items-start", "px-6", "py-8", "sm:flex-row", "sm:items-center", "sm:justify-between", "md:px-8"], [1, "text-4xl", "font-extrabold", "leading-none", "tracking-tight"], [1, "text-secondary", "ml-0.5", "font-medium"], [1, "mt-4", "sm:mt-0"], ["mat-flat-button", "", 3, "click", "color", "matTooltip"], [3, "svgIcon"], [1, "ml-2", "mr-1"], ["mat-flat-button", "", 1, "ml-3", 3, "click", "color", "matTooltip"], ["cdkDropList", "", 1, "divide-y", 3, "cdkDropListData"], [1, "flex", "flex-auto", "flex-col", "items-center", "justify-center", "bg-gray-100", "dark:bg-transparent"], ["cdkDropList", "", 1, "divide-y", 3, "cdkDropListDropped", "cdkDropListData"], ["cdkDrag", "", 1, "group", "w-full", "select-none", "dark:hover:bg-hover", "hover:bg-gray-100", 3, "id", "ngClass", "border-t", "cdkDragLockAxis"], ["cdkDrag", "", 1, "group", "w-full", "select-none", "dark:hover:bg-hover", "hover:bg-gray-100", 3, "id", "ngClass", "cdkDragLockAxis"], ["class", "flex h-0 w-0 flex-0", 4, "cdkDragPreview"], [1, "relative", "flex", "h-full", "items-center", "pl-10"], [1, "absolute", "-bottom-px", "-top-px", "right-0", "z-10", "flex", "w-1", "flex-0", "bg-primary"], ["cdkDragHandle", "", 1, "absolute", "inset-y-0", "left-0", "flex", "w-8", "cursor-move", "items-center", "justify-center", "md:hidden", "md:group-hover:flex"], [1, "text-hint", "icon-size-5", 3, "svgIcon"], ["mat-icon-button", "", 1, "-ml-2.5", "mr-2", "leading-none"], [1, "flex", "h-full", "min-w-0", "flex-auto", "items-center", "pr-7", 3, "routerLink"], [1, "mr-2", "flex-auto", "truncate"], [1, "text-hint", "select-none"], [1, "mr-3", "h-4", "w-4"], [1, "text-secondary", "whitespace-nowrap", "text-sm"], [1, "flex", "h-0", "w-0", "flex-0"], ["mat-icon-button", "", 1, "-ml-2.5", "mr-2", "leading-none", 3, "click"], [1, "text-primary", 3, "svgIcon"], [1, "text-hint", 3, "svgIcon"], [1, "text-green-600", "icon-size-4", "dark:text-green-400", 3, "svgIcon", "title"], [1, "text-red-600", "icon-size-4", "dark:text-red-400", 3, "svgIcon", "title"], [1, "icon-size-24", 3, "svgIcon"], [1, "text-secondary", "mt-4", "text-2xl", "font-semibold", "tracking-tight"]], template: function TasksListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-drawer-container", 2);
        \u0275\u0275listener("backdropClick", function TasksListComponent_Template_mat_drawer_container_backdropClick_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBackdropClicked());
        });
        \u0275\u0275elementStart(2, "mat-drawer", 3, 0);
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7);
        \u0275\u0275text(10, " Tasks ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275template(12, TasksListComponent_Conditional_12_Template, 2, 0, "span")(13, TasksListComponent_Conditional_13_Template, 2, 1, "span");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 9)(15, "button", 10);
        \u0275\u0275listener("click", function TasksListComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.createTask("section"));
        });
        \u0275\u0275element(16, "mat-icon", 11);
        \u0275\u0275elementStart(17, "span", 12);
        \u0275\u0275text(18, "Add Section");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "button", 13);
        \u0275\u0275listener("click", function TasksListComponent_Template_button_click_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.createTask("task"));
        });
        \u0275\u0275element(20, "mat-icon", 11);
        \u0275\u0275elementStart(21, "span", 12);
        \u0275\u0275text(22, "Add Task");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275template(23, TasksListComponent_Conditional_23_Template, 3, 1, "div", 14)(24, TasksListComponent_Conditional_24_Template, 4, 1, "div", 15);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("mode", ctx.drawerMode)("opened", false)("position", "end")("disableClose", true);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.tasksCount.incomplete === 0 ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.tasksCount.incomplete !== 0 ? 13 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "accent")("matTooltip", "Shortcut: Ctrl + .");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:plus");
        \u0275\u0275advance(3);
        \u0275\u0275property("color", "primary")("matTooltip", "Shortcut: Ctrl + /");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:plus");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.tasks && ctx.tasks.length > 0 ? 23 : 24);
      }
    }, dependencies: [
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      RouterOutlet,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatTooltipModule,
      MatTooltip,
      MatIconModule,
      MatIcon,
      CdkDropList,
      CdkDrag,
      NgClass,
      CdkDragPreview,
      CdkDragHandle,
      RouterLink,
      TitleCasePipe,
      DatePipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksListComponent, { className: "TasksListComponent", filePath: "src/app/modules/admin/apps/tasks/list/list.component.ts", lineNumber: 60 });
})();

// src/app/modules/admin/apps/tasks/details/details.component.ts
var _c02 = ["tagsPanelOrigin"];
var _c12 = ["tagsPanel"];
var _c22 = ["titleField"];
var _c3 = () => ["../"];
var _c4 = (a0, a1, a2) => ({ "bg-green-200 text-green-800 dark:bg-green-500 dark:text-green-100": a0, "bg-gray-200 text-gray-800 dark:bg-gray-500 dark:text-gray-100": a1, "bg-red-200 text-red-800 dark:bg-red-500 dark:text-red-100": a2 });
var _c5 = (a0) => ({ "bg-hover": a0 });
var _c6 = (a0, a1, a2) => ({ "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300": a0, "bg-green-200 text-green-800 dark:bg-green-500 dark:text-green-100": a1, "bg-red-200 text-red-800 dark:bg-red-500 dark:text-red-100": a2 });
function TasksDetailsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-icon", 14);
    \u0275\u0275elementStart(2, "span", 40);
    \u0275\u0275text(3, "MARK AS COMPLETE");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:check-circle");
  }
}
function TasksDetailsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-icon", 41);
    \u0275\u0275elementStart(2, "span", 40);
    \u0275\u0275text(3, "MARK AS INCOMPLETE");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:check-circle");
  }
}
function TasksDetailsComponent_Conditional_28_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r2.title);
  }
}
function TasksDetailsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TasksDetailsComponent_Conditional_28_For_1_Template, 3, 1, "div", 42, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275pipe(2, "fuseFindByKey");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(2, 0, ctx_r2.task.tags, "id", ctx_r2.tags));
  }
}
function TasksDetailsComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 44);
    \u0275\u0275elementStart(1, "span", 45);
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:pencil-square");
  }
}
function TasksDetailsComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 44);
    \u0275\u0275elementStart(1, "span", 45);
    \u0275\u0275text(2, "Add");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:plus-circle");
  }
}
function TasksDetailsComponent_ng_template_33_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 44);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:pencil-square");
  }
}
function TasksDetailsComponent_ng_template_33_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 44);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:check");
  }
}
function TasksDetailsComponent_ng_template_33_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275listener("click", function TasksDetailsComponent_ng_template_33_Conditional_11_For_1_Template_div_click_0_listener() {
      const tag_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleTaskTag(tag_r6));
    });
    \u0275\u0275element(1, "mat-checkbox", 56);
    \u0275\u0275elementStart(2, "div", 57);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.task.tags.includes(tag_r6.id))("color", "primary")("disableRipple", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tag_r6.title, " ");
  }
}
function TasksDetailsComponent_ng_template_33_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, TasksDetailsComponent_ng_template_33_Conditional_11_For_1_Template, 4, 4, "div", 54, \u0275\u0275componentInstance().trackByFn, true);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.filteredTags);
  }
}
function TasksDetailsComponent_ng_template_33_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-form-field", 58)(2, "input", 59);
    \u0275\u0275listener("input", function TasksDetailsComponent_ng_template_33_Conditional_12_For_2_Template_input_input_2_listener($event) {
      const tag_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.updateTagTitle(tag_r8, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 60);
    \u0275\u0275listener("click", function TasksDetailsComponent_ng_template_33_Conditional_12_For_2_Template_button_click_3_listener() {
      const tag_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteTag(tag_r8));
    });
    \u0275\u0275element(4, "mat-icon", 61);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("value", tag_r8.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_solid:trash");
  }
}
function TasksDetailsComponent_ng_template_33_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275repeaterCreate(1, TasksDetailsComponent_ng_template_33_Conditional_12_For_2_Template, 5, 3, "div", 12, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.filteredTags);
  }
}
function TasksDetailsComponent_ng_template_33_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function TasksDetailsComponent_ng_template_33_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      \u0275\u0275nextContext();
      const newTagInput_r10 = \u0275\u0275reference(6);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.createTag(newTagInput_r10.value);
      return \u0275\u0275resetView(newTagInput_r10.value = "");
    });
    \u0275\u0275element(1, "mat-icon", 63);
    \u0275\u0275elementStart(2, "div", 64);
    \u0275\u0275text(3, ' Create "');
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, '" ');
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const newTagInput_r10 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:plus-circle");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(newTagInput_r10.value);
  }
}
function TasksDetailsComponent_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "div", 12);
    \u0275\u0275element(3, "mat-icon", 44);
    \u0275\u0275elementStart(4, "div", 48)(5, "input", 49, 6);
    \u0275\u0275listener("input", function TasksDetailsComponent_ng_template_33_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterTags($event));
    })("keydown", function TasksDetailsComponent_ng_template_33_Template_input_keydown_5_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterTagsInputKeyDown($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 50);
    \u0275\u0275listener("click", function TasksDetailsComponent_ng_template_33_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleTagsEditMode());
    });
    \u0275\u0275template(8, TasksDetailsComponent_ng_template_33_Conditional_8_Template, 1, 1, "mat-icon", 44)(9, TasksDetailsComponent_ng_template_33_Conditional_9_Template, 1, 1, "mat-icon", 44);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 51);
    \u0275\u0275template(11, TasksDetailsComponent_ng_template_33_Conditional_11_Template, 2, 0)(12, TasksDetailsComponent_ng_template_33_Conditional_12_Template, 3, 0, "div", 52)(13, TasksDetailsComponent_ng_template_33_Conditional_13_Template, 7, 2, "div", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const newTagInput_r10 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
    \u0275\u0275advance(2);
    \u0275\u0275property("maxLength", 30);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r2.tagsEditMode ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.tagsEditMode ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.tagsEditMode ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.tagsEditMode ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.shouldShowCreateTagButton(newTagInput_r10.value) ? 13 : -1);
  }
}
function TasksDetailsComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 65);
    \u0275\u0275elementStart(1, "span", 66);
    \u0275\u0275text(2, "Low");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-down");
  }
}
function TasksDetailsComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 65);
    \u0275\u0275elementStart(1, "span", 66);
    \u0275\u0275text(2, "Normal");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:minus");
  }
}
function TasksDetailsComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 65);
    \u0275\u0275elementStart(1, "span", 66);
    \u0275\u0275text(2, "High");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-up");
  }
}
function TasksDetailsComponent_Conditional_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r2.task.dueDate, "longDate"), " ");
  }
}
function TasksDetailsComponent_Conditional_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Not set ");
  }
}
var TasksDetailsComponent = class _TasksDetailsComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _changeDetectorRef, _formBuilder, _fuseConfirmationService, _renderer2, _router, _tasksListComponent, _tasksService, _overlay, _viewContainerRef) {
    this._activatedRoute = _activatedRoute;
    this._changeDetectorRef = _changeDetectorRef;
    this._formBuilder = _formBuilder;
    this._fuseConfirmationService = _fuseConfirmationService;
    this._renderer2 = _renderer2;
    this._router = _router;
    this._tasksListComponent = _tasksListComponent;
    this._tasksService = _tasksService;
    this._overlay = _overlay;
    this._viewContainerRef = _viewContainerRef;
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
    this._tasksListComponent.matDrawer.open();
    this.taskForm = this._formBuilder.group({
      id: [""],
      type: [""],
      title: [""],
      notes: [""],
      completed: [false],
      dueDate: [null],
      priority: [0],
      tags: [[]],
      order: [0]
    });
    this._tasksService.tags$.pipe(takeUntil(this._unsubscribeAll)).subscribe((tags) => {
      this.tags = tags;
      this.filteredTags = tags;
      this._changeDetectorRef.markForCheck();
    });
    this._tasksService.tasks$.pipe(takeUntil(this._unsubscribeAll)).subscribe((tasks) => {
      this.tasks = tasks;
      this._changeDetectorRef.markForCheck();
    });
    this._tasksService.task$.pipe(takeUntil(this._unsubscribeAll)).subscribe((task) => {
      this._tasksListComponent.matDrawer.open();
      this.task = task;
      this.taskForm.patchValue(task, { emitEvent: false });
      this._changeDetectorRef.markForCheck();
    });
    this.taskForm.valueChanges.pipe(tap((value) => {
      this.task = assign_default(this.task, value);
    }), debounceTime(300), takeUntil(this._unsubscribeAll)).subscribe((value) => {
      this._tasksService.updateTask(value.id, value).subscribe();
      this._changeDetectorRef.markForCheck();
    });
    this._router.events.pipe(takeUntil(this._unsubscribeAll), filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      this._titleField.nativeElement.focus();
    });
  }
  /**
   * After view init
   */
  ngAfterViewInit() {
    this._tasksListComponent.matDrawer.openedChange.pipe(takeUntil(this._unsubscribeAll), filter((opened) => opened)).subscribe(() => {
      this._titleField.nativeElement.focus();
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
    if (this._tagsPanelOverlayRef) {
      this._tagsPanelOverlayRef.dispose();
    }
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Close the drawer
   */
  closeDrawer() {
    return this._tasksListComponent.matDrawer.close();
  }
  /**
   * Toggle the completed status
   */
  toggleCompleted() {
    const completedFormControl = this.taskForm.get("completed");
    completedFormControl.setValue(!completedFormControl.value);
  }
  /**
   * Open tags panel
   */
  openTagsPanel() {
    this._tagsPanelOverlayRef = this._overlay.create({
      backdropClass: "",
      hasBackdrop: true,
      scrollStrategy: this._overlay.scrollStrategies.block(),
      positionStrategy: this._overlay.position().flexibleConnectedTo(this._tagsPanelOrigin.nativeElement).withFlexibleDimensions(true).withViewportMargin(64).withLockedPosition(true).withPositions([
        {
          originX: "start",
          originY: "bottom",
          overlayX: "start",
          overlayY: "top"
        }
      ])
    });
    this._tagsPanelOverlayRef.attachments().subscribe(() => {
      this._tagsPanelOverlayRef.overlayElement.querySelector("input").focus();
    });
    const templatePortal = new TemplatePortal(this._tagsPanel, this._viewContainerRef);
    this._tagsPanelOverlayRef.attach(templatePortal);
    this._tagsPanelOverlayRef.backdropClick().subscribe(() => {
      if (this._tagsPanelOverlayRef && this._tagsPanelOverlayRef.hasAttached()) {
        this._tagsPanelOverlayRef.detach();
        this.filteredTags = this.tags;
        this.tagsEditMode = false;
      }
      if (templatePortal && templatePortal.isAttached) {
        templatePortal.detach();
      }
    });
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
    const isTagApplied = this.task.tags.find((id) => id === tag.id);
    if (isTagApplied) {
      this.deleteTagFromTask(tag);
    } else {
      this.addTagToTask(tag);
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
    this._tasksService.createTag(tag).subscribe((response) => {
      this.addTagToTask(response);
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
    this._tasksService.updateTag(tag.id, tag).pipe(debounceTime(300)).subscribe();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Delete the tag
   *
   * @param tag
   */
  deleteTag(tag) {
    this._tasksService.deleteTag(tag.id).subscribe();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Add tag to the task
   *
   * @param tag
   */
  addTagToTask(tag) {
    this.task.tags.unshift(tag.id);
    this.taskForm.get("tags").patchValue(this.task.tags);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Delete tag from the task
   *
   * @param tag
   */
  deleteTagFromTask(tag) {
    this.task.tags.splice(this.task.tags.findIndex((item) => item === tag.id), 1);
    this.taskForm.get("tags").patchValue(this.task.tags);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Toggle task tag
   *
   * @param tag
   */
  toggleTaskTag(tag) {
    if (this.task.tags.includes(tag.id)) {
      this.deleteTagFromTask(tag);
    } else {
      this.addTagToTask(tag);
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
   * Set the task priority
   *
   * @param priority
   */
  setTaskPriority(priority) {
    this.taskForm.get("priority").setValue(priority);
  }
  /**
   * Check if the task is overdue or not
   */
  isOverdue() {
    return DateTime.fromISO(this.task.dueDate).startOf("day") < DateTime.now().startOf("day");
  }
  /**
   * Delete the task
   */
  deleteTask() {
    const confirmation = this._fuseConfirmationService.open({
      title: "Delete task",
      message: "Are you sure you want to delete this task? This action cannot be undone!",
      actions: {
        confirm: {
          label: "Delete"
        }
      }
    });
    confirmation.afterClosed().subscribe((result) => {
      if (result === "confirmed") {
        const id = this.task.id;
        const currentTaskIndex = this.tasks.findIndex((item) => item.id === id);
        const nextTaskIndex = currentTaskIndex + (currentTaskIndex === this.tasks.length - 1 ? -1 : 1);
        const nextTaskId = this.tasks.length === 1 && this.tasks[0].id === id ? null : this.tasks[nextTaskIndex].id;
        this._tasksService.deleteTask(id).subscribe((isDeleted) => {
          if (!isDeleted) {
            return;
          }
          if (nextTaskId) {
            this._router.navigate(["../", nextTaskId], {
              relativeTo: this._activatedRoute
            });
          } else {
            this._router.navigate(["../"], {
              relativeTo: this._activatedRoute
            });
          }
        });
        this._changeDetectorRef.markForCheck();
      }
    });
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
    this.\u0275fac = function TasksDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TasksDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(FuseConfirmationService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(TasksListComponent), \u0275\u0275directiveInject(TasksService), \u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(ViewContainerRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksDetailsComponent, selectors: [["tasks-details"]], viewQuery: function TasksDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
        \u0275\u0275viewQuery(_c22, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tagsPanelOrigin = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tagsPanel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._titleField = _t.first);
      }
    }, decls: 82, vars: 53, consts: [["moreMenu", "matMenu"], ["titleField", ""], ["tagsPanelOrigin", ""], ["tagsPanel", ""], ["priorityMenu", "matMenu"], ["dueDatePicker", ""], ["newTagInput", ""], [1, "flex", "flex-auto"], [1, "flex", "flex-auto", "flex-col", "overflow-y-auto", "p-6", "pt-10", "sm:p-8", "sm:pt-10", 3, "formGroup"], [1, "-ml-4", "-mt-3", "flex", "items-center", "justify-between"], ["mat-button", "", 1, "pl-3.5", "pr-4", 3, "click"], [1, "flex", "items-center", "justify-center"], [1, "flex", "items-center"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [3, "svgIcon"], ["mat-menu-item", "", 3, "click"], ["mat-icon-button", "", 3, "routerLink"], [1, "mb-8", "mt-6"], [1, "w-full", 3, "subscriptSizing"], ["matInput", "", "cdkTextareaAutosize", "", 3, "formControlName", "spellcheck"], [1, "mt-8"], [1, "mb-1.5", "font-medium"], [1, "-m-1.5", "flex", "flex-wrap", "items-center"], [1, "m-1.5", "flex", "cursor-pointer", "items-center", "justify-center", "rounded-full", "bg-gray-100", "px-4", "leading-9", "text-gray-500", "dark:bg-gray-700", "dark:text-gray-300", 3, "click"], [1, "mt-8", "flex", "flex-wrap", "items-center"], [1, "font-medium"], [1, "mt-1.5", "flex", "cursor-pointer", "items-center", "rounded-full", "px-4", "leading-9", 3, "ngClass", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click", "ngClass"], [1, "inline-flex", "w-full", "min-w-30", "items-center", "justify-between", "leading-5"], [1, "mr-0", "text-green-600", "icon-size-4", "dark:text-green-500", 3, "svgIcon"], [1, "mr-0", "text-gray-600", "icon-size-4", "dark:text-gray-500", 3, "svgIcon"], [1, "mr-0", "text-red-600", "icon-size-4", "dark:text-red-500", 3, "svgIcon"], [1, "ml-6"], [1, "relative", "mt-1.5", "flex", "cursor-pointer", "items-center", "rounded-full", "px-4", "leading-9", 3, "click", "ngClass"], [1, "text-current", "icon-size-5", 3, "svgIcon"], [1, "ml-2", "text-md", "font-medium"], [1, "fuse-mat-dense", "pointer-events-none", "invisible", "absolute", "inset-0", "-mt-2.5", "opacity-0", 3, "subscriptSizing"], ["matInput", "", 3, "formControlName", "matDatepicker"], ["mat-button", "", "matDatepickerCancel", "", 3, "click"], ["mat-flat-button", "", "matDatepickerApply", "", 1, "", 3, "color"], [1, "ml-2", "font-semibold"], [1, "text-primary", 3, "svgIcon"], [1, "m-1.5", "flex", "items-center", "justify-center", "rounded-full", "bg-gray-100", "px-4", "leading-9", "text-gray-500", "dark:bg-gray-700", "dark:text-gray-300"], [1, "whitespace-nowrap", "text-md", "font-medium"], [1, "icon-size-5", 3, "svgIcon"], [1, "ml-1.5", "whitespace-nowrap", "text-md", "font-medium"], [1, "bg-card", "w-60", "rounded", "border", "shadow-md"], [1, "m-3", "mr-2", "flex", "items-center"], [1, "ml-2"], ["type", "text", "placeholder", "Enter tag name", 1, "w-full", "min-w-0", "border-0", "py-1", 3, "input", "keydown", "maxLength"], ["mat-icon-button", "", 1, "ml-1", 3, "click"], [1, "flex", "max-h-64", "flex-col", "overflow-y-auto", "border-t", "py-2"], [1, "space-y-2", "py-2"], ["matRipple", "", 1, "-ml-0.5", "flex", "h-10", "min-h-10", "cursor-pointer", "items-center", "pl-4", "pr-3", "leading-none", "hover:bg-hover"], ["matRipple", "", 1, "flex", "h-10", "min-h-10", "cursor-pointer", "items-center", "pl-1", "pr-4", "hover:bg-hover"], ["matRipple", "", 1, "flex", "h-10", "min-h-10", "cursor-pointer", "items-center", "pl-1", "pr-4", "hover:bg-hover", 3, "click"], [1, "pointer-events-none", "flex", "h-10", "min-h-10", "items-center", 3, "checked", "color", "disableRipple"], [1, "ml-1"], [1, "fuse-mat-dense", "mx-4", "w-full", 3, "subscriptSizing"], ["matInput", "", 3, "input", "value"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "ml-2", "icon-size-5", 3, "svgIcon"], ["matRipple", "", 1, "-ml-0.5", "flex", "h-10", "min-h-10", "cursor-pointer", "items-center", "pl-4", "pr-3", "leading-none", "hover:bg-hover", 3, "click"], [1, "mr-2", "icon-size-5", 3, "svgIcon"], [1, "break-all"], [1, "text-current", "icon-size-4", 3, "svgIcon"], [1, "ml-2", "mr-1", "text-md", "font-medium"]], template: function TasksDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 7)(1, "form", 8)(2, "div", 9)(3, "button", 10);
        \u0275\u0275listener("click", function TasksDetailsComponent_Template_button_click_3_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleCompleted());
        });
        \u0275\u0275template(4, TasksDetailsComponent_Conditional_4_Template, 4, 1, "div", 11)(5, TasksDetailsComponent_Conditional_5_Template, 4, 1, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 12)(7, "button", 13);
        \u0275\u0275element(8, "mat-icon", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "mat-menu", null, 0)(11, "button", 15);
        \u0275\u0275listener("click", function TasksDetailsComponent_Template_button_click_11_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.deleteTask());
        });
        \u0275\u0275element(12, "mat-icon", 14);
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(15, "a", 16);
        \u0275\u0275element(16, "mat-icon", 14);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(17, "mat-divider", 17);
        \u0275\u0275elementStart(18, "div")(19, "mat-form-field", 18)(20, "mat-label");
        \u0275\u0275text(21);
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "textarea", 19, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(24, "div", 20)(25, "div", 21);
        \u0275\u0275text(26, "Tags");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 22);
        \u0275\u0275template(28, TasksDetailsComponent_Conditional_28_Template, 3, 4);
        \u0275\u0275elementStart(29, "div", 23, 2);
        \u0275\u0275listener("click", function TasksDetailsComponent_Template_div_click_29_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openTagsPanel());
        });
        \u0275\u0275template(31, TasksDetailsComponent_Conditional_31_Template, 3, 1)(32, TasksDetailsComponent_Conditional_32_Template, 3, 1)(33, TasksDetailsComponent_ng_template_33_Template, 14, 7, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(35, "div", 24)(36, "div")(37, "div", 25);
        \u0275\u0275text(38, "Priority");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div", 26);
        \u0275\u0275template(40, TasksDetailsComponent_Conditional_40_Template, 3, 1)(41, TasksDetailsComponent_Conditional_41_Template, 3, 1)(42, TasksDetailsComponent_Conditional_42_Template, 3, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "mat-menu", null, 4)(45, "button", 27);
        \u0275\u0275listener("click", function TasksDetailsComponent_Template_button_click_45_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setTaskPriority(0));
        });
        \u0275\u0275elementStart(46, "span", 28)(47, "span", 25);
        \u0275\u0275text(48, "Low");
        \u0275\u0275elementEnd();
        \u0275\u0275element(49, "mat-icon", 29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "button", 27);
        \u0275\u0275listener("click", function TasksDetailsComponent_Template_button_click_50_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setTaskPriority(1));
        });
        \u0275\u0275elementStart(51, "span", 28)(52, "span", 25);
        \u0275\u0275text(53, "Normal");
        \u0275\u0275elementEnd();
        \u0275\u0275element(54, "mat-icon", 30);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(55, "button", 27);
        \u0275\u0275listener("click", function TasksDetailsComponent_Template_button_click_55_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.setTaskPriority(2));
        });
        \u0275\u0275elementStart(56, "span", 28)(57, "span", 25);
        \u0275\u0275text(58, "High");
        \u0275\u0275elementEnd();
        \u0275\u0275element(59, "mat-icon", 31);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(60, "div", 32)(61, "div", 25);
        \u0275\u0275text(62, "Due date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 33);
        \u0275\u0275listener("click", function TasksDetailsComponent_Template_div_click_63_listener() {
          \u0275\u0275restoreView(_r1);
          const dueDatePicker_r11 = \u0275\u0275reference(71);
          return \u0275\u0275resetView(dueDatePicker_r11.open());
        });
        \u0275\u0275element(64, "mat-icon", 34);
        \u0275\u0275elementStart(65, "span", 35);
        \u0275\u0275template(66, TasksDetailsComponent_Conditional_66_Template, 2, 4)(67, TasksDetailsComponent_Conditional_67_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(68, "mat-form-field", 36);
        \u0275\u0275element(69, "input", 37);
        \u0275\u0275elementStart(70, "mat-datepicker", null, 5)(72, "mat-datepicker-actions")(73, "button", 38);
        \u0275\u0275listener("click", function TasksDetailsComponent_Template_button_click_73_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.taskForm.get("dueDate").setValue(null));
        });
        \u0275\u0275text(74, " Clear ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "button", 39);
        \u0275\u0275text(76, " Select ");
        \u0275\u0275elementEnd()()()()()()();
        \u0275\u0275elementStart(77, "div", 20)(78, "mat-form-field", 18)(79, "mat-label");
        \u0275\u0275text(80, "Notes");
        \u0275\u0275elementEnd();
        \u0275\u0275element(81, "textarea", 19);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const moreMenu_r12 = \u0275\u0275reference(10);
        const priorityMenu_r13 = \u0275\u0275reference(44);
        const dueDatePicker_r11 = \u0275\u0275reference(71);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.taskForm);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.taskForm.get("completed").value ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.taskForm.get("completed").value ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("matMenuTriggerFor", moreMenu_r12);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:ellipsis-vertical");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_outline:trash");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1("Delete ", ctx.task.type === "task" ? "task" : "section", "");
        \u0275\u0275advance();
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(38, _c3));
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:x-mark");
        \u0275\u0275advance(3);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.task.type === "task" ? "Task title" : "Section title");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "title")("spellcheck", false);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.task.tags.length ? 28 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.task.tags.length ? 31 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.task.tags.length ? 32 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(39, _c4, ctx.task.priority === 0, ctx.task.priority === 1, ctx.task.priority === 2))("matMenuTriggerFor", priorityMenu_r13);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.task.priority === 0 ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.task.priority === 1 ? 41 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.task.priority === 2 ? 42 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(43, _c5, ctx.task.priority === 0));
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-down");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(45, _c5, ctx.task.priority === 1));
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_solid:minus");
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(47, _c5, ctx.task.priority === 2));
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_mini:arrow-long-up");
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(49, _c6, !ctx.task.dueDate, ctx.task.dueDate && !ctx.isOverdue(), ctx.task.dueDate && ctx.isOverdue()));
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:calendar");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.task.dueDate ? 66 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.task.dueDate ? 67 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "dueDate")("matDatepicker", dueDatePicker_r11);
        \u0275\u0275advance(6);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(3);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "notes")("spellcheck", false);
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
      MatButtonModule,
      MatButton,
      MatIconAnchor,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      RouterLink,
      MatDividerModule,
      MatDivider,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSuffix,
      MatInputModule,
      MatInput,
      CdkTextareaAutosize,
      TextFieldModule,
      MatRippleModule,
      MatRipple,
      MatCheckboxModule,
      MatCheckbox,
      NgClass,
      MatDatepickerModule,
      MatDatepicker,
      MatDatepickerInput,
      MatDatepickerActions,
      MatDatepickerCancel,
      MatDatepickerApply,
      FuseFindByKeyPipe,
      DatePipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksDetailsComponent, { className: "TasksDetailsComponent", filePath: "src/app/modules/admin/apps/tasks/details/details.component.ts", lineNumber: 74 });
})();

// src/app/modules/admin/apps/tasks/tasks.component.ts
var TasksComponent = class _TasksComponent {
  /**
   * Constructor
   */
  constructor() {
  }
  static {
    this.\u0275fac = function TasksComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _TasksComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TasksComponent, selectors: [["tasks"]], decls: 1, vars: 0, template: function TasksComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TasksComponent, { className: "TasksComponent", filePath: "src/app/modules/admin/apps/tasks/tasks.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin/apps/tasks/tasks.routes.ts
var taskResolver = (route, state) => {
  const tasksService = inject(TasksService);
  const router = inject(Router);
  return tasksService.getTaskById(route.paramMap.get("id")).pipe(
    // Error here means the requested task is not available
    catchError((error) => {
      console.error(error);
      const parentUrl = state.url.split("/").slice(0, -1).join("/");
      router.navigateByUrl(parentUrl);
      return throwError(error);
    })
  );
};
var canDeactivateTasksDetails = (component, currentRoute, currentState, nextState) => {
  let nextRoute = nextState.root;
  while (nextRoute.firstChild) {
    nextRoute = nextRoute.firstChild;
  }
  if (!nextState.url.includes("/tasks")) {
    return true;
  }
  if (nextRoute.paramMap.get("id")) {
    return true;
  }
  return component.closeDrawer().then(() => true);
};
var tasks_routes_default = [
  {
    path: "",
    component: TasksComponent,
    resolve: {
      tags: () => inject(TasksService).getTags()
    },
    children: [
      {
        path: "",
        component: TasksListComponent,
        resolve: {
          tasks: () => inject(TasksService).getTasks()
        },
        children: [
          {
            path: ":id",
            component: TasksDetailsComponent,
            resolve: {
              task: taskResolver
            },
            canDeactivate: [canDeactivateTasksDetails]
          }
        ]
      }
    ]
  }
];
export {
  tasks_routes_default as default
};
//# sourceMappingURL=chunk-7B2HYS2Z.js.map
