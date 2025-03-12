import Footer from "./components/Footer";
import HeroBanner from "./components/HeroBanner";
import Registration from "./components/Registration";

function App() {
  return (
    <div className="flex flex-col gap-100">
      <HeroBanner />
      <Registration />
      <Footer />
    </div>
  );
}

export default App;
