import LogoAsset from "./asset/logoAsset";

export default function Footer() {
  return (
    <div className="w-full flex justify-center pt-8 px-2">
      <div className="w-full">
        <div className="grid grid-cols-5">
          {/* 1번째 */}
          <div className="w-full space-y-2">
            <p>개인정보처리방침</p>
            <p>이용약관</p>
            <p>이메일무단수집거부</p>
          </div>
          {/* 2번째 */}
          <div className="w-full space-y-2">
            <p>로그인</p>
            <p>회원가입</p>
            <p>오시는길</p>
          </div>
          {/* 3번째 */}
          <div className="w-full space-y-2">
            <div>
              <LogoAsset width="w-24" />
            </div>
            <p>우) 41585 대구광역시 북구 호암로 15</p>
            <p>T. 053-666-6000 F. 053-666-6019</p>
          </div>
          {/* 4번째 */}
        </div>
      </div>
    </div>
  );
}
