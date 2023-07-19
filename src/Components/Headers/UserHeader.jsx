
import accountImg from '../../assets/icons/user.png'
import Button from '../UtilsComponents/Button'
import { Link } from 'react-router-dom'

export default function UserHeader () {
    return <section className='greetings-bar'>
        <Button as={Link} to='/:username/account' img={<img src={accountImg} alt="Link to account details" className='btn-account' id="topMenuBtn_account_id"  /> } >Account page link</Button>
        <p className="username"> Hello (username)</p>
    </section>
}
