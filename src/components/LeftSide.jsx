import FacebookAsset from "./asset/FacebookAsset";
import InstaAsset from "./asset/InstaAsset";
import NaverAsset from "./asset/NaverAsset";
import KakaoAsset from "./asset/KakaoAsset";
import { Link } from "react-router-dom";

export default function LeftSide() {
  const SNS_ITEMS = [
    { icon: <NaverAsset />, link: "https://naver.com" },
    { icon: <FacebookAsset />, link: "https://facebook.com" },
    { icon: <InstaAsset />, link: "https://facebook.com" },
    { icon: <KakaoAsset />, link: "https://facebook.com" },
  ];

  return (
    <div className="flex flex-col w-full space-y-6 items-center">
      {SNS_ITEMS.map(({ icon, link }) => (
        <Link to={link} key={link}>
          <div className="w-10 h-10 border border-neutral-300 rounded-full flex justify-center items-center group overflow-hidden">{icon}</div>
        </Link>
      ))}
    </div>
  );
}
