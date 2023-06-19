import { WithTranslation } from "react-i18next";

interface DataInterface {
    name: string,
    price: string | number,
    rating: number,
    reviewCount: number,
    href: string,
    imageSrc: string,
    imageAlt: string,
    colors: [
        {
            name: string,
            class: string,
            selectedClass: string
        }
    ],
    sizes: {
        name: string,
        inStock: boolean
    },

}

export interface QuickViewsProps extends WithTranslation{
    isOpen: boolean,
    data: any,
}