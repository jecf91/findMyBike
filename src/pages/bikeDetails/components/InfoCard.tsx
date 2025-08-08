import { Card, CardContent, Typography, type CardProps } from '@mui/material';

interface InfoCardProps extends CardProps {}
interface TitleProps {
  children: React.ReactNode;
}
interface DescriptionProps {
  children: React.ReactNode;
}
interface ActionProps {
  children: React.ReactNode;
}

const InfoCard = ({ children }: InfoCardProps) => {
  return (
    <Card
      sx={{
        height: '100%',
        minHeight: '150px',
        maxHeight: '200px',
      }}
    >
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

const Action = ({ children }: ActionProps) => {
  return <>{children}</>;
};

InfoCard.Title = Title;
InfoCard.Description = Description;
InfoCard.Action = Action;

export default InfoCard;
