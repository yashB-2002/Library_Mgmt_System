import React, { useContext } from "react";
import { Button, Card } from "react-bootstrap";
import { Rating } from "./Rating";
import { Cart } from "../Context";
import { useNavigate } from "react-router-dom";
const SingleBook = ({ book }) => {
  // console.log("singlebook", book);
  const {
    state: { cart },
    dispatch,
  } = useContext(Cart);
  //   console.log(cart);
  const navigate = useNavigate();
  return (
    cart && (
      <div className="book">
        <Card className="card">
          <Card.Img
            className="img"
            variant="top"
            src={book.image_url}
            alt={book.title}
            onClick={() => navigate(`/books/${book.id}`)}
          ></Card.Img>
          <Card.Body>
            <Card.Title style={{ fontWeight: "bolder", fontSize: "20px" }}>
              {book.title}
            </Card.Title>
            <Card.Subtitle className="subtitle">
              <span className="subtitle-span">Author Name -</span>{" "}
              {book.authors}
            </Card.Subtitle>
            <Card.Subtitle className="subtitle">
              <span className="subtitle-span">Total Pages -</span>{" "}
              {book.num_pages}
            </Card.Subtitle>
            <Card.Subtitle className="subtitle">
              <span className="subtitle-span">Total Rating Count -</span>{" "}
              {book.rating_count}
            </Card.Subtitle>
            <Card.Subtitle className="subtitle">
              <span className="subtitle-span">Total Review Count -</span>{" "}
              {book.review_count}
            </Card.Subtitle>

            <Rating className="rating-comp" rating={Math.floor(book.rating)} />
            {cart.some((c) => {
              return c.title === book.title;
            }) ? (
              <Button
                onClick={() => {
                  dispatch({
                    type: "REMOVE_FROM_CART",
                    payload: book,
                  });
                }}
                className="btn"
                variant="danger"
              >
                Remove from Cart
              </Button>
            ) : (
              <Button
                onClick={() => {
                  dispatch({
                    type: "ADD_TO_CART",
                    payload: book,
                  });
                }}
                className="btn"
                variant="success"
              >
                Add to Cart
              </Button>
            )}
          </Card.Body>
        </Card>
      </div>
    )
  );
};

export default SingleBook;
