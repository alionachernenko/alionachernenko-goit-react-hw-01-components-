import styled from "@emotion/styled";

export const StatisticsList = styled.ul`
display: flex;
flex-wrap: wrap;
background-color: aliceblue;
`

export const Item = styled.ul `
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
width: 83px;
height: 83px;
gap: 5px;
font-weight: 500;
color: rgb(39, 39, 39);
font-size: 20px;
`
export const StatisticsSection = styled.section `
    width: 332px;
`

export const TitleContent = styled.h2 `
padding: 50px;
    text-align: center;
    background-color: rgb(243, 244, 255);
    text-transform: uppercase;
    color: rgb(39, 39, 39);
`