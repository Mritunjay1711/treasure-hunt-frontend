import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='App' style={{ backgroundImage: "url('/homebg.jpg')", backgroundSize: 'cover', height: '100vh', overflow: 'hidden' }}>
            <h1 className='text-center'>Welcome to Treasure Hunt Game</h1>
            <br />
            <div className="jumbotron text-center">
                <h1 className="display-4 font-italic">Step into a world of mystery and intrigue with our interactive treasure hunt game.</h1>
                <p className="lead text-lg">The treasure awaits... will you find it?</p>
                <hr className="my-4" />
                <p><h4>Join the adventure and embark on a journey to uncover the hidden treasure.</h4></p>
                <Link className="btn btn-primary btn-lg" to="/login" role="button">Start the hunt</Link>
            </div>
        </div>
    );
}

export default Home;