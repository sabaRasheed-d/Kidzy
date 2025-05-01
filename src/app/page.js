"use client"
import CategoriesSection from "./CategoriesSection/page";
import CategoriesSectionA from "./CategoriesSectionA/page";
// import Header from "./Header/page";
import HeroBanner from "./HeroBanner/page";
import LegoBanner from "./LegoBanner/page";
import Carousel from "./Carousel/page";
import ProductCarousel from "./ProductCarousel/page";
import GirlsProductCarousel from "./GirlsProductCarousel/page";
import LittleTikesCarousel from "./LittleTikesCarousel/page";
import BannerA from "./BannerA/page";
import BrandGrid from "./BrandGrid/page";
// import Footer from "./Footer/page";


export default function Home() {
  return (
    <>
    {/* <Header /> */}
    <HeroBanner />
    <CategoriesSection />
    <CategoriesSectionA />
    <LegoBanner />
    <Carousel />
    <ProductCarousel />
    <GirlsProductCarousel />
    <LittleTikesCarousel />
    <BannerA />
    <BrandGrid />
    {/* <Footer /> */}
    </>
  );
}
