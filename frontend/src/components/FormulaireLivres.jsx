import React from "react";
import '../styles/body.css'

export default function FormulaireLivres(){
    return(
        <div className="just">
            <form>
                <label htmlFor="titre">Titre :</label>
                <input type="text" id="titre" name="titre" />
            </form>
        </div>
    )
}