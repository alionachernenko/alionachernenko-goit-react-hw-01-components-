import styled from "@emotion/styled";


export const List = styled.ul `
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 332px;
`
export const Avatar = styled.img ` 
    width: 48px
`
export const Item = styled.li `
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 5px;
    box-shadow: 2px 2px 5px rgb(207, 236, 255);
`

export const Status = styled.span `
width: 10px;
height: 10px;
border-radius: 10px;
display: block;

background-color: ${props => {
    switch (props.status) {
        case true:
            return 'green'
        default:
            return 'red'
    }
}
}
`
export const Name = styled.p `
font-size: 20px;
`