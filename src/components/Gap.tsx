// src/gap/index
import React, {ReactNode} from "react";

type GapProps = {
    x?: number,
    y?: number,
    xl?: number,
    xr?: number,
    yt?: number,
    yb?: number,
    xy?: number,
    unit?: string,
    block?: boolean,
    className?: undefined | string,
    style?: undefined | object,
    children?: ReactNode | null
}

export default function Gap(props: GapProps) {
    const {x, y, xl, xr, yt, yb, xy, unit, block, className, style, children, ...other} = props;
    const unitCalc = unit ? unit : "px";
    const inlineStyle = {
        //x, y
        paddingLeft: x ? `${x}${unitCalc}` : xl ? `${xl}${unitCalc}` : undefined,
        paddingRight: x ? `${x}${unitCalc}` : xr ? `${xr}${unitCalc}` : undefined,
        paddingTop: y ? `${y}${unitCalc}` : yt ? `${yt}${unitCalc}` : undefined,
        paddingBottom: y ? `${y}${unitCalc}` : yb ? `${yb}${unitCalc}` : undefined,
        padding: xy ? `${xy}${unitCalc}` : undefined,
        display: block ? "block" : "inline-block",
        ...style
    };
    return (
        <span className={className} style={inlineStyle} {...other}>
                {children}
            </span>
    );
}