import { countries } from "../../data/countries"

import styles from "./Form.module.css"

function Form() {
  return (
    <form className={styles.form}>

        <div className={styles.field}>
            <label htmlFor="city">Ciudad:</label>
            <input 
                id="city" 
                type="text" 
                name="city" 
                placeholder="Ciudad"
            />
        </div>

        <div className={styles.field}>
            <label htmlFor="country">País:</label>
            <select name="" id="">
                <option value="">--- Seleccione un País ---</option>
                {countries.map(country => (
                    <option
                        key={country.code}
                        value={country.code}
                    >{country.name}</option>
                ))}
            </select>
        </div>

        <input className={styles.submit} type="submit" value="Consultar el Clima"/>
    </form>
  )
}

export default Form