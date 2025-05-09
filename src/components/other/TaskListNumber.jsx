const TaskListNumber = ({data}) => {
  return (
    <div className="flex mt-6  justify-between gap-6 screen  mr-5">
<div className="rounded-xl py-6 px-9 w-[45%] bg-red-400">
     <h2 className="text-3xl font-semibold">{data.task_count.new_task}</h2>
     <h3 className="text-xl font-medium">New Task</h3>
</div>
<div className="rounded-xl py-6 px-9 w-[45%] bg-blue-400">
     <h2 className="text-3xl font-semibold">{data.task_count.active}</h2>
     <h3 className="text-xl font-medium">Task accept</h3>
</div>
<div className="rounded-xl py-6 px-9 w-[45%] bg-green-400">
     <h2 className="text-3xl font-semibold">{data.task_count.failed}</h2>
     <h3 className="text-xl font-medium">Task Failed</h3>
</div>
<div className="rounded-xl py-6 px-9 w-[45%] bg-yellow-400">
     <h2 className="text-3xl font-semibold">{data.task_count.completed}</h2>
     <h3 className="text-xl font-medium">Task successfull</h3>
</div>
    </div>
  )
}
export default TaskListNumber