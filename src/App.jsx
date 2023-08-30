import { Route, Routes, BrowserRouter } from "react-router-dom";
import Index from "./pages";
import Biblio from "./pages/create";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="create" element={<Create />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
