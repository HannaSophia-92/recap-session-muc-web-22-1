import { useState } from 'react';
import './Card.css';

export default function Card({
  title,
  text,
  imageSize,
  isBookmarked,
  handleBookmark,
}) {
  const [isImageVisible, setIsImageVisible] = useState(false);

  return (
    <section className="Card">
      <h2>{title}</h2>
      <button onClick={handleBookmark}>
        {isBookmarked ? 'Is bookmarked' : 'Is not bookmarked'}
      </button>
      <p>{text}</p>
      <button onClick={handleClick}>Toggle image</button>
      {isImageVisible ? (
        <img
          className="Card__image"
          src={'https://source.unsplash.com/random/' + imageSize}
          alt=""
        />
      ) : (
        <div>Image is hidden</div>
      )}
    </section>
  );

  function handleClick() {
    setIsImageVisible(!isImageVisible);
  }
}
