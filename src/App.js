import './App.css';
import './PageWrapper.js'
import Movie from './Movie.js'
import PageWrapper from './PageWrapper.js';
import Pagination from './Pagination'
import PeliculasJSON from './peliculas.json'

function App() {

  let peliculas = PeliculasJSON

  return (
    <div className='App'>
      <PageWrapper>

        {
          peliculas.map(pelicula =>
            <Movie
              title={pelicula.titulo}
              year={pelicula.fecha}
              img_url={pelicula.img}
            />
          )
        }

        <Pagination />

      </PageWrapper>
    </div>
  );
}

export default App;
