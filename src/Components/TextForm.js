import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState('');
    const handleOnUpClick = () => {
        if (text.length > 0) {
            let updatedText = text.toUpperCase();
            setText(updatedText);
            props.showAlert('Text has been Uppercased', 'success');
        } else {
            props.showAlert('Please enter Text', 'danger');
        }
    }
    const handleOnLowClick = () => {
        if (text.length > 0) {
            let updatedText = text.toLowerCase();
            setText(updatedText);
            props.showAlert('Text has been Lowercased', 'success');
        } else {
            props.showAlert('Please enter Text', 'danger');
        }
    }
    const handleOnClearText = () => {
        if (text.length > 0) {
            setText('');
            props.showAlert('Text has been Cleared', 'success');
        } else {
            props.showAlert('Text area is already Empty', 'danger');
        }
    }
    const handleOnCopyText = () => {
        if (text.length > 0) {
            navigator.clipboard.writeText(text);
            props.showAlert('Text has been Copied', 'success');
        } else {
            props.showAlert('Text area is already Empty', 'danger');
        }
    }
    const handleOnExtraSpace = () => {
        if (text.length > 0) {
            let updatedText = text.split(/[ ]+/);
            setText(updatedText.join(' '));
            props.showAlert('Extrs space has been Removed', 'success');
        } else {
            props.showAlert('Text area is already Empty', 'danger');
        }
    }
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    let color = props.mode === 'light' ? 'black' : 'white';
    let backgroundColor = props.mode === 'light' ? 'white' : 'grey';
    let backStyle = { backgroundColor: backgroundColor, color: color };
    return (
        <>
            <div className='container' style={backStyle}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control my-3" style={backStyle} value={text} onChange={handleOnChange} id="mybox" rows="8"></textarea>
                    <button className="btn btn-primary" onClick={handleOnUpClick}>UpperCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleOnLowClick}>LowerCase</button>
                    <button className="btn btn-primary mx-2" onClick={handleOnClearText}>Clear</button>
                    <button className="btn btn-primary mx-2" onClick={handleOnCopyText}>Copy</button>
                    <button className="btn btn-primary mx-2" onClick={handleOnExtraSpace}>Remove Extra Space</button>
                </div>
            </div >
            <div className='container' style={backStyle}>
                <h2>Summary</h2>
                <p>{text.length > 0 ? text.trim()?.split(' ')?.length : 0} words and {text.length} characters</p>
                <h3>Preview</h3>
                <p>{text.length > 0 ? text : 'Enter Something to preview it'}</p>
            </div>
        </>
    )
}
