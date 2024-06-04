import marcelo from "../src/assets/Marcelo.svg";
import reus from "../src/assets/Reus.svg";
import seta from "../src/assets/Seta.svg";
import setaBranca from "../src/assets/SetaBranca.svg";
import NavBar from "../src/assets/Components/NavBar.tsx";

function App() {
  return (
    <div className="bg-gray-900 h-screen w-full font-semibold text-lg">
      <NavBar/>
      <div className="pt-6 bg-white ">
      <div className="flex justify-between items-center transition-transform transform hover:scale-90">
        <img src={marcelo} alt="Marcelo" />
        <a
          href="/RealMadrid"
          className="pl-12 text-xl font-semibold flex items-center"
        >
          <h1>
            Venha vistir a armadura do maior campeão europeu com as camisas
            oficiais do Real Madrid!!
          </h1>
          <img src={seta} alt="" className="h-52 w-52" />
        </a>
        </div>
      </div>
      <div className="pt-6  bg-gradient-to-r from-black to-gold  max-w-width100vw " >
        <div className="flex justify-between items-center transition-transform transform hover:scale-90">
        <img src={reus} alt="reus" className="pl-5 " />
        <a
          href="/Borussia Dortmund"
          className=" text-white ml-12 text-xl font-semibold flex items-center "
        >
          <h1>
            Entre em campo com a energia do Muralha Amarela: adquira já sua
            camisa oficial do Borussia Dortmund!!
          </h1>
          <img src={setaBranca} alt="" className="h-52 w-52" />
        </a>
        </div>
      </div>
    </div>
  );
}

export default App;
