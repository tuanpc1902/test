import { GlobalStylesProps } from './global-styles.props';
import './styles.scss';

const GlobalStyles = ({ children, ...props }: GlobalStylesProps) => {
    return { children, ...props };
};

export default GlobalStyles;
