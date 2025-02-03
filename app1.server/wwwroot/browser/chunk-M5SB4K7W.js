import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-E2V3IGPF.js";
import {
  FuseAlertComponent
} from "./chunk-OLPBZMG7.js";
import "./chunk-LWCQAMDH.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-GIY2YYWB.js";
import {
  MatError,
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
  MatButton,
  MatButtonModule
} from "./chunk-JPDBWMRG.js";
import "./chunk-5AHQJJ5Y.js";
import "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import {
  fuseAnimations
} from "./chunk-HKG3E5RP.js";
import "./chunk-WH7F4HUX.js";
import {
  AuthService
} from "./chunk-6WSYVCIZ.js";
import "./chunk-JL6CBEU5.js";
import "./chunk-M6AYR6A2.js";
import {
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
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/pages/coming-soon/classic/coming-soon.component.ts
var _c0 = ["comingSoonNgForm"];
function ComingSoonClassicComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("appearance", "outline")("showIcon", false)("type", ctx_r1.alert.type)("@shake", ctx_r1.alert.type === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert.message, " ");
  }
}
function ComingSoonClassicComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email address is required ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonClassicComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonClassicComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Notify me when you launch ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonClassicComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 13);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24)("mode", "indeterminate");
  }
}
var ComingSoonClassicComponent = class _ComingSoonClassicComponent {
  /**
   * Constructor
   */
  constructor(_authService, _formBuilder) {
    this._authService = _authService;
    this._formBuilder = _formBuilder;
    this.alert = {
      type: "success",
      message: ""
    };
    this.showAlert = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.comingSoonForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Sign in
   */
  register() {
    if (this.comingSoonForm.invalid) {
      return;
    }
    this.comingSoonForm.disable();
    this.showAlert = false;
    setTimeout(() => {
      this.comingSoonForm.enable();
      this.comingSoonNgForm.resetForm();
      this.alert = {
        type: "success",
        message: "You have been registered to the list."
      };
    }, 1e3);
  }
  static {
    this.\u0275fac = function ComingSoonClassicComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComingSoonClassicComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonClassicComponent, selectors: [["coming-soon-classic"]], viewQuery: function ComingSoonClassicComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.comingSoonNgForm = _t.first);
      }
    }, decls: 23, vars: 9, consts: [["comingSoonNgForm", "ngForm"], [1, "flex", "min-w-0", "flex-auto", "flex-col", "items-center", "sm:justify-center"], [1, "w-full", "px-4", "py-8", "sm:bg-card", "sm:w-auto", "sm:rounded-2xl", "sm:p-12", "sm:shadow"], [1, "mx-auto", "w-full", "max-w-80", "sm:mx-0", "sm:w-80"], [1, "w-12"], ["src", "images/logo/logo.svg"], [1, "mt-8", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "mt-0.5"], [1, "mt-8", 3, "appearance", "showIcon", "type"], [1, "mt-8", 3, "formGroup"], [1, "w-full"], ["id", "email", "matInput", "", 3, "formControlName"], ["mat-flat-button", "", "type", "button", 1, "fuse-mat-button-large", "mt-3", "w-full", 3, "click", "color", "disabled"], [3, "diameter", "mode"], [1, "text-secondary", "mt-8", "text-md", "font-medium"]], template: function ComingSoonClassicComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
        \u0275\u0275element(4, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 6);
        \u0275\u0275text(6, " Almost there! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275text(8, " Do you want to be notified when we are ready? Register below so we can notify you about the launch! ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ComingSoonClassicComponent_Conditional_9_Template, 2, 5, "fuse-alert", 8);
        \u0275\u0275elementStart(10, "form", 9, 0)(12, "mat-form-field", 10)(13, "mat-label");
        \u0275\u0275text(14, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 11);
        \u0275\u0275template(16, ComingSoonClassicComponent_Conditional_16_Template, 2, 0, "mat-error")(17, ComingSoonClassicComponent_Conditional_17_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 12);
        \u0275\u0275listener("click", function ComingSoonClassicComponent_Template_button_click_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.register());
        });
        \u0275\u0275template(19, ComingSoonClassicComponent_Conditional_19_Template, 2, 0, "span")(20, ComingSoonClassicComponent_Conditional_20_Template, 1, 2, "mat-progress-spinner", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 14);
        \u0275\u0275text(22, " This isn't a newsletter subscription. We will send one email to you when we launch and then you will be removed from the list. ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.showAlert ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.comingSoonForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("formControlName", "email");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("required") ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("email") ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary")("disabled", ctx.comingSoonForm.disabled);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.comingSoonForm.disabled ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.disabled ? 20 : -1);
      }
    }, dependencies: [
      FuseAlertComponent,
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
      MatError,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], encapsulation: 2, data: { animation: fuseAnimations } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonClassicComponent, { className: "ComingSoonClassicComponent", filePath: "src/app/modules/admin/pages/coming-soon/classic/coming-soon.component.ts", lineNumber: 33 });
})();

// src/app/modules/admin/pages/coming-soon/fullscreen-reversed/coming-soon.component.ts
var _c02 = ["comingSoonNgForm"];
function ComingSoonFullscreenReversedComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("appearance", "outline")("showIcon", false)("type", ctx_r1.alert.type)("@shake", ctx_r1.alert.type === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert.message, " ");
  }
}
function ComingSoonFullscreenReversedComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email address is required ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonFullscreenReversedComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonFullscreenReversedComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Notify me when you launch ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonFullscreenReversedComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 32);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24)("mode", "indeterminate");
  }
}
var ComingSoonFullscreenReversedComponent = class _ComingSoonFullscreenReversedComponent {
  /**
   * Constructor
   */
  constructor(_authService, _formBuilder) {
    this._authService = _authService;
    this._formBuilder = _formBuilder;
    this.alert = {
      type: "success",
      message: ""
    };
    this.showAlert = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.comingSoonForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Sign in
   */
  register() {
    if (this.comingSoonForm.invalid) {
      return;
    }
    this.comingSoonForm.disable();
    this.showAlert = false;
    setTimeout(() => {
      this.comingSoonForm.enable();
      this.comingSoonNgForm.resetForm();
      this.alert = {
        type: "success",
        message: "You have been registered to the list."
      };
    }, 1e3);
  }
  static {
    this.\u0275fac = function ComingSoonFullscreenReversedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComingSoonFullscreenReversedComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonFullscreenReversedComponent, selectors: [["coming-soon-classic"]], viewQuery: function ComingSoonFullscreenReversedComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.comingSoonNgForm = _t.first);
      }
    }, decls: 49, vars: 9, consts: [["comingSoonNgForm", "ngForm"], [1, "flex", "min-w-0", "flex-auto", "flex-col", "items-center", "sm:flex-row", "sm:justify-center", "md:items-start", "md:justify-start"], [1, "relative", "hidden", "h-full", "flex-auto", "items-center", "justify-center", "overflow-hidden", "bg-gray-800", "p-16", "dark:border-r", "md:flex", "lg:px-28"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], ["viewBox", "0 0 220 192", "width", "220", "height", "192", "fill", "none", 1, "absolute", "-top-16", "-right-16", "text-gray-700"], ["id", "837c3e70-6c3a-44e6-8854-cc48c737b659", "x", "0", "y", "0", "width", "20", "height", "20", "patternUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "4", "height", "4", "fill", "currentColor"], ["width", "220", "height", "192", "fill", "url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"], [1, "relative", "z-10", "w-full", "max-w-2xl"], [1, "text-7xl", "font-bold", "leading-none", "text-gray-100"], [1, "mt-6", "text-lg", "leading-6", "tracking-tight", "text-gray-400"], [1, "mt-8", "flex", "items-center"], [1, "flex", "flex-0", "items-center", "-space-x-1.5"], ["src", "images/avatars/female-18.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/female-11.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/male-09.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/male-16.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], [1, "ml-4", "font-medium", "tracking-tight", "text-gray-400"], [1, "w-full", "px-4", "py-8", "sm:bg-card", "sm:w-auto", "sm:rounded-2xl", "sm:p-12", "sm:shadow", "md:flex", "md:h-full", "md:justify-end", "md:rounded-none", "md:p-16", "md:pt-24", "md:shadow-none"], [1, "mx-auto", "w-full", "max-w-80", "sm:mx-0", "sm:w-80"], [1, "w-12"], ["src", "images/logo/logo.svg"], [1, "mt-8", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "mt-0.5"], [1, "mt-8", 3, "appearance", "showIcon", "type"], [1, "mt-8", 3, "formGroup"], [1, "w-full"], ["id", "email", "matInput", "", 3, "formControlName"], ["mat-flat-button", "", "type", "button", 1, "fuse-mat-button-large", "mt-3", "w-full", 3, "click", "color", "disabled"], [3, "diameter", "mode"], [1, "text-secondary", "mt-8", "text-md", "font-medium"]], template: function ComingSoonFullscreenReversedComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 3)(3, "g", 4);
        \u0275\u0275element(4, "circle", 5)(5, "circle", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "svg", 7)(7, "defs")(8, "pattern", 8);
        \u0275\u0275element(9, "rect", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "rect", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "div");
        \u0275\u0275text(14, "Welcome to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div");
        \u0275\u0275text(16, "our community");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 13);
        \u0275\u0275text(18, " Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
        \u0275\u0275element(21, "img", 16)(22, "img", 17)(23, "img", 18)(24, "img", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 20);
        \u0275\u0275text(26, " More than 17k people joined us, it's your turn ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 21)(28, "div", 22)(29, "div", 23);
        \u0275\u0275element(30, "img", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 25);
        \u0275\u0275text(32, " Almost there! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 26);
        \u0275\u0275text(34, " Do you want to be notified when we are ready? Register below so we can notify you about the launch! ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, ComingSoonFullscreenReversedComponent_Conditional_35_Template, 2, 5, "fuse-alert", 27);
        \u0275\u0275elementStart(36, "form", 28, 0)(38, "mat-form-field", 29)(39, "mat-label");
        \u0275\u0275text(40, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "input", 30);
        \u0275\u0275template(42, ComingSoonFullscreenReversedComponent_Conditional_42_Template, 2, 0, "mat-error")(43, ComingSoonFullscreenReversedComponent_Conditional_43_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 31);
        \u0275\u0275listener("click", function ComingSoonFullscreenReversedComponent_Template_button_click_44_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.register());
        });
        \u0275\u0275template(45, ComingSoonFullscreenReversedComponent_Conditional_45_Template, 2, 0, "span")(46, ComingSoonFullscreenReversedComponent_Conditional_46_Template, 1, 2, "mat-progress-spinner", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 33);
        \u0275\u0275text(48, " This isn't a newsletter subscription. We will send one email to you when we launch and then you will be removed from the list. ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(35);
        \u0275\u0275conditional(ctx.showAlert ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.comingSoonForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("formControlName", "email");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("required") ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("email") ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary")("disabled", ctx.comingSoonForm.disabled);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.comingSoonForm.disabled ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.disabled ? 46 : -1);
      }
    }, dependencies: [
      FuseAlertComponent,
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
      MatError,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], encapsulation: 2, data: { animation: fuseAnimations } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonFullscreenReversedComponent, { className: "ComingSoonFullscreenReversedComponent", filePath: "src/app/modules/admin/pages/coming-soon/fullscreen-reversed/coming-soon.component.ts", lineNumber: 33 });
})();

// src/app/modules/admin/pages/coming-soon/fullscreen/coming-soon.component.ts
var _c03 = ["comingSoonNgForm"];
function ComingSoonFullscreenComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("appearance", "outline")("showIcon", false)("type", ctx_r1.alert.type)("@shake", ctx_r1.alert.type === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert.message, " ");
  }
}
function ComingSoonFullscreenComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email address is required ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonFullscreenComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonFullscreenComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Notify me when you launch ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonFullscreenComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 13);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24)("mode", "indeterminate");
  }
}
var ComingSoonFullscreenComponent = class _ComingSoonFullscreenComponent {
  /**
   * Constructor
   */
  constructor(_authService, _formBuilder) {
    this._authService = _authService;
    this._formBuilder = _formBuilder;
    this.alert = {
      type: "success",
      message: ""
    };
    this.showAlert = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.comingSoonForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Sign in
   */
  register() {
    if (this.comingSoonForm.invalid) {
      return;
    }
    this.comingSoonForm.disable();
    this.showAlert = false;
    setTimeout(() => {
      this.comingSoonForm.enable();
      this.comingSoonNgForm.resetForm();
      this.alert = {
        type: "success",
        message: "You have been registered to the list."
      };
    }, 1e3);
  }
  static {
    this.\u0275fac = function ComingSoonFullscreenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComingSoonFullscreenComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonFullscreenComponent, selectors: [["coming-soon-classic"]], viewQuery: function ComingSoonFullscreenComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.comingSoonNgForm = _t.first);
      }
    }, decls: 49, vars: 9, consts: [["comingSoonNgForm", "ngForm"], [1, "flex", "min-w-0", "flex-auto", "flex-col", "items-center", "sm:flex-row", "sm:justify-center", "md:items-start", "md:justify-start"], [1, "w-full", "px-4", "py-8", "sm:bg-card", "sm:w-auto", "sm:rounded-2xl", "sm:p-12", "sm:shadow", "md:flex", "md:h-full", "md:justify-end", "md:rounded-none", "md:p-16", "md:pt-24", "md:shadow-none"], [1, "mx-auto", "w-full", "max-w-80", "sm:mx-0", "sm:w-80"], [1, "w-12"], ["src", "images/logo/logo.svg"], [1, "mt-8", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "mt-0.5"], [1, "mt-8", 3, "appearance", "showIcon", "type"], [1, "mt-8", 3, "formGroup"], [1, "w-full"], ["id", "email", "matInput", "", 3, "formControlName"], ["mat-flat-button", "", "type", "button", 1, "fuse-mat-button-large", "mt-3", "w-full", 3, "click", "color", "disabled"], [3, "diameter", "mode"], [1, "text-secondary", "mt-8", "text-md", "font-medium"], [1, "relative", "hidden", "h-full", "flex-auto", "items-center", "justify-center", "overflow-hidden", "bg-gray-800", "p-16", "dark:border-l", "md:flex", "lg:px-28"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], ["viewBox", "0 0 220 192", "width", "220", "height", "192", "fill", "none", 1, "absolute", "-top-16", "-right-16", "text-gray-700"], ["id", "837c3e70-6c3a-44e6-8854-cc48c737b659", "x", "0", "y", "0", "width", "20", "height", "20", "patternUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "4", "height", "4", "fill", "currentColor"], ["width", "220", "height", "192", "fill", "url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"], [1, "relative", "z-10", "w-full", "max-w-2xl"], [1, "text-7xl", "font-bold", "leading-none", "text-gray-100"], [1, "mt-6", "text-lg", "leading-6", "tracking-tight", "text-gray-400"], [1, "mt-8", "flex", "items-center"], [1, "flex", "flex-0", "items-center", "-space-x-1.5"], ["src", "images/avatars/female-18.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/female-11.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/male-09.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/male-16.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], [1, "ml-4", "font-medium", "tracking-tight", "text-gray-400"]], template: function ComingSoonFullscreenComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
        \u0275\u0275element(4, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 6);
        \u0275\u0275text(6, " Almost there! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275text(8, " Do you want to be notified when we are ready? Register below so we can notify you about the launch! ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ComingSoonFullscreenComponent_Conditional_9_Template, 2, 5, "fuse-alert", 8);
        \u0275\u0275elementStart(10, "form", 9, 0)(12, "mat-form-field", 10)(13, "mat-label");
        \u0275\u0275text(14, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 11);
        \u0275\u0275template(16, ComingSoonFullscreenComponent_Conditional_16_Template, 2, 0, "mat-error")(17, ComingSoonFullscreenComponent_Conditional_17_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 12);
        \u0275\u0275listener("click", function ComingSoonFullscreenComponent_Template_button_click_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.register());
        });
        \u0275\u0275template(19, ComingSoonFullscreenComponent_Conditional_19_Template, 2, 0, "span")(20, ComingSoonFullscreenComponent_Conditional_20_Template, 1, 2, "mat-progress-spinner", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 14);
        \u0275\u0275text(22, " This isn't a newsletter subscription. We will send one email to you when we launch and then you will be removed from the list. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 16)(25, "g", 17);
        \u0275\u0275element(26, "circle", 18)(27, "circle", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "svg", 20)(29, "defs")(30, "pattern", 21);
        \u0275\u0275element(31, "rect", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(32, "rect", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(33, "div", 24)(34, "div", 25)(35, "div");
        \u0275\u0275text(36, "Welcome to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div");
        \u0275\u0275text(38, "our community");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 26);
        \u0275\u0275text(40, " Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 27)(42, "div", 28);
        \u0275\u0275element(43, "img", 29)(44, "img", 30)(45, "img", 31)(46, "img", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 33);
        \u0275\u0275text(48, " More than 17k people joined us, it's your turn ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.showAlert ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.comingSoonForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("formControlName", "email");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("required") ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("email") ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary")("disabled", ctx.comingSoonForm.disabled);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.comingSoonForm.disabled ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.disabled ? 20 : -1);
      }
    }, dependencies: [
      FuseAlertComponent,
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
      MatError,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], encapsulation: 2, data: { animation: fuseAnimations } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonFullscreenComponent, { className: "ComingSoonFullscreenComponent", filePath: "src/app/modules/admin/pages/coming-soon/fullscreen/coming-soon.component.ts", lineNumber: 33 });
})();

// src/app/modules/admin/pages/coming-soon/modern-reversed/coming-soon.component.ts
var _c04 = ["comingSoonNgForm"];
function ComingSoonModernReversedComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("appearance", "outline")("showIcon", false)("type", ctx_r1.alert.type)("@shake", ctx_r1.alert.type === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert.message, " ");
  }
}
function ComingSoonModernReversedComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email address is required ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonModernReversedComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonModernReversedComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Notify me when you launch ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonModernReversedComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 33);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24)("mode", "indeterminate");
  }
}
var ComingSoonModernReversedComponent = class _ComingSoonModernReversedComponent {
  /**
   * Constructor
   */
  constructor(_authService, _formBuilder) {
    this._authService = _authService;
    this._formBuilder = _formBuilder;
    this.alert = {
      type: "success",
      message: ""
    };
    this.showAlert = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.comingSoonForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Sign in
   */
  register() {
    if (this.comingSoonForm.invalid) {
      return;
    }
    this.comingSoonForm.disable();
    this.showAlert = false;
    setTimeout(() => {
      this.comingSoonForm.enable();
      this.comingSoonNgForm.resetForm();
      this.alert = {
        type: "success",
        message: "You have been registered to the list."
      };
    }, 1e3);
  }
  static {
    this.\u0275fac = function ComingSoonModernReversedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComingSoonModernReversedComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonModernReversedComponent, selectors: [["coming-soon-classic"]], viewQuery: function ComingSoonModernReversedComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c04, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.comingSoonNgForm = _t.first);
      }
    }, decls: 50, vars: 9, consts: [["comingSoonNgForm", "ngForm"], [1, "flex", "min-w-0", "flex-auto", "flex-col", "items-center", "sm:justify-center", "md:p-8"], [1, "flex", "overflow-hidden", "sm:bg-card", "sm:rounded-2xl", "sm:shadow", "md:w-full", "md:max-w-6xl"], [1, "relative", "hidden", "h-full", "flex-auto", "items-center", "justify-center", "overflow-hidden", "bg-gray-800", "p-16", "dark:border-r", "md:flex", "lg:px-28"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], ["viewBox", "0 0 220 192", "width", "220", "height", "192", "fill", "none", 1, "absolute", "-top-16", "-right-16", "text-gray-700"], ["id", "837c3e70-6c3a-44e6-8854-cc48c737b659", "x", "0", "y", "0", "width", "20", "height", "20", "patternUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "4", "height", "4", "fill", "currentColor"], ["width", "220", "height", "192", "fill", "url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"], [1, "relative", "z-10", "w-full", "max-w-2xl"], [1, "text-7xl", "font-bold", "leading-none", "text-gray-100"], [1, "mt-6", "text-lg", "leading-6", "tracking-tight", "text-gray-400"], [1, "mt-8", "flex", "items-center"], [1, "flex", "flex-0", "items-center", "-space-x-1.5"], ["src", "images/avatars/female-18.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/female-11.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/male-09.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/male-16.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], [1, "ml-4", "font-medium", "tracking-tight", "text-gray-400"], [1, "w-full", "px-4", "py-8", "sm:w-auto", "sm:p-12", "md:p-16"], [1, "mx-auto", "w-full", "max-w-80", "sm:mx-0", "sm:w-80"], [1, "w-12"], ["src", "images/logo/logo.svg"], [1, "mt-8", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "mt-0.5"], [1, "-mb-4", "mt-8", 3, "appearance", "showIcon", "type"], [1, "mt-8", 3, "formGroup"], [1, "w-full"], ["id", "email", "matInput", "", 3, "formControlName"], ["mat-flat-button", "", "type", "button", 1, "fuse-mat-button-large", "mt-3", "w-full", 3, "click", "color", "disabled"], [3, "diameter", "mode"], [1, "text-secondary", "mt-8", "text-md", "font-medium"]], template: function ComingSoonModernReversedComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(3, "svg", 4)(4, "g", 5);
        \u0275\u0275element(5, "circle", 6)(6, "circle", 7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(7, "svg", 8)(8, "defs")(9, "pattern", 9);
        \u0275\u0275element(10, "rect", 10);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(11, "rect", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "div");
        \u0275\u0275text(15, "Welcome to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div");
        \u0275\u0275text(17, "our community");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(18, "div", 14);
        \u0275\u0275text(19, " Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 15)(21, "div", 16);
        \u0275\u0275element(22, "img", 17)(23, "img", 18)(24, "img", 19)(25, "img", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 21);
        \u0275\u0275text(27, " More than 17k people joined us, it's your turn ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(28, "div", 22)(29, "div", 23)(30, "div", 24);
        \u0275\u0275element(31, "img", 25);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 26);
        \u0275\u0275text(33, " Almost there! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(34, "div", 27);
        \u0275\u0275text(35, " Do you want to be notified when we are ready? Register below so we can notify you about the launch! ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(36, ComingSoonModernReversedComponent_Conditional_36_Template, 2, 5, "fuse-alert", 28);
        \u0275\u0275elementStart(37, "form", 29, 0)(39, "mat-form-field", 30)(40, "mat-label");
        \u0275\u0275text(41, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(42, "input", 31);
        \u0275\u0275template(43, ComingSoonModernReversedComponent_Conditional_43_Template, 2, 0, "mat-error")(44, ComingSoonModernReversedComponent_Conditional_44_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "button", 32);
        \u0275\u0275listener("click", function ComingSoonModernReversedComponent_Template_button_click_45_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.register());
        });
        \u0275\u0275template(46, ComingSoonModernReversedComponent_Conditional_46_Template, 2, 0, "span")(47, ComingSoonModernReversedComponent_Conditional_47_Template, 1, 2, "mat-progress-spinner", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 34);
        \u0275\u0275text(49, " This isn't a newsletter subscription. We will send one email to you when we launch and then you will be removed from the list. ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(36);
        \u0275\u0275conditional(ctx.showAlert ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.comingSoonForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("formControlName", "email");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("required") ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("email") ? 44 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary")("disabled", ctx.comingSoonForm.disabled);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.comingSoonForm.disabled ? 46 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.disabled ? 47 : -1);
      }
    }, dependencies: [
      FuseAlertComponent,
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
      MatError,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], encapsulation: 2, data: { animation: fuseAnimations } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonModernReversedComponent, { className: "ComingSoonModernReversedComponent", filePath: "src/app/modules/admin/pages/coming-soon/modern-reversed/coming-soon.component.ts", lineNumber: 33 });
})();

// src/app/modules/admin/pages/coming-soon/modern/coming-soon.component.ts
var _c05 = ["comingSoonNgForm"];
function ComingSoonModernComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("appearance", "outline")("showIcon", false)("type", ctx_r1.alert.type)("@shake", ctx_r1.alert.type === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert.message, " ");
  }
}
function ComingSoonModernComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email address is required ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonModernComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonModernComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Notify me when you launch ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonModernComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 14);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24)("mode", "indeterminate");
  }
}
var ComingSoonModernComponent = class _ComingSoonModernComponent {
  /**
   * Constructor
   */
  constructor(_authService, _formBuilder) {
    this._authService = _authService;
    this._formBuilder = _formBuilder;
    this.alert = {
      type: "success",
      message: ""
    };
    this.showAlert = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.comingSoonForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Sign in
   */
  register() {
    if (this.comingSoonForm.invalid) {
      return;
    }
    this.comingSoonForm.disable();
    this.showAlert = false;
    setTimeout(() => {
      this.comingSoonForm.enable();
      this.comingSoonNgForm.resetForm();
      this.alert = {
        type: "success",
        message: "You have been registered to the list."
      };
    }, 1e3);
  }
  static {
    this.\u0275fac = function ComingSoonModernComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComingSoonModernComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonModernComponent, selectors: [["coming-soon-classic"]], viewQuery: function ComingSoonModernComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c05, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.comingSoonNgForm = _t.first);
      }
    }, decls: 50, vars: 9, consts: [["comingSoonNgForm", "ngForm"], [1, "flex", "min-w-0", "flex-auto", "flex-col", "items-center", "sm:justify-center", "md:p-8"], [1, "flex", "overflow-hidden", "sm:bg-card", "sm:rounded-2xl", "sm:shadow", "md:w-full", "md:max-w-6xl"], [1, "w-full", "px-4", "py-8", "sm:w-auto", "sm:p-12", "md:p-16"], [1, "mx-auto", "w-full", "max-w-80", "sm:mx-0", "sm:w-80"], [1, "w-12"], ["src", "images/logo/logo.svg"], [1, "mt-8", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "mt-0.5"], [1, "-mb-4", "mt-8", 3, "appearance", "showIcon", "type"], [1, "mt-8", 3, "formGroup"], [1, "w-full"], ["id", "email", "matInput", "", 3, "formControlName"], ["mat-flat-button", "", "type", "button", 1, "fuse-mat-button-large", "mt-3", "w-full", 3, "click", "color", "disabled"], [3, "diameter", "mode"], [1, "text-secondary", "mt-8", "text-md", "font-medium"], [1, "relative", "hidden", "h-full", "flex-auto", "items-center", "justify-center", "overflow-hidden", "bg-gray-800", "p-16", "dark:border-l", "md:flex", "lg:px-28"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], ["viewBox", "0 0 220 192", "width", "220", "height", "192", "fill", "none", 1, "absolute", "-top-16", "-right-16", "text-gray-700"], ["id", "837c3e70-6c3a-44e6-8854-cc48c737b659", "x", "0", "y", "0", "width", "20", "height", "20", "patternUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "4", "height", "4", "fill", "currentColor"], ["width", "220", "height", "192", "fill", "url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"], [1, "relative", "z-10", "w-full", "max-w-2xl"], [1, "text-7xl", "font-bold", "leading-none", "text-gray-100"], [1, "mt-6", "text-lg", "leading-6", "tracking-tight", "text-gray-400"], [1, "mt-8", "flex", "items-center"], [1, "flex", "flex-0", "items-center", "-space-x-1.5"], ["src", "images/avatars/female-18.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/female-11.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/male-09.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/male-16.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], [1, "ml-4", "font-medium", "tracking-tight", "text-gray-400"]], template: function ComingSoonModernComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4)(4, "div", 5);
        \u0275\u0275element(5, "img", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 7);
        \u0275\u0275text(7, " Almost there! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 8);
        \u0275\u0275text(9, " Do you want to be notified when we are ready? Register below so we can notify you about the launch! ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(10, ComingSoonModernComponent_Conditional_10_Template, 2, 5, "fuse-alert", 9);
        \u0275\u0275elementStart(11, "form", 10, 0)(13, "mat-form-field", 11)(14, "mat-label");
        \u0275\u0275text(15, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(16, "input", 12);
        \u0275\u0275template(17, ComingSoonModernComponent_Conditional_17_Template, 2, 0, "mat-error")(18, ComingSoonModernComponent_Conditional_18_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "button", 13);
        \u0275\u0275listener("click", function ComingSoonModernComponent_Template_button_click_19_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.register());
        });
        \u0275\u0275template(20, ComingSoonModernComponent_Conditional_20_Template, 2, 0, "span")(21, ComingSoonModernComponent_Conditional_21_Template, 1, 2, "mat-progress-spinner", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div", 15);
        \u0275\u0275text(23, " This isn't a newsletter subscription. We will send one email to you when we launch and then you will be removed from the list. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(24, "div", 16);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(25, "svg", 17)(26, "g", 18);
        \u0275\u0275element(27, "circle", 19)(28, "circle", 20);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "svg", 21)(30, "defs")(31, "pattern", 22);
        \u0275\u0275element(32, "rect", 23);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(33, "rect", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(34, "div", 25)(35, "div", 26)(36, "div");
        \u0275\u0275text(37, "Welcome to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "div");
        \u0275\u0275text(39, "our community");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(40, "div", 27);
        \u0275\u0275text(41, " Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "div", 28)(43, "div", 29);
        \u0275\u0275element(44, "img", 30)(45, "img", 31)(46, "img", 32)(47, "img", 33);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(48, "div", 34);
        \u0275\u0275text(49, " More than 17k people joined us, it's your turn ");
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.showAlert ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.comingSoonForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("formControlName", "email");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("required") ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("email") ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary")("disabled", ctx.comingSoonForm.disabled);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.comingSoonForm.disabled ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.disabled ? 21 : -1);
      }
    }, dependencies: [
      FuseAlertComponent,
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
      MatError,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], encapsulation: 2, data: { animation: fuseAnimations } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonModernComponent, { className: "ComingSoonModernComponent", filePath: "src/app/modules/admin/pages/coming-soon/modern/coming-soon.component.ts", lineNumber: 33 });
})();

// src/app/modules/admin/pages/coming-soon/split-screen-reversed/coming-soon.component.ts
var _c06 = ["comingSoonNgForm"];
function ComingSoonSplitScreenReversedComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("appearance", "outline")("showIcon", false)("type", ctx_r1.alert.type)("@shake", ctx_r1.alert.type === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert.message, " ");
  }
}
function ComingSoonSplitScreenReversedComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email address is required ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonSplitScreenReversedComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonSplitScreenReversedComponent_Conditional_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Notify me when you launch ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonSplitScreenReversedComponent_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 32);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24)("mode", "indeterminate");
  }
}
var ComingSoonSplitScreenReversedComponent = class _ComingSoonSplitScreenReversedComponent {
  /**
   * Constructor
   */
  constructor(_authService, _formBuilder) {
    this._authService = _authService;
    this._formBuilder = _formBuilder;
    this.alert = {
      type: "success",
      message: ""
    };
    this.showAlert = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.comingSoonForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Sign in
   */
  register() {
    if (this.comingSoonForm.invalid) {
      return;
    }
    this.comingSoonForm.disable();
    this.showAlert = false;
    setTimeout(() => {
      this.comingSoonForm.enable();
      this.comingSoonNgForm.resetForm();
      this.alert = {
        type: "success",
        message: "You have been registered to the list."
      };
    }, 1e3);
  }
  static {
    this.\u0275fac = function ComingSoonSplitScreenReversedComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComingSoonSplitScreenReversedComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonSplitScreenReversedComponent, selectors: [["coming-soon-classic"]], viewQuery: function ComingSoonSplitScreenReversedComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.comingSoonNgForm = _t.first);
      }
    }, decls: 49, vars: 9, consts: [["comingSoonNgForm", "ngForm"], [1, "flex", "min-w-0", "flex-auto", "flex-col", "items-center", "sm:flex-row", "sm:justify-center", "md:items-start", "md:justify-start"], [1, "relative", "hidden", "h-full", "w-1/2", "flex-auto", "items-center", "justify-center", "overflow-hidden", "bg-gray-800", "p-16", "dark:border-r", "md:flex", "lg:px-28"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], ["viewBox", "0 0 220 192", "width", "220", "height", "192", "fill", "none", 1, "absolute", "-top-16", "-right-16", "text-gray-700"], ["id", "837c3e70-6c3a-44e6-8854-cc48c737b659", "x", "0", "y", "0", "width", "20", "height", "20", "patternUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "4", "height", "4", "fill", "currentColor"], ["width", "220", "height", "192", "fill", "url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"], [1, "relative", "z-10", "w-full", "max-w-2xl"], [1, "text-7xl", "font-bold", "leading-none", "text-gray-100"], [1, "mt-6", "text-lg", "leading-6", "tracking-tight", "text-gray-400"], [1, "mt-8", "flex", "items-center"], [1, "flex", "flex-0", "items-center", "-space-x-1.5"], ["src", "images/avatars/female-18.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/female-11.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/male-09.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/male-16.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], [1, "ml-4", "font-medium", "tracking-tight", "text-gray-400"], [1, "w-full", "px-4", "py-8", "sm:bg-card", "sm:w-auto", "sm:rounded-2xl", "sm:p-12", "sm:shadow", "md:flex", "md:h-full", "md:w-1/2", "md:items-center", "md:justify-start", "md:rounded-none", "md:p-16", "md:shadow-none"], [1, "mx-auto", "w-full", "max-w-80", "sm:mx-0", "sm:w-80"], [1, "w-12"], ["src", "images/logo/logo.svg"], [1, "mt-8", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "mt-0.5"], [1, "mt-8", 3, "appearance", "showIcon", "type"], [1, "mt-8", 3, "formGroup"], [1, "w-full"], ["id", "email", "matInput", "", 3, "formControlName"], ["mat-flat-button", "", "type", "button", 1, "fuse-mat-button-large", "mt-3", "w-full", 3, "click", "color", "disabled"], [3, "diameter", "mode"], [1, "text-secondary", "mt-8", "text-md", "font-medium"]], template: function ComingSoonSplitScreenReversedComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(2, "svg", 3)(3, "g", 4);
        \u0275\u0275element(4, "circle", 5)(5, "circle", 6);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "svg", 7)(7, "defs")(8, "pattern", 8);
        \u0275\u0275element(9, "rect", 9);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "rect", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(11, "div", 11)(12, "div", 12)(13, "div");
        \u0275\u0275text(14, "Welcome to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div");
        \u0275\u0275text(16, "our community");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(17, "div", 13);
        \u0275\u0275text(18, " Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
        \u0275\u0275element(21, "img", 16)(22, "img", 17)(23, "img", 18)(24, "img", 19);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "div", 20);
        \u0275\u0275text(26, " More than 17k people joined us, it's your turn ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(27, "div", 21)(28, "div", 22)(29, "div", 23);
        \u0275\u0275element(30, "img", 24);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "div", 25);
        \u0275\u0275text(32, " Almost there! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 26);
        \u0275\u0275text(34, " Do you want to be notified when we are ready? Register below so we can notify you about the launch! ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(35, ComingSoonSplitScreenReversedComponent_Conditional_35_Template, 2, 5, "fuse-alert", 27);
        \u0275\u0275elementStart(36, "form", 28, 0)(38, "mat-form-field", 29)(39, "mat-label");
        \u0275\u0275text(40, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(41, "input", 30);
        \u0275\u0275template(42, ComingSoonSplitScreenReversedComponent_Conditional_42_Template, 2, 0, "mat-error")(43, ComingSoonSplitScreenReversedComponent_Conditional_43_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(44, "button", 31);
        \u0275\u0275listener("click", function ComingSoonSplitScreenReversedComponent_Template_button_click_44_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.register());
        });
        \u0275\u0275template(45, ComingSoonSplitScreenReversedComponent_Conditional_45_Template, 2, 0, "span")(46, ComingSoonSplitScreenReversedComponent_Conditional_46_Template, 1, 2, "mat-progress-spinner", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 33);
        \u0275\u0275text(48, " This isn't a newsletter subscription. We will send one email to you when we launch and then you will be removed from the list. ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(35);
        \u0275\u0275conditional(ctx.showAlert ? 35 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.comingSoonForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("formControlName", "email");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("required") ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("email") ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary")("disabled", ctx.comingSoonForm.disabled);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.comingSoonForm.disabled ? 45 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.disabled ? 46 : -1);
      }
    }, dependencies: [
      FuseAlertComponent,
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
      MatError,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], encapsulation: 2, data: { animation: fuseAnimations } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonSplitScreenReversedComponent, { className: "ComingSoonSplitScreenReversedComponent", filePath: "src/app/modules/admin/pages/coming-soon/split-screen-reversed/coming-soon.component.ts", lineNumber: 33 });
})();

// src/app/modules/admin/pages/coming-soon/split-screen/coming-soon.component.ts
var _c07 = ["comingSoonNgForm"];
function ComingSoonSplitScreenComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "fuse-alert", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("appearance", "outline")("showIcon", false)("type", ctx_r1.alert.type)("@shake", ctx_r1.alert.type === "error");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert.message, " ");
  }
}
function ComingSoonSplitScreenComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Email address is required ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonSplitScreenComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Please enter a valid email address ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonSplitScreenComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " Notify me when you launch ");
    \u0275\u0275elementEnd();
  }
}
function ComingSoonSplitScreenComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-spinner", 13);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 24)("mode", "indeterminate");
  }
}
var ComingSoonSplitScreenComponent = class _ComingSoonSplitScreenComponent {
  /**
   * Constructor
   */
  constructor(_authService, _formBuilder) {
    this._authService = _authService;
    this._formBuilder = _formBuilder;
    this.alert = {
      type: "success",
      message: ""
    };
    this.showAlert = false;
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------
  /**
   * On init
   */
  ngOnInit() {
    this.comingSoonForm = this._formBuilder.group({
      email: ["", [Validators.required, Validators.email]]
    });
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Sign in
   */
  register() {
    if (this.comingSoonForm.invalid) {
      return;
    }
    this.comingSoonForm.disable();
    this.showAlert = false;
    setTimeout(() => {
      this.comingSoonForm.enable();
      this.comingSoonNgForm.resetForm();
      this.alert = {
        type: "success",
        message: "You have been registered to the list."
      };
    }, 1e3);
  }
  static {
    this.\u0275fac = function ComingSoonSplitScreenComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ComingSoonSplitScreenComponent)(\u0275\u0275directiveInject(AuthService), \u0275\u0275directiveInject(UntypedFormBuilder));
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ComingSoonSplitScreenComponent, selectors: [["coming-soon-classic"]], viewQuery: function ComingSoonSplitScreenComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c07, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.comingSoonNgForm = _t.first);
      }
    }, decls: 49, vars: 9, consts: [["comingSoonNgForm", "ngForm"], [1, "flex", "min-w-0", "flex-auto", "flex-col", "items-center", "sm:flex-row", "sm:justify-center", "md:items-start", "md:justify-start"], [1, "w-full", "px-4", "py-8", "sm:bg-card", "sm:w-auto", "sm:rounded-2xl", "sm:p-12", "sm:shadow", "md:flex", "md:h-full", "md:w-1/2", "md:items-center", "md:justify-end", "md:rounded-none", "md:p-16", "md:shadow-none"], [1, "mx-auto", "w-full", "max-w-80", "sm:mx-0", "sm:w-80"], [1, "w-12"], ["src", "images/logo/logo.svg"], [1, "mt-8", "text-4xl", "font-extrabold", "leading-tight", "tracking-tight"], [1, "mt-0.5"], [1, "mt-8", 3, "appearance", "showIcon", "type"], [1, "mt-8", 3, "formGroup"], [1, "w-full"], ["id", "email", "matInput", "", 3, "formControlName"], ["mat-flat-button", "", "type", "button", 1, "fuse-mat-button-large", "mt-3", "w-full", 3, "click", "color", "disabled"], [3, "diameter", "mode"], [1, "text-secondary", "mt-8", "text-md", "font-medium"], [1, "relative", "hidden", "h-full", "w-1/2", "flex-auto", "items-center", "justify-center", "overflow-hidden", "bg-gray-800", "p-16", "dark:border-l", "md:flex", "lg:px-28"], ["viewBox", "0 0 960 540", "width", "100%", "height", "100%", "preserveAspectRatio", "xMidYMax slice", "xmlns", "http://www.w3.org/2000/svg", 1, "absolute", "inset-0", "pointer-events-none"], ["fill", "none", "stroke", "currentColor", "stroke-width", "100", 1, "text-gray-700", "opacity-25"], ["r", "234", "cx", "196", "cy", "23"], ["r", "234", "cx", "790", "cy", "491"], ["viewBox", "0 0 220 192", "width", "220", "height", "192", "fill", "none", 1, "absolute", "-top-16", "-right-16", "text-gray-700"], ["id", "837c3e70-6c3a-44e6-8854-cc48c737b659", "x", "0", "y", "0", "width", "20", "height", "20", "patternUnits", "userSpaceOnUse"], ["x", "0", "y", "0", "width", "4", "height", "4", "fill", "currentColor"], ["width", "220", "height", "192", "fill", "url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"], [1, "relative", "z-10", "w-full", "max-w-2xl"], [1, "text-7xl", "font-bold", "leading-none", "text-gray-100"], [1, "mt-6", "text-lg", "leading-6", "tracking-tight", "text-gray-400"], [1, "mt-8", "flex", "items-center"], [1, "flex", "flex-0", "items-center", "-space-x-1.5"], ["src", "images/avatars/female-18.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/female-11.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/male-09.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], ["src", "images/avatars/male-16.jpg", 1, "h-10", "w-10", "flex-0", "rounded-full", "object-cover", "ring-4", "ring-gray-800", "ring-offset-1", "ring-offset-gray-800"], [1, "ml-4", "font-medium", "tracking-tight", "text-gray-400"]], template: function ComingSoonSplitScreenComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
        \u0275\u0275element(4, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 6);
        \u0275\u0275text(6, " Almost there! ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7);
        \u0275\u0275text(8, " Do you want to be notified when we are ready? Register below so we can notify you about the launch! ");
        \u0275\u0275elementEnd();
        \u0275\u0275template(9, ComingSoonSplitScreenComponent_Conditional_9_Template, 2, 5, "fuse-alert", 8);
        \u0275\u0275elementStart(10, "form", 9, 0)(12, "mat-form-field", 10)(13, "mat-label");
        \u0275\u0275text(14, "Email address");
        \u0275\u0275elementEnd();
        \u0275\u0275element(15, "input", 11);
        \u0275\u0275template(16, ComingSoonSplitScreenComponent_Conditional_16_Template, 2, 0, "mat-error")(17, ComingSoonSplitScreenComponent_Conditional_17_Template, 2, 0, "mat-error");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "button", 12);
        \u0275\u0275listener("click", function ComingSoonSplitScreenComponent_Template_button_click_18_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.register());
        });
        \u0275\u0275template(19, ComingSoonSplitScreenComponent_Conditional_19_Template, 2, 0, "span")(20, ComingSoonSplitScreenComponent_Conditional_20_Template, 1, 2, "mat-progress-spinner", 13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 14);
        \u0275\u0275text(22, " This isn't a newsletter subscription. We will send one email to you when we launch and then you will be removed from the list. ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 15);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(24, "svg", 16)(25, "g", 17);
        \u0275\u0275element(26, "circle", 18)(27, "circle", 19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "svg", 20)(29, "defs")(30, "pattern", 21);
        \u0275\u0275element(31, "rect", 22);
        \u0275\u0275elementEnd()();
        \u0275\u0275element(32, "rect", 23);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(33, "div", 24)(34, "div", 25)(35, "div");
        \u0275\u0275text(36, "Welcome to");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "div");
        \u0275\u0275text(38, "our community");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(39, "div", 26);
        \u0275\u0275text(40, " Fuse helps developers to build organized and well coded dashboards full of beautiful and rich modules. Join us and start building your application today. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(41, "div", 27)(42, "div", 28);
        \u0275\u0275element(43, "img", 29)(44, "img", 30)(45, "img", 31)(46, "img", 32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 33);
        \u0275\u0275text(48, " More than 17k people joined us, it's your turn ");
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.showAlert ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("formGroup", ctx.comingSoonForm);
        \u0275\u0275advance(5);
        \u0275\u0275property("formControlName", "email");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("required") ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.get("email").hasError("email") ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("color", "primary")("disabled", ctx.comingSoonForm.disabled);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.comingSoonForm.disabled ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.comingSoonForm.disabled ? 20 : -1);
      }
    }, dependencies: [
      FuseAlertComponent,
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
      MatError,
      MatInputModule,
      MatInput,
      MatButtonModule,
      MatButton,
      MatProgressSpinnerModule,
      MatProgressSpinner
    ], encapsulation: 2, data: { animation: fuseAnimations } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ComingSoonSplitScreenComponent, { className: "ComingSoonSplitScreenComponent", filePath: "src/app/modules/admin/pages/coming-soon/split-screen/coming-soon.component.ts", lineNumber: 33 });
})();

// src/app/modules/admin/pages/coming-soon/coming-soon.routes.ts
var coming_soon_routes_default = [
  {
    path: "classic",
    component: ComingSoonClassicComponent
  },
  {
    path: "modern",
    component: ComingSoonModernComponent
  },
  {
    path: "modern-reversed",
    component: ComingSoonModernReversedComponent
  },
  {
    path: "split-screen",
    component: ComingSoonSplitScreenComponent
  },
  {
    path: "split-screen-reversed",
    component: ComingSoonSplitScreenReversedComponent
  },
  {
    path: "fullscreen",
    component: ComingSoonFullscreenComponent
  },
  {
    path: "fullscreen-reversed",
    component: ComingSoonFullscreenReversedComponent
  }
];
export {
  coming_soon_routes_default as default
};
//# sourceMappingURL=chunk-M5SB4K7W.js.map
