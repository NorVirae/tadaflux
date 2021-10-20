import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import Image from '../../elements/Image';

const Logo = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'brand',
    className
  );

  return (
    <div
      {...props}
      className={classes}
    >
        <Link to="/">
          <h4 className={""}>
          <Image
            src={require('./../../../assets/images/logo.png')}
            className={"d-inline"}
            alt="Open"
            width={32}
            height={32} />TadaFlux</h4>
        </Link>
    </div>
  );
}

export default Logo;