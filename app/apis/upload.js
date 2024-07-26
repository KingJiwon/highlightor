import api from './index';

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

export default deleteCloudData;
