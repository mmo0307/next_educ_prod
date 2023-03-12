import React from 'react';
import styles from './Header.module.css';
import cn from 'classnames';
import {HeaderProps} from "@/layout/Header/Header.props";

const Header = ({children, ...props}: HeaderProps) => {
    return (
        <div {...props}>
            Header
        </div>
    );
};

export default Header;