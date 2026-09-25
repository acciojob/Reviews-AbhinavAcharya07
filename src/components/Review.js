import React, { useState } from 'react';
import reviews from './data'; // or define reviews array locally if data.js is separate

const Review = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = reviews[index];

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

  const nextReview = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex + 1;
      return checkNumber(newIndex);
    });
  };

  const prevReview = () => {
    setIndex((currentIndex) => {
      const newIndex = currentIndex - 1;
      return checkNumber(newIndex);
    });
  };

  const randomReview = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
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
      <h4 id={`author-${id}`} className="author">
        {name}
      </h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevReview}>
          prev
        </button>
        <button className="next-btn" onClick={nextReview}>
          next
        </button>
      </div>
      <button className="random-btn" onClick={randomReview}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
