import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function EnergyHeader() {
  return (
    <Navbar className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      <Container>
        <Navbar.Brand href="#home">Shell Demo</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default EnergyHeader;
