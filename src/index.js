import './styles.css';
import {generarPoster} from './js/componentes';

const contenedor= document.querySelector(".flex-container");

let documentFragment = document.createDocumentFragment();
let puntosTotales=0;
for(let i=1; i<=7; i++){
    let coleccionRandom=Math.round(Math.random()*10000);
    let fanpointsRandom= Math.round(Math.random()*100+41);
    let poster=generarPoster("",`Poster ${i}`, `coleccion ${coleccionRandom}`,fanpointsRandom);
    let div=document.createElement('div');
    //let divFanpoints=document.createElement('span');

    div.addEventListener('click',()=>{
        document.querySelector('.key-data').value=coleccionRandom
        //console.log(fanpointsRandom);
        puntosTotales+=fanpointsRandom;
        console.log(puntosTotales);
        //document.querySelector('.todo-count').value=puntosTotales;
        const etiquetaPuntos= document.querySelector('.todo-count');
        etiquetaPuntos.innerText=`Fanpoints totales: ${puntosTotales}`
        
    });
    div.tabIndex=i;
    div.classList.add(`item-${i}`,'flex-item');
    div.innerHTML=poster.join(" ");
    documentFragment.appendChild(div);

}
contenedor.appendChild(documentFragment);