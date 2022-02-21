import { LanguageContextProvider } from "./context/LanguageContext"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <LanguageContextProvider>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    </LanguageContextProvider>
  );
}

export default App;
