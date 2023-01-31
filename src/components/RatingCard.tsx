import React from "react";
import Card from "./Card";
import starImg from "../images/icon-star.svg";
import "./RatingCard.css";

const ratingStars: { id: number; selected: boolean }[] = [
  { id: 1, selected: false },
  { id: 2, selected: false },
  { id: 3, selected: false },
  { id: 4, selected: false },
  { id: 5, selected: false },
];

type RatingCardProps = {
  rating: number;
  setRating: (rating: number) => void;
  showThankCard: boolean;
  setShowThankCard: (showThankCard: boolean) => void;
};

const RatingCard = ({
  rating,
  setRating,
  showThankCard,
  setShowThankCard,
}: RatingCardProps) => {
  const [stars, setStars] = React.useState(ratingStars);

  const handleSelect = (id: number) => {
    const starlist = stars.map((star) =>
      star.id === id ? { ...star, selected: !star.selected } : star
    );
    setStars(starlist);
  };

  const handleSubmit = () => {
    if (!rating) return;
    setShowThankCard(true);
  };

  return (
    <Card>
      <div className="ratingCard-container">
        <div className="star-container">
          <img src={starImg} alt="star" />
        </div>

        <h2 className="title"> How did we do?</h2>
        <p style={{ textAlign: "start" }} className="text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>

        <div className="ratingStar-container">
          {stars.map((star) => (
            <div
              key={star.id}
              className={star.selected ? "rating-star selected" : "rating-star"}
              onClick={() => {
                handleSelect(star.id);
                setRating(star.id);
              }}
            >
              {star.id}
            </div>
          ))}
        </div>
        <button className="rating-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </Card>
  );
};

export default RatingCard;
