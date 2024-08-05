'use client';

import { useAlert } from '@/hooks/AlertContext';
import Alert from '@/components/Alert';
import Modal from '@/components/Modal';

export default function Page() {
  const { message } = useAlert();
  console.log(message);
  return (
    <Modal>
      <Alert text={message} />
    </Modal>
  );
}
