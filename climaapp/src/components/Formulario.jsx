import useClima from '../hooks/useClima'
import {useState} from 'react'

const Formulario = () => {
    const [alerta, setAlerta] = useState('')
    const {busqueda, datosBusqueda, consultarClima} = useClima()
    const {ciudad, pais}= busqueda
    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(busqueda).includes('')){
            setAlerta("Todos los campos son obligatorios!")
            return
        }
        setAlerta('')
        consultarClima(busqueda)
    }

  return (
    <>
        <div className="contenedor">
            {alerta && <p>{alerta}</p>}
            <form onSubmit={handleSubmit}>
                <div className="campo">
                    <label htmlFor="ciudad">Ciudad</label>
                    <input 
                        type="text" 
                        id="ciudad" 
                        name="ciudad" 
                        onChange={datosBusqueda}
                        value={ciudad}
                        />
                </div>
                <div className="campo">
                    <label htmlFor="pais">Ciudad</label>
                    <select 
                        type="text" 
                        id="pais" 
                        name="pais"
                        value={pais}
                        onChange={datosBusqueda}
                        >
                            <option value="">Seleccione un pais</option>
                            <option value="US">Estados Unidos</option>
                            <option value="MX">Mexico</option>
                            <option value="AR">Argentina</option>
                            <option value="CO">Colombia</option>
                            <option value="CR">Costa Rica</option>
                            <option value="ES">Espana</option>
                            <option value="PE">Peru</option>
                    </select> 
                </div>
                <input type="submit" value="consultar clima"/>
            </form>
        </div>
    </>
  )
}

export default Formulario
