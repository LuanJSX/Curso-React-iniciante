import { useState } from "react";
import Input from "./Input";


function AddTask({onAddTaskSubmit}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    

  return (
    <div className="space-y-4 p-6 bg-slate-200 raunded-md shadow flex flex-col">
      <Input
        type="text"
        placeholder="Digite Sua Tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)} //pegar valor do input e colocar no estado
      />
      <Input
        type="text"
        placeholder="Digite a Descrição da Tarefa"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button
        onClick={() => {
            // verificar preenchimento dos campos
            if (!title.trim() || !description.trim()){
                return alert("Preencha todos os campos");
            }
            onAddTaskSubmit(title, description);
            setTitle("");
            setDescription("");
        }}
        className="bg-slate-500 text-white px-4 py-2 rounded-md hover:bg-slate-600"
      >
        Adicionar
      </button>
    </div>
  );
}


export default AddTask;