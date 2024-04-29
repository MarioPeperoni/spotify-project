import ChatBox from "./components/ChatBox";
import DrawingSection from "./components/DrawingSection";

function App() {
  return (
    <section className="flex flex-col justify-center gap-10 p-10 xl:flex-row">
      <DrawingSection />
      <ChatBox />
    </section>
  );
}