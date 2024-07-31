'use client';

import { updateUserUpPost } from '@/app/apis/user';
import Image from 'next/image';
import { useState } from 'react';

import upBtn from '@/styles/components/detail/upBtn.module.scss';

export default function BtnUp({ postId, sessionUserInfo }) {
  const [isUpPost, setIsUpPost] = useState(
    sessionUserInfo?.up_post.includes(postId),
  );
  const userEmail = sessionUserInfo?.email;
  const onClickUpBtn = () => {
    setIsUpPost((prev) => !prev);
    updateUserUpPost(userEmail, postId, isUpPost);
  };
  return (
    <>
      {isUpPost ? (
        <Image
          className={upBtn.btn_up}
          onClick={onClickUpBtn}
          width={30}
          height={30}
          alt="up"
          src={'/icon/normal/up_fill.svg'}
        />
      ) : (
        <Image
          className={upBtn.btn_up}
          onClick={onClickUpBtn}
          width={30}
          height={30}
          alt="up"
          src={'/icon/normal/up.svg'}
        />
      )}
    </>
  );
}
