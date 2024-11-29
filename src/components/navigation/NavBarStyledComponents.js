import styled from "styled-components";

export const NavBar = styled.nav`
    background-color: #1a3d6b;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 1;
`
export const NavBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
`

export const NavBarLogo = styled.img`
    width: 100%;
    height: 75px;
    align-items: flex-start;
    overflow: hidden;

    @media screen and (max-width: 499px) {
        padding: 5px;
    }
`

export const MenuIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`

export const NavItem = styled.li`
    height: 80px;
`