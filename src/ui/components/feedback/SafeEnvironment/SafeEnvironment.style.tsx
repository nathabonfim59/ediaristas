import { styled } from "@mui/material/styles";

export const SafeEnviromentContainer = styled('div')`
    color: ${({theme }) => theme.palette.text.secondary };
    background-color: ${({theme }) => theme.palette.background.default };
    text-align: right;
    padding: 16px 0;
    font-size: 12px
`;