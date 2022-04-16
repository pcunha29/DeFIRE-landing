import Header from "./components/header";
import Content from "./components/content";

function App() {
  return (
    <div className="font-SpaceGrotesk h-auto bg-[url('./images/bg.png')]">
      <div>
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
