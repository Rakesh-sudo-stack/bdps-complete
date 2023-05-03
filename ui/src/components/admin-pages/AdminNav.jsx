import { Link } from "react-router-dom";

const adminNav = (props) => {
    const showMenu = () => {
        document.querySelector('aside').classList.add('active');
    }
    const showSearchBar = () => {
        document.querySelector('.search-bar').style.display = 'flex';
        document.querySelector('.right-side').style.display = 'none';
        document.querySelector('.left-side').style.display = 'none';
        document.querySelector('.menu-btn').style.display = 'none';
    }
    const hideSearchBar = () => {
        document.querySelector('.search-bar').style.display = 'none';
        document.querySelector('.right-side').style.display = 'flex';
        document.querySelector('.left-side').style.display = 'flex';
        document.querySelector('.menu-btn').style.display = 'flex';
    }
    return (
        <div className="admin-nav">
            <div className="menu-btn" onClick={showMenu}>
                <i className='fa-solid fa-bars'></i>
            </div>
            <div className="left-side">
                <Link to='/admin' onClick={
                    () => {
                        props.setProgress(15);
                        setTimeout(() => { props.setProgress(75) }, 200)
                        setTimeout(() => { props.setProgress(100) }, 500)
                    }
                }>Home</Link>
            </div>
            <div className="right-side">
                <button onClick={showSearchBar}><i className="fa fa-search"></i></button>
            </div>
            <div className="search-bar">
                <div className="container-box">
                    <input type="text" placeholder="Search" />
                    <div className="search-close-btn"><i className="fa-solid fa-xmark" onClick={hideSearchBar}></i></div>
                    <button><i className="fa fa-search"></i></button>
                </div>
            </div>
        </div>
    )
}

export default adminNav;