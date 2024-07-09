'use client';

import signup from '@/styles/components/modal/signupModal.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import generalLogin from '@/app/apis/user';
import { emailValidation, passwordValidation } from '@/util/validation';
import {
  NOT_VALID_EMAIL,
  NOT_VALID_PASSWORD,
  VALID_EMAIL,
  VALID_PASSWORD,
} from '@/util/variable';

export default function Signup() {
  const router = useRouter();

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [emailCaptionText, setEmailCaptionText] = useState(NOT_VALID_EMAIL);
  const [passwordCaptionText, setPasswordCaptionText] =
    useState(NOT_VALID_PASSWORD);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const emailCaptionRef = useRef();
  const passwordCaptionRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const info = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    const res = await generalLogin(info); // 409도 200도 아닐때 에러 페이지
    router.push(`/alert/?status=${res.status}&message=${res.data}`, '/alert');
    return res;
  };
  const onChangeEmail = () => {
    if (emailValidation(emailInputRef.current.value)) {
      emailInputRef.current.style.borderColor = '#04e45f';
      emailCaptionRef.current.style.color = '#04e45f';
      setEmailCaptionText(VALID_EMAIL);
      setIsValidEmail(true);
    } else {
      emailInputRef.current.style.borderColor = 'tomato';
      emailCaptionRef.current.style.color = 'tomato';
      setEmailCaptionText(NOT_VALID_EMAIL);
      setIsValidEmail(false);
    }
  };
  const onChangePassword = () => {
    if (passwordValidation(passwordInputRef.current.value)) {
      passwordInputRef.current.style.borderColor = '#04e45f';
      passwordCaptionRef.current.style.color = '#04e45f';
      setPasswordCaptionText(VALID_PASSWORD);
      setIsValidPassword(true);
    } else {
      passwordInputRef.current.style.borderColor = 'tomato';
      passwordCaptionRef.current.style.color = 'tomato';
      setPasswordCaptionText(NOT_VALID_PASSWORD);
      setIsValidPassword(false);
    }
  };

  return (
    <div className={signup.signup_container}>
      <div className={signup.signup_inner}>
        <div className={signup.signup_header}>
          <button
            onClick={() => {
              router.back();
            }}
            type="button"
            className={signup.signup_header_back}
          />
          <Link href={'/'} className={signup.signup_header_logo}>
            HighLightor
          </Link>
          <button
            onClick={() => {
              router.push('/');
            }}
            type="button"
            className={signup.signup_header_exit}
          />
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className={signup.signup_form}>
          <input
            ref={emailInputRef}
            onChange={() => onChangeEmail()}
            className={signup.signup_form_id}
            name="email"
            type="text"
            placeholder="Email"
          />
          <p className={signup.signup_form_id_caption} ref={emailCaptionRef}>
            {emailCaptionText}
          </p>

          <input
            ref={passwordInputRef}
            onChange={() => onChangePassword()}
            className={signup.signup_form_pw}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          <p className={signup.signup_form_id_caption} ref={passwordCaptionRef}>
            {passwordCaptionText}
          </p>
          {isValidEmail && isValidPassword ? (
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
