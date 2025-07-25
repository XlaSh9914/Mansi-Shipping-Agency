import React from 'react';
import { useNavigate, LinkProps } from 'react-router-dom';
import { useLoading } from '../LoadingContext';

const CustomLink: React.FC<LinkProps> = ({ to, children, ...props }) => {
  const navigate = useNavigate();
  const { startLoading } = useLoading();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent immediate navigation
    startLoading();
    // Delay navigation until hatch closing animation completes (0.6s)
    setTimeout(() => {
      navigate(to);
    }, 500);
  };

  return (
    <a href={typeof to === 'string' ? to : to.pathname} onClick={handleClick} {...props}>
      {children}
    </a>
  );
};

export default CustomLink;