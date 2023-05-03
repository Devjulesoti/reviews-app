import logo from './logo.svg';
import './App.css';
import Review from './components/Review';

function App() {
  return (
    <main>
    <div className="container">
        <div className="title">
            <h2>Our Reviews</h2>
        </div>
        <Review/>
    </div>
</main>
  );
}

export default App;
