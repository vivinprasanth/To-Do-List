const AddTaskButton = () => {

    return (

        <button className="Add-Button bg-white flex flex-row justify-center gap-x-3 rounded-3xl p-2 hover:shadow-md transition-shadow duration-600 hover:shadow-white">
                <div className="Add-symbol text-black font-bold text-md">
                    +
                </div>
                <div className="Add-Button-text text-black font-bold">
                    Add New Task
                </div>
        </button>

    );

};

export default AddTaskButton ;