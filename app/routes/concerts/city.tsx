import { useParams } from "react-router";

export default function City() {
  const { city } = useParams();

  return <h2>Concerts in {city}</h2>;
}
