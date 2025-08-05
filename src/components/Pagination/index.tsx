import { Pagination, type PaginationProps } from '@mui/material';

interface PaginationComponentProps extends PaginationProps {}

export const PaginationComponent = ({ ...props }: PaginationComponentProps) => {
  return <Pagination color="primary" {...props} />;
};
