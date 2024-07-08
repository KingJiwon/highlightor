import Alert from '@/components/Alert';
import Modal from '@/components/Modal';

export default function page({ text }) {
  return (
    <Modal>
      <Alert text={`${text}`} />
    </Modal>
  );
}
