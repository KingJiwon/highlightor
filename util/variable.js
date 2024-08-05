// signup
const INVALID_EMAIL = '알맞은 형식의 메일주소를 입력해주세요';
const VALID_EMAIL = '알맞은 형식의 메일 주소입니다.';
const INVALID_PASSWORD =
  '비밀번호는 8자이상 특수문자, 영문자, 숫자가 포함되어야 합니다.';
const VALID_PASSWORD = '사용가능한 비밀번호입니다.';
const INVALID_PASSWORDCHECK = '비밀번호를 한번 더 입력해주세요';
const VALID_PASSWORDCHECK = '비밀번호 확인이 완료되었습니다';
const INVALID_NICKNAME = '2-10자의 한글, 영문, 숫자만 가능합니다.';
const VALID_NICKNAME = '사용 가능한 닉네임입니다.';

// searchPlayer
const EMPTY_SEARCH_INPUT = '검색어를 입력해주세요';
const CANNOT_FIND_PLAYER = '해당 선수를 찾을 수 없습니다';

// upload
const TOO_MANY_PLAYER_IN_SQUAD = '스쿼드는 11명 이상으로 구성할 수 없습니다';
const TOO_MANY_PLAYER_IN_POSITION =
  '한 포지션에 5명 이상의 선수를 구성할 수 없습니다.';
const TOO_MANY_PLAYER_IN_GK = 'GK 포지션은 최대 1명으로 구성 가능합니다.';
const EXCEED_FILE_SIZE = '파일 크기가 10MB를 초과합니다.';
const NOT_ALLOWED_FILE =
  '허용되지 않은 파일 형식입니다. 비디오 파일만 업로드 할 수 있습니다.';
const CANNOT_DELETE_CLOUD_FILE = '파일 삭제 실패';
const CANNOT_UPLOAD_CLOUD_FILE = '업로드 실패';
const CANNOT_UPLOAD_SQUAD = '오류로 인해 스쿼드를 업로드하지 못했습니다.';

// modify
const CANNOT_PULL_DATA = '데이터를 가져오는데 실패했습니다. 다시 시도해주세요';
const CANNOT_MODIFY_SQUAD = '오류로 인해 스쿼드를 수정할 수 없습니다.';
const NOT_CHANGE = '변경된 사항이 없습니다.';

export {
  INVALID_EMAIL,
  VALID_EMAIL,
  INVALID_PASSWORD,
  VALID_PASSWORD,
  INVALID_PASSWORDCHECK,
  VALID_PASSWORDCHECK,
  INVALID_NICKNAME,
  VALID_NICKNAME,
  CANNOT_FIND_PLAYER,
  EMPTY_SEARCH_INPUT,
  TOO_MANY_PLAYER_IN_SQUAD,
  TOO_MANY_PLAYER_IN_POSITION,
  TOO_MANY_PLAYER_IN_GK,
  EXCEED_FILE_SIZE,
  NOT_ALLOWED_FILE,
  CANNOT_UPLOAD_CLOUD_FILE,
  CANNOT_DELETE_CLOUD_FILE,
  CANNOT_UPLOAD_SQUAD,
  CANNOT_PULL_DATA,
  CANNOT_MODIFY_SQUAD,
  NOT_CHANGE,
};
