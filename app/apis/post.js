import api from './index';

const getPostData = async (postId) => {
  try {
    const res = await api.get(`/api/post/id/${postId}`);
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

export { getPostData, getLeaguePostData };
