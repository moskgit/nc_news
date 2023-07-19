import homeImg from '../../assets/icons/home.png'
import backImg from '../../assets/icons/back.png'
import top from '../../assets/icons/top.png'
import facebook from '../../assets/icons/facebook.png'
import twitter from '../../assets/icons/twitter.png'
import youtube from '../../assets/icons/youtube.png'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../UtilsComponents/Button'

export default function Footer () {
    const navigate = useNavigate()
    return <footer>
        {/* Info pages */}
        <div className='footerLinks'>
            <Link to={`/home`} className="footer-home" href="#"> Home  </Link>
            <Link to={`/aboutus`} className="footer-aboutus" href="#"> About-us  </Link>
            <Link to={`/contactus`} className="footer-contactus" href="#"> Contact-us  </Link>
            <Link to={`/legals`} className="footer-legals" href="#"> Legal Documents  </Link>
            <Link to={`/copyrights`} className="footer-copyrights" href="#"> copyrights  <sup>c</sup> </Link>
        </div>

        <div className='socialmediaWrapper'>
            <Button as="a" to="a" href="#root" img={<img src={top} alt="To top button" className='btn-home' id="footer-top-btn-id"  /> } >Link to the top of the page</Button>
            {/* <Button as="a" href="https://www.facebook.com" img={<img src={facebook} alt="Facebook button" className='btn-home' id="footer-facebook_id"  /> } >Link to Facebook</Button>
            <Button as="a" href="http://www.twitter.com" img={<img src={twitter} alt="twitter button" className='btn-home' id="footer-twitter_id"  /> } >Link to Twitter</Button>
            <Button as="a" href="http://www.youtube.com" img={<img src={youtube} alt="youtube button" className='btn-home' id="footer-youtube_id"  /> } >Link to YouTube</Button>
            <Button as={Link} to="/" img={<img src={homeImg} alt="Home page button" id="footer-home-btn-id"  className="btn-home"  /> } >Link to Home</Button>
            <Button as="a" href="https://whereisthemouse.com/how-to-use-button-as-link-in-react" img={<img src={backImg} alt="Help page button" id="footer-back-btn-id" className="btn-home"  /> } > Link to go back</Button> */}
        </div>
    </footer>
}