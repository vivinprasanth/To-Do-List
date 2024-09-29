const DeleteTaskButton = () => {

    return (

        <button className="Add-Button bg-white flex flex-row justify-center items-center gap-x-5 p-2 
            rounded-3xl hover:shadow-md transition-shadow duration-600 hover:shadow-white">
                <div className="Add-symbol text-black font-extrabold text-md ">
                    -
                </div>
                <div className="Add-Button-text text-black font-bold ">
                    Delete Task
                </div>
        </button>

    );

};

export default DeleteTaskButton ;