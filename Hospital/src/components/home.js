import React, { useEffect } from 'react';

const Home = () => {

    useEffect(() => {
        document.title = "Home";
    }, []);
    return (
        <div className="text-center my-0 my-5">
            
        </div>
    );
}


export default Home;