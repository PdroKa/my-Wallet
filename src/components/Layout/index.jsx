import { Grid } from './style';

import MainHeader from '../MainHeader';
import Aside from '../Aside';
import Content from '../Content';


function Layout({ children }) {
    return (
        <Grid>
            <MainHeader />
            <Aside />
            <Content>
                {children}
            </Content>
        </Grid>
    );
}
export default Layout;