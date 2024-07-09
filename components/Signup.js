'use client';

import generalLogin from '@/app/apis/user';
import { emailValidation, passwordValidation } from '@/util/validation';
import signup from '@/styles/components/modal/signupModal.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';

export default function Signup() {
  const router = useRouter();
  const [validatedEmail, setValidatedEmail] = useState(false);
  const [validatedPassword, setValidatedPassword] = useState(false);

  const emailInputRef = useRef();
  const passwordInputRef = useRef();

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
      setValidatedEmail(true);
    } else {
      emailInputRef.current.style.borderColor = 'tomato';
      setValidatedEmail(false);
    }
  };
  const onChangePassword = () => {
    if (passwordValidation(passwordInputRef.current.value)) {
      passwordInputRef.current.style.borderColor = '#04e45f';
      setValidatedPassword(true);
    } else {
      passwordInputRef.current.style.borderColor = 'tomato';
      setValidatedPassword(false);
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

          <input
            ref={passwordInputRef}
            onChange={() => onChangePassword()}
            className={signup.signup_form_pw}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          {validatedEmail && validatedPassword ? (
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
