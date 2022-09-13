import './Footer.css';
export const Footer = () => {
    return(
        <footer>
            <div className="footer-left">
                © 2022 Partners in Canadian Veterans Rehabilitation ServicesTM
            </div>
            <div className="footer-right">
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
        </footer>
    )
}