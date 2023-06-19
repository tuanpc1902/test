import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router';
import { RoutesConstant } from '~/app/constant/routes.constant.ts';
import { DefaultLayoutComponent } from '~/app/layout';

interface RouteInterface {
    path: string;
    component: React.ReactNode;
    layout: React.ReactNode | null;
}

const Router = () => {
    const onSelectLayout = (route: { path: string; component: any; layout: any }): { Layout: any; Element: any } => {
        const Layout = route.layout ? route.layout : route.layout === null ? Fragment : DefaultLayoutComponent;
        const Element = route.component;
        return { Layout: Layout, Element: Element };
    };

    const renderRoute = () => {
        return RoutesConstant.publicRoutes.map((route: any, index) => {
            const LayoutRouter = onSelectLayout(route);
            return (
                <Route
                    key={index}
                    path={route.path}
                    element={
                        <LayoutRouter.Layout>
                            <LayoutRouter.Element />
                        </LayoutRouter.Layout>
                    }
                />
            );
        });
    };

    const renderLayout = () => {
        return <Routes>{renderRoute()}</Routes>;
    };

    return <Fragment>{renderLayout()}</Fragment>;
};

export default Router;
