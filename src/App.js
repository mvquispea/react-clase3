import React from 'react'
import './styles/styles.scss'
import Curso from './Curso'

const cursos = [
{
  "titulo" : "React desde cero",
  "image" : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/Vue-JS.png",
  "price" : "30",
  "profesor" : "Maria Quispe",
},

{
  "titulo" : "Drupal desde cero",
  "image" : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-10/RxJs.png",
  "price" : "20",
  "profesor" : "Juliana Quispe",
},

{
  "titulo" : "HTML desde cero",
  "image" : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-08/angular.png",
  "price" : "0",
  "profesor" : "Elsa Quispe",
},

{
  "titulo" : "Go desde cero",
  "image" : "https://drupal.ed.team/sites/default/files/styles/16_9_medium/public/imagenes-cdn-edteam/2019-07/AuditionDesdeCero.png",
  "price" : "50",
  "profesor" : "Beto Quiroga",
}

]

const App = () =>(

<fragment>
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" src="https://mott.pe/noticias/wp-content/uploads/2019/03/los-50-paisajes-maravillosos-del-mundo-para-tomar-fotos.jpg" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Título del banner</p>
        <p> Subtítulo del banner</p>
        <a href="https://www.youtube.com/watch?v=d_4xk1r9hxU" className="button">Botón del banner</a>
      </div>
    </div>
  </div>
</div>

<div className="ed-grid m-grid-3">
{
  cursos.map( c => <Curso 
    title = {c.titulo}
    image = {c.image}
    price = {c.price}
    profesor = {c.profesor}
  />)
}

</div>

</fragment>
)


export default App;
