import styled from 'styled-components'

const SideBarContainer = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colors.SIDEBAR_BG};
    overflow: hidden;

    @media screen and (min-width: 540px) {
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

        @media screen and (min-width: 540px) {
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
                margin: -3px 0px 0 -5px;
                @media screen and (min-width: 768px) {
                    margin: 2px 0px 0px -6px;
                }
            }
        }
    }

    .channel-list {
        overflow-y: scroll;
        height: 82vh;
        @media screen and (min-width: 540px) {
            height: 85vh;
        }
        .add-channel {
            font-family: Codec-Pro-Bold, sans-sarif;
            border-bottom: 1px solid ${(props) => props.theme.colors.BORDER};
        }
    }
`
export default SideBarContainer