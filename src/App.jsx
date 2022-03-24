import { LanguageContextProvider } from "./context/LanguageContext"
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";



function App() {
  return (
    <LanguageContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </LanguageContextProvider>
  );
}

export default App;
