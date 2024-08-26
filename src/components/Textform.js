import React, { useState } from 'react';

function Textform(props) {
    const [Text, setText] = useState('');

    const handleUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase","success");
    };

    const handleLoClick = () => {
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase","success");
    };

    const handleClearClick = () => {
        setText('');
        props.showAlert("Text is Cleared","success");
    };

    const Speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = Text;
        window.speechSynthesis.speak(msg);
        props.showAlert("Text To Speak","success");
    };

    const downloadText = () => {
        const element = document.createElement("a");
        const file = new Blob([Text], { type: "text/plain" });
        element.href = URL.createObjectURL(file);
        element.download = "textfile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        props.showAlert("File is Downloaded","success");
    };

    const handleTextChange = (event) => {
        setText(event.target.value);
    };


    return (
        <>
            <div className=" container mt-6 mx-auto p-4 md:w-3/4 lg:w-2/3 xl:w-1/2">
                <h1 className="text-xl md:text-2xl font-bold mb-4 ">Enter the Text to analyze below:</h1>
                <textarea
                    
                    className="w-full p-2 mb-4 border border-gray-300 rounded-md  "
                    name="message"
                    value={Text}
                    onChange={handleTextChange}
                    rows="8"
                    required
                ></textarea>
                <div className="flex flex-wrap gap-2 mb-4">
                    <button className="flex-1 bg-blue-800 text-white rounded-sm p-2 text-sm hover:text-blue-400 hover:font-semibold hover:bg-white" onClick={handleUpClick}>UpperCase</button>
                    <button className="flex-1 bg-blue-800 text-white rounded-sm p-2 text-sm hover:text-blue-400 hover:font-semibold hover:bg-white" onClick={handleLoClick}>LowerCase</button>
                    <button className="flex-1 bg-blue-800 text-white rounded-sm p-2 text-sm hover:text-blue-400 hover:font-semibold hover:bg-white" onClick={handleClearClick}>Clear Text</button>
                    <button className="flex-1 bg-blue-800 text-white rounded-sm p-2 text-sm hover:text-blue-400 hover:font-semibold hover:bg-white" onClick={Speak}>Speak Text</button>
                    <button className="flex-1 bg-blue-800 text-white rounded-sm p-2 text-sm hover:text-blue-400 hover:font-semibold hover:bg-white" onClick={downloadText}>Download Text</button>
                </div>
                <div className="text-left" >
                    <h2 className="text-lg font-bold ">Your Text Summary</h2>
                    <p className="text-sm ">{Text.split(" ").length-1} Words and {Text.length} Characters</p>
                    <p className="text-sm ">{0.008 * Text.split(" ").length} Minutes read</p>
                </div>
                <div className="mt-4">
                    <h2  className="text-lg font-bold ">Preview</h2>
                    <p  className=" p-2 rounded-md ">{Text.length > 0 ? Text : "Nothing to preview!"}</p>
                </div>
            </div>
        
        </>
    );
}

export default Textform;
