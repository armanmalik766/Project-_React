import AcceptTask from "./AcceptTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
import NewTask from "./NewTask";

const TaskList = ({data})=>{
    return (
        <div id="taskList2" className="h-[55%] overflow-x-auto flex item-center justify-start gap-5 flex-no-wrap text-white mt-3 ">
            {data.tasks.map((elem,idx)=>{
                if(elem.active){
                    return <AcceptTask  key={idx} data={elem}/>
            }
            if(elem.failed){
                return <FailedTask key={idx}  data={elem}/>
            }
            if(elem.completed){
                return <CompleteTask key={idx} data={elem} />
            }
            if(elem.new_task){
                return <NewTask key={idx} data={elem}/>
            }
            })}
        </div>
    )
}
export default TaskList;