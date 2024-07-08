'use client';

import generalLogin from '@/app/apis/user';
import signup from '@/styles/components/modal/signupModal.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const router = useRouter();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const info = {
      id: event.target.id.value,
      password: event.target.password.value,
    };
    const res = await generalLogin(info);
    // 409도 200도 아닐때 에러 페이지
    router.push(`/alert/?status=${res.status}&message=${res.data}`, '/alert');
    return res;
    // 409 -> 오류메세지 모달에 띄워서 보내기 -> 가입 페이지로 back
    // 200 -> 가입완료 메세지 모달에 띄워서 보내기 -> 로그인 페이지로
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
