import api from './index';

const generalLogin = async (info) => {
  try {
    const res = await api.post('/api/auth/signup', info);
    return res;
  } catch (err) {
    // if (err.response.status === 404) {
    //   return 에러 페이지
    // }
    return err.response;
  }
};

export default generalLogin;
