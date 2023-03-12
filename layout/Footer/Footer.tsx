import React from 'react';
import styles from './Footer.module.css';
import cn from 'classnames';
import {FooterProps} from "@/layout/Footer/Footer.props";

const Footer = ({children, ...props}: FooterProps) => {
    return (
        <div {...props}>
            Footer
        </div>
    );
};

export default Footer;