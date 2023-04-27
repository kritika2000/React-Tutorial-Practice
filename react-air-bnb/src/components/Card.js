import React from "react";

function Card(props) {
  const { title, description, coverImg, price, stats, location } = props;
  return (
    <div className="card--container">
      <span className="card--location">{location}</span>
      <img className="card--image" src={`./resources/${coverImg}`} />
      <div className="rating--container">
        <img className="star--logo" src="./resources/star.png" />
        <p className="card--rating">{`${stats.rating} (${stats.reviewCount}) USA`}</p>
      </div>
      <p className="card--title">{title}</p>
      <p className="card--price">{`From $${price} / person`}</p>
    </div>
  );
}

export default Card;
