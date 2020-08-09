// Code CoordinatesButton Component Here
import React from 'react';

class CoordinatesButton extends React.Component {
    handleClick = (e) => {
        e.persist()
        const coordinatesArray = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coordinatesArray)
    }

    render() {

        return (
            <div>
                <button 
                onClick={this.handleClick}> Coordinates </button>
            </div>
        )
    }
}

export default CoordinatesButton