import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

function App() {
  return (
    <div className="font-SpaceGrotesk h-auto bg-[url('./images/bg.png')]">
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}

export default App;
