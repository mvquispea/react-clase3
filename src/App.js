import React from 'react'
import './styles/styles.scss'
import Curso from './Curso'
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

<Curso />
<Curso />
<Curso />
<Curso />


</div>

</fragment>
)


export default App;
