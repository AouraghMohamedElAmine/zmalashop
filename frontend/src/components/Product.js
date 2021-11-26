import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "./Rating";
const Product = (props) => {
    return (
    <>               
     <Link  to={`/product/${props._id}`}>
      <Card className="my-3 p-3">
        <Card.Img variant='fluid' src={props.image}></Card.Img>
        <Card.Body>
          <Card.Title>
            <Link to={`/product/${props._id}`} >  {props.name}</Link>
          </Card.Title>
      
          <Card.Text as="h3">
            {props.Price} $
            </Card.Text>
          <Card.Text as="h3">
             <Rating numReviews={props.numReviews} rating={props.rating} />    

            </Card.Text>
        </Card.Body>
      </Card>
      </Link>
    </>
  );
};

export default Product;
