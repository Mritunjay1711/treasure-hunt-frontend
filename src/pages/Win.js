import React from "react";
import { useNavigate, useParams } from "react-router-dom";

const CongratulationsPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();

  const handleReplayClick = () => {
    navigate(`/game/${name}`)
  };

  return (
    <div className="container my-5 text-center">
      <h1>Congratulations {name}, you win!</h1>
      <button onClick={handleReplayClick} className="mt-3 btn btn-primary">
        Replay
      </button>
    </div>
  );
};

export default CongratulationsPage;
