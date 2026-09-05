import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Seo from "@/SCO.md/Seo";
import PageHeader from "@/components/layout/PageHeader";
import NoticeBoard from "@/components/sections/NoticeBoard";

export default function NoticeBoardPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Seo
        title="Notice Board & Updates | New Little Star Public School (NLSP School), Kasan"
        description="Notice board and announcements of New Little Star Public School (NLSP School), Kasan, District Kaithal, Haryana — latest circulars, events, holidays and important updates for parents and students."
      />
      <Navbar />
      <main className="flex-1">
        <PageHeader
          label="Announcements"
          title="Notice Board"
          subtitle="Stay updated with the latest circulars, events, and important announcements."
        />
        <NoticeBoard />
      </main>
      <Footer />
    </div>
  );
}
