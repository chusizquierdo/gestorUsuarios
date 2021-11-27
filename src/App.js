import "bootstrap/dist/css/bootstrap.min.css";
import useFormulario from './/hooks/useFormulario';

const styles = {
  form: {
    width: '100%',
    fontSize: '25px'
  }
}


function App() {
  const [formulario, handleChange]=useFormulario({name:''})
  return (
    <form>
      <div className="container">

        <div className="row mt-3">
          <div className="col-1">
            <label>Nombre: </label>
          </div>
          <div className="col-11">
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={formulario.name}
              onChange={handleChange}
              id="nombre"
              style={styles.form}
            /><br />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-1">
            <label>Apellido: </label>
          </div>
          <div className="col-11">
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"             
              id="apellido"
              style={styles.form}
            /><br />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-1">
            <label>Mail: </label>
          </div>
          <div className="col-11">
            <input
              type="mail"
              name="mail"
              placeholder="Mail"              
              id="mail"
              style={styles.form} /><br />
          </div>
        </div><br />
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
    </form>
  );
}

export default App;
