import { Box, Typography } from '@mui/material';
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
            field: 'reason', 
            headerName: 'Reisegrund',
            sortable: false
        },
        { 
            field: 'cities', 
            headerName: 'Besuchte Städte',
            sortable: false
        },
    ]

    const rows = [
        { id: 1, nr: 1, date : new Date('2001-12-01'), country : 'Deutschland', reason : 'Geburt', cities: 'Berlin, Frankfurt' },
        { id: 2, nr: 2, date : new Date('2010-12-31'), country : 'Italien', reason : 'Arbeit', cities: 'Rom' },
        { id: 3, nr: 3, date : new Date('2011-01-25'), country : 'Spanien', reason : 'Urlaub', cities: 'Madrid, Barcelona, Bilbao' },
    ];
  
    return (
    <Box sx={{ maxWidth: '900px' }}>
        <Typography variant='h3'>Übersicht über besuchte Länder</Typography>
        <DataGrid
        rows={rows}
        columns={columns}
        sx={{marginTop: 3}}
        disableColumnResize
        disableRowSelectionOnClick
        autosizeOnMount
        hideFooter
        disableColumnFilter
        disableColumnMenu/>
    </Box>
  )
}
