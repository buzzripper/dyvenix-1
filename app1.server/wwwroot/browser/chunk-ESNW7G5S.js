import {
  CdkDrag,
  CdkDragHandle,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
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
  FuseConfirmationService
} from "./chunk-7Z6ZIB4I.js";
import {
  MatDialog,
  MatDialogRef
} from "./chunk-M6DXA547.js";
import {
  DateTime
} from "./chunk-BY5HPQZY.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-BOL35CP3.js";
import {
  assign_default
} from "./chunk-YHH4B3V4.js";
import "./chunk-XRKJUGQI.js";
import {
  CdkScrollable
} from "./chunk-7WCFMFZI.js";
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
import "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import "./chunk-WH7F4HUX.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet
} from "./chunk-WTEW5YKI.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  DatePipe,
  NgClass
} from "./chunk-M6AYR6A2.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  EventEmitter,
  Subject,
  catchError,
  debounceTime,
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
  ɵɵpipeBind2,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import {
  __spreadValues
} from "./chunk-N6ESDQJH.js";

// src/app/modules/admin/apps/scrumboard/scrumboard.models.ts
var Board = class {
  /**
   * Constructor
   */
  constructor(board) {
    this.id = board.id || null;
    this.title = board.title;
    this.description = board.description || null;
    this.icon = board.icon || null;
    this.lastActivity = board.lastActivity || null;
    this.lists = [];
    this.labels = [];
    this.members = [];
    if (board.lists) {
      this.lists = board.lists.map((list) => {
        if (!(list instanceof List)) {
          return new List(list);
        }
        return list;
      });
    }
    if (board.labels) {
      this.labels = board.labels.map((label) => {
        if (!(label instanceof Label)) {
          return new Label(label);
        }
        return label;
      });
    }
    if (board.members) {
      this.members = board.members.map((member) => {
        if (!(member instanceof Member)) {
          return new Member(member);
        }
        return member;
      });
    }
  }
};
var List = class {
  /**
   * Constructor
   */
  constructor(list) {
    this.id = list.id || null;
    this.boardId = list.boardId;
    this.position = list.position;
    this.title = list.title;
    this.cards = [];
    if (list.cards) {
      this.cards = list.cards.map((card) => {
        if (!(card instanceof Card)) {
          return new Card(card);
        }
        return card;
      });
    }
  }
};
var Card = class {
  /**
   * Constructor
   */
  constructor(card) {
    this.id = card.id || null;
    this.boardId = card.boardId;
    this.listId = card.listId;
    this.position = card.position;
    this.title = card.title;
    this.description = card.description || null;
    this.labels = [];
    this.dueDate = card.dueDate || null;
    if (card.labels) {
      this.labels = card.labels.map((label) => {
        if (!(label instanceof Label)) {
          return new Label(label);
        }
        return label;
      });
    }
  }
};
var Member = class {
  /**
   * Constructor
   */
  constructor(member) {
    this.id = member.id || null;
    this.name = member.name;
    this.avatar = member.avatar || null;
  }
};
var Label = class {
  /**
   * Constructor
   */
  constructor(label) {
    this.id = label.id || null;
    this.boardId = label.boardId;
    this.title = label.title;
  }
};

// src/app/modules/admin/apps/scrumboard/board/add-card/add-card.component.ts
var _c0 = ["titleInput"];
var _c1 = ["titleAutosize"];
var _c2 = (a0) => ({ "pointer-events-none opacity-0": a0 });
var _c3 = (a0) => ({ "opacity-0": a0 });
var ScrumboardBoardAddCardComponent = class _ScrumboardBoardAddCardComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _formBuilder) {
    this._changeDetectorRef = _changeDetectorRef;
    this._formBuilder = _formBuilder;
    this.buttonTitle = "Add a card";
    this.saved = new EventEmitter();
    this.formVisible = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.form = this._formBuilder.group({
      title: [""]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Save
   */
  save() {
    const title = this.form.get("title").value;
    if (!title || title.trim() === "") {
      return;
    }
    this.saved.next(title.trim());
    this.formVisible = false;
    this.form.get("title").setValue("");
    setTimeout(() => {
      this.titleInput.nativeElement.value = "";
      this.titleAutosize.reset();
    });
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Toggle the visibility of the form
   */
  toggleFormVisibility() {
    this.formVisible = !this.formVisible;
    if (this.formVisible) {
      this.titleInput.nativeElement.focus();
    }
  }
  static {
    this.\u0275fac = function ScrumboardBoardAddCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrumboardBoardAddCardComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrumboardBoardAddCardComponent, selectors: [["scrumboard-board-add-card"]], viewQuery: function ScrumboardBoardAddCardComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleAutosize = _t.first);
      }
    }, inputs: { buttonTitle: "buttonTitle" }, outputs: { saved: "saved" }, decls: 17, vars: 18, consts: [["titleInput", "", "titleAutosize", "cdkTextareaAutosize"], [1, "p-3", "pt-0"], [1, "relative", "flex", "h-full", "w-full", "rounded-lg"], ["mat-button", "", "disableRipple", "", 1, "absolute", "inset-0", "w-full", "justify-start", "rounded-lg", 3, "click", "ngClass"], [1, "icon-size-5", 3, "svgIcon"], [1, "text-secondary", "ml-2"], [1, "flex", "w-full", "flex-col", "items-start", 3, "ngClass", "formGroup"], [1, "bg-card", "flex", "w-full", "rounded-lg", "p-5", "shadow"], ["cdkTextareaAutosize", "", 1, "w-full", "text-lg", "font-medium", "leading-5", 3, "keydown.enter", "spellcheck", "formControlName", "placeholder"], [1, "mt-2", "flex", "items-center"], ["mat-flat-button", "", 1, "h-8", "min-h-8", 3, "click", "color", "type"], ["mat-icon-button", "", 1, "ml-1", "h-8", "min-h-8", "w-8", 3, "click", "type"], [1, "icon-size-4", 3, "svgIcon"]], template: function ScrumboardBoardAddCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
        \u0275\u0275listener("click", function ScrumboardBoardAddCardComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleFormVisibility());
        });
        \u0275\u0275element(3, "mat-icon", 4);
        \u0275\u0275elementStart(4, "span", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 6)(7, "div", 7)(8, "textarea", 8, 0);
        \u0275\u0275listener("keydown.enter", function ScrumboardBoardAddCardComponent_Template_textarea_keydown_enter_8_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.save());
        });
        \u0275\u0275text(11, "                ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 9)(13, "button", 10);
        \u0275\u0275listener("click", function ScrumboardBoardAddCardComponent_Template_button_click_13_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.save());
        });
        \u0275\u0275text(14, " Add card ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "button", 11);
        \u0275\u0275listener("click", function ScrumboardBoardAddCardComponent_Template_button_click_15_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleFormVisibility());
        });
        \u0275\u0275element(16, "mat-icon", 12);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("h-13", !ctx.formVisible);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c2, ctx.formVisible));
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:plus-circle");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.buttonTitle);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c3, !ctx.formVisible))("formGroup", ctx.form);
        \u0275\u0275advance(2);
        \u0275\u0275property("spellcheck", "off")("formControlName", "title")("placeholder", "Enter card title...");
        \u0275\u0275advance(5);
        \u0275\u0275property("color", "primary")("type", "button");
        \u0275\u0275advance(2);
        \u0275\u0275property("type", "button");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:x-mark");
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatIconButton,
      NgClass,
      MatIconModule,
      MatIcon,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      TextFieldModule,
      CdkTextareaAutosize
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrumboardBoardAddCardComponent, { className: "ScrumboardBoardAddCardComponent", filePath: "src/app/modules/admin/apps/scrumboard/board/add-card/add-card.component.ts", lineNumber: 38 });
})();

// src/app/modules/admin/apps/scrumboard/board/add-list/add-list.component.ts
var _c02 = ["titleInput"];
var _c12 = (a0) => ({ "pointer-events-none opacity-0": a0 });
var _c22 = (a0) => ({ "opacity-0": a0 });
var ScrumboardBoardAddListComponent = class _ScrumboardBoardAddListComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _formBuilder) {
    this._changeDetectorRef = _changeDetectorRef;
    this._formBuilder = _formBuilder;
    this.buttonTitle = "Add a list";
    this.saved = new EventEmitter();
    this.formVisible = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.form = this._formBuilder.group({
      title: [""]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Save
   */
  save() {
    const title = this.form.get("title").value;
    if (!title || title.trim() === "") {
      return;
    }
    this.saved.next(title.trim());
    this.form.get("title").setValue("");
    this.formVisible = false;
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Toggle the visibility of the form
   */
  toggleFormVisibility() {
    this.formVisible = !this.formVisible;
    if (this.formVisible) {
      this.titleInput.nativeElement.focus();
    }
  }
  static {
    this.\u0275fac = function ScrumboardBoardAddListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrumboardBoardAddListComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrumboardBoardAddListComponent, selectors: [["scrumboard-board-add-list"]], viewQuery: function ScrumboardBoardAddListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.titleInput = _t.first);
      }
    }, inputs: { buttonTitle: "buttonTitle" }, outputs: { saved: "saved" }, decls: 14, vars: 18, consts: [["titleInput", ""], [1, "mt-11", "w-64", "px-2", "py-2.5"], [1, "relative", "flex", "h-full", "w-full", "overflow-hidden", "rounded-xl", "bg-gray-200", "dark:bg-gray-700"], ["mat-button", "", "disableRipple", "", 1, "absolute", "inset-0", "w-full", "justify-start", "rounded-xl", "bg-transparent", "px-3", 3, "click", "ngClass"], [1, "icon-size-5", 3, "svgIcon"], [1, "text-secondary", "ml-2"], [1, "flex", "w-full", "flex-col", "items-start", "p-3", 3, "ngClass", "formGroup"], [1, "w-full", "rounded-md", "border", "border-gray-300", "bg-white", "px-3", "py-2", "leading-5", "shadow-sm", "focus:border-primary", "dark:border-gray-500", "dark:bg-black", "dark:bg-opacity-5", "dark:focus:border-primary", 3, "keydown.enter", "autocomplete", "formControlName", "placeholder"], [1, "mt-2", "flex", "items-center"], ["mat-flat-button", "", 1, "h-8", "min-h-8", 3, "click", "color", "type"], ["mat-icon-button", "", 1, "ml-1", "h-8", "min-h-8", "w-8", 3, "click", "type"], [1, "icon-size-4", 3, "svgIcon"]], template: function ScrumboardBoardAddListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
        \u0275\u0275listener("click", function ScrumboardBoardAddListComponent_Template_button_click_2_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleFormVisibility());
        });
        \u0275\u0275element(3, "mat-icon", 4);
        \u0275\u0275elementStart(4, "span", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 6)(7, "input", 7, 0);
        \u0275\u0275listener("keydown.enter", function ScrumboardBoardAddListComponent_Template_input_keydown_enter_7_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.save());
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 8)(10, "button", 9);
        \u0275\u0275listener("click", function ScrumboardBoardAddListComponent_Template_button_click_10_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.save());
        });
        \u0275\u0275text(11, " Add list ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 10);
        \u0275\u0275listener("click", function ScrumboardBoardAddListComponent_Template_button_click_12_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleFormVisibility());
        });
        \u0275\u0275element(13, "mat-icon", 11);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("h-15", !ctx.formVisible);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(14, _c12, ctx.formVisible));
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:plus-circle");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.buttonTitle);
        \u0275\u0275advance();
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(16, _c22, !ctx.formVisible))("formGroup", ctx.form);
        \u0275\u0275advance();
        \u0275\u0275property("autocomplete", "off")("formControlName", "title")("placeholder", "Enter list title...");
        \u0275\u0275advance(3);
        \u0275\u0275property("color", "primary")("type", "button");
        \u0275\u0275advance(2);
        \u0275\u0275property("type", "button");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:x-mark");
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatIconButton,
      NgClass,
      MatIconModule,
      MatIcon,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrumboardBoardAddListComponent, { className: "ScrumboardBoardAddListComponent", filePath: "src/app/modules/admin/apps/scrumboard/board/add-list/add-list.component.ts", lineNumber: 36 });
})();

// src/app/modules/admin/apps/scrumboard/scrumboard.service.ts
var ScrumboardService = class _ScrumboardService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._board = new BehaviorSubject(null);
    this._boards = new BehaviorSubject(null);
    this._card = new BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for board
   */
  get board$() {
    return this._board.asObservable();
  }
  /**
   * Getter for boards
   */
  get boards$() {
    return this._boards.asObservable();
  }
  /**
   * Getter for card
   */
  get card$() {
    return this._card.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get boards
   */
  getBoards() {
    return this._httpClient.get("api/apps/scrumboard/boards").pipe(map((response) => response.map((item) => new Board(item))), tap((boards) => this._boards.next(boards)));
  }
  /**
   * Get board
   *
   * @param id
   */
  getBoard(id) {
    return this._httpClient.get("api/apps/scrumboard/board", { params: { id } }).pipe(map((response) => new Board(response)), tap((board) => this._board.next(board)));
  }
  /**
   * Create board
   *
   * @param board
   */
  createBoard(board) {
    return this.boards$.pipe(take(1), switchMap((boards) => this._httpClient.put("api/apps/scrumboard/board", { board }).pipe(map((newBoard) => {
      this._boards.next([...boards, newBoard]);
      return newBoard;
    }))));
  }
  /**
   * Update the board
   *
   * @param id
   * @param board
   */
  updateBoard(id, board) {
    return this.boards$.pipe(take(1), switchMap((boards) => this._httpClient.patch("api/apps/scrumboard/board", {
      id,
      board
    }).pipe(map((updatedBoard) => {
      const index = boards.findIndex((item) => item.id === id);
      boards[index] = updatedBoard;
      this._boards.next(boards);
      return updatedBoard;
    }))));
  }
  /**
   * Delete the board
   *
   * @param id
   */
  deleteBoard(id) {
    return this.boards$.pipe(take(1), switchMap((boards) => this._httpClient.delete("api/apps/scrumboard/board", { params: { id } }).pipe(map((isDeleted) => {
      const index = boards.findIndex((item) => item.id === id);
      boards.splice(index, 1);
      this._boards.next(boards);
      this._board.next(null);
      this._card.next(null);
      return isDeleted;
    }))));
  }
  /**
   * Create list
   *
   * @param list
   */
  createList(list) {
    return this._httpClient.post("api/apps/scrumboard/board/list", { list }).pipe(map((response) => new List(response)), tap((newList) => {
      const board = this._board.value;
      board.lists = [...board.lists, newList];
      board.lists.sort((a, b) => a.position - b.position);
      this._board.next(board);
    }));
  }
  /**
   * Update the list
   *
   * @param list
   */
  updateList(list) {
    return this._httpClient.patch("api/apps/scrumboard/board/list", { list }).pipe(map((response) => new List(response)), tap((updatedList) => {
      const board = this._board.value;
      const index = board.lists.findIndex((item) => item.id === list.id);
      board.lists[index] = updatedList;
      board.lists.sort((a, b) => a.position - b.position);
      this._board.next(board);
    }));
  }
  /**
   * Update the lists
   *
   * @param lists
   */
  updateLists(lists) {
    return this._httpClient.patch("api/apps/scrumboard/board/lists", { lists }).pipe(map((response) => response.map((item) => new List(item))), tap((updatedLists) => {
      const board = this._board.value;
      updatedLists.forEach((updatedList) => {
        const index = board.lists.findIndex((item) => item.id === updatedList.id);
        board.lists[index] = updatedList;
      });
      board.lists.sort((a, b) => a.position - b.position);
      this._board.next(board);
    }));
  }
  /**
   * Delete the list
   *
   * @param id
   */
  deleteList(id) {
    return this._httpClient.delete("api/apps/scrumboard/board/list", {
      params: { id }
    }).pipe(tap((isDeleted) => {
      const board = this._board.value;
      const index = board.lists.findIndex((item) => item.id === id);
      board.lists.splice(index, 1);
      board.lists.sort((a, b) => a.position - b.position);
      this._board.next(board);
    }));
  }
  /**
   * Get card
   */
  getCard(id) {
    return this._board.pipe(take(1), map((board) => {
      const card = board.lists.find((list) => list.cards.some((item) => item.id === id)).cards.find((item) => item.id === id);
      this._card.next(card);
      return card;
    }), switchMap((card) => {
      if (!card) {
        return throwError("Could not found the card with id of " + id + "!");
      }
      return of(card);
    }));
  }
  /**
   * Create card
   *
   * @param card
   */
  createCard(card) {
    return this._httpClient.put("api/apps/scrumboard/board/card", { card }).pipe(map((response) => new Card(response)), tap((newCard) => {
      const board = this._board.value;
      board.lists.forEach((listItem, index, list) => {
        if (listItem.id === newCard.listId) {
          list[index].cards.push(newCard);
        }
      });
      this._board.next(board);
      return newCard;
    }));
  }
  /**
   * Update the card
   *
   * @param id
   * @param card
   */
  updateCard(id, card) {
    return this.board$.pipe(take(1), switchMap((board) => this._httpClient.patch("api/apps/scrumboard/board/card", {
      id,
      card
    }).pipe(map((updatedCard) => {
      board.lists.forEach((listItem) => {
        listItem.cards.forEach((cardItem, index, array) => {
          if (cardItem.id === id) {
            array[index] = updatedCard;
          }
        });
      });
      this._board.next(board);
      this._card.next(updatedCard);
      return updatedCard;
    }))));
  }
  /**
   * Update the cards
   *
   * @param cards
   */
  updateCards(cards) {
    return this._httpClient.patch("api/apps/scrumboard/board/cards", { cards }).pipe(map((response) => response.map((item) => new Card(item))), tap((updatedCards) => {
      const board = this._board.value;
      updatedCards.forEach((updatedCard) => {
        const listIndex = board.lists.findIndex((list) => list.id === updatedCard.listId);
        const cardIndex = board.lists[listIndex].cards.findIndex((item) => item.id === updatedCard.id);
        board.lists[listIndex].cards[cardIndex] = updatedCard;
        board.lists[listIndex].cards.sort((a, b) => a.position - b.position);
      });
      this._board.next(board);
    }));
  }
  /**
   * Delete the card
   *
   * @param id
   */
  deleteCard(id) {
    return this.board$.pipe(take(1), switchMap((board) => this._httpClient.delete("api/apps/scrumboard/board/card", {
      params: { id }
    }).pipe(map((isDeleted) => {
      board.lists.forEach((listItem) => {
        listItem.cards.forEach((cardItem, index, array) => {
          if (cardItem.id === id) {
            array.splice(index, 1);
          }
        });
      });
      this._board.next(board);
      this._card.next(null);
      return isDeleted;
    }))));
  }
  /**
   * Create label
   *
   * @param label
   */
  createLabel(label) {
    return this.board$.pipe(take(1), switchMap((board) => this._httpClient.post("api/apps/scrumboard/board/label", { label }).pipe(map((newLabel) => {
      board.labels = [...board.labels, newLabel];
      this._board.next(board);
      return newLabel;
    }))));
  }
  /**
   * Update the label
   *
   * @param id
   * @param label
   */
  updateLabel(id, label) {
    return this.board$.pipe(take(1), switchMap((board) => this._httpClient.patch("api/apps/scrumboard/board/label", {
      id,
      label
    }).pipe(map((updatedLabel) => {
      const index = board.labels.findIndex((item) => item.id === id);
      board.labels[index] = updatedLabel;
      this._board.next(board);
      return updatedLabel;
    }))));
  }
  /**
   * Delete the label
   *
   * @param id
   */
  deleteLabel(id) {
    return this.board$.pipe(take(1), switchMap((board) => this._httpClient.delete("api/apps/scrumboard/board/label", {
      params: { id }
    }).pipe(map((isDeleted) => {
      const index = board.labels.findIndex((item) => item.id === id);
      board.labels.splice(index, 1);
      if (isDeleted) {
        board.lists.forEach((list) => {
          list.cards.forEach((card) => {
            const labelIndex = card.labels.findIndex((label) => label.id === id);
            if (labelIndex > -1) {
              card.labels.splice(labelIndex, 1);
            }
          });
        });
      }
      this._board.next(board);
      return isDeleted;
    }))));
  }
  /**
   * Search within board cards
   *
   * @param query
   */
  search(query) {
    return this._httpClient.get("api/apps/scrumboard/board/search", { params: { query } });
  }
  static {
    this.\u0275fac = function ScrumboardService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrumboardService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScrumboardService, factory: _ScrumboardService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/apps/scrumboard/board/board.component.ts
var _c03 = () => [".."];
var _c13 = (a0) => ["card", a0];
var _c23 = (a0) => ({ "text-red-600": a0 });
function ScrumboardBoardComponent_For_18_For_21_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275element(1, "img", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", card_r5.coverImage, \u0275\u0275sanitizeUrl);
  }
}
function ScrumboardBoardComponent_For_18_For_21_Conditional_4_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", label_r6.title, " ");
  }
}
function ScrumboardBoardComponent_For_18_For_21_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 31);
    \u0275\u0275repeaterCreate(2, ScrumboardBoardComponent_For_18_For_21_Conditional_4_For_3_Template, 2, 1, "div", 32, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(card_r5.labels);
  }
}
function ScrumboardBoardComponent_For_18_For_21_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275element(1, "mat-icon", 33);
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const card_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(6, _c23, ctx_r2.isOverdue(card_r5.dueDate)));
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:clock");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, card_r5.dueDate, "longDate"), " ");
  }
}
function ScrumboardBoardComponent_For_18_For_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 26);
    \u0275\u0275template(1, ScrumboardBoardComponent_For_18_For_21_Conditional_1_Template, 2, 1, "div", 27);
    \u0275\u0275elementStart(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ScrumboardBoardComponent_For_18_For_21_Conditional_4_Template, 4, 0, "div")(5, ScrumboardBoardComponent_For_18_For_21_Conditional_5_Template, 5, 8, "div", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const card_r5 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(5, _c13, card_r5.id));
    \u0275\u0275advance();
    \u0275\u0275conditional(card_r5.coverImage ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", card_r5.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(card_r5.labels.length ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(card_r5.dueDate ? 5 : -1);
  }
}
function ScrumboardBoardComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 17)(2, "div", 18)(3, "input", 19, 0);
    \u0275\u0275listener("focusout", function ScrumboardBoardComponent_For_18_Template_input_focusout_3_listener($event) {
      const list_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateListTitle($event, list_r2));
    })("keydown.enter", function ScrumboardBoardComponent_For_18_Template_input_keydown_enter_3_listener() {
      \u0275\u0275restoreView(_r1);
      const listTitleInput_r4 = \u0275\u0275reference(4);
      return \u0275\u0275resetView(listTitleInput_r4.blur());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21)(8, "button", 22);
    \u0275\u0275element(9, "mat-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-menu", null, 1)(12, "button", 23);
    \u0275\u0275listener("click", function ScrumboardBoardComponent_For_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const listTitleInput_r4 = \u0275\u0275reference(4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.renameList(listTitleInput_r4));
    });
    \u0275\u0275element(13, "mat-icon", 8);
    \u0275\u0275text(14, " Rename list ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 23);
    \u0275\u0275listener("click", function ScrumboardBoardComponent_For_18_Template_button_click_15_listener() {
      const list_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.deleteList(list_r2.id));
    });
    \u0275\u0275element(16, "mat-icon", 8);
    \u0275\u0275text(17, " Delete list ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 24)(19, "div", 25);
    \u0275\u0275listener("cdkDropListDropped", function ScrumboardBoardComponent_For_18_Template_div_cdkDropListDropped_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cardDropped($event));
    });
    \u0275\u0275repeaterCreate(20, ScrumboardBoardComponent_For_18_For_21_Template, 6, 7, "a", 26, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "scrumboard-board-add-card", 15);
    \u0275\u0275listener("saved", function ScrumboardBoardComponent_For_18_Template_scrumboard_board_add_card_saved_22_listener($event) {
      const list_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addCard(list_r2, $event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const list_r2 = ctx.$implicit;
    const listMenu_r7 = \u0275\u0275reference(11);
    \u0275\u0275property("cdkDragLockAxis", "x");
    \u0275\u0275advance(3);
    \u0275\u0275property("spellcheck", "false")("value", list_r2.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", list_r2.cards.length, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", listMenu_r7);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:ellipsis-vertical");
    \u0275\u0275advance(4);
    \u0275\u0275property("svgIcon", "heroicons_solid:pencil-square");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:trash");
    \u0275\u0275advance(3);
    \u0275\u0275property("id", list_r2.id)("cdkDropListData", list_r2.cards);
    \u0275\u0275advance();
    \u0275\u0275repeater(list_r2.cards);
    \u0275\u0275advance(2);
    \u0275\u0275property("buttonTitle", list_r2.cards.length ? "Add another card" : "Add a card");
  }
}
var ScrumboardBoardComponent = class _ScrumboardBoardComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _formBuilder, _fuseConfirmationService, _scrumboardService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._formBuilder = _formBuilder;
    this._fuseConfirmationService = _fuseConfirmationService;
    this._scrumboardService = _scrumboardService;
    this._positionStep = 65536;
    this._maxListCount = 200;
    this._maxPosition = this._positionStep * 500;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.listTitleForm = this._formBuilder.group({
      title: [""]
    });
    this._scrumboardService.board$.pipe(takeUntil(this._unsubscribeAll)).subscribe((board) => {
      this.board = __spreadValues({}, board);
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
   * Focus on the given element to start editing the list title
   *
   * @param listTitleInput
   */
  renameList(listTitleInput) {
    setTimeout(() => {
      listTitleInput.focus();
    });
  }
  /**
   * Add new list
   *
   * @param title
   */
  addList(title) {
    if (this.board.lists.length >= this._maxListCount) {
      return;
    }
    const list = new List({
      boardId: this.board.id,
      position: this.board.lists.length ? this.board.lists[this.board.lists.length - 1].position + this._positionStep : this._positionStep,
      title
    });
    this._scrumboardService.createList(list).subscribe();
  }
  /**
   * Update the list title
   *
   * @param event
   * @param list
   */
  updateListTitle(event, list) {
    const element = event.target;
    const newTitle = element.value;
    if (!newTitle || newTitle.trim() === "") {
      element.value = list.title;
      return;
    }
    list.title = element.value = newTitle.trim();
    this._scrumboardService.updateList(list).subscribe();
  }
  /**
   * Delete the list
   *
   * @param id
   */
  deleteList(id) {
    const confirmation = this._fuseConfirmationService.open({
      title: "Delete list",
      message: "Are you sure you want to delete this list and its cards? This action cannot be undone!",
      actions: {
        confirm: {
          label: "Delete"
        }
      }
    });
    confirmation.afterClosed().subscribe((result) => {
      if (result === "confirmed") {
        this._scrumboardService.deleteList(id).subscribe();
      }
    });
  }
  /**
   * Add new card
   */
  addCard(list, title) {
    const card = new Card({
      boardId: this.board.id,
      listId: list.id,
      position: list.cards.length ? list.cards[list.cards.length - 1].position + this._positionStep : this._positionStep,
      title
    });
    this._scrumboardService.createCard(card).subscribe();
  }
  /**
   * List dropped
   *
   * @param event
   */
  listDropped(event) {
    moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    const updated = this._calculatePositions(event);
    this._scrumboardService.updateLists(updated).subscribe();
  }
  /**
   * Card dropped
   *
   * @param event
   */
  cardDropped(event) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
      event.container.data[event.currentIndex].listId = event.container.id;
    }
    const updated = this._calculatePositions(event);
    this._scrumboardService.updateCards(updated).subscribe();
  }
  /**
   * Check if the given ISO_8601 date string is overdue
   *
   * @param date
   */
  isOverdue(date) {
    return DateTime.fromISO(date).startOf("day") < DateTime.now().startOf("day");
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
   * Calculate and set item positions
   * from given CdkDragDrop event
   *
   * @param event
   * @private
   */
  _calculatePositions(event) {
    let items = event.container.data;
    const currentItem = items[event.currentIndex];
    const prevItem = items[event.currentIndex - 1] || null;
    const nextItem = items[event.currentIndex + 1] || null;
    if (!prevItem) {
      if (!nextItem) {
        currentItem.position = this._positionStep;
      } else {
        currentItem.position = nextItem.position / 2;
      }
    } else if (!nextItem) {
      currentItem.position = prevItem.position + this._positionStep;
    } else {
      currentItem.position = (prevItem.position + nextItem.position) / 2;
    }
    if (!Number.isInteger(currentItem.position) || currentItem.position >= this._maxPosition) {
      items = items.map((value, index) => {
        value.position = (index + 1) * this._positionStep;
        return value;
      });
      return items;
    }
    return [currentItem];
  }
  static {
    this.\u0275fac = function ScrumboardBoardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrumboardBoardComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(FuseConfirmationService), \u0275\u0275directiveInject(ScrumboardService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrumboardBoardComponent, selectors: [["scrumboard-board"]], decls: 22, vars: 8, consts: [["listTitleInput", ""], ["listMenu", "matMenu"], [1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-hidden"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], [1, "mt-6", "flex", "shrink-0", "items-center", "sm:ml-4", "sm:mt-0"], ["mat-stroked-button", "", 3, "routerLink"], [1, "icon-size-5", 3, "svgIcon"], [1, "ml-2"], ["mat-stroked-button", "", 1, "ml-3"], ["cdkScrollable", "", 1, "flex-auto", "overflow-y-auto", "p-6", "sm:p-8", "sm:pt-4"], ["cdkDropList", "", 1, "flex", 3, "cdkDropListDropped", "cdkDropListData", "cdkDropListOrientation"], ["cdkDropListGroup", "", 1, "flex", "items-start"], ["cdkDrag", "", 1, "bg-default", "w-72", "flex-0", "rounded-2xl", "p-2", 3, "cdkDragLockAxis"], [3, "saved", "buttonTitle"], [1, "pointer-events-none", "invisible", "absolute", "h-0", "w-0", "opacity-0"], ["cdkDragHandle", "", 1, "flex", "items-center", "justify-between"], [1, "flex", "w-full", "cursor-text", "items-center", "rounded-md", "border", "border-transparent", "px-3", "py-2", "focus-within:border-primary", "focus-within:bg-white", "focus-within:shadow-sm", "dark:focus-within:bg-gray-900"], [1, "w-full", "bg-transparent", "font-medium", "leading-5", 3, "focusout", "keydown.enter", "spellcheck", "value"], [1, "text-secondary", "ml-4", "flex", "min-w-6", "items-center", "justify-center", "rounded-full", "bg-gray-300", "text-sm", "font-semibold", "leading-6", "dark:bg-gray-700"], [1, "ml-1"], ["mat-icon-button", "", 1, "h-8", "min-h-8", "w-8", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "mt-2", "rounded-xl", "bg-gray-400", "bg-opacity-12", "dark:border", "dark:bg-transparent"], ["cdkDropList", "", 1, "p-3", "pb-0", 3, "cdkDropListDropped", "id", "cdkDropListData"], ["cdkDrag", "", 1, "bg-card", "mb-3", "flex", "flex-col", "items-start", "space-y-3", "overflow-hidden", "rounded-lg", "p-5", "shadow", 3, "routerLink"], [1, "-mx-5", "-mt-5", "mb-2"], [1, "text-lg", "font-medium", "leading-5"], [1, "text-secondary", "flex", "items-center", "rounded", "text-sm", "font-medium", "leading-5", 3, "ngClass"], [1, "w-full", "object-cover", 3, "src"], [1, "-mx-1", "-mb-2", "flex", "flex-wrap"], [1, "mx-1", "mb-2", "rounded-full", "bg-gray-100", "px-3", "py-0.5", "text-sm", "font-medium", "text-gray-500", "dark:bg-gray-700", "dark:text-gray-300"], [1, "text-current", "icon-size-4", 3, "svgIcon"]], template: function ScrumboardBoardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h2", 5);
        \u0275\u0275text(4);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 6)(6, "a", 7);
        \u0275\u0275element(7, "mat-icon", 8);
        \u0275\u0275elementStart(8, "span", 9);
        \u0275\u0275text(9, "Boards");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "button", 10);
        \u0275\u0275element(11, "mat-icon", 8);
        \u0275\u0275elementStart(12, "span", 9);
        \u0275\u0275text(13, "Settings");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(14, "div", 11)(15, "div", 12);
        \u0275\u0275listener("cdkDropListDropped", function ScrumboardBoardComponent_Template_div_cdkDropListDropped_15_listener($event) {
          return ctx.listDropped($event);
        });
        \u0275\u0275elementStart(16, "div", 13);
        \u0275\u0275repeaterCreate(17, ScrumboardBoardComponent_For_18_Template, 23, 11, "div", 14, ctx.trackByFn, true);
        \u0275\u0275elementStart(19, "scrumboard-board-add-list", 15);
        \u0275\u0275listener("saved", function ScrumboardBoardComponent_Template_scrumboard_board_add_list_saved_19_listener($event) {
          return ctx.addList($event);
        });
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(20, "div", 16);
        \u0275\u0275element(21, "router-outlet");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.board.title, " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c03));
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:view-columns");
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_solid:cog-8-tooth");
        \u0275\u0275advance(4);
        \u0275\u0275property("cdkDropListData", ctx.board.lists)("cdkDropListOrientation", "horizontal");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.board.lists);
        \u0275\u0275advance(2);
        \u0275\u0275property("buttonTitle", ctx.board.lists.length ? "Add another list" : "Add a list");
      }
    }, dependencies: [
      MatButtonModule,
      MatAnchor,
      MatButton,
      MatIconButton,
      RouterLink,
      MatIconModule,
      MatIcon,
      CdkScrollable,
      CdkDropList,
      CdkDropListGroup,
      CdkDrag,
      CdkDragHandle,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      NgClass,
      ScrumboardBoardAddCardComponent,
      ScrumboardBoardAddListComponent,
      RouterOutlet,
      DatePipe
    ], styles: ["/* src/app/modules/admin/apps/scrumboard/board/board.component.scss */\n.cdk-drag-preview {\n  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);\n  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\n.cdk-drag-placeholder {\n  opacity: 0;\n}\n.cdk-drag-animating {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n.cdk-drop-list-dragging div:not(.cdk-drag-placeholder) {\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n/*# sourceMappingURL=board.component.css.map */\n"], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrumboardBoardComponent, { className: "ScrumboardBoardComponent", filePath: "src/app/modules/admin/apps/scrumboard/board/board.component.ts", lineNumber: 60 });
})();

// src/app/modules/admin/apps/scrumboard/boards/boards.component.ts
var _c04 = (a0) => [a0];
function ScrumboardBoardsComponent_For_6_Conditional_7_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 16);
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    \u0275\u0275property("src", member_r1.avatar, \u0275\u0275sanitizeUrl);
  }
}
function ScrumboardBoardsComponent_For_6_Conditional_7_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const board_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" +", board_r2.members.slice(5).length, " ");
  }
}
function ScrumboardBoardsComponent_For_6_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275repeaterCreate(2, ScrumboardBoardsComponent_For_6_Conditional_7_For_3_Template, 1, 1, "img", 16, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275template(4, ScrumboardBoardsComponent_For_6_Conditional_7_Conditional_4_Template, 3, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const board_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275repeater(board_r2.members.slice(0, 5));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(board_r2.members.length > 5 ? 4 : -1);
  }
}
function ScrumboardBoardsComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "div", 7);
    \u0275\u0275element(2, "mat-icon", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ScrumboardBoardsComponent_For_6_Conditional_7_Template, 5, 1);
    \u0275\u0275elementStart(8, "div", 11)(9, "div", 12);
    \u0275\u0275text(10, "Edited:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const board_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(6, _c04, board_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", board_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", board_r2.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", board_r2.description, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((board_r2.members == null ? null : board_r2.members.length) ? 7 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDateAsRelative(board_r2.lastActivity), " ");
  }
}
var ScrumboardBoardsComponent = class _ScrumboardBoardsComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _scrumboardService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._scrumboardService = _scrumboardService;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._scrumboardService.boards$.pipe(takeUntil(this._unsubscribeAll)).subscribe((boards) => {
      this.boards = boards;
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
   * Format the given ISO_8601 date as a relative date
   *
   * @param date
   */
  formatDateAsRelative(date) {
    return DateTime.fromISO(date).toRelative();
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
    this.\u0275fac = function ScrumboardBoardsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrumboardBoardsComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ScrumboardService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrumboardBoardsComponent, selectors: [["scrumboard-boards"]], decls: 9, vars: 1, consts: [["cdkScrollable", "", 1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-y-auto"], [1, "flex", "flex-auto", "flex-col", "items-center", "p-6", "sm:p-10"], [1, "mt-4", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:mt-24", "md:text-6xl"], [1, "mt-8", "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2", "md:mt-16", "lg:grid-cols-4"], [1, "bg-card", "flex", "w-56", "flex-col", "items-start", "rounded-lg", "p-6", "shadow", "transition-shadow", "duration-150", "ease-in-out", "hover:shadow-xl", 3, "routerLink"], [1, "flex", "w-56", "cursor-pointer", "flex-col", "items-center", "justify-center", "rounded-lg", "border-2", "border-dashed", "border-gray-300", "transition-colors", "duration-150", "ease-in-out", "hover:bg-hover"], [1, "text-hint", "icon-size-12", 3, "svgIcon"], [1, "flex", "items-center", "justify-center", "rounded-full", "bg-primary-50", "p-4", "text-primary-700", "dark:bg-primary", "dark:text-on-primary"], [1, "text-current", 3, "svgIcon"], [1, "mt-5", "text-lg", "font-medium", "leading-5"], [1, "text-secondary", "mt-0.5", "line-clamp-2"], [1, "font-md", "mt-4", "flex", "items-center", "text-md"], [1, "text-secondary"], [1, "ml-1"], [1, "mt-6", "h-1", "w-12", "border-t-2"], [1, "mt-6", "flex", "items-center", "-space-x-1.5"], ["alt", "Member avatar", 1, "ring-bg-card", "h-8", "w-8", "flex-0", "rounded-full", "object-cover", "ring", "ring-offset-1", "ring-offset-transparent", 3, "src"], [1, "ring-bg-card", "flex", "h-8", "w-8", "flex-0", "items-center", "justify-center", "rounded-full", "bg-gray-200", "text-gray-500", "ring", "ring-offset-1", "ring-offset-transparent"], [1, "text-md", "font-semibold"]], template: function ScrumboardBoardsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
        \u0275\u0275text(3, " Scrumboard Boards ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275repeaterCreate(5, ScrumboardBoardsComponent_For_6_Template, 13, 8, "a", 4, ctx.trackByFn, true);
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275element(8, "mat-icon", 6);
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.boards);
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_outline:plus");
      }
    }, dependencies: [CdkScrollable, RouterLink, MatIconModule, MatIcon], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrumboardBoardsComponent, { className: "ScrumboardBoardsComponent", filePath: "src/app/modules/admin/apps/scrumboard/boards/boards.component.ts", lineNumber: 25 });
})();

// src/app/modules/admin/apps/scrumboard/card/details/details.component.ts
var _c05 = ["labelInput"];
var _c14 = (a0, a1, a2) => ({ "bg-gray-100 text-gray-500 dark:bg-gray-700 dark:text-gray-300": a0, "bg-green-200 text-green-800 dark:bg-green-500 dark:text-green-100": a1, "bg-red-200 text-red-800 dark:bg-red-500 dark:text-red-100": a2 });
function ScrumboardCardDetailsComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r2.card.dueDate, "longDate"), " ");
  }
}
function ScrumboardCardDetailsComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Not set ");
  }
}
function ScrumboardCardDetailsComponent_For_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 25);
    \u0275\u0275listener("change", function ScrumboardCardDetailsComponent_For_44_Template_mat_checkbox_change_0_listener($event) {
      const label_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleProductTag(label_r5, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const label_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("color", "primary")("checked", ctx_r2.hasLabel(label_r5));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", label_r5.title, " ");
  }
}
var ScrumboardCardDetailsComponent = class _ScrumboardCardDetailsComponent {
  /**
   * Constructor
   */
  constructor(matDialogRef, _changeDetectorRef, _formBuilder, _scrumboardService) {
    this.matDialogRef = matDialogRef;
    this._changeDetectorRef = _changeDetectorRef;
    this._formBuilder = _formBuilder;
    this._scrumboardService = _scrumboardService;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._scrumboardService.board$.pipe(takeUntil(this._unsubscribeAll)).subscribe((board) => {
      this.board = board;
      this.labels = this.filteredLabels = board.labels;
    });
    this._scrumboardService.card$.pipe(takeUntil(this._unsubscribeAll)).subscribe((card) => {
      this.card = card;
    });
    this.cardForm = this._formBuilder.group({
      id: [""],
      title: ["", Validators.required],
      description: [""],
      labels: [[]],
      dueDate: [null]
    });
    this.cardForm.setValue({
      id: this.card.id,
      title: this.card.title,
      description: this.card.description,
      labels: this.card.labels,
      dueDate: this.card.dueDate
    });
    this.cardForm.valueChanges.pipe(tap((value) => {
      this.card = assign_default(this.card, value);
    }), debounceTime(300), takeUntil(this._unsubscribeAll)).subscribe((value) => {
      this._scrumboardService.updateCard(value.id, value).subscribe();
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
   * Return whether the card has the given label
   *
   * @param label
   */
  hasLabel(label) {
    return !!this.card.labels.find((cardLabel) => cardLabel.id === label.id);
  }
  /**
   * Filter labels
   *
   * @param event
   */
  filterLabels(event) {
    const value = event.target.value.toLowerCase();
    this.filteredLabels = this.labels.filter((label) => label.title.toLowerCase().includes(value));
  }
  /**
   * Filter labels input key down event
   *
   * @param event
   */
  filterLabelsInputKeyDown(event) {
    if (event.key !== "Enter") {
      return;
    }
    if (this.filteredLabels.length === 0) {
      return;
    }
    const label = this.filteredLabels[0];
    const isLabelApplied = this.card.labels.find((cardLabel) => cardLabel.id === label.id);
    if (isLabelApplied) {
      this.removeLabelFromCard(label);
    } else {
      this.addLabelToCard(label);
    }
  }
  /**
   * Toggle card label
   *
   * @param label
   * @param change
   */
  toggleProductTag(label, change) {
    if (change.checked) {
      this.addLabelToCard(label);
    } else {
      this.removeLabelFromCard(label);
    }
  }
  /**
   * Add label to the card
   *
   * @param label
   */
  addLabelToCard(label) {
    this.card.labels.unshift(label);
    this.cardForm.get("labels").patchValue(this.card.labels);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Remove label from the card
   *
   * @param label
   */
  removeLabelFromCard(label) {
    this.card.labels.splice(this.card.labels.findIndex((cardLabel) => cardLabel.id === label.id), 1);
    this.cardForm.get("labels").patchValue(this.card.labels);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Check if the given date is overdue
   */
  isOverdue(date) {
    return DateTime.fromISO(date).startOf("day") < DateTime.now().startOf("day");
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
    this.\u0275fac = function ScrumboardCardDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrumboardCardDetailsComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(ScrumboardService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrumboardCardDetailsComponent, selectors: [["scrumboard-card-details"]], viewQuery: function ScrumboardCardDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.labelInput = _t.first);
      }
    }, decls: 45, vars: 25, consts: [["dueDatePicker", ""], [1, "-m-6", "flex", "max-h-160", "flex-auto", "flex-col", "overflow-y-auto", "md:w-160", "md:min-w-160"], [1, "flex", "h-16", "flex-0", "items-center", "justify-between", "bg-primary", "pl-6", "pr-3", "text-on-primary", "sm:pl-8", "sm:pr-5"], [1, "text-lg", "font-medium"], ["mat-icon-button", "", 3, "click", "tabIndex"], [1, "text-current", 3, "svgIcon"], [1, "flex", "w-full", "flex-0", "flex-col", "items-start", "space-y-6", "overflow-y-auto", "p-6", "sm:p-8", 3, "formGroup"], [1, "w-full", 3, "subscriptSizing"], ["matInput", "", "cdkTextareaAutosize", "", 3, "formControlName", "rows", "cdkAutosizeMinRows"], [1, "font-medium"], [1, "relative", "mt-1.5", "flex", "cursor-pointer", "items-center", "rounded-full", "px-4", "leading-9", 3, "click", "ngClass"], [1, "text-current", "icon-size-5", 3, "svgIcon"], [1, "ml-2", "text-md", "font-medium"], [1, "fuse-mat-dense", "pointer-events-none", "invisible", "absolute", "inset-0", "-mt-2.5", "opacity-0", 3, "subscriptSizing"], ["matInput", "", 3, "formControlName", "matDatepicker"], ["mat-button", "", "matDatepickerCancel", "", 3, "click"], ["mat-flat-button", "", "matDatepickerApply", "", 3, "color"], [1, "w-full"], [1, "mt-1", "overflow-hidden", "rounded-md", "border", "border-gray-300", "shadow-sm"], [1, "mx-3", "my-2", "flex", "items-center"], [1, "flex", "min-w-0", "flex-auto", "items-center"], [1, "icon-size-5", 3, "svgIcon"], ["type", "text", "placeholder", "Enter label name", 1, "ml-2", "min-w-0", "border-0", "py-1", 3, "input", "keydown", "maxLength"], [1, "max-h-40", "overflow-y-auto", "border-t", "leading-none"], [1, "flex", "h-10", "min-h-10", "items-center", "pl-1", "pr-4", 3, "color", "checked"], [1, "flex", "h-10", "min-h-10", "items-center", "pl-1", "pr-4", 3, "change", "color", "checked"]], template: function ScrumboardCardDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275text(3, "Card");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 4);
        \u0275\u0275listener("click", function ScrumboardCardDetailsComponent_Template_button_click_4_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.matDialogRef.close());
        });
        \u0275\u0275element(5, "mat-icon", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "form", 6)(7, "mat-form-field", 7)(8, "mat-label");
        \u0275\u0275text(9, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "textarea", 8);
        \u0275\u0275text(11, "            ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "mat-form-field", 7)(13, "mat-label");
        \u0275\u0275text(14, "Description");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "textarea", 8);
        \u0275\u0275text(16, "            ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div")(18, "div", 9);
        \u0275\u0275text(19, "Due date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 10);
        \u0275\u0275listener("click", function ScrumboardCardDetailsComponent_Template_div_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          const dueDatePicker_r2 = \u0275\u0275reference(28);
          return \u0275\u0275resetView(dueDatePicker_r2.open());
        });
        \u0275\u0275element(21, "mat-icon", 11);
        \u0275\u0275elementStart(22, "span", 12);
        \u0275\u0275template(23, ScrumboardCardDetailsComponent_Conditional_23_Template, 2, 4)(24, ScrumboardCardDetailsComponent_Conditional_24_Template, 1, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-form-field", 13);
        \u0275\u0275element(26, "input", 14);
        \u0275\u0275elementStart(27, "mat-datepicker", null, 0)(29, "mat-datepicker-actions")(30, "button", 15);
        \u0275\u0275listener("click", function ScrumboardCardDetailsComponent_Template_button_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.cardForm.get("dueDate").setValue(null));
        });
        \u0275\u0275text(31, " Clear ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 16);
        \u0275\u0275text(33, " Select ");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(34, "div", 17)(35, "div", 9);
        \u0275\u0275text(36, "Labels");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 18)(38, "div", 19)(39, "div", 20);
        \u0275\u0275element(40, "mat-icon", 21);
        \u0275\u0275elementStart(41, "input", 22);
        \u0275\u0275listener("input", function ScrumboardCardDetailsComponent_Template_input_input_41_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterLabels($event));
        })("keydown", function ScrumboardCardDetailsComponent_Template_input_keydown_41_listener($event) {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.filterLabelsInputKeyDown($event));
        });
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(42, "div", 23);
        \u0275\u0275repeaterCreate(43, ScrumboardCardDetailsComponent_For_44_Template, 2, 3, "mat-checkbox", 24, ctx.trackByFn, true);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        const dueDatePicker_r2 = \u0275\u0275reference(28);
        \u0275\u0275advance(4);
        \u0275\u0275property("tabIndex", -1);
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:x-mark");
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.cardForm);
        \u0275\u0275advance();
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "title")("rows", 1)("cdkAutosizeMinRows", 1);
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "description")("rows", 1)("cdkAutosizeMinRows", 1);
        \u0275\u0275advance(5);
        \u0275\u0275property("ngClass", \u0275\u0275pureFunction3(21, _c14, !ctx.card.dueDate, ctx.card.dueDate && !ctx.isOverdue(ctx.card.dueDate), ctx.card.dueDate && ctx.isOverdue(ctx.card.dueDate)));
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_solid:calendar");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.card.dueDate ? 23 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.card.dueDate ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "dueDate")("matDatepicker", dueDatePicker_r2);
        \u0275\u0275advance(6);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(8);
        \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
        \u0275\u0275advance();
        \u0275\u0275property("maxLength", 50);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.filteredLabels);
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatIconButton,
      MatIconModule,
      MatIcon,
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
      CdkTextareaAutosize,
      TextFieldModule,
      NgClass,
      MatDatepickerModule,
      MatDatepicker,
      MatDatepickerInput,
      MatDatepickerActions,
      MatDatepickerCancel,
      MatDatepickerApply,
      MatCheckboxModule,
      MatCheckbox,
      DatePipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrumboardCardDetailsComponent, { className: "ScrumboardCardDetailsComponent", filePath: "src/app/modules/admin/apps/scrumboard/card/details/details.component.ts", lineNumber: 59 });
})();

// src/app/modules/admin/apps/scrumboard/card/card.component.ts
var ScrumboardCardComponent = class _ScrumboardCardComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _matDialog, _router) {
    this._activatedRoute = _activatedRoute;
    this._matDialog = _matDialog;
    this._router = _router;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._matDialog.open(ScrumboardCardDetailsComponent, { autoFocus: false }).afterClosed().subscribe(() => {
      this._router.navigate(["./../.."], {
        relativeTo: this._activatedRoute
      });
    });
  }
  static {
    this.\u0275fac = function ScrumboardCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScrumboardCardComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Router));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScrumboardCardComponent, selectors: [["scrumboard-card"]], decls: 1, vars: 0, template: function ScrumboardCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275text(0, "SCRUMBOARD -> BOARDS -> LIST -> CARD\n");
      }
    }, encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScrumboardCardComponent, { className: "ScrumboardCardComponent", filePath: "src/app/modules/admin/apps/scrumboard/card/card.component.ts", lineNumber: 18 });
})();

// src/app/modules/admin/apps/scrumboard/scrumboard.routes.ts
var boardResolver = (route, state) => {
  const scrumboardService = inject(ScrumboardService);
  const router = inject(Router);
  return scrumboardService.getBoard(route.paramMap.get("boardId")).pipe(
    // Error here means the requested board is not available
    catchError((error) => {
      console.error(error);
      const parentUrl = state.url.split("/").slice(0, -1).join("/");
      router.navigateByUrl(parentUrl);
      return throwError(error);
    })
  );
};
var cardResolver = (route, state) => {
  const scrumboardService = inject(ScrumboardService);
  const router = inject(Router);
  return scrumboardService.getCard(route.paramMap.get("cardId")).pipe(
    // Error here means the requested card is not available
    catchError((error) => {
      console.error(error);
      const parentUrl = state.url.split("/").slice(0, -1).join("/");
      router.navigateByUrl(parentUrl);
      return throwError(error);
    })
  );
};
var scrumboard_routes_default = [
  {
    path: "",
    component: ScrumboardBoardsComponent,
    resolve: {
      boards: () => inject(ScrumboardService).getBoards()
    }
  },
  {
    path: ":boardId",
    component: ScrumboardBoardComponent,
    resolve: {
      board: boardResolver
    },
    children: [
      {
        path: "card/:cardId",
        component: ScrumboardCardComponent,
        resolve: {
          card: cardResolver
        }
      }
    ]
  }
];
export {
  scrumboard_routes_default as default
};
//# sourceMappingURL=chunk-ESNW7G5S.js.map
