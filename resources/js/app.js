import './bootstrap';

import React from "react";
import Saludo from "./Pages/Saludo.jsx"

import {createRoot} from "react-dom/client";



const saludo =document.getElemntById ('root');

const main_element= document.getElemntById ('root');

const root=createRoot(main_element);
rot.render(<Saludo />);
