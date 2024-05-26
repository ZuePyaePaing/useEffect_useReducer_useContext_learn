import { reducer } from "./reducer";
import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "GET_PRODUCT", payload: productsList });
    const filterProduct = productsList.filter((product) =>
      product.title.toLocaleLowerCase().includes(search)
    );
  
    dispatch({ type: "GET_PRODUCT", payload:filterProduct });
  }, [productsList, search]);

  const fetchData = async () => {
    const resposnse = await fetch("https://fakestoreapi.com/products");
    const data = await resposnse.json();
    setProductsList(data);
  };

  const initalState = {
    products: [],
    cart: [],
  };

  const [state, dispatch] = useReducer(reducer, initalState);

  const data = { state, dispatch, search, setSearch };
  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useStateContextCustom = () => useContext(StateContext);
