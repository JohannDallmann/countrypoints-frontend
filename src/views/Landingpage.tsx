import { Button, Typography } from "@mui/material";
import PublicIcon from '@mui/icons-material/Public';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import { useNavigate } from "react-router-dom";

export default function Landingpage() {
  const navigate = useNavigate();
  return (
    <Typography sx={{ marginBottom: 2 }}>
      <h1>Herzlich Willkommen!</h1>
      <p>Schau dir deine Länderpunkte in der Listenansicht oder auf der Karte an.</p>
      <Button
        variant="contained"
        onClick={() => navigate("/liste")}
        startIcon={<FormatListBulletedIcon />}>
        Liste
      </Button>
      <Button
        variant="contained"
        onClick={() => navigate("/karte")}
        startIcon={<PublicIcon />}>
        Karte
      </Button>
    </Typography>
  )
}
