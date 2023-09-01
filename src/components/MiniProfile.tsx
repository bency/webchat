import styled from 'styled-components';
import type { Profile } from '../types';
import { Avatar } from '../stories/Avatar';

const Card = styled.div`
    width: 100%;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    background-color: #242424;
    cursor: pointer;

    @media (prefers-color-scheme: light) {
        background-color: #fff;
    }
`
const Header = styled.div`
    margin-right: 14px;
`

const Body = styled.div`
    display: inline-flex;
    flex-direction: column;
`

const Account = styled.p`
    color: light-gray;
    font-size: 16px;
    font-weight: 600;
    line-height: 100%;

    @media (prefers-color-scheme: light) {
        color: #1f1f1f;
    }
`

function MiniProfile ({ profile }: { profile: Profile}) {
    return (
        <>
            <Card>
                <Header>
                    <Avatar
                        url={profile.avatar}
                        size={44}
                    />
                </Header>
                <Body>
                    <Account>{profile.account}</Account>
                </Body>
            </Card>
        </>
    )
}

export default MiniProfile;