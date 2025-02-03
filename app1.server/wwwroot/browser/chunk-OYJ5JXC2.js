import {
  MatAnchor,
  MatButtonModule
} from "./chunk-JPDBWMRG.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-5AHQJJ5Y.js";
import "./chunk-F6PEOSCL.js";
import "./chunk-EWZPTUTP.js";
import "./chunk-JL6CBEU5.js";
import "./chunk-M6AYR6A2.js";
import {
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-4ASYWLFB.js";
import "./chunk-N6ESDQJH.js";

// src/app/modules/admin/ui/material-components/material-components.component.ts
function MaterialComponentsComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15);
    \u0275\u0275element(1, "img", 16);
    \u0275\u0275elementStart(2, "div", 17)(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const component_r1 = ctx.$implicit;
    \u0275\u0275property("href", "https://material.angular.io/components/" + component_r1.id, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275property("src", "images/ui/angular-material/scenes/" + component_r1.id + ".scene.png", \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", component_r1.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", component_r1.summary, " ");
  }
}
var MaterialComponentsComponent = class _MaterialComponentsComponent {
  /**
   * Constructor
   */
  constructor() {
    this.components = [
      {
        id: "autocomplete",
        name: "Autocomplete",
        summary: "Suggests relevant options as the user types.",
        exampleSpecs: {
          prefix: "autocomplete-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-autocomplete-testing.html"
          }
        ]
      },
      {
        id: "badge",
        name: "Badge",
        summary: "A small value indicator that can be overlaid on another object.",
        exampleSpecs: {
          prefix: "badge-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-badge-testing.html"
          }
        ]
      },
      {
        id: "bottom-sheet",
        name: "Bottom Sheet",
        summary: "A large interactive panel primarily for mobile devices.",
        exampleSpecs: {
          prefix: "bottom-sheet-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-bottom-sheet-testing.html"
          }
        ]
      },
      {
        id: "button",
        name: "Button",
        summary: "An interactive button with a range of presentation options.",
        exampleSpecs: {
          prefix: "button-",
          exclude: ["button-toggle-"]
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-button-testing.html"
          }
        ]
      },
      {
        id: "button-toggle",
        name: "Button toggle",
        summary: "A groupable on/off toggle for enabling and disabling options.",
        exampleSpecs: {
          prefix: "button-toggle-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-button-toggle-testing.html"
          }
        ]
      },
      {
        id: "card",
        name: "Card",
        summary: "A styled container for pieces of itemized content.",
        exampleSpecs: {
          prefix: "card-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-card-testing.html"
          }
        ]
      },
      {
        id: "checkbox",
        name: "Checkbox",
        summary: "Captures boolean input with an optional indeterminate mode.",
        exampleSpecs: {
          prefix: "checkbox-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-checkbox-testing.html"
          }
        ]
      },
      {
        id: "chips",
        name: "Chips",
        summary: "Presents a list of items as a set of small, tactile entities.",
        exampleSpecs: {
          prefix: "chips-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-chips-testing.html"
          }
        ]
      },
      {
        id: "core",
        name: "Core",
        summary: "Reusable parts used by other components in the library.",
        exampleSpecs: {
          prefix: "core-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-core-testing.html"
          }
        ]
      },
      {
        id: "datepicker",
        name: "Datepicker",
        summary: "Captures dates, agnostic about their internal representation.",
        exampleSpecs: {
          prefix: "date"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-datepicker-testing.html"
          }
        ]
      },
      {
        id: "dialog",
        name: "Dialog",
        summary: "A configurable modal that displays dynamic content.",
        exampleSpecs: {
          prefix: "dialog-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-dialog-testing.html"
          }
        ]
      },
      {
        id: "divider",
        name: "Divider",
        summary: "A vertical or horizontal visual divider.",
        exampleSpecs: {
          prefix: "divider-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-divider-testing.html"
          }
        ]
      },
      {
        id: "expansion",
        name: "Expansion Panel",
        summary: "A container which can be expanded to reveal more content.",
        exampleSpecs: {
          prefix: "expansion-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-expansion-testing.html"
          }
        ]
      },
      {
        id: "form-field",
        name: "Form field",
        summary: "Wraps input fields so they are displayed consistently.",
        exampleSpecs: {
          prefix: "form-field-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-form-field-testing.html"
          }
        ]
      },
      {
        id: "grid-list",
        name: "Grid list",
        summary: "A flexible structure for presenting content items in a grid.",
        exampleSpecs: {
          prefix: "grid-list-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-grid-list-testing.html"
          }
        ]
      },
      {
        id: "icon",
        name: "Icon",
        summary: "Renders a specified icon.",
        exampleSpecs: {
          prefix: "icon-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-icon-testing.html"
          }
        ]
      },
      {
        id: "input",
        name: "Input",
        summary: "Enables native inputs to be used within a Form field.",
        exampleSpecs: {
          prefix: "input-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-input-testing.html"
          }
        ]
      },
      {
        id: "list",
        name: "List",
        summary: "Presents conventional lists of items.",
        exampleSpecs: {
          prefix: "list-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-list-testing.html"
          }
        ]
      },
      {
        id: "menu",
        name: "Menu",
        summary: "A floating panel of nestable options.",
        exampleSpecs: {
          prefix: "menu-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-menu-testing.html"
          }
        ]
      },
      {
        id: "paginator",
        name: "Paginator",
        summary: "Controls for displaying paged data.",
        exampleSpecs: {
          prefix: "paginator-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-paginator-testing.html"
          }
        ]
      },
      {
        id: "progress-bar",
        name: "Progress bar",
        summary: "A linear progress indicator.",
        exampleSpecs: {
          prefix: "progress-bar-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-progress-bar-testing.html"
          }
        ]
      },
      {
        id: "progress-spinner",
        name: "Progress spinner",
        summary: "A circular progress indicator.",
        exampleSpecs: {
          prefix: "progress-spinner-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-progress-spinner-testing.html"
          }
        ]
      },
      {
        id: "radio",
        name: "Radio button",
        summary: "Allows the user to select one option from a group.",
        exampleSpecs: {
          prefix: "radio-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-radio-testing.html"
          }
        ]
      },
      {
        id: "ripple",
        name: "Ripples",
        overviewPath: "material/core/ripple/ripple.html",
        summary: "Directive for adding Material Design ripple effects",
        exampleSpecs: {
          prefix: "ripple-"
        }
      },
      {
        id: "select",
        name: "Select",
        summary: "Allows the user to select one or more options using a dropdown.",
        exampleSpecs: {
          prefix: "select-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-select-testing.html"
          }
        ]
      },
      {
        id: "sidenav",
        name: "Sidenav",
        summary: "A container for content that is fixed to one side of the screen.",
        exampleSpecs: {
          prefix: "sidenav-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-sidenav-testing.html"
          }
        ]
      },
      {
        id: "slide-toggle",
        name: "Slide toggle",
        summary: "Captures boolean values as a clickable and draggable switch.",
        exampleSpecs: {
          prefix: "slide-toggle-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-slide-toggle-testing.html"
          }
        ]
      },
      {
        id: "slider",
        name: "Slider",
        summary: "Allows the user to input a value by dragging along a slider.",
        exampleSpecs: {
          prefix: "slider-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-slider-testing.html"
          }
        ]
      },
      {
        id: "snack-bar",
        name: "Snackbar",
        summary: "Displays short actionable messages as an uninvasive alert.",
        exampleSpecs: {
          prefix: "snack-bar-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-snack-bar-testing.html"
          }
        ]
      },
      {
        id: "sort",
        name: "Sort header",
        summary: "Allows the user to configure how tabular data is sorted.",
        exampleSpecs: {
          prefix: "sort-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-sort-testing.html"
          }
        ]
      },
      {
        id: "stepper",
        name: "Stepper",
        summary: "Presents content as steps through which to progress.",
        exampleSpecs: {
          prefix: "stepper-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-stepper-testing.html"
          }
        ]
      },
      {
        id: "table",
        name: "Table",
        summary: "A configurable component for displaying tabular data.",
        exampleSpecs: {
          prefix: "table-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-table-testing.html"
          }
        ]
      },
      {
        id: "tabs",
        name: "Tabs",
        summary: "Only presents one view at a time from a provided set of views.",
        exampleSpecs: {
          prefix: "tab-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-tabs-testing.html"
          }
        ]
      },
      {
        id: "toolbar",
        name: "Toolbar",
        summary: "A container for top-level titles and controls.",
        exampleSpecs: {
          prefix: "toolbar-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-toolbar-testing.html"
          }
        ]
      },
      {
        id: "tooltip",
        name: "Tooltip",
        summary: "Displays floating content when an object is hovered.",
        exampleSpecs: {
          prefix: "tooltip-"
        },
        additionalApiDocs: [
          {
            name: "Testing",
            path: "material-tooltip-testing.html"
          }
        ]
      },
      {
        id: "tree",
        name: "Tree",
        summary: "Presents hierarchical content as an expandable tree.",
        exampleSpecs: {
          prefix: "tree-"
        }
      }
    ];
  }
  static {
    this.\u0275fac = function MaterialComponentsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MaterialComponentsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaterialComponentsComponent, selectors: [["material-components"]], decls: 33, vars: 2, consts: [[1, "flex", "min-w-0", "flex-auto", "flex-col"], [1, "bg-card", "flex", "flex-0", "flex-col", "border-b", "p-6", "dark:bg-transparent", "sm:flex-row", "sm:items-center", "sm:justify-between", "sm:px-10", "sm:py-8"], [1, "min-w-0", "flex-1"], [1, "flex", "flex-wrap", "items-center", "font-medium"], [1, "whitespace-nowrap", "text-primary-500"], [1, "mt-2"], [1, "truncate", "text-3xl", "font-extrabold", "leading-7", "tracking-tight", "sm:leading-10", "md:text-4xl"], [1, "mt-6", "flex", "shrink-0", "items-center", "sm:ml-4", "sm:mt-0"], ["mat-flat-button", "", "href", "https://material.angular.io/components/categories", "target", "_blank", "rel", "noreferrer", 3, "color"], [1, "icon-size-4", 3, "svgIcon"], [1, "ml-2"], [1, "flex-auto", "p-6", "sm:p-10"], [1, "prose", "prose-sm", "max-w-4xl"], ["href", "https://material.angular.io/components/categories", "rel", "noreferrer", "target", "_blank", 1, "link"], [1, "mt-8", "grid", "grid-cols-1", "gap-10", "sm:grid-cols-2", "md:grid-cols-3", "lg:grid-cols-4", "xl:grid-cols-5"], ["target", "_blank", "rel", "noreferrer", 1, "bg-card", "flex", "flex-col", "overflow-hidden", "rounded-2xl", "shadow", "transition-shadow", "duration-200", "ease-in-out", "hover:shadow-xl", 3, "href"], [1, "w-full", "border-b", "object-cover", 3, "src"], [1, "px-5", "py-4"], [1, "text-xl", "font-semibold"], [1, "text-secondary", "mt-1"]], template: function MaterialComponentsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div")(5, "a", 4);
        \u0275\u0275text(6, "User Interface");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "div", 5)(8, "h2", 6);
        \u0275\u0275text(9, " Angular Material Components ");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 7)(11, "a", 8);
        \u0275\u0275element(12, "mat-icon", 9);
        \u0275\u0275elementStart(13, "span", 10);
        \u0275\u0275text(14, "Official docs");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 11)(16, "div", 12)(17, "p");
        \u0275\u0275text(18, " Fuse uses ");
        \u0275\u0275elementStart(19, "a", 13);
        \u0275\u0275text(20, "Angular Material ");
        \u0275\u0275elementEnd();
        \u0275\u0275text(21, " as its primary user interface library. It offers form controls, buttons, tabs, sidebars, icons, modals, tooltips, data tables and many more well tested and widely used components. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "p");
        \u0275\u0275text(23, " Even though Fuse doesn't follow Google's Material design specifications, Angular Material is one of the best Angular component libraries out there and since it's developed and maintained by Google itself, it offers the best compatibility and support for Angular. ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "p");
        \u0275\u0275text(25, "Fuse is 100% compatible with all Angular Material components.");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "h2");
        \u0275\u0275text(27, "Component examples and API documentation");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "p");
        \u0275\u0275text(29, " Following, you can find links to the official documentation. Click on the component you want to learn more about and it will redirect you to the related section of the official documentation. ");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 14);
        \u0275\u0275repeaterCreate(31, MaterialComponentsComponent_For_32_Template, 7, 4, "a", 15, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(11);
        \u0275\u0275property("color", "primary");
        \u0275\u0275advance();
        \u0275\u0275property("svgIcon", "heroicons_mini:arrow-top-right-on-square");
        \u0275\u0275advance(19);
        \u0275\u0275repeater(ctx.components);
      }
    }, dependencies: [MatButtonModule, MatAnchor, MatIconModule, MatIcon], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaterialComponentsComponent, { className: "MaterialComponentsComponent", filePath: "src/app/modules/admin/ui/material-components/material-components.component.ts", lineNumber: 11 });
})();

// src/app/modules/admin/ui/material-components/material-components.routes.ts
var material_components_routes_default = [
  {
    path: "",
    component: MaterialComponentsComponent
  }
];
export {
  material_components_routes_default as default
};
//# sourceMappingURL=chunk-OYJ5JXC2.js.map
