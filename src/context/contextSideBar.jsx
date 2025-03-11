import { createContext, useContext, useState } from "react";



const contextSideBar = createContext();

function SidebarProvider ({children}){
    const [openSideBar, setOpenSideBar] = useState(false);


    function handlerSideBar(){
        setOpenSideBar(!openSideBar);

    }

    return(
        <contextSideBar.Provider value={{
            openSideBar,
            handlerSideBar


        }}>
            {children}
        </contextSideBar.Provider>


    )
}

function useContextSideBar(){
    const context = useContext(contextSideBar);
    if(context === undefined) throw new Error("Context should not be used here");
  
    return context;
  }
  
  export {useContextSideBar,SidebarProvider}
  