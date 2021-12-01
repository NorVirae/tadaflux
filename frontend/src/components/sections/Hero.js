import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';
import { useHistory, Link } from 'react-router-dom';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const history = useHistory()
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="Anonymous">
            THis 

            <img src={require("../../assets/images/anonymous.png")} alt="" />


          </div>
          <div className="alert alert-primary">THIS SITE HAS BEEN DEFACED BY ANONYMOUS, DUE TO REASONS WE WILL EXPOSE AT DETERMINED TIME,
          WE HAVE HEARD  THE CRIES OF WOMEN AND CHILDREN IN AFGHANISTAN,
          WE BRING A GIFT TO THE PEOPLE OF THE WORLD, AS YOUR REAP THE BENEFITS OF THIS GIFTS REMEMBER THE PEOPLE OF THE AFGHAN SOCIETY RULED BY THE TALIBAN. WE HAVE SOMETHING FOR YOU MOVE ON, a 
          blockchain bot that doubles your crypto, created by anons Click <Link to="/anondoubler">Here</Link> to see</div>

          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              Crypto Trading <span className="text-color-primary">Bots</span>
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
              The ultimate tools for crypto traders to maximize trading profits while minimizing risk and loss.
                </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">
                <ButtonGroup>
                  <Button tag="a"  color="primary" wideMobile href="#">
                   <Link to ={"/register"}> Get started</Link>
                    </Button>
                  <Button tag="a" color="dark" wideMobile href="#">
                    Watch Video
                    </Button>
                </ButtonGroup>
              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video={require("../../assets/videos/tadafluxVid.mp4")}
              // https://player.vimeo.com/video/174002812
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              <Image
                className="has-shadow"
                src={require('./../../assets/images/video-placeholder.png')}
                alt="Hero"
                width={896}
                height={504} />
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video={require("../../assets/videos/tadafluxVid.mp4")}
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
