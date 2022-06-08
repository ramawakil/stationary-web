import React, {useState} from 'react';
import {Divider, Drawer, IconButton, List, ListItem, ListItemText} from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import Link from 'next/link';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SyncLockIcon from '@mui/icons-material/SyncLock';
import HomeIcon from '@mui/icons-material/Home';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';
import {styled, useTheme} from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';


const studentNavList = [

    {
        id: 1,
        name: 'Carry Over',
        link: '/service/carry-over',
        icon: (<TimelineOutlinedIcon/>)
    },
    {
        id: 2,
        name: 'Permission',
        link: '/service/permission',
        icon: (<EmojiPeopleIcon/>)
    },
    {
        id: 3,
        name: 'Postponed',
        link: '/service/postponed',
        icon: (<WatchLaterOutlinedIcon/>)
    },
    {
        id: 4,
        name: 'Retake',
        link: '/service/retake',
        icon: (<EventRepeatIcon/>)
    }
]

const teacherNavList = [

    {
        id: 2,
        name: 'Pending Requests',
        link: '/teacher/pending-requests',
        icon: (<PendingActionsOutlinedIcon/>)
    },
    {
        id: 3,
        name: 'Approved Requests',
        link: '/teacher/approved-requests',
        icon: (<FactCheckOutlinedIcon/>)
    },

]

const registrarNavList = [

    {
        id: 1,
        name: 'Add Student',
        link: '/registrar/add-service',
        icon: (<PersonAddAltOutlinedIcon/>)
    },
    {
        id: 2,
        name: 'Students',
        link: '/registrar/students',
        icon: (<GroupsOutlinedIcon/>)
    },

]

const commonNavList = [
    {
        id: 1,
        name: 'My Account',
        link: '/account',
        icon: (<AccountBoxIcon/>)
    },
    {
        id: 2,
        name: 'Change Password',
        link: '/account/change-password',
        icon: (<SyncLockIcon/>)
    }
]

const DrawerHeader = styled('div')(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));


function AppSideBar({drawerWidth, upperLinkList, lowerLinkList, open, handleDrawerClose}) {
    const [user, setUser] = useState({student: true, teacher: false, registrar: false});
    const theme = useTheme();

    return (
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
            variant="persistent"
            anchor="left"
            open={open}
        >
            <DrawerHeader>
                <IconButton onClick={handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </DrawerHeader>
            <Divider/>
            <List>
                {user.student ? (studentNavList.map((item, index) => (
                    <Link href={item.link} key={item.id}>
                        <ListItem button key={item.link}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItem>
                    </Link>
                ))) : user.teacher ? (teacherNavList.map((item, index) => (
                    <Link href={item.link} key={item.id}>
                        <ListItem button key={item.link}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItem>
                    </Link>
                ))) : (registrarNavList.map((item, index) => (
                    <Link href={item.link} key={item.id}>
                        <ListItem button key={item.link}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItem>
                    </Link>
                )))}
            </List>
            <Divider/>
            <List>
                {commonNavList.map((item, index) => (
                    <Link href={item.link} key={item.id}>
                        <ListItem button key={item.id}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.name}/>
                        </ListItem>
                    </Link>
                ))}
            </List>

        </Drawer>
    );
}

export default AppSideBar;
