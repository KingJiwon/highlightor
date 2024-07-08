import api from './index';

const generalLogin = async (info) => {
  try {
    const res = await api.post('/api/auth/signup', info);
    return res;
  } catch (err) {
    return err.response;
  }
};

export default generalLogin;
