import Home4 from "./Components/Home/home4";
import DynamicLine from "./Components/DynamicLine";
export default function Home() {
  return (
    <main className="relative" style={{ position: 'relative' }}>
      <div className="fixed inset-0 z-0">
        <DynamicLine />
      </div>
      <Home4 />
    </main>
  );
}
