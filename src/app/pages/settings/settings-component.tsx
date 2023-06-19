import { SettingsComponentProps } from '~/app/pages/settings/settings-component.props';
import { withTranslation } from 'react-i18next';
import { TRANSLATION_NAMESPACES } from '~/app/constant/common.constant';
import './settings-component.module.scss';

const SettingsComponent = (props: SettingsComponentProps) => {
    const { t } = props;
    return (
        <div id={'main-content-setting'}>
            <div className={'container'}>
                <div className={'left-content'}>a</div>
                <div className={'right-content'}>a</div>
            </div>
        </div>
    );
};

export default withTranslation(TRANSLATION_NAMESPACES.SETTINGS_PAGE)(SettingsComponent);
