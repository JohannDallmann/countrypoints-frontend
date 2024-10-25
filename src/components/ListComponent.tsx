import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function ListComponent() {

    const columns: GridColDef[] = [
        { 
            field: 'nr', 
            headerName: 'Nr.',
            sortable: true
        },
        { 
            field: 'date', 
            headerName: 'Datum',
            sortable: false,
            valueFormatter: (date : Date) => {
                return date.getDate().toString().padStart(2, '0') + "." 
                + (date.getMonth() + 1).toString().padStart(2, '0') + "." 
                + date.getFullYear().toString().padStart(2, '0');
            }
         },
        { 
            field: 'country', 
            headerName: 'Land',
            sortable: true
        },
        { 
            field: 'game', 
            headerName: 'Spiel',
            sortable: false
        },
        { 
            field: 'stadium', 
            headerName: 'Stadion',
            sortable: false
        },
    ]

    const rows = [
        { id: 1, nr: 1, date : new Date('2001-12-01'), country : 'Deutschland', game : 'Union 0:4 Frankfurt', stadium: 'Alte Försterei' },
        { id: 2, nr: 2, date : new Date('2010-12-31'), country : 'Italien', game : 'Pula 1:3 Orrolese', stadium: 'Stadio Communale' },
        { id: 3, nr: 3, date : new Date('2011-01-25'), country : 'Spanien', game : 'Espanyol 0:1 Atletico', stadium: 'Estadio del Prat' },
    ];
  
    return (
    <div style={{ maxWidth: '900px' }}>
        <h1>Länderpunkte Übersicht</h1>
        <DataGrid
        rows={rows}
        columns={columns}
        disableColumnResize
        disableRowSelectionOnClick
        autosizeOnMount
        hideFooterPagination
        disableColumnFilter
        disableColumnMenu/>
    </div>
  )
}
