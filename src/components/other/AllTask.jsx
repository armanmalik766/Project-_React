import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
   const authData = useContext(AuthContext);
  
  return (
    <div className="bg-[#1C1C1C] p-5 mt-5 rounded h-80  ">
       <div  className="bg-[#2a9d8f] mb-4 py-2 px-4 flex justify-between rounded text-[#003049] font-bold">
          <h2 className="w-1/5 text-xl">Employee Name</h2>
          <h3 className="w-1/5 text-xl"> New Task</h3>
          <h5 className="w-1/5 text-xl">Active</h5>
          <h5 className="w-1/5 text-xl">Completed</h5>
          <h5 className="w-1/5 text-xl">Failed</h5>
        </div>
        <div  id ="taskList2 "className="h-[80%] overflow-auto">
      {authData.employees.map((employee, index) => (
        <div id="tskbd" key={index} className="bg-black-600  mb-4 py-2 px-4 flex justify-between rounded  text-white">
          <h2 className="w-1/5 text-xl">{employee.firstName}</h2>
          <h5 className="w-1/5  text-xl text-blue-600 ">{employee.task_count.new_task}</h5> 
          <h3 className="w-1/5 text-xl text-yellow-400 text-bold">{employee.task_count.active}</h3>
          <h5 className="w-1/5  text-xl text-white ">{employee.task_count.completed}</h5>
          <h5 className="w-1/5  text-xl text-red-600 ">{employee.task_count.failed}</h5>
        </div>
        
      ))}
      </div>
    </div>
  );
}

export default AllTask;