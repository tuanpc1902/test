import { Fragment } from 'react';
import { HeaderOnlyProps } from './header-only.props';
import HeaderComponent from '../components/header/header-component';

const HeaderOnlyComponent = ({ children }: HeaderOnlyProps) => {
    return (
        <div className="container">
            <HeaderComponent />
            <div className={`container`}>
                <div className={`content`}>{children}</div>
            </div>
        </div>
    );
};

export default HeaderOnlyComponent;
