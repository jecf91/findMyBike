import {
  Breadcrumbs,
  Link,
  Typography,
  type BreadcrumbsProps,
} from '@mui/material';
import { Link as RouterLink } from 'react-router';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

interface BreadcrumbsNavProps extends BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const BreadcrumbsNav = ({ items, sx }: BreadcrumbsNavProps) => {
  const lastIndex = items.length - 1;

  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2, ...sx }}>
      {items.map((item, index) =>
        item.to && index !== lastIndex ? (
          <Link
            key={item.label + index}
            component={RouterLink}
            to={item.to}
            underline="hover"
            color="inherit"
          >
            {item.label}
          </Link>
        ) : (
          <Typography key={item.label + index} color="text.primary">
            {item.label}
          </Typography>
        )
      )}
    </Breadcrumbs>
  );
};
