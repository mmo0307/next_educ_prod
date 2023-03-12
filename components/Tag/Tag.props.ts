import {DetailedHTMLProps, HtmlHTMLAttributes, ReactNode} from "react";

export interface TagProps extends DetailedHTMLProps<HtmlHTMLAttributes<HTMLDivElement>, HTMLDivElement>{
    children: ReactNode;
    defaultSize?: 's' | 'm';
    color?: 'ghost' | 'red' | 'gray' | 'green' | 'primary';
    href?: string;
}