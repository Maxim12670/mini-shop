import { Outlet } from "react-router-dom";
import "./App.scss";
import { SpriteLoader } from "./shared/ui";
import { Header, Footer } from "./widgets/ui";

function App() {
  return (
    <>
      <SpriteLoader />
      <main
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <Outlet />
        <Footer />
      </main>
    </>
  );
}

export default App;
