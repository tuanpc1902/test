import { DefaultLayoutProps } from './default-layout.props';
import HeaderComponent from '../components/header/header-component';
import { Fragment } from 'react';

const DefaultLayoutComponent = ({ children }: DefaultLayoutProps) => {
    return (
        <Fragment>
            {/* <div className="sticky top-0">
                <HeaderComponent />
                <HeaderComponent />
            </div> */}
            <div className={'container m-auto box-shadow-header'}>
                <HeaderComponent />
                <div className={'content'} style={{ height: 1100 }}>
                    {children}
                </div>
            </div>
        </Fragment>
    );
};

export default DefaultLayoutComponent;
