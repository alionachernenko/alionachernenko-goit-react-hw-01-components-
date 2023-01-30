import styled from "@emotion/styled";

export const Properties = styled.thead `
composes: column;
background-color: rgb(0, 103, 134);
color: #ffffff
`

export const Values = styled.tbody `
background-color: rgb(236, 236, 236);
`

export const Row = styled.tr `
width: 500px;
font-weight: 400;
height: 50px;
text-align: center;
text-transform: capitalize;

&:nth-child(2n){
    background-color: rgb(216, 216, 216);
}
`

export const Property = styled.th `
width: 500px;
font-weight: 400;
height: 50px;
text-align: center;
`