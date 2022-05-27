import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns } from '../../../apis/dashboard/dummydata'
import { useContext } from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import { Data } from '../../../routes/Routing'

const Datatable = (props) => {
  const { cars } = useContext(Data)

  return (
    <>
      <div className="datatable">
        <Box sx={{ display: 'flex', pb: '16px' }}>
          <Box sx={{ width: '4px', height: '24px', background: '#0D28A6', mr: '8px' }}></Box>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            List Car
          </Typography>
        </Box>
        <Box
          sx={{
            height: '90%',
            width: 1,
            '.style-header': {
              backgroundColor: '#CFD4ED',
            },
          }}
        >
          <DataGrid
            className="datagrid"
            rows={cars}
            columns={userColumns}
            getRowId={(row) => row._id}
            pageSize={8}
            rowsPerPageOptions={[10]}
            sx={{ fontWeight: 'bold' }}
          />
        </Box>
      </div>
    </>
  )
}

export default Datatable
