import { withTranslation } from 'react-i18next';
import { TRANSLATION_NAMESPACES } from '~/app/constant/common.constant';
import { HeaderComponentProps } from './header-component.props';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const navigation: Array<{ name: string; href: string }> = [
    { name: 'home', href: '/' },
    { name: 'introduce', href: '/introduce' },
    { name: 'blog', href: '/blog' },
    { name: 'contact', href: '/contact' },
];

// const NavBar = (): JSX.Element => {
//     return()
// }

const HeaderComponent = (props: HeaderComponentProps) => {
    const { t } = props;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="sticky top-0 h-24">
            <header className="text-white inset-x-0 top-0 z-50 text-4xl h-24" style={{ backgroundColor: '#F4ABC4' }}>
                <nav className="flex items-center justify-between p-6 lg:px-0" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <a href="#" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <span className="text-gradient">Pham Cong Tuan</span>
                        </a>
                    </div>
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
                        <a href="#" className="text-3xl font-medium leading-6 bg-btn-primary">
                            {t('contactWithMe')} <span aria-hidden="true"></span>
                        </a>
                    </div>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-50" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-700 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="#" className="-m-1.5 p-1.5 text-4xl">
                                <span className="sr-only">Your Company</span>
                                <span className="text-gradient">Pham Cong Tuan</span>
                            </a>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item: any) => (
                                        // <a
                                        //     key={item.name}
                                        //     href={item.href}
                                        //     className="-mx-3 block rounded-lg px-3 py-2 text-2xl font-medium leading-7 text-white hover:text-gray-700 hover:bg-gray-50"
                                        // >
                                        //     {t(item.name)}
                                        // </a>
                                        <Link
                                            key={item.name}
                                            className="-mx-3 block rounded-lg px-3 py-3 text-3xl font-medium leading-7 text-white hover:text-gray-700 hover:bg-gray-50"
                                            to={item.href}
                                        >
                                            {t(item.name)}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-3xl font-medium leading-7 text-white hover:text-gray-700 hover:bg-gray-50"
                                    >
                                        {t('login')}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    );
};

export default withTranslation(TRANSLATION_NAMESPACES.HEADER)(HeaderComponent);
