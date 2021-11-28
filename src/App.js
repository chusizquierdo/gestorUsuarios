import "bootstrap/dist/css/bootstrap.min.css";
import useFormulario from './/hooks/useFormulario';
import Input from "./components/Input";
import { useState } from 'react'
import './App.css'





function App() {
  const [usuarios, setUsuarios] = useState([])
  const [formulario, handleChange, reset] = useFormulario({ name: '', lastname: '', mail: '' })

  const submit = e => {
    e.preventDefault()
    setUsuarios([
      ...usuarios,
      formulario
    ])
    reset()
  }


  console.log("formulario")
  console.log(formulario)
  console.log("usuarios")
  console.log(usuarios)
  return (
    <div>
      <form onSubmit={submit}>
        <div className="container">
          <Input     
            label="Nombre:"
            value={formulario.name}
            onChange={handleChange}
            name="name"

          />
          <Input
            label="Apellido:"
            name="lastname"
            value={formulario.lastname}
            onChange={handleChange}
          />
          <Input
            label="Mail:"
            name="mail"
            value={formulario.mail}
            onChange={handleChange}
          /><br />

          <div className="row">
            <div className="col-1"></div>
            <div className="col-11">
              <input
                className="btn btn-primary"
                type="submit"
                value="Enviar"
                style={{ width: '100%' }}
              />
            </div>
          </div>
        </div>
      </form><br />      
        <table>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Mail</th>
          </tr>
          {usuarios.map(x =>
            <tr>
              <td>{x.name}</td>
              <td>{x.lastname}</td>
              <td>{x.mail}</td>
            </tr>
            // <li key={x.mail}>{`${x.name} ${x.lastname} ${x.mail}`}</li>
          )}
        </table>
      </div>
  );
}

export default App;
