import * as React from 'react'
import Head from 'next/head'
import {IHeader} from '../common/constants';

const Header = (props: IHeader) => {
    const {title, keywords, description, children} = props;
    return (
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            {title ? <title>{title}</title> : null}
            <title>{title}</title>
            {keywords ? <meta name="keywords" content={keywords}/> : null}
            {description ? <meta name="description" content={description}/> : null}
            {children}
        </Head>
    )
};

export {
    Header
}
