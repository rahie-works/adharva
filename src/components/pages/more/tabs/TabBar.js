import {useRef} from 'react';
import './TabBar.css';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

const simpleAnimation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
    animation: 1s ${simpleAnimation}
`
export default function TabBar(props) {

    const ref = useRef();

    const tabClicked = (tab) => {
        ref.current.querySelectorAll("h2").forEach(element => {
            if(element.innerHTML === tab.target.innerHTML) {
                element.style.color = '#fff'
            } else {
                element.style.color = '#b4b4b4'
            }
        });
        props.tab(tab.target.innerHTML);
    }

    return (
        <div className="tabBar__container" ref={ref}>
            <FadeInDiv onClick={tabClicked}>
                <h2 className='text_color__active'>About Us</h2>
            </FadeInDiv>
            <FadeInDiv onClick={tabClicked}>
                <h2 className='text_color__inactive'>Our Mission</h2>
            </FadeInDiv>
            <FadeInDiv onClick={tabClicked}>
                <h2 className='text_color__inactive'>Our Vision</h2>
            </FadeInDiv>
        </div>
    )
}