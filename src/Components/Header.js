const Header = () => {
    console.log("Header"); 

//     return(

//         <div className="Header">
//             <div className="Header-Compartment bg-black h-[75px] px-2 py-2" >
//                 <div className="Nav_Bar border rounded bg-slate-200 w-full h-full flex items-center">
//                     <img src="images/checklist-icon.png" className="w-10" alt="image"></img>
//                     <ul className="flex justify-end space-x-6 w-full">
//                         <li> Login </li>    
//                         <li> Task percent </li>
//                         <li> Account </li>
//                     </ul>
//                 </div>
//             </div>
//             {/* <h1>This is header.</h1>   */}
//         </div>

        
//     );
// };

    return (
        <div className="Header">
            <div className="Header-Compartment bg-black h-[75px] px-2 py-2">
                <div className="Nav_Bar border rounded bg-slate-200 w-full h-full flex items-center">
                    <img src=
                    "images/checklist-icon 2.png"
                    // "https://www.vecteezy.com/free-vector/to-do-list-icon" 
                    className="w-10" alt="Checklist Icon" />
                    <ul className="flex justify-end space-x-6 w-full">
                        <li> Login </li>
                        <li> Task percent </li>
                        <li> Account </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header ; 