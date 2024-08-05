import Image from "next/image";
import Herosection from "../components/home/Herosection";
import OurOffers from "@/components/home/OurOffers";
import Categories from "@/components/home/Categories";
import Certification from "@/components/home/Certification";
import GallerySlider from "@/components/home/GallerySlider";
import LocationMap from "@/components/home/LocationMap";

export default function Home() {
  return (
    <main className="">
      <Herosection />
      <OurOffers />
      <Categories />
      <Certification />
      <GallerySlider />
      <LocationMap />
    </main>
  );
}
