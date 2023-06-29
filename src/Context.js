import { createContext, useEffect, useReducer } from "react";
import React from "react";
import { cartReducer, reducer } from "./Reducer";
export const Cart = createContext();
export const Context = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, {
    bookscart: [],
    cart: [],
  });
  const [bookstate, bookdispatch] = useReducer(reducer, {
    byRating: 0,
    search: "",
    sort: "",
  });
  const getbooks = async () => {
    const data = await fetch(
      "https://example-data.draftbit.com/books?_limit=72"
    );
    const docs = await data.json();
    // setBooks(docs);
    dispatch({
      type: "GET_BOOKS",
      payload: {
        bookscart: docs,
      },
    });
    // console.log(docs);
  };
  useEffect(() => {
    getbooks();
  }, []);
  return (
    <Cart.Provider value={{ state, dispatch, bookstate, bookdispatch }}>
      {children}
    </Cart.Provider>
  );
};
