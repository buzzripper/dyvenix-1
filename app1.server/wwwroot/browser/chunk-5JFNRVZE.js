import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-676TDOX6.js";
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
  MatSlideToggle,
  MatSlideToggleModule
} from "./chunk-F65M35UC.js";
import {
  FuseMediaWatcherService
} from "./chunk-NDM3MP5U.js";
import "./chunk-YHH4B3V4.js";
import "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
import {
  FuseAlertComponent
} from "./chunk-OLPBZMG7.js";
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
  MatPrefix,
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
  Validators,
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
import "./chunk-HKG3E5RP.js";
import "./chunk-WH7F4HUX.js";
import "./chunk-JL6CBEU5.js";
import {
  CurrencyPipe,
  NgClass,
  TitleCasePipe
} from "./chunk-M6AYR6A2.js";
import {
  ChangeDetectorRef,
  Subject,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind4,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
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
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/pages/settings/account/account.component.ts
var SettingsAccountComponent = class _SettingsAccountComponent {
  /**
   * Constructor
   */
  constructor(_formBuilder) {
    this._formBuilder = _formBuilder;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.accountForm = this._formBuilder.group({
      name: ["Brian Hughes"],
      username: ["brianh"],
      title: ["Senior Frontend Developer"],
      company: ["YXZ Software"],
      about: [
        "Hey! This is Brian; husband, father and gamer. I'm mostly passionate about bleeding edge tech and chocolate! \u{1F36B}"
      ],
      email: ["hughes.brian@mail.com", Validators.email],
      phone: ["121-490-33-12"],
      country: ["usa"],
      language: ["english"]
    });
  }
  static {
    this.\u0275fac = function SettingsAccountComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsAccountComponent)(\u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsAccountComponent, selectors: [["settings-account"]], decls: 99, vars: 39, consts: [[1, "w-full", "max-w-3xl"], [3, "formGroup"], [1, "w-full"], [1, "text-xl"], [1, "text-secondary"], [1, "mt-8", "grid", "w-full", "gap-6", "sm:grid-cols-4"], [1, "sm:col-span-4"], [1, "w-full", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "formControlName"], [1, "fuse-mat-emphasized-affix", "w-full", 3, "subscriptSizing"], ["matPrefix", "", 1, "text-secondary"], [1, "sm:col-span-2"], ["matInput", "", "cdkTextareaAutosize", "", 3, "formControlName", "cdkAutosizeMinRows"], [1, "text-hint", "mt-1", "text-md"], [1, "my-10", "border-t"], [3, "formControlName"], [3, "value"], [1, "mb-10", "mt-11", "border-t"], [1, "flex", "items-center", "justify-end"], ["mat-stroked-button", "", "type", "button"], ["mat-flat-button", "", "type", "button", 1, "ml-4", 3, "color"]], template: function SettingsAccountComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "form", 1)(2, "div", 2)(3, "div", 3);
        \u0275\u0275text(4, "Profile");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275text(6, " Following information is publicly displayed, be careful! ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 5)(8, "div", 6)(9, "mat-form-field", 7)(10, "mat-label");
        \u0275\u0275text(11, "Name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "mat-icon", 8)(13, "input", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 6)(15, "mat-form-field", 10)(16, "mat-label");
        \u0275\u0275text(17, "Username");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 11);
        \u0275\u0275text(19, "fusetheme.com/");
        \u0275\u0275elementEnd();
        \u0275\u0275element(20, "input", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(21, "div", 12)(22, "mat-form-field", 7)(23, "mat-label");
        \u0275\u0275text(24, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275element(25, "mat-icon", 8)(26, "input", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 12)(28, "mat-form-field", 7)(29, "mat-label");
        \u0275\u0275text(30, "Company");
        \u0275\u0275elementEnd();
        \u0275\u0275element(31, "mat-icon", 8)(32, "input", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(33, "div", 6)(34, "mat-form-field", 7)(35, "mat-label");
        \u0275\u0275text(36, "About");
        \u0275\u0275elementEnd();
        \u0275\u0275element(37, "textarea", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div", 14);
        \u0275\u0275text(39, " Brief description for your profile. Basic HTML and Emoji are allowed. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(40, "div", 15);
        \u0275\u0275elementStart(41, "div", 2)(42, "div", 3);
        \u0275\u0275text(43, "Personal Information");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "div", 4);
        \u0275\u0275text(45, " Communication details in case we want to connect with you. These will be kept private. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(46, "div", 5)(47, "div", 12)(48, "mat-form-field", 7)(49, "mat-label");
        \u0275\u0275text(50, "Email");
        \u0275\u0275elementEnd();
        \u0275\u0275element(51, "mat-icon", 8)(52, "input", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 12)(54, "mat-form-field", 7)(55, "mat-label");
        \u0275\u0275text(56, "Phone");
        \u0275\u0275elementEnd();
        \u0275\u0275element(57, "mat-icon", 8)(58, "input", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div", 12)(60, "mat-form-field", 7)(61, "mat-label");
        \u0275\u0275text(62, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275element(63, "mat-icon", 8);
        \u0275\u0275elementStart(64, "mat-select", 16)(65, "mat-option", 17);
        \u0275\u0275text(66, "United States");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "mat-option", 17);
        \u0275\u0275text(68, "Canada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "mat-option", 17);
        \u0275\u0275text(70, "Mexico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "mat-option", 17);
        \u0275\u0275text(72, "France");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "mat-option", 17);
        \u0275\u0275text(74, "Germany");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "mat-option", 17);
        \u0275\u0275text(76, "Italy");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(77, "div", 12)(78, "mat-form-field", 7)(79, "mat-label");
        \u0275\u0275text(80, "Language");
        \u0275\u0275elementEnd();
        \u0275\u0275element(81, "mat-icon", 8);
        \u0275\u0275elementStart(82, "mat-select", 16)(83, "mat-option", 17);
        \u0275\u0275text(84, "English");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(85, "mat-option", 17);
        \u0275\u0275text(86, "French");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "mat-option", 17);
        \u0275\u0275text(88, "Spanish");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(89, "mat-option", 17);
        \u0275\u0275text(90, "German");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(91, "mat-option", 17);
        \u0275\u0275text(92, "Italian");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275element(93, "div", 18);
        \u0275\u0275elementStart(94, "div", 19)(95, "button", 20);
        \u0275\u0275text(96, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "button", 21);
        \u0275\u0275text(98, " Save ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.accountForm);
        \u0275\u0275advance(8);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:user");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "name");
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(5);
        \u0275\u0275property("formControlName", "username");
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:briefcase");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "title");
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:building-office-2");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "company");
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "about")("cdkAutosizeMinRows", 5);
        \u0275\u0275advance(11);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:envelope");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "email");
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:phone");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "phone");
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:map-pin");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "country");
        \u0275\u0275advance();
        \u0275\u0275property("value", "usa");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "canada");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "mexico");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "france");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "germany");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "italy");
        \u0275\u0275advance(3);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:globe-alt");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "language");
        \u0275\u0275advance();
        \u0275\u0275property("value", "english");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "french");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "spanish");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "german");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "italian");
        \u0275\u0275advance(6);
        \u0275\u0275property("color", "primary");
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
      MatPrefix,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      CdkTextareaAutosize,
      TextFieldModule,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatOptionModule,
      MatButtonModule,
      MatButton
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsAccountComponent, { className: "SettingsAccountComponent", filePath: "src/app/modules/admin/pages/settings/account/account.component.ts", lineNumber: 39 });
})();

// src/app/modules/admin/pages/settings/notifications/notifications.component.ts
var SettingsNotificationsComponent = class _SettingsNotificationsComponent {
  /**
   * Constructor
   */
  constructor(_formBuilder) {
    this._formBuilder = _formBuilder;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.notificationsForm = this._formBuilder.group({
      communication: [true],
      security: [true],
      meetups: [false],
      comments: [false],
      mention: [true],
      follow: [true],
      inquiry: [true]
    });
  }
  static {
    this.\u0275fac = function SettingsNotificationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsNotificationsComponent)(\u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsNotificationsComponent, selectors: [["settings-notifications"]], decls: 61, vars: 16, consts: [["communication", ""], ["securityToggle", ""], ["meetupsToggle", ""], ["comments", ""], ["mention", ""], ["follow", ""], ["inquiry", ""], [1, "w-full", "max-w-3xl"], [3, "formGroup"], [1, "w-full", "text-xl"], [1, "mt-8", "grid", "w-full", "grid-cols-1", "gap-6"], [1, "flex", "items-center", "justify-between"], [1, "flex-auto", "cursor-pointer", 3, "click"], [1, "font-medium", "leading-6"], [1, "text-secondary", "text-md"], [1, "ml-2", 3, "color", "formControlName"], [1, "my-10", "border-t"], [1, "mt-8", "w-full", "font-medium"], [1, "mt-4", "grid", "w-full", "grid-cols-1", "gap-4"], [1, "flex-auto", "cursor-pointer", "leading-6", 3, "click"], [1, "flex", "items-center", "justify-end"], ["mat-stroked-button", "", "type", "button"], ["mat-flat-button", "", "type", "button", 1, "ml-4", 3, "color"]], template: function SettingsNotificationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 7)(1, "form", 8)(2, "div", 9);
        \u0275\u0275text(3, "Alerts");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 10)(5, "div", 11)(6, "div", 12);
        \u0275\u0275listener("click", function SettingsNotificationsComponent_Template_div_click_6_listener() {
          \u0275\u0275restoreView(_r1);
          const communication_r2 = \u0275\u0275reference(12);
          return \u0275\u0275resetView(communication_r2.toggle());
        });
        \u0275\u0275elementStart(7, "div", 13);
        \u0275\u0275text(8, "Communication");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 14);
        \u0275\u0275text(10, " Get news, announcements, and product updates. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "mat-slide-toggle", 15, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 11)(14, "div", 12);
        \u0275\u0275listener("click", function SettingsNotificationsComponent_Template_div_click_14_listener() {
          \u0275\u0275restoreView(_r1);
          const securityToggle_r3 = \u0275\u0275reference(20);
          return \u0275\u0275resetView(securityToggle_r3.toggle());
        });
        \u0275\u0275elementStart(15, "div", 13);
        \u0275\u0275text(16, "Security");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 14);
        \u0275\u0275text(18, " Get important notifications about your account security. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(19, "mat-slide-toggle", 15, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 11)(22, "div", 12);
        \u0275\u0275listener("click", function SettingsNotificationsComponent_Template_div_click_22_listener() {
          \u0275\u0275restoreView(_r1);
          const meetupsToggle_r4 = \u0275\u0275reference(28);
          return \u0275\u0275resetView(meetupsToggle_r4.toggle());
        });
        \u0275\u0275elementStart(23, "div", 13);
        \u0275\u0275text(24, "Meetups");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 14);
        \u0275\u0275text(26, " Get an email when a Meetup is posted close to my location. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(27, "mat-slide-toggle", 15, 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(29, "div", 16);
        \u0275\u0275elementStart(30, "div", 9);
        \u0275\u0275text(31, "Account Activity");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 17);
        \u0275\u0275text(33, "Email me when:");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 18)(35, "div", 11)(36, "div", 19);
        \u0275\u0275listener("click", function SettingsNotificationsComponent_Template_div_click_36_listener() {
          \u0275\u0275restoreView(_r1);
          const comments_r5 = \u0275\u0275reference(39);
          return \u0275\u0275resetView(comments_r5.toggle());
        });
        \u0275\u0275text(37, " someone comments on one of my items ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(38, "mat-slide-toggle", 15, 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "div", 11)(41, "div", 19);
        \u0275\u0275listener("click", function SettingsNotificationsComponent_Template_div_click_41_listener() {
          \u0275\u0275restoreView(_r1);
          const mention_r6 = \u0275\u0275reference(44);
          return \u0275\u0275resetView(mention_r6.toggle());
        });
        \u0275\u0275text(42, " someone mentions me ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(43, "mat-slide-toggle", 15, 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 11)(46, "div", 19);
        \u0275\u0275listener("click", function SettingsNotificationsComponent_Template_div_click_46_listener() {
          \u0275\u0275restoreView(_r1);
          const follow_r7 = \u0275\u0275reference(49);
          return \u0275\u0275resetView(follow_r7.toggle());
        });
        \u0275\u0275text(47, " someone follows me ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(48, "mat-slide-toggle", 15, 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "div", 11)(51, "div", 19);
        \u0275\u0275listener("click", function SettingsNotificationsComponent_Template_div_click_51_listener() {
          \u0275\u0275restoreView(_r1);
          const inquiry_r8 = \u0275\u0275reference(54);
          return \u0275\u0275resetView(inquiry_r8.toggle());
        });
        \u0275\u0275text(52, " someone replies to my job posting ");
        \u0275\u0275elementEnd();
        \u0275\u0275element(53, "mat-slide-toggle", 15, 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(55, "div", 16);
        \u0275\u0275elementStart(56, "div", 20)(57, "button", 21);
        \u0275\u0275text(58, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(59, "button", 22);
        \u0275\u0275text(60, " Save ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.notificationsForm);
        \u0275\u0275advance(10);
        \u0275\u0275property("color", "primary")("formControlName", "communication");
        \u0275\u0275advance(8);
        \u0275\u0275property("color", "primary")("formControlName", "security");
        \u0275\u0275advance(8);
        \u0275\u0275property("color", "primary")("formControlName", "meetups");
        \u0275\u0275advance(11);
        \u0275\u0275property("color", "primary")("formControlName", "comments");
        \u0275\u0275advance(5);
        \u0275\u0275property("color", "primary")("formControlName", "mention");
        \u0275\u0275advance(5);
        \u0275\u0275property("color", "primary")("formControlName", "follow");
        \u0275\u0275advance(5);
        \u0275\u0275property("color", "primary")("formControlName", "inquiry");
        \u0275\u0275advance(6);
        \u0275\u0275property("color", "primary");
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, MatSlideToggleModule, MatSlideToggle, MatButtonModule, MatButton], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsNotificationsComponent, { className: "SettingsNotificationsComponent", filePath: "src/app/modules/admin/pages/settings/notifications/notifications.component.ts", lineNumber: 28 });
})();

// src/app/modules/admin/pages/settings/plan-billing/plan-billing.component.ts
var _c0 = (a0) => ({ "ring ring-inset ring-primary": a0 });
function SettingsPlanBillingComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-radio-button", 10);
  }
  if (rf & 2) {
    const plan_r1 = ctx.$implicit;
    \u0275\u0275property("value", plan_r1.value);
  }
}
function SettingsPlanBillingComponent_For_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-icon", 28);
  }
  if (rf & 2) {
    \u0275\u0275property("svgIcon", "heroicons_solid:check-circle");
  }
}
function SettingsPlanBillingComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275listener("click", function SettingsPlanBillingComponent_For_16_Template_div_click_0_listener() {
      const plan_r3 = \u0275\u0275restoreView(_r2).$implicit;
      \u0275\u0275nextContext();
      const planRadioGroup_r4 = \u0275\u0275reference(12);
      return \u0275\u0275resetView(planRadioGroup_r4.value = plan_r3.value);
    });
    \u0275\u0275template(1, SettingsPlanBillingComponent_For_16_Conditional_1_Template, 1, 1, "mat-icon", 28);
    \u0275\u0275elementStart(2, "div", 29);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "div", 31);
    \u0275\u0275elementStart(7, "div", 32)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span", 5);
    \u0275\u0275text(12, " / month");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const plan_r3 = ctx.$implicit;
    \u0275\u0275nextContext();
    const planRadioGroup_r4 = \u0275\u0275reference(12);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(10, _c0, planRadioGroup_r4.value === plan_r3.value));
    \u0275\u0275advance();
    \u0275\u0275conditional(planRadioGroup_r4.value === plan_r3.value ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(plan_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", plan_r3.details, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind4(10, 5, plan_r3.price, "USD", "symbol", "1.0"));
  }
}
var SettingsPlanBillingComponent = class _SettingsPlanBillingComponent {
  /**
   * Constructor
   */
  constructor(_formBuilder) {
    this._formBuilder = _formBuilder;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.planBillingForm = this._formBuilder.group({
      plan: ["team"],
      cardHolder: ["Brian Hughes"],
      cardNumber: [""],
      cardExpiration: [""],
      cardCVC: [""],
      country: ["usa"],
      zip: [""]
    });
    this.plans = [
      {
        value: "basic",
        label: "BASIC",
        details: "Starter plan for individuals.",
        price: "10"
      },
      {
        value: "team",
        label: "TEAM",
        details: "Collaborate up to 10 people.",
        price: "20"
      },
      {
        value: "enterprise",
        label: "ENTERPRISE",
        details: "For bigger businesses.",
        price: "40"
      }
    ];
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
    this.\u0275fac = function SettingsPlanBillingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsPlanBillingComponent)(\u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsPlanBillingComponent, selectors: [["settings-plan-billing"]], decls: 78, vars: 29, consts: [["planRadioGroup", "matRadioGroup"], [1, "w-full", "max-w-3xl"], [3, "formGroup"], [1, "w-full"], [1, "text-xl"], [1, "text-secondary"], [1, "mt-8", "grid", "w-full", "gap-6", "sm:grid-cols-3"], [1, "sm:col-span-3"], [3, "appearance", "type"], [1, "pointer-events-none", "invisible", "absolute", "h-0", "w-0", 3, "formControlName"], [3, "value"], [1, "bg-card", "relative", "flex", "cursor-pointer", "flex-col", "items-start", "justify-start", "rounded-md", "p-6", "shadow", 3, "ngClass"], [1, "mb-10", "mt-12", "border-t"], [1, "mt-8", "grid", "w-full", "grid-cols-4", "gap-6"], [1, "col-span-4"], [1, "w-full", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "formControlName"], [1, "col-span-4", "sm:col-span-2"], [1, "col-span-2", "sm:col-span-1"], ["matInput", "", 3, "formControlName", "placeholder"], [3, "formControlName"], ["matInput", ""], [1, "mb-10", "mt-11", "border-t"], [1, "flex", "items-center", "justify-end"], ["mat-stroked-button", "", "type", "button"], ["mat-flat-button", "", "type", "button", 1, "ml-4", 3, "color"], [1, "bg-card", "relative", "flex", "cursor-pointer", "flex-col", "items-start", "justify-start", "rounded-md", "p-6", "shadow", 3, "click", "ngClass"], [1, "absolute", "right-0", "top-0", "mr-3", "mt-3", "text-primary", "icon-size-7", 3, "svgIcon"], [1, "font-semibold"], [1, "text-secondary", "mt-1", "whitespace-normal"], [1, "flex-auto"], [1, "mt-8", "text-lg"]], template: function SettingsPlanBillingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "form", 2)(2, "div", 3)(3, "div", 4);
        \u0275\u0275text(4, "Change your plan");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275text(6, " Upgrade or downgrade your current plan. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 6)(8, "div", 7)(9, "fuse-alert", 8);
        \u0275\u0275text(10, " Changing the plan will take effect immediately. You will be charged for the rest of the current month. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "mat-radio-group", 9, 0);
        \u0275\u0275repeaterCreate(13, SettingsPlanBillingComponent_For_14_Template, 1, 1, "mat-radio-button", 10, ctx.trackByFn, true);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(15, SettingsPlanBillingComponent_For_16_Template, 13, 12, "div", 11, ctx.trackByFn, true);
        \u0275\u0275elementEnd();
        \u0275\u0275element(17, "div", 12);
        \u0275\u0275elementStart(18, "div", 3)(19, "div", 4);
        \u0275\u0275text(20, "Payment Details");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 5);
        \u0275\u0275text(22, " Update your billing information. Make sure to set your location correctly as it could affect your tax rates. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "div", 13)(24, "div", 14)(25, "mat-form-field", 15)(26, "mat-label");
        \u0275\u0275text(27, "Card holder");
        \u0275\u0275elementEnd();
        \u0275\u0275element(28, "mat-icon", 16)(29, "input", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 18)(31, "mat-form-field", 15)(32, "mat-label");
        \u0275\u0275text(33, "Card number");
        \u0275\u0275elementEnd();
        \u0275\u0275element(34, "mat-icon", 16)(35, "input", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 19)(37, "mat-form-field", 15)(38, "mat-label");
        \u0275\u0275text(39, "Expiration date");
        \u0275\u0275elementEnd();
        \u0275\u0275element(40, "mat-icon", 16)(41, "input", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 19)(43, "mat-form-field", 15)(44, "mat-label");
        \u0275\u0275text(45, "CVC / CVC2");
        \u0275\u0275elementEnd();
        \u0275\u0275element(46, "mat-icon", 16)(47, "input", 17);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(48, "div", 18)(49, "mat-form-field", 15)(50, "mat-label");
        \u0275\u0275text(51, "Country");
        \u0275\u0275elementEnd();
        \u0275\u0275element(52, "mat-icon", 16);
        \u0275\u0275elementStart(53, "mat-select", 21)(54, "mat-option", 10);
        \u0275\u0275text(55, "United States");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "mat-option", 10);
        \u0275\u0275text(57, "Canada");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(58, "mat-option", 10);
        \u0275\u0275text(59, "Mexico");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(60, "mat-option", 10);
        \u0275\u0275text(61, "France");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "mat-option", 10);
        \u0275\u0275text(63, "Germany");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "mat-option", 10);
        \u0275\u0275text(65, "Italy");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(66, "div", 18)(67, "mat-form-field", 15)(68, "mat-label");
        \u0275\u0275text(69, "ZIP / Postal code");
        \u0275\u0275elementEnd();
        \u0275\u0275element(70, "mat-icon", 16)(71, "input", 22);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(72, "div", 23);
        \u0275\u0275elementStart(73, "div", 24)(74, "button", 25);
        \u0275\u0275text(75, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "button", 26);
        \u0275\u0275text(77, " Save ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.planBillingForm);
        \u0275\u0275advance(8);
        \u0275\u0275property("appearance", "outline")("type", "info");
        \u0275\u0275advance(2);
        \u0275\u0275property("formControlName", "plan");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.plans);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.plans);
        \u0275\u0275advance(10);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:user");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "cardHolder");
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:credit-card");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "cardNumber");
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:calendar");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "cardExpiration")("placeholder", "MM / YY");
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:lock-closed");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "cardCVC");
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:map-pin");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "country");
        \u0275\u0275advance();
        \u0275\u0275property("value", "usa");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "canada");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "mexico");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "france");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "germany");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "italy");
        \u0275\u0275advance(3);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:hashtag");
        \u0275\u0275advance(6);
        \u0275\u0275property("color", "primary");
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
      FuseAlertComponent,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      NgClass,
      MatIconModule,
      MatIcon,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatOptionModule,
      MatButtonModule,
      MatButton,
      CurrencyPipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsPlanBillingComponent, { className: "SettingsPlanBillingComponent", filePath: "src/app/modules/admin/pages/settings/plan-billing/plan-billing.component.ts", lineNumber: 43 });
})();

// src/app/modules/admin/pages/settings/security/security.component.ts
var SettingsSecurityComponent = class _SettingsSecurityComponent {
  /**
   * Constructor
   */
  constructor(_formBuilder) {
    this._formBuilder = _formBuilder;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.securityForm = this._formBuilder.group({
      currentPassword: [""],
      newPassword: [""],
      twoStep: [true],
      askPasswordChange: [false]
    });
  }
  static {
    this.\u0275fac = function SettingsSecurityComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsSecurityComponent)(\u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsSecurityComponent, selectors: [["settings-security"]], decls: 51, vars: 12, consts: [["twoStepToggle", ""], ["askPasswordChangeToggle", ""], [1, "w-full", "max-w-3xl"], [3, "formGroup"], [1, "w-full"], [1, "text-xl"], [1, "text-secondary"], [1, "mt-8", "grid", "w-full", "gap-6", "sm:grid-cols-4"], [1, "sm:col-span-4"], [1, "w-full", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["type", "password", "matInput", "", 3, "formControlName"], [1, "text-hint", "mt-1", "text-md"], [1, "my-10", "border-t"], [1, "flex", "items-center", "justify-between", "sm:col-span-4"], [1, "flex-auto", "cursor-pointer", 3, "click"], [1, "font-medium", "leading-6"], [1, "text-secondary", "text-md"], [1, "ml-4", 3, "color", "formControlName"], [1, "flex", "items-center", "justify-end"], ["mat-stroked-button", "", "type", "button"], ["mat-flat-button", "", "type", "button", 1, "ml-4", 3, "color"]], template: function SettingsSecurityComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 2)(1, "form", 3)(2, "div", 4)(3, "div", 5);
        \u0275\u0275text(4, "Change your password");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 6);
        \u0275\u0275text(6, " You can only change your password twice within 24 hours! ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "mat-form-field", 9)(10, "mat-label");
        \u0275\u0275text(11, "Current password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "mat-icon", 10)(13, "input", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 8)(15, "mat-form-field", 9)(16, "mat-label");
        \u0275\u0275text(17, "New password");
        \u0275\u0275elementEnd();
        \u0275\u0275element(18, "mat-icon", 10)(19, "input", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 12);
        \u0275\u0275text(21, " Minimum 8 characters. Must include numbers, letters and special characters. ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(22, "div", 13);
        \u0275\u0275elementStart(23, "div", 4)(24, "div", 5);
        \u0275\u0275text(25, "Security preferences");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 6);
        \u0275\u0275text(27, " Keep your account more secure with following preferences. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 7)(29, "div", 14)(30, "div", 15);
        \u0275\u0275listener("click", function SettingsSecurityComponent_Template_div_click_30_listener() {
          \u0275\u0275restoreView(_r1);
          const twoStepToggle_r2 = \u0275\u0275reference(36);
          return \u0275\u0275resetView(twoStepToggle_r2.toggle());
        });
        \u0275\u0275elementStart(31, "div", 16);
        \u0275\u0275text(32, " Enable 2-step authentication ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 17);
        \u0275\u0275text(34, " Protects you against password theft by requesting an authentication code via SMS on every login. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(35, "mat-slide-toggle", 18, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div", 14)(38, "div", 15);
        \u0275\u0275listener("click", function SettingsSecurityComponent_Template_div_click_38_listener() {
          \u0275\u0275restoreView(_r1);
          const askPasswordChangeToggle_r3 = \u0275\u0275reference(44);
          return \u0275\u0275resetView(askPasswordChangeToggle_r3.toggle());
        });
        \u0275\u0275elementStart(39, "div", 16);
        \u0275\u0275text(40, " Ask to change password on every 6 months ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 17);
        \u0275\u0275text(42, " A simple but an effective way to be protected against data leaks and password theft. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(43, "mat-slide-toggle", 18, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(45, "div", 13);
        \u0275\u0275elementStart(46, "div", 19)(47, "button", 20);
        \u0275\u0275text(48, "Cancel");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(49, "button", 21);
        \u0275\u0275text(50, " Save ");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.securityForm);
        \u0275\u0275advance(8);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:key");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "currentPassword");
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:key");
        \u0275\u0275advance();
        \u0275\u0275property("formControlName", "newPassword");
        \u0275\u0275advance(16);
        \u0275\u0275property("color", "primary")("formControlName", "twoStep");
        \u0275\u0275advance(8);
        \u0275\u0275property("color", "primary")("formControlName", "askPasswordChange");
        \u0275\u0275advance(6);
        \u0275\u0275property("color", "primary");
      }
    }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatPrefix, MatIconModule, MatIcon, MatInputModule, MatInput, MatSlideToggleModule, MatSlideToggle, MatButtonModule, MatButton], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsSecurityComponent, { className: "SettingsSecurityComponent", filePath: "src/app/modules/admin/pages/settings/security/security.component.ts", lineNumber: 34 });
})();

// src/app/modules/admin/pages/settings/team/team.component.ts
function SettingsTeamComponent_For_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 12);
  }
  if (rf & 2) {
    const member_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", member_r1.avatar, \u0275\u0275sanitizeUrl);
  }
}
function SettingsTeamComponent_For_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const member_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", member_r1.name.charAt(0), " ");
  }
}
function SettingsTeamComponent_For_11_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23)(1, "div", 15);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    \u0275\u0275property("value", role_r2.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", role_r2.label, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", role_r2.description, " ");
  }
}
function SettingsTeamComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    \u0275\u0275template(3, SettingsTeamComponent_For_11_Conditional_3_Template, 1, 1, "img", 12)(4, SettingsTeamComponent_For_11_Conditional_4_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14)(6, "div", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 17)(11, "div", 18)(12, "mat-form-field", 19)(13, "mat-select", 20, 0)(15, "mat-select-trigger", 21)(16, "span");
    \u0275\u0275text(17, "Role:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 22);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "titlecase");
    \u0275\u0275elementEnd()();
    \u0275\u0275repeaterCreate(21, SettingsTeamComponent_For_11_For_22_Template, 5, 3, "mat-option", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 24)(24, "button", 25);
    \u0275\u0275element(25, "mat-icon", 26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const member_r1 = ctx.$implicit;
    const roleSelect_r3 = \u0275\u0275reference(14);
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(member_r1.avatar ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!member_r1.avatar ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(member_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(member_r1.email);
    \u0275\u0275advance(3);
    \u0275\u0275property("subscriptSizing", "dynamic");
    \u0275\u0275advance();
    \u0275\u0275property("panelClass", "w-72 min-w-72 max-w-72 h-auto max-h-none")("value", member_r1.role);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 9, roleSelect_r3.value));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.roles);
    \u0275\u0275advance(4);
    \u0275\u0275property("svgIcon", "heroicons_outline:trash");
  }
}
var SettingsTeamComponent = class _SettingsTeamComponent {
  /**
   * Constructor
   */
  constructor() {
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.members = [
      {
        avatar: "images/avatars/male-01.jpg",
        name: "Dejesus Michael",
        email: "dejesusmichael@mail.org",
        role: "admin"
      },
      {
        avatar: "images/avatars/male-03.jpg",
        name: "Mclaughlin Steele",
        email: "mclaughlinsteele@mail.me",
        role: "admin"
      },
      {
        avatar: "images/avatars/female-02.jpg",
        name: "Laverne Dodson",
        email: "lavernedodson@mail.ca",
        role: "write"
      },
      {
        avatar: "images/avatars/female-03.jpg",
        name: "Trudy Berg",
        email: "trudyberg@mail.us",
        role: "read"
      },
      {
        avatar: "images/avatars/male-07.jpg",
        name: "Lamb Underwood",
        email: "lambunderwood@mail.me",
        role: "read"
      },
      {
        avatar: "images/avatars/male-08.jpg",
        name: "Mcleod Wagner",
        email: "mcleodwagner@mail.biz",
        role: "read"
      },
      {
        avatar: "images/avatars/female-07.jpg",
        name: "Shannon Kennedy",
        email: "shannonkennedy@mail.ca",
        role: "read"
      }
    ];
    this.roles = [
      {
        label: "Read",
        value: "read",
        description: "Can read and clone this repository. Can also open and comment on issues and pull requests."
      },
      {
        label: "Write",
        value: "write",
        description: "Can read, clone, and push to this repository. Can also manage issues and pull requests."
      },
      {
        label: "Admin",
        value: "admin",
        description: "Can read, clone, and push to this repository. Can also manage issues, pull requests, and repository settings, including adding collaborators."
      }
    ];
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
    this.\u0275fac = function SettingsTeamComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsTeamComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsTeamComponent, selectors: [["settings-team"]], decls: 12, vars: 4, consts: [["roleSelect", "matSelect"], [1, "w-full", "max-w-3xl"], [1, "w-full"], [1, "w-full", 3, "subscriptSizing"], ["matPrefix", "", 1, "icon-size-5", 3, "svgIcon"], ["matInput", "", 3, "placeholder"], ["mat-icon-button", "", "matSuffix", ""], [1, "icon-size-5", 3, "svgIcon"], [1, "mt-8", "flex", "flex-col", "divide-y", "border-b", "border-t"], [1, "flex", "flex-col", "py-6", "sm:flex-row", "sm:items-center"], [1, "flex", "items-center"], [1, "flex", "h-10", "w-10", "flex-0", "items-center", "justify-center", "overflow-hidden", "rounded-full"], ["alt", "Contact avatar", 1, "h-full", "w-full", "object-cover", 3, "src"], [1, "flex", "h-full", "w-full", "items-center", "justify-center", "rounded-full", "bg-gray-200", "text-lg", "uppercase", "text-gray-600", "dark:bg-gray-700", "dark:text-gray-200"], [1, "ml-4"], [1, "font-medium"], [1, "text-secondary"], [1, "mt-4", "flex", "items-center", "sm:ml-auto", "sm:mt-0"], [1, "order-2", "ml-4", "sm:order-1", "sm:ml-0"], [1, "fuse-mat-dense", "w-32", 3, "subscriptSizing"], ["disableOptionCentering", "", 3, "panelClass", "value"], [1, "text-md"], [1, "ml-1", "font-medium"], [1, "h-auto", "py-4", "leading-none", 3, "value"], [1, "order-1", "sm:order-2", "sm:ml-3"], ["mat-icon-button", ""], [1, "text-hint", 3, "svgIcon"], [1, "text-secondary", "mt-1.5", "whitespace-normal", "text-sm", "leading-normal"]], template: function SettingsTeamComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "mat-form-field", 3)(3, "mat-label");
        \u0275\u0275text(4, "Add team members");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "mat-icon", 4)(6, "input", 5);
        \u0275\u0275elementStart(7, "button", 6);
        \u0275\u0275element(8, "mat-icon", 7);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(9, "div", 8);
        \u0275\u0275repeaterCreate(10, SettingsTeamComponent_For_11_Template, 26, 11, "div", 9, ctx.trackByFn, true);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("svgIcon", "heroicons_solid:user");
        \u0275\u0275advance();
        \u0275\u0275property("placeholder", "Email address");
        \u0275\u0275advance(2);
        \u0275\u0275property("svgIcon", "heroicons_solid:plus-circle");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.members);
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatPrefix,
      MatSuffix,
      MatIconModule,
      MatIcon,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatIconButton,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      MatOptionModule,
      TitleCasePipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsTeamComponent, { className: "SettingsTeamComponent", filePath: "src/app/modules/admin/pages/settings/team/team.component.ts", lineNumber: 30 });
})();

// src/app/modules/admin/pages/settings/settings.component.ts
var _c02 = ["drawer"];
var _c1 = (a0, a1) => ({ "dark:hover:bg-hover hover:bg-gray-100": a0, "bg-primary-50 dark:bg-hover": a1 });
var _c2 = (a0, a1) => ({ "text-hint": a0, "text-primary dark:text-primary-500": a1 });
var _c3 = (a0) => ({ "text-primary dark:text-primary-500": a0 });
function SettingsComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275listener("click", function SettingsComponent_For_12_Template_div_click_0_listener() {
      const panel_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.goToPanel(panel_r4.id));
    });
    \u0275\u0275element(1, "mat-icon", 18);
    \u0275\u0275elementStart(2, "div", 19)(3, "div", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const panel_r4 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(6, _c1, !ctx_r4.selectedPanel || ctx_r4.selectedPanel !== panel_r4.id, ctx_r4.selectedPanel && ctx_r4.selectedPanel === panel_r4.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction2(9, _c2, !ctx_r4.selectedPanel || ctx_r4.selectedPanel !== panel_r4.id, ctx_r4.selectedPanel && ctx_r4.selectedPanel === panel_r4.id))("svgIcon", panel_r4.icon);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngClass", \u0275\u0275pureFunction1(12, _c3, ctx_r4.selectedPanel && ctx_r4.selectedPanel === panel_r4.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", panel_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", panel_r4.description, " ");
  }
}
function SettingsComponent_Case_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-account");
  }
}
function SettingsComponent_Case_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-security");
  }
}
function SettingsComponent_Case_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-plan-billing");
  }
}
function SettingsComponent_Case_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-notifications");
  }
}
function SettingsComponent_Case_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "settings-team");
  }
}
var SettingsComponent = class _SettingsComponent {
  /**
   * Constructor
   */
  constructor(_changeDetectorRef, _fuseMediaWatcherService) {
    this._changeDetectorRef = _changeDetectorRef;
    this._fuseMediaWatcherService = _fuseMediaWatcherService;
    this.drawerMode = "side";
    this.drawerOpened = true;
    this.panels = [];
    this.selectedPanel = "account";
    this._unsubscribeAll = new Subject();
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.panels = [
      {
        id: "account",
        icon: "heroicons_outline:user-circle",
        title: "Account",
        description: "Manage your public profile and private information"
      },
      {
        id: "security",
        icon: "heroicons_outline:lock-closed",
        title: "Security",
        description: "Manage your password and 2-step verification preferences"
      },
      {
        id: "plan-billing",
        icon: "heroicons_outline:credit-card",
        title: "Plan & Billing",
        description: "Manage your subscription plan, payment method and billing information"
      },
      {
        id: "notifications",
        icon: "heroicons_outline:bell",
        title: "Notifications",
        description: "Manage when you'll be notified on which channels"
      },
      {
        id: "team",
        icon: "heroicons_outline:user-group",
        title: "Team",
        description: "Manage your existing team and change roles/permissions"
      }
    ];
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
   * Navigate to the panel
   *
   * @param panel
   */
  goToPanel(panel) {
    this.selectedPanel = panel;
    if (this.drawerMode === "over") {
      this.drawer.close();
    }
  }
  /**
   * Get the details of the panel
   *
   * @param id
   */
  getPanelInfo(id) {
    return this.panels.find((panel) => panel.id === id);
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
    this.\u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(FuseMediaWatcherService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.drawer = _t.first);
      }
    }, decls: 26, vars: 7, consts: [["drawer", ""], [1, "flex", "w-full", "min-w-0", "flex-col", "sm:absolute", "sm:inset-0", "sm:overflow-hidden"], [1, "flex-auto", "sm:h-full"], [1, "dark:bg-gray-900", "sm:w-96", 3, "autoFocus", "mode", "opened"], [1, "m-8", "mr-6", "flex", "items-center", "justify-between", "sm:my-10"], [1, "text-4xl", "font-extrabold", "leading-none", "tracking-tight"], [1, "lg:hidden"], ["mat-icon-button", "", 3, "click"], [3, "svgIcon"], [1, "flex", "flex-col", "divide-y", "border-b", "border-t"], [1, "flex", "cursor-pointer", "px-8", "py-5", 3, "ngClass"], [1, "flex", "flex-col"], [1, "flex-auto", "px-6", "pb-12", "pt-9", "md:p-8", "md:pb-12", "lg:p-12"], [1, "flex", "items-center"], ["mat-icon-button", "", 1, "-ml-2", "lg:hidden", 3, "click"], [1, "ml-2", "text-3xl", "font-bold", "leading-none", "tracking-tight", "lg:ml-0"], [1, "mt-8"], [1, "flex", "cursor-pointer", "px-8", "py-5", 3, "click", "ngClass"], [3, "ngClass", "svgIcon"], [1, "ml-3"], [1, "font-medium", "leading-6", 3, "ngClass"], [1, "text-secondary", "mt-0.5"]], template: function SettingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "mat-drawer-container", 2)(2, "mat-drawer", 3, 0)(4, "div", 4)(5, "div", 5);
        \u0275\u0275text(6, " Settings ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6)(8, "button", 7);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_8_listener() {
          \u0275\u0275restoreView(_r1);
          const drawer_r2 = \u0275\u0275reference(3);
          return \u0275\u0275resetView(drawer_r2.close());
        });
        \u0275\u0275element(9, "mat-icon", 8);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275repeaterCreate(11, SettingsComponent_For_12_Template, 7, 14, "div", 10, ctx.trackByFn, true);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-drawer-content", 11)(14, "div", 12)(15, "div", 13)(16, "button", 14);
        \u0275\u0275listener("click", function SettingsComponent_Template_button_click_16_listener() {
          \u0275\u0275restoreView(_r1);
          const drawer_r2 = \u0275\u0275reference(3);
          return \u0275\u0275resetView(drawer_r2.toggle());
        });
        \u0275\u0275element(17, "mat-icon", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 15);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "div", 16);
        \u0275\u0275template(21, SettingsComponent_Case_21_Template, 1, 0, "settings-account")(22, SettingsComponent_Case_22_Template, 1, 0, "settings-security")(23, SettingsComponent_Case_23_Template, 1, 0, "settings-plan-billing")(24, SettingsComponent_Case_24_Template, 1, 0, "settings-notifications")(25, SettingsComponent_Case_25_Template, 1, 0, "settings-team");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        let tmp_8_0;
        \u0275\u0275advance(2);
        \u0275\u0275property("autoFocus", false)("mode", ctx.drawerMode)("opened", ctx.drawerOpened);
        \u0275\u0275advance(7);
        \u0275\u0275property("svgIcon", "heroicons_outline:x-mark");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.panels);
        \u0275\u0275advance(6);
        \u0275\u0275property("svgIcon", "heroicons_outline:bars-3");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.getPanelInfo(ctx.selectedPanel).title, " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_8_0 = ctx.selectedPanel) === "account" ? 21 : tmp_8_0 === "security" ? 22 : tmp_8_0 === "plan-billing" ? 23 : tmp_8_0 === "notifications" ? 24 : tmp_8_0 === "team" ? 25 : -1);
      }
    }, dependencies: [
      MatSidenavModule,
      MatDrawer,
      MatDrawerContainer,
      MatDrawerContent,
      MatButtonModule,
      MatIconButton,
      MatIconModule,
      MatIcon,
      NgClass,
      SettingsAccountComponent,
      SettingsSecurityComponent,
      SettingsPlanBillingComponent,
      SettingsNotificationsComponent,
      SettingsTeamComponent
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/modules/admin/pages/settings/settings.component.ts", lineNumber: 39 });
})();

// src/app/modules/admin/pages/settings/settings.routes.ts
var settings_routes_default = [
  {
    path: "",
    component: SettingsComponent
  }
];
export {
  settings_routes_default as default
};
//# sourceMappingURL=chunk-5JFNRVZE.js.map
