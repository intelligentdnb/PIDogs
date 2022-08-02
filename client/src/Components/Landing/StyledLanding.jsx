import styled from "styled-components";

 const StyledLanding = styled.div`

    .container{
        position: absolute;
        top: 28%;
        left: 39%;
        padding: 0;
        transform: translateY(-50%);
        text-shadow: 0px 0px 10px black, 0px 0px 50px black;
    }
    a{
        color: black;
        font-size: 20px;
        text-decoration: none;
        border: 3px solid white;
        padding: 10px 35px;
        transition: background-color 1000ms ease;
        box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.5);

        &:hover{
            background-color: black;
            color: white;
            text-shadow: none;

        }
    }
    h1{
        color: white;
        margin-bottom: 40px;
        text-align: center;
        font-size: 60px;
        line-height: 1.2;
    }

`
export default StyledLanding;