import { Box, Typography } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

type Props = {
    rows : { id: number; nr: number; date: Date; country: string; reason: string; cities: string; }[];
  }

export default function ListComponent(props:Props) {

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

    
  
    return (
    <Box sx={{ maxWidth: '900px', marginTop: 2}}>
        <Typography variant='h3'>Übersicht über besuchte Länder</Typography>
        <DataGrid
        rows={props.rows}
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
