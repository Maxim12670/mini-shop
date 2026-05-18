import { Outlet } from "react-router-dom";
import "./App.scss";
import { MainPage } from "./page";
import { SpriteLoader } from "./shared/ui";
import { Header, Footer } from "./widgets/ui";

function App() {
  return (
    <>
      <SpriteLoader />
      <main>
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
