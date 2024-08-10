import React, { useEffect, useRef, useState } from 'react';
import { GiTrophyCup } from 'react-icons/gi';
import AnimatedCounter from './AnimatedCounter';
import { getScore } from '../api/apiCall';

const Score = ({ scoreOn, setScoreOn }) => {
  const scoreRef = useRef(null);
  const [winners, setWinners] = useState([]);


  const handleToggle = () => {
    setScoreOn(!scoreOn);
    console.log(scoreOn);
  };

  const handleClickOutside = e => {
    if (scoreRef.current && !scoreRef.current.contains(e.target)) {
      setScoreOn(false);
    }
  };

  useEffect(() => {
    async function fetchData() {
      const response = await getScore();
      const data = response.data[0];
      console.log('data', data);
  
      let winnerArr = [];
  
      // Iterate over object keys
      for (let key in data) {
        if (data.hasOwnProperty(key)) {
          let res = {};
          res["team"] = key;
          res["point"] = data[key];
          winnerArr.push(res);
        }
      }
      console.log(winnerArr);
      
      setWinners(winnerArr);
      console.log(winners, 'win');
    }
  
    fetchData();
  }, []);
  

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <section className="mt-72 z-150 fixed flex gap-1">
      <div
        onClick={handleToggle}
        className="h-16 w-10 hover:w-12 bg-theme_yellow rounded-r-full flex justify-center items-center cursor-pointer hover:bg-theme_gold transition-all duration-300 ease-in-out"
      >
        <GiTrophyCup />
      </div>

      {scoreOn && (
        <div
          ref={scoreRef}
          className="w-72 flex animate-fade-right animate-duration-100"
        >
          <div className="p-8 w-72 ml-2 bg-theme_yellow font-poppins rounded-3xl flex flex-col">
            <h1 className="font-semibold text-xl text-left">Score Board</h1>

            <div className="bg-black h-[.1px] w-full my-2" />

            <ul className="text-xl font-semibold">
              {winners.map((winner, index) => (
                <li key={index} className="flex items-center gap-3">
                  {winner.team}. {/* Showing rank */}
                  {' '}
                  <span className="text-2xl">
                    {winner.point > 0 ? (
                      <AnimatedCounter endValue={winner.point} duration={1000} />
                    ) : (
                      0
                    )}
                  </span>
                </li>
              ))}
            </ul>

            <div className="bg-black w-full h-[.1px] my-2" />

            {/* <ul className="text-lg">
              {teamPoints.map((team, index) => (
                <li key={index} className="flex items-center gap-3">
                  {team.team}
                  {' '}
                  <span className="text-xl">
                    {team.point > 0 ? (
                      <AnimatedCounter endValue={team.point} duration={1000} />
                    ) : (
                      0
                    )}
                  </span>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
      )}
    </section>
  );
};

export default Score;
