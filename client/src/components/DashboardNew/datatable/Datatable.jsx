import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid'
import { userColumns } from '../../../apis/dashboard/dummydata'
import { useEffect, useState } from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import axios from 'axios'

const Datatable = (props) => {
  const [data, setData] = useState([])

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id))
  // }

  const fetchData = async () => {
    await axios
      .get('http://localhost:5000/car')
      .then((res) => {
        setData(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  // const actionColumn = [
  //   {
  //     field: 'action',
  //     headerName: 'Action',
  //     headerClassName: 'style-header',
  //     width: 140,
  //     renderCell: (params) => {
  //       return (
  //         <div className="cellAction">
  //           <Link to="/users/test" style={{ textDecoration: 'none' }}>
  //             <div className="viewButton">View</div>
  //           </Link>
  //           <div className="deleteButton" onClick={() => handleDelete(params.row.id)}>
  //             Delete
  //           </div>
  //         </div>
  //       )
  //     },
  //   },
  // ]

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
            height: '106%',
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
            getRowId={(row) => row._id}
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
