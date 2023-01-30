import styled from "@emotion/styled";

export const Description = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;

    & * {
        margin-bottom: 10px;
    }
`
export const Avatar = styled.img `
    width: 100px;
    height: auto;
    margin-bottom: 20px;
`

export const Name = styled.p `
    font-weight: 700;
    font-size: 20px;
`

export const Tag = styled.p `
    color: dimgrey;
`

export const Location = styled.p `
    color: dimgrey;
`

export const User = styled.div `
    width: fit-content;
    background-color: rgb(248, 248, 248);
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 5px 5px 10px rgb(236, 236, 236);
`
export const StatsList = styled.ul `
    display: flex;
    border-radius: 10px;
`

export const Stat = styled.li `
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90px;
    background-color:rgb(223, 233, 243);
    gap: 5px;
`

export const StatName = styled.span `
    color: dimgrey;
`

export const Quantity = styled.span `
    font-weight: 700;
    font-size: 20px;
`