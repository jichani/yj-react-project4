import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

// 아웃렛은 안읽히는 것을 방지한다.
