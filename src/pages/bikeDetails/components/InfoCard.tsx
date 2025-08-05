import { Card, CardContent, Typography, type CardProps } from '@mui/material';

interface InfoCardProps extends CardProps {}
interface TitleProps {
  children: React.ReactNode;
}
interface DescriptionProps {
  children: React.ReactNode;
}

const InfoCard = ({ children }: InfoCardProps) => {
  return (
    <Card variant="outlined" sx={{ minWidth: 275, mb: 2 }}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

const Title = ({ children }: TitleProps) => {
  return (
    <Typography variant="h6" component="div" gutterBottom>
      {children}
    </Typography>
  );
};

const Description = ({ children }: DescriptionProps) => {
  return <Typography variant="body2">{children}</Typography>;
};

InfoCard.Title = Title;
InfoCard.Description = Description;

export default InfoCard;
