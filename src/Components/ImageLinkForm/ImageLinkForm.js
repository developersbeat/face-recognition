import React from 'react';
import "./ImageLinkForm.css";
const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div>
            <p className="f3 fw7">
                {"This Face Scanner will detect faces in your Pictures. Give it a Try"}
            </p>
            <div className="center">
                <div className="form center pa4 b3 shadow-5">
                <input type="text" name="link" onChange={onInputChange} className="f4 pa2 w-70 center"/>
                    <button onClick={onButtonSubmit} className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer">Detect</button>
                    
                </div>
            </div>
        </div>
    )
}

export default ImageLinkForm
