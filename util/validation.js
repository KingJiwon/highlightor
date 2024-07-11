const nicknameValidation = (nickname) => {
  const nicknamePattern = /^([a-zA-Z0-9ㄱ-ㅎ|ㅏ-ㅣ|가-힣]).{1,10}$/;
  return nicknamePattern.test(nickname);
};

const emailValidation = (email) => {
  // eslint-disable-next-line no-useless-escape
  const emailPattern = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-za-z0-9\-]+/;
  return emailPattern.test(email);
};

const passwordValidation = (password) => {
  const passwordPattern =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  return passwordPattern.test(password);
};
export { nicknameValidation, emailValidation, passwordValidation };
