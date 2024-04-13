import { useState } from 'react'
import './App.css'
import FormulaireLivres from './components/FormulaireLivres'
import LivresListe from './components/LivresListe'

function App() {
  return (
    <div className="App">
      <h1>Gestion des Livres</h1>
        <FormulaireLivres />
        <LivresListe />
    </div>
  )
}

export default App
