import React, { useState } from 'react';

function About() {
  const [openCollapse, setOpenCollapse] = useState(null);

  const toggleCollapse = (id) => {
    setOpenCollapse(openCollapse === id ? null : id);
  };

  return (
    <div className="accordion">
      {/* Accordion Item 1 */}
      <div className="border-b border-gray-200">
        <h2>
          <button
            className="flex items-center justify-between w-full p-4 text-left text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            type="button"
            aria-expanded={openCollapse === 'collapseOne'}
            aria-controls="collapseOne"
            onClick={() => toggleCollapse('collapseOne')}
          >
            Accordion Item #1
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
            <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>

      {/* Accordion Item 2 */}
      <div className="border-b border-gray-200">
        <h2>
          <button
            className="flex items-center justify-between w-full p-4 text-left text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            type="button"
            aria-expanded={openCollapse === 'collapseTwo'}
            aria-controls="collapseTwo"
            onClick={() => toggleCollapse('collapseTwo')}
          >
            Accordion Item #2
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
            <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>

      {/* Accordion Item 3 */}
      <div className="border-b border-gray-200">
        <h2>
          <button
            className="flex items-center justify-between w-full p-4 text-left text-gray-900 bg-gray-100 hover:bg-gray-200 focus:outline-none"
            type="button"
            aria-expanded={openCollapse === 'collapseThree'}
            aria-controls="collapseThree"
            onClick={() => toggleCollapse('collapseThree')}
          >
            Accordion Item #3
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
            <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
