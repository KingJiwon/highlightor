'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import alert from '../styles/components/modal/alertModal.module.scss';

export default function Alert() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const statusCode = searchParams.get('status');
  const message = searchParams.get('message');

  const registerAlertEvent = (e) => {
    e.preventDefault();
    if (statusCode === '200') {
      router.push('/login');
    }
    if (statusCode === '409') {
      router.back();
    }
  };
  return (
    <div className={alert.alert_container}>
      <p className={alert.alert_logo}>HighLightor</p>
      <p className={alert.alert_text}>{message}</p>
      <button
        className={alert.alert_button}
        onClick={(e) => {
          registerAlertEvent(e);
        }}
      >
        확인
      </button>
    </div>
  );
}
