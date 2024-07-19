import Loading from '@/components/Loading';
import Modal from '@/components/Modal';
import SearchPlayer from '@/components/modals/SearchPlayer';

export default function page() {
  return (
    <Modal>
      <SearchPlayer fallback={<Loading />} />
    </Modal>
  );
}
