import React, { useEffect, useContext, useMemo, useState } from 'react';
import { IContextualMenuProps, IIconProps, Stack } from '@fluentui/react';
import { ProductItem } from '../models';
import * as listActions from '../actions/productActions';
import { WebShopContext } from '../components/webShopContext';
import { AppContext } from '../models/applicationState';
import { ProductActions } from '../actions/productActions';
import { stackItemPadding } from '../ux/styles';
import { useNavigate, useParams } from 'react-router-dom';
import { bindActionCreators } from '../actions/actionCreators';
import { withApplicationInsights } from '../components/telemetry';

const HomePage = () => {
    const navigate = useNavigate();
    const appContext = useContext<AppContext>(WebShopContext)
    const { listId, itemId } = useParams();
    const actions = useMemo(() => ({
        lists: bindActionCreators(listActions, appContext.dispatch) as unknown as ProductActions,
    }), [appContext.dispatch]);

    const [isReady, setIsReady] = useState(false)

    const iconProps: IIconProps = {
        iconName: 'More',
        styles: {
            root: {
                fontSize: 14
            }
        }
    }

    const menuProps: IContextualMenuProps = {
        items: [
            {
                key: 'delete',
                text: 'Delete List',
                iconProps: { iconName: 'Delete' }
            }
        ]
    }

    return (
        <Stack>
            <Stack.Item tokens={stackItemPadding}>

            </Stack.Item>
        </Stack >
    );
};

export default withApplicationInsights(HomePage, 'Homepage');