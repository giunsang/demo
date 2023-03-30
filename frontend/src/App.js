import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Image, Container, Row, Col } from "react-bootstrap";
import "./styles.css";
import home from "./home.png";

function Sidebar({ children }) {
  return (
   <Nav className="flex-column bg-light sidebar">
         <Nav.Item>
           <Nav.Link href="#">
             <Image src={home} width="30" height="30" style={{marginRight: '5px'}} />
             <span className="ml-2 text-black" style={{marginLeft: '5px'}}>first menu</span>
           </Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="#">
             <Image src={home} width="30" height="30" style={{marginRight: '5px'}} />
             <span className="ml-2 text-black" style={{marginLeft: '5px'}}>second menu</span>
           </Nav.Link>
         </Nav.Item>
         <Nav.Item>
           <Nav.Link href="#">
             <Image src={home} width="30" height="30" style={{marginRight: '5px'}} />
             <span className="ml-2 text-black" style={{marginLeft: '5px'}}>third menu</span>
           </Nav.Link>
         </Nav.Item>
   </Nav>
  );
}
function Content({ children }) {
  return (
    <Col className="bg-secondary">
      {children}
    </Col>
  );
}

function App() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    fetch("/hello")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setMessage(data);
      });
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col sm={2} md={3} lg={2}>
          <Sidebar />
        </Col>
        <Col sm={10} md={9} lg={10}>
          <Row>
            <Col>
              <h1>first menu</h1>
            </Col>
          </Row>
          <Row>
            <Content>
              <Container>
                <Row>
                  <Col>
                        <div>empty space you can use anything</div>
                    <div>empty space you can use anything</div>
                    <div>empty space you can use anything</div>
                    <div>empty space you can use anything</div>
                    <div>empty space you can use anything</div>
                    <div>empty space you can use anything</div>
                    <div>empty space you can use anything</div>
                    <div>empty space you can use anything</div>
                    <div>empty space you can use anything</div>
                  </Col>
                </Row>
              </Container>
            </Content>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;