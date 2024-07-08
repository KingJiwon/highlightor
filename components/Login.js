'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import login from '../styles/components/modal/loginModal.module.scss';

export default function Login() {
  const router = useRouter();
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

        <form className={login.login_form}>
          <input className={login.login_form_id} type="text" placeholder="ID" />
          <input
            className={login.login_form_pw}
            type="password"
            placeholder="비밀번호"
          />
          <button className={login.login_form_submit} type="submit">
            로그인
          </button>
        </form>
        <div className={login.login_menu}>
          <Link href={'/signup'}>회원가입</Link>
          <Link href={'/'}>ID찾기</Link>
          <Link href={'/'}>비밀번호 찾기</Link>
        </div>
        <div className={login.login_other}>
          <div className={login.login_others}> SNS 로그인 </div>
          <div className={login.login_others}> SNS 로그인 </div>
          <div className={login.login_others}> SNS 로그인 </div>
        </div>
      </div>
    </div>
  );
}
