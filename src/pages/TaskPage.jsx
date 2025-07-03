import { ChevronLeftIcon } from "lucide-react";
import React from "react";
import { useSearchParams } from "react-router";
import { useNavigate } from "react-router-dom";
import Title from "../components/Title";


function TaskPage() {
  const navigation = useNavigate(); // Hook para navegar entre páginas (-1)

  const [searchParams] = useSearchParams(); // Hook para pegar os parametros da url
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 flex justify-center">
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigation(-1)} // Volta a pagina anterior
            className="absolute left-0 top-0 bottom-0 mb-6 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <Title>Detalhes da Tarefa</Title>
        </div>

        <div className="bg-slate-200 p-4 rounded-md">
          <h2 className="text-xl text-white font-bold text-slate-600">
            {title}
          </h2>
          <p className="text-white text-slate-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
