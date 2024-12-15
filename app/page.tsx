import Customer from "./components/Customer";
import DressStyle from "./components/DressStyle";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import TopSelling from "./components/TopSelling";
import LogoSection from "./components/LogoSection";

export default function Home() {
  return (
    <div className="max-w-full h-full flex-grow justify-start items-center">
      <Hero />
      <LogoSection />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Customer />
    </div>
  );
}
