import api from './index';

const getPostData = async (postId) => {
  try {
    const res = await api.get(`/api/post/id/${postId}`);
    return res.data;
  } catch (err) {
    return err;
  }
};

const getTopPosts = async () => {
  try {
    const res = await api.get('/api/post/getTopPosts');
    return res.data;
  } catch (err) {
    return err;
  }
};

const getLeaguePostData = async (league) => {
  try {
    const res = await api.get(`/api/post/league/${league}`);
    return res.data;
  } catch (error) {
    return error;
  }
};

const updatePostUpCount = async (postId, isAlreadyUp) => {
  try {
    const res = await api.patch('api/post/patchUpCount', {
      postId,
      isAlreadyUp,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

const updatePostViewCount = async (postId) => {
  try {
    const res = await api.patch('api/post/patchViewCount', {
      postId,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

const modifyPostData = async (postId, squad, publicId) => {
  try {
    const res = await api.patch('api/post/modifyPostData', {
      postId,
      squad,
      publicId,
    });
    return res.data;
  } catch (error) {
    return error;
  }
};

export {
  getPostData,
  getLeaguePostData,
  updatePostUpCount,
  updatePostViewCount,
  getTopPosts,
  modifyPostData,
};
