import './App.css';
import PaintCanvas from './components/paint/PaintCanvas';
import ProgressTest from './components/progress/Progress';

function App() {

  return (
    <div className="container mx-auto shopping_cart_app m-5 p-5">
      
      <header className='text-center mb-4'>
        <h1 className='text-4xl text-bold'>Test Typescript</h1>
      </header>

      <div className='collapse bg-base-200'>
        <input type='checkbox'></input>
        <div className='collapse-title text-xl font-medium'>Progress</div>
        <div className='collapse-content'>
          <ProgressTest></ProgressTest>
        </div>
      </div>

      <div className='divider'></div>

      <div className='collapse bg-base-200'>
        <input type='checkbox'></input>
        <div className='collapse-title text-xl font-medium'>Paint</div>
        <div className='collapse-content'>
          <PaintCanvas></PaintCanvas>
        </div>
      </div>

    </div>
  );
}

export default App;
