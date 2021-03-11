import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Leagues = (props) => {
    const { strLeague, strBadge, strSport, idLeague } = props.league;

    return (
        <div className="col-md-6 col-lg-4 mt-4">
            <Card className="text-center card-bg">
                <Card.Img variant="top" src={strBadge} alt="strBadge" className="p-5" />
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <p>Sports type: {strSport}</p>
                    <Button as={Link} to={`/league/${idLeague}`} variant="primary">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
                </Card.Body>
            </Card>
        </div> 
);
};

export default Leagues;