import React, { useState } from 'react';
import './Footer.css';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const Footer = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = anchorEl;
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null);

    return(
        <footer>
            <div className='footer-left'>
                © 2022 Partners in Canadian Veterans Rehabilitation ServicesTM
            </div>
            <div className='footer-right only-desktop'>
                <ul>
                    <li><a href='/contact-us' title='contact us'>Contact us</a></li>
                    <li className='circle'>.</li>
                    <li><a href='/terms' title='terms & conditions'>Terms & Conditions</a></li>
                    <li className='circle'>.</li>
                    <li><a href='/privacy' title='privacy'>Privacy</a></li>
                    <li className='circle'>.</li>
                    <li><a href='/disclaimer' title='contact us'>Disclaimer</a></li>
                </ul>
            </div>
            <div className='footer-right-phone only-phone'>
                <MoreVertIcon onClick={handleClick}></MoreVertIcon>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>Contact us</MenuItem>
                    <MenuItem onClick={handleClose}>Terms & Conditions</MenuItem>
                    <MenuItem onClick={handleClose}>Privacy</MenuItem>
                    <MenuItem onClick={handleClose}>Disclaimer</MenuItem>
                </Menu>
            </div>
        </footer>
    )
}