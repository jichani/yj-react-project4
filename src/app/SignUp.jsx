import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";

export default function SignUp() {
  return (
    <Layout>
      <LayoutContents>
        <table className="table_top w-full">
          <tbody>
            <tr>
              <td className="table_td border-l-0">회원아이디</td>
              <td className="table_td border-l-0">
                <input type="text" className="border border-neutral-300 p-2" />
              </td>
            </tr>
            <tr>
              <td className="table_td border-l-0">비밀번호</td>
              <td className="table_td border-l-0">
                <input type="password" className="border border-neutral-300 p-2" />
              </td>
            </tr>
            <tr>
              <td className="table_td border-l-0">비밀번호 확인</td>
              <td className="table_td border-l-0">
                <input type="password" className="border border-neutral-300 p-2" />
              </td>
            </tr>
            <tr>
              <td className="table_td border-l-0">이름</td>
              <td className="table_td border-l-0">
                <input type="text" className="border border-neutral-300 p-2" />
              </td>
            </tr>
            <tr>
              <td className="table_td border-l-0">휴대전화</td>
              <td className="table_td border-l-0">
                <input type="text" className="border border-neutral-300 p-2" />
              </td>
            </tr>
            <tr>
              <td className="table_td border-l-0">이메일</td>
              <td className="table_td border-l-0">
                <input type="email" className="border border-neutral-300 p-2" />
              </td>
            </tr>
            <tr>
              <td className="table_td border-l-0">주소</td>
              <td>
                <div>
                  <input disabled type="text" className="border border-neutral-300 p-2 bg-neutral-50" />
                  <button type="button" className="px-4 py-2 rounded text-sm border border-neutral-300 hover:shadow-sm">
                    우편번호검색
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </LayoutContents>
    </Layout>
  );
}
