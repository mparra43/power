import { TiChevronLeft } from 'react-icons/Ti';
import { TiChevronRight } from 'react-icons/Ti';


interface PaginationProps {
  currentPage: number
  totalPages: number
  prevPage: () => void
  nextPage: () => void
}

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, prevPage, nextPage }) => {

  return (
      <div>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={prevPage} disabled={currentPage === 1} style={{ borderColor: 'transparent', backgroundColor: 'transparent' }}>
          <TiChevronLeft />
        </button>
        <button onClick={nextPage} disabled={currentPage === totalPages} style={{ borderColor: 'transparent', backgroundColor: 'transparent' }}>
          <TiChevronRight />
        </button>
      </div>
  );
}