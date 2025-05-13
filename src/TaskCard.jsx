const TaskCard=(props)=>{
    return(
        <div className="border-2 border-red-500 m-5 p-5 rounded-lg bg-gray-100">
            <h1 className="text-xl font-bold text-red-500 m-5">{props.title}</h1>
            <p>Completed on : due date...</p>
            <p>assignee : {props.assignee}</p>
        </div>
    )
}
export default TaskCard;