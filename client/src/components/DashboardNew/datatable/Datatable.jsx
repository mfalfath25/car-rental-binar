import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns, userRows } from '../../../apis/dashboard/dummydata'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

const Datatable = (props) => {
  const [data, setData] = useState(userRows)

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id))
  }
  // console.log(userRows)
  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      headerClassName: 'style-header',
      width: 140,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
              Delete
            </div>
          </div>
        )
      },
    },
  ]
  return (
    <>
      <div className="datatable">
        {/* <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div> */}
        <Box sx={{ display: 'flex', pb: '16px' }}>
          <Box sx={{ width: '4px', height: '24px', background: '#0D28A6', mr: '8px' }}></Box>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
            List Car
          </Typography>
        </Box>
        <Box
          sx={{
            height: '100%',
            width: 1,
            '.style-header': {
              backgroundColor: '#CFD4ED',
            },
          }}
        >
          <DataGrid
            className="datagrid"
            rows={data}
            columns={userColumns}
            // columns={userColumns.concat(actionColumn)}
            pageSize={10}
            rowsPerPageOptions={[10]}
            sx={{ fontWeight: 'bold' }}
            // checkboxSelection
          />
        </Box>
      </div>
    </>
  )
}

export default Datatable
