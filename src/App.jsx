import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {

  
  
  

  return (
    <div className="container mx-auto mt-20 w-4/5">
      <Header />

      <div className="mt-12 md:flex mx-5">
        <Formulario />
        <ListadoPacientes />
      </div>
    </div>
  )
}

export default App
