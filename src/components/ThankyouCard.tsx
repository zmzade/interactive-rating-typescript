import Card from "./Card";
import thankyouImg from "../images/illustration-thank-you.svg";
import "./ThankyouCard.css";
type ThankyouCardProps = {
  rating: number;
};

const ThankyouCard = ({ rating }: ThankyouCardProps) => {
  return (
    <Card>
      <div className="thankImg-container">
        <img src={thankyouImg} alt="thank you" />
      </div>
      <p className="message">You selected {rating} out of 5</p>
      <h2 className="title">Thank you!</h2>
      <p className="text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </Card>
  );
};

export default ThankyouCard;
