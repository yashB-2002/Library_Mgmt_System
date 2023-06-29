import React, { useContext, useEffect, useState } from "react";
// import SingleBook from "./SingleBook";
import { Cart } from "../Context";
import "../App.css";
import Filters from "./Filters";
import SingleBook from "./SingleBook";
import { Spinner } from "react-bootstrap";
// import Apitest from "./Apitest";
const Home = () => {
  const {
    state: { bookscart },
    bookstate: { byRating, sort, search, titleSort },
  } = useContext(Cart);
  console.log("home.js", bookscart);

  const [arr, setArr] = useState([]);
  useEffect(() => {
    function sortedResult() {
      let sortedBooks = bookscart;
      if (sort) {
        sortedBooks = sortedBooks.sort((a, b) => {
          return sort === "lowtohigh"
            ? a.num_pages - b.num_pages
            : b.num_pages - a.num_pages;
        });
      }
      if (byRating) {
        sortedBooks = sortedBooks.filter(
          (b) => Math.floor(b.rating) > byRating
        );
      }
      if (search) {
        sortedBooks = sortedBooks.filter((p) =>
          p.title.toLowerCase().includes(search)
        );
      }
      return sortedBooks;
    }
    setArr(sortedResult());
  }, [sort, byRating, bookscart, search]);
  const totalPages = Math.floor(bookscart.length / 10 - 1);
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const itemPerPage = 12;
  const startIdx = (currentPage - 1) * itemPerPage;
  const endIdx = startIdx + itemPerPage;
  const newArr = arr.slice(startIdx, endIdx);
  // console.log(bookscart[0]);

  return (
    <div className="outer-container">
      <div className="inner-container">
        <button
          className="pagebtn"
          disabled={currentPage === 1}
          newArr
          onClick={() => handlePrevClick()}
        >
          prev
        </button>
        {Array.from({ length: totalPages }, (_, i) => {
          return (
            <button
              disabled={i + 1 === currentPage}
              className="pagebtn"
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
        <button
          className="pagebtn"
          disabled={currentPage === totalPages}
          onClick={() => handleNextClick()}
        >
          next
        </button>
      </div>
      {newArr.length > 1 ? (
        <h1 className="h1" style={{ textAlign: "center" }}>
          Total Records Found in {currentPage} is -: {newArr.length}
        </h1>
      ) : (
        <Spinner
          style={{
            width: "100px",
            height: "100px",
            margin: "auto",
            position: "absolute",
            top: "50%",
            left: "50%",
          }}
          animation="border"
          variant="success"
        />
      )}

      <div className="home">
        {/* {bookscart &&
        bookscart.length > 0 &&
        bookscart.slice(0, 3).map((book) => {
          return (
            <div key={book.id}>
              <h3>{book.title}</h3>
              <h4>{book.author_name[0]}</h4>
              <h5>{book.edition_count}</h5>
              <h5>{book.already_read_count}</h5>
              <h5>{book.ratings_sortable}</h5>
            </div>
          );
        })} */}
        <Filters />

        <div className="book-container">
          {newArr &&
            newArr.length > 0 &&
            newArr.map((book) => {
              // const src = `https://covers.openlibrary.org/b/id/${book.cover_i}-S.jpg`;
              return <SingleBook book={book} key={book.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
