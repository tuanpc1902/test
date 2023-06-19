import { withTranslation } from 'react-i18next';
import { TRANSLATION_NAMESPACES } from '~/app/constant/common.constant';
import { SidebarComponentProps } from './sidebar-component.props';

const SidebarComponent = (props: SidebarComponentProps) => {
    const { t } = props;
    return (
        <aside className={'wrapper'}>
            <h3>Sidebar</h3>a
        </aside>
    );
};

export default withTranslation(TRANSLATION_NAMESPACES.GENERAL)(SidebarComponent);
