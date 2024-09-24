import './App.css';
import InvoiceApp from './components/invoice/InvoiceApp.';
import PaintCanvas from './components/paint/PaintCanvas';
import ProgressTest from './components/progress/Progress';

function App() {

  return (
    <div className="container mx-auto shopping_cart_app m-5">
      
      <header className='text-center mb-4'>
        {/* <h1 className='text-4xl text-bold'>Test Typescript</h1> */}
      </header>

      <div className='collapse collapse-arrow bg-base-200'>
        <input type='checkbox'></input>
        <div className='collapse-title text-xl font-medium block flex flex-row items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
          </svg>
          <span>Faktury</span>
        </div>
        <div className='collapse-content'>
          <InvoiceApp></InvoiceApp>
        </div>
      </div>

      <div className='divider'></div>

      <div className='collapse collapse-arrow bg-base-200'>
        <input type='checkbox'></input>
        <div className='collapse-title text-xl font-medium block flex flex-row items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <span>Progress</span>
        </div>
        <div className='collapse-content'>
          <ProgressTest></ProgressTest>
        </div>
      </div>

      <div className='divider'></div>

      <div className='collapse collapse-arrow bg-base-200'>
        <input type='checkbox'></input>
        <div className='collapse-title text-xl font-medium block flex flex-row items-center gap-2'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42" />
          </svg>
          <span>Paint</span>
        </div>
        <div className='collapse-content'>
          <PaintCanvas></PaintCanvas>
        </div>
      </div>

    </div>
  );
}

export default App;
