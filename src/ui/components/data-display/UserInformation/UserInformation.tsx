import { styled } from "@mui/material/styles";

import {
    UserInformationContainer,
    UserName,
    AvatarStyled,
    RatingStyled,
    UserDescription
} from './UserInformation.style'

interface UserInformationProps {
    picture: string
    name: string
    rating: number
    description?: string
}

const UserInformation: React.FC<UserInformationProps> = (props) => {
    return (
        <UserInformationContainer>
            <AvatarStyled src={props.picture}>{props.name[0]}</AvatarStyled>
            <UserName>{props.name}</UserName>
            <RatingStyled readOnly value={props.rating} />
            <UserDescription>{props.description}</UserDescription>
        </UserInformationContainer>
    );
}

export default UserInformation;