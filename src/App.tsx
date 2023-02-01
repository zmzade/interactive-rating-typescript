import React from "react";
import Card from "./components/Card";
import RatingCard from "./components/RatingCard";
import ThankyouCard from "./components/ThankyouCard";

function App() {
  const [showThankCard, setShowThankCard] = React.useState<boolean>(false);
  const [rating, setRating] = React.useState<number>(0);

  return (
    <Card>
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
    </Card>
  );
}

export default App;
