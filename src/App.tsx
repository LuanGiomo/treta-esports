import { Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { About, Contact, Home, Shop, Teams } from "./pages";

function App() {
  return (
    <>
      <Header />
      <main className="container xl:max-w-7xl p-8 mx-auto">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teams" element={<Teams />}>
            <Route
              path=":gameName"
              element={<p className="text-zinc-300">Oi</p>}
            />
          </Route>
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
