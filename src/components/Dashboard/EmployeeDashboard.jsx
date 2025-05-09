import Header from "../other/Header";
import TaskListNumber from "../other/TaskListNumber";
import TaskList from "../TaskList/TaskList";

const EmployeeDashboard = ({ data , changeUser1 }) => {
    return (
        <div id="" className="p-10 bg-[#1c1c1c] h-100% w-screen">
            <Header changeUser1 = {changeUser1} data={data} />
            <TaskListNumber data={data} />
            <TaskList data={data} />
        </div>
    );
};

export default EmployeeDashboard;