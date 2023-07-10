import { Link } from "react-router-dom";

export default function AdminButton({ href }) {
  return (
    <div className="w-full flex justify-end px-2">
      <Link to={href}>
        <button className="px-4 py-1 border border-neutral-300 rounded text-neutral-700 hover:border-500 hover:shadow-sm">글쓰기</button>
      </Link>
    </div>
  );
}
