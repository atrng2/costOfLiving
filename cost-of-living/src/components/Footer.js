import React from 'react';
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer(){

    return(
    <div class = "footer-container" >
        <footer>
            {<GitHubIcon />}
        </footer>
    </div>
    );
}


export default Footer;