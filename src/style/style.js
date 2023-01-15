import styled from "styled-components";
import { motion } from "framer-motion";


// About Component

export const About = styled.div`
min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`

export const Description = styled.div`
  flex: 3;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`

export const Image = styled.div`
  z-index: 2;
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 90vh;
    object-fit: cover;
  }
`

export const Hide = styled.div`
    overflow: hidden;
`


// Services Component

export const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`;
export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`;
export const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

// FAQ Component

export const Faq = styled(About)`
    display:block;
    span{
        display:block;
    }
    h2{
        padding-bottom: 2rem;
        font-weight: lighter;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width:100%;
    }
    .question{
        padding:3rem 0rem;
        cursor:pointer;
    }
    .answer{
        padding:2rem 0rem;
        p{
            padding: 1rem 0rem;
        }
    }
`

// Nav Component

export const NavStyled = styled.nav`
    min-height: 10vh;
    display:flex;
    margin: auto;
    justify-content: space-between;
    z-index: 1;
    align-items:center;
    padding: 1rem 10rem;
    background-color:#282828;
    a{
        color:white;
        text-decoration: none;
    }
    ul{
        display: flex;
        list-style: none;
    }
    li{
        padding-left: 10rem;
        position: relative;
    }
    #logo{
        font-size: 1.5rem;
        font-weight: lighter;
    }
`

// OurWork Component

export const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`
export const Movie = styled.div`
  padding-bottom: 10rem;
  .line{
    height: 0.5rem;
    background: #23d997;
    margin-bottom: 3rem;
  }
  img{
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

export const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`;
export const Frame2 = styled(Frame1)`
  background: #ff8efb;
`;
export const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`;
export const Frame4 = styled(Frame1)`
  background: #8effa0;
`;
// MovieDetail Component


export const Detail = styled(motion.div)`
  color:white;
`
export const HeadLine = styled.div`
  min-height:90vh;
  padding-top: 20vh;
  position:relative;
  h2{
    position: absolute;
    top:10%;
    left: 50%;
    transform: translate(-50%,-10%);
  }
  img{
    width:100%;
    height: 70vh;
    object-fit: cover;
  }
`
export const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`

// Award Component
export const AwardStyle = styled.div`
  padding: 5rem;
  h4{
    font-size: 2rem;
  }
  .line{
    width:100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p{
    padding:2rem 0rem;
  }
`

export const ImageDisplay = styled.div`
  min-height: 50vh;
  img{
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`

// SVG style

export const WaveSvg = styled.svg`
  position: absolute;
  left:0;
  z-index:1;
`