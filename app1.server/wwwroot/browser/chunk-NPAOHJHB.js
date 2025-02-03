import {
  FuseHighlightComponent
} from "./chunk-6QCSQUVR.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-5KZHZBIW.js";
import {
  FuseConfirmationService
} from "./chunk-7Z6ZIB4I.js";
import "./chunk-M6DXA547.js";
import "./chunk-YHH4B3V4.js";
import "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-LCOBNKPY.js";
import {
  MatInput,
  MatInputModule
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
  FormGroupName,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  UntypedFormBuilder,
  ɵNgNoValidate
} from "./chunk-J5XV3GIF.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-JPDBWMRG.js";
import "./chunk-5AHQJJ5Y.js";
import {
  MatOption,
  MatOptionModule
} from "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import "./chunk-WH7F4HUX.js";
import {
  RouterLink
} from "./chunk-WTEW5YKI.js";
import "./chunk-JL6CBEU5.js";
import {
  JsonPipe,
  TitleCasePipe
} from "./chunk-M6AYR6A2.js";
import {
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/ui/confirmation-dialog/confirmation-dialog.component.ts
var _c0 = () => ["primary", "accent", "warn", "basic", "info", "success", "warning", "error"];
var _c1 = () => ["primary", "accent", "warn"];
function ConfirmationDialogComponent_For_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r1 = ctx.$implicit;
    \u0275\u0275property("value", color_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, color_r1));
  }
}
function ConfirmationDialogComponent_For_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "titlecase");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const color_r2 = ctx.$implicit;
    \u0275\u0275property("value", color_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, color_r2));
  }
}
var ConfirmationDialogComponent = class _ConfirmationDialogComponent {
  /**
   * Constructor
   */
  constructor(_formBuilder, _fuseConfirmationService) {
    this._formBuilder = _formBuilder;
    this._fuseConfirmationService = _fuseConfirmationService;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.configForm = this._formBuilder.group({
      title: "Remove contact",
      message: 'Are you sure you want to remove this contact permanently? <span class="font-medium">This action cannot be undone!</span>',
      icon: this._formBuilder.group({
        show: true,
        name: "heroicons_outline:exclamation-triangle",
        color: "warn"
      }),
      actions: this._formBuilder.group({
        confirm: this._formBuilder.group({
          show: true,
          label: "Remove",
          color: "warn"
        }),
        cancel: this._formBuilder.group({
          show: true,
          label: "Cancel"
        })
      }),
      dismissible: true
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Open confirmation dialog
   */
  openConfirmationDialog() {
    const dialogRef = this._fuseConfirmationService.open(this.configForm.value);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
  static {
    this.\u0275fac = function ConfirmationDialogComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmationDialogComponent)(\u0275\u0275directiveInject(UntypedFormBuilder), \u0275\u0275directiveInject(FuseConfirmationService));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmationDialogComponent, selectors: [["confirmation"]], decls: 90, vars: 35, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "max-w-3xl"], [1, "prose", "prose-sm", "max-w-3xl"], [3, "routerLink"], [1, "example-viewer"], [1, "title"], [1, "flex", "flex-col", "p-8", "pt-0"], [1, "flex", "flex-col", "items-start", 3, "formGroup"], [1, "w-full", 3, "subscriptSizing"], ["matInput", "", 3, "formControlName"], [1, "mt-6", "w-full", 3, "subscriptSizing"], [1, "mb-7", "mt-8", "w-full", "border-b"], [1, "flex", "w-full", "flex-col", 3, "formGroupName"], [3, "color", "formControlName"], [1, "mt-6", "flex", "w-full", "items-center"], [1, "w-1/2", "pr-2", 3, "subscriptSizing"], [1, "w-1/2", "pl-2", 3, "subscriptSizing"], [3, "formControlName"], [3, "value"], [1, "w-full", 3, "formGroupName"], [1, "mt-2", 3, "color", "formControlName"], [1, "mt-4", "flex", "w-full", "items-center"], [1, "mt-6", "flex", "w-full", "flex-col", 3, "formGroupName"], [1, "mt-12"], ["mat-flat-button", "", 3, "click", "color"], [1, "dark", "mt-8", "w-full", "overflow-hidden", "rounded-2xl", "p-4"], ["fuse-highlight", "", 3, "code", "lang"]], template: function ConfirmationDialogComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "User Interface");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "h2", 6);
        \u0275\u0275text(9, " Confirmation Dialog ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "p");
        \u0275\u0275text(14, " One of the repetitive and tedious jobs in Angular is to create confirmation dialogs. Since dialogs require their own components you have to either create a separate component every time you need a confirmation dialog or you have to create your own confirmation dialog system that can be configured. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "p");
        \u0275\u0275text(16, " In order for you to save time while developing with Fuse, we have created a simple yet powerful ");
        \u0275\u0275elementStart(17, "code");
        \u0275\u0275text(18, "FuseConfirmationService");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " to create customized confirmation dialogs on-the-fly. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "p");
        \u0275\u0275text(21, " Below you can configure and preview the confirmation dialog. You can use the generated configuration object within your code to have the exact same dialog. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p");
        \u0275\u0275text(23, " For more detailed information and API documentation, check the ");
        \u0275\u0275elementStart(24, "a", 10);
        \u0275\u0275text(25, "documentation");
        \u0275\u0275elementEnd();
        \u0275\u0275text(26, " page. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(27, "div", 11)(28, "div", 12)(29, "h6");
        \u0275\u0275text(30, "Configure the dialog and preview it");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(31, "div", 13)(32, "form", 14)(33, "mat-form-field", 15)(34, "mat-label");
        \u0275\u0275text(35, "Title");
        \u0275\u0275elementEnd();
        \u0275\u0275element(36, "input", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-form-field", 17)(38, "mat-label");
        \u0275\u0275text(39, "Message");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(40, "textarea", 16);
        \u0275\u0275text(41, "                            ");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(42, "div", 18);
        \u0275\u0275elementStart(43, "div", 19)(44, "mat-checkbox", 20);
        \u0275\u0275text(45, " Show Icon ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(46, "div", 21)(47, "mat-form-field", 22)(48, "mat-label");
        \u0275\u0275text(49, "Icon name");
        \u0275\u0275elementEnd();
        \u0275\u0275element(50, "input", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(51, "mat-form-field", 23)(52, "mat-label");
        \u0275\u0275text(53, "Icon color");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "mat-select", 24);
        \u0275\u0275repeaterCreate(55, ConfirmationDialogComponent_For_56_Template, 3, 4, "mat-option", 25, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(57, "div", 18);
        \u0275\u0275elementStart(58, "div", 26)(59, "div", 19)(60, "mat-checkbox", 27);
        \u0275\u0275text(61, " Show Confirm button ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(62, "div", 28)(63, "mat-form-field", 22)(64, "mat-label");
        \u0275\u0275text(65, "Confirm button label");
        \u0275\u0275elementEnd();
        \u0275\u0275element(66, "input", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "mat-form-field", 23)(68, "mat-label");
        \u0275\u0275text(69, "Confirm button color");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(70, "mat-select", 24);
        \u0275\u0275repeaterCreate(71, ConfirmationDialogComponent_For_72_Template, 3, 4, "mat-option", 25, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(73, "div", 29)(74, "mat-checkbox", 27);
        \u0275\u0275text(75, " Show Cancel button ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "div", 28)(77, "mat-form-field", 22)(78, "mat-label");
        \u0275\u0275text(79, "Cancel button label");
        \u0275\u0275elementEnd();
        \u0275\u0275element(80, "input", 16);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275element(81, "div", 18);
        \u0275\u0275elementStart(82, "mat-checkbox", 20);
        \u0275\u0275text(83, " Dismissible ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(84, "div", 30)(85, "button", 31);
        \u0275\u0275listener("click", function ConfirmationDialogComponent_Template_button_click_85_listener() {
          return ctx.openConfirmationDialog();
        });
        \u0275\u0275text(86, " Open Confirmation Dialog ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(87, "div", 32);
        \u0275\u0275element(88, "textarea", 33);
        \u0275\u0275pipe(89, "json");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(24);
        \u0275\u0275property("routerLink", "/ui/fuse-components/services/confirmation");
        \u0275\u0275advance(8);
        \u0275\u0275property("formGroup", ctx.configForm);
        \u0275\u0275advance();
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "title");
        \u0275\u0275advance();
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "message");
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroupName", "icon");
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary")("formControlName", "show");
        \u0275\u0275advance(3);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "name");
        \u0275\u0275advance();
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "color");
        \u0275\u0275advance();
        \u0275\u0275repeater(\u0275\u0275pureFunction0(33, _c0));
        \u0275\u0275advance(3);
        \u0275\u0275property("formGroupName", "actions");
        \u0275\u0275advance();
        \u0275\u0275property("formGroupName", "confirm");
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary")("formControlName", "show");
        \u0275\u0275advance(3);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "label");
        \u0275\u0275advance();
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "color");
        \u0275\u0275advance();
        \u0275\u0275repeater(\u0275\u0275pureFunction0(34, _c1));
        \u0275\u0275advance(2);
        \u0275\u0275property("formGroupName", "cancel");
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary")("formControlName", "show");
        \u0275\u0275advance(3);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("formControlName", "label");
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "primary")("formControlName", "dismissible");
        \u0275\u0275advance(3);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(3);
        \u0275\u0275property("code", \u0275\u0275pipeBind1(89, 31, ctx.configForm.value))("lang", "json");
      }
    }, dependencies: [
      RouterLink,
      FormsModule,
      \u0275NgNoValidate,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      FormGroupName,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatInputModule,
      MatInput,
      MatCheckboxModule,
      MatCheckbox,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatOptionModule,
      MatButtonModule,
      MatButton,
      FuseHighlightComponent,
      JsonPipe,
      TitleCasePipe
    ], encapsulation: 2, changeDetection: 0 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmationDialogComponent, { className: "ConfirmationDialogComponent", filePath: "src/app/modules/admin/ui/confirmation-dialog/confirmation-dialog.component.ts", lineNumber: 44 });
})();

// src/app/modules/admin/ui/confirmation-dialog/confirmation-dialog.routes.ts
var confirmation_dialog_routes_default = [
  {
    path: "",
    component: ConfirmationDialogComponent
  }
];
export {
  confirmation_dialog_routes_default as default
};
//# sourceMappingURL=chunk-NPAOHJHB.js.map
