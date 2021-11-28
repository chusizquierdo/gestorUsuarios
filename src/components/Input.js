import React from 'react';

const styles={
    input:{
        width:'100%',
        fontSize:'25px'
    }
}

function Input({label, ...rest}) {    

    return (
        <div className="row mt-3">
          <div className="col-1">
            <label>{label} </label>
          </div>
          <div className="col-11">
            <input {...rest} style={styles.input} />
          </div>
        </div>
    );
}

export default Input;