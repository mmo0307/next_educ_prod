import React, {FunctionComponent} from 'react';
import styles from './Layout.module.css';
import cn from 'classnames';
import {LayoutProps} from "@/layout/Layout.props";
import Header from "@/layout/Header/Header";
import Sidebar from "@/layout/Sidebar/Sidebar";
import Footer from "@/layout/Footer/Footer";

const Layout = ({children, ...props}: LayoutProps) => {
    return (
        <>
        <Header />
        <div>
            <Sidebar />
            <div>
                {children}
            </div>
        </div>
        <Footer />
        </>
    );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
    return function withLayoutComponent(props: T){
        return (
            <Layout>
                <Component {...props} />
            </Layout>
        );
    };
};