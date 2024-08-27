<<<<<<< HEAD
import React from 'react';
import {Link} from 'react-router-dom';



function Navbar(props) {
    const containerStyle = {
        Light: 'bg-white text-gray-900',
        Dark: 'bg-gray-800 text-white',
        Red: 'bg-red-50 text-red-800',
        Yellow: 'bg-yellow-50 text-yellow-800',
        Green: 'bg-green-50 text-green-800 ',
      };
    return (
        <nav className={`flex items-center justify-between p-4 ${containerStyle[props.Mode]}`}>
            <div className="flex items-center space-x-4">
                <p className={`text-lg font-semibold ${containerStyle[props.Mode]}`}>TextUtils</p>
                <Link className={`text-sm ${containerStyle[props.Mode]}`} to='/'>Home</Link>
                <Link className={`text-sm ${containerStyle[props.Mode]}`} to='/About'>About</Link>
            </div>
            <div className={`text-[0.75rem] ${containerStyle[props.Mode]}`}>
                <p className={`p-1 ml-3 mb-1 font-semibold text-center ${containerStyle[props.Mode]}`}>Click For Modes</p>
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
=======
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
>>>>>>> d54dac8caacc034fb1080dbf024c6cdec452e8be
