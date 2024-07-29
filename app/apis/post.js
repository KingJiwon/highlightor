import api from './index';

const getPostData = async (postId) => {
  try {
    const res = await api.get(`/api/post/${postId}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

export default getPostData;
