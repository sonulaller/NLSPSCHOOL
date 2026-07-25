import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageHeader from "@/components/layout/PageHeader";
import NoticeBoard from "@/components/sections/NoticeBoard";

export default function NoticeBoardPage() {
  return (
    <div className="flex flex-col min-h-screen">
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
