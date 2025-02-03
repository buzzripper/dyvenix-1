import {
  MatDrawer,
  MatDrawerContainer,
  MatDrawerContent,
  MatSidenavModule
} from "./chunk-74A4XWO4.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-BOL35CP3.js";
import {
  FuseMediaWatcherService
} from "./chunk-NDM3MP5U.js";
import "./chunk-YHH4B3V4.js";
import "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
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
  MatPrefix
} from "./chunk-2W4O77WS.js";
import "./chunk-BNTOCQMY.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
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
import "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import "./chunk-WH7F4HUX.js";
import {
  Router,
  RouterLink,
  RouterOutlet
} from "./chunk-WTEW5YKI.js";
import {
  HttpClient
} from "./chunk-JL6CBEU5.js";
import {
  DatePipe,
  NgClass,
  NgTemplateOutlet
} from "./chunk-M6AYR6A2.js";
import {
  BehaviorSubject,
  ChangeDetectorRef,
  NgZone,
  Subject,
  catchError,
  filter,
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
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/apps/chat/chat.component.ts
var ChatComponent = class _ChatComponent {
  /**
   * Constructor
   */
  constructor() {
  }
  static {
    this.\u0275fac = function ChatComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatComponent, selectors: [["chat"]], decls: 3, vars: 0, consts: [[1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-hidden"], [1, "flex", "flex-auto", "overflow-hidden"]], template: function ChatComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "router-outlet");
        \u0275\u0275elementEnd()();
      }
    }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatComponent, { className: "ChatComponent", filePath: "src/app/modules/admin/apps/chat/chat.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin/apps/chat/chat.service.ts
var ChatService = class _ChatService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._chat = new BehaviorSubject(null);
    this._chats = new BehaviorSubject(null);
    this._contact = new BehaviorSubject(null);
    this._contacts = new BehaviorSubject(null);
    this._profile = new BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Getter for chat
   */
  get chat$() {
    return this._chat.asObservable();
  }
  /**
   * Getter for chats
   */
  get chats$() {
    return this._chats.asObservable();
  }
  /**
   * Getter for contact
   */
  get contact$() {
    return this._contact.asObservable();
  }
  /**
   * Getter for contacts
   */
  get contacts$() {
    return this._contacts.asObservable();
  }
  /**
   * Getter for profile
   */
  get profile$() {
    return this._profile.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get chats
   */
  getChats() {
    return this._httpClient.get("api/apps/chat/chats").pipe(tap((response) => {
      this._chats.next(response);
    }));
  }
  /**
   * Get contact
   *
   * @param id
   */
  getContact(id) {
    return this._httpClient.get("api/apps/chat/contacts", { params: { id } }).pipe(tap((response) => {
      this._contact.next(response);
    }));
  }
  /**
   * Get contacts
   */
  getContacts() {
    return this._httpClient.get("api/apps/chat/contacts").pipe(tap((response) => {
      this._contacts.next(response);
    }));
  }
  /**
   * Get profile
   */
  getProfile() {
    return this._httpClient.get("api/apps/chat/profile").pipe(tap((response) => {
      this._profile.next(response);
    }));
  }
  /**
   * Get chat
   *
   * @param id
   */
  getChatById(id) {
    return this._httpClient.get("api/apps/chat/chat", { params: { id } }).pipe(map((chat) => {
      this._chat.next(chat);
      return chat;
    }), switchMap((chat) => {
      if (!chat) {
        return throwError("Could not found chat with id of " + id + "!");
      }
      return of(chat);
    }));
  }
  /**
   * Update chat
   *
   * @param id
   * @param chat
   */
  updateChat(id, chat) {
    return this.chats$.pipe(take(1), switchMap((chats) => this._httpClient.patch("api/apps/chat/chat", {
      id,
      chat
    }).pipe(map((updatedChat) => {
      const index = chats.findIndex((item) => item.id === id);
      chats[index] = updatedChat;
      this._chats.next(chats);
      return updatedChat;
    }), switchMap((updatedChat) => this.chat$.pipe(take(1), filter((item) => item && item.id === id), tap(() => {
      this._chat.next(updatedChat);
      return updatedChat;
    }))))));
  }
  /**
   * Reset the selected chat
   */
  resetChat() {
    this._chat.next(null);
  }
  static {
    this.\u0275fac = function ChatService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ChatService, factory: _ChatService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/apps/chat/new-chat/new-chat.component.ts
function NewChatComponent_Conditional_7_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contact_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", contact_r1.name.charAt(0), " ");
  }
}
function NewChatComponent_Conditional_7_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const contact_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", contact_r1.avatar, \u0275\u0275sanitizeUrl);
  }
}
function NewChatComponent_Conditional_7_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contact_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", contact_r1.name.charAt(0), " ");
  }
}
function NewChatComponent_Conditional_7_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, NewChatComponent_Conditional_7_For_1_Conditional_0_Template, 2, 1, "div", 7);
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9);
    \u0275\u0275template(3, NewChatComponent_Conditional_7_For_1_Conditional_3_Template, 1, 1, "img", 10)(4, NewChatComponent_Conditional_7_For_1_Conditional_4_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 12)(6, "div", 13);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const contact_r1 = ctx.$implicit;
    const \u0275$index_15_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(\u0275$index_15_r2 === 0 || contact_r1.name.charAt(0) !== ctx_r2.contacts[\u0275$index_15_r2 - 1].name.charAt(0) ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(contact_r1.avatar ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!contact_r1.avatar ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", contact_r1.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", contact_r1.about, " ");
  }
}
function NewChatComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, NewChatComponent_Conditional_7_For_1_Template, 10, 5, null, null, \u0275\u0275componentInstance().trackByFn, true);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.contacts);
  }
}
function NewChatComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1, " There are no contacts! ");
    \u0275\u0275elementEnd();
  }
}
var NewChatComponent = class _NewChatComponent {
  /**
   * Constructor
   */
  constructor(_chatService) {
    this._chatService = _chatService;
    this.contacts = [];
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._chatService.contacts$.pipe(takeUntil(this._unsubscribeAll)).subscribe((contacts) => {
      this.contacts = contacts;
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
    this.\u0275fac = function NewChatComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewChatComponent)(\u0275\u0275directiveInject(ChatService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewChatComponent, selectors: [["chat-new-chat"]], inputs: { drawer: "drawer" }, decls: 9, vars: 2, consts: [[1, "bg-card", "flex", "h-full", "flex-auto", "flex-col", "overflow-hidden", "dark:bg-default"], [1, "-mb-px", "flex", "h-18", "flex-0", "items-center", "bg-gray-50", "px-6", "dark:bg-transparent"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "ml-2", "text-2xl", "font-semibold"], [1, "relative", "overflow-y-auto"], [1, "border-t", "p-8", "text-center", "text-4xl", "font-semibold", "tracking-tight", "sm:p-16"], [1, "text-secondary", "sticky", "top-0", "z-10", "-mt-px", "border-b", "border-t", "bg-gray-100", "px-6", "py-1", "font-medium", "uppercase", "dark:bg-gray-900", "md:px-8"], [1, "z-20", "flex", "cursor-pointer", "items-center", "border-b", "px-6", "py-4", "dark:hover:bg-hover", "hover:bg-gray-100", "md:px-8"], [1, "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center", "overflow-hidden", "rounded-full"], ["alt", "Contact avatar", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-full", "bg-gray-200", "text-lg", "uppercase", "text-gray-600", "dark:bg-gray-700", "dark:text-gray-200"], [1, "ml-4", "min-w-0"], [1, "truncate", "font-medium", "leading-5"], [1, "text-secondary", "truncate", "leading-5"]], template: function NewChatComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function NewChatComponent_Template_button_click_2_listener() {
          return ctx.drawer.close();
        });
        \u0275\u0275element(3, "mat-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275text(5, "New chat");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5);
        \u0275\u0275template(7, NewChatComponent_Conditional_7_Template, 2, 0)(8, NewChatComponent_Conditional_8_Template, 2, 0, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-left");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.contacts.length ? 7 : 8);
      }
    }, dependencies: [MatButtonModule, MatIconButton, MatIconModule, MatIcon], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewChatComponent, { className: "NewChatComponent", filePath: "src/app/modules/admin/apps/chat/new-chat/new-chat.component.ts", lineNumber: 23 });
})();

// src/app/modules/admin/apps/chat/profile/profile.component.ts
function ProfileComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.profile.avatar, \u0275\u0275sanitizeUrl)("alt", "Profile avatar");
  }
}
function ProfileComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.profile.name.charAt(0), " ");
  }
}
var ProfileComponent = class _ProfileComponent {
  /**
   * Constructor
   */
  constructor(_chatService) {
    this._chatService = _chatService;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._chatService.profile$.pipe(takeUntil(this._unsubscribeAll)).subscribe((profile) => {
      this.profile = profile;
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
  }
  static {
    this.\u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(ChatService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["chat-profile"]], inputs: { drawer: "drawer" }, decls: 35, vars: 11, consts: [[1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-y-auto", "dark:bg-default"], [1, "flex", "h-18", "flex-0", "items-center", "border-b", "bg-gray-50", "px-6", "dark:bg-transparent"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "ml-2", "text-2xl", "font-semibold"], [1, "px-6"], [1, "group", "relative", "mx-auto", "mt-8", "flex", "h-40", "w-40", "flex-0", "rounded-full"], [1, "absolute", "inset-0", "hidden", "cursor-pointer", "flex-col", "items-center", "justify-center", "rounded-full", "bg-gray-800", "bg-opacity-80", "backdrop-blur", "backdrop-filter", "group-hover:flex"], [1, "text-white", 3, "svgIcon"], [1, "mx-6", "mt-2", "text-center", "font-medium", "text-white"], [1, "h-full", "w-full", "rounded-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-full", "bg-gray-200", "text-8xl", "font-semibold", "uppercase", "text-gray-600", "dark:bg-gray-700", "dark:text-gray-200"], [1, "mx-2", "mt-8", "flex", "flex-col"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "ngModel"], [1, "mt-4", "flex", "items-center", "justify-end"], ["mat-button", "", 3, "click"], ["mat-flat-button", "", 1, "ml-2", 3, "color"]], template: function ProfileComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_2_listener() {
          return ctx.drawer.close();
        });
        \u0275\u0275element(3, "mat-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275text(5, "Profile");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275element(9, "mat-icon", 8);
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275text(11, " Change Profile Photo ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(12, ProfileComponent_Conditional_12_Template, 1, 2, "img", 10)(13, ProfileComponent_Conditional_13_Template, 2, 1, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 12)(15, "mat-form-field")(16, "mat-label");
        \u0275\u0275text(17, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "mat-icon", 13)(19, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field")(21, "mat-label");
        \u0275\u0275text(22, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(23, "mat-icon", 13)(24, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "mat-form-field")(26, "mat-label");
        \u0275\u0275text(27, "About");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "mat-icon", 13)(29, "input", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(30, "div", 15)(31, "button", 16);
        \u0275\u0275listener("click", function ProfileComponent_Template_button_click_31_listener() {
          return ctx.drawer.close();
        });
        \u0275\u0275text(32, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "button", 17);
        \u0275\u0275text(34, " Save ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-left");
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_outline:camera");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.profile.avatar ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.profile.avatar ? 13 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:user-circle");
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.profile.name);
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_solid:envelope");
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.profile.email);
        \u0275\u0275advance(4);
        \u0275\u0275property("svgIcon", "heroicons_solid:identification");
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.profile.about);
        \u0275\u0275advance(4);
        \u0275\u0275property("color", "primary");
      }
    }, dependencies: [MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatInputModule, MatInput, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/modules/admin/apps/chat/profile/profile.component.ts", lineNumber: 32 });
})();

// src/app/modules/admin/apps/chat/chats/chats.component.ts
var _c0 = (a0, a1) => ({ "dark:hover:bg-hover hover:bg-gray-100": a0, "bg-primary-50 dark:bg-hover": a1 });
var _c1 = (a0) => [a0];
var _c2 = (a0, a1) => ({ "absolute inset-0 z-20 flex lg:static lg:inset-auto": a0, "hidden lg:flex": a1 });
function ChatsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "chat-new-chat", 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const drawer_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("drawer", drawer_r2);
  }
}
function ChatsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "chat-profile", 6);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const drawer_r2 = \u0275\u0275reference(3);
    \u0275\u0275property("drawer", drawer_r2);
  }
}
function ChatsComponent_Conditional_7_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r3.profile.avatar, \u0275\u0275sanitizeUrl);
  }
}
function ChatsComponent_Conditional_7_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.profile.name.charAt(0), " ");
  }
}
function ChatsComponent_Conditional_7_Conditional_39_For_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 38);
  }
  if (rf & 2) {
    const chat_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("ring-primary-50", ctx_r3.selectedChat && ctx_r3.selectedChat.id === chat_r6.id);
  }
}
function ChatsComponent_Conditional_7_Conditional_39_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 31);
  }
  if (rf & 2) {
    const chat_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", chat_r6.contact.avatar, \u0275\u0275sanitizeUrl);
  }
}
function ChatsComponent_Conditional_7_Conditional_39_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const chat_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chat_r6.contact.name.charAt(0), " ");
  }
}
function ChatsComponent_Conditional_7_Conditional_39_For_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 37);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:speaker-x-mark");
  }
}
function ChatsComponent_Conditional_7_Conditional_39_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 28)(1, "div", 29);
    \u0275\u0275template(2, ChatsComponent_Conditional_7_Conditional_39_For_1_Conditional_2_Template, 1, 2, "div", 30)(3, ChatsComponent_Conditional_7_Conditional_39_For_1_Conditional_3_Template, 1, 1, "img", 31)(4, ChatsComponent_Conditional_7_Conditional_39_For_1_Conditional_4_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32)(6, "div", 33);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 34);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 35)(11, "div", 36);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ChatsComponent_Conditional_7_Conditional_39_For_1_Conditional_13_Template, 1, 1, "mat-icon", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chat_r6 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(13, _c0, !ctx_r3.selectedChat || ctx_r3.selectedChat.id !== chat_r6.id, ctx_r3.selectedChat && ctx_r3.selectedChat.id === chat_r6.id))("routerLink", \u0275\u0275pureFunction1(16, _c1, chat_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(chat_r6.unreadCount > 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(chat_r6.contact.avatar ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!chat_r6.contact.avatar ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", chat_r6.contact.name, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("text-primary", chat_r6.unreadCount > 0)("dark:text-primary-500", chat_r6.unreadCount > 0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", chat_r6.lastMessage, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", chat_r6.lastMessageAt, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(chat_r6.muted ? 13 : -1);
  }
}
function ChatsComponent_Conditional_7_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ChatsComponent_Conditional_7_Conditional_39_For_1_Template, 14, 18, "a", 28, \u0275\u0275componentInstance().trackByFn, true);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r3.filteredChats);
  }
}
function ChatsComponent_Conditional_7_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-icon", 39);
    \u0275\u0275elementStart(2, "div", 40);
    \u0275\u0275text(3, " No chats ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:chat-bubble-oval-left-ellipsis");
  }
}
function ChatsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 11)(2, "div", 12)(3, "div", 13);
    \u0275\u0275listener("click", function ChatsComponent_Conditional_7_Template_div_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openProfile());
    });
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275template(5, ChatsComponent_Conditional_7_Conditional_5_Template, 1, 1, "img", 15)(6, ChatsComponent_Conditional_7_Conditional_6_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 18);
    \u0275\u0275listener("click", function ChatsComponent_Conditional_7_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openNewChat());
    });
    \u0275\u0275element(10, "mat-icon", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 20);
    \u0275\u0275element(12, "mat-icon", 19);
    \u0275\u0275elementStart(13, "mat-menu", null, 1)(15, "button", 21);
    \u0275\u0275element(16, "mat-icon", 19);
    \u0275\u0275text(17, " New group ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 21);
    \u0275\u0275element(19, "mat-icon", 19);
    \u0275\u0275text(20, " Create a room ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 22);
    \u0275\u0275listener("click", function ChatsComponent_Conditional_7_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.openProfile());
    });
    \u0275\u0275element(22, "mat-icon", 19);
    \u0275\u0275text(23, " Profile ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 21);
    \u0275\u0275element(25, "mat-icon", 19);
    \u0275\u0275text(26, " Archived ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 21);
    \u0275\u0275element(28, "mat-icon", 19);
    \u0275\u0275text(29, " Starred ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 21);
    \u0275\u0275element(31, "mat-icon", 19);
    \u0275\u0275text(32, " Settings ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 23)(34, "mat-form-field", 24);
    \u0275\u0275element(35, "mat-icon", 25);
    \u0275\u0275elementStart(36, "input", 26, 2);
    \u0275\u0275listener("input", function ChatsComponent_Conditional_7_Template_input_input_36_listener() {
      \u0275\u0275restoreView(_r3);
      const searchField_r5 = \u0275\u0275reference(37);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.filterChats(searchField_r5.value));
    });
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(38, "div", 27);
    \u0275\u0275template(39, ChatsComponent_Conditional_7_Conditional_39_Template, 2, 0)(40, ChatsComponent_Conditional_7_Conditional_40_Template, 4, 1, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const chatsHeaderMenu_r7 = \u0275\u0275reference(14);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r3.profile.avatar ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r3.profile.avatar ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.profile.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_outline:plus-circle");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", chatsHeaderMenu_r7);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:ellipsis-vertical");
    \u0275\u0275advance(4);
    \u0275\u0275property("svgIcon", "heroicons_outline:user-group");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:chat-bubble-left-right");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:user-circle");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:archive-box");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:star");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:cog-8-tooth");
    \u0275\u0275advance(3);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
    \u0275\u0275advance();
    \u0275\u0275property("autocomplete", "off")("placeholder", "Search or start new chat");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r3.filteredChats.length > 0 ? 39 : 40);
  }
}
function ChatsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "mat-icon", 39);
    \u0275\u0275elementStart(2, "div", 40);
    \u0275\u0275text(3, " No chats ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:chat-bubble-oval-left-ellipsis");
  }
}
function ChatsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "router-outlet");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(1, _c2, ctx_r3.selectedChat && ctx_r3.selectedChat.id, !ctx_r3.selectedChat || !ctx_r3.selectedChat.id));
  }
}
var ChatsComponent = class _ChatsComponent {
  /**
   * Constructor
   */
  constructor(_chatService, _changeDetectorRef) {
    this._chatService = _chatService;
    this._changeDetectorRef = _changeDetectorRef;
    this.drawerOpened = false;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._chatService.chats$.pipe(takeUntil(this._unsubscribeAll)).subscribe((chats) => {
      this.chats = this.filteredChats = chats;
      this._changeDetectorRef.markForCheck();
    });
    this._chatService.profile$.pipe(takeUntil(this._unsubscribeAll)).subscribe((profile) => {
      this.profile = profile;
      this._changeDetectorRef.markForCheck();
    });
    this._chatService.chat$.pipe(takeUntil(this._unsubscribeAll)).subscribe((chat) => {
      this.selectedChat = chat;
      this._changeDetectorRef.markForCheck();
    });
  }
  /**
   * On destroy
   */
  ngOnDestroy() {
    this._unsubscribeAll.next(null);
    this._unsubscribeAll.complete();
    this._chatService.resetChat();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Filter the chats
   *
   * @param query
   */
  filterChats(query) {
    if (!query) {
      this.filteredChats = this.chats;
      return;
    }
    this.filteredChats = this.chats.filter((chat) => chat.contact.name.toLowerCase().includes(query.toLowerCase()));
  }
  /**
   * Open the new chat sidebar
   */
  openNewChat() {
    this.drawerComponent = "new-chat";
    this.drawerOpened = true;
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Open the profile sidebar
   */
  openProfile() {
    this.drawerComponent = "profile";
    this.drawerOpened = true;
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
    this.\u0275fac = function ChatsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ChatsComponent)(\u0275\u0275directiveInject(ChatService), \u0275\u0275directiveInject(ChangeDetectorRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ChatsComponent, selectors: [["chat-chats"]], decls: 10, vars: 7, consts: [["drawer", ""], ["chatsHeaderMenu", ""], ["searchField", ""], [1, "bg-card", "relative", "flex", "w-full", "flex-auto", "dark:bg-transparent"], [1, "h-full", "flex-auto", 3, "hasBackdrop"], [1, "w-full", "dark:bg-gray-900", "sm:w-100", "lg:border-r", "lg:shadow-none", 3, "openedChange", "autoFocus", "opened"], [3, "drawer"], [1, "flex", "overflow-hidden"], [1, "bg-card", "relative", "flex", "w-full", "min-w-0", "flex-auto", "flex-col", "dark:bg-transparent", "lg:min-w-100", "lg:max-w-100"], [1, "flex", "h-full", "flex-auto", "flex-col", "items-center", "justify-center"], [1, "flex-auto", "border-l", 3, "ngClass"], [1, "flex", "flex-0", "flex-col", "border-b", "bg-gray-50", "px-8", "py-4", "dark:bg-transparent"], [1, "flex", "items-center"], [1, "mr-1", "flex", "cursor-pointer", "items-center", 3, "click"], [1, "h-10", "w-10"], ["alt", "Profile avatar", 1, "h-full", "w-full", "rounded-full", "object-cover", 3, "src"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-full", "bg-gray-200", "text-lg", "uppercase", "text-gray-600", "dark:bg-gray-700", "dark:text-gray-200"], [1, "ml-4", "truncate", "font-medium"], ["mat-icon-button", "", 1, "ml-auto", 3, "click"], [3, "svgIcon"], ["mat-icon-button", "", 1, "-mr-4", "ml-1", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "mt-4"], [1, "fuse-mat-rounded", "fuse-mat-dense", "w-full", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "input", "autocomplete", "placeholder"], [1, "flex-auto", "overflow-y-auto"], [1, "z-20", "flex", "cursor-pointer", "items-center", "border-b", "px-8", "py-5", 3, "ngClass", "routerLink"], [1, "relative", "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center"], [1, "ring-bg-card", "absolute", "bottom-0", "right-0", "-ml-0.5", "h-2", "w-2", "flex-0", "rounded-full", "bg-primary", "text-on-primary", "ring-2", "dark:bg-primary-500", "dark:ring-gray-900", 3, "ring-primary-50"], ["alt", "Contact avatar", 1, "h-full", "w-full", "rounded-full", "object-cover", 3, "src"], [1, "ml-4", "min-w-0"], [1, "truncate", "font-medium", "leading-5"], [1, "text-secondary", "truncate", "leading-5"], [1, "ml-auto", "flex", "flex-col", "items-end", "self-start", "pl-2"], [1, "text-secondary", "text-sm", "leading-5"], [1, "text-hint", "icon-size-5", 3, "svgIcon"], [1, "ring-bg-card", "absolute", "bottom-0", "right-0", "-ml-0.5", "h-2", "w-2", "flex-0", "rounded-full", "bg-primary", "text-on-primary", "ring-2", "dark:bg-primary-500", "dark:ring-gray-900"], [1, "icon-size-24", 3, "svgIcon"], [1, "text-secondary", "mt-4", "text-2xl", "font-semibold", "tracking-tight"]], template: function ChatsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 3)(1, "mat-drawer-container", 4)(2, "mat-drawer", 5, 0);
        \u0275\u0275twoWayListener("openedChange", function ChatsComponent_Template_mat_drawer_openedChange_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.drawerOpened, $event) || (ctx.drawerOpened = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275template(4, ChatsComponent_Conditional_4_Template, 1, 1, "chat-new-chat", 6)(5, ChatsComponent_Conditional_5_Template, 1, 1, "chat-profile", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-drawer-content", 7);
        \u0275\u0275template(7, ChatsComponent_Conditional_7_Template, 41, 17, "div", 8)(8, ChatsComponent_Conditional_8_Template, 4, 1, "div", 9)(9, ChatsComponent_Conditional_9_Template, 2, 4, "div", 10);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("hasBackdrop", false);
        \u0275\u0275advance();
        \u0275\u0275property("autoFocus", false);
        \u0275\u0275twoWayProperty("opened", ctx.drawerOpened);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.drawerComponent === "new-chat" ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.drawerComponent === "profile" ? 5 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.chats && ctx.chats.length > 0 ? 7 : 8);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.chats && ctx.chats.length > 0 ? 9 : -1);
      }
    }, dependencies: [
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      NewChatComponent,
      ProfileComponent,
      MatButtonModule,
      MatIconButton,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      NgClass,
      RouterLink,
      RouterOutlet
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ChatsComponent, { className: "ChatsComponent", filePath: "src/app/modules/admin/apps/chat/chats/chats.component.ts", lineNumber: 42 });
})();

// src/app/modules/admin/apps/chat/contact-info/contact-info.component.ts
function ContactInfoComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.chat.contact.avatar, \u0275\u0275sanitizeUrl)("alt", "Contact avatar");
  }
}
function ContactInfoComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.chat.contact.name.charAt(0), " ");
  }
}
function ContactInfoComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const media_r2 = ctx.$implicit;
    \u0275\u0275property("src", media_r2, \u0275\u0275sanitizeUrl);
  }
}
function ContactInfoComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 18);
    \u0275\u0275text(2, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.chat.contact.details.emails[0].email, " ");
  }
}
function ContactInfoComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 18);
    \u0275\u0275text(2, " Phone number ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.chat.contact.details.phoneNumbers[0].phoneNumber, " ");
  }
}
function ContactInfoComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 18);
    \u0275\u0275text(2, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.chat.contact.details.title);
  }
}
function ContactInfoComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 18);
    \u0275\u0275text(2, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.chat.contact.details.company);
  }
}
function ContactInfoComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 18);
    \u0275\u0275text(2, "Birthday");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.chat.contact.details.birthday);
  }
}
function ContactInfoComponent_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 18);
    \u0275\u0275text(2, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.chat.contact.details.address);
  }
}
var ContactInfoComponent = class _ContactInfoComponent {
  /**
   * Constructor
   */
  constructor() {
  }
  static {
    this.\u0275fac = function ContactInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactInfoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactInfoComponent, selectors: [["chat-contact-info"]], inputs: { chat: "chat", drawer: "drawer" }, decls: 30, vars: 11, consts: [[1, "bg-card", "flex", "h-full", "flex-auto", "flex-col", "dark:bg-default"], [1, "flex", "h-18", "flex-0", "items-center", "border-b", "bg-gray-50", "px-4", "dark:bg-transparent"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "ml-2", "text-lg", "font-medium"], [1, "overflow-y-auto"], [1, "mt-8", "flex", "flex-col", "items-center"], [1, "h-40", "w-40", "rounded-full"], [1, "h-full", "w-full", "rounded-full", "object-cover", 3, "src", "alt"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-full", "bg-gray-200", "text-8xl", "font-semibold", "uppercase", "text-gray-600", "dark:bg-gray-700", "dark:text-gray-200"], [1, "mt-4", "text-lg", "font-medium"], [1, "text-secondary", "mt-0.5", "text-md"], [1, "px-7", "py-10"], [1, "text-lg", "font-medium"], [1, "mt-4", "grid", "grid-cols-4", "gap-1"], [1, "h-20", "rounded", "object-cover", 3, "src"], [1, "mt-10", "space-y-4"], [1, "mb-3", "text-lg", "font-medium"], [1, "text-secondary", "font-medium"], [1, ""]], template: function ContactInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function ContactInfoComponent_Template_button_click_2_listener() {
          return ctx.drawer.close();
        });
        \u0275\u0275element(3, "mat-icon", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 4);
        \u0275\u0275text(5, "Contact info");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275template(9, ContactInfoComponent_Conditional_9_Template, 1, 2, "img", 8)(10, ContactInfoComponent_Conditional_10_Template, 2, 1, "div", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 10);
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 11);
        \u0275\u0275text(14);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 12)(16, "div", 13);
        \u0275\u0275text(17, "Media");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 14);
        \u0275\u0275repeaterCreate(19, ContactInfoComponent_For_20_Template, 1, 1, "img", 15, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 16)(22, "div", 17);
        \u0275\u0275text(23, "Details");
        \u0275\u0275elementEnd();
        \u0275\u0275template(24, ContactInfoComponent_Conditional_24_Template, 5, 1, "div")(25, ContactInfoComponent_Conditional_25_Template, 5, 1, "div")(26, ContactInfoComponent_Conditional_26_Template, 5, 1, "div")(27, ContactInfoComponent_Conditional_27_Template, 5, 1, "div")(28, ContactInfoComponent_Conditional_28_Template, 5, 1, "div")(29, ContactInfoComponent_Conditional_29_Template, 5, 1, "div");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_outline:x-mark");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.chat.contact.avatar ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.chat.contact.avatar ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.chat.contact.name);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.chat.contact.about, " ");
        \u0275\u0275advance(5);
        \u0275\u0275repeater(ctx.chat.contact.attachments.media);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.chat.contact.details.emails.length ? 24 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.chat.contact.details.phoneNumbers.length ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.chat.contact.details.title ? 26 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.chat.contact.details.company ? 27 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.chat.contact.details.birthday ? 28 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.chat.contact.details.address ? 29 : -1);
      }
    }, dependencies: [MatButtonModule, MatIconButton, MatIconModule, MatIcon], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactInfoComponent, { className: "ContactInfoComponent", filePath: "src/app/modules/admin/apps/chat/contact-info/contact-info.component.ts", lineNumber: 19 });
})();

// src/app/modules/admin/apps/chat/conversation/conversation.component.ts
var _c02 = ["messageInput"];
var _c12 = () => ["./"];
var _c22 = (a0, a1, a2, a3) => ({ "items-end": a0, "items-start": a1, "mt-0.5": a2, "mt-3": a3 });
var _c3 = (a0, a1) => ({ "bg-blue-500 text-blue-50": a0, "bg-gray-500 text-gray-50": a1 });
var _c4 = (a0, a1) => ({ "-right-1 -mr-px mb-px text-blue-500": a0, "-left-1 -ml-px mb-px -scale-x-1 text-gray-500": a1 });
var _c5 = (a0, a1) => ({ "mr-3": a0, "ml-3": a1 });
function ConversationComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.chat.contact.avatar, \u0275\u0275sanitizeUrl);
  }
}
function ConversationComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.chat.contact.name.charAt(0), " ");
  }
}
function ConversationComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 12);
    \u0275\u0275text(1, " Mute notifications ");
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_outline:speaker-x-mark");
  }
}
function ConversationComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 12);
    \u0275\u0275text(1, " Unmute notifications ");
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_outline:speaker-wave");
  }
}
function ConversationComponent_Conditional_1_For_36_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 36);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, message_r3.createdAt, "longDate"), " ");
  }
}
function ConversationComponent_Conditional_1_For_36_Conditional_5_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ConversationComponent_Conditional_1_For_36_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33);
    \u0275\u0275template(1, ConversationComponent_Conditional_1_For_36_Conditional_5_ng_container_1_Template, 1, 0, "ng-container", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275nextContext(2);
    const speechBubbleExtension_r4 = \u0275\u0275reference(4);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(2, _c4, message_r3.isMine, !message_r3.isMine));
    \u0275\u0275advance();
    \u0275\u0275property("ngTemplateOutlet", speechBubbleExtension_r4);
  }
}
function ConversationComponent_Conditional_1_For_36_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(5, _c5, message_r3.isMine, !message_r3.isMine));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, message_r3.createdAt, "HH:mm"), " ");
  }
}
function ConversationComponent_Conditional_1_For_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ConversationComponent_Conditional_1_For_36_Conditional_0_Template, 6, 4, "div", 30);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementStart(3, "div", 31)(4, "div", 32);
    \u0275\u0275template(5, ConversationComponent_Conditional_1_For_36_Conditional_5_Template, 2, 5, "div", 33);
    \u0275\u0275element(6, "div", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ConversationComponent_Conditional_1_For_36_Conditional_7_Template, 3, 8, "div", 35);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r3 = ctx.$implicit;
    const \u0275$index_72_r5 = ctx.$index;
    const \u0275$count_72_r6 = ctx.$count;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(\u0275$index_72_r5 === 0 || \u0275\u0275pipeBind2(1, 6, ctx_r1.chat.messages[\u0275$index_72_r5 - 1].createdAt, "d") !== \u0275\u0275pipeBind2(2, 9, message_r3.createdAt, "d") ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction4(12, _c22, message_r3.isMine, !message_r3.isMine, \u0275$index_72_r5 > 0 && ctx_r1.chat.messages[\u0275$index_72_r5 - 1].isMine === message_r3.isMine, \u0275$index_72_r5 > 0 && ctx_r1.chat.messages[\u0275$index_72_r5 - 1].isMine !== message_r3.isMine));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(17, _c3, message_r3.isMine, !message_r3.isMine));
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_72_r5 === \u0275$count_72_r6 - 1 || ctx_r1.chat.messages[\u0275$index_72_r5 + 1].isMine !== message_r3.isMine ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", message_r3.value, \u0275\u0275sanitizeHtml);
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_72_r5 === 0 || \u0275$index_72_r5 === \u0275$count_72_r6 - 1 || ctx_r1.chat.messages[\u0275$index_72_r5 + 1].isMine !== message_r3.isMine || ctx_r1.chat.messages[\u0275$index_72_r5 + 1].createdAt !== message_r3.createdAt ? 7 : -1);
  }
}
function ConversationComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-drawer-container", 5)(1, "mat-drawer", 7, 1);
    \u0275\u0275twoWayListener("openedChange", function ConversationComponent_Conditional_1_Template_mat_drawer_openedChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.drawerOpened, $event) || (ctx_r1.drawerOpened = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275element(3, "chat-contact-info", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-drawer-content", 9)(5, "div", 10)(6, "a", 11);
    \u0275\u0275listener("click", function ConversationComponent_Conditional_1_Template_a_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetChat());
    });
    \u0275\u0275element(7, "mat-icon", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13);
    \u0275\u0275listener("click", function ConversationComponent_Conditional_1_Template_div_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openContactInfo());
    });
    \u0275\u0275elementStart(9, "div", 14);
    \u0275\u0275template(10, ConversationComponent_Conditional_1_Conditional_10_Template, 1, 1, "img", 15)(11, ConversationComponent_Conditional_1_Conditional_11_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 18);
    \u0275\u0275element(15, "mat-icon", 12);
    \u0275\u0275elementStart(16, "mat-menu", null, 2)(18, "button", 19);
    \u0275\u0275listener("click", function ConversationComponent_Conditional_1_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openContactInfo());
    });
    \u0275\u0275element(19, "mat-icon", 12);
    \u0275\u0275text(20, " Contact info ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 20);
    \u0275\u0275element(22, "mat-icon", 12);
    \u0275\u0275text(23, " Select messages ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 19);
    \u0275\u0275listener("click", function ConversationComponent_Conditional_1_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMuteNotifications());
    });
    \u0275\u0275template(25, ConversationComponent_Conditional_1_Conditional_25_Template, 2, 1)(26, ConversationComponent_Conditional_1_Conditional_26_Template, 2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 20);
    \u0275\u0275element(28, "mat-icon", 12);
    \u0275\u0275text(29, " Clear messages ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 20);
    \u0275\u0275element(31, "mat-icon", 12);
    \u0275\u0275text(32, " Delete chat ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(33, "div", 21)(34, "div", 22);
    \u0275\u0275repeaterCreate(35, ConversationComponent_Conditional_1_For_36_Template, 8, 20, null, null, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 23)(38, "div", 24)(39, "button", 25);
    \u0275\u0275element(40, "mat-icon", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "button", 26);
    \u0275\u0275element(42, "mat-icon", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "mat-form-field", 27);
    \u0275\u0275element(44, "textarea", 28, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div", 29)(47, "button", 25);
    \u0275\u0275element(48, "mat-icon", 12);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const drawer_r7 = \u0275\u0275reference(2);
    const conversationHeaderMenu_r8 = \u0275\u0275reference(17);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("hasBackdrop", false);
    \u0275\u0275advance();
    \u0275\u0275property("autoFocus", false)("mode", ctx_r1.drawerMode)("position", "end");
    \u0275\u0275twoWayProperty("opened", ctx_r1.drawerOpened);
    \u0275\u0275advance(2);
    \u0275\u0275property("drawer", drawer_r7)("chat", ctx_r1.chat);
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c12));
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:arrow-long-left");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.chat.contact.avatar ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.chat.contact.avatar ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.chat.contact.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", conversationHeaderMenu_r8);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:ellipsis-vertical");
    \u0275\u0275advance(4);
    \u0275\u0275property("svgIcon", "heroicons_outline:user-circle");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:check-circle");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.chat.muted ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.chat.muted ? 26 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_outline:backspace");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:trash");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.chat.messages);
    \u0275\u0275advance(5);
    \u0275\u0275property("svgIcon", "heroicons_outline:face-smile");
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_outline:paper-clip");
    \u0275\u0275advance(6);
    \u0275\u0275property("svgIcon", "heroicons_outline:paper-airplane");
  }
}
function ConversationComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-icon", 39);
    \u0275\u0275elementStart(2, "div", 40);
    \u0275\u0275text(3, " Select a conversation or start a new chat ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:chat-bubble-oval-left-ellipsis");
  }
}
function ConversationComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 41)(1, "g", 42);
    \u0275\u0275element(2, "path", 43);
    \u0275\u0275elementEnd()();
  }
}
var ConversationComponent = class _ConversationComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _chatService, _fuseMediaWatcherService, _ngZone) {
    this._changeDetectorRef = _changeDetectorRef;
    this._chatService = _chatService;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this._ngZone = _ngZone;
    this.drawerMode = "side";
    this.drawerOpened = false;
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Decorated methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Resize on 'input' and 'ngModelChange' events
   *
   * @private
   */
  _resizeMessageInput() {
    this._ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.messageInput.nativeElement.style.height = "auto";
        this._changeDetectorRef.detectChanges();
        this.messageInput.nativeElement.style.height = `${this.messageInput.nativeElement.scrollHeight}px`;
        this._changeDetectorRef.detectChanges();
      });
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this._chatService.chat$.pipe(takeUntil(this._unsubscribeAll)).subscribe((chat) => {
      this.chat = chat;
      this._changeDetectorRef.markForCheck();
    });
    this._fuseMediaWatcherService.onMediaChange$.pipe(takeUntil(this._unsubscribeAll)).subscribe(({ matchingAliases }) => {
      if (matchingAliases.includes("lg")) {
        this.drawerMode = "side";
      } else {
        this.drawerMode = "over";
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
   * Open the contact info
   */
  openContactInfo() {
    this.drawerOpened = true;
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Reset the chat
   */
  resetChat() {
    this._chatService.resetChat();
    this.drawerOpened = false;
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Toggle mute notifications
   */
  toggleMuteNotifications() {
    this.chat.muted = !this.chat.muted;
    this._chatService.updateChat(this.chat.id, this.chat).subscribe();
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
    this.\u0275fac = function ConversationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConversationComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ChatService), \u0275\u0275directiveInject(FuseMediaWatcherService), \u0275\u0275directiveInject(NgZone));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConversationComponent, selectors: [["chat-conversation"]], viewQuery: function ConversationComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.messageInput = _t.first);
      }
    }, hostBindings: function ConversationComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("input", function ConversationComponent_input_HostBindingHandler() {
          return ctx._resizeMessageInput();
        })("ngModelChange", function ConversationComponent_ngModelChange_HostBindingHandler() {
          return ctx._resizeMessageInput();
        });
      }
    }, decls: 5, vars: 1, consts: [["speechBubbleExtension", ""], ["drawer", ""], ["conversationHeaderMenu", ""], ["messageInput", ""], [1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-y-auto", "dark:bg-default", "lg:overflow-hidden"], [1, "h-full", "flex-auto", 3, "hasBackdrop"], [1, "flex", "flex-auto", "flex-col", "items-center", "justify-center", "bg-gray-100", "dark:bg-transparent"], [1, "w-full", "dark:bg-gray-900", "sm:w-100", "lg:border-l", "lg:shadow-none", 3, "openedChange", "autoFocus", "mode", "position", "opened"], [3, "drawer", "chat"], [1, "flex", "flex-col", "overflow-hidden"], [1, "flex", "h-18", "flex-0", "items-center", "border-b", "bg-gray-50", "px-4", "dark:bg-transparent", "md:px-6"], ["mat-icon-button", "", 1, "md:-ml-2", "lg:hidden", 3, "click", "routerLink"], [3, "svgIcon"], [1, "ml-2", "mr-2", "flex", "cursor-pointer", "items-center", "lg:ml-0", 3, "click"], [1, "relative", "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center"], ["alt", "Contact avatar", 1, "h-full", "w-full", "rounded-full", "object-cover", 3, "src"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-full", "bg-gray-200", "text-lg", "uppercase", "text-gray-600", "dark:bg-gray-700", "dark:text-gray-200"], [1, "ml-4", "truncate", "text-lg", "font-medium", "leading-5"], ["mat-icon-button", "", 1, "ml-auto", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], ["mat-menu-item", ""], [1, "flex", "flex-col-reverse", "overflow-y-auto"], [1, "bg-card", "flex", "flex-auto", "shrink", "flex-col", "p-6", "dark:bg-transparent"], [1, "flex", "items-end", "border-t", "bg-gray-50", "p-4", "dark:bg-transparent"], [1, "my-px", "flex", "h-11", "items-center"], ["mat-icon-button", ""], ["mat-icon-button", "", 1, "ml-0.5"], ["subscriptSizing", "dynamic", 1, "fuse-mat-dense", "fuse-mat-rounded", "fuse-mat-bold", "ml-4", "w-full"], ["matInput", "", "cdkTextareaAutosize", ""], [1, "my-px", "ml-4", "flex", "h-11", "items-center"], [1, "-mx-6", "my-3", "flex", "items-center", "justify-center"], [1, "flex", "flex-col", 3, "ngClass"], [1, "relative", "max-w-3/4", "rounded-lg", "px-3", "py-2", 3, "ngClass"], [1, "absolute", "bottom-0", "w-3", 3, "ngClass"], [1, "min-w-4", "leading-5", 3, "innerHTML"], [1, "text-secondary", "my-0.5", "text-sm", "font-medium", 3, "ngClass"], [1, "flex-auto", "border-b"], [1, "text-secondary", "mx-4", "flex-0", "text-sm", "font-medium", "leading-5"], [4, "ngTemplateOutlet"], [1, "icon-size-24", 3, "svgIcon"], [1, "text-secondary", "mt-4", "text-2xl", "font-semibold", "tracking-tight"], ["width", "100%", "height", "100%", "viewBox", "0 0 66 66", "xmlns", "http://www.w3.org/2000/svg"], ["id", "Page-1", "stroke", "none", "stroke-width", "1", "fill", "none", "fill-rule", "evenodd"], ["d", "M1.01522827,0.516204834 C-8.83532715,54.3062744 61.7609863,70.5215302 64.8009949,64.3061218 C68.8074951,54.8859711 30.1663208,52.9997559 37.5036011,0.516204834 L1.01522827,0.516204834 Z", "fill", "currentColor", "fill-rule", "nonzero"]], template: function ConversationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4);
        \u0275\u0275template(1, ConversationComponent_Conditional_1_Template, 49, 24, "mat-drawer-container", 5)(2, ConversationComponent_Conditional_2_Template, 4, 1, "div", 6)(3, ConversationComponent_ng_template_3_Template, 3, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.chat ? 1 : 2);
      }
    }, dependencies: [
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      ContactInfoComponent,
      MatButtonModule,
      MatIconAnchor,
      MatIconButton,
      RouterLink,
      MatIconModule,
      MatIcon,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      NgClass,
      NgTemplateOutlet,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      CdkTextareaAutosize,
      TextFieldModule,
      DatePipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConversationComponent, { className: "ConversationComponent", filePath: "src/app/modules/admin/apps/chat/conversation/conversation.component.ts", lineNumber: 48 });
})();

// src/app/modules/admin/apps/chat/empty-conversation/empty-conversation.component.ts
var EmptyConversationComponent = class _EmptyConversationComponent {
  /**
   * Constructor
   */
  constructor() {
  }
  static {
    this.\u0275fac = function EmptyConversationComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EmptyConversationComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmptyConversationComponent, selectors: [["chat-empty-conversation"]], decls: 5, vars: 1, consts: [[1, "bg-card", "flex", "flex-auto", "flex-col", "overflow-y-auto", "dark:bg-default", "lg:overflow-hidden"], [1, "flex", "flex-auto", "flex-col", "items-center", "justify-center", "bg-gray-100", "dark:bg-transparent"], [1, "icon-size-24", 3, "svgIcon"], [1, "text-secondary", "mt-4", "text-2xl", "font-semibold", "tracking-tight"]], template: function EmptyConversationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "mat-icon", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275text(4, " Select a conversation or start a new chat ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_outline:chat-bubble-oval-left-ellipsis");
      }
    }, dependencies: [MatIconModule, MatIcon], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmptyConversationComponent, { className: "EmptyConversationComponent", filePath: "src/app/modules/admin/apps/chat/empty-conversation/empty-conversation.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin/apps/chat/chat.routes.ts
var conversationResolver = (route, state) => {
  const chatService = inject(ChatService);
  const router = inject(Router);
  return chatService.getChatById(route.paramMap.get("id")).pipe(
    // Error here means the requested chat is not available
    catchError((error) => {
      console.error(error);
      const parentUrl = state.url.split("/").slice(0, -1).join("/");
      router.navigateByUrl(parentUrl);
      return throwError(error);
    })
  );
};
var chat_routes_default = [
  {
    path: "",
    component: ChatComponent,
    resolve: {
      chats: () => inject(ChatService).getChats(),
      contacts: () => inject(ChatService).getContacts(),
      profile: () => inject(ChatService).getProfile()
    },
    children: [
      {
        path: "",
        component: ChatsComponent,
        children: [
          {
            path: "",
            pathMatch: "full",
            component: EmptyConversationComponent
          },
          {
            path: ":id",
            component: ConversationComponent,
            resolve: {
              conversation: conversationResolver
            }
          }
        ]
      }
    ]
  }
];
export {
  chat_routes_default as default
};
//# sourceMappingURL=chunk-NH3OGOQF.js.map
