import api from './index';

// 선수 고유식별자 메타데이터 가져오기
const getPlayerData = async () => {
  try {
    const res = await api.get(
      'https://open.api.nexon.com/static/fconline/meta/spid.json',
      {
        headers: { 'x-nxopen-api-key': process.env.NEXON_API_KEY },
      },
    );
    return res;
  } catch (err) {
    return console.error(err);
  }
};

// 시즌 메타데이터 가져오기

const getSeasonData = async () => {
  try {
    const res = await api.get(
      'https://open.api.nexon.com/static/fconline/meta/seasonid.json',
      {
        headers: { 'x-nxopen-api-key': process.env.NEXON_API_KEY },
      },
    );
    return res;
  } catch (err) {
    return console.error(err);
  }
};

export { getPlayerData, getSeasonData };
