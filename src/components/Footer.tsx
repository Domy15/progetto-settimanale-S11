import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#323232", paddingBottom: '4em' }} className="pt-3 text-white">
      <Container>
        <div className="d-flex">
          <a>Italia</a>
          <p className="text-secondary">&nbsp;|&nbsp;</p>
          <a className="text-secondary text-decoration-none">English (UK)</a>
        </div>
        <p className="text-secondary m-0">Copyright &copy; 2024 <span className="text-white">Apple Inc.</span> Tutti i diritti riservati.</p>
        <ul className="nav nav-pills mb-5">
            <li className="nav-item mx-2 border-start" style={{height: '2em'}}>
                <a className="nav-link text-white" href="#">Condizioni dei servizi internet</a>
            </li>
            <li className="nav-item mx-2 border-start" style={{height: '2em'}}>
                <a className="nav-link text-white" href="#">Apple Music e privacy</a>
            </li>
            <li className="nav-item mx-2 border-start" style={{height: '2em'}}>
                <a className="nav-link text-white" href="#">Avviso sui cookie</a>
            </li>
            <li className="nav-item mx-2 border-start" style={{height: '2em'}}>
                <a className="nav-link text-white" href="#">Supporto</a>
            </li>
            <li className="nav-item mx-2 border-start" style={{height: '2em'}}>
                <a className="nav-link text-white" href="#">Feedback</a>
            </li>
        </ul>
      </Container>
    </div>
  );
};

export default Footer;
