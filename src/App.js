import { useState } from 'react';
import Navigation from './Navigation.js';
import './App.css';
import Card from './Card.js';

function App() {
  const [currentPage, setCurrentPage] = useState('page1');
  const [cards, setCards] = useState([
    {
      title: 'Hello world',
      text: 'This works very well',
      imageSize: '300x200',
      id: '1',
      isBookmarked: false,
    },
    {
      title: 'This is also nice',
      text: 'This is a different text',
      imageSize: '100x400',
      id: '2',
      isBookmarked: true,
    },
  ]);

  return (
    <div className="App">
      {currentPage === 'page1' &&
        cards.map((card, index) => (
          <Card
            key={card.id}
            title={card.title}
            text={card.text}
            imageSize={card.imageSize}
            isBookmarked={card.isBookmarked}
            handleBookmark={() => handleBookmark(index)}
          />
        ))}
      {currentPage === 'page2' && (
        <section>
          <h2>This is the text page</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            omnis doloribus voluptatibus, provident voluptatem, alias ipsam,
            quaerat voluptate inventore quis iure debitis. Deleniti alias
            quisquam, ratione laudantium dolorem nostrum facere.
          </p>
        </section>
      )}
      {currentPage === 'page3' && <div>This is page three.</div>}

      <Navigation currentPage={currentPage} handleNavigate={handleNavigate} />
    </div>
  );

  function handleBookmark(index) {
    setCards(
      cards.map((card, cardIndex) => ({
        ...card,
        isBookmarked:
          cardIndex === index ? !card.isBookmarked : card.isBookmarked,
      }))
    );
  }

  function handleNavigate(pageName) {
    setCurrentPage(pageName);
  }
}

export default App;
