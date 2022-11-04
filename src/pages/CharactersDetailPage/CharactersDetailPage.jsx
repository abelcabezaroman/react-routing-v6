import { Link, useParams, useLocation, useNavigate } from "react-router-dom";

export default function CharactersDetailPage() {
  const { idCharacter } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  console.log(idCharacter);
  console.log(location);
  return (
    <div>
      Hola soy detail page
      <Link to="/">Home</Link>
      <button onClick={() => navigate("/")}>Go back</button>
    </div>
  );
}
