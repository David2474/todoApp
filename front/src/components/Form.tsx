import { ChangeEvent, FormEvent, useState } from "react"
import {createTaskRequest} from '../api/task'

function Form() {

  const [task, setTask] = useState({
    title: "",
    description: ""
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setTask({ ...task, [e.target.name]: e.target.value})
  }

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const res = await createTaskRequest(task);
    const data = await res.json()
    console.log(data)
  }

  return (
    <div className=" w-2/5">
        <form 
          className="flex flex-col bg-gray-950 p-4"
          onSubmit={handleSubmit}
          >
          <input 
            name="title"
            className="border rounded-md bg-zinc-600 border-black" 
            placeholder="introduce un titulo"
            onChange={handleChange}
          />
 
          <textarea 
            name="description" 
            rows={3} 
            placeholder="Descripcion" 
            className="border rounded-md bg-zinc-600 border-black my-3"
            onChange={handleChange}>
          </textarea>

          <button 
            className="bg-green-500 p-1 font-medium text-white"
          >Enviar</button>
      </form>
    </div>
  )
}

export default Form