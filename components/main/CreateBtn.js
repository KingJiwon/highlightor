'use client';

import createBtn from '@/styles/components/main/createBtn.module.scss';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function CreatBtn() {
  const { data: session } = useSession();
  const router = useRouter();
  const handleClickCreate = (e) => {
    e.preventDefault();
    if (session) {
      router.push('/create_highlight/league');
    } else {
      router.push('/login');
    }
  };
  return (
    <button
      type="button"
      onClick={(e) => {
        handleClickCreate(e);
      }}
      className={createBtn.create_highlight_btn}
    >
      내 구단 하이라이트 만들기
    </button>
  );
}
