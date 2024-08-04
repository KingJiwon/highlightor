import api from './index';

const generalLogin = async (info) => {
  try {
    const res = await api.post('/api/auth/signup', info);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

const getSessionUser = async (email) => {
  try {
    const res = await api.get(`/api/user/getSessionUser/${email}`);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

const updateUserUpPost = async (userEmail, postId, isAlreadyUp) => {
  try {
    const res = await api.patch('/api/user/upList', {
      userEmail,
      postId,
      isAlreadyUp,
    });
    return res.status;
  } catch (err) {
    return err.response;
  }
};

const getUserHighlight = async (email) => {
  try {
    const res = await api.get(`/api/user/getUserHighlight/${email}`);
    return res.data;
  } catch (err) {
    return err.response;
  }
};

export { generalLogin, getSessionUser, updateUserUpPost, getUserHighlight };
