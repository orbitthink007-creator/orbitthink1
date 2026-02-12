import Home4 from "./Components/Home/home4";
import DynamicLine from "./Components/DynamicLine";
import ParallaxPinned from "./Components/Parallax/ParallaxPinned";

export default function Home() {
  return (
    <main className="relative" style={{ position: 'relative' }}>
      <div className="fixed inset-0 z-0">
        {/* <DynamicLine /> */}
      </div>
      {/* <ParallaxPinned smooth={1.2} pinSpacing={true}> */}
        <Home4 />
      {/* </ParallaxPinned> */}
    </main>
  );
}
