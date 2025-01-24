import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MobileNavbar from "./components/MobileNavbar";
import Hero from "./components/Hero";
import Explorer from "./components/Explorer";
import Footer from "./components/Footer";
import DinamicCards from "./components/DinamcCards";
import MobilePlayer from "./components/MobilePlayer";
import DesktopPlayer from "./components/DesktopPlayer";
import { Col, Row } from "react-bootstrap";
import DesktopNavBar from "./components/DesktopNavBar";

function App() {
  return (
    <Row>
      <Col xs={3} className="p-0 bg-navbar d-none d-lg-block">
        <DesktopNavBar />
      </Col>
      <Col xs={12} lg={9}>
        <DesktopPlayer />
        <MobileNavbar />
        <Hero />
        <DinamicCards />
        <Explorer />
        <Footer />
        <MobilePlayer />
      </Col>
    </Row>
  );
}

export default App;
