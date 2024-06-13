import { useState } from 'react'
import brown from '../public/cars/brown.png'
import gray from '../public/cars/gray.png'
import green from '../public/cars/green.png'
import purple from '../public/cars/purple.png'
import skyblue from '../public/cars/skyblue.png'
import yellow from '../public/cars/yellow.png'
import supalogo from '../public/logo.png'
import './assets/style.css'
import loading from "../public/sounds/loading.mp3";
import sound1 from "../public/sounds/select.wav";
import sound2 from "../public/sounds/spray.wav";

function App() {
  const [car, setCar] = useState(brown); 
  const [color, setColor] = useState(brown); 
  const [instruction, setInstruction] = useState('');
  
  const audioSound1 = new Audio(sound1);
  const audioSound2 = new Audio(sound2);
  const audio = new Audio(loading);
  const start = () => {
    audio.play();
    setTimeout(() => {
      setInstruction(
        'Supakar est un projet pour l\'apprentissage de React. Il est basé sur le template Vite + React. Pour démarrer, il suffit de lire le fichier "README.md". Bonne session de codage !',
      );
    }, 1300);
  };

  const playSoundsWithDelay = (colorSelected) => {
    audioSound1.play();
    setTimeout(() => {
      audioSound2.play();
      changeColor(colorSelected);
    }, 500); 
  };
  const changeColor = (colorSelected) => {
    switch (colorSelected) {
      case 'supaPay':
        setCar(purple);
        setColor('car-' + colorSelected);
        break;
      case 'supaGrass':
        setCar(green);
        setColor('car-' + colorSelected);
        break;
      case 'supaWall':
        setCar(gray);
        setColor('car-' + colorSelected);
        break;
      case 'supaSun':
        setCar(yellow);
        setColor('car-' + colorSelected);
        break;
      case 'supaSky':
        setCar(skyblue);
        setColor('car-' + colorSelected);
        break;
      default:
        setCar(brown);
        setColor('car-' + colorSelected);
        break;
    }
  };

  const selectColor = (e) => {
    const colorSelected = e.target.getAttribute('data-color');
    playSoundsWithDelay(colorSelected);
  };


  return (
    <>
      
      <div className="flex flex-col justify-between h-screen bg-gradient-to-r from-gray-700 to-gray-900">
        <div className="p-5 flex items-center justify-between">
          <img src={supalogo} alt="Supakar Logo" width="250" />
          <button
            onClick={start} 
          className="flex gap-3 items-center p-2 text-white bg-indigo-900 rounded-full transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-4 border-white shadow-lg">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
              <path fill="currentColor" d="M12 22q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Zm0-2.5q3.125 0 5.312-2.188Q19.5 15.125 19.5 12q0-3.125-2.188-5.312Q15.125 4.5 12 4.5q-3.125 0-5.312 2.188Q4.5 8.875 4.5 12q0 3.125 2.188 5.312Q8.875 19.5 12 19.5Zm0-1.5q-2.5 0-4.25-1.75T6 12q0-2.5 1.75-4.25T12 6q2.5 0 4.25 1.75T18 12q0 2.5-1.75 4.25T12 18Zm-2-2.5l5.5-3.5L10 8.5Z">
              </path>
            </svg>
          </button>
        </div>
        <div className="p-5 flex justify-center">
          <img src={car}
            alt="Car"
            className={'car-image rounded-3xl shadow-2xl w-1/2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 '+ color}
            style={{ transition: "all 750ms ease 0s"}} />

        </div>
        <div className="p-5">
          <h1 className="text-5xl pb-4 text-center font-bold text-white">Select a color for your car</h1>
          <div className="flex flex-wrap justify-center">
            <button 
              onClick={selectColor}
              data-color="supaWall"
              className="p-7 m-2 rounded-full cursor-pointer bg-gray-200 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-4 border-white">

            </button>
            <button
              onClick={selectColor}
              data-color="supaSun"
              className="p-7 m-2 rounded-full cursor-pointer bg-yellow-200 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-4 border-white">

            </button>
            <button
              onClick={selectColor}
              data-color="supaGrass"
              className="p-7 m-2 rounded-full cursor-pointer bg-green-200 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-4 border-white">

            </button>
            <button
              onClick={selectColor}
              data-color="supaPay"
              className="p-7 m-2 rounded-full cursor-pointer bg-purple-200 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-4 border-white">

            </button>
            <button
              onClick={selectColor}
              data-color="supaSky"
              className="p-7 m-2 rounded-full cursor-pointer bg-blue-200 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-4 border-white">

            </button>
            <button
              onClick={selectColor}
              data-color="supaWood"
              className="p-7 m-2 rounded-full cursor-pointer bg-yellow-500 hover:shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 border-4 border-white">

            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
