import * as React from 'react';
export declare enum VerticalGravity {
    bottom = "bottom",
    top = "top"
}
export declare enum HorizontalGravity {
    left = "left",
    right = "right",
    center = "center"
}
export interface TooltipProps {
    className?: string;
    style?: any;
    backgroundColor?: string;
    textColor?: string;
    maxWidth?: number | string;
    tipContainerPadding?: number | string;
    tipContainerBorderRadius?: number | string;
    verticalSpacing?: number;
    wrapper?: React.PureComponent | React.FC | React.Component | React.ClassicComponent | string;
    preferredVerticalGravity?: VerticalGravity;
    preferredHorizontalGravity?: HorizontalGravity;
    tip: React.ReactNode;
    children: React.ReactNode;
}
export default function Tooltip({ wrapper, preferredVerticalGravity, preferredHorizontalGravity, verticalSpacing, backgroundColor, textColor, maxWidth, style, className, tip, children, tipContainerPadding, tipContainerBorderRadius, }: TooltipProps): JSX.Element;
