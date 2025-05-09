import { useState } from "react";
const CreateTask = () => {
  const [task, setTask] = useState('');
  const [date, setDate] = useState('');
  const [asignTo, setAsignTo] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    const newTask = { task, date, asignTo, category, description, active: false, completed: false, failed: false, new_task: true };
    setStatus(newTask);

    let data = JSON.parse(localStorage.getItem('employees')) || [];
    data = data.map(employee => {
      if (asignTo === employee.firstName) {
        return {
          ...employee,
          tasks: [...employee.tasks, newTask],
          task_count: {
            ...employee.task_count,
            new_task: employee.task_count.new_task + 1
          }
        };
      }
      return employee;
    });

    console.log({...data});
    localStorage.setItem('employees', JSON.stringify(data));

    // Add task to employee dashboard
    addTaskToEmployeeDashboard(newTask);

    // Reset form fields
    setTask('');
    setDate('');
    setAsignTo('');
    setCategory('');
    setDescription('');
  };

  const addTaskToEmployeeDashboard = (task) => {
    // Logic to add task to employee dashboard
    console.log('Task added to employee dashboard:', task);
  };

  return (
    <div className="p-5 bg-[#1C1C1C]  mt-5 rounded-lg border-[1px] border-gray-400">
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className="flex flex-wrap w-full item-start justify-between ">
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
            <input value={task} onChange={(e) => setTask(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparant border-[1px]  border-gray-400 mb-4" type="text" placeholder="Make a UI design" /></div>
          <div>  <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
            <input value={date} onChange={(e) => setDate(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparant border-[1px]  border-gray-400 mb-4" type="date" /> </div>
          <div >
            <h3 className="text-sm text-gray-300 mb-0.5  ">Asign TO</h3>
            <input value={asignTo} onChange={(e) => setAsignTo(e.target.value)}
              type="text" placeholder="emloyee name" />
          </div>
          <div>   <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
            <input value={category} onChange={(e) => setCategory(e.target.value)}
              className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparant border-[1px]  border-gray-400 mb-4" type="text" placeholder="design ,dev,etc" /></div>
        </div>

        <div className="w-2/5  flex flex-col item-start">
          <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)}
            className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparant  border-[1px] border-gray-400 "></textarea></div>


        <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 text-sm rounded mt-4 w-full">Create Task</button>
      </form>
    </div>
  );
}
export default CreateTask;