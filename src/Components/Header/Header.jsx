import mobileLogo from '../../../svg/vectorio-favicon-white.svg';
import './Header.scss';
import { useNavigate } from 'react-router-dom';


function Header(){

    const navigate = useNavigate();

    function handleArticlesPage(){

        navigate('/computerComponents');
    }
    function handleHomePage(){

        navigate('/');
    }
    function handlePostPage(){

        navigate('/posts')
    }

    return(

        <header className='header'>
            <div className='header__container-logo'>
                <img className="header__logo" 
                src={mobileLogo} 
                onClick={() => handleHomePage()}
                />
            </div>
            <div className='header__container-articles'
            onClick={() => handleArticlesPage()}>
                <h2 className='header__articles'>Articles </h2>
            </div>
            <div className='header__container-posts'
            onClick={() => handlePostPage()}
            >
                <h2 className='header__posts'>Posts</h2>
            </div>
        </header>
    );
}

export default Header;