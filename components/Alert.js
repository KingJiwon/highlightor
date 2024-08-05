'use client';

import alert from '@/styles/components/modal/alertModal.module.scss';
import { useRouter } from 'next/navigation';

export default function Alert({ text }) {
  const router = useRouter();
  const handleAcceptOnclik = () => {
    router.push('/');
  };
  const handleCancelOnclik = () => {
    router.back();
  };
  return (
    <div className={alert.alert_container}>
      <p className={alert.alert_logo}>HighLightor</p>
      <p className={alert.alert_text}>{text}</p>
      <div className={alert.btn_container}>
        <button
          type="button"
          onClick={() => {
            handleAcceptOnclik();
          }}
          className={alert.accept_button}
        >
          확인
        </button>
        <button
          type="button"
          onClick={() => {
            handleCancelOnclik();
          }}
        >
          취소
        </button>
      </div>
    </div>
  );
}
