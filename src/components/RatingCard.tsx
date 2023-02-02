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
  const [id, setId] = React.useState<number>(0);

  const handleSelect = (id: number) => {
    const starList = stars.map((star) =>
      star.id !== id && star.selected
        ? { ...star, selected: !star.selected }
        : star.id === id
        ? { ...star, selected: !star.selected }
        : star
    );
    setStars(starList);
  };

  const handleSubmit = () => {
    const starSelected = stars.filter(
      (star) => star.id === id && star.selected
    );

    if (!starSelected.length) return;
    setShowThankCard(true);
  };

  return (
    <Card>
      <div className="star-container">
        <img src={starImg} alt="star" />
      </div>

      <h2 className="rating-title"> How did we do?</h2>
      <p className="rating-text">
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>

      <div className="ratingStar-container">
        {stars.map((star) => (
          <div
            key={star.id}
            className={star.selected ? "rating-star selected" : "rating-star"}
            onClick={() => {
              handleSelect(star.id);
              setRating(star.id);
              setId(star.id);
            }}
          >
            {star.id}
          </div>
        ))}
      </div>
      <button className="rating-btn" onClick={handleSubmit}>
        Submit
      </button>
    </Card>
  );
};

export default RatingCard;
