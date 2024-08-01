'use client';

import { updateUserUpPost, getSessionUser } from '@/app/apis/user';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import upBtn from '@/styles/components/detail/upBtn.module.scss';

export default function BtnUp({ postId, session }) {
  const [isUpPost, setIsUpPost] = useState(false);
  const [loading, setLoading] = useState(true);
  const userEmail = session?.user?.email;

  useEffect(() => {
    const fetchUserUpPosts = async () => {
      if (userEmail) {
        try {
          const UserInfo = await getSessionUser(userEmail);
          setIsUpPost(UserInfo.up_post.includes(postId));
        } catch (error) {
          console.error('Failed to fetch user up posts:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchUserUpPosts();
  }, [postId, userEmail]);

  const onClickUpBtn = async () => {
    setIsUpPost(!isUpPost);

    updateUserUpPost(userEmail, postId, isUpPost);
  };
  if (loading) {
    return <></>;
  }
  return (
    <>
      <Image
        className={upBtn.btn_up}
        onClick={onClickUpBtn}
        width={30}
        height={30}
        alt="up"
        src={isUpPost ? '/icon/normal/up_fill.svg' : '/icon/normal/up.svg'}
      />
    </>
  );
}
