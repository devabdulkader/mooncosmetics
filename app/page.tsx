import Image from "next/image";
import Herosection from "../components/home/Herosection";
import OurOffers from "@/components/home/OurOffers";
import Categories from "@/components/home/Categories";
import Certification from "@/components/home/Certification";
import Gallery from "@/components/home/Gallery";
import LocationMap from "@/components/home/LocationMap";
import FAQ from "@/components/common/FAQ";
import Achievement from "@/components/home/Achievement";
import Testimonial from "@/components/home/Testimonial";

export default function Home() {
  return (
    <main className="">
      <Herosection />
      <OurOffers />
      <Categories />
      <Certification />
      <Achievement />
      <Gallery />
      <Testimonial />
      <FAQ />
      <LocationMap />
    </main>
  );
}
