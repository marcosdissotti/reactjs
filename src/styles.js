import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
    }


    body, #root {
        max-width: 100%;


        display: flex;
        align-items: center;
        flex-direction: column;

        background: #B57ADE; 
    }
`;