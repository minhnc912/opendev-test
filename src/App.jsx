import { useRef } from "react";
import Entertaiment from "./components/Entertaiment";
import Footer from "./components/Footer";
import GiftVoucher from "./components/GiftVoucher";
import HeroBanner from "./components/HeroBanner";
import Registration from "./components/Registration";

function App() {
  const topRef = useRef(null);
  return (
    <div ref={topRef} className="flex flex-col gap-100">
      <HeroBanner />
      <Registration />
      <Entertaiment />
      <GiftVoucher />
      <Footer topRef={topRef} />
    </div>
  );
}

export default App;
