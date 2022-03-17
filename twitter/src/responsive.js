import { css } from 'styled-components'

export const MobileMini = (props) => {
    return css`
    @media only screen and (max-width: 376px){
        ${props}
    }
    `;
}

export const MobileMax = (props) => {
    return css`
    @media only screen and (max-width: 540px){
        ${props}
    }
    `;
}

export const IpadMini = (props) => {
    return css`
    @media only screen and (max-width:655px){
        ${props}
    }
    `;
}

export const Ipad = (props) => {
    return css`
    @media only screen and (max-width: 745px){
        ${props}
    }
    `;
}

export const IpadMax = (props) => {
    return css`
    @media only screen and (max-width: 860px){
        ${props}
    }
    `;
}




export const SurfaceMini = (props) => {
    return css`
    @media only screen and (max-width: 935px){
        ${props}
    }
    `;
}
export const Surface = (props) => {
    return css`
    @media only screen and (max-width: 1150px){
        ${props}
    }
    `;
}