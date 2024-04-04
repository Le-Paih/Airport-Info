import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Header from "./components/Header";
import { DarkModeProvider } from "./context/DarkModeContext";
import Footer from "./components/Footer";

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route>
            <Route path="/" element={<MainPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;
