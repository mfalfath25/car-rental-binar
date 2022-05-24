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

//temporary data
export const userRows = [
  {
    id: 1,
    name: 'SnowASD',
    category: 'small',
    price: '10000',
    startRent: '-',
    finishRent: '-',
    createdAt: '-',
    updatedAt: '-',
  },
  {
    id: 2,
    name: 'Jamie Lannister',
    category: 'small',
    price: '10000',
    startRent: '-',
    finishRent: '-',
    createdAt: '-',
    updatedAt: '-',
  },
  {
    id: 3,
    name: 'Lannister',
    category: 'small',
    price: '10000',
    startRent: '-',
    finishRent: '-',
    createdAt: '-',
    updatedAt: '-',
  },
  {
    id: 4,
    name: 'Stark',
    category: 'small',
    price: '10000',
    startRent: '-',
    finishRent: '-',
    createdAt: '-',
    updatedAt: '-',
  },
  {
    id: 5,
    name: 'Targaryen',
    category: 'small',
    price: '10000',
    startRent: '-',
    finishRent: '-',
    createdAt: '-',
    updatedAt: '-',
  },
  {
    id: 6,
    name: 'Melisandre',
    category: 'small',
    price: '10000',
    startRent: '-',
    finishRent: '-',
    createdAt: '-',
    updatedAt: '-',
  },
  {
    id: 7,
    name: 'Clifford',
    category: 'small',
    price: '10000',
    startRent: '-',
    finishRent: '-',
    createdAt: '-',
    updatedAt: '-',
  },
  {
    id: 8,
    name: 'Frances',
    category: 'small',
    price: '10000',
    startRent: '-',
    finishRent: '-',
    createdAt: '-',
    updatedAt: '-',
  },
]
