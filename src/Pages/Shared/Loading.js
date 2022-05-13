import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            {/* <button className="btn loading mx-8 animate-pulse">Loading...</button> */}
            <img className='sm:w-4/12 lg:w-28 md:w-32' src="https://icon-library.com/images/spinner-icon-gif/spinner-icon-gif-25.jpg" alt="" />
            {/* <img src="https://i.pinimg.com/originals/61/92/e4/6192e41a4b366ebc4eb86d4444c79177.gif" alt="" /> */}
        </div>
    );
};

export default Loading;