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
            <Route path=":name" element={<p>Oi</p>} />
          </Route>
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
