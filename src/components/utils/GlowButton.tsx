import {FC, MouseEventHandler, PointerEventHandler, ReactNode, useEffect, useMemo, useRef, useState} from "react";
import "./GlowButton.scss";

type Props = {
    children: ReactNode;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const GlowButton: FC<Props> = ({ children, onClick }) => {
    const [offsetWidth, setOffsetWidth] = useState<number>(0);
    const [offsetHeight, setOffsetHeight] = useState<number>(0);

    const [translateX, setTranslateX] = useState<string>("-40%");
    const [translateY, setTranslateY] = useState<string>("-30%");

    const buttonRef = useRef<HTMLButtonElement>(null);

    // This function calculate button's position
    const getPosition = () => {
        if (buttonRef.current) {
            setOffsetWidth(buttonRef.current.offsetWidth);
            setOffsetHeight(buttonRef.current.offsetHeight);
        }
    };

    useEffect(() => {
        getPosition();
    }, []);

    const onMove = (e: React.PointerEvent<HTMLButtonElement>) => {
        if (buttonRef.current) {
            const { pageX, pageY } = e;

            const rect = buttonRef.current.getBoundingClientRect();

            setTranslateX(
                `${pageX - rect.left - window.scrollX - offsetWidth / 2}px`
            );
            setTranslateY(
                `${pageY - rect.top - window.scrollY - offsetHeight / 2}px`
            );
        }
    };

    const styleValue = useMemo(
        () => ({
            transform: `translate(${translateX}, ${translateY})`
        }),
        [translateX, translateY]
    );

    return (
        <button
            className="glow-button"
            onClick={onClick}
            onPointerMove={(e) => onMove(e)}
            ref={buttonRef}
        >
            {children}
            <div className="glow-button__glow">
                <div className="glow-button__glow-light" style={styleValue} />
            </div>

            <div className="glow-button__border">
                <div className="glow-button__border-light" style={styleValue} />
            </div>
        </button>
    );
};

export default GlowButton;