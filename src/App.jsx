import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useEffect, useState } from "react";
import { v4 } from "uuid";
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks") || [])
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]); // Quando tasks muda, ele vai salvar no localStorage

  /* useEffect(() => {
    const fetchTasks = async () => {
      const response = await fetch( //Chamando Api
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      const data = await response.json(); //Pegar os dados Json
      setTasks(data)  //Amazernar/persistir esses Dados
      
    };
    // Chamando api para pegar as tarefas
    fetchTasks();
  }, []); */

  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id == taskId) {
        //Precisa Atualizar essa tarefa
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }
      // Não precisa atualizar a tarefa
      return task;
    });
    setTasks(newTask);
  }

  function onTaskDelete(taskId) {
    const newTask = tasks.filter((task) => task.id !== taskId);
    setTasks(newTask);
  }

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(), //gera id aleatório
      title,
      description,
      isCompleted: false,
    };
    setTasks([...tasks, newTask]);
    if (title === "" || description === "") {
      alert("Preencha os campos corretamente");
    }
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4 ">
        <Title> Gerenciador de Tarefas</Title>
        <AddTask onAddTaskSubmit={onAddTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onTaskDelete={onTaskDelete}
        />
      </div>
    </div>
  );
}

export default App;
