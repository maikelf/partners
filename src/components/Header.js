import React, { useState } from 'react';
import logo from '../logo.svg';
import './Header.css';
import MenuIcon from '@mui/icons-material/Menu';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export const Header = props => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);
    return(
        <header>
            <div className="menu-icon">
                <MenuIcon  onClick={props.onClick} />
            </div>
            <div className='menu-logo'>
                <img src={logo} className="logo" alt="logo" />
            </div>
            <div className='menu-help'>
                <HelpOutlineIcon onClick={handleClick} />

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    disableScrollLock={true}
                >
                    <MenuItem onClick={handleClose}>
                        <a href="https://www.veterans.gc.ca/eng/financial-support/medical-costs/treatment-benefits/poc_search">
                            VAC treatment benefits
                        </a>
                    </MenuItem>
                </Menu>

                <div className='menu-lang'>
                    Français   
                </div>
            </div>
        </header>
    )
}