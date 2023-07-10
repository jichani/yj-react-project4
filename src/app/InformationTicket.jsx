import InformationTicketTab1 from "../components/InformationTicketTab1";
import Layout from "../components/Layout";
import LayoutContents from "../components/LayoutContents";
import LayoutTab from "../components/LayoutTab";
import SubTitle from "../components/SubTitle";

const tabLists = [
  { title: "예매안내", children: <InformationTicketTab1 /> },
  { title: "Second", children: "Second element" },
  { title: "Third", children: "Third element" },
  { title: "Four", children: "Four element" },
];

export default function InformationTicket() {
  return (
    <Layout>
      <SubTitle FirstTitle={"공연안내"} SecondTitle={"티켓정보"} />
      <LayoutContents title={"티켓정보"}>
        {/* 탭 레이아웃 */}
        <LayoutTab tabLists={tabLists} numbers="grid-cols-4" />
      </LayoutContents>
    </Layout>
  );
}
