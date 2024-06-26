export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return { ...state, products: action.payload };
    case "ADD_TO_CART":
      const isExist = state.cart.find((item) => item.id === action.payload.id);
      if (isExist) {
        return state;
      }
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};
