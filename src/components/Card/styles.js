import styled, { css } from 'styled-components';


export const Container = styled.div`
    width: 346px;
    height: 129.5px;

    margin-top: 32px;
    
    background: #FFF5FF;
    box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
    border-radius: 21px;


    ${(props) => props.purpleCard && css`
        background: #9451D2;
    `}

    img {
        width: 104px;

        border-radius: 21px;
    }

    .card-wrapper {
        height: 100%;

        padding: 0px 16px;

        display: flex;
        align-items: center;

    }


    p {
        font-family: Roboto;
        font-size: 14px;
        line-height: 16px;

        color: #6E7FAA;


        ${(props) => props.purpleCard && css`
            color: #FFF5FF;
        `}


    }

    p.title {
        font-weight: bold;
    }
`;