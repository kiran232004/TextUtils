import logo from './logo.svg';
import './index.css';

function App() {
  return (
    <nav className='bg-black'>
      <div className='flex items-center justify-between'>
      <div className='text-white'>TextUtilies</div>
      <ul className='flex gap-7 '>
        <li className="text-blue-600">Home</li>
        <li className='text-blue-600'>About</li>
        </ul>
        <div className=''>
        <input className="rounded-sm outline-blue-800 " type="text" placeholder="search" />
        <button className="  border-[3px] rounded-md w-[12vh] m-2 border-white bg-white cursor-pointer   hover:bg-red-700 hover:text-white hover:border-red-700">Search</button>
        </div>
      </div>
    </nav>
  );
}

export default App;
