import React from 'react';
import {PtagProps} from "@/components/Ptag/Ptag.props";
import styles from './Ptag.module.css';
import cn from 'classnames';

const Ptag = ({defaultSize = 'm', children, ...props}: PtagProps) => {
    return (
        <p className={cn(styles.pTag, {
            [styles.s]: defaultSize === 's',
            [styles.m]: defaultSize === 'm',
            [styles.l]: defaultSize === 'l',
        })}
           {...props}
        >{children}</p>
    );
};

export default Ptag;