'use client';

import { deletePostData } from '@/app/apis/post';
import { deleteCloudData } from '@/app/apis/upload';
import { useAlert } from '@/hooks/AlertContext';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import postControl from '@/styles/components/detail/postControl.module.scss';
import { useSession } from 'next-auth/react';

export default function PostControlBtn({ postId, publicId, author }) {
  const { data: session } = useSession();
  const router = useRouter();
  const { setMessage } = useAlert();
  const handleClickDelete = async () => {
    try {
      await deleteCloudData(publicId);
      const res = await deletePostData(postId);
      if (res.deletedCount === 1) {
        setMessage('삭제되었습니다');
        return router.push('/alert');
      }
      return res;
    } catch (err) {
      setMessage('삭제에 실패했습니다.');
      return router.push('/alert');
    }
  };
  if (!session || session.user.email !== author) {
    return <></>;
  }
  return (
    <>
      <Link
        className={postControl.btn_modify}
        href={`/modify_highlight/${postId}`}
      >
        <Image
          alt="수정"
          width={15}
          height={15}
          src={'/icon/normal/edit.svg'}
        />
        <p>수정</p>
      </Link>
      <button
        className={postControl.btn_delete}
        type="button"
        onClick={() => {
          handleClickDelete(postId);
        }}
      >
        <Image
          alt="삭제"
          width={15}
          height={15}
          src={'/icon/normal/trash.svg'}
        />
        <p>삭제</p>
      </button>
    </>
  );
}
