import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link, useHistory } from 'react-router-dom';
import Logo from './partials/Logo';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';
import { toast } from 'react-toastify';


const propTypes = {
  navPosition: PropTypes.string,
  hideNav: PropTypes.bool,
  hideSignin: PropTypes.bool,
  bottomOuterDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool
}

const defaultProps = {
  navPosition: '',
  hideNav: false,
  hideSignin: false,
  bottomOuterDivider: false,
  bottomDivider: false
}

const Header = ({
  className,
  navPosition,
  hideNav,
  hideSignin,
  bottomOuterDivider,
  bottomDivider,
  ...props
}) => {
  const user  = useSelector(state=>state.user)
  

  const [isActive, setIsactive] = useState(false);

  const nav = useRef(null);
  const hamburger = useRef(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const logout = ()=>{

    console.log("AM HERE AT LOG OUT")
    firebase.auth().signOut()
    dispatch({
      type:"LOGGED_OUT_USER",
      payload: null
    })
    toast.success("you have been logged out")
    history.push("/login")

}


  useEffect(() => {
    isActive && openMenu();
    document.addEventListener('keydown', keyPress);
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('keydown', keyPress);
      document.removeEventListener('click', clickOutside);
      closeMenu();
    };
  });  

  const openMenu = () => {
    document.body.classList.add('off-nav-is-active');
    nav.current.style.maxHeight = nav.current.scrollHeight + 'px';
    setIsactive(true);
  }

  const closeMenu = () => {
    document.body.classList.remove('off-nav-is-active');
    nav.current && (nav.current.style.maxHeight = null);
    setIsactive(false);
  }

  const keyPress = (e) => {
    isActive && e.keyCode === 27 && closeMenu();
  }

  const clickOutside = (e) => {
    if (!nav.current) return
    if (!isActive || nav.current.contains(e.target) || e.target === hamburger.current) return;
    closeMenu();
  }  

  const classes = classNames(
    'site-header',
    bottomOuterDivider && 'has-bottom-divider',
    className
  );

  return (
    <header
      {...props}
      className={classes}
    >
      <div className="container">
        <div className={
          classNames(
            'site-header-inner',
            bottomDivider && 'has-bottom-divider'
          )}>
          <Logo />
          {!hideNav &&
            <>
              <button
                ref={hamburger}
                className="header-nav-toggle"
                onClick={isActive ? closeMenu : openMenu}
              >
                <span className="screen-reader">Menu</span>
                <span className="hamburger">
                  <span className="hamburger-inner"></span>
                </span>
              </button>
              <nav
                ref={nav}
                className={
                  classNames(
                    'header-nav',
                    isActive && 'is-active'
                  )}>
                <div className="header-nav-inner">
                  <ul className={
                    classNames(
                      'list-reset text-xs',
                      navPosition && `header-nav-left`
                    )}>
                   
                    <li>
                    <a href={"https://www.quora.com/What-is-a-feature-of-cryptocurrency"}>Features</a>

                      {/* <Link to="https://www.quora.com/What-is-a-feature-of-cryptocurrency" onClick={closeMenu}>Features</Link> */}
                    </li>

                    <li>
                    <a href={"https://tadafluxblog.blogspot.com/"}>Blog</a>

                      {/* <Link to="https://www.quora.com/What-is-a-feature-of-cryptocurrency" onClick={closeMenu}>Features</Link> */}
                    </li>
                    
                    <li>
                      <Link to="/features" onClick={closeMenu}>Plans</Link>
                    </li>


                    <li>
                    <a href={"https://www.bitcoin.com/partners/"}>Partnership</a>

                      {/* <Link to="https://www.bitcoin.com/partners/" onClick={closeMenu}>Partnership</Link> */}
                    </li>


                  


                    <li>
                      <a href={"https://www.reddit.com/r/Bitcoin/comments/kq21al/best_crypto_charts/"}>Forum</a>
                      {/* <Link to="https://www.reddit.com/r/Bitcoin/comments/kq21al/best_crypto_charts/" onClick={closeMenu}>Forum</Link> */}
                    </li>

                  </ul>
                  {!hideSignin &&
                    <ul
                      className="list-reset header-nav-right"
                    >
                      <li>
                        {user?<button onClick={e=>logout()} className="button button-primary button-wide-mobile button-sm" >LogOut</button>:<Link to="/login" className="button button-primary button-wide-mobile button-sm" onClick={closeMenu}>Sign In</Link>}
                      </li>
                    </ul>}
                </div>
              </nav>
            </>}
        </div>
      </div>
    </header>
  );
}

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
