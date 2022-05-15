import {useState, useEffect } from 'react';
import axios from 'axios';
import NovedadItem from '../components/novedades/NovedadesItem';



import '../styles/components/pages/NovedadesPage.css'

const NovedadesPage = (props) => {


  
    return (
      <section className="holder">
        <h2>Novedades</h2>
        <div className="novedades">
            <h3>Titulo</h3>
            <h4>Subtitulo</h4>
            <p>cuerpo</p>
        </div>
        </section>
    );
  }
  
  export default NovedadesPage;
  