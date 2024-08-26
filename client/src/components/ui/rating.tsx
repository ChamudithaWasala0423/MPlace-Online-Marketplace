import { FunctionComponent } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';

interface RatingProps {
  rating: number; // The rating value (e.g., 3 for 3 stars)
}

const Rating: FunctionComponent<RatingProps> = ({ rating }) => {
  // Create an array with 5 elements and map through them to render stars
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className="text-yellow-500" style={{ fontSize: '25px' }}>
      {index < rating ? <FaStar /> : <FaRegStar />}
    </span>
  ));

  return <div className="flex space-x-1">{stars}</div>;
};

export default Rating;