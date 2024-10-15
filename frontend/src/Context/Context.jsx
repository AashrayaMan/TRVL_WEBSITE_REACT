import React, { createContext } from "react";
import all_product from "../Components/Assests/all_product";

export const TourContext =  createContext(null);

const TourContextProvider = (props) =>{
    const contextValue = {all_product};
    return(
        <TourContext.Provider value={contextValue}>
            {props.children}
        </TourContext.Provider>
    )
}
export default TourContextProvider;