export default function handleValidation() {
  let tempErrors = {};
  let isValid = true;

  if (fullName.length <= 0) {
    tempErrors["fullName"] = true;
    isValid = false;
  }
  if (email.length <= 0) {
    tempErrors["email"] = true;
    isValid = false;
  }
  if (subject.length <= 0) {
    tempErrors["subject"] = true;
    isValid = false;
  }
  if (message.length <= 0) {
    tempErrors["message"] = true;
    isValid = false;
  }

  setErrors({ ...tempErrors });
  console.log("errors", errors);
  return isValid;
}