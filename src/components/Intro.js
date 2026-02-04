import { Col, Container, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return(
        <div className="intro">
          <Container className="text-white text-center d-flex justify-content-center align-content-center">
            <Row>
              <Col>
              <div className="title">WHERE EVERY FRAME</div>
              <div className="title">FEELS LIKE HOME</div>
              <div className="introButton mt-4 text-center">
                <Button variant="dark">See All List</Button>
              </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro