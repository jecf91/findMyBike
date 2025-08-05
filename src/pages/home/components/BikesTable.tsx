import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from '@mui/material';
import { TABLE_HEADERS } from '../constants';
import { TableRowComponent } from './TableRowComponent';
import type { BikeRow } from '@/adapters';

interface BikesTableProps {
  rows: BikeRow[];
}

export const BikesTable = ({ rows }: BikesTableProps) => {
  return (
    <Box component="section">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              {TABLE_HEADERS.map((header) => (
                <TableCell key={header}>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows?.map((bike) => (
              <TableRowComponent bike={bike} key={bike.id} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
