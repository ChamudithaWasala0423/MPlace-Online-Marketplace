import { FunctionComponent } from 'react';

interface RatingProps {
  rating: number;
}

const Rating: FunctionComponent<RatingProps> = ({ rating }) => {
  // Create an array with 5 elements and map through them to render stars
  const stars = Array.from({ length: 5 }, (_, index) => (
    <img
      key={index}
      className={`w-5 h-5 ${index < rating ? 'opacity-100' : 'opacity-25'}`}
      alt="star"
      src="/path-to-your-icons/Vector.svg"
    />
  ));

  return <div className="flex space-x-1">{stars}</div>;
};

export default Rating;