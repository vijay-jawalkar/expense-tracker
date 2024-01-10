import { OverviewComponent, Tracker } from './components';
import './App.css';

function App() {
  return (
   <div className='w-full h-screen bg-zinc-300 overflow-hidden'>

    {/* expense tracker container */}
    <div className='w-full lg:w-80 h--screen bg-zinc-300 p-4 flex flex-col rounded-md mt-6 mx-auto'>
    <h2 className='text-xl text-zinc-900 font-semibold text-center pb-4'>Expense Tracker</h2>
    <OverviewComponent/>
    <Tracker/>
    </div>
   </div>
  );
}

export default App;
