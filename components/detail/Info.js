'use client';

import { updateUserUpPost, getSessionUser } from '@/app/apis/user';
import {
  getPostData,
  updatePostUpCount,
  updatePostViewCount,
} from '@/app/apis/post';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import info from '@/styles/components/detail/info.module.scss';

export default function Info({ postId }) {
  const [isAlreadyUp, setIsAlreadyUp] = useState(false);
  const [upCount, setUpCount] = useState();
  const [viewCount, setViewCount] = useState();
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();
  const userEmail = session?.user?.email;

  useEffect(() => {
    const fetchUserUpPosts = async () => {
      if (userEmail) {
        try {
          const UserInfo = await getSessionUser(userEmail);
          setIsAlreadyUp(UserInfo.up_post.includes(postId));
        } catch (error) {
          console.error('Failed to fetch user up posts:', error);
        }
      }
      setLoading(false);
    };

    const fetchPostData = async () => {
      await updatePostViewCount(postId);
      const updatedPostData = await getPostData(postId);
      setUpCount(updatedPostData.up);
      setViewCount(updatedPostData.view);
    };

    fetchUserUpPosts();
    fetchPostData();
  }, [postId, userEmail]);

  const onClickUpBtn = async () => {
    if (isAlreadyUp) {
      setUpCount((prev) => prev - 1);
    } else {
      setUpCount((prev) => prev + 1);
    }
    updateUserUpPost(userEmail, postId, isAlreadyUp);
    updatePostUpCount(postId, isAlreadyUp);
    setIsAlreadyUp(!isAlreadyUp);
  };
  if (loading) {
    return <></>;
  }
  return (
    <>
      <p className={info.info}>
        추천{upCount} 조회{viewCount}
      </p>
      {session ? (
        <Image
          className={info.btn_up}
          onClick={onClickUpBtn}
          width={30}
          height={30}
          alt="up"
          src={isAlreadyUp ? '/icon/normal/up_fill.svg' : '/icon/normal/up.svg'}
        />
      ) : (
        <></>
      )}
    </>
  );
}
