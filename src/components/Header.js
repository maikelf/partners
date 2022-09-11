import logo from '../logo.svg';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';

export const Header = props => {
    return(
        <header>
            <div className="menu-icon">
                <MenuIcon  onClick={props.onClick} />
            </div>
            <div className='menu-logo'>
                <img src={logo} className="logo" alt="logo" />
            </div>
        </header>
    )
}