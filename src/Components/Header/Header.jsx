import mobileLogo from '../../../svg/vectorio-favicon-white.svg';
import './Header.scss';

function Header(){

    return(

        <header className='header'>
            <div className='header__container-logo'>
                <img className="header__logo" src={mobileLogo}/>
            </div>
            <div className='header__container-articles'>
                <h2 className='header__articles'>Articles </h2>
            </div>
            <div className='header__container-posts'>
                <h2 className='header__posts'>Posts</h2>
            </div>
        </header>
    );
}

export default Header;