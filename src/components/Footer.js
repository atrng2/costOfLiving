import React from 'react';
import "./Footer.css";
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer(){

    return(
    <div class = "footer-container" >
        <footer>
            <a class = "github" href="https://github.com/atrng2/costOfLiving" target="_blank">
            {<GitHubIcon/>}
            </a>
        </footer>
    </div>
    );
}


export default Footer;