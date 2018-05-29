import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
import background from '../images/background/background.jpeg';

const Header = () => {
   
    return (
        <HeaderImage>
            <Link to="/"> 
                <Logo alt="logo" src={logo} />
            </Link>
            <HeaderText>
                <HeaderH1>You can watch your favorate movies here!</HeaderH1>
                <Link to="/">Watch Now</Link>
                <Link to="/">Have a try</Link>
            </HeaderText>
        </HeaderImage>
        );
};

export default Header;

export const HeaderImage = styled.header`
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background});
    background-size: cover;
    background-position: center;
    height: 100vh;
`;

export const HeaderH1 = styled.h1`
    margin: 0;
`;

export const HeaderText = styled.div`
    position: absolute;
    width: 1140px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;
export const Logo = styled.img`
    height: 100px;
    width: auto;
    float: left;
    margin-top: 20px;
`;
