import Logo from "../png/logo.png";

export default function LogoAsset({ width }) {
  return (
    <>
      <img className={`${width}`} src={Logo} alt="메인로고" />
    </>
  );
}
