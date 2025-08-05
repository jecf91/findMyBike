import { useState } from 'react';

export type PageChangeEvent = React.ChangeEvent<unknown>;

export interface PaginationHook {
  currentPage: number;
  handlePageChange: (event: PageChangeEvent, value: number) => void;
}

export const usePagination = (): PaginationHook => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (_: PageChangeEvent, value: number) => {
    setCurrentPage(value);
  };

  return { currentPage, handlePageChange };
};
