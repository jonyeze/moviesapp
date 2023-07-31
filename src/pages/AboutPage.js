import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <p>
          La página "Movies.ar" fue creada por <span className="name">Jonathan Darakdjian </span>
          como parte de su proyecto para la Práctica Profesionalizante II en el Instituto
          <span className="institute">Teclab</span>
          . Esta página tiene como objetivo principal
          brindar información sobre un proyecto de desarrollo web relacionado con el mundo del cine.
        </p>
        <p>
          La página en cuestión es un sitio web de películas que utiliza la API de 
          <a href="https://www.themoviedb.org/" className="api-link"> The Movie Database </a>
           para obtener información y datos relevantes sobre películas. Esta API proporciona una 
           amplia gama de funcionalidades para buscar y obtener detalles de películas, incluyendo
            títulos, sinopsis, elenco, calificaciones y más.
        </p>
        <p>
          Durante el proceso de desarrollo de la página, se ha utilizado recursos 
          adicionales como Google y YouTube para investigar y aprender diferentes técnicas 
          y prácticas relacionadas con el desarrollo web. Estos han
           brindado información valiosa y guías paso a paso que ayudaron a implementar 
           funcionalidades específicas y resolver desafíos técnicos.
        </p>
        <p>
          En resumen, la página "Movies.ar" es el resultado de la experiencia de 
           la Práctica Profesionalizante II del Instituto 
          <span className="institute"> Teclab</span>.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
