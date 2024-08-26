import React from 'react';
// import {Link} from 'react-router-dom';



function Navbar(props) {
    const modeStyles = {
        Dark: 'bg-gray-900 text-white',
        Red: 'bg-red-700 text-white',
        Green: 'bg-green-400 text-white',
        Yellow: 'bg-yellow-500 text-black',
        Light: 'bg-white text-gray-900', // Default light mode
    };

    return (
        <nav className={`flex items-center justify-between p-4 ${modeStyles[props.Mode]}`}>
            <div className="flex items-center space-x-4">
                <p className="text-lg font-semibold">TextUtils</p>
                <a className="text-sm" href='#'>Home</a>
                <a className="text-sm" href='#'>About</a>
            </div>
            <div className='text-[0.75rem]'>
                <p className='p-1 ml-3 mb-1 font-semibold text-center'> Modes</p>
                <div className='flex'>
                    <button onClick={() => props.changingMode('Dark')} className='border w-6 h-6 mr-2 rounded-[50%] bg-black'></button>
                    <button onClick={() => props.changingMode('Red')} className='border w-6 h-6 mr-2 rounded-[50%] bg-red-700'></button>
                    <button onClick={() => props.changingMode('Green')} className='border w-6 h-6 mr-2 rounded-[50%] bg-green-400'></button>
                    <button onClick={() => props.changingMode('Yellow')} className='border w-6 h-6 mr-2 rounded-[50%] bg-yellow-500'></button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
