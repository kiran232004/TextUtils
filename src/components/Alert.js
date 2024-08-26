import React, { useState } from 'react';

function DismissibleAlert(props) {
    const [visible, setVisible] = useState(true);

    const alertStyles = {
        success: 'bg-green-100 border-green-400 text-green-700',
        error: 'bg-red-100 border-red-400 text-red-700',
        warning: 'bg-yellow-100 border-yellow-400 text-yellow-700',
        info: 'bg-blue-100 border-blue-400 text-blue-700',
    };

    if(!visible) return null
    return (
        props.alert &&
        <div className={`border-l-4 p-4 ${alertStyles[props.alert.type]} rounded-md`} role="alert">
            <div className="flex justify-between items-center">
                <div>
                
                    <p className="font-bold">{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}</p>
                    <p>{props.alert.msg}</p>
                </div>
                <button onClick={() => setVisible(false)} className="text-lg font-bold focus:outline-none">
                    &times;
                </button>
            </div>
        </div>
    );
}

export default DismissibleAlert;
