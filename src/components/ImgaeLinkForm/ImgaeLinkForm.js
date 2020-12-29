import React from 'react';
import './ImageLinkForm.css';

const ImgaeLinkForm = ({ onInputChange, onButtonSumbit }) => {
    return (
        <div>
            <p className='f3'>
                {'Check this out'}
            </p>
            <div className='center'>
                <div className='form center pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                    <button className='w-30 grow f4 link ph3 pv2 white bg-light-red' onClick={onButtonSumbit}>Detect</button>
                </div>
            </div>
        </div>
    )
}

export default ImgaeLinkForm;