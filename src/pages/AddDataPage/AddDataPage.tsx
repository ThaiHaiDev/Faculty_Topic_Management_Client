import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import Sidebar from '../../components/Siderbar/Sidebar';
import './AddDataPage.scss';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import AddUser from '../../components/AddUser/AddUser';
import AddNoti from '../../components/AddNoti/AddNoti';
import AddSpecialized from '../../components/AddSpecialized/AddSpecialized';

const AddDataPage = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <div className="adduser-page">
            <div className="row" style={{ paddingRight: '100px'}}>
                <div className="rol c-4 left">
                    <Sidebar />
                </div>
                <div className="rol c-8 right">
                    <Breadcrumb name="Thêm mới dữ liệu" url="/themdulieu" />
                    <div className="card-add">
                        <Box sx={{ width: '100%', typography: 'body1' }}>
                            <TabContext value={value}>
                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                                        <Tab label="Tài khoản" value="1" />
                                        <Tab label="Thông báo" value="2" />
                                        <Tab label="Chuyên ngành" value="3" />
                                    </TabList>
                                </Box>
                                <TabPanel value="1" sx={{ fontSize: '18px'}}>Tài khoản <AddUser /> </TabPanel>
                                <TabPanel value="2" sx={{ fontSize: '18px'}}>Thông báo <AddNoti /> </TabPanel>
                                <TabPanel value="3" sx={{ fontSize: '18px'}}>Chuyên ngành <AddSpecialized /> </TabPanel>
                            </TabContext>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddDataPage;
