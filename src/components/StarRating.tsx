interface Props {
  rating: number;
}

function StarRating({ rating }: Props) {
  return (
    <span className="text-yellow-400">
      {"★".repeat(rating)}
      <span className="text-gray-600">{"★".repeat(5 - rating)}</span>
    </span>
  );
}

export default StarRating;