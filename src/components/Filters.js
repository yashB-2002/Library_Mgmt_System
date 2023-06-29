import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
// import { Rating } from "./Rating";
import { Cart } from "../Context";
import { Rating } from "./Rating";

const Filters = () => {
  // const [rate, setRate] = useState(1);
  const {
    bookstate: { byRating, sort },
    bookdispatch,
  } = useContext(Cart);
  // console.log(sort, byRating);
  return (
    <div className="filters">
      <span className="title">Filter Books</span>
      <span className="form-span">
        <Form.Check
          inline
          label="Sort By PageCount(Low-High)"
          name="group1"
          type="radio"
          id={`inline-1`}
          onChange={() => {
            bookdispatch({
              type: "FILTER_BY_READ_COUNT",
              payload: "lowtohigh",
            });
          }}
          checked={sort === "lowtohigh" ? true : false}
        />
      </span>
      <span>
        <Form.Check
          inline
          label="Sort By PageCount(High-Low)"
          name="group1"
          type="radio"
          id={`inline-2`}
          onChange={() => {
            bookdispatch({
              type: "FILTER_BY_READ_COUNT",
              payload: "hightolow",
            });
          }}
          checked={sort === "hightolow" ? true : false}
        />
      </span>

      <span>
        <label style={{ paddingRight: "10px" }}>Sort By Rating: </label>
        <br />
        <Rating
          rating={byRating}
          style={{ cursor: "pointer" }}
          onClick={(i) =>
            bookdispatch({
              type: "FILTER_BY_RATING",
              payload: i + 1,
            })
          }
        />
      </span>
      <Button
        onClick={() => {
          bookdispatch({
            type: "CLEAR_FILTERS",
          });
        }}
        className="btn"
        variant="light"
      >
        Clear Filters
      </Button>
    </div>
  );
};

export default Filters;
