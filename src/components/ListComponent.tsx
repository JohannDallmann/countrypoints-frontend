import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function ListComponent() {

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'date', headerName: 'Datum' },
        { field: 'country', headerName: 'Land' },
        { field: 'stadium', headerName: 'Stadion' },
    ]

    const rows = [
        { id: 1, date : new Date('2001-12-01'), country : 'Deutschland', game : 'Union 0:4 Frankfurt', stadium: 'Alte Försterei' },
        { id: 2, date : new Date('2010-12-31'), country : 'Italien', game : 'Pula 1:3 Orrolese', stadium: 'Stadio Communale' },
        { id: 3, date : new Date('2011-01-25'), country : 'Spanien', game : 'Espanyol 0:1 Atletico', stadium: 'Estadio del Prat' },
    ];
  
    return (
    <div>
        <h1>Länderpunkte Übersicht</h1>
        <DataGrid
        rows={rows}
        columns={columns}/>
    </div>
  )
}
