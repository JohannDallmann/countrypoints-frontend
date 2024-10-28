import { Typography } from "@mui/material";
import ImageButtonComponent from "../components/ImageButtonComponent";

type Props = {
  open : boolean;
}

export default function Landingpage(props: Props) {
  
  return (
    <Typography sx={{ marginBottom: 2, width: props.open ? "60vw" : "65vw"}}>
      <Typography variant="h3">Herzlich Willkommen!</Typography>
      <Typography variant="body1">Schau dir deine Länderpunkte in der Listenansicht oder auf der Karte an.</Typography>
      <ImageButtonComponent/>
    </Typography>
  )
}
