import { FontIcon, getTheme, IStackStyles, mergeStyles, Stack, Text } from '@fluentui/react';
import React, { FC, ReactElement } from 'react';

const theme = getTheme();

const logoStyles: IStackStyles = {
    root: {
        width: '300px',
        background: theme.palette.themePrimary,
        alignItems: 'center',
        padding: '0 20px'
    }
}

const logoIconClass = mergeStyles({
    fontSize: 20,
    paddingRight: 10
});

const toolStackClass: IStackStyles = {
    root: {
        alignItems: 'center',
        height: 48,
        paddingRight: 10
    }
}

const Header: FC = (): ReactElement => {
    return (
        <Stack horizontal>
            <Stack horizontal styles={logoStyles}>
                <FontIcon aria-label="Check" iconName="SkypeCircleCheck" className={logoIconClass} />
                <Text variant="xLarge">Web shop</Text>
            </Stack>
            <Stack.Item grow={1}>
                <div></div>
            </Stack.Item>
            <Stack.Item>
                <Stack horizontal styles={toolStackClass} grow={1}>
                    Guest
                </Stack>
            </Stack.Item>
        </Stack>
    );
}

export default Header;