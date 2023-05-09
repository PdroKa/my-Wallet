import { Routes, Route } from 'react-router-dom'

import ListPage from '../Pages/List'
import DashboardPage from '../Pages/Dashboard'
import Layout from '../components/Layout'


const AppRoutes = () => {
    return (
        <>
            <Layout>
                <Routes>
                    <Route key={':type'} path='/list/:type' exact element={<ListPage/>}/>
                    <Route key={'dashboard'} path='/' exact element={<DashboardPage />} />
                </Routes>
            </Layout>
        </>
    );
}

export default AppRoutes;