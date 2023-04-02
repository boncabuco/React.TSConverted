import React, { ReactNode } from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';

type Props = {
    children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {

    return (
        <div className='red'>
            <NavMenu />
            <Container>
                {children}
            </Container>
        </div>
    );
}

export default Layout;