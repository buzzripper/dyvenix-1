import {
  FuseMasonryComponent
} from "./chunk-3O4PN336.js";
import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule
} from "./chunk-74A4XWO4.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef
} from "./chunk-M6DXA547.js";
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
  cloneDeep_default
} from "./chunk-YHH4B3V4.js";
import "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-LCOBNKPY.js";
import {
  CdkTextareaAutosize,
  MatInput,
  MatInputModule,
  TextFieldModule
} from "./chunk-GIY2YYWB.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-2W4O77WS.js";
import "./chunk-BNTOCQMY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  RequiredValidator
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
  MatRipple,
  MatRippleModule
} from "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import "./chunk-HKG3E5RP.js";
import "./chunk-WH7F4HUX.js";
import {
  RouterOutlet
} from "./chunk-WTEW5YKI.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  AsyncPipe,
  NgClass
} from "./chunk-M6AYR6A2.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  Subject,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  filter,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/apps/notes/notes.service.ts
var NotesService = class _NotesService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._labels = new BehaviorSubject(null);
    this._note = new BehaviorSubject(null);
    this._notes = new BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for labels
   */
  get labels$() {
    return this._labels.asObservable();
  }
  /**
   * Getter for notes
   */
  get notes$() {
    return this._notes.asObservable();
  }
  /**
   * Getter for note
   */
  get note$() {
    return this._note.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get labels
   */
  getLabels() {
    return this._httpClient.get("api/apps/notes/labels").pipe(tap((response) => {
      this._labels.next(response);
    }));
  }
  /**
   * Add label
   *
   * @param title
   */
  addLabel(title) {
    return this._httpClient.post("api/apps/notes/labels", { title }).pipe(tap((labels) => {
      this._labels.next(labels);
    }));
  }
  /**
   * Update label
   *
   * @param label
   */
  updateLabel(label) {
    return this._httpClient.patch("api/apps/notes/labels", { label }).pipe(tap((labels) => {
      this.getNotes().subscribe();
      this._labels.next(labels);
    }));
  }
  /**
   * Delete a label
   *
   * @param id
   */
  deleteLabel(id) {
    return this._httpClient.delete("api/apps/notes/labels", { params: { id } }).pipe(tap((labels) => {
      this.getNotes().subscribe();
      this._labels.next(labels);
    }));
  }
  /**
   * Get notes
   */
  getNotes() {
    return this._httpClient.get("api/apps/notes/all").pipe(tap((response) => {
      this._notes.next(response);
    }));
  }
  /**
   * Get note by id
   */
  getNoteById(id) {
    return this._notes.pipe(take(1), map((notes) => {
      const note = notes.find((value) => value.id === id) || null;
      this._note.next(note);
      return note;
    }), switchMap((note) => {
      if (!note) {
        return throwError("Could not found the note with id of " + id + "!");
      }
      return of(note);
    }));
  }
  /**
   * Add task to the given note
   *
   * @param note
   * @param task
   */
  addTask(note, task) {
    return this._httpClient.post("api/apps/notes/tasks", {
      note,
      task
    }).pipe(switchMap(() => this.getNotes().pipe(switchMap(() => this.getNoteById(note.id)))));
  }
  /**
   * Create note
   *
   * @param note
   */
  createNote(note) {
    return this._httpClient.post("api/apps/notes", { note }).pipe(switchMap((response) => this.getNotes().pipe(switchMap(() => this.getNoteById(response.id).pipe(map(() => response))))));
  }
  /**
   * Update the note
   *
   * @param note
   */
  updateNote(note) {
    const updatedNote = cloneDeep_default(note);
    if (updatedNote.labels.length) {
      updatedNote.labels = updatedNote.labels.map((label) => label.id);
    }
    return this._httpClient.patch("api/apps/notes", { updatedNote }).pipe(tap((response) => {
      this.getNotes().subscribe();
    }));
  }
  /**
   * Delete the note
   *
   * @param note
   */
  deleteNote(note) {
    return this._httpClient.delete("api/apps/notes", { params: { id: note.id } }).pipe(map((isDeleted) => {
      this.getNotes().subscribe();
      return isDeleted;
    }));
  }
  static {
    this.\u0275fac = function NotesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotesService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NotesService, factory: _NotesService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/apps/notes/details/details.component.ts
var _c0 = (a0) => ({ "text-secondary line-through": a0 });
function NotesDetailsComponent_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 13)(2, "button", 14);
    \u0275\u0275listener("click", function NotesDetailsComponent_Conditional_1_Conditional_0_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r2);
      const note_r3 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeImage(note_r3));
    });
    \u0275\u0275element(3, "mat-icon", 15);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "img", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:trash");
    \u0275\u0275advance();
    \u0275\u0275property("src", note_r3.image, \u0275\u0275sanitizeUrl);
  }
}
function NotesDetailsComponent_Conditional_1_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-checkbox", 21);
    \u0275\u0275twoWayListener("ngModelChange", function NotesDetailsComponent_Conditional_1_Conditional_6_For_2_Template_mat_checkbox_ngModelChange_1_listener($event) {
      const task_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(task_r7.completed, $event) || (task_r7.completed = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function NotesDetailsComponent_Conditional_1_Conditional_6_For_2_Template_mat_checkbox_change_1_listener() {
      const task_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const note_r3 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateTaskOnNote(note_r3, task_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function NotesDetailsComponent_Conditional_1_Conditional_6_For_2_Template_input_ngModelChange_2_listener($event) {
      const task_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(task_r7.content, $event) || (task_r7.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function NotesDetailsComponent_Conditional_1_Conditional_6_For_2_Template_input_input_2_listener() {
      const task_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const note_r3 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateTaskOnNote(note_r3, task_r7));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-icon", 23);
    \u0275\u0275listener("click", function NotesDetailsComponent_Conditional_1_Conditional_6_For_2_Template_mat_icon_click_3_listener() {
      const task_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const note_r3 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeTaskFromNote(note_r3, task_r7));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary");
    \u0275\u0275twoWayProperty("ngModel", task_r7.completed);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c0, task_r7.completed))("placeholder", "Task");
    \u0275\u0275twoWayProperty("ngModel", task_r7.content);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:x-mark");
  }
}
function NotesDetailsComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, NotesDetailsComponent_Conditional_1_Conditional_6_For_2_Template, 4, 8, "div", 17, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275element(4, "mat-icon", 19);
    \u0275\u0275elementStart(5, "input", 20, 0);
    \u0275\u0275listener("keydown.enter", function NotesDetailsComponent_Conditional_1_Conditional_6_Template_input_keydown_enter_5_listener() {
      \u0275\u0275restoreView(_r5);
      const newTaskInput_r8 = \u0275\u0275reference(6);
      const note_r3 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.addTaskToNote(note_r3, newTaskInput_r8.value);
      return \u0275\u0275resetView(newTaskInput_r8.value = "");
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const note_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(note_r3.tasks);
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:plus");
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", "Add task");
  }
}
function NotesDetailsComponent_Conditional_1_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 24)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-icon", 25);
    \u0275\u0275listener("click", function NotesDetailsComponent_Conditional_1_Conditional_7_For_2_Template_mat_icon_click_3_listener() {
      const label_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const note_r3 = \u0275\u0275nextContext(2);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleLabelOnNote(note_r3, label_r10));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const label_r10 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", label_r10.title, " ");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:x-circle");
  }
}
function NotesDetailsComponent_Conditional_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275repeaterCreate(1, NotesDetailsComponent_Conditional_1_Conditional_7_For_2_Template, 4, 2, "div", 24, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(note_r3.labels);
  }
}
function NotesDetailsComponent_Conditional_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 26);
    \u0275\u0275listener("click", function NotesDetailsComponent_Conditional_1_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const note_r3 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.createNote(note_r3));
    });
    \u0275\u0275text(2, " Save ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("color", "primary")("disabled", !note_r3.title && !note_r3.content);
  }
}
function NotesDetailsComponent_Conditional_1_Conditional_9_Conditional_13_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function NotesDetailsComponent_Conditional_1_Conditional_9_Conditional_13_For_1_Template_button_click_0_listener() {
      const label_r15 = \u0275\u0275restoreView(_r14).$implicit;
      const note_r3 = \u0275\u0275nextContext(3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleLabelOnNote(note_r3, label_r15));
    });
    \u0275\u0275elementStart(1, "span", 18);
    \u0275\u0275element(2, "mat-checkbox", 35);
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const label_r15 = ctx.$implicit;
    const note_r3 = \u0275\u0275nextContext(3);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary")("checked", ctx_r3.isNoteHasLabel(note_r3, label_r15));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(label_r15.title);
  }
}
function NotesDetailsComponent_Conditional_1_Conditional_9_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NotesDetailsComponent_Conditional_1_Conditional_9_Conditional_13_For_1_Template, 5, 3, "button", 33, \u0275\u0275repeaterTrackByIdentity);
  }
  if (rf & 2) {
    \u0275\u0275repeater(ctx);
  }
}
function NotesDetailsComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 27)(2, "div")(3, "input", 28, 1);
    \u0275\u0275listener("change", function NotesDetailsComponent_Conditional_1_Conditional_9_Template_input_change_3_listener() {
      \u0275\u0275restoreView(_r12);
      const imageFileInput_r13 = \u0275\u0275reference(4);
      const note_r3 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.uploadImage(note_r3, imageFileInput_r13.files));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "label", 29);
    \u0275\u0275element(6, "mat-icon", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275listener("click", function NotesDetailsComponent_Conditional_1_Conditional_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const note_r3 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addTasksToNote(note_r3));
    });
    \u0275\u0275element(8, "mat-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 31);
    \u0275\u0275element(10, "mat-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "mat-menu", null, 2);
    \u0275\u0275template(13, NotesDetailsComponent_Conditional_1_Conditional_9_Conditional_13_Template, 2, 0);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 14);
    \u0275\u0275listener("click", function NotesDetailsComponent_Conditional_1_Conditional_9_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r12);
      const note_r3 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.toggleArchiveOnNote(note_r3));
    });
    \u0275\u0275element(16, "mat-icon", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 14);
    \u0275\u0275listener("click", function NotesDetailsComponent_Conditional_1_Conditional_9_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r12);
      const note_r3 = \u0275\u0275nextContext();
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.deleteNote(note_r3));
    });
    \u0275\u0275element(18, "mat-icon", 30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 32);
    \u0275\u0275text(20, "Close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const labelsMenu_r16 = \u0275\u0275reference(12);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("multiple", false)("accept", "image/jpeg, image/png");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:photo");
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_outline:clipboard-document-list");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", labelsMenu_r16);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:tag");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_11_0 = \u0275\u0275pipeBind1(14, 9, ctx_r3.labels$)) ? 13 : -1, tmp_11_0);
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:archive-box");
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_outline:trash");
  }
}
function NotesDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, NotesDetailsComponent_Conditional_1_Conditional_0_Template, 5, 2, "div", 4);
    \u0275\u0275elementStart(1, "div", 5)(2, "div")(3, "input", 6);
    \u0275\u0275twoWayListener("ngModelChange", function NotesDetailsComponent_Conditional_1_Template_input_ngModelChange_3_listener($event) {
      const note_r3 = \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(note_r3.title, $event) || (note_r3.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function NotesDetailsComponent_Conditional_1_Template_input_input_3_listener() {
      const note_r3 = \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateNoteDetails(note_r3));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 7)(5, "textarea", 8);
    \u0275\u0275twoWayListener("ngModelChange", function NotesDetailsComponent_Conditional_1_Template_textarea_ngModelChange_5_listener($event) {
      const note_r3 = \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(note_r3.content, $event) || (note_r3.content = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function NotesDetailsComponent_Conditional_1_Template_textarea_input_5_listener() {
      const note_r3 = \u0275\u0275restoreView(_r1);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateNoteDetails(note_r3));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, NotesDetailsComponent_Conditional_1_Conditional_6_Template, 7, 2, "div", 9)(7, NotesDetailsComponent_Conditional_1_Conditional_7_Template, 3, 0, "div", 10)(8, NotesDetailsComponent_Conditional_1_Conditional_8_Template, 3, 2, "div", 11)(9, NotesDetailsComponent_Conditional_1_Conditional_9_Template, 21, 11, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r3 = ctx;
    \u0275\u0275conditional(note_r3.image ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", "Title");
    \u0275\u0275twoWayProperty("ngModel", note_r3.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", "Note");
    \u0275\u0275twoWayProperty("ngModel", note_r3.content);
    \u0275\u0275advance();
    \u0275\u0275conditional(note_r3.tasks ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(note_r3.labels && note_r3.labels.length ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!note_r3.id ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(note_r3.id ? 9 : -1);
  }
}
var NotesDetailsComponent = class _NotesDetailsComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _data, _notesService, _matDialogRef) {
    this._changeDetectorRef = _changeDetectorRef;
    this._data = _data;
    this._notesService = _notesService;
    this._matDialogRef = _matDialogRef;
    this.noteChanged = new Subject();
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    if (this._data.note.id) {
      this._notesService.getNoteById(this._data.note.id).subscribe();
      this.note$ = this._notesService.note$;
    } else {
      const note = {
        id: null,
        title: "",
        content: "",
        tasks: null,
        image: null,
        reminder: null,
        labels: [],
        archived: false,
        createdAt: null,
        updatedAt: null
      };
      this.note$ = of(note);
    }
    this.labels$ = this._notesService.labels$;
    this.noteChanged.pipe(takeUntil(this._unsubscribeAll), debounceTime(500), switchMap((note) => this._notesService.updateNote(note))).subscribe(() => {
      this._changeDetectorRef.markForCheck();
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
   * Create a new note
   *
   * @param note
   */
  createNote(note) {
    this._notesService.createNote(note).pipe(map(() => {
      this.note$ = this._notesService.note$;
    })).subscribe();
  }
  /**
   * Upload image to given note
   *
   * @param note
   * @param fileList
   */
  uploadImage(note, fileList) {
    if (!fileList.length) {
      return;
    }
    const allowedTypes = ["image/jpeg", "image/png"];
    const file = fileList[0];
    if (!allowedTypes.includes(file.type)) {
      return;
    }
    this._readAsDataURL(file).then((data) => {
      note.image = data;
      this.noteChanged.next(note);
    });
  }
  /**
   * Remove the image on the given note
   *
   * @param note
   */
  removeImage(note) {
    note.image = null;
    this.noteChanged.next(note);
  }
  /**
   * Add an empty tasks array to note
   *
   * @param note
   */
  addTasksToNote(note) {
    if (!note.tasks) {
      note.tasks = [];
    }
  }
  /**
   * Add task to the given note
   *
   * @param note
   * @param task
   */
  addTaskToNote(note, task) {
    if (task.trim() === "") {
      return;
    }
    this._notesService.addTask(note, task).subscribe();
  }
  /**
   * Remove the given task from given note
   *
   * @param note
   * @param task
   */
  removeTaskFromNote(note, task) {
    note.tasks = note.tasks.filter((item) => item.id !== task.id);
    this.noteChanged.next(note);
  }
  /**
   * Update the given task on the given note
   *
   * @param note
   * @param task
   */
  updateTaskOnNote(note, task) {
    if (task.id) {
      this.noteChanged.next(note);
    }
  }
  /**
   * Is the given note has the given label
   *
   * @param note
   * @param label
   */
  isNoteHasLabel(note, label) {
    return !!note.labels.find((item) => item.id === label.id);
  }
  /**
   * Toggle the given label on the given note
   *
   * @param note
   * @param label
   */
  toggleLabelOnNote(note, label) {
    if (this.isNoteHasLabel(note, label)) {
      note.labels = note.labels.filter((item) => item.id !== label.id);
    } else {
      note.labels.push(label);
    }
    this.noteChanged.next(note);
  }
  /**
   * Toggle archived status on the given note
   *
   * @param note
   */
  toggleArchiveOnNote(note) {
    note.archived = !note.archived;
    this.noteChanged.next(note);
    this._matDialogRef.close();
  }
  /**
   * Update the note details
   *
   * @param note
   */
  updateNoteDetails(note) {
    this.noteChanged.next(note);
  }
  /**
   * Delete the given note
   *
   * @param note
   */
  deleteNote(note) {
    this._notesService.deleteNote(note).subscribe((isDeleted) => {
      if (!isDeleted) {
        return;
      }
      this._matDialogRef.close();
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
  // -----------------------------------------------------------------------------------------------------
  // @ Private methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Read the given file for demonstration purposes
   *
   * @param file
   */
  _readAsDataURL(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result);
      };
      reader.onerror = (e) => {
        reject(e);
      };
      reader.readAsDataURL(file);
    });
  }
  static {
    this.\u0275fac = function NotesDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotesDetailsComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(NotesService), \u0275\u0275directiveInject(MatDialogRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesDetailsComponent, selectors: [["notes-details"]], decls: 3, vars: 3, consts: [["newTaskInput", ""], ["imageFileInput", ""], ["labelsMenu", "matMenu"], [1, "-m-6", "flex", "flex-auto", "flex-col", "md:w-160", "md:min-w-160"], [1, "relative", "w-full"], [1, "m-4"], [1, "w-full", "p-2", "text-2xl", 3, "ngModelChange", "input", "placeholder", "ngModel"], [1, "flex", "w-full", "px-2", "py-5"], ["cdkTextareaAutosize", "", 1, "w-full", 3, "ngModelChange", "input", "placeholder", "ngModel"], [1, "mx-2", "mt-4", "space-y-1.5"], [1, "mx-1", "mt-6", "flex", "flex-wrap", "items-center"], [1, "mt-4", "flex", "items-center", "justify-end"], [1, "mt-4", "flex", "items-center", "justify-between"], [1, "absolute", "bottom-0", "right-0", "p-4"], ["mat-icon-button", "", 3, "click"], [1, "text-white", 3, "svgIcon"], [1, "w-full", "object-cover", 3, "src"], [1, "group", "flex", "items-center"], [1, "flex", "items-center"], [1, "text-hint", "-ml-0.5", "icon-size-5", 3, "svgIcon"], [1, "ml-1.5", "w-full", "px-1", "py-0.5", 3, "keydown.enter", "placeholder"], [1, "flex", "items-center", 3, "ngModelChange", "change", "color", "ngModel"], [1, "w-full", "px-1", "py-0.5", 3, "ngModelChange", "input", "ngClass", "placeholder", "ngModel"], [1, "ml-auto", "hidden", "cursor-pointer", "icon-size-5", "group-hover:flex", 3, "click", "svgIcon"], [1, "m-1", "flex", "items-center", "rounded-full", "bg-gray-100", "px-3", "py-0.5", "text-sm", "font-medium", "text-gray-500", "dark:bg-gray-700", "dark:text-gray-300"], [1, "ml-1", "cursor-pointer", "icon-size-4", 3, "click", "svgIcon"], ["mat-flat-button", "", 3, "click", "color", "disabled"], [1, "flex", "items-center", "space-x-2"], ["id", "image-file-input", "type", "file", 1, "pointer-events-none", "invisible", "absolute", "h-0", "w-0", "opacity-0", 3, "change", "multiple", "accept"], ["for", "image-file-input", "matRipple", "", 1, "flex", "h-10", "w-10", "cursor-pointer", "items-center", "justify-center", "rounded-full", "hover:bg-gray-400", "hover:bg-opacity-20", "dark:hover:bg-black", "dark:hover:bg-opacity-5"], [3, "svgIcon"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], ["mat-flat-button", "", "matDialogClose", ""], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], ["disableRipple", "", 1, "pointer-events-none", "flex", "items-center", 3, "color", "checked"], [1, "ml-1", "leading-5"]], template: function NotesDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275template(1, NotesDetailsComponent_Conditional_1_Template, 10, 9);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_0_0 = \u0275\u0275pipeBind1(2, 1, ctx.note$)) ? 1 : -1, tmp_0_0);
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      TextFieldModule,
      CdkTextareaAutosize,
      MatCheckboxModule,
      MatCheckbox,
      NgClass,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatDialogModule,
      MatDialogClose,
      AsyncPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesDetailsComponent, { className: "NotesDetailsComponent", filePath: "src/app/modules/admin/apps/notes/details/details.component.ts", lineNumber: 53 });
})();

// src/app/modules/admin/apps/notes/labels/labels.component.ts
function NotesLabelsComponent_Conditional_12_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "button", 12);
    \u0275\u0275listener("click", function NotesLabelsComponent_Conditional_12_For_1_Template_button_click_1_listener() {
      const label_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.deleteLabel(label_r4.id));
    });
    \u0275\u0275element(2, "mat-icon", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function NotesLabelsComponent_Conditional_12_For_1_Template_input_ngModelChange_3_listener($event) {
      const label_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(label_r4.title, $event) || (label_r4.title = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("input", function NotesLabelsComponent_Conditional_12_For_1_Template_input_input_3_listener() {
      const label_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r4.updateLabel(label_r4));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const label_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_solid:trash");
    \u0275\u0275advance();
    \u0275\u0275property("autocomplete", "off");
    \u0275\u0275twoWayProperty("ngModel", label_r4.title);
  }
}
function NotesLabelsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NotesLabelsComponent_Conditional_12_For_1_Template, 4, 3, "mat-form-field", 11, \u0275\u0275componentInstance().trackByFn, true);
  }
  if (rf & 2) {
    \u0275\u0275repeater(ctx);
  }
}
var NotesLabelsComponent = class _NotesLabelsComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _notesService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._notesService = _notesService;
    this.labelChanged = new Subject();
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.labels$ = this._notesService.labels$;
    this.labelChanged.pipe(takeUntil(this._unsubscribeAll), debounceTime(500), filter((label) => label.title.trim() !== ""), switchMap((label) => this._notesService.updateLabel(label))).subscribe(() => {
      this._changeDetectorRef.markForCheck();
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
   * Add label
   *
   * @param title
   */
  addLabel(title) {
    this._notesService.addLabel(title).subscribe();
  }
  /**
   * Update label
   */
  updateLabel(label) {
    this.labelChanged.next(label);
  }
  /**
   * Delete label
   *
   * @param id
   */
  deleteLabel(id) {
    this._notesService.deleteLabel(id).subscribe(() => {
      this._changeDetectorRef.markForCheck();
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
    this.\u0275fac = function NotesLabelsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotesLabelsComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(NotesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesLabelsComponent, selectors: [["notes-labels"]], decls: 14, vars: 9, consts: [["newLabelInput", ""], [1, "flex", "w-80", "min-w-80", "flex-auto", "flex-col", "p-2", "md:p-4"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-semibold"], ["matDialogClose", "", "mat-icon-button", ""], [3, "svgIcon"], [1, "fuse-mat-dense", "mt-8", "w-full"], ["name", "new-label", "matInput", "", 3, "autocomplete", "placeholder"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "icon-size-5", 3, "svgIcon"], [1, "mt-4", "flex", "flex-col"], [1, "fuse-mat-dense", "w-full"], ["mat-icon-button", "", "matPrefix", "", 3, "click"], ["required", "", "matInput", "", 3, "ngModelChange", "input", "autocomplete", "ngModel"]], template: function NotesLabelsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275text(3, "Edit labels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 4);
        \u0275\u0275element(5, "mat-icon", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "mat-form-field", 6);
        \u0275\u0275element(7, "input", 7, 0);
        \u0275\u0275elementStart(9, "button", 8);
        \u0275\u0275listener("click", function NotesLabelsComponent_Template_button_click_9_listener() {
          \u0275\u0275restoreView(_r1);
          const newLabelInput_r2 = \u0275\u0275reference(8);
          ctx.addLabel(newLabelInput_r2.value);
          return \u0275\u0275resetView(newLabelInput_r2.value = "");
        });
        \u0275\u0275element(10, "mat-icon", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 10);
        \u0275\u0275template(12, NotesLabelsComponent_Conditional_12_Template, 2, 0);
        \u0275\u0275pipe(13, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_6_0;
        const newLabelInput_r2 = \u0275\u0275reference(8);
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_outline:x-mark");
        \u0275\u0275advance(2);
        \u0275\u0275property("autocomplete", "off")("placeholder", "Create new label");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("invisible", newLabelInput_r2.value.trim() === "");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:check-circle");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_6_0 = \u0275\u0275pipeBind1(13, 7, ctx.labels$)) ? 12 : -1, tmp_6_0);
      }
    }, dependencies: [MatButtonModule, MatIconButton, MatDialogModule, MatDialogClose, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatPrefix, MatSuffix, MatInputModule, MatInput, FormsModule, DefaultValueAccessor, NgControlStatus, RequiredValidator, NgModel, AsyncPipe], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesLabelsComponent, { className: "NotesLabelsComponent", filePath: "src/app/modules/admin/apps/notes/labels/labels.component.ts", lineNumber: 42 });
})();

// src/app/modules/admin/apps/notes/list/list.component.ts
var _c02 = (a0, a1) => ({ "bg-gray-200 text-primary dark:bg-gray-700 dark:text-primary-400": a0, "text-hint hover:bg-hover": a1 });
var _c1 = (a0) => ({ "text-secondary line-through": a0 });
function NotesListComponent_Conditional_14_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275listener("click", function NotesListComponent_Conditional_14_For_1_Template_div_click_0_listener() {
      const label_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.filterByLabel(label_r3.id));
    });
    \u0275\u0275element(1, "mat-icon", 9);
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const label_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(4, _c02, "label:" + label_r3.id === ctx_r3.filterStatus, "label:" + label_r3.id !== ctx_r3.filterStatus))("matRippleDisabled", "label:" + label_r3.id === ctx_r3.filterStatus);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:tag");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", label_r3.title, " ");
  }
}
function NotesListComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NotesListComponent_Conditional_14_For_1_Template, 4, 7, "div", 27, \u0275\u0275componentInstance().trackByFn, true);
  }
  if (rf & 2) {
    \u0275\u0275repeater(ctx);
  }
}
function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 32);
  }
  if (rf & 2) {
    const note_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", note_r8.image, \u0275\u0275sanitizeUrl);
  }
}
function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", note_r8.title, " ");
  }
}
function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("text-xl", note_r8.content.length < 70);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", note_r8.content, " ");
  }
}
function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_5_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "div", 41);
    \u0275\u0275elementEnd();
  }
}
function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_5_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 39);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:check-circle");
  }
}
function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_5_For_2_Conditional_1_Template, 2, 0, "div", 38)(2, NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_5_For_2_Conditional_2_Template, 1, 1, "mat-icon", 39);
    \u0275\u0275elementStart(3, "div", 40);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const task_r9 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(!task_r9.completed ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(task_r9.completed ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(4, _c1, task_r9.completed));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", task_r9.content, " ");
  }
}
function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275repeaterCreate(1, NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_5_For_2_Template, 5, 6, "div", 16, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(note_r8.tasks);
  }
}
function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", label_r10.title, " ");
  }
}
function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37);
    \u0275\u0275repeaterCreate(1, NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_6_For_2_Template, 2, 1, "div", 42, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const note_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(note_r8.labels);
  }
}
function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("click", function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Template_div_click_0_listener() {
      const note_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r3.openNoteDialog(note_r8));
    });
    \u0275\u0275template(1, NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_1_Template, 1, 1, "img", 32);
    \u0275\u0275elementStart(2, "div", 33);
    \u0275\u0275template(3, NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_3_Template, 2, 1, "div", 34)(4, NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_4_Template, 2, 3, "div", 35)(5, NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_5_Template, 3, 0, "div", 36)(6, NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Conditional_6_Template, 3, 0, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const note_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275conditional(note_r8.image ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(note_r8.title ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(note_r8.content ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(note_r8.tasks ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(note_r8.labels ? 6 : -1);
  }
}
function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275repeaterCreate(1, NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_For_2_Template, 7, 5, "div", 30, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const column_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275repeater(column_r11.items);
  }
}
function NotesListComponent_Conditional_34_Conditional_0_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NotesListComponent_Conditional_34_Conditional_0_ng_template_1_For_1_Template, 3, 0, "div", 29, \u0275\u0275componentInstance().trackByFn, true);
  }
  if (rf & 2) {
    const columns_r12 = ctx.$implicit;
    \u0275\u0275repeater(columns_r12);
  }
}
function NotesListComponent_Conditional_34_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-masonry", 28);
    \u0275\u0275template(1, NotesListComponent_Conditional_34_Conditional_0_ng_template_1_Template, 2, 0, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const columnsTemplate_r13 = \u0275\u0275reference(2);
    const notes_r14 = \u0275\u0275nextContext();
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("items", notes_r14)("columns", ctx_r3.masonryColumns)("columnsTemplate", columnsTemplate_r13);
  }
}
function NotesListComponent_Conditional_34_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "mat-icon", 43);
    \u0275\u0275elementStart(2, "div", 44);
    \u0275\u0275text(3, " There are no notes! ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:document");
  }
}
function NotesListComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NotesListComponent_Conditional_34_Conditional_0_Template, 3, 3, "fuse-masonry", 28)(1, NotesListComponent_Conditional_34_Conditional_1_Template, 4, 1, "div", 26);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length ? 0 : 1);
  }
}
function NotesListComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 44);
    \u0275\u0275text(2, " Loading... ");
    \u0275\u0275elementEnd()();
  }
}
var NotesListComponent = class _NotesListComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _fuseMediaWatcherService, _matDialog, _notesService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this._matDialog = _matDialog;
    this._notesService = _notesService;
    this.drawerMode = "side";
    this.drawerOpened = true;
    this.filter$ = new BehaviorSubject("notes");
    this.searchQuery$ = new BehaviorSubject(null);
    this.masonryColumns = 4;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get the filter status
   */
  get filterStatus() {
    return this.filter$.value;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._notesService.getLabels().subscribe();
    this._notesService.getNotes().subscribe();
    this.labels$ = this._notesService.labels$;
    this.notes$ = combineLatest([
      this._notesService.notes$,
      this.filter$,
      this.searchQuery$
    ]).pipe(distinctUntilChanged(), map(([notes, filter2, searchQuery]) => {
      if (!notes || !notes.length) {
        return;
      }
      let filteredNotes = notes;
      if (searchQuery) {
        searchQuery = searchQuery.trim().toLowerCase();
        filteredNotes = filteredNotes.filter((note) => note.title.toLowerCase().includes(searchQuery) || note.content.toLowerCase().includes(searchQuery));
      }
      if (filter2 === "notes") {
      }
      const isArchive = filter2 === "archived";
      filteredNotes = filteredNotes.filter((note) => note.archived === isArchive);
      if (filter2.startsWith("label:")) {
        const labelId = filter2.split(":")[1];
        filteredNotes = filteredNotes.filter((note) => !!note.labels.find((item) => item.id === labelId));
      }
      return filteredNotes;
    }));
    this._fuseMediaWatcherService.onMediaChange$.pipe(takeUntil(this._unsubscribeAll)).subscribe(({ matchingAliases }) => {
      if (matchingAliases.includes("lg")) {
        this.drawerMode = "side";
        this.drawerOpened = true;
      } else {
        this.drawerMode = "over";
        this.drawerOpened = false;
      }
      if (matchingAliases.includes("xl")) {
        this.masonryColumns = 5;
      } else if (matchingAliases.includes("lg")) {
        this.masonryColumns = 4;
      } else if (matchingAliases.includes("md")) {
        this.masonryColumns = 3;
      } else if (matchingAliases.includes("sm")) {
        this.masonryColumns = 2;
      } else {
        this.masonryColumns = 1;
      }
      this._changeDetectorRef.markForCheck();
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
   * Add a new note
   */
  addNewNote() {
    this._matDialog.open(NotesDetailsComponent, {
      autoFocus: false,
      data: {
        note: {}
      }
    });
  }
  /**
   * Open the edit labels dialog
   */
  openEditLabelsDialog() {
    this._matDialog.open(NotesLabelsComponent, { autoFocus: false });
  }
  /**
   * Open the note dialog
   */
  openNoteDialog(note) {
    this._matDialog.open(NotesDetailsComponent, {
      autoFocus: false,
      data: {
        note: cloneDeep_default(note)
      }
    });
  }
  /**
   * Filter by archived
   */
  filterByArchived() {
    this.filter$.next("archived");
  }
  /**
   * Filter by label
   *
   * @param labelId
   */
  filterByLabel(labelId) {
    const filterValue = `label:${labelId}`;
    this.filter$.next(filterValue);
  }
  /**
   * Filter by query
   *
   * @param query
   */
  filterByQuery(query) {
    this.searchQuery$.next(query);
  }
  /**
   * Reset filter
   */
  resetFilter() {
    this.filter$.next("notes");
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
    this.\u0275fac = function NotesListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotesListComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FuseMediaWatcherService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(NotesService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesListComponent, selectors: [["notes-list"]], decls: 37, vars: 28, consts: [["drawer", ""], ["searchInput", ""], ["columnsTemplate", ""], [1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-hidden"], [1, "bg-card", "h-full", "flex-auto", "dark:bg-transparent"], [1, "bg-default", "w-2/3", "border-r-0", "sm:w-72", "lg:w-56", 3, "mode", "opened"], [1, "p-6", "lg:py-8", "lg:pl-4", "lg:pr-0"], [1, "space-y-2"], ["matRipple", "", 1, "relative", "flex", "cursor-pointer", "items-center", "rounded-full", "px-4", "py-2", "font-medium", 3, "click", "ngClass", "matRippleDisabled"], [1, "text-current", 3, "svgIcon"], [1, "text-default", "ml-3", "select-none", "leading-5"], ["matRipple", "", 1, "relative", "flex", "cursor-pointer", "items-center", "rounded-full", "px-4", "py-2", "font-medium", "hover:bg-hover", 3, "click"], [1, "text-hint", 3, "svgIcon"], [1, "ml-3", "select-none", "leading-5"], [1, "flex", "flex-col", "bg-gray-100", "dark:bg-transparent"], [1, "flex", "flex-auto", "flex-col", "p-6", "md:p-8"], [1, "flex", "items-center"], [1, "flex", "flex-auto", "items-center"], ["mat-icon-button", "", 1, "-ml-2", "flex", "lg:hidden", 3, "click"], [3, "svgIcon"], [1, "fuse-mat-rounded", "fuse-mat-dense", "ml-4", "flex-auto", "lg:ml-0", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "ml-4", "min-w-10", "px-1", "sm:px-4", 3, "click", "color"], [1, "icon-size-5", 3, "svgIcon"], [1, "ml-2", "hidden", "sm:inline-block"], [1, "flex", "flex-auto", "flex-col", "items-center", "justify-center", "bg-gray-100", "dark:bg-transparent"], ["matRipple", "", 1, "relative", "flex", "cursor-pointer", "items-center", "rounded-full", "px-4", "py-2", "font-medium", 3, "ngClass", "matRippleDisabled"], [1, "-mx-2", "mt-8", 3, "items", "columns", "columnsTemplate"], [1, "flex-1", "space-y-4", "px-2"], [1, "bg-card", "flex", "cursor-pointer", "flex-col", "overflow-hidden", "rounded-2xl", "shadow"], [1, "bg-card", "flex", "cursor-pointer", "flex-col", "overflow-hidden", "rounded-2xl", "shadow", 3, "click"], [1, "w-full", "object-cover", 3, "src"], [1, "flex", "flex-auto", "flex-col", "space-y-4", "p-6"], [1, "line-clamp-3", "font-semibold"], [3, "text-xl"], [1, "space-y-1.5"], [1, "-m-1", "flex", "flex-wrap", "items-center"], [1, "flex", "h-5", "w-5", "items-center", "justify-center"], [1, "text-hint", "icon-size-5", 3, "svgIcon"], [1, "ml-1.5", "leading-5", 3, "ngClass"], [1, "h-4", "w-4", "rounded-full", "border-2"], [1, "m-1", "rounded-full", "bg-gray-100", "px-3", "py-0.5", "text-sm", "font-medium", "text-gray-500", "dark:bg-gray-700", "dark:text-gray-300"], [1, "icon-size-24", 3, "svgIcon"], [1, "text-secondary", "mt-4", "text-2xl", "font-semibold", "tracking-tight"]], template: function NotesListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "mat-drawer-container", 4)(2, "mat-drawer", 5, 0)(4, "div", 6)(5, "div", 7)(6, "div", 8);
        \u0275\u0275listener("click", function NotesListComponent_Template_div_click_6_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.resetFilter());
        });
        \u0275\u0275element(7, "mat-icon", 9);
        \u0275\u0275elementStart(8, "div", 10);
        \u0275\u0275text(9, " Notes ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div", 8);
        \u0275\u0275listener("click", function NotesListComponent_Template_div_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterByArchived());
        });
        \u0275\u0275element(11, "mat-icon", 9);
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275text(13, " Archive ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(14, NotesListComponent_Conditional_14_Template, 2, 0);
        \u0275\u0275pipe(15, "async");
        \u0275\u0275elementStart(16, "div", 11);
        \u0275\u0275listener("click", function NotesListComponent_Template_div_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.openEditLabelsDialog());
        });
        \u0275\u0275element(17, "mat-icon", 12);
        \u0275\u0275elementStart(18, "div", 13);
        \u0275\u0275text(19, " Edit labels ");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "mat-drawer-content", 14)(21, "div", 15)(22, "div", 16)(23, "div", 17)(24, "button", 18);
        \u0275\u0275listener("click", function NotesListComponent_Template_button_click_24_listener() {
          \u0275\u0275restoreView(_r1);
          const drawer_r5 = \u0275\u0275reference(3);
          return \u0275\u0275resetView(drawer_r5.toggle());
        });
        \u0275\u0275element(25, "mat-icon", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "mat-form-field", 20);
        \u0275\u0275element(27, "mat-icon", 21);
        \u0275\u0275elementStart(28, "input", 22, 1);
        \u0275\u0275listener("input", function NotesListComponent_Template_input_input_28_listener() {
          \u0275\u0275restoreView(_r1);
          const searchInput_r6 = \u0275\u0275reference(29);
          return \u0275\u0275resetView(ctx.filterByQuery(searchInput_r6.value));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(30, "button", 23);
        \u0275\u0275listener("click", function NotesListComponent_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.addNewNote());
        });
        \u0275\u0275element(31, "mat-icon", 24);
        \u0275\u0275elementStart(32, "span", 25);
        \u0275\u0275text(33, "New note");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(34, NotesListComponent_Conditional_34_Template, 2, 1);
        \u0275\u0275pipe(35, "async");
        \u0275\u0275template(36, NotesListComponent_Conditional_36_Template, 3, 0, "div", 26);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        let tmp_10_0;
        let tmp_19_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        \u0275\u0275advance(4);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(22, _c02, ctx.filterStatus === "notes", ctx.filterStatus !== "notes"))("matRippleDisabled", ctx.filterStatus === "notes");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:pencil-square");
        \u0275\u0275advance(3);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(25, _c02, ctx.filterStatus === "archived", ctx.filterStatus !== "archived"))("matRippleDisabled", ctx.filterStatus === "archived");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:archive-box");
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_10_0 = \u0275\u0275pipeBind1(15, 18, ctx.labels$)) ? 14 : -1, tmp_10_0);
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_outline:pencil");
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance();
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
        \u0275\u0275advance();
        \u0275\u0275property("autocomplete", "off")("placeholder", "Search notes");
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:plus-circle");
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_19_0 = \u0275\u0275pipeBind1(35, 20, ctx.notes$)) ? 34 : 36, tmp_19_0);
      }
    }, dependencies: [
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      MatRippleModule,
      MatRipple,
      NgClass,
      MatIconModule,
      MatIcon,
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      FuseMasonryComponent,
      AsyncPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesListComponent, { className: "NotesListComponent", filePath: "src/app/modules/admin/apps/notes/list/list.component.ts", lineNumber: 51 });
})();

// src/app/modules/admin/apps/notes/notes.component.ts
var NotesComponent = class _NotesComponent {
  /**
   * Constructor
   */
  constructor() {
  }
  static {
    this.\u0275fac = function NotesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NotesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotesComponent, selectors: [["notes"]], decls: 1, vars: 0, template: function NotesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotesComponent, { className: "NotesComponent", filePath: "src/app/modules/admin/apps/notes/notes.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin/apps/notes/notes.routes.ts
var notes_routes_default = [
  {
    path: "",
    component: NotesComponent,
    children: [
      {
        path: "",
        component: NotesListComponent
      }
    ]
  }
];
export {
  notes_routes_default as default
};
//# sourceMappingURL=chunk-2TVZOBLK.js.map
