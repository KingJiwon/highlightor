'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import login from '../styles/components/modal/loginModal.module.scss';

export default function Login() {
  const router = useRouter();

  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const result = await signIn('credentials', {
      email: formState.email,
      password: formState.password,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
    } else {
      router.push('/');
    }
  };

  return (
    <div className={login.login_container}>
      <div className={login.login_inner}>
        <div className={login.login_header}>
          <Link className={login.login_header_logo} href={'/'}>
            HighLightor
          </Link>
          <button
            onClick={() => {
              router.back();
            }}
            type="button"
            className={login.login_header_exit}
          />
        </div>

        <form onSubmit={(e) => handleSubmit(e)} className={login.login_form}>
          {error && <p className={login.login_form_error}>{error}</p>}
          <input
            onChange={(e) => {
              handleChange(e);
            }}
            className={login.login_form_id}
            type="text"
            name="email"
            placeholder="E-mail"
          />

          <input
            onChange={(e) => {
              handleChange(e);
            }}
            className={login.login_form_pw}
            type="password"
            name="password"
            placeholder="비밀번호"
          />

          <button className={login.login_form_submit} type="submit">
            로그인
          </button>
        </form>

        <div className={login.login_menu}>
          <Link scroll={false} href={'/signup'}>
            회원가입
          </Link>
          <Link href={'/'}>ID찾기</Link>
          <Link href={'/'}>비밀번호 찾기</Link>
        </div>
        <div className={login.login_other}>
          <div className={login.login_others}> SNS 로그인(준비중..) </div>
          <div className={login.login_others}> SNS 로그인(준비중..) </div>
          <div className={login.login_others}> SNS 로그인(준비중..) </div>
        </div>
      </div>
    </div>
  );
}
