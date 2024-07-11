'use client';

import signup from '@/styles/components/modal/signupModal.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import generalLogin from '@/app/apis/user';
import {
  nicknameValidation,
  emailValidation,
  passwordValidation,
} from '@/util/validation';
import {
  INVALID_EMAIL,
  INVALID_PASSWORD,
  INVALID_PASSWORDCHECK,
  VALID_EMAIL,
  VALID_PASSWORD,
  VALID_PASSWORDCHECK,
  INVALID_NICKNAME,
  VALID_NICKNAME,
} from '@/util/variable';

export default function Signup() {
  const router = useRouter();

  const [error, setError] = useState(null);
  const [formState, setFormState] = useState({
    nickname: '',
    email: '',
    password: '',
    passwordCheck: '',
  });

  const [validationState, setValidationState] = useState({
    isValidNickname: false,
    isValidEmail: false,
    isValidPassword: false,
    isValidPasswordCheck: false,
    nicknameCaption: INVALID_NICKNAME,
    emailCaption: INVALID_EMAIL,
    passwordCaption: INVALID_PASSWORD,
    passwordCheckCaption: INVALID_PASSWORDCHECK,
  });

  const validateNickname = (nickname) => {
    const isValid = nicknameValidation(nickname);
    setValidationState((prevState) => ({
      ...prevState,
      isValidNickname: isValid,
      nicknameCaption: isValid ? VALID_NICKNAME : INVALID_NICKNAME,
    }));
  };

  const validateEmail = (email) => {
    const isValid = emailValidation(email);
    setValidationState((prevState) => ({
      ...prevState,
      isValidEmail: isValid,
      emailCaption: isValid ? VALID_EMAIL : INVALID_EMAIL,
    }));
  };

  const validatePasswordCheck = (
    passwordCheck,
    password = formState.password,
  ) => {
    const isValid = passwordCheck === password;
    setValidationState((prevState) => ({
      ...prevState,
      isValidPasswordCheck: isValid,
      passwordCheckCaption: isValid
        ? VALID_PASSWORDCHECK
        : INVALID_PASSWORDCHECK,
    }));
  };

  const validatePassword = (password) => {
    const isValid = passwordValidation(password);
    setValidationState((prevState) => ({
      ...prevState,
      isValidPassword: isValid,
      passwordCaption: isValid ? VALID_PASSWORD : INVALID_PASSWORD,
    }));
    validatePasswordCheck(formState.passwordCheck, password);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));

    if (name === 'nickname') validateNickname(value);
    if (name === 'email') validateEmail(value);
    if (name === 'password') validatePassword(value);
    if (name === 'passwordCheck') validatePasswordCheck(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const info = {
      nickname: formState.nickname,
      email: formState.email,
      password: formState.password,
    };
    const res = await generalLogin(info);

    if (res.data.err) return setError(res.data.err);
    // error 없으면 모달로 push
    return router.push(
      `/alert/?status=${res.status}&message=${res.data}`,
      '/alert',
    );
  };

  return (
    <div className={signup.signup_container}>
      <div className={signup.signup_inner}>
        <div className={signup.signup_header}>
          <button
            onClick={() => router.back()}
            type="button"
            className={signup.signup_header_back}
          />
          <Link href={'/'} className={signup.signup_header_logo}>
            HighLightor
          </Link>
          <button
            onClick={() => router.push('/')}
            type="button"
            className={signup.signup_header_exit}
          />
        </div>
        <form onSubmit={handleSubmit} className={signup.signup_form}>
          {error && <p className={signup.signup_form_error}>{error}</p>}
          <input
            value={formState.nickname}
            onChange={handleChange}
            className={signup.signup_form_nickname}
            name="nickname"
            type="text"
            placeholder="닉네임"
            style={{
              borderColor: validationState.isValidNickname
                ? '#04e45f'
                : '#ff6060',
            }}
          />
          <p
            className={signup.signup_form_caption}
            style={{
              color: validationState.isValidNickname ? '#04e45f' : '#ff6060',
            }}
          >
            {validationState.nicknameCaption}
          </p>

          <input
            value={formState.email}
            onChange={handleChange}
            className={signup.signup_form_id}
            name="email"
            type="text"
            placeholder="Email"
            style={{
              borderColor: validationState.isValidEmail ? '#04e45f' : '#ff6060',
            }}
          />
          <p
            className={signup.signup_form_caption}
            style={{
              color: validationState.isValidEmail ? '#04e45f' : '#ff6060',
            }}
          >
            {validationState.emailCaption}
          </p>

          <input
            value={formState.password}
            onChange={handleChange}
            className={signup.signup_form_pw}
            name="password"
            type="password"
            placeholder="비밀번호"
            style={{
              borderColor: validationState.isValidPassword
                ? '#04e45f'
                : '#ff6060',
            }}
          />
          <p
            className={signup.signup_form_caption}
            style={{
              color: validationState.isValidPassword ? '#04e45f' : '#ff6060',
            }}
          >
            {validationState.passwordCaption}
          </p>

          <input
            value={formState.passwordCheck}
            onChange={handleChange}
            className={signup.signup_form_pw_check}
            name="passwordCheck"
            type="password"
            placeholder="비밀번호 확인"
            style={{
              borderColor: validationState.isValidPasswordCheck
                ? '#04e45f'
                : '#ff6060',
            }}
          />
          <p
            className={signup.signup_form_caption}
            style={{
              color: validationState.isValidPasswordCheck
                ? '#04e45f'
                : '#ff6060',
            }}
          >
            {validationState.passwordCheckCaption}
          </p>

          {validationState.isValidEmail &&
          validationState.isValidPassword &&
          validationState.isValidPasswordCheck ? (
            <button className={signup.signup_form_submit_active} type="submit">
              회원가입
            </button>
          ) : (
            <div className={signup.signup_form_submit_inactive}>회원가입</div>
          )}
        </form>
      </div>
    </div>
  );
}
