import React from 'react';
import styles from './Sidebar.module.css';
import cn from 'classnames';
import {SidebarProps} from "@/layout/Sidebar/Sidebar.props";

const Sidebar = ({children, ...props}: SidebarProps) => {
    return (
        <div {...props}>
            Sidebar
        </div>
    );
};

export default Sidebar;