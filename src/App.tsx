import './App.css';
import PaintCanvas from './components/paint/PaintCanvas';
import ProgressTest from './components/progress/Progress';

function App() {

  return (
    <div className="container mx-auto shopping_cart_app m-5 p-5">
      
      <header className='text-center'>
        <h1 className='text-4xl text-bold'>Test Typescript</h1>
      </header>

      <ProgressTest></ProgressTest>

      <div className='divider'></div>

      <PaintCanvas></PaintCanvas>

    </div>
  );
}

export default App;
