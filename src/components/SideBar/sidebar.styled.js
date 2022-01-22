import styled from 'styled-components'

const SideBarContainer = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.SIDEBAR_BG};

    @media screen and (min-width: 768px) {
        max-width: 230px;
        width: 25%;
    }
    
    .user-info {
        color: ${(props) => props.theme.colors.WHITE};
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 28px;
        font-weight: 600;
        padding: 10px 15px;
        border-top: 1px solid ${(props) => props.theme.colors.BORDER};
        border-bottom: 1px solid ${(props) => props.theme.colors.BORDER};

        @media screen and (min-width: 768px) {
            font-size: 20px;
            padding: 10px 15px;
        }
        
        .user-edit {
            cursor: pointer;
            width: 35px;
            height: 35px;
            border: 1px solid ${(props) => props.theme.colors.WHITE};
            background: ${(props) => props.theme.colors.WHITE};
            border-radius: 35px;
            color: #000;
            svg {
                display: block;
                margin: 0px 0px 0 -5px;
            }
        }
    }

    .top-section {
        border-bottom: 1px solid ${(props) => props.theme.colors.BORDER};
    }
`
export default SideBarContainer