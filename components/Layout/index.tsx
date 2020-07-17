import * as React from 'react';
import { Header} from "../Header";
import {ILayout} from '../common/constants';

const {Fragment} = React;

const Layout = (props: ILayout) => {
    const {header, children} = props;
    return (
        <Fragment>
            <Header {...header}/>
            {children}
        </Fragment>
    )
};

export {Layout}
