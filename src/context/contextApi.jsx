import { createContext, useContext, useState } from "react";



const contextHeader = createContext();

function HeaderProvider ({children}){
    const [openHeaderPhone, setOpenHeaderPhone] = useState(false);


    function handlerHeaderPhone(){
        setOpenHeaderPhone(!openHeaderPhone);

    }

    return(
        <contextHeader.Provider value={{
            openHeaderPhone,
            handlerHeaderPhone


        }}>
            {children}
        </contextHeader.Provider>


    )
}

function useContextHeader(){
    const context = useContext(contextHeader);
    if(context === undefined) throw new Error("Context should not be used here");
  
    return context;
  }
  
  export {useContextHeader,HeaderProvider}
  