'use client';

import { useAlert } from '@/hooks/AlertContext';
import alert from '@/styles/components/modal/alertModal.module.scss';
import { useRouter } from 'next/navigation';

export default function Alert() {
  const router = useRouter();
  const { message } = useAlert();

  return (
    <div className={alert.alert_container}>
      <p className={alert.alert_logo}>HighLightor</p>
      <p className={alert.alert_text}>{message}</p>
      <div className={alert.btn_container}>
        <button
          type="button"
          onClick={() => {
            router.push('/');
          }}
          className={alert.accept_button}
        >
          확인
        </button>
      </div>
    </div>
  );
}
