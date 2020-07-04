import Slider from '@material-ui/core/Slider';
import React from 'react';
import './Slider.css'
class CustomSlider extends React.Component {
    render() {
        return(
            <div className='slider'>
                <Slider defaultValue={30} aria-labelledby="disabled-slider" />
            </div>
        )
    }
}

export default CustomSlider