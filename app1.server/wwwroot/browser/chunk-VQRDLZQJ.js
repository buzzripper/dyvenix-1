// src/@fuse/validators/validators.ts
var FuseValidators = class {
  /**
   * Check for empty (optional fields) values
   *
   * @param value
   */
  static isEmptyInputValue(value) {
    return value == null || value.length === 0;
  }
  /**
   * Must match validator
   *
   * @param controlPath A dot-delimited string values that define the path to the control.
   * @param matchingControlPath A dot-delimited string values that define the path to the matching control.
   */
  static mustMatch(controlPath, matchingControlPath) {
    return (formGroup) => {
      const control = formGroup.get(controlPath);
      const matchingControl = formGroup.get(matchingControlPath);
      if (!control || !matchingControl) {
        return null;
      }
      if (matchingControl.hasError("mustMatch")) {
        delete matchingControl.errors.mustMatch;
        matchingControl.updateValueAndValidity();
      }
      if (this.isEmptyInputValue(matchingControl.value) || control.value === matchingControl.value) {
        return null;
      }
      const errors = { mustMatch: true };
      matchingControl.setErrors(errors);
      return errors;
    };
  }
};

export {
  FuseValidators
};
//# sourceMappingURL=chunk-VQRDLZQJ.js.map
