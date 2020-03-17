import React from 'react';
import { Col, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

const Card = (props) => {
  const { month } = props;
  return (
    <Col className="report-card" l={2} s={6} m={3}>
      <div className="card">
        <div className="card-content">
          <span class="card-title">{props.title}</span>
          <p>It contains monthly report of quality control and maintanance</p>
        </div>
        <div class="card-action center">
          <Link to="dashboard/regent-refrigerator">
            <Button className="red" waves="light">View Detail</Button>
          </Link>
        </div>
      </div>
    </Col>
  )
};

export default Card;
