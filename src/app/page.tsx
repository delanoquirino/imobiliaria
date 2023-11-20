import { Banner } from "@/components/Banner";
import { HouseList } from "@/components/HouseList";



export default function Home() {
  return (
    <main className="min-h-[1800px]">
      <Banner />
      <HouseList/>
    </main>
  );
}
