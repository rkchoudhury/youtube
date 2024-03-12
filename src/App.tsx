import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="">
      <Header />
      <div className="flex">
        <SideBar />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
