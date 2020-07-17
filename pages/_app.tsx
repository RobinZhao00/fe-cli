import * as React from 'react';
// import * as _ from 'lodash';
import App from 'next/app';
import {Layout} from '../components/Layout';
import {devConfig, prodConfig} from '../config';
import '../styles/common.scss'

const layout = {
    header: {
        title: '领健开放平台',
    },
};

export default class MyApp extends App<any> {
    state: any = {
        pageConfig: {},
    };

    componentDidMount() {
        const isDev = (/(http:\/\/127)|(localhost:)/g).test(window.location.href);
        this.setState({
            pageConfig: isDev ? devConfig : prodConfig,
        });
        // console.log('**test**', '', _);
    }

    render() {
        const {Component, pageProps} = this.props;
        const {pageConfig} = this.state;
        pageProps.pageConfig = pageConfig;
        return (
            <Layout {...layout}>
                <Component {...pageProps} />
            </Layout>
        )
    }
}
