import { createContext, useContext } from "react";

const ProductContext = createContext({
    products: [],
    setProducts: () => {}
})

export const useProducts = () => useContext(ProductContext)

export const ProductProvider = ProductContext.Provider