import { Card, CardContent, Typography } from "@mui/material";
import "./InfoBox.css";

const InfoBox = ({ title, cases, total, isRed, active, ...props }) => {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && "infoBox--selected"}  ${
        isRed && "infoBox--red"
      }`}
    >
      <CardContent>
        <Typography className="infoBox__title" color="textSecondary">
          {title}
        </Typography>
      </CardContent>

      <h2 className="infoBox__cases">{cases}</h2>

      <Typography className="infoBox__total" color="textSecondary">
        {total}
      </Typography>
    </Card>
  );
};

export default InfoBox;
