export interface IHeader {
    title?: string;
    keywords?: string;
    description?: string;
    children?: any;
}

export interface ILayout {
    header?: IHeader;
    children?: any;
}

export interface IApp {
    layout?: ILayout;
    Component?: any;
    pageProps?: any;
}
