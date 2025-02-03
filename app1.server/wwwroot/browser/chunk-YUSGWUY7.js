import {
  MatDatepicker,
  MatDatepickerInput,
  MatDatepickerModule,
  MatDatepickerToggle
} from "./chunk-UPDLTK7N.js";
import {
  FuseFindByKeyPipe
} from "./chunk-G4MGEPS3.js";
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
  FuseConfirmationService
} from "./chunk-7Z6ZIB4I.js";
import "./chunk-M6DXA547.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-B6LWBRMU.js";
import {
  FuseMediaWatcherService
} from "./chunk-NDM3MP5U.js";
import "./chunk-YHH4B3V4.js";
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
  ReactiveFormsModule,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
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
  MatOption,
  MatOptionModule,
  MatRipple,
  MatRippleModule
} from "./chunk-F6PEOSCL.js";
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
  AsyncPipe,
  DOCUMENT,
  DatePipe,
  I18nPluralPipe,
  NgClass
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
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/apps/contacts/contacts.component.ts
var ContactsComponent = class _ContactsComponent {
  /**
   * Constructor
   */
  constructor() {
  }
  static {
    this.\u0275fac = function ContactsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsComponent, selectors: [["contacts"]], decls: 1, vars: 0, template: function ContactsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "router-outlet");
      }
    }, dependencies: [RouterOutlet], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsComponent, { className: "ContactsComponent", filePath: "src/app/modules/admin/apps/contacts/contacts.component.ts", lineNumber: 15 });
})();

// src/app/modules/admin/apps/contacts/contacts.service.ts
var ContactsService = class _ContactsService {
  /**
   * Constructor
   */
  constructor(_httpClient) {
    this._httpClient = _httpClient;
    this._contact = new BehaviorSubject(null);
    this._contacts = new BehaviorSubject(null);
    this._countries = new BehaviorSubject(null);
    this._tags = new BehaviorSubject(null);
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
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
   * Getter for countries
   */
  get countries$() {
    return this._countries.asObservable();
  }
  /**
   * Getter for tags
   */
  get tags$() {
    return this._tags.asObservable();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get contacts
   */
  getContacts() {
    return this._httpClient.get("api/apps/contacts/all").pipe(tap((contacts) => {
      this._contacts.next(contacts);
    }));
  }
  /**
   * Search contacts with given query
   *
   * @param query
   */
  searchContacts(query) {
    return this._httpClient.get("api/apps/contacts/search", {
      params: { query }
    }).pipe(tap((contacts) => {
      this._contacts.next(contacts);
    }));
  }
  /**
   * Get contact by id
   */
  getContactById(id) {
    return this._contacts.pipe(take(1), map((contacts) => {
      const contact = contacts.find((item) => item.id === id) || null;
      this._contact.next(contact);
      return contact;
    }), switchMap((contact) => {
      if (!contact) {
        return throwError("Could not found contact with id of " + id + "!");
      }
      return of(contact);
    }));
  }
  /**
   * Create contact
   */
  createContact() {
    return this.contacts$.pipe(take(1), switchMap((contacts) => this._httpClient.post("api/apps/contacts/contact", {}).pipe(map((newContact) => {
      this._contacts.next([newContact, ...contacts]);
      return newContact;
    }))));
  }
  /**
   * Update contact
   *
   * @param id
   * @param contact
   */
  updateContact(id, contact) {
    return this.contacts$.pipe(take(1), switchMap((contacts) => this._httpClient.patch("api/apps/contacts/contact", {
      id,
      contact
    }).pipe(map((updatedContact) => {
      const index = contacts.findIndex((item) => item.id === id);
      contacts[index] = updatedContact;
      this._contacts.next(contacts);
      return updatedContact;
    }), switchMap((updatedContact) => this.contact$.pipe(take(1), filter((item) => item && item.id === id), tap(() => {
      this._contact.next(updatedContact);
      return updatedContact;
    }))))));
  }
  /**
   * Delete the contact
   *
   * @param id
   */
  deleteContact(id) {
    return this.contacts$.pipe(take(1), switchMap((contacts) => this._httpClient.delete("api/apps/contacts/contact", { params: { id } }).pipe(map((isDeleted) => {
      const index = contacts.findIndex((item) => item.id === id);
      contacts.splice(index, 1);
      this._contacts.next(contacts);
      return isDeleted;
    }))));
  }
  /**
   * Get countries
   */
  getCountries() {
    return this._httpClient.get("api/apps/contacts/countries").pipe(tap((countries) => {
      this._countries.next(countries);
    }));
  }
  /**
   * Get tags
   */
  getTags() {
    return this._httpClient.get("api/apps/contacts/tags").pipe(tap((tags) => {
      this._tags.next(tags);
    }));
  }
  /**
   * Create tag
   *
   * @param tag
   */
  createTag(tag) {
    return this.tags$.pipe(take(1), switchMap((tags) => this._httpClient.post("api/apps/contacts/tag", { tag }).pipe(map((newTag) => {
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
    return this.tags$.pipe(take(1), switchMap((tags) => this._httpClient.patch("api/apps/contacts/tag", {
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
    return this.tags$.pipe(take(1), switchMap((tags) => this._httpClient.delete("api/apps/contacts/tag", { params: { id } }).pipe(map((isDeleted) => {
      const index = tags.findIndex((item) => item.id === id);
      tags.splice(index, 1);
      this._tags.next(tags);
      return isDeleted;
    }), filter((isDeleted) => isDeleted), switchMap((isDeleted) => this.contacts$.pipe(take(1), map((contacts) => {
      contacts.forEach((contact) => {
        const tagIndex = contact.tags.findIndex((tag) => tag === id);
        if (tagIndex > -1) {
          contact.tags.splice(tagIndex, 1);
        }
      });
      return isDeleted;
    }))))));
  }
  /**
   * Update the avatar of the given contact
   *
   * @param id
   * @param avatar
   */
  uploadAvatar(id, avatar) {
    return this.contacts$.pipe(take(1), switchMap((contacts) => this._httpClient.post("api/apps/contacts/avatar", {
      id,
      avatar
    }, {
      headers: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        "Content-Type": avatar.type
      }
    }).pipe(map((updatedContact) => {
      const index = contacts.findIndex((item) => item.id === id);
      contacts[index] = updatedContact;
      this._contacts.next(contacts);
      return updatedContact;
    }), switchMap((updatedContact) => this.contact$.pipe(take(1), filter((item) => item && item.id === id), tap(() => {
      this._contact.next(updatedContact);
      return updatedContact;
    }))))));
  }
  static {
    this.\u0275fac = function ContactsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactsService)(\u0275\u0275inject(HttpClient));
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactsService, factory: _ContactsService.\u0275fac, providedIn: "root" });
  }
};

// src/app/modules/admin/apps/contacts/list/list.component.ts
var _c0 = ["matDrawer"];
var _c1 = () => ({ "=0": "No contacts", "=1": "contact", other: "contacts" });
var _c2 = (a0, a1) => ({ "dark:hover:bg-hover hover:bg-gray-100": a0, "bg-primary-50 dark:bg-hover": a1 });
var _c3 = (a0) => ["./", a0];
function ContactsListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.contactsCount, " ");
  }
}
function ContactsListComponent_Conditional_25_Conditional_0_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contact_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", contact_r3.name.charAt(0), " ");
  }
}
function ContactsListComponent_Conditional_25_Conditional_0_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 21);
  }
  if (rf & 2) {
    const contact_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", contact_r3.avatar, \u0275\u0275sanitizeUrl);
  }
}
function ContactsListComponent_Conditional_25_Conditional_0_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const contact_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", contact_r3.name.charAt(0), " ");
  }
}
function ContactsListComponent_Conditional_25_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ContactsListComponent_Conditional_25_Conditional_0_For_1_Conditional_0_Template, 2, 1, "div", 18);
    \u0275\u0275elementStart(1, "a", 19)(2, "div", 20);
    \u0275\u0275template(3, ContactsListComponent_Conditional_25_Conditional_0_For_1_Conditional_3_Template, 1, 1, "img", 21)(4, ContactsListComponent_Conditional_25_Conditional_0_For_1_Conditional_4_Template, 2, 1, "div", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 23)(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const contact_r3 = ctx.$implicit;
    const \u0275$index_48_r4 = ctx.$index;
    const contacts_r5 = \u0275\u0275nextContext(2);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(\u0275$index_48_r4 === 0 || contact_r3.name.charAt(0) !== contacts_r5[\u0275$index_48_r4 - 1].name.charAt(0) ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(7, _c2, !ctx_r1.selectedContact || ctx_r1.selectedContact.id !== contact_r3.id, ctx_r1.selectedContact && ctx_r1.selectedContact.id === contact_r3.id))("routerLink", \u0275\u0275pureFunction1(10, _c3, contact_r3.id));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(contact_r3.avatar ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!contact_r3.avatar ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", contact_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", contact_r3.title, " ");
  }
}
function ContactsListComponent_Conditional_25_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ContactsListComponent_Conditional_25_Conditional_0_For_1_Template, 10, 12, null, null, \u0275\u0275componentInstance().trackByFn, true);
  }
  if (rf & 2) {
    const contacts_r5 = \u0275\u0275nextContext();
    \u0275\u0275repeater(contacts_r5);
  }
}
function ContactsListComponent_Conditional_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " There are no contacts! ");
    \u0275\u0275elementEnd();
  }
}
function ContactsListComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ContactsListComponent_Conditional_25_Conditional_0_Template, 2, 0)(1, ContactsListComponent_Conditional_25_Conditional_1_Template, 2, 0, "div", 17);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.length ? 0 : 1);
  }
}
var ContactsListComponent = class _ContactsListComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _changeDetectorRef, _contactsService, _document, _router, _fuseMediaWatcherService) {
    this._activatedRoute = _activatedRoute;
    this._changeDetectorRef = _changeDetectorRef;
    this._contactsService = _contactsService;
    this._document = _document;
    this._router = _router;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this.contactsCount = 0;
    this.contactsTableColumns = ["name", "email", "phoneNumber", "job"];
    this.searchInputControl = new UntypedFormControl();
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.contacts$ = this._contactsService.contacts$;
    this._contactsService.contacts$.pipe(takeUntil(this._unsubscribeAll)).subscribe((contacts) => {
      this.contactsCount = contacts.length;
      this._changeDetectorRef.markForCheck();
    });
    this._contactsService.contact$.pipe(takeUntil(this._unsubscribeAll)).subscribe((contact) => {
      this.selectedContact = contact;
      this._changeDetectorRef.markForCheck();
    });
    this._contactsService.countries$.pipe(takeUntil(this._unsubscribeAll)).subscribe((countries) => {
      this.countries = countries;
      this._changeDetectorRef.markForCheck();
    });
    this.searchInputControl.valueChanges.pipe(takeUntil(this._unsubscribeAll), switchMap((query) => (
      // Search
      this._contactsService.searchContacts(query)
    ))).subscribe();
    this.matDrawer.openedChange.subscribe((opened) => {
      if (!opened) {
        this.selectedContact = null;
        this._changeDetectorRef.markForCheck();
      }
    });
    this._fuseMediaWatcherService.onMediaChange$.pipe(takeUntil(this._unsubscribeAll)).subscribe(({ matchingAliases }) => {
      if (matchingAliases.includes("lg")) {
        this.drawerMode = "side";
      } else {
        this.drawerMode = "over";
      }
      this._changeDetectorRef.markForCheck();
    });
    fromEvent(this._document, "keydown").pipe(takeUntil(this._unsubscribeAll), filter(
      (event) => (event.ctrlKey === true || event.metaKey) && // Ctrl or Cmd
      event.key === "/"
      // '/'
    )).subscribe(() => {
      this.createContact();
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
   * Create contact
   */
  createContact() {
    this._contactsService.createContact().subscribe((newContact) => {
      this._router.navigate(["./", newContact.id], {
        relativeTo: this._activatedRoute
      });
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
    this.\u0275fac = function ContactsListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactsListComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ContactsService), \u0275\u0275directiveInject(DOCUMENT), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(FuseMediaWatcherService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsListComponent, selectors: [["contacts-list"]], viewQuery: function ContactsListComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.matDrawer = _t.first);
      }
    }, decls: 27, vars: 19, consts: [["matDrawer", ""], [1, "absolute", "inset-0", "flex", "min-w-0", "flex-col", "overflow-hidden"], [1, "bg-card", "h-full", "flex-auto", "dark:bg-transparent", 3, "backdropClick"], [1, "w-full", "dark:bg-gray-900", "md:w-160", 3, "mode", "opened", "position", "disableClose"], [1, "flex", "flex-col"], [1, "flex-auto"], [1, "flex", "flex-auto", "flex-col", "justify-between", "border-b", "px-6", "py-8", "sm:flex-row", "md:flex-col", "md:px-8"], [1, "text-4xl", "font-extrabold", "leading-none", "tracking-tight"], [1, "text-secondary", "ml-0.5", "font-medium"], [1, "mt-4", "flex", "items-center", "sm:mt-0", "md:mt-4"], ["subscriptSizing", "dynamic", 1, "fuse-mat-dense", "fuse-mat-rounded", "w-full", "min-w-50"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "formControl", "autocomplete", "placeholder"], ["mat-flat-button", "", 1, "ml-4", 3, "click", "color"], [3, "svgIcon"], [1, "ml-2", "mr-1"], [1, "relative"], [1, "border-t", "p-8", "text-center", "text-4xl", "font-semibold", "tracking-tight", "sm:p-16"], [1, "text-secondary", "sticky", "top-0", "z-10", "-mt-px", "border-b", "border-t", "bg-gray-50", "px-6", "py-1", "font-medium", "uppercase", "dark:bg-gray-900", "md:px-8"], [1, "z-20", "flex", "cursor-pointer", "items-center", "border-b", "px-6", "py-4", "md:px-8", 3, "ngClass", "routerLink"], [1, "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center", "overflow-hidden", "rounded-full"], ["alt", "Contact avatar", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-full", "bg-gray-200", "text-lg", "uppercase", "text-gray-600", "dark:bg-gray-700", "dark:text-gray-200"], [1, "ml-4", "min-w-0"], [1, "truncate", "font-medium", "leading-5"], [1, "text-secondary", "truncate", "leading-5"]], template: function ContactsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-drawer-container", 2);
        \u0275\u0275listener("backdropClick", function ContactsListComponent_Template_mat_drawer_container_backdropClick_1_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.onBackdropClicked());
        });
        \u0275\u0275elementStart(2, "mat-drawer", 3, 0);
        \u0275\u0275element(4, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-drawer-content", 4)(6, "div", 5)(7, "div", 6)(8, "div")(9, "div", 7);
        \u0275\u0275text(10, " Contacts ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275template(12, ContactsListComponent_Conditional_12_Template, 1, 1);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "i18nPlural");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 9)(16, "div", 5)(17, "mat-form-field", 10);
        \u0275\u0275element(18, "mat-icon", 11)(19, "input", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "button", 13);
        \u0275\u0275listener("click", function ContactsListComponent_Template_button_click_20_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.createContact());
        });
        \u0275\u0275element(21, "mat-icon", 14);
        \u0275\u0275elementStart(22, "span", 15);
        \u0275\u0275text(23, "Add");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div", 16);
        \u0275\u0275template(25, ContactsListComponent_Conditional_25_Template, 2, 1);
        \u0275\u0275pipe(26, "async");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_13_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("mode", ctx.drawerMode)("opened", false)("position", "end")("disableClose", true);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.contactsCount > 0 ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 13, ctx.contactsCount, \u0275\u0275pureFunction0(18, _c1)), " ");
        \u0275\u0275advance(5);
        \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
        \u0275\u0275advance();
        \u0275\u0275property("formControl", ctx.searchInputControl)("autocomplete", "off")("placeholder", "Search contacts");
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_outline:plus");
        \u0275\u0275advance(4);
        \u0275\u0275conditional((tmp_13_0 = \u0275\u0275pipeBind1(26, 16, ctx.contacts$)) ? 25 : -1, tmp_13_0);
      }
    }, dependencies: [
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      RouterOutlet,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      ReactiveFormsModule,
      FormControlDirective,
      MatButtonModule,
      MatButton,
      NgClass,
      RouterLink,
      AsyncPipe,
      I18nPluralPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsListComponent, { className: "ContactsListComponent", filePath: "src/app/modules/admin/apps/contacts/list/list.component.ts", lineNumber: 63 });
})();

// src/app/modules/admin/apps/contacts/details/details.component.ts
var _c02 = ["avatarFileInput"];
var _c12 = ["tagsPanel"];
var _c22 = ["tagsPanelOrigin"];
var _c32 = () => ["../"];
var _c4 = (a0) => ({ "mt-6": a0 });
function ContactsDetailsComponent_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.contact.background, \u0275\u0275sanitizeUrl);
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.contact.avatar, \u0275\u0275sanitizeUrl);
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.contact.name.charAt(0), " ");
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "span", 27);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r3.title);
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275repeaterCreate(1, ContactsDetailsComponent_Conditional_1_Conditional_18_For_2_Template, 3, 1, "div", 26, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275pipe(3, "fuseFindByKey");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 0, ctx_r1.contact.tags, "id", ctx_r1.tags));
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-icon", 28);
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:briefcase");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.contact.title, " ");
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-icon", 28);
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:building-office-2");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.contact.company, " ");
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_22_For_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const email_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(email_r4.label);
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_22_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "a", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ContactsDetailsComponent_Conditional_1_Conditional_22_For_4_Conditional_3_Template, 5, 1, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + email_r4.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r4.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(email_r4.label ? 3 : -1);
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-icon", 28);
    \u0275\u0275elementStart(2, "div", 30);
    \u0275\u0275repeaterCreate(3, ContactsDetailsComponent_Conditional_1_Conditional_22_For_4_Template, 4, 3, "div", 31, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:envelope");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.contact.emails);
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_23_For_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "span", 34);
    \u0275\u0275text(2, "\u2022");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const phoneNumber_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(phoneNumber_r5.label);
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_23_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "div", 37);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 38);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, ContactsDetailsComponent_Conditional_1_Conditional_23_For_4_Conditional_6_Template, 5, 1, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const phoneNumber_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background", "url('/images/apps/contacts/flags.png') no-repeat 0 0")("background-size", "24px 3876px")("background-position", ctx_r1.getCountryByIso(phoneNumber_r5.country).flagImagePos);
    \u0275\u0275property("matTooltip", ctx_r1.getCountryByIso(phoneNumber_r5.country).name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getCountryByIso(phoneNumber_r5.country).code, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", phoneNumber_r5.phoneNumber, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(phoneNumber_r5.label ? 6 : -1);
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-icon", 28);
    \u0275\u0275elementStart(2, "div", 30);
    \u0275\u0275repeaterCreate(3, ContactsDetailsComponent_Conditional_1_Conditional_23_For_4_Template, 7, 10, "div", 31, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:phone");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.contact.phoneNumbers);
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-icon", 28);
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:map-pin");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.contact.address, " ");
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "mat-icon", 28);
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:cake");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 2, ctx_r1.contact.birthday, "longDate"), " ");
  }
}
function ContactsDetailsComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-icon", 28)(2, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:bars-3-bottom-left");
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r1.contact.notes, \u0275\u0275sanitizeHtml);
  }
}
function ContactsDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, ContactsDetailsComponent_Conditional_1_Conditional_1_Template, 1, 1, "img", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "a", 9);
    \u0275\u0275element(4, "mat-icon", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12)(7, "div", 13)(8, "div", 14);
    \u0275\u0275template(9, ContactsDetailsComponent_Conditional_1_Conditional_9_Template, 1, 1, "img", 15)(10, ContactsDetailsComponent_Conditional_1_Conditional_10_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 17)(12, "button", 18);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_1_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleEditMode(true));
    });
    \u0275\u0275element(13, "mat-icon", 19);
    \u0275\u0275elementStart(14, "span", 20);
    \u0275\u0275text(15, "Edit");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(16, "div", 21);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ContactsDetailsComponent_Conditional_1_Conditional_18_Template, 4, 4, "div", 22);
    \u0275\u0275elementStart(19, "div", 23);
    \u0275\u0275template(20, ContactsDetailsComponent_Conditional_1_Conditional_20_Template, 4, 2, "div", 24)(21, ContactsDetailsComponent_Conditional_1_Conditional_21_Template, 4, 2, "div", 24)(22, ContactsDetailsComponent_Conditional_1_Conditional_22_Template, 5, 1, "div", 25)(23, ContactsDetailsComponent_Conditional_1_Conditional_23_Template, 5, 1, "div", 25)(24, ContactsDetailsComponent_Conditional_1_Conditional_24_Template, 4, 2, "div", 24)(25, ContactsDetailsComponent_Conditional_1_Conditional_25_Template, 5, 5, "div", 24)(26, ContactsDetailsComponent_Conditional_1_Conditional_26_Template, 3, 2, "div", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contact.background ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", "Close")("routerLink", \u0275\u0275pureFunction0(16, _c32));
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:x-mark");
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.contact.avatar ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.contact.avatar ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:pencil-square");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.contact.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contact.tags.length ? 18 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.contact.title ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contact.company ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contact.emails.length ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contact.phoneNumbers.length ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contact.address ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contact.birthday ? 25 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contact.notes ? 26 : -1);
  }
}
function ContactsDetailsComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.contact.background, \u0275\u0275sanitizeUrl);
  }
}
function ContactsDetailsComponent_Conditional_2_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 15);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r1.contact.avatar, \u0275\u0275sanitizeUrl);
  }
}
function ContactsDetailsComponent_Conditional_2_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.contact.name.charAt(0), " ");
  }
}
function ContactsDetailsComponent_Conditional_2_Conditional_29_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "span", 67);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r8 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r8.title);
  }
}
function ContactsDetailsComponent_Conditional_2_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ContactsDetailsComponent_Conditional_2_Conditional_29_For_1_Template, 3, 1, "div", 66, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275pipe(2, "fuseFindByKey");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind3(2, 0, ctx_r1.contact.tags, "id", ctx_r1.tags));
  }
}
function ContactsDetailsComponent_Conditional_2_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 19);
    \u0275\u0275elementStart(1, "span", 68);
    \u0275\u0275text(2, "Edit");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:pencil-square");
  }
}
function ContactsDetailsComponent_Conditional_2_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 19);
    \u0275\u0275elementStart(1, "span", 68);
    \u0275\u0275text(2, "Add");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:plus-circle");
  }
}
function ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 19);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:pencil-square");
  }
}
function ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 19);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:check");
  }
}
function ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_11_For_1_Template_div_click_0_listener() {
      const tag_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleContactTag(tag_r11));
    });
    \u0275\u0275element(1, "mat-checkbox", 79);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tag_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r1.contact.tags.includes(tag_r11.id))("color", "primary")("disableRipple", true);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r11.title);
  }
}
function ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_11_For_1_Template, 4, 4, "div", 77, \u0275\u0275componentInstance().trackByFn, true);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r1.filteredTags);
  }
}
function ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71)(1, "mat-form-field", 80)(2, "input", 81);
    \u0275\u0275listener("input", function ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_12_For_2_Template_input_input_2_listener($event) {
      const tag_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.updateTagTitle(tag_r13, $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 82);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_12_For_2_Template_button_click_3_listener() {
      const tag_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.deleteTag(tag_r13));
    });
    \u0275\u0275element(4, "mat-icon", 83);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tag_r13 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("value", tag_r13.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_solid:trash");
  }
}
function ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 75);
    \u0275\u0275repeaterCreate(1, ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_12_For_2_Template, 5, 3, "div", 71, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filteredTags);
  }
}
function ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_13_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      \u0275\u0275nextContext();
      const newTagInput_r15 = \u0275\u0275reference(6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.createTag(newTagInput_r15.value);
      return \u0275\u0275resetView(newTagInput_r15.value = "");
    });
    \u0275\u0275element(1, "mat-icon", 85);
    \u0275\u0275elementStart(2, "div", 86);
    \u0275\u0275text(3, ' Create "');
    \u0275\u0275elementStart(4, "b");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, '" ');
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const newTagInput_r15 = \u0275\u0275reference(6);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:plus-circle");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(newTagInput_r15.value);
  }
}
function ContactsDetailsComponent_Conditional_2_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "div", 71);
    \u0275\u0275element(3, "mat-icon", 19);
    \u0275\u0275elementStart(4, "div", 20)(5, "input", 72, 4);
    \u0275\u0275listener("input", function ContactsDetailsComponent_Conditional_2_ng_template_34_Template_input_input_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterTags($event));
    })("keydown", function ContactsDetailsComponent_Conditional_2_ng_template_34_Template_input_keydown_5_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterTagsInputKeyDown($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 73);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_ng_template_34_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleTagsEditMode());
    });
    \u0275\u0275template(8, ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_8_Template, 1, 1, "mat-icon", 19)(9, ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_9_Template, 1, 1, "mat-icon", 19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 74);
    \u0275\u0275template(11, ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_11_Template, 2, 0)(12, ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_12_Template, 3, 0, "div", 75)(13, ContactsDetailsComponent_Conditional_2_ng_template_34_Conditional_13_Template, 7, 2, "div", 76);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const newTagInput_r15 = \u0275\u0275reference(6);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:magnifying-glass");
    \u0275\u0275advance(2);
    \u0275\u0275property("maxLength", 30);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.tagsEditMode ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tagsEditMode ? 9 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.tagsEditMode ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.tagsEditMode ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.shouldShowCreateTagButton(newTagInput_r15.value) ? 13 : -1);
  }
}
function ContactsDetailsComponent_Conditional_2_For_51_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-label");
    \u0275\u0275text(1, "Email");
    \u0275\u0275elementEnd();
  }
}
function ContactsDetailsComponent_Conditional_2_For_51_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-label");
    \u0275\u0275text(1, "Label");
    \u0275\u0275elementEnd();
  }
}
function ContactsDetailsComponent_Conditional_2_For_51_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "button", 92);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_For_51_Conditional_9_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const \u0275$index_310_r17 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeEmailField(\u0275$index_310_r17));
    });
    \u0275\u0275element(2, "mat-icon", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_310_r17 = \u0275\u0275nextContext().$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c4, \u0275$index_310_r17 === 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_solid:trash");
  }
}
function ContactsDetailsComponent_Conditional_2_For_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-form-field", 87);
    \u0275\u0275template(2, ContactsDetailsComponent_Conditional_2_For_51_Conditional_2_Template, 2, 0, "mat-label");
    \u0275\u0275element(3, "mat-icon", 50)(4, "input", 88);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 89);
    \u0275\u0275template(6, ContactsDetailsComponent_Conditional_2_For_51_Conditional_6_Template, 2, 0, "mat-label");
    \u0275\u0275element(7, "mat-icon", 50)(8, "input", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ContactsDetailsComponent_Conditional_2_For_51_Conditional_9_Template, 3, 4, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const email_r18 = ctx.$implicit;
    const \u0275$index_310_r17 = ctx.$index;
    const \u0275$count_310_r19 = ctx.$count;
    \u0275\u0275advance();
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_310_r17 === 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:envelope");
    \u0275\u0275advance();
    \u0275\u0275property("formControl", email_r18.get("email"))("placeholder", "Email address")("spellcheck", false);
    \u0275\u0275advance();
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_310_r17 === 0 ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:tag");
    \u0275\u0275advance();
    \u0275\u0275property("formControl", email_r18.get("label"))("placeholder", "Label");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_310_r17 === 0 && \u0275$index_310_r17 === \u0275$count_310_r19 - 1) ? 9 : -1);
  }
}
function ContactsDetailsComponent_Conditional_2_For_59_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-label");
    \u0275\u0275text(1, "Phone");
    \u0275\u0275elementEnd();
  }
}
function ContactsDetailsComponent_Conditional_2_For_59_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 96)(1, "span", 71);
    \u0275\u0275element(2, "span", 97);
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 98);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const country_r20 = ctx.$implicit;
    \u0275\u0275property("value", country_r20.iso);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background", "url('/images/apps/contacts/flags.png') no-repeat 0 0")("background-size", "24px 3876px")("background-position", country_r20.flagImagePos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r20.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(country_r20.code);
  }
}
function ContactsDetailsComponent_Conditional_2_For_59_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-label");
    \u0275\u0275text(1, "Label");
    \u0275\u0275elementEnd();
  }
}
function ContactsDetailsComponent_Conditional_2_For_59_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 91)(1, "button", 92);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_For_59_Conditional_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r21);
      const \u0275$index_351_r22 = \u0275\u0275nextContext().$index;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removePhoneNumberField(\u0275$index_351_r22));
    });
    \u0275\u0275element(2, "mat-icon", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const \u0275$index_351_r22 = \u0275\u0275nextContext().$index;
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(2, _c4, \u0275$index_351_r22 === 0));
    \u0275\u0275advance(2);
    \u0275\u0275property("svgIcon", "heroicons_solid:trash");
  }
}
function ContactsDetailsComponent_Conditional_2_For_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "mat-form-field", 87);
    \u0275\u0275template(2, ContactsDetailsComponent_Conditional_2_For_59_Conditional_2_Template, 2, 0, "mat-label");
    \u0275\u0275element(3, "input", 90);
    \u0275\u0275elementStart(4, "mat-select", 93)(5, "mat-select-trigger")(6, "span", 71);
    \u0275\u0275element(7, "span", 94);
    \u0275\u0275elementStart(8, "span", 95);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275repeaterCreate(10, ContactsDetailsComponent_Conditional_2_For_59_For_11_Template, 7, 9, "mat-option", 96, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "mat-form-field", 89);
    \u0275\u0275template(13, ContactsDetailsComponent_Conditional_2_For_59_Conditional_13_Template, 2, 0, "mat-label");
    \u0275\u0275element(14, "mat-icon", 50)(15, "input", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, ContactsDetailsComponent_Conditional_2_For_59_Conditional_16_Template, 3, 4, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const phoneNumber_r23 = ctx.$implicit;
    const \u0275$index_351_r22 = ctx.$index;
    const \u0275$count_351_r24 = ctx.$count;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_351_r22 === 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("formControl", phoneNumber_r23.get("phoneNumber"))("placeholder", "Phone");
    \u0275\u0275advance();
    \u0275\u0275property("formControl", phoneNumber_r23.get("country"));
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("background", "url('/images/apps/contacts/flags.png') no-repeat 0 0")("background-size", "24px 3876px")("background-position", ctx_r1.getCountryByIso(phoneNumber_r23.get("country").value).flagImagePos);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.getCountryByIso(phoneNumber_r23.get("country").value).code);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.countries);
    \u0275\u0275advance(2);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275conditional(\u0275$index_351_r22 === 0 ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_solid:tag");
    \u0275\u0275advance();
    \u0275\u0275property("formControl", phoneNumber_r23.get("label"))("placeholder", "Label");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(\u0275$index_351_r22 === 0 && \u0275$index_351_r22 === \u0275$count_351_r24 - 1) ? 16 : -1);
  }
}
function ContactsDetailsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, ContactsDetailsComponent_Conditional_2_Conditional_1_Template, 1, 1, "img", 7);
    \u0275\u0275elementStart(2, "div", 8)(3, "a", 9);
    \u0275\u0275element(4, "mat-icon", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(5, "div", 40)(6, "div", 12)(7, "form", 41)(8, "div", 13)(9, "div", 42);
    \u0275\u0275element(10, "div", 43);
    \u0275\u0275elementStart(11, "div", 44)(12, "div")(13, "input", 45, 0);
    \u0275\u0275listener("change", function ContactsDetailsComponent_Conditional_2_Template_input_change_13_listener() {
      \u0275\u0275restoreView(_r6);
      const avatarFileInput_r7 = \u0275\u0275reference(14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.uploadAvatar(avatarFileInput_r7.files));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "label", 46);
    \u0275\u0275element(16, "mat-icon", 10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div")(18, "button", 47);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeAvatar());
    });
    \u0275\u0275element(19, "mat-icon", 10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(20, ContactsDetailsComponent_Conditional_2_Conditional_20_Template, 1, 1, "img", 15)(21, ContactsDetailsComponent_Conditional_2_Conditional_21_Template, 2, 1, "div", 16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 48)(23, "mat-form-field", 49)(24, "mat-label");
    \u0275\u0275text(25, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "mat-icon", 50)(27, "input", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 52);
    \u0275\u0275template(29, ContactsDetailsComponent_Conditional_2_Conditional_29_Template, 3, 4);
    \u0275\u0275elementStart(30, "div", 53, 1);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_Template_div_click_30_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openTagsPanel());
    });
    \u0275\u0275template(32, ContactsDetailsComponent_Conditional_2_Conditional_32_Template, 3, 1)(33, ContactsDetailsComponent_Conditional_2_Conditional_33_Template, 3, 1)(34, ContactsDetailsComponent_Conditional_2_ng_template_34_Template, 14, 7, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "div", 48)(37, "mat-form-field", 49)(38, "mat-label");
    \u0275\u0275text(39, "Title");
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "mat-icon", 50)(41, "input", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 48)(43, "mat-form-field", 49)(44, "mat-label");
    \u0275\u0275text(45, "Company");
    \u0275\u0275elementEnd();
    \u0275\u0275element(46, "mat-icon", 50)(47, "input", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "div", 48)(49, "div", 55);
    \u0275\u0275repeaterCreate(50, ContactsDetailsComponent_Conditional_2_For_51_Template, 10, 12, "div", 25, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div", 56);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_Template_div_click_52_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addEmailField());
    });
    \u0275\u0275element(53, "mat-icon", 19);
    \u0275\u0275elementStart(54, "span", 57);
    \u0275\u0275text(55, "Add an email address");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 48)(57, "div", 55);
    \u0275\u0275repeaterCreate(58, ContactsDetailsComponent_Conditional_2_For_59_Template, 17, 18, "div", 58, \u0275\u0275componentInstance().trackByFn, true);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "div", 56);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_Template_div_click_60_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addPhoneNumberField());
    });
    \u0275\u0275element(61, "mat-icon", 19);
    \u0275\u0275elementStart(62, "span", 57);
    \u0275\u0275text(63, "Add a phone number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 48)(65, "mat-form-field", 49)(66, "mat-label");
    \u0275\u0275text(67, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "mat-icon", 50)(69, "input", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(70, "div", 48)(71, "mat-form-field", 49)(72, "mat-label");
    \u0275\u0275text(73, "Birthday");
    \u0275\u0275elementEnd();
    \u0275\u0275element(74, "mat-icon", 50)(75, "input", 59)(76, "mat-datepicker-toggle", 60)(77, "mat-datepicker", null, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "div", 48)(80, "mat-form-field", 49)(81, "mat-label");
    \u0275\u0275text(82, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275element(83, "mat-icon", 50)(84, "textarea", 61);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 62)(86, "button", 63);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_Template_button_click_86_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.deleteContact());
    });
    \u0275\u0275text(87, " Delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "button", 64);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_Template_button_click_88_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleEditMode(false));
    });
    \u0275\u0275text(89, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "button", 65);
    \u0275\u0275listener("click", function ContactsDetailsComponent_Conditional_2_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateContact());
    });
    \u0275\u0275text(91, " Save ");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const birthdayDatepicker_r25 = \u0275\u0275reference(78);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contact.background ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", "Close")("routerLink", \u0275\u0275pureFunction0(51, _c32));
    \u0275\u0275advance();
    \u0275\u0275property("svgIcon", "heroicons_outline:x-mark");
    \u0275\u0275advance(3);
    \u0275\u0275property("formGroup", ctx_r1.contactForm);
    \u0275\u0275advance(6);
    \u0275\u0275property("multiple", false)("accept", "image/jpeg, image/png");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:camera");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_outline:trash");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.contact.avatar ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.contact.avatar ? 21 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:user-circle");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", "name")("placeholder", "Name")("spellcheck", false);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.contact.tags.length ? 29 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.contact.tags.length ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.contact.tags.length ? 33 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:briefcase");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", "title")("placeholder", "Job title");
    \u0275\u0275advance(2);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:building-office-2");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", "company")("placeholder", "Company");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.contactForm.get("emails")["controls"]);
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:plus-circle");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.contactForm.get("phoneNumbers")["controls"]);
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:plus-circle");
    \u0275\u0275advance(4);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:map-pin");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", "address")("placeholder", "Address");
    \u0275\u0275advance(2);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:cake");
    \u0275\u0275advance();
    \u0275\u0275property("matDatepicker", birthdayDatepicker_r25)("formControlName", "birthday")("placeholder", "Birthday");
    \u0275\u0275advance();
    \u0275\u0275property("for", birthdayDatepicker_r25);
    \u0275\u0275advance(4);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance(3);
    \u0275\u0275property("svgIcon", "heroicons_solid:bars-3-bottom-left");
    \u0275\u0275advance();
    \u0275\u0275property("formControlName", "notes")("placeholder", "Notes")("rows", 5)("spellcheck", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "warn")("matTooltip", "Delete");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", "Cancel");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary")("disabled", ctx_r1.contactForm.invalid)("matTooltip", "Save");
  }
}
var ContactsDetailsComponent = class _ContactsDetailsComponent {
  /**
   * Constructor
   */
  constructor(_activatedRoute, _changeDetectorRef, _contactsListComponent, _contactsService, _formBuilder, _fuseConfirmationService, _renderer2, _router, _overlay, _viewContainerRef) {
    this._activatedRoute = _activatedRoute;
    this._changeDetectorRef = _changeDetectorRef;
    this._contactsListComponent = _contactsListComponent;
    this._contactsService = _contactsService;
    this._formBuilder = _formBuilder;
    this._fuseConfirmationService = _fuseConfirmationService;
    this._renderer2 = _renderer2;
    this._router = _router;
    this._overlay = _overlay;
    this._viewContainerRef = _viewContainerRef;
    this.editMode = false;
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
    this._contactsListComponent.matDrawer.open();
    this.contactForm = this._formBuilder.group({
      id: [""],
      avatar: [null],
      name: ["", [Validators.required]],
      emails: this._formBuilder.array([]),
      phoneNumbers: this._formBuilder.array([]),
      title: [""],
      company: [""],
      birthday: [null],
      address: [null],
      notes: [null],
      tags: [[]]
    });
    this._contactsService.contacts$.pipe(takeUntil(this._unsubscribeAll)).subscribe((contacts) => {
      this.contacts = contacts;
      this._changeDetectorRef.markForCheck();
    });
    this._contactsService.contact$.pipe(takeUntil(this._unsubscribeAll)).subscribe((contact) => {
      this._contactsListComponent.matDrawer.open();
      this.contact = contact;
      this.contactForm.get("emails").clear();
      this.contactForm.get("phoneNumbers").clear();
      this.contactForm.patchValue(contact);
      const emailFormGroups = [];
      if (contact.emails.length > 0) {
        contact.emails.forEach((email) => {
          emailFormGroups.push(this._formBuilder.group({
            email: [email.email],
            label: [email.label]
          }));
        });
      } else {
        emailFormGroups.push(this._formBuilder.group({
          email: [""],
          label: [""]
        }));
      }
      emailFormGroups.forEach((emailFormGroup) => {
        this.contactForm.get("emails").push(emailFormGroup);
      });
      const phoneNumbersFormGroups = [];
      if (contact.phoneNumbers.length > 0) {
        contact.phoneNumbers.forEach((phoneNumber) => {
          phoneNumbersFormGroups.push(this._formBuilder.group({
            country: [phoneNumber.country],
            phoneNumber: [phoneNumber.phoneNumber],
            label: [phoneNumber.label]
          }));
        });
      } else {
        phoneNumbersFormGroups.push(this._formBuilder.group({
          country: ["us"],
          phoneNumber: [""],
          label: [""]
        }));
      }
      phoneNumbersFormGroups.forEach((phoneNumbersFormGroup) => {
        this.contactForm.get("phoneNumbers").push(phoneNumbersFormGroup);
      });
      this.toggleEditMode(false);
      this._changeDetectorRef.markForCheck();
    });
    this._contactsService.countries$.pipe(takeUntil(this._unsubscribeAll)).subscribe((codes) => {
      this.countries = codes;
      this._changeDetectorRef.markForCheck();
    });
    this._contactsService.tags$.pipe(takeUntil(this._unsubscribeAll)).subscribe((tags) => {
      this.tags = tags;
      this.filteredTags = tags;
      this._changeDetectorRef.markForCheck();
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
    return this._contactsListComponent.matDrawer.close();
  }
  /**
   * Toggle edit mode
   *
   * @param editMode
   */
  toggleEditMode(editMode = null) {
    if (editMode === null) {
      this.editMode = !this.editMode;
    } else {
      this.editMode = editMode;
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Update the contact
   */
  updateContact() {
    const contact = this.contactForm.getRawValue();
    contact.emails = contact.emails.filter((email) => email.email);
    contact.phoneNumbers = contact.phoneNumbers.filter((phoneNumber) => phoneNumber.phoneNumber);
    this._contactsService.updateContact(contact.id, contact).subscribe(() => {
      this.toggleEditMode(false);
    });
  }
  /**
   * Delete the contact
   */
  deleteContact() {
    const confirmation = this._fuseConfirmationService.open({
      title: "Delete contact",
      message: "Are you sure you want to delete this contact? This action cannot be undone!",
      actions: {
        confirm: {
          label: "Delete"
        }
      }
    });
    confirmation.afterClosed().subscribe((result) => {
      if (result === "confirmed") {
        const id = this.contact.id;
        const currentContactIndex = this.contacts.findIndex((item) => item.id === id);
        const nextContactIndex = currentContactIndex + (currentContactIndex === this.contacts.length - 1 ? -1 : 1);
        const nextContactId = this.contacts.length === 1 && this.contacts[0].id === id ? null : this.contacts[nextContactIndex].id;
        this._contactsService.deleteContact(id).subscribe((isDeleted) => {
          if (!isDeleted) {
            return;
          }
          if (nextContactId) {
            this._router.navigate(["../", nextContactId], {
              relativeTo: this._activatedRoute
            });
          } else {
            this._router.navigate(["../"], {
              relativeTo: this._activatedRoute
            });
          }
          this.toggleEditMode(false);
        });
        this._changeDetectorRef.markForCheck();
      }
    });
  }
  /**
   * Upload avatar
   *
   * @param fileList
   */
  uploadAvatar(fileList) {
    if (!fileList.length) {
      return;
    }
    const allowedTypes = ["image/jpeg", "image/png"];
    const file = fileList[0];
    if (!allowedTypes.includes(file.type)) {
      return;
    }
    this._contactsService.uploadAvatar(this.contact.id, file).subscribe();
  }
  /**
   * Remove the avatar
   */
  removeAvatar() {
    const avatarFormControl = this.contactForm.get("avatar");
    avatarFormControl.setValue(null);
    this._avatarFileInput.nativeElement.value = null;
    this.contact.avatar = null;
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
      this._renderer2.addClass(this._tagsPanelOrigin.nativeElement, "panel-opened");
      this._tagsPanelOverlayRef.overlayElement.querySelector("input").focus();
    });
    const templatePortal = new TemplatePortal(this._tagsPanel, this._viewContainerRef);
    this._tagsPanelOverlayRef.attach(templatePortal);
    this._tagsPanelOverlayRef.backdropClick().subscribe(() => {
      this._renderer2.removeClass(this._tagsPanelOrigin.nativeElement, "panel-opened");
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
    const isTagApplied = this.contact.tags.find((id) => id === tag.id);
    if (isTagApplied) {
      this.removeTagFromContact(tag);
    } else {
      this.addTagToContact(tag);
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
    this._contactsService.createTag(tag).subscribe((response) => {
      this.addTagToContact(response);
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
    this._contactsService.updateTag(tag.id, tag).pipe(debounceTime(300)).subscribe();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Delete the tag
   *
   * @param tag
   */
  deleteTag(tag) {
    this._contactsService.deleteTag(tag.id).subscribe();
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Add tag to the contact
   *
   * @param tag
   */
  addTagToContact(tag) {
    this.contact.tags.unshift(tag.id);
    this.contactForm.get("tags").patchValue(this.contact.tags);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Remove tag from the contact
   *
   * @param tag
   */
  removeTagFromContact(tag) {
    this.contact.tags.splice(this.contact.tags.findIndex((item) => item === tag.id), 1);
    this.contactForm.get("tags").patchValue(this.contact.tags);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Toggle contact tag
   *
   * @param tag
   */
  toggleContactTag(tag) {
    if (this.contact.tags.includes(tag.id)) {
      this.removeTagFromContact(tag);
    } else {
      this.addTagToContact(tag);
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
   * Add the email field
   */
  addEmailField() {
    const emailFormGroup = this._formBuilder.group({
      email: [""],
      label: [""]
    });
    this.contactForm.get("emails").push(emailFormGroup);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Remove the email field
   *
   * @param index
   */
  removeEmailField(index) {
    const emailsFormArray = this.contactForm.get("emails");
    emailsFormArray.removeAt(index);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Add an empty phone number field
   */
  addPhoneNumberField() {
    const phoneNumberFormGroup = this._formBuilder.group({
      country: ["us"],
      phoneNumber: [""],
      label: [""]
    });
    this.contactForm.get("phoneNumbers").push(phoneNumberFormGroup);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Remove the phone number field
   *
   * @param index
   */
  removePhoneNumberField(index) {
    const phoneNumbersFormArray = this.contactForm.get("phoneNumbers");
    phoneNumbersFormArray.removeAt(index);
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Get country info by iso code
   *
   * @param iso
   */
  getCountryByIso(iso) {
    return this.countries.find((country) => country.iso === iso);
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
    this.\u0275fac = function ContactsDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ContactsDetailsComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ContactsListComponent), \u0275\u0275directiveInject(ContactsService), \u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(FuseConfirmationService), \u0275\u0275directiveInject(Renderer2), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Overlay), \u0275\u0275directiveInject(ViewContainerRef));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactsDetailsComponent, selectors: [["contacts-details"]], viewQuery: function ContactsDetailsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
        \u0275\u0275viewQuery(_c12, 5);
        \u0275\u0275viewQuery(_c22, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._avatarFileInput = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tagsPanel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tagsPanelOrigin = _t.first);
      }
    }, decls: 3, vars: 2, consts: [["avatarFileInput", ""], ["tagsPanelOrigin", ""], ["tagsPanel", ""], ["birthdayDatepicker", ""], ["newTagInput", ""], [1, "flex", "w-full", "flex-col"], [1, "relative", "h-40", "w-full", "bg-accent-100", "px-8", "dark:bg-accent-700", "sm:h-48", "sm:px-12"], [1, "absolute", "inset-0", "h-full", "w-full", "object-cover", 3, "src"], [1, "mx-auto", "flex", "w-full", "max-w-3xl", "items-center", "justify-end", "pt-6"], ["mat-icon-button", "", 3, "matTooltip", "routerLink"], [1, "text-white", 3, "svgIcon"], [1, "relative", "flex", "flex-auto", "flex-col", "items-center", "p-6", "pt-0", "sm:p-12", "sm:pt-0"], [1, "w-full", "max-w-3xl"], [1, "-mt-16", "flex", "flex-auto", "items-end"], [1, "ring-bg-card", "flex", "h-32", "w-32", "items-center", "justify-center", "overflow-hidden", "rounded-full", "ring-4"], [1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "overflow-hidden", "rounded", "bg-gray-200", "text-8xl", "font-bold", "uppercase", "leading-none", "text-gray-600", "dark:bg-gray-700", "dark:text-gray-200"], [1, "mb-1", "ml-auto", "flex", "items-center"], ["mat-stroked-button", "", 3, "click"], [1, "icon-size-5", 3, "svgIcon"], [1, "ml-2"], [1, "mt-3", "truncate", "text-4xl", "font-bold"], [1, "mt-2", "flex", "flex-wrap", "items-center"], [1, "mt-4", "flex", "flex-col", "space-y-8", "border-t", "pt-6"], [1, "flex", "sm:items-center"], [1, "flex"], [1, "mb-3", "mr-3", "flex", "items-center", "justify-center", "rounded-full", "bg-gray-100", "px-3", "py-1", "leading-normal", "text-gray-500", "dark:bg-gray-700", "dark:text-gray-300"], [1, "whitespace-nowrap", "text-sm", "font-medium"], [3, "svgIcon"], [1, "ml-6", "leading-6"], [1, "ml-6", "min-w-0", "space-y-1"], [1, "flex", "items-center", "leading-6"], ["target", "_blank", 1, "text-primary-500", "hover:underline", 3, "href"], [1, "text-secondary", "truncate", "text-md"], [1, "mx-2"], [1, "font-medium"], [1, "hidden", "h-4", "w-6", "overflow-hidden", "sm:flex", 3, "matTooltip"], [1, "font-mono", "sm:ml-3"], [1, "ml-2.5", "font-mono"], [1, "prose", "prose-sm", "ml-6", "max-w-none", 3, "innerHTML"], [1, "relative", "flex", "flex-auto", "flex-col", "items-center", "px-6", "sm:px-12"], [3, "formGroup"], [1, "ring-bg-card", "relative", "flex", "h-32", "w-32", "items-center", "justify-center", "overflow-hidden", "rounded-full", "ring-4"], [1, "absolute", "inset-0", "z-10", "bg-black", "bg-opacity-50"], [1, "absolute", "inset-0", "z-20", "flex", "items-center", "justify-center"], ["id", "avatar-file-input", "type", "file", 1, "pointer-events-none", "invisible", "absolute", "h-0", "w-0", "opacity-0", 3, "change", "multiple", "accept"], ["for", "avatar-file-input", "matRipple", "", 1, "flex", "h-10", "w-10", "cursor-pointer", "items-center", "justify-center", "rounded-full", "hover:bg-hover"], ["mat-icon-button", "", 3, "click"], [1, "mt-8"], [1, "w-full", 3, "subscriptSizing"], ["matPrefix", "", 1, "hidden", "icon-size-5", "sm:flex", 3, "svgIcon"], ["matInput", "", 3, "formControlName", "placeholder", "spellcheck"], [1, "-m-1.5", "mt-6", "flex", "flex-wrap", "items-center"], [1, "m-1.5", "flex", "cursor-pointer", "items-center", "justify-center", "rounded-full", "bg-gray-100", "px-4", "leading-9", "text-gray-500", "dark:bg-gray-700", "dark:text-gray-300", 3, "click"], ["matInput", "", 3, "formControlName", "placeholder"], [1, "space-y-4"], [1, "group", "-ml-4", "mt-2", "inline-flex", "cursor-pointer", "items-center", "rounded", "px-4", "py-2", 3, "click"], [1, "text-secondary", "ml-2", "font-medium", "group-hover:underline"], [1, "relative", "flex"], ["matInput", "", 3, "matDatepicker", "formControlName", "placeholder"], ["matSuffix", "", 3, "for"], ["matInput", "", "cdkTextareaAutosize", "", 3, "formControlName", "placeholder", "rows", "spellcheck"], [1, "-mx-6", "mt-10", "flex", "items-center", "border-t", "bg-gray-50", "py-4", "pl-1", "pr-4", "dark:bg-transparent", "sm:-mx-12", "sm:pl-7", "sm:pr-12"], ["mat-button", "", 3, "click", "color", "matTooltip"], ["mat-button", "", 1, "ml-auto", 3, "click", "matTooltip"], ["mat-flat-button", "", 1, "ml-2", 3, "click", "color", "disabled", "matTooltip"], [1, "m-1.5", "flex", "items-center", "justify-center", "rounded-full", "bg-gray-100", "px-4", "leading-9", "text-gray-500", "dark:bg-gray-700", "dark:text-gray-300"], [1, "whitespace-nowrap", "text-md", "font-medium"], [1, "ml-1.5", "whitespace-nowrap", "text-md", "font-medium"], [1, "bg-card", "w-60", "rounded", "border", "shadow-md"], [1, "m-3", "mr-2", "flex", "items-center"], [1, "flex", "items-center"], ["type", "text", "placeholder", "Enter tag name", 1, "w-full", "min-w-0", "border-0", "py-1", 3, "input", "keydown", "maxLength"], ["mat-icon-button", "", 1, "ml-1", 3, "click"], [1, "flex", "max-h-64", "flex-col", "overflow-y-auto", "border-t", "py-2"], [1, "space-y-2", "py-2"], ["matRipple", "", 1, "-ml-0.5", "flex", "h-10", "min-h-10", "cursor-pointer", "items-center", "pl-4", "pr-3", "leading-none", "hover:bg-hover"], ["matRipple", "", 1, "flex", "h-10", "min-h-10", "cursor-pointer", "items-center", "pl-1", "pr-4", "hover:bg-hover"], ["matRipple", "", 1, "flex", "h-10", "min-h-10", "cursor-pointer", "items-center", "pl-1", "pr-4", "hover:bg-hover", 3, "click"], [1, "pointer-events-none", "flex", "h-10", "min-h-10", "items-center", 3, "checked", "color", "disableRipple"], [1, "fuse-mat-dense", "mx-4", "w-full", 3, "subscriptSizing"], ["matInput", "", 3, "input", "value"], ["mat-icon-button", "", "matSuffix", "", 3, "click"], [1, "ml-2", "icon-size-5", 3, "svgIcon"], ["matRipple", "", 1, "-ml-0.5", "flex", "h-10", "min-h-10", "cursor-pointer", "items-center", "pl-4", "pr-3", "leading-none", "hover:bg-hover", 3, "click"], [1, "mr-2", "icon-size-5", 3, "svgIcon"], [1, "break-all"], [1, "flex-auto", 3, "subscriptSizing"], ["matInput", "", 3, "formControl", "placeholder", "spellcheck"], [1, "ml-2", "w-full", "max-w-24", "flex-auto", "sm:ml-4", "sm:max-w-40", 3, "subscriptSizing"], ["matInput", "", 3, "formControl", "placeholder"], [1, "flex", "w-10", "items-center", "pl-2", 3, "ngClass"], ["mat-icon-button", "", "matTooltip", "Remove", 1, "h-8", "min-h-8", "w-8", 3, "click"], ["matPrefix", "", 1, "mr-1.5", 3, "formControl"], [1, "mr-1", "hidden", "h-4", "w-6", "overflow-hidden", "sm:flex"], [1, "text-default", "font-medium", "sm:mx-0.5"], [3, "value"], [1, "h-4", "w-6", "overflow-hidden"], [1, "ml-2", "font-medium"]], template: function ContactsDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 5);
        \u0275\u0275template(1, ContactsDetailsComponent_Conditional_1_Template, 27, 17)(2, ContactsDetailsComponent_Conditional_2_Template, 92, 52);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.editMode ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.editMode ? 2 : -1);
      }
    }, dependencies: [
      MatButtonModule,
      MatButton,
      MatIconAnchor,
      MatIconButton,
      MatTooltipModule,
      MatTooltip,
      RouterLink,
      MatIconModule,
      MatIcon,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormControlDirective,
      FormGroupDirective,
      FormControlName,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      CdkTextareaAutosize,
      MatCheckboxModule,
      MatCheckbox,
      NgClass,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      MatOptionModule,
      MatDatepickerModule,
      MatDatepicker,
      MatDatepickerInput,
      MatDatepickerToggle,
      TextFieldModule,
      FuseFindByKeyPipe,
      DatePipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactsDetailsComponent, { className: "ContactsDetailsComponent", filePath: "src/app/modules/admin/apps/contacts/details/details.component.ts", lineNumber: 73 });
})();

// src/app/modules/admin/apps/contacts/contacts.routes.ts
var contactResolver = (route, state) => {
  const contactsService = inject(ContactsService);
  const router = inject(Router);
  return contactsService.getContactById(route.paramMap.get("id")).pipe(
    // Error here means the requested contact is not available
    catchError((error) => {
      console.error(error);
      const parentUrl = state.url.split("/").slice(0, -1).join("/");
      router.navigateByUrl(parentUrl);
      return throwError(error);
    })
  );
};
var canDeactivateContactsDetails = (component, currentRoute, currentState, nextState) => {
  let nextRoute = nextState.root;
  while (nextRoute.firstChild) {
    nextRoute = nextRoute.firstChild;
  }
  if (!nextState.url.includes("/contacts")) {
    return true;
  }
  if (nextRoute.paramMap.get("id")) {
    return true;
  }
  return component.closeDrawer().then(() => true);
};
var contacts_routes_default = [
  {
    path: "",
    component: ContactsComponent,
    resolve: {
      tags: () => inject(ContactsService).getTags()
    },
    children: [
      {
        path: "",
        component: ContactsListComponent,
        resolve: {
          contacts: () => inject(ContactsService).getContacts(),
          countries: () => inject(ContactsService).getCountries()
        },
        children: [
          {
            path: ":id",
            component: ContactsDetailsComponent,
            resolve: {
              contact: contactResolver,
              countries: () => inject(ContactsService).getCountries()
            },
            canDeactivate: [canDeactivateContactsDetails]
          }
        ]
      }
    ]
  }
];
export {
  contacts_routes_default as default
};
//# sourceMappingURL=chunk-YUSGWUY7.js.map
