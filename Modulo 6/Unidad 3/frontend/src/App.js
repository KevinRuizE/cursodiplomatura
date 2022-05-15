import "./styles/components/layout/Normalize.css"
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Nav from "./components/layout/Nav";
import ContactoPage from "./pages/ContactoPage";
import HomePage from "./pages/HomePage";
import NosotrosPage from "./pages/NosotrosPage";
import NovedadesPage from "./pages/NovedadesPage";
import ServiciosPage from "./pages/ServiciosPage";
import GaleriaPage from "./pages/GaleriaPage";

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Nav/>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/nosotros" exact component={NosotrosPage} />
        <Route path="/servicios" exact component={ServiciosPage} />
        <Route path="/galeria" exact component={GaleriaPage} />
        <Route path="/novedades" exact component={NovedadesPage} />
        <Route path="/contacto" exact component={ContactoPage} />
      </Switch>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
