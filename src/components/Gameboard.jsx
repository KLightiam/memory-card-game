import { useEffect } from "react";
import { useState } from "react";
// import "../styles/Gameboard.css";
import Header from "./Header";
import shuffleArr from "./shuffleArr";

export default function Gameboard() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isClicked, setIsClicked] = useState([]);

  function Image({ card }) {
    // const [isClicked, setIsClicked] = useState(false);
    // useEffect(()=>{
    //   setIsClicked(!isClicked);
    //   console.log(cards);
    //   // console.log('afa');
    // },[cards]);
    return (
      <img
        src={card.urls.full}
        alt={card.alt_description}
        srcSet=""
        onClick={({ target }) => {
          if (isClicked.includes(card)) {
            // console.log("its clicked");
            setIsGameOver(true);
            setIsClicked([]);
          } else {
            // setIsClicked(true);
            setIsClicked((prev) => [...prev, card]);
            // console.log(isClicked);
            setCards(shuffleArr([...cards]));
            setScore(score + 1);
            score >= highScore ? setHighScore(score + 1) : null;
          }
        }}
      />
    );
  }

  useEffect(() => {
    (async function fetchData() {
      const response = await fetch(
        `https://api.unsplash.com/photos?client_id=${
          import.meta.env.VITE_APP_UNSPLASH_API_KEY
        }`
      );
      const data = await response.json();
      // console.log(data);
      setCards(data);
    })();
  }, [isGameOver]);

  return (
    <>
      <Header score={score} highScore={highScore} />
      <div>
        {isGameOver ? (
          <>
            <p>"Game Over"</p>
            <button
              type="button"
              onClick={() => {
                setIsGameOver(false);
                setScore(0);
              }}
            >
              Restart Game
            </button>
          </>
        ) : cards.length === 0 ? (
          <p>Images loading...</p>
        ) : (
          <section>
            {cards.map((card) => (
              <Image card={card} key={card.id} />
            ))}
          </section>
        )}
      </div>
    </>
  );
}
