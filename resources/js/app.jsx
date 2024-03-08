import './bootstrap';

import React from "react";
import Saludo from "./Pages/Saludo.jsx"
import Numero from "./Pages/Numero.jsx"
import {createRoot} from "react-dom/client";


const react_numero=document.getElemntById("react-numero");
const react_saludo=document.getElemntById("react-saludo");
if(react_numero)
    createRoot(react_numero).render(<Numero/>);

if(react_saludo)
    createRoot(react_saludo).render(<Saludo/>);



