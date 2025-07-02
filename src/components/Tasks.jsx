import { ChevronRightCircle, Trash } from "lucide-react";
import { useNavigate } from "react-router";

function Tasks ({tasks, onTaskClick, onTaskDelete}) {
    const navigate  = useNavigate();
    
    function onSeeDetails(task) {
      const query = new URLSearchParams(); // tratamento
      query.set("title", task.title);
      query.set("description", task.description);
      navigate(`/task?${query.toString()}`);
    }

    return (
      <ul className="space-y-4 p-6 bg-slate-200 raunded-md shadow">
        {tasks.map((task) => (
          <li key={task.id} className="flex gap-2">
            <button
              onClick={() => onTaskClick(task.id)}
              className={`bg-slate-400 text-white p-2 rounded-md w-full text-left ${
                task.isCompleted && "line-through"
              }`}
            >
              {task.title}
            </button>

            <button
              onClick={() => onSeeDetails(task)}
              className="bg-slate-400 p-2 rounded-md text-white"
            >
              <ChevronRightCircle />
            </button>

            <button
              onClick={() => onTaskDelete(task.id)}
              className={`bg-slate-400 p-2 rounded-md text-white `}
            >
              <Trash />
            </button>
          </li>
        ))}
      </ul>
    );     
    
}

export default Tasks;