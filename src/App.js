import './App.css';
import Header from './components/Header';
import Questions from './components/Questions';
import Shop from './components/shop/Shop';

function App() {
  return (
    <div className="bg-light text-muted">
      <Header/>
      <Shop/>
      <Questions/>
    </div>
  );
}

export default App;
