/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useMemo } from 'react';
import { Container, Profile, UserName, Wolcome } from './style';
import emogis from '../../utils/emogis';
import Toggle from '../Toggle';

function MainHeader() {

    const emogi = useMemo(() => {
        const indice = Math.floor(Math.random() * emogis.length);
        return emogis[indice];
    }, []);

    return (
        <Container>
            <Toggle />
            <Profile>
                <Wolcome>Ola,{emogi}</Wolcome>
                <UserName>Kauan Reis</UserName>
            </Profile>
        </Container>
    );
}
export default MainHeader;