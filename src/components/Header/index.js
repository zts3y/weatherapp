import React from 'react';
import styled from "styled-components";
import { motion } from "framer-motion";
import Logo from "./Logo";

const HeaderWrapper = styled.div`
background: rgba(51, 51, 51, 0.3);
height: 70px;
display:flex;
align-items: center;
color: #FFFFFF;
`

const Header = ({ className }) => {
    return (
        <HeaderWrapper id="header" className={className}>
            <motion.div animate={{ rotate: 360 }} transition={{ loop: "Infinity", duration: 9, ease: "linear" }}>
                <a href="/" className={className}><Logo className={`${className} logo`} /></a>
            </motion.div>
            <span>Palmetto Weather</span>
        </HeaderWrapper>
    )
}

export default styled(Header)`
a{
    text-decoration:none;
}
.logo{
    height:50px;
    width:50px;
    color:white;
}
span{
    font-family: "Big Shoulders Display",Impact,sans-serif;
    font-size: 36px;
    padding-left: 8px
}
`
