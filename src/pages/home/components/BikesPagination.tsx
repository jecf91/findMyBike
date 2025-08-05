import { PaginationComponent } from '@/components/Pagination';
import { Box } from '@mui/material';
import type { SearchCount } from '@/models';
import type { PaginationHook } from '@/hooks';
import { getTotalPages } from '@/utils';

interface BikesPaginationProps extends PaginationHook {
  searchCountData: SearchCount | undefined;
  isDisabled: boolean;
}

export const BikesPagination = ({
  searchCountData,
  currentPage,
  isDisabled,
  handlePageChange,
}: BikesPaginationProps) => {
  return (
    searchCountData &&
    searchCountData.proximity > 0 && (
      <Box component="div" sx={{ mt: '20px' }}>
        <PaginationComponent
          count={getTotalPages(searchCountData.proximity)}
          page={currentPage}
          onChange={handlePageChange}
          disabled={isDisabled}
        />
      </Box>
    )
  );
};
