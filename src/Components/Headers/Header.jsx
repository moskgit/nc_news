import nc_logo from '../../assets/icons/nc_logo.png'
import settingsImg from '../../assets/icons/setting.png'
import helpdeskImg from '../../assets/icons/helpdesk.png'
import homeImg from '../../assets/icons/home.png'
import { Link } from 'react-router-dom';
import Button from '../UtilsComponents/Button';

export default function Header () {

    return <header id='header'>
        <Link to={'/'} > <img className="logo" src={nc_logo} alt="Northcoders' Logo" /> </Link>
        <Button as={Link} to="/settings" img={<img src={settingsImg} alt="Settings page button" id="topMenuBtn_settings_id"  className="btn-settings"  /> } >Link to Settings</Button>
        <Button as={Link} to="/help" img={<img src={helpdeskImg} alt="Help page button" id="topMenuBtn_help_id" className="btn-help"  /> } > Link to Help</Button>
        <Button as={Link} to="/home" img={<img src={homeImg} alt="Home button" className='btn-home' id="topMenuBtn_home_id"  /> } >Link to Home</Button>
    </header>
}