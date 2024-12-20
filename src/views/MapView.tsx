import { Box} from "@mui/material";
import MapComponent from "../components/MapComponent";

type Props = {
  rows : { id: number; nr: number; date: Date; country: string; reason: string; cities: string; }[];
  drawerWidth : number;
  open : boolean;
}

export default function MapView(props:Props) {
  return (
    <Box>
      <MapComponent rows={props.rows} drawerWidth={props.drawerWidth} open={props.open}/>
    </Box>
  )
}
