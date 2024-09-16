import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";


const AppRoute = () => {

    console.log("Render happening");
    return (
        
        <div>
            <Header />
            <Body /> 
        </div>
        
    );
    
};




const root = ReactDOM.createRoot(document.getElementById("To-Do-List")) ;
root.render(<AppRoute/>) ; 