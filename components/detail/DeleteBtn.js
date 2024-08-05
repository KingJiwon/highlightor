'use client';

import { deletePostData } from '@/app/apis/post';
import { deleteCloudData } from '@/app/apis/upload';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function DeleteBtn({ postId, publicId }) {
  const router = useRouter();
  const handleClickDelete = async () => {
    try {
      await deleteCloudData(publicId);
      const res = await deletePostData(postId);
      if (res.deletedCount === 1) {
        router.push('/');
      }
      return res;
    } catch (err) {
      return console.error(err);
    }
  };
  return (
    <button
      type="button"
      onClick={() => {
        handleClickDelete(postId);
      }}
    >
      <Image alt="삭제" width={15} height={15} src={'/icon/normal/trash.svg'} />
      <p>삭제</p>
    </button>
  );
}
