import logo from "../src/assets/CUnitedLogo.svg"
import perfil from "../src/assets/Perfil.svg"
import bag from "../src/assets/Bag.svg"
import marcelo from "../src/assets/Marcelo.svg"
import seta from "../src/assets/Seta.svg"
import setaBranca from "../src/assets/SetaBranca.svg"
import reus from "../src/assets/Reus.svg"
import './App.css'

function App() {
  return (
    <>
      <div className='bg-gray-900 h-screen w-screen font-semibold text-lg'>

        <div className="bg-black flex items-center">
          <img src={logo} alt="Logo" className="h-logoSize mr-16"/>
          <ul className="flex items-center">
            <li className='text-white pr-4'>
              <a href="">Ligas</a>
            </li>
            <li className='text-white pr-4'>
              <a href="">Marcas</a>
            </li>
            <li className='text-white pr-4'>
              <a href="">Masculino</a>
            </li>
            <li className='text-white pr-4'>
              <a href="">Feminino</a>
            </li>
            <li className='text-white'>
              <a href="">Infantil</a>
            </li>
          </ul>
          <div className="pl-perfilPadding">
            <ul className="flex items-center">
              <li>
                <a href="">
                  <img src={bag} alt="Bag" className="h-10 pr-4"/>
                </a>
              </li>
              <li>
                <a href="">
                  <img src={perfil} alt="Perfil" className="h-10"/>
                </a>
              </li>
                
            </ul>
          </div>
        </div>

        <div className="pt-6 bg-white flex items-center">
          <img src={marcelo} alt="Marcelo"/>
          <a href="/Cadastro" className="pl-12 text-xl font-semibold flex items-center transition-transform transform hover:scale-110">
            <h1>Venha vestir a armadura do maior campeão europeu com as camisas oficiais do Real Madrid!!</h1>
            <img src={seta} alt="" className="h-52 w-52"/>
          </a>
        </div>
        <div className="pt-6 flex items-center bg-gradient-to-r from-black to-gold  max-w-width100vw">
          <img src={reus} alt="reus" className="pl-5"/>
          <a href="" className=" text-white ml-12 text-xl font-semibold flex items-center transition-transform transform hover:scale-110">
            <h1>Entre em campo com a energia do Muralha Amarela: adquira já sua camisa oficial do Borussia Dortmund!!</h1>
            <img src={setaBranca} alt="" className="h-52 w-52"/>
          </a>
        </div>

      </div>
    </>
  )
}

export default App
