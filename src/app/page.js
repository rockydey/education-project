import Banner from "@/components/HomeComponents/Banner";
import CampusLife from "@/components/HomeComponents/CampusLife";
import ChooseUs from "@/components/HomeComponents/ChooseUs";
import LatestNews from "@/components/HomeComponents/LatestNews";

export default function Home() {
  return (
    <main className="bg-[#FFF7F7]">
      <Banner />
      <LatestNews />
      <ChooseUs />
      <CampusLife />
    </main>
  );
}
