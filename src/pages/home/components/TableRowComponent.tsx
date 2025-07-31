import type { BikeRow } from '@/adapters';
import { TableCell, TableRow } from '@mui/material';

interface TableRowComponentProps {
  bike: BikeRow;
}

export const TableRowComponent = ({ bike }: TableRowComponentProps) => {
  const { serial, dateStolen, model, manufacturer, frameModel } = bike;

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {dateStolen}
      </TableCell>
      <TableCell>{serial}</TableCell>
      <TableCell>{model}</TableCell>
      <TableCell>{manufacturer}</TableCell>
      <TableCell>{frameModel ?? '-'}</TableCell>
    </TableRow>
  );
};
