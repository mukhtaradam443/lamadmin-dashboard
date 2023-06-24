 
export const userColumns = [
    { field: 'id', headerName: 'ID', width: 70 },
    {field:"user",headerName:"User",width:230,renderCell:(params)=>{
            return(
                <div className="cellWithImg">
                    <img className="cellImg" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            )
        },
    },
    {
        field:"email", headerName:"Email",width:230,
    },
    {
        field:"age", headerName:"Age",width:100,
    },
    {
        field:"status",
        headerName:"Status",
        width:100,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }
    },
];

//temporary data
export const userRows=[ 
    {
        id:1,
        username:"Snow",
        img:"https://i.ibb.co/x3dWVpV/1679806772062.jpg",
        status:"active",
        email:"1snow@gmail.com",
        age:32,
    },
    {
        id:2,
        username:"jamie Lunnister",
        img:"https://i.ibb.co/x3dWVpV/1679806772062.jpg",
        status:"active",
        email:"2snow@gmail.com",
        age:42,
    },
    {
        id:3,
        username:"lunnister",
        img:"https://i.ibb.co/x3dWVpV/1679806772062.jpg",
        status:"pending",
        email:"3snow@gmail.com",
        age:45,
    },
    {
        id:4,
        username:"stack",
        img:"https://i.ibb.co/x3dWVpV/1679806772062.jpg",
        email:"4snow@gmail.com",
        status:"active",
        age:16,
    },
    {
        id:5,
        username:"targeryan",
        img:"https://i.ibb.co/x3dWVpV/1679806772062.jpg",
        email:"5snow@gmail.com",
        status:"passive",
        age:22,
    },
    {
        id:6,
        username:"Malisander",
        img:"https://i.ibb.co/x3dWVpV/1679806772062.jpg",
        email:"6snow@gmail.com",
        status:"active",
        age:15,
    },
    {
        id:7,
        username:"Clifford",
        img:"https://i.ibb.co/S7h8DGG/1679816400214.jpg",
        email:"7snow@gmail.com",
        status:"active",
        age:44,
    },
    {
        id:8,
        username:"Frances",
        img:"https://i.ibb.co/x3dWVpV/1679806772062.jpg",
        email:"8snow@gmail.com",
        status:"active",
        age:36,
    },
    {
        id:9,
        username:"Roxie",
        img:"https://i.ibb.co/x3dWVpV/1679806772062.jpg",
        email:"9snow@gmail.com",
        status:"pending",
        age:65,
    },
    {
        id:10,
        username:"Roxie",
        img:"https://i.ibb.co/x3dWVpV/1679806772062.jpg",
        email:"10snow@gmail.com",
        status:"active",
        age:65,
    },
];