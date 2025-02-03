import {
  FuseHighlightComponent
} from "./chunk-6QCSQUVR.js";
import {
  MatTab,
  MatTabContent,
  MatTabGroup,
  MatTabsModule
} from "./chunk-4XTS4DFY.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-5KZHZBIW.js";
import "./chunk-XRKJUGQI.js";
import "./chunk-7WCFMFZI.js";
import "./chunk-KMA6I4WH.js";
import "./chunk-OF77XAQN.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatLabel
} from "./chunk-2W4O77WS.js";
import "./chunk-BNTOCQMY.js";
import "./chunk-J5XV3GIF.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-JPDBWMRG.js";
import {
  MatOption,
  MatOptionModule
} from "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import {
  fuseAnimations
} from "./chunk-HKG3E5RP.js";
import "./chunk-WH7F4HUX.js";
import "./chunk-JL6CBEU5.js";
import "./chunk-M6AYR6A2.js";
import {
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/ui/animations/animations.component.ts
function AnimationsComponent_ng_template_78_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("@expandCollapse", ctx_r1.animationStates.expandCollapse);
  }
}
function AnimationsComponent_ng_template_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, AnimationsComponent_ng_template_78_Conditional_0_Template, 3, 1, "div", 26);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.visibilityStates.expandCollapse ? 0 : -1);
  }
}
function AnimationsComponent_ng_template_127_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("@shake", ctx_r1.animationStates.shake.shake);
  }
}
function AnimationsComponent_ng_template_127_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_ng_template_127_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.shake.shake ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_182_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@fadeIn", ctx_r1.animationStates.fadeIn.in);
  }
}
function AnimationsComponent_Conditional_182_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_182_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.fadeIn.in ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_182_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Fade In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_182_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("fadeIn.in", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_182_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("fadeIn.in"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_182_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@fadeIn]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @fadeIn>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_183_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@fadeInTop", ctx_r1.animationStates.fadeIn.top);
  }
}
function AnimationsComponent_Conditional_183_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_183_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.fadeIn.top ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_183_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Fade In Top");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_183_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("fadeIn.top", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_183_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("fadeIn.top"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_183_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@fadeInTop]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @fadeInTop>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_184_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@fadeInBottom", ctx_r1.animationStates.fadeIn.bottom);
  }
}
function AnimationsComponent_Conditional_184_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_184_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.fadeIn.bottom ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_184_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Fade In Bottom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_184_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("fadeIn.bottom", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_184_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("fadeIn.bottom"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_184_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@fadeInBottom]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @fadeInBottom>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_185_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@fadeInLeft", ctx_r1.animationStates.fadeIn.left);
  }
}
function AnimationsComponent_Conditional_185_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_185_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.fadeIn.left ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_185_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Fade In Left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_185_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("fadeIn.left", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_185_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("fadeIn.left"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_185_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@fadeInLeft]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @fadeInLeft>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_186_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@fadeInRight", ctx_r1.animationStates.fadeIn.right);
  }
}
function AnimationsComponent_Conditional_186_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_186_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.fadeIn.right ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_186_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Fade In Right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_186_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("fadeIn.right", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_186_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("fadeIn.right"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_186_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@fadeInRight]="state">\n                                <div class="animated-box-content">\n                                Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @fadeInRight>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_238_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@fadeOut", ctx_r1.animationStates.fadeOut.out);
  }
}
function AnimationsComponent_Conditional_238_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_238_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.fadeOut.out ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_238_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Fade Out");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_238_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("fadeOut.out", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_238_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("fadeOut.out"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_238_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@fadeOut]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @fadeOut>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_239_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@fadeOutTop", ctx_r1.animationStates.fadeOut.top);
  }
}
function AnimationsComponent_Conditional_239_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_239_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.fadeOut.top ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_239_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Fade Out Top");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_239_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("fadeOut.top", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_239_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("fadeOut.top"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_239_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@fadeOutTop]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @fadeOutTop>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_240_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@fadeOutBottom", ctx_r1.animationStates.fadeOut.bottom);
  }
}
function AnimationsComponent_Conditional_240_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_240_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.fadeOut.bottom ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_240_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Fade Out Bottom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_240_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("fadeOut.bottom", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_240_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("fadeOut.bottom"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_240_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@fadeOutBottom]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @fadeOutBottom>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_241_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@fadeOutLeft", ctx_r1.animationStates.fadeOut.left);
  }
}
function AnimationsComponent_Conditional_241_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_241_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.fadeOut.left ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_241_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Fade Out Left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_241_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("fadeOut.left", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_241_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("fadeOut.left"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_241_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@fadeOutLeft]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @fadeOutLeft>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_242_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@fadeOutRight", ctx_r1.animationStates.fadeOut.right);
  }
}
function AnimationsComponent_Conditional_242_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_242_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.fadeOut.right ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_242_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Fade Out Right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_242_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("fadeOut.right", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_242_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("fadeOut.right"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_242_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@fadeOutRight]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @fadeOutRight>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_292_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@slideInTop", ctx_r1.animationStates.slideIn.top);
  }
}
function AnimationsComponent_Conditional_292_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_292_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.slideIn.top ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_292_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Slide In Top");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_292_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("slideIn.top", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_292_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("slideIn.top"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_292_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@slideInTop]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @slideInTop>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_293_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@slideInBottom", ctx_r1.animationStates.slideIn.bottom);
  }
}
function AnimationsComponent_Conditional_293_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_293_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.slideIn.bottom ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_293_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Slide In Bottom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_293_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("slideIn.bottom", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_293_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("slideIn.bottom"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_293_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@slideInBottom]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @slideInBottom>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_294_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@slideInLeft", ctx_r1.animationStates.slideIn.left);
  }
}
function AnimationsComponent_Conditional_294_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_294_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.slideIn.left ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_294_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Slide In Left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_294_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("slideIn.left", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_294_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("slideIn.left"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_294_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@slideInLeft]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @slideInLeft>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_295_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@slideInRight", ctx_r1.animationStates.slideIn.right);
  }
}
function AnimationsComponent_Conditional_295_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_295_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.slideIn.right ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_295_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Slide In Right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_295_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("slideIn.right", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_295_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("slideIn.right"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_295_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@slideInRight]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @slideInRight>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_345_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@slideOutTop", ctx_r1.animationStates.slideOut.top);
  }
}
function AnimationsComponent_Conditional_345_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_345_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.slideOut.top ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_345_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Slide Out Top");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_345_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("slideOut.top", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_345_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("slideOut.top"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_345_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@slideOutTop]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @slideOutTop>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_346_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@slideOutBottom", ctx_r1.animationStates.slideOut.bottom);
  }
}
function AnimationsComponent_Conditional_346_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_346_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.slideOut.bottom ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_346_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Slide Out Bottom");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_346_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("slideOut.bottom", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_346_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("slideOut.bottom"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_346_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@slideOutBottom]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @slideOutBottom>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_347_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@slideOutLeft", ctx_r1.animationStates.slideOut.left);
  }
}
function AnimationsComponent_Conditional_347_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_347_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.slideOut.left ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_347_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Slide Out Left");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_347_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("slideOut.left", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_347_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("slideOut.left"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_347_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@slideOutLeft]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @slideOutLeft>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_Conditional_348_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("@slideOutRight", ctx_r1.animationStates.slideOut.right);
  }
}
function AnimationsComponent_Conditional_348_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_Conditional_348_ng_template_11_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.slideOut.right ? 1 : -1);
  }
}
function AnimationsComponent_Conditional_348_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "h6");
    \u0275\u0275text(3, "Slide Out Right");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 16)(5, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_348_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleAnimationState("slideOut.right", "void", "*"));
    });
    \u0275\u0275text(6, " Toggle state ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function AnimationsComponent_Conditional_348_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleVisibilityState("slideOut.right"));
    });
    \u0275\u0275text(8, " Toggle *ngIf ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-tab-group", 18)(10, "mat-tab", 19);
    \u0275\u0275template(11, AnimationsComponent_Conditional_348_ng_template_11_Template, 2, 1, "ng-template", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-tab", 21)(13, "textarea", 22);
    \u0275\u0275text(14, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@slideOutRight]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @slideOutRight>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("color", "primary");
    \u0275\u0275advance(2);
    \u0275\u0275property("animationDuration", "0ms");
    \u0275\u0275advance(4);
    \u0275\u0275property("lang", "html");
  }
}
function AnimationsComponent_ng_template_396_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("@zoomIn", ctx_r1.animationStates.zoomIn.in);
  }
}
function AnimationsComponent_ng_template_396_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_ng_template_396_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.zoomIn.in ? 1 : -1);
  }
}
function AnimationsComponent_ng_template_447_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27);
    \u0275\u0275text(2, " Animated box ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("@zoomOut", ctx_r1.animationStates.zoomOut.out);
  }
}
function AnimationsComponent_ng_template_447_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, AnimationsComponent_ng_template_447_Conditional_1_Template, 3, 1, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visibilityStates.zoomOut.out ? 1 : -1);
  }
}
var AnimationsComponent = class _AnimationsComponent {
  /**
   * Constructor
   */
  constructor() {
    this.animationStates = {
      expandCollapse: "expanded",
      fadeIn: {
        direction: "in",
        in: "*",
        top: "*",
        bottom: "*",
        left: "*",
        right: "*"
      },
      fadeOut: {
        direction: "out",
        out: "*",
        top: "*",
        bottom: "*",
        left: "*",
        right: "*"
      },
      shake: {
        shake: true
      },
      slideIn: {
        direction: "top",
        top: "*",
        bottom: "*",
        left: "*",
        right: "*"
      },
      slideOut: {
        direction: "top",
        top: "*",
        bottom: "*",
        left: "*",
        right: "*"
      },
      zoomIn: {
        in: "*"
      },
      zoomOut: {
        out: "*"
      }
    };
    this.visibilityStates = {
      expandCollapse: true,
      fadeIn: {
        in: true,
        top: true,
        bottom: true,
        left: true,
        right: true
      },
      fadeOut: {
        out: true,
        top: true,
        bottom: true,
        left: true,
        right: true
      },
      shake: {
        shake: true
      },
      slideIn: {
        top: true,
        bottom: true,
        left: true,
        right: true
      },
      slideOut: {
        top: true,
        bottom: true,
        left: true,
        right: true
      },
      zoomIn: {
        in: true
      },
      zoomOut: {
        out: true
      }
    };
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Toggle animation state
   *
   * @param animation
   * @param firstState
   * @param secondState
   * @param timeout
   */
  toggleAnimationState(animation, firstState, secondState, timeout = 500) {
    const animationPath = animation.split(".");
    this.animationStates[animationPath[0]][animationPath[1]] = firstState;
    setTimeout(() => {
      this.animationStates[animationPath[0]][animationPath[1]] = secondState;
    }, timeout);
  }
  /**
   * Toggle visibility state
   *
   * @param animation
   * @param timeout
   */
  toggleVisibilityState(animation, timeout = 500) {
    const animationPath = animation.split(".");
    this.visibilityStates[animationPath[0]][animationPath[1]] = false;
    this.animationStates[animationPath[0]][animationPath[1]] = "void";
    setTimeout(() => {
      this.visibilityStates[animationPath[0]][animationPath[1]] = true;
      this.animationStates[animationPath[0]][animationPath[1]] = "*";
    }, timeout);
  }
  static {
    this.\u0275fac = function AnimationsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AnimationsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnimationsComponent, selectors: [["animations"]], decls: 451, vars: 60, consts: [["fadeInSelect", ""], ["fadeOutSelect", ""], ["slideInSelect", ""], ["slideOutSelect", ""], [1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "prose", "prose-sm", "max-w-3xl"], ["fuse-highlight", "", "lang", "typescript"], [1, "example-viewer"], [1, "title"], [1, "controls"], ["mat-button", "", 3, "click", "color"], [3, "animationDuration"], ["label", "Preview"], ["matTabContent", ""], ["label", "HTML"], ["fuse-highlight", "", 3, "lang"], [1, "mt-16"], [3, "subscriptSizing"], [3, "value"], [1, "animated-box"], [1, "animated-box-content"], [1, "centered"]], template: function AnimationsComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "div", 6)(3, "div", 7)(4, "div")(5, "a", 8);
        \u0275\u0275text(6, "User Interface");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 9)(8, "h2", 10);
        \u0275\u0275text(9, " Animations ");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(10, "div", 11)(11, "div", 12)(12, "p");
        \u0275\u0275text(13, " Fuse provides set of ready-to-use animations for convenience. You can access them by importing the ");
        \u0275\u0275elementStart(14, "code");
        \u0275\u0275text(15, "FuseAnimations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(16, " and set it as the ");
        \u0275\u0275elementStart(17, "em");
        \u0275\u0275text(18, "animations");
        \u0275\u0275elementEnd();
        \u0275\u0275text(19, " property of the ");
        \u0275\u0275elementStart(20, "em");
        \u0275\u0275text(21, "@Component");
        \u0275\u0275elementEnd();
        \u0275\u0275text(22, " metadata. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "h2");
        \u0275\u0275text(24, "Module");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(25, "textarea", 13);
        \u0275\u0275text(26, "                import { FuseAnimations } from '@fuse/animations';\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "h2");
        \u0275\u0275text(28, "Usage");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "textarea", 13);
        \u0275\u0275text(30, "                @Component({\n                    selector   : 'my-component',\n                    templateUrl: './my-component.component.html',\n                    styleUrls  : ['./my-component.component.scss'],\n                    animations : FuseAnimations\n                })\n                export class MyComponent { }\n            ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(31, "h2");
        \u0275\u0275text(32, "Animations");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "h3");
        \u0275\u0275text(34, "Expand / Collapse");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "p");
        \u0275\u0275text(36, "This animation can be triggered in two ways;");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "ol")(38, "li");
        \u0275\u0275text(39, " Adding ");
        \u0275\u0275elementStart(40, "code");
        \u0275\u0275text(41, '[@expandCollapse]="state"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(42, " to the element and toggling the ");
        \u0275\u0275elementStart(43, "code");
        \u0275\u0275text(44, "state");
        \u0275\u0275elementEnd();
        \u0275\u0275text(45, " between the ");
        \u0275\u0275elementStart(46, "code");
        \u0275\u0275text(47, "'collapsed'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(48, " and ");
        \u0275\u0275elementStart(49, "code");
        \u0275\u0275text(50, "'expanded'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(51, " strings manually. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "li");
        \u0275\u0275text(53, " Adding ");
        \u0275\u0275elementStart(54, "code");
        \u0275\u0275text(55, "@expandCollapse");
        \u0275\u0275elementEnd();
        \u0275\u0275text(56, " to the element and using ");
        \u0275\u0275elementStart(57, "code");
        \u0275\u0275text(58, "*ngIf");
        \u0275\u0275elementEnd();
        \u0275\u0275text(59, " to toggle the element. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "p");
        \u0275\u0275text(61, " The animation can be disabled by setting the state to ");
        \u0275\u0275elementStart(62, "b");
        \u0275\u0275text(63, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(64, "; ");
        \u0275\u0275elementStart(65, "code");
        \u0275\u0275text(66, '[@expandCollapse]="false"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(67, "div", 14)(68, "div", 15)(69, "h6");
        \u0275\u0275text(70, "Expand / Collapse");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 16)(72, "button", 17);
        \u0275\u0275listener("click", function AnimationsComponent_Template_button_click_72_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.animationStates.expandCollapse === "expanded" ? ctx.animationStates.expandCollapse = "collapsed" : ctx.animationStates.expandCollapse = "expanded");
        });
        \u0275\u0275text(73, " Toggle state ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(74, "button", 17);
        \u0275\u0275listener("click", function AnimationsComponent_Template_button_click_74_listener() {
          \u0275\u0275restoreView(_r1);
          ctx.visibilityStates.expandCollapse = !ctx.visibilityStates.expandCollapse;
          return \u0275\u0275resetView(ctx.animationStates.expandCollapse === "expanded" ? ctx.animationStates.expandCollapse = "collapsed" : ctx.animationStates.expandCollapse = "expanded");
        });
        \u0275\u0275text(75, " Toggle *ngIf ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(76, "mat-tab-group", 18)(77, "mat-tab", 19);
        \u0275\u0275template(78, AnimationsComponent_ng_template_78_Template, 1, 1, "ng-template", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "mat-tab", 21)(80, "textarea", 22);
        \u0275\u0275text(81, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@expandCollapse]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @expandCollapse>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(82, "h3", 23);
        \u0275\u0275text(83, "Shake");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "p");
        \u0275\u0275text(85, "This animation can be triggered in two ways;");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "ol")(87, "li");
        \u0275\u0275text(88, " Adding ");
        \u0275\u0275elementStart(89, "code");
        \u0275\u0275text(90, '[@shake]="state"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(91, " to the element and toggling the ");
        \u0275\u0275elementStart(92, "code");
        \u0275\u0275text(93, "state");
        \u0275\u0275elementEnd();
        \u0275\u0275text(94, " between the ");
        \u0275\u0275elementStart(95, "code");
        \u0275\u0275text(96, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(97, " and ");
        \u0275\u0275elementStart(98, "code");
        \u0275\u0275text(99, "true");
        \u0275\u0275elementEnd();
        \u0275\u0275text(100, " manually. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "li");
        \u0275\u0275text(102, " Adding ");
        \u0275\u0275elementStart(103, "code");
        \u0275\u0275text(104, "@shake");
        \u0275\u0275elementEnd();
        \u0275\u0275text(105, " to the element and using ");
        \u0275\u0275elementStart(106, "code");
        \u0275\u0275text(107, "*ngIf");
        \u0275\u0275elementEnd();
        \u0275\u0275text(108, " to toggle the element. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(109, "p");
        \u0275\u0275text(110, " The animation can be disabled by setting the state to ");
        \u0275\u0275elementStart(111, "b");
        \u0275\u0275text(112, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(113, "; ");
        \u0275\u0275elementStart(114, "code");
        \u0275\u0275text(115, '[@shake]="false"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(116, "div", 14)(117, "div", 15)(118, "h6");
        \u0275\u0275text(119, "Shake");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(120, "div", 16)(121, "button", 17);
        \u0275\u0275listener("click", function AnimationsComponent_Template_button_click_121_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleAnimationState("shake.shake", false, true, 150));
        });
        \u0275\u0275text(122, " Toggle state ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(123, "button", 17);
        \u0275\u0275listener("click", function AnimationsComponent_Template_button_click_123_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleVisibilityState("shake.shake"));
        });
        \u0275\u0275text(124, " Toggle *ngIf ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(125, "mat-tab-group", 18)(126, "mat-tab", 19);
        \u0275\u0275template(127, AnimationsComponent_ng_template_127_Template, 2, 1, "ng-template", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(128, "mat-tab", 21)(129, "textarea", 22);
        \u0275\u0275text(130, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@shake]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @shake>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(131, "h3", 23);
        \u0275\u0275text(132, "Fade In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "p")(134, "b");
        \u0275\u0275text(135, "Fade In");
        \u0275\u0275elementEnd();
        \u0275\u0275text(136, " animation can be triggered in two ways;");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(137, "ol")(138, "li");
        \u0275\u0275text(139, " Adding ");
        \u0275\u0275elementStart(140, "code");
        \u0275\u0275text(141, '[@fadeIn]="state"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(142, " to the element and toggling the ");
        \u0275\u0275elementStart(143, "code");
        \u0275\u0275text(144, "state");
        \u0275\u0275elementEnd();
        \u0275\u0275text(145, " between the ");
        \u0275\u0275elementStart(146, "code");
        \u0275\u0275text(147, "'void'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(148, " and ");
        \u0275\u0275elementStart(149, "code");
        \u0275\u0275text(150, "'*'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(151, " strings manually. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(152, "li");
        \u0275\u0275text(153, " Adding ");
        \u0275\u0275elementStart(154, "code");
        \u0275\u0275text(155, "@fadeIn");
        \u0275\u0275elementEnd();
        \u0275\u0275text(156, " to the element and using ");
        \u0275\u0275elementStart(157, "code");
        \u0275\u0275text(158, "*ngIf");
        \u0275\u0275elementEnd();
        \u0275\u0275text(159, " to toggle the element. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(160, "p");
        \u0275\u0275text(161, " The animation can be disabled by setting the state to ");
        \u0275\u0275elementStart(162, "b");
        \u0275\u0275text(163, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(164, "; ");
        \u0275\u0275elementStart(165, "code");
        \u0275\u0275text(166, '[@fadeIn]="false"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(167, "mat-form-field", 24)(168, "mat-label");
        \u0275\u0275text(169, "Direction");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(170, "mat-select", 25, 0)(172, "mat-option", 25);
        \u0275\u0275text(173, "In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "mat-option", 25);
        \u0275\u0275text(175, "Top");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(176, "mat-option", 25);
        \u0275\u0275text(177, "Bottom");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(178, "mat-option", 25);
        \u0275\u0275text(179, "Left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(180, "mat-option", 25);
        \u0275\u0275text(181, "Right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(182, AnimationsComponent_Conditional_182_Template, 15, 4, "div", 14)(183, AnimationsComponent_Conditional_183_Template, 15, 4, "div", 14)(184, AnimationsComponent_Conditional_184_Template, 15, 4, "div", 14)(185, AnimationsComponent_Conditional_185_Template, 15, 4, "div", 14)(186, AnimationsComponent_Conditional_186_Template, 15, 4, "div", 14);
        \u0275\u0275elementStart(187, "h3", 23);
        \u0275\u0275text(188, "Fade Out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "p")(190, "b");
        \u0275\u0275text(191, "Fade Out");
        \u0275\u0275elementEnd();
        \u0275\u0275text(192, " animation can be triggered in two ways;");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(193, "ol")(194, "li");
        \u0275\u0275text(195, " Adding ");
        \u0275\u0275elementStart(196, "code");
        \u0275\u0275text(197, '[@fadeOut]="state"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(198, " to the element and toggling the ");
        \u0275\u0275elementStart(199, "code");
        \u0275\u0275text(200, "state");
        \u0275\u0275elementEnd();
        \u0275\u0275text(201, " between the ");
        \u0275\u0275elementStart(202, "code");
        \u0275\u0275text(203, "'void'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(204, " and ");
        \u0275\u0275elementStart(205, "code");
        \u0275\u0275text(206, "'*'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(207, " strings manually. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(208, "li");
        \u0275\u0275text(209, " Adding ");
        \u0275\u0275elementStart(210, "code");
        \u0275\u0275text(211, "@fadeOut");
        \u0275\u0275elementEnd();
        \u0275\u0275text(212, " to the element and using ");
        \u0275\u0275elementStart(213, "code");
        \u0275\u0275text(214, "*ngIf");
        \u0275\u0275elementEnd();
        \u0275\u0275text(215, " to toggle the element. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(216, "p");
        \u0275\u0275text(217, " The animation can be disabled by setting the state to ");
        \u0275\u0275elementStart(218, "b");
        \u0275\u0275text(219, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(220, "; ");
        \u0275\u0275elementStart(221, "code");
        \u0275\u0275text(222, '[@fadeOut]="false"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(223, "mat-form-field", 24)(224, "mat-label");
        \u0275\u0275text(225, "Direction");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(226, "mat-select", 25, 1)(228, "mat-option", 25);
        \u0275\u0275text(229, "Out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(230, "mat-option", 25);
        \u0275\u0275text(231, "Top");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(232, "mat-option", 25);
        \u0275\u0275text(233, "Bottom");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(234, "mat-option", 25);
        \u0275\u0275text(235, "Left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(236, "mat-option", 25);
        \u0275\u0275text(237, "Right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(238, AnimationsComponent_Conditional_238_Template, 15, 4, "div", 14)(239, AnimationsComponent_Conditional_239_Template, 15, 4, "div", 14)(240, AnimationsComponent_Conditional_240_Template, 15, 4, "div", 14)(241, AnimationsComponent_Conditional_241_Template, 15, 4, "div", 14)(242, AnimationsComponent_Conditional_242_Template, 15, 4, "div", 14);
        \u0275\u0275elementStart(243, "h3", 23);
        \u0275\u0275text(244, "Slide In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(245, "p")(246, "b");
        \u0275\u0275text(247, "Slide In");
        \u0275\u0275elementEnd();
        \u0275\u0275text(248, " animation can be triggered in two ways;");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(249, "ol")(250, "li");
        \u0275\u0275text(251, " Adding ");
        \u0275\u0275elementStart(252, "code");
        \u0275\u0275text(253, '[@slideIn]="state"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(254, " to the element and toggling the ");
        \u0275\u0275elementStart(255, "code");
        \u0275\u0275text(256, "state");
        \u0275\u0275elementEnd();
        \u0275\u0275text(257, " between the ");
        \u0275\u0275elementStart(258, "code");
        \u0275\u0275text(259, "'void'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(260, " and ");
        \u0275\u0275elementStart(261, "code");
        \u0275\u0275text(262, "'*'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(263, " strings manually. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(264, "li");
        \u0275\u0275text(265, " Adding ");
        \u0275\u0275elementStart(266, "code");
        \u0275\u0275text(267, "@slideIn");
        \u0275\u0275elementEnd();
        \u0275\u0275text(268, " to the element and using ");
        \u0275\u0275elementStart(269, "code");
        \u0275\u0275text(270, "*ngIf");
        \u0275\u0275elementEnd();
        \u0275\u0275text(271, " to toggle the element. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(272, "p");
        \u0275\u0275text(273, " The animation can be disabled by setting the state to ");
        \u0275\u0275elementStart(274, "b");
        \u0275\u0275text(275, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(276, "; ");
        \u0275\u0275elementStart(277, "code");
        \u0275\u0275text(278, '[@slideIn]="false"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(279, "mat-form-field", 24)(280, "mat-label");
        \u0275\u0275text(281, "Direction");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(282, "mat-select", 25, 2)(284, "mat-option", 25);
        \u0275\u0275text(285, "Top");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(286, "mat-option", 25);
        \u0275\u0275text(287, "Bottom");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(288, "mat-option", 25);
        \u0275\u0275text(289, "Left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(290, "mat-option", 25);
        \u0275\u0275text(291, "Right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(292, AnimationsComponent_Conditional_292_Template, 15, 4, "div", 14)(293, AnimationsComponent_Conditional_293_Template, 15, 4, "div", 14)(294, AnimationsComponent_Conditional_294_Template, 15, 4, "div", 14)(295, AnimationsComponent_Conditional_295_Template, 15, 4, "div", 14);
        \u0275\u0275elementStart(296, "h3", 23);
        \u0275\u0275text(297, "Slide Out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(298, "p")(299, "b");
        \u0275\u0275text(300, "Slide Out");
        \u0275\u0275elementEnd();
        \u0275\u0275text(301, " animation can be triggered in two ways;");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(302, "ol")(303, "li");
        \u0275\u0275text(304, " Adding ");
        \u0275\u0275elementStart(305, "code");
        \u0275\u0275text(306, '[@slideOut]="state"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(307, " to the element and toggling the ");
        \u0275\u0275elementStart(308, "code");
        \u0275\u0275text(309, "state");
        \u0275\u0275elementEnd();
        \u0275\u0275text(310, " between the ");
        \u0275\u0275elementStart(311, "code");
        \u0275\u0275text(312, "'void'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(313, " and ");
        \u0275\u0275elementStart(314, "code");
        \u0275\u0275text(315, "'*'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(316, " strings manually. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(317, "li");
        \u0275\u0275text(318, " Adding ");
        \u0275\u0275elementStart(319, "code");
        \u0275\u0275text(320, "@slideOut");
        \u0275\u0275elementEnd();
        \u0275\u0275text(321, " to the element and using ");
        \u0275\u0275elementStart(322, "code");
        \u0275\u0275text(323, "*ngIf");
        \u0275\u0275elementEnd();
        \u0275\u0275text(324, " to toggle the element. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(325, "p");
        \u0275\u0275text(326, " The animation can be disabled by setting the state to ");
        \u0275\u0275elementStart(327, "b");
        \u0275\u0275text(328, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(329, "; ");
        \u0275\u0275elementStart(330, "code");
        \u0275\u0275text(331, '[@slideOut]="false"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(332, "mat-form-field", 24)(333, "mat-label");
        \u0275\u0275text(334, "Direction");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(335, "mat-select", 25, 3)(337, "mat-option", 25);
        \u0275\u0275text(338, "Top");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(339, "mat-option", 25);
        \u0275\u0275text(340, "Bottom");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(341, "mat-option", 25);
        \u0275\u0275text(342, "Left");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(343, "mat-option", 25);
        \u0275\u0275text(344, "Right");
        \u0275\u0275elementEnd()()();
        \u0275\u0275template(345, AnimationsComponent_Conditional_345_Template, 15, 4, "div", 14)(346, AnimationsComponent_Conditional_346_Template, 15, 4, "div", 14)(347, AnimationsComponent_Conditional_347_Template, 15, 4, "div", 14)(348, AnimationsComponent_Conditional_348_Template, 15, 4, "div", 14);
        \u0275\u0275elementStart(349, "h3", 23);
        \u0275\u0275text(350, "Zoom In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(351, "p")(352, "b");
        \u0275\u0275text(353, "Zoom In");
        \u0275\u0275elementEnd();
        \u0275\u0275text(354, " animation can be triggered in two ways;");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(355, "ol")(356, "li");
        \u0275\u0275text(357, " Adding ");
        \u0275\u0275elementStart(358, "code");
        \u0275\u0275text(359, '[@zoomIn]="state"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(360, " to the element and toggling the ");
        \u0275\u0275elementStart(361, "code");
        \u0275\u0275text(362, "state");
        \u0275\u0275elementEnd();
        \u0275\u0275text(363, " between the ");
        \u0275\u0275elementStart(364, "code");
        \u0275\u0275text(365, "'void'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(366, " and ");
        \u0275\u0275elementStart(367, "code");
        \u0275\u0275text(368, "'*'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(369, " strings manually. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(370, "li");
        \u0275\u0275text(371, " Adding ");
        \u0275\u0275elementStart(372, "code");
        \u0275\u0275text(373, "@zoomIn");
        \u0275\u0275elementEnd();
        \u0275\u0275text(374, " to the element and using ");
        \u0275\u0275elementStart(375, "code");
        \u0275\u0275text(376, "*ngIf");
        \u0275\u0275elementEnd();
        \u0275\u0275text(377, " to toggle the element. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(378, "p");
        \u0275\u0275text(379, " The animation can be disabled by setting the state to ");
        \u0275\u0275elementStart(380, "b");
        \u0275\u0275text(381, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(382, "; ");
        \u0275\u0275elementStart(383, "code");
        \u0275\u0275text(384, '[@zoomIn]="false"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(385, "div", 14)(386, "div", 15)(387, "h6");
        \u0275\u0275text(388, "Zoom In");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(389, "div", 16)(390, "button", 17);
        \u0275\u0275listener("click", function AnimationsComponent_Template_button_click_390_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleAnimationState("zoomIn.in", "void", "*"));
        });
        \u0275\u0275text(391, " Toggle state ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(392, "button", 17);
        \u0275\u0275listener("click", function AnimationsComponent_Template_button_click_392_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleVisibilityState("zoomIn.in"));
        });
        \u0275\u0275text(393, " Toggle *ngIf ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(394, "mat-tab-group", 18)(395, "mat-tab", 19);
        \u0275\u0275template(396, AnimationsComponent_ng_template_396_Template, 2, 1, "ng-template", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(397, "mat-tab", 21)(398, "textarea", 22);
        \u0275\u0275text(399, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@zoomIn]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @zoomIn>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(400, "h3", 23);
        \u0275\u0275text(401, "Zoom Out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(402, "p")(403, "b");
        \u0275\u0275text(404, "Zoom Out");
        \u0275\u0275elementEnd();
        \u0275\u0275text(405, " animation can be triggered in two ways;");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(406, "ol")(407, "li");
        \u0275\u0275text(408, " Adding ");
        \u0275\u0275elementStart(409, "code");
        \u0275\u0275text(410, '[@zoomOut]="state"');
        \u0275\u0275elementEnd();
        \u0275\u0275text(411, " to the element and toggling the ");
        \u0275\u0275elementStart(412, "code");
        \u0275\u0275text(413, "state");
        \u0275\u0275elementEnd();
        \u0275\u0275text(414, " between the ");
        \u0275\u0275elementStart(415, "code");
        \u0275\u0275text(416, "'void'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(417, " and ");
        \u0275\u0275elementStart(418, "code");
        \u0275\u0275text(419, "'*'");
        \u0275\u0275elementEnd();
        \u0275\u0275text(420, " strings manually. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(421, "li");
        \u0275\u0275text(422, " Adding ");
        \u0275\u0275elementStart(423, "code");
        \u0275\u0275text(424, "@zoomOut");
        \u0275\u0275elementEnd();
        \u0275\u0275text(425, " to the element and using ");
        \u0275\u0275elementStart(426, "code");
        \u0275\u0275text(427, "*ngIf");
        \u0275\u0275elementEnd();
        \u0275\u0275text(428, " to toggle the element. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(429, "p");
        \u0275\u0275text(430, " The animation can be disabled by setting the state to ");
        \u0275\u0275elementStart(431, "b");
        \u0275\u0275text(432, "false");
        \u0275\u0275elementEnd();
        \u0275\u0275text(433, "; ");
        \u0275\u0275elementStart(434, "code");
        \u0275\u0275text(435, '[@zoomOut]="false"');
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(436, "div", 14)(437, "div", 15)(438, "h6");
        \u0275\u0275text(439, "Zoom Out");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(440, "div", 16)(441, "button", 17);
        \u0275\u0275listener("click", function AnimationsComponent_Template_button_click_441_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleAnimationState("zoomOut.out", "void", "*"));
        });
        \u0275\u0275text(442, " Toggle state ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(443, "button", 17);
        \u0275\u0275listener("click", function AnimationsComponent_Template_button_click_443_listener() {
          \u0275\u0275restoreView(_r1);
          return \u0275\u0275resetView(ctx.toggleVisibilityState("zoomOut.out"));
        });
        \u0275\u0275text(444, " Toggle *ngIf ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(445, "mat-tab-group", 18)(446, "mat-tab", 19);
        \u0275\u0275template(447, AnimationsComponent_ng_template_447_Template, 2, 1, "ng-template", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(448, "mat-tab", 21)(449, "textarea", 22);
        \u0275\u0275text(450, '                            <!-- Using state -->\n                            <div\n                                class="animated-box"\n                                [@zoomOut]="state">\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n\n                            <!-- Using *ngIf -->\n                            <div\n                                class="animated-box"\n                                *ngIf="visible"\n                                @zoomOut>\n                                <div class="animated-box-content">\n                                    Animated box\n                                </div>\n                            </div>\n                        ');
        \u0275\u0275elementEnd()()()()()()();
      }
      if (rf & 2) {
        const fadeInSelect_r21 = \u0275\u0275reference(171);
        const fadeOutSelect_r22 = \u0275\u0275reference(227);
        const slideInSelect_r23 = \u0275\u0275reference(283);
        const slideOutSelect_r24 = \u0275\u0275reference(336);
        \u0275\u0275advance(72);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(2);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(41);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(2);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(38);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", "in");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "in");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "top");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "bottom");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "left");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "right");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(fadeInSelect_r21.value === "in" ? 182 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(fadeInSelect_r21.value === "top" ? 183 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(fadeInSelect_r21.value === "bottom" ? 184 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(fadeInSelect_r21.value === "left" ? 185 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(fadeInSelect_r21.value === "right" ? 186 : -1);
        \u0275\u0275advance(37);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", "out");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "out");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "top");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "bottom");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "left");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "right");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(fadeOutSelect_r22.value === "out" ? 238 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(fadeOutSelect_r22.value === "top" ? 239 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(fadeOutSelect_r22.value === "bottom" ? 240 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(fadeOutSelect_r22.value === "left" ? 241 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(fadeOutSelect_r22.value === "right" ? 242 : -1);
        \u0275\u0275advance(37);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", "top");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "top");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "bottom");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "left");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "right");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(slideInSelect_r23.value === "top" ? 292 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(slideInSelect_r23.value === "bottom" ? 293 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(slideInSelect_r23.value === "left" ? 294 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(slideInSelect_r23.value === "right" ? 295 : -1);
        \u0275\u0275advance(37);
        \u0275\u0275property("subscriptSizing", "dynamic");
        \u0275\u0275advance(3);
        \u0275\u0275property("value", "top");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "top");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "bottom");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "left");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", "right");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(slideOutSelect_r24.value === "top" ? 345 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(slideOutSelect_r24.value === "bottom" ? 346 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(slideOutSelect_r24.value === "left" ? 347 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(slideOutSelect_r24.value === "right" ? 348 : -1);
        \u0275\u0275advance(42);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(2);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
        \u0275\u0275advance(43);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(2);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance(2);
        \u0275\u0275property("animationDuration", "0ms");
        \u0275\u0275advance(4);
        \u0275\u0275property("lang", "html");
      }
    }, dependencies: [
      FuseHighlightComponent,
      MatButtonModule,
      MatButton,
      MatTabsModule,
      MatTabContent,
      MatTab,
      MatTabGroup,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatOptionModule
    ], styles: ["/* src/app/modules/admin/ui/animations/animations.component.scss */\nanimations .mat-mdc-form-field {\n  width: 100%;\n  margin-top: 32px;\n}\nanimations .mat-mdc-tab-group .mat-mdc-tab-header {\n  padding: 24px 0;\n  border-top-width: 1px;\n}\nanimations .mat-mdc-tab-group .mat-mdc-tab-body-wrapper .mat-mdc-tab-body:first-child .mat-mdc-tab-body-content {\n  display: flex;\n  justify-content: center;\n  min-height: 200px;\n}\nanimations .mat-mdc-tab-group .mat-mdc-tab-body-wrapper .mat-mdc-tab-body .animated-box {\n  width: 120px;\n  height: 120px;\n  overflow: hidden;\n  border-radius: 4px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  user-select: none;\n}\nanimations .mat-mdc-tab-group .mat-mdc-tab-body-wrapper .mat-mdc-tab-body .animated-box .animated-box-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex: 1 0 auto;\n  height: 100%;\n  text-align: center;\n  font-size: 12px;\n  font-weight: 500;\n}\nanimations .info {\n  --tw-text-opacity: 1;\n  color: rgba(var(--fuse-text-secondary-rgb), var(--tw-text-opacity));\n  --tw-bg-opacity: 1;\n  background-color: rgb(148 163 184 / var(--tw-bg-opacity, 1));\n}\nanimations .animated-box {\n  --tw-bg-opacity: 1;\n  background-color: rgba(var(--fuse-primary-rgb), var(--tw-bg-opacity, 1));\n  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);\n  box-shadow:\n    var(--tw-ring-offset-shadow, 0 0 #0000),\n    var(--tw-ring-shadow, 0 0 #0000),\n    var(--tw-shadow);\n}\nanimations .animated-box .animated-box-content {\n  --tw-text-opacity: 1;\n  color: rgba(var(--fuse-on-primary-rgb), var(--tw-text-opacity, 1));\n}\n/*# sourceMappingURL=animations.component.css.map */\n"], encapsulation: 2, data: { animation: fuseAnimations } });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnimationsComponent, { className: "AnimationsComponent", filePath: "src/app/modules/admin/ui/animations/animations.component.ts", lineNumber: 25 });
})();

// src/app/modules/admin/ui/animations/animations.routes.ts
var animations_routes_default = [
  {
    path: "",
    component: AnimationsComponent
  }
];
export {
  animations_routes_default as default
};
//# sourceMappingURL=chunk-ZXFDDCJD.js.map
