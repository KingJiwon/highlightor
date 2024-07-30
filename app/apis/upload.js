import api from './index';

const uploadSquad = async (squad, publicId, email, nickname, league, team) => {
  try {
    const res = await api.post('/api/upload/uploadSquad', {
      squad,
      publicId,
      author: email,
      nickname,
      league,
      team,
    });
    return res;
  } catch (err) {
    return err;
  }
};

const deleteCloudData = async (publicId) => {
  try {
    const res = await Promise.all(
      publicId.map((id) =>
        api.post('/api/upload/delete-cloudinary', { publicId: id }),
      ),
    );
    return res;
  } catch (err) {
    return err;
  }
};

export { deleteCloudData, uploadSquad };
