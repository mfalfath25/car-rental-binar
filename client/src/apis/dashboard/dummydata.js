export const userColumns = [
  // { field: 'id', headerName: 'ID', headerClassName: 'style-header', width: 40 },
  {
    field: 'name',
    headerName: 'Name',
    headerClassName: 'style-header',
    width: 196,
    // renderCell: (params) => {
    //   return (
    //     <div className="cellWithImg">
    //       <img className="cellImg" src={params.row.img} alt="avatar" />
    //       {params.row.username}
    //     </div>
    //   )
    // },
  },
  {
    field: 'type',
    headerName: 'Type',
    headerClassName: 'style-header',
    width: 80,
  },
  {
    field: 'model',
    headerName: 'Model',
    headerClassName: 'style-header',
    width: 100,
  },
  {
    field: 'price',
    headerName: 'Price',
    headerClassName: 'style-header',
    width: 120,
  },
  {
    field: 'passenger',
    headerName: 'Passenger',
    headerClassName: 'style-header',
    width: 100,
  },
  {
    field: 'startRent',
    headerName: 'Start Rent',
    headerClassName: 'style-header',
    width: 235,
  },
  {
    field: 'finishRent',
    headerName: 'Finish Rent',
    headerClassName: 'style-header',
    width: 235,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    headerClassName: 'style-header',
    width: 235,
  },
  {
    field: 'updatedAt',
    headerName: 'Updated At',
    headerClassName: 'style-header',
    width: 235,
  },
  // {
  //   field: 'status',
  //   headerName: 'Status',
  //   width: 160,
  //   renderCell: (params) => {
  //     return <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
  //   },
  // },
]
