import React, { useState } from "react";
import people from "../Data";
import "../App";
import {AiOutlineDoubleLeft, AiOutlineDoubleRight} from 'react-icons/ai'

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, image, job, text } = people[index];
  const [view, setView] = useState(false);
  console.log(people);

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextperson = () => {
    setIndex((index) => {
      let newindex = index + 1;
      return checkNumber(newindex);
    });
  };
  const previousperson = () => {
    setIndex((index) => {
      let newindex = index - 1;
      return checkNumber(newindex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
      </div>
      <h4>{name}</h4>
      <p className="job-text">{job.toUpperCase()}</p>
      <p>
        {view ? text : ` ${text.slice(0, 100)}...`}
        <button className="see-btn"
          onClick={() => {
            setView(!view);
          }}
        >
          {view ? "See Less" : "See More"}
        </button>
      </p>
      <div className="btn-container">
        <button className="prev-btn" onClick={previousperson}>
        <AiOutlineDoubleLeft/>
        </button>
        <button className="next-btn" onClick={nextperson}>
          <AiOutlineDoubleRight/>
        </button>
      </div>
      <button className="surprise" onClick={randomPerson}>surprise me</button>
    </article>
  );
};

export default Review;
