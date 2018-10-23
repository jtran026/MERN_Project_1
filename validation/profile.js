const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function vadlidateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  data.skills = !isEmpty(data.skills) ? data.skills : "";

  if (!Validator.islength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Handle needs to be between 2 and 4 characters.";
  }

  if (!Validator.isEmpty(data.handle)) {
    errors.handle = "Profile handle is required.";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
