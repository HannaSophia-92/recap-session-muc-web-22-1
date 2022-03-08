export default function Navigation({ currentPage, handleNavigate }) {
  return (
    <nav>
      <button
        disabled={currentPage === 'page1'}
        onClick={() => handleNavigate('page1')}
      >
        Page 1
      </button>
      <button
        disabled={currentPage === 'page2'}
        onClick={() => handleNavigate('page2')}
      >
        Page 2
      </button>
      <button
        disabled={currentPage === 'page3'}
        onClick={() => handleNavigate('page3')}
      >
        Page 3
      </button>
    </nav>
  );
}
