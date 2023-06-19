import { HomeComponentProps } from '~/app/pages/home/home-component.props';
import { withTranslation } from 'react-i18next';
import { TRANSLATION_NAMESPACES } from '~/app/constant/common.constant';
import QuickViewsComponent from '~/app/components/modal/quick-views/quick-views.component';

const product = {
    name: 'Basic Tee 6-Pack ',
    price: '$192',
    rating: 3.9,
    reviewCount: 117,
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',
    imageAlt: 'Two each of gray, white, and black shirts arranged on table.',
    colors: [
        { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
        { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
        { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    ],
    sizes: [
        { name: 'XXS', inStock: true },
        { name: 'XS', inStock: true },
        { name: 'S', inStock: true },
        { name: 'M', inStock: true },
        { name: 'L', inStock: true },
        { name: 'XL', inStock: true },
        { name: 'XXL', inStock: true },
        { name: 'XXXL', inStock: false },
    ],
};

const HomeComponent = (props: HomeComponentProps) => {
    const { t } = props;
    return <span className="text-white">Home Page</span>;
};

export default withTranslation(TRANSLATION_NAMESPACES.HOME_PAGE)(HomeComponent);
