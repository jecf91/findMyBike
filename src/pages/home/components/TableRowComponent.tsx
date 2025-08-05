import type { BikeRow } from '@/adapters';
import { getFormattedDateWithTime } from '@/utils';
import { TableCell, TableRow } from '@mui/material';
import { Link } from 'react-router';

interface TableRowComponentProps {
  bike: BikeRow;
}

export const TableRowComponent = ({ bike }: TableRowComponentProps) => {
  const { serial, dateStolen, model, manufacturer, frameModel, id } = bike;

  const displayDate = getFormattedDateWithTime(dateStolen);

  return (
    <TableRow>
      <TableCell component="th" scope="row">
        {displayDate}
      </TableCell>
      <TableCell>{serial}</TableCell>
      <TableCell>{model}</TableCell>
      <TableCell>{manufacturer}</TableCell>
      <TableCell>{frameModel ?? '-'}</TableCell>
      <TableCell>
        <Link to={`/bike/${id}`}>See Details</Link>
      </TableCell>
    </TableRow>
  );
};
