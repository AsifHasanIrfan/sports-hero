import React, { useEffect, useState } from 'react';
import Leagues from '../Leagues/Leagues';
import './home.css';

const Home = () => {

    const [leagues, setLeagues] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_leagues.php?c=England')
        .then(res => res.json())
        .then(data => setLeagues(data.countrys))
    }, [])

    return (
        <div className="home-bg">
            <div className="header-bg">
                <h2>Sports Hero</h2>
            </div>
            <div className="container">
                <div className="row">
                {
                leagues.map(league => <Leagues key={league.idLeague} league={league}></Leagues>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;