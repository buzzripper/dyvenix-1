import {
  ɵɵdefinePipe
} from "./chunk-4ASYWLFB.js";

// src/@fuse/pipes/find-by-key/find-by-key.pipe.ts
var FuseFindByKeyPipe = class _FuseFindByKeyPipe {
  /**
   * Transform
   *
   * @param value A string or an array of strings to find from source
   * @param key Key of the object property to look for
   * @param source Array of objects to find from
   */
  transform(value, key, source) {
    if (Array.isArray(value)) {
      return value.map((item) => source.find((sourceItem) => sourceItem[key] === item));
    }
    return source.find((sourceItem) => sourceItem[key] === value);
  }
  static {
    this.\u0275fac = function FuseFindByKeyPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FuseFindByKeyPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "fuseFindByKey", type: _FuseFindByKeyPipe, pure: false });
  }
};

export {
  FuseFindByKeyPipe
};
//# sourceMappingURL=chunk-G4MGEPS3.js.map
