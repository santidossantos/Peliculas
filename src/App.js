import './App.css';
import './PageWrapper.js'
import Movie from './Movie.js'
import PageWrapper from './PageWrapper.js';

function App() {
  return (
    <div className='App'>
      <PageWrapper>
        <Movie title='Titanic' rating='9' year='2000' img_url="images/uploads/mv1.jpg" />
        <Movie title='Titanic' rating='9' year='2000' img_url="images/uploads/mv2.jpg" />
        <Movie title='Titanic' rating='9' year='2000' img_url="images/uploads/mv3.jpg" />

      </PageWrapper>
    </div>
  );
}

export default App;
