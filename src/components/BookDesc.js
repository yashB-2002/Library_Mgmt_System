import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";

const BookDesc = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [bookdata, setBookData] = useState({});
  useEffect(() => {
    const getData = async () => {
      const data = await fetch(
        `https://example-data.draftbit.com/books/${params.id}`
      );
      const res = await data.json();
      setBookData(res);
      console.log(bookdata);
    };
    getData();
  }, [params.id, bookdata]);
  return (
    <div className="card_container">
      <div className="image_container">
        <img src={bookdata.image_url} alt={bookdata.title} />
      </div>
      <div className="card_content">
        <div className="card_title">
          <h2>{bookdata.title}</h2> <h3>By- {bookdata.authors}</h3>
        </div>
        <div className="card_body">
          {" "}
          <p>{bookdata.description}</p>{" "}
        </div>
      </div>
      <Button className="btn-book" onClick={() => navigate("/")}>
        Go Back
      </Button>
    </div>
  );
};

export default BookDesc;
