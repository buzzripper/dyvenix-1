import {
  ɵɵdefineInjectable
} from "./chunk-4ASYWLFB.js";

// src/@fuse/services/utils/utils.service.ts
var FuseUtilsService = class _FuseUtilsService {
  // -----------------------------------------------------------------------------------------------------
  // @ Accessors
  // -----------------------------------------------------------------------------------------------------
  /**
   * Get the equivalent "IsActiveMatchOptions" options for "exact = true".
   */
  get exactMatchOptions() {
    return {
      paths: "exact",
      fragment: "ignored",
      matrixParams: "ignored",
      queryParams: "exact"
    };
  }
  /**
   * Get the equivalent "IsActiveMatchOptions" options for "exact = false".
   */
  get subsetMatchOptions() {
    return {
      paths: "subset",
      fragment: "ignored",
      matrixParams: "ignored",
      queryParams: "subset"
    };
  }
  // -----------------------------------------------------------------------------------------------------
  // @ Public methods
  // -----------------------------------------------------------------------------------------------------
  /**
   * Generates a random id
   *
   * @param length
   */
  randomId(length = 10) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let name = "";
    for (let i = 0; i < 10; i++) {
      name += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return name;
  }
  static {
    this.\u0275fac = function FuseUtilsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseUtilsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FuseUtilsService, factory: _FuseUtilsService.\u0275fac, providedIn: "root" });
  }
};

export {
  FuseUtilsService
};
//# sourceMappingURL=chunk-LWCQAMDH.js.map
