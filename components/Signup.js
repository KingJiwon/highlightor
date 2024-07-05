import signup from '@/styles/components/modal/signupModal.module.scss';
import Link from 'next/link';

export default function Signup() {
  return (
    <div className={signup.signup_container}>
      <div className={signup.signup_inner}>
        <Link href={'/'} className={signup.signup_header}>
          HighLightor
        </Link>
        <form
          method="POST"
          action="/api/auth/signup"
          className={signup.signup_form}
        >
          <input
            className={signup.signup_form_id}
            name="id"
            type="text"
            placeholder="ID"
          />
          <input
            className={signup.signup_form_pw}
            name="password"
            type="password"
            placeholder="비밀번호"
          />
          <button className={signup.signup_form_submit} type="submit">
            회원가입
          </button>
        </form>
      </div>
    </div>
  );
}
