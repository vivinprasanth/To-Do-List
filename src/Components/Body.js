import React from "react";
import AddTaskButton from "./AddTaskButton";
import DeleteTaskButton from "./DeleteTaskButton";

const Body = () => {
    console.log("Body"); 

return (

        <div className="main-Body-Container flex h-screen bg-gradient-to-br from-[#134D0F] to-[#123859] ">

            <div className="main-container flex flex-grow space-y-5  min-w-[100px] max-w-[250px] m-10 bg-black  rounded-xl overflow-hidden p-10 flex flex-col">
                <p className="font-extrabold text-white m-5 "> This is </p>
                <p className="font-extrabold text-white m-5"> paragraph </p>
                <AddTaskButton className="m-5"/>
                <DeleteTaskButton />

            </div>
            <div className="tasks-collective-container min-w-[300px] m-10 rounded-xl flex flex-grow border border-solid border-white">
                <div className="tasks-container flex flex-grow border border-solid border-black m-5">
                    <div>

                    </div>

                </div>
                <div className="tasks-details-container flex flex-grow border border-solid border-black m-5">

                </div>

            </div>
        </div>

            // { <div className="
            //     Logo-container grid grid-flow-row bg-slate-500 w-[300] h-[300] m-5
            //         border-solid border-4 border-slate-800 justify-center" >
            //     <h1 className="text-8xl m-4 font-medium bg-lime-400">To Do</h1>
            //     <h1 className="text-8xl m-4 font-medium bg-amber-300">List</h1>
            // </div> 
            // <div className="flex flex-grow h-[450px]">
            //     <div className="bg-orange-400 m-5 flex-grow">
            //         <h1>hi this is orange division</h1>
            //     </div>

            //     <div className="bg-green-600 m-5 flex-grow">
            //         <h1>Hi this is green division</h1>
            //     </div>
            // </div>}
        

        

);  
    
};

export default Body