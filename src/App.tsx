import React from "react";
import RatingCard from "./components/RatingCard";
import ThankyouCard from "./components/ThankyouCard";

function App() {
  const [showThankCard, setShowThankCard] = React.useState<boolean>(false);
  const [rating, setRating] = React.useState<number>(0);

  return (
    <>
      {showThankCard ? (
        <ThankyouCard rating={rating} />
      ) : (
        <RatingCard
          rating={rating}
          setRating={setRating}
          showThankCard={showThankCard}
          setShowThankCard={setShowThankCard}
        />
      )}
    </>
  );
}

export default App;
