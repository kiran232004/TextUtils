import React from 'react';

function Navbar(props) {
    return (
        <nav className="bg-gray-800 text-white flex items-center justify-between p-4">
            <div className="flex items-center space-x-4">
                <p className="text-lg font-semibold">TextUtils</p>
                <p className="text-sm">Home</p>
                <p className="text-sm">About</p>
            </div>
            <div className="flex items-center">
                <label htmlFor="darkModeToggle" className="mr-2">Dark Mode</label>
                <input 
                    type="checkbox" 
                    id="darkModeToggle" 
                    className="sr-only peer" 
                    checked={props.isDarkMode} 
                    onChange={props.toggleDarkMode} 
                />
                <div 
                    className={`w-14 h-7 ${props.isDarkMode ? 'bg-blue-600' : 'bg-gray-300'} rounded-full relative cursor-pointer transition-colors duration-300`}
                    onClick={props.toggleDarkMode}
                >
                    <div 
                        className={`absolute top-1 left-1 bg-white w-5 h-5 rounded-full transition-transform duration-300 transform ${props.isDarkMode ? 'translate-x-7' : ''}`}
                    ></div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
