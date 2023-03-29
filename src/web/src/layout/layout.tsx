import React, { FC, ReactElement, useContext, useEffect, useMemo } from 'react';
import Header from './header';
import { Stack } from '@fluentui/react';
import { AppContext } from '../models/applicationState';
import { WebShopContext } from '../components/webShopContext';
import * as listActions from '../actions/productActions';
import { ProductActions } from '../actions/productActions';
import {
    headerStackStyles,
    itemStyles,
    numericalSpacingStackTokens, productItemStyle,
    rootStackStyles,
    sidebarStackStyles,
    stackStyles
} from '../ux/styles';
import { bindActionCreators } from '../actions/actionCreators';

const Layout: FC = (): ReactElement => {
    const appContext = useContext<AppContext>(WebShopContext)
    const actions = useMemo(() => ({
        lists: bindActionCreators(listActions, appContext.dispatch) as unknown as ProductActions,
    }), [appContext.dispatch]);

    // Load initial lists
    useEffect(() => {
        if (!appContext.state.application?.products) {
            actions.lists.list();
        }
    }, [actions.lists, appContext.state.application?.products]);

    const productGrid = () => {
        return appContext.state.application?.products?.map((product) => {
            return (<div style={itemStyles}>
                <div style={productItemStyle}>{product.name}</div>
                <div>{product.description}</div>
            </div>)
        });
    }

    return (
        <Stack styles={rootStackStyles}>
            <Stack.Item styles={headerStackStyles}>
                <Header></Header>
            </Stack.Item>
            <Stack horizontal grow={2}>
                <Stack.Item styles={sidebarStackStyles}>

                    <Stack enableScopedSelectors horizontal styles={stackStyles} tokens={numericalSpacingStackTokens}>
                        {productGrid()}
                    </Stack>
                </Stack.Item>
            </Stack>
        </Stack>
    );
}

export default Layout;
