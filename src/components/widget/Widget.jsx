import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import MonetizitionOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined"



function Widget({type}) {
  const amount = 100;
  const diff = 20;

  let data;
    switch(type){
      case "user":
        data={
          title:"USERS",
          isMoney:false,
          link:"See all users",
          icon: <PersonOutlineOutlinedIcon className="icon" style={{color:"crimson",backgroundColor: "rgba(255,0,0, 0.2)"}}/>
        }
        break
        case "order":
        data={
          title:"ORDERS",
          isMoney:false,
          link:"view all orders",
          icon: <ShoppingCartOutlinedIcon className="icon" style={{backgroundColor:"rgba(218,165,32, 0.2)" , color:"goldenrod"}}/>
        }
        break
        case "earning":
        data={
          title:"ERARNING",
          isMoney:true,
          link:"View net earning",
          icon: <MonetizitionOnOutlinedIcon className="icon" style={{backgroundColor:"rgba(0,128,0, 0.2)", color:"green"}}/>
        }
        break
        case "balance":
        data={
          title:"BALANCE",
          isMoney:false,
          link:"See all users",
          icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{backgroundColor:"rgba(128,0,128, 0.2)", color:"purple"}}/>
        }
        break
      default:
        break  
    }

  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney && "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
            <div className="percentage positive">
              <KeyboardArrowUpIcon/>
              {diff} %
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
