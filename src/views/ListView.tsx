import ListComponent from "../components/ListComponent";

type Props = {
  rows : { id: number; nr: number; date: Date; country: string; reason: string; cities: string; }[];
}

export default function ListView(props:Props) {
  return (
    <div>
        <ListComponent rows={props.rows}/>
    </div>
  )
}
