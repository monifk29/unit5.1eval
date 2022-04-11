import { useState } from "react";
import "./styles.css";
function App() {
  const [Score, setScore] = useState(76);
  const [Wicket, setWicket] = useState(2);
  const [Balls, setBalls] = useState(50);
  const Won = { Score };

  // var Overs = {Balls}/6;
  // var over = Math.floor({Balls}/6)
  return (
    <div className="App">
      <h3>India:</h3>
      <div className="banner">
        <div>
          Score:{Score}
          <h1 className="scoreCount">
            {
              // show "score" here
              Score
            }
          </h1>
        </div>
        <div>
          Wicket:{Wicket}
          <h1 className="wicketCount">
            {
              // show wicket here
              Wicket
            }
          </h1>
        </div>

        <div>
          Over:{Math.floor(Balls / 6)}.{Balls % 6}
          <h1 className="overCount">
            {
              // Show Over here in the format: "over.ball" eg: 4.5 means 4th over and 5th ball
              // if 1 more ball is thrown then over is now 5.0
              Math.floor(Balls / 6)
            }
            .
            {
              Balls % 6
              // you have to write logic to form this string from current ball number.
            }
          </h1>
        </div>
      </div>

      <div className="addScore">
        Add Score
        {/* these buttons should add the respective amount in the score */}
        <button
          className="addScore1"
          onClick={() => {
            if (Score > 100) {
              return;
            }
            setScore(Score + 1);
          }}
        >
          Add 1
        </button>
        <button
          className="addScore4"
          onClick={() => {
            if (Score > 100) {
              return;
            }
            setScore(Score + 4);
          }}
        >
          Add 4
        </button>
        <button
          className="addScore6"
          onClick={() => {
            if (Score > 100) {
              return;
            }
            setScore(Score + 6);
          }}
        >
          Add 6
        </button>
      </div>

      <div className="addWicket">
        Add Wicket
        {/* Increase the count of wicket */}
        <button
          onClick={() => {
            if (Wicket >= 12) {
              return;
            }
            setWicket(Wicket + 1);
          }}
        >
          Add 1 wicket
        </button>
      </div>

      <div className="addBall">
        Add ball
        {/* Increase the total number of balls thrown here. */}
        <button
          onClick={() => {
            setBalls(Balls + 1);
          }}
        >
          Add 1
        </button>
      </div>

      <h1> {{ Score } <= 100 ? "" : "India Won"}</h1>
      {/* If score reaches greater than 100, show text "India Won" without quotes in h1 tag with class name 'status' */}
    </div>
  );
}

export default App;
