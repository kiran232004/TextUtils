import React, { useState } from 'react';

function About(props) {
  const [openCollapse, setOpenCollapse] = useState(null);

  const toggleCollapse = (id) => {
    setOpenCollapse(openCollapse === id ? null : id);
  };

  const containerStyle = {
    Light: 'bg-white text-gray-900',
    Dark: 'bg-gray-800 text-white',
    Red: 'bg-red-50 text-red-800',
    Yellow: 'bg-yellow-50 text-yellow-800',
    Green: 'bg-green-50 text-green-800 ',
  };

  return (
    <div className="accordion">
      {/* Accordion Item 1 */}
      <div className="border-b border-gray-200">
        <h2>
          <button
            className={`${containerStyle[props.mode]} flex items-center justify-between w-full p-4 text-left text-gray-900 hover:bg-gray-200 focus:outline-none`}
            type="button"
            aria-expanded={openCollapse === 'collapseOne'}
            aria-controls="collapseOne"
            onClick={() => toggleCollapse('collapseOne')}
          >
            <span className={`font-bold ${containerStyle[props.mode]}`}>Analyze Your Text</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${openCollapse === 'collapseOne' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="collapseOne"
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openCollapse === 'collapseOne' ? 'max-h-screen' : 'max-h-0'}`}
        >
          <div className="p-4 bg-white">
          Our platform offers robust text analysis tools designed to provide detailed insights into your content. Whether you need to count words, characters, or evaluate the readability of your text, our tools make it easy to break down and understand your content. This feature is ideal for writers, students, and professionals who want to improve the quality and clarity of their work.          </div>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="border-b border-gray-200">
        <h2>
          <button
            className={`${containerStyle[props.mode]} flex items-center justify-between w-full p-4 text-left text-gray-900 hover:bg-gray-200 focus:outline-none`}
            type="button"
            aria-expanded={openCollapse === 'collapseTwo'}
            aria-controls="collapseTwo"
            onClick={() => toggleCollapse('collapseTwo')}
          >
            <span className={`${containerStyle[props.mode]} font-bold `}>Free to Use</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${openCollapse === 'collapseTwo' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="collapseTwo"
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openCollapse === 'collapseTwo' ? 'max-h-screen' : 'max-h-0'}`}
        >
          <div className="p-4 bg-white">
          We believe in providing accessible tools for everyone, which is why our text analysis services are completely free to use. You can access all the features without any cost, making it easier for anyone to analyze and enhance their text without worrying about subscriptions or fees.

</div>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="border-b border-gray-200">
        <h2>
          <button
            className={`${containerStyle[props.mode]} flex items-center justify-between w-full p-4 text-left text-gray-900 hover:bg-gray-200 focus:outline-none`}
            type="button"
            aria-expanded={openCollapse === 'collapseThree'}
            aria-controls="collapseThree"
            onClick={() => toggleCollapse('collapseThree')}
          >
            <span className={`${containerStyle[props.mode]} font-bold`}>Browser Compatible</span>
            <svg
              className={`w-4 h-4 transition-transform duration-200 ${openCollapse === 'collapseThree' ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </h2>
        <div
          id="collapseThree"
          className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openCollapse === 'collapseThree' ? 'max-h-screen' : 'max-h-0'}`}
        >
          <div className="p-4 bg-white">
          Our application is fully browser-compatible, ensuring that you can access and use our tools from any modern web browser. Whether you’re using Chrome, Firefox, Safari, or Edge, you’ll have a seamless experience with our platform. This compatibility means you can analyze your text anytime, anywhere, without needing to download or install any additional software.          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
