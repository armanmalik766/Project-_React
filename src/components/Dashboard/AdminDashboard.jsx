import AllTask from "../other/AllTask";
import CreateTask from "../other/CreateTask";
import Header from "../other/Header";

const AdminDashboard = ({changeUser1}) => {
  return (
    <div id="taskList2" className="h-screen w-full p-10 bg-[#1C1C1C] overflow-x-hidden ">
     <Header changeUser1 = {changeUser1}/>
    <CreateTask/>
    <AllTask/>
    </div>
  );
}
export default AdminDashboard;