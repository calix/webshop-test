import {DefaultPalette, getTheme, IStackItemTokens, IStackStyles, IStackTokens} from '@fluentui/react'
const theme = getTheme();

export const rootStackStyles: IStackStyles = {
    root: {
        height: '100vh'
    }
}

export const headerStackStyles: IStackStyles = {
    root: {
        height: 48,
        background: theme.palette.themeDarker
    }
}

export const listItemsStackStyles: IStackStyles = {
    root: {
        padding: '10px'
    }
}

export const mainStackStyles: IStackStyles = {
    root: {
    }
}

export const sidebarStackStyles: IStackStyles = {
    root: {
        minWidth: "100%",
        background: theme.palette.neutralPrimary,
        boxShadow: theme.effects.elevation8
    }
}

export const stackStyles: IStackStyles = {
    root: {
        background: DefaultPalette.themeTertiary,
        width: "100%",
        height: "100%"
    },
};

export const numericalSpacingStackTokens: IStackTokens = {
    childrenGap: 30,
    padding: 30,
};

export const itemStyles: React.CSSProperties = {
    alignItems: 'center',
    flexDirection: 'column',
    background: theme.palette.themePrimary,
    color: theme.palette.white,
    display: 'flex',
    height: 250,
    justifyContent: 'center',
    width: 250,
};

export const productItemStyle: React.CSSProperties = {
    alignItems: 'center',
    background: theme.palette.themePrimary,
    color: theme.palette.white,
    display: 'flex',
    justifyContent: 'center',
};

export const titleStackStyles: IStackStyles = {
    root: {
        alignItems: 'center',
        background: theme.palette.neutralPrimaryAlt,
    }
}

export const stackPadding: IStackTokens = {
    padding: 10
}

export const stackGaps: IStackTokens = {
    childrenGap: 10
}

export const stackItemPadding: IStackItemTokens = {
    padding: 10
}

export const stackItemMargin: IStackItemTokens = {
    margin: 10
}