import React from 'react';
import '../Main.scss';

interface PaginationProps {
  tab: number;
  setTab: (tab: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ tab, setTab }) => {
  return (
    <div className="main__tab--pagination">
      <button
        type="button"
        className={tab === 1 ? 'main__tab--circle-active' : 'main__tab--circle'}
        onClick={() => setTab(1)}
      >
        {' '}
      </button>
      <button
        type="button"
        className={tab === 2 ? 'main__tab--circle-active' : 'main__tab--circle'}
        onClick={() => setTab(2)}
      >
        {' '}
      </button>
      <button
        type="button"
        className={tab === 3 ? 'main__tab--circle-active' : 'main__tab--circle'}
        onClick={() => setTab(3)}
      >
        {' '}
      </button>
    </div>
  );
};

export default Pagination;
