import { useState } from 'react';



const useFormulario =(inicial)=>{
    const [formulario, setFormulario] = useState(inicial)

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,      
    })
  }
  console.log(formulario)
  return [formulario, handleChange]
}
export default useFormulario;