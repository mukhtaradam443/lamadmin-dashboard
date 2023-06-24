import "./sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import SettingsApplicationsRoundedIcon from '@mui/icons-material/SettingsApplicationsRounded';
import AssessmentRoundedIcon from '@mui/icons-material/AssessmentRounded';
import CreditScoreIcon from '@mui/icons-material/CreditScore';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
import HomeWorkRoundedIcon from '@mui/icons-material/HomeWorkRounded';
import {Link} from "react-router-dom"
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeContext";

const Sidebar = () => {
  const {dispatch} = useContext(DarkModeContext)

  return (
    <div className='sidebar'>
      <div className="top">
        <Link to="/"style={{textDecoration:"none"}} >
          <span className="logo">lamadmin</span>
        </Link>
      </div>
      <hr/>
      <div className="center">
        <ul>
          <p className="title">MAIN</p>
          <li>
            <DashboardIcon className="icon"/>
            <span>Dashboard</span>
          </li>
          <p className="title">LIST</p>
          <Link to="/users" style={{textDecoration:"none"}} >
            <li>
              <PersonOutlinedIcon className="icon"/>
              <span>Users</span>
            </li>
          </Link> 
          <Link to="/"style={{textDecoration:"none"}} >
            <li>
              <HomeWorkRoundedIcon className="icon"/>
              <span>products</span>
            </li>
          </Link>  
          <li>
          <CreditScoreIcon className="icon"/>
            <span>Orders</span>
          </li>
          <li>
            <LocalShippingIcon className="icon"/>
            <span>Delivery</span>
          </li>
          <p className="title">USEFUL</p>
          <li>
            <AssessmentRoundedIcon className="icon"/>
            <span>Stats</span>
          </li>
          <li>
            <NotificationsOutlinedIcon className="icon"/>
            <span>Notifications</span>
          </li>
          <p className="title">SERVICE</p>
          <li>
            <SettingsSystemDaydreamIcon className="icon"/>
            <span>System Health</span>
          </li>
          <li>
            <PsychologyOutlinedIcon className="icon"/>
            <span>Logs</span>
          </li>
          <li>
            <SettingsApplicationsRoundedIcon className="icon"/>
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li>
            <AccountCircleOutlinedIcon className="icon"/>
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppOutlinedIcon className="icon"/>
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={() =>dispatch({type:"LIGHT"})}></div>
        <div className="colorOption" onClick={() =>dispatch({type:"DARK"})}></div>
      </div>
    </div>
  )
}

export default Sidebar
