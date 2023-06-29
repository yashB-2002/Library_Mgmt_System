export const cartReducer = (state, action) => {
  // console.log(state);
  switch (action.type) {
    case "GET_BOOKS":
      // console.log(state);
      return {
        ...state,
        bookscart: action.payload.bookscart,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((c) => c.title !== action.payload.title),
      };
    default:
      return state;
  }
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_BY_RATING":
      return { ...state, byRating: action.payload };
    case "FILTER_BY_SEARCH":
      return { ...state, search: action.payload };
    case "FILTER_BY_READ_COUNT":
      return { ...state, sort: action.payload };
    case "CLEAR_FILTERS":
      return {
        byRating: 0,
        search: "",
        sort: "",
      };
    default:
      return state;
  }
};
