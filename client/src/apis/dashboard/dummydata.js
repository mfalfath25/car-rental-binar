export const userColumns = [
  { field: 'id', headerName: 'ID', headerClassName: 'style-header', width: 40 },
  {
    field: 'name',
    headerName: 'Name',
    headerClassName: 'style-header',
    width: 180,
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
    field: 'category',
    headerName: 'Category',
    headerClassName: 'style-header',
    width: 140,
  },
  {
    field: 'price',
    headerName: 'Price',
    headerClassName: 'style-header',
    width: 140,
  },
  {
    field: 'startRent',
    headerName: 'Start Rent',
    headerClassName: 'style-header',
    width: 140,
  },
  {
    field: 'finishRent',
    headerName: 'Finish Rent',
    headerClassName: 'style-header',
    width: 140,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    headerClassName: 'style-header',
    width: 140,
  },
  {
    field: 'updatedAt',
    headerName: 'Updated At',
    headerClassName: 'style-header',
    width: 407,
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
