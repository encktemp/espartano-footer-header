import styled, { css } from 'styled-components';

export const AreaHeader = styled.div`
height: 60px;
background-color: #652FFE;
color: #fff;

.container{
    padding: 5px 20px;
    display: flex;
    align-items: center;
}

.logo{
flex: 1;
img{
    width: 70px;
    height: auto;
}
}

nav{
 ul{
    display: flex;
 }
 li{
    list-style: none;
    margin-left: 20px;

    a{
        text-decoration: none;
        color: #fff;

        &:hover{
            color: #000;
        }
     }
 }
}
`;



export default AreaHeader;