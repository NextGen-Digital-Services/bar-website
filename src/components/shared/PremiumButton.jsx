import React from 'react';
import { Link } from 'react-router-dom';
import './PremiumButton.css';

const PremiumButton = ({
  children,
  onClick,
  type = 'button',
  variant = 'solid', // solid, outline
  href,
  external = false,
  className = '',
  ...props
}) => {
  const btnClass = `premium-btn premium-btn-${variant} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={btnClass}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {children}
        </a>
      );
    }
    return (
      <Link to={href} className={btnClass} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={btnClass} {...props}>
      {children}
    </button>
  );
};

export default PremiumButton;
