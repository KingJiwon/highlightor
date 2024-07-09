const emailValidation = (email) => {
  // eslint-disable-next-line no-useless-escape
  const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  if (!emailPattern.test(email)) {
    return false;
  }
  return true;
};

const passwordValidation = (password) => {
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  if (!passwordPattern.test(password)) {
    return false;
  }
  return true;
};
export { emailValidation, passwordValidation };
