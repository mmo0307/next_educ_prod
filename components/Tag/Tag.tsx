import React from 'react';
import {TagProps} from "@/components/Tag/Tag.props";
import styles from './Tag.module.css';
import cn from 'classnames';

const Tag = ({defaultSize = 'm', color = 'ghost', href, children, ...props}: TagProps) => {
    return (
        <div className={cn(styles.tag, {
            [styles.s]: defaultSize === 's',
            [styles.m]: defaultSize === 'm',
            [styles.ghost]: color === 'ghost',
            [styles.red]: color === 'red',
            [styles.gray]: color === 'gray',
            [styles.green]: color === 'green',
            [styles.primary]: color === 'primary',
        })}
           {...props}
        >
            {
                href ? <a href={href}>{children}</a> : <>{children}</>
            }
        </div>
    );
};

export default Tag;