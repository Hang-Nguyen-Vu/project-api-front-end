import { Link } from "react-router-dom";

export const BackButton = () => {
  return (
    <div className="button-container">
      <Link to="/" className="back-button">
        <button type="button">Go Back</button>
      </Link>
    </div>
  );
}