import React from 'react';
import { CaretLeftFill, CaretRightFill, CaretUpFill, CaretDownFill } from 'react-bootstrap-icons';


const Loading = () => {
    return (
        <div className='loading-container'>
            <CaretLeftFill className='loading loading--left' />
            <CaretUpFill className='loading loading--top' />
            <CaretRightFill className='loading loading--right' />
            <CaretDownFill className='loading loading--down' />
        </div>
    )
}

export default Loading