import React from "react";
import { Col, Row, ListGroup, Card , Button} from "react-bootstrap";
export default function ProductLoader() {
  return (
    <div>
      <Row>
        <Col md={6} sm={12}>
        <div className="skeleton-text h-100 w-100 skeleton"></div>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <div className="skeleton-text skeleton"></div>
            </ListGroup.Item>
            <ListGroup.Item>
              <div className="skeleton-text skeleton"></div>
            </ListGroup.Item>
            <ListGroup.Item>
 
              <div className="skeleton-text skeleton"></div>
              <div className="skeleton-text skeleton"></div>
              <div className="skeleton-text skeleton"></div>
            </ListGroup.Item>
            <ListGroup.Item>
          
              <div className="skeleton-text skeleton"></div>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col className="text-center">Price :</Col>
                  <Col className="text-center">
                    <div className="skeleton-text skeleton"></div>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col className="text-center">Status :</Col>
                  <Col className="text-center">
                    <div className="skeleton-text skeleton"></div>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Quantity</Col>
                  <Col>
                    <div className="skeleton-text skeleton"></div>
                  </Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                    <div className='skeleton-text skeleton'></div>
                    <div className='skeleton-text skeleton'></div>
               </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
