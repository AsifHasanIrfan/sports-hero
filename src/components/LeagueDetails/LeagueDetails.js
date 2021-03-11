import { faFacebookSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faFlag, faFutbol, faMapMarkerAlt, faMarsStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import femaleImg from '../../images/female.png';
import maleImg from '../../images/male.png';
import './leagueDetails.css';

const LeagueDetails = () => {

    const  { idLeague }  = useParams()
    const [league, setLeague] = useState({})

    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => setLeague(data.leagues[0]))
    }, [idLeague])

    const { strLeague, intFormedYear, strCountry, strSport, strGender, strDescriptionEN, strDescriptionFR, strFacebook, strTwitter, strYoutube, strBanner, strLogo } = league;

    let leagueImg;
    if(strGender === "Male"){
        leagueImg = <img className="img-fluid" src={maleImg} alt="" />
    }
    else if(strGender === "Female"){
        leagueImg = <img className="img-fluid" src={femaleImg} alt="" />
    }
    else{
        leagueImg = <img className="img-fluid" src={femaleImg} alt="" />
    }

    return (
        <div className="league-details-bg">
            <div style={{backgroundImage: `url(${strBanner})`}} className="league-bg">
                <img src={strLogo} alt="" />
            </div>
            <div className="container">
                <div className="card mb-3 mt-3 league-card-bg">
                    <div className="row g-0 d-flex justify-content-center align-items-center">
                        <div className="col-md-6">
                        <div className="card-body">
                            <h5 className="card-title">{strLeague}</h5>
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear}</p>
                            <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</p>
                            <p><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</p>
                            <p><FontAwesomeIcon icon={faMarsStroke} /> Gender: {strGender}</p>
                        </div>
                        </div>
                        <div className="col-md-6 p-4">
                            {leagueImg}
                        </div>
                    </div>
                </div>
                <p>{strDescriptionEN}</p>
                <p className="mt-4">{strDescriptionFR}</p>
                <div className="text-center social-icon">
                    <a className="px-3 twitter" href={`https://${strTwitter}`}><FontAwesomeIcon icon={faTwitterSquare} /></a>
                    <a className="px-3 facebook" href={`https://${strFacebook}`}><FontAwesomeIcon icon={faFacebookSquare} /></a>
                    <a className="px-3 youtube" href={`https://${strYoutube}`}><FontAwesomeIcon icon={faYoutube} /></a>
                </div> 
            </div>
        </div>
    );
}

export default LeagueDetails;