import Link from 'next/link';
import upload from '../../../styles/pages/upload.module.scss';

export default function page() {
  return (
    <>
      <div className={upload.discriptor_container}>
        <div className={upload.discriptor_inner}>
          <p className={upload.discriptor_logo}>HighLighter</p>
          <p className={upload.discriptor_ment}>
            선수를 선택하고 하이라이트 영상을 업로드해주세요
          </p>
        </div>
      </div>
      <div className={upload.uploader_container}>
        <div className={upload.uploader_inner}>
          <div className={upload.uploader_counter_container}>
            <p className={upload.uploader_counter}>11/11</p>
          </div>
          <div className={upload.uploader_main_container}>
            <div className={upload.uploader_btn_container}>
              <div className={upload.uploader_position_fw}>FW</div>
              <div className={upload.uploader_btn_upload}>
                <Link href={'/create_highlight/upload/search_modal'}>
                  선수 검색
                </Link>
                <Link href={'/'}>영상 업로드</Link>
              </div>
            </div>
            <div className={upload.uploader_player_container}>
              <div className={upload.uploader_player}>
                <img
                  className={upload.uploader_player_img}
                  src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p814243780.png"
                  alt="선수 이미지"
                />
                <p className={upload.uploader_player_name}>마르틴 외데고르</p>
              </div>
              <div className={upload.uploader_player}>
                <img
                  className={upload.uploader_player_img}
                  src="https://fco.dn.nexoncdn.co.kr/live/externalAssets/common/playersAction/p810243780.png"
                  alt="선수 이미지"
                />
                <p className={upload.uploader_player_name}>마르틴 외데고르</p>
              </div>
              <div className={upload.uploader_player}>
                <img
                  className={upload.uploader_player_img}
                  src="/images/test/player.jpg"
                  alt="선수 이미지"
                />
                <p className={upload.uploader_player_name}>마르틴 외데고르</p>
              </div>
            </div>
            <div className={upload.uploader_highlight}>
              <img src="/images/test/test_img.jpg" alt="테스트 이미지" />
            </div>
          </div>
          <div className={upload.uploader_main_container}>
            <div className={upload.uploader_btn_container}>
              <div className={upload.uploader_position_mf}>MF</div>
              <div className={upload.uploader_btn_upload}>
                <Link href={'/create_highlight/upload/search_modal'}>
                  선수 검색
                </Link>
                <Link href={'/'}>영상 업로드</Link>
              </div>
            </div>
            <div className={upload.uploader_player_container}>
              <div className={upload.uploader_player}>
                <img
                  className={upload.uploader_player_img}
                  src="/images/test/player.jpg"
                  alt="선수 이미지"
                />
                <p className={upload.uploader_player_name}>마르틴 외데고르</p>
              </div>
              <div className={upload.uploader_player}>
                <img
                  className={upload.uploader_player_img}
                  src="/images/test/player.jpg"
                  alt="선수 이미지"
                />
                <p className={upload.uploader_player_name}>마르틴 외데고르</p>
              </div>
            </div>
            <div className={upload.uploader_highlight}>
              <img src="/images/test/test_img.jpg" alt="테스트 이미지" />
            </div>
          </div>
          <div className={upload.uploader_main_container}>
            <div className={upload.uploader_btn_container}>
              <div className={upload.uploader_position_df}>DF</div>
              <div className={upload.uploader_btn_upload}>
                <Link href={'/create_highlight/upload/search_modal'}>
                  선수 검색
                </Link>
                <Link href={'/'}>영상 업로드</Link>
              </div>
            </div>
            <div className={upload.uploader_player_container}>
              <div className={upload.uploader_player}>
                <img
                  className={upload.uploader_player_img}
                  src="/images/test/player.jpg"
                  alt="선수 이미지"
                />
                <p className={upload.uploader_player_name}>마르틴 외데고르</p>
              </div>

              <div className={upload.uploader_player}>
                <img
                  className={upload.uploader_player_img}
                  src="/images/test/player.jpg"
                  alt="선수 이미지"
                />
                <p className={upload.uploader_player_name}>마르틴 외데고르</p>
              </div>
              <div className={upload.uploader_player}>
                <img
                  className={upload.uploader_player_img}
                  src="/images/test/player.jpg"
                  alt="선수 이미지"
                />
                <p className={upload.uploader_player_name}>마르틴 외데고르</p>
              </div>
              <div className={upload.uploader_player}>
                <img
                  className={upload.uploader_player_img}
                  src="/images/test/player.jpg"
                  alt="선수 이미지"
                />
                <p className={upload.uploader_player_name}>마르틴 외데고르</p>
              </div>
              <div className={upload.uploader_player}>
                <img
                  className={upload.uploader_player_img}
                  src="/images/test/player.jpg"
                  alt="선수 이미지"
                />
                <p className={upload.uploader_player_name}>마르틴 외데고르</p>
              </div>
            </div>
            <div className={upload.uploader_highlight}>
              <img src="/images/test/test_img.jpg" alt="테스트 이미지" />
            </div>
          </div>
          <div className={upload.uploader_main_container}>
            <div className={upload.uploader_btn_container}>
              <div className={upload.uploader_position_gk}>GK</div>
              <div className={upload.uploader_btn_upload}>
                <Link href={'/create_highlight/upload/search_modal'}>
                  선수 검색
                </Link>
                <Link href={'/'}>영상 업로드</Link>
              </div>
            </div>
            <div className={upload.uploader_player_container}>
              <div className={upload.uploader_player}>
                <img
                  className={upload.uploader_player_img}
                  src="/images/test/player.jpg"
                  alt="선수 이미지"
                />
                <p className={upload.uploader_player_name}>마르틴 외데고르</p>
              </div>
            </div>
            <div className={upload.uploader_highlight}>
              <img src="/images/test/test_img.jpg" alt="테스트 이미지" />
            </div>
          </div>
          <Link
            href={'/detail_highlight/1234'}
            className={upload.uploader_create_btn_container}
          >
            <p>하이라이트 생성</p>
          </Link>
        </div>
      </div>
    </>
  );
}
