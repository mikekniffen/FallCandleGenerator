import React, { useState, useEffect } from 'react';
import background from './images/background-2.jpg';
import { appModes } from './types'

const backgroundWidth = 3840;
const backgroundHeight = 2400;
const aspectRatio = 3840 / 2400;
const dTms = 33;
const scrollRatePx = 1;
const zoomRatePx = 50;

const direction = {
    "Increase": 1,
    "Decrease": 2,
};

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function getBackgroundStyle(
    left: number,
    top: number,
    height: number): React.CSSProperties {
    return {
        height: `${height}px`,
        position: "relative",
        overflowY: "hidden",
        overflowX: "hidden",
        left: left,
        top: top
    };
}

function getMinLeft(windowWidth: number, imgHeight: number): number {
    const actualWidth = aspectRatio * imgHeight;
    return windowWidth - actualWidth;
}

function getImgHeight(windowSize: { width: number, height: number }): number {
    const target = windowSize.height * 2.5;
    if (target * aspectRatio < windowSize.width) {
        return windowSize.width / aspectRatio;
    }
    return target;
}

function getGenerateTargetImgHeight(windowSize: { width: number, height: number }) {
    const target = windowSize.height;
    if (target * aspectRatio < windowSize.width) {
        return windowSize.width / aspectRatio;
    }
    return target;
}

export function FloatingBackground(props: { mode: number }) {

    const [disableAnimation, setDisableAnimation] = useState(false);
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    const [imgHeight, setImgHeight] = useState(getImgHeight(windowDimensions));
    const [minLeft, setMinLeft] = useState(getMinLeft(windowDimensions.width, imgHeight));
    const [left, setLeft] = useState(0);
    const [leftDirection, setLeftDirection] = useState(direction.Decrease);

    const [top, setTop] = useState(0);

    useEffect(() => {
        function handleResize() {
            const newDimensions = getWindowDimensions();
            const newImgHeight = props.mode === appModes.wait 
                ? getImgHeight(newDimensions)
                : getGenerateTargetImgHeight(newDimensions);
            const newMinLeft = getMinLeft(newDimensions.width, newImgHeight);
            setWindowDimensions(newDimensions);
            setMinLeft(getMinLeft(newDimensions.width, newImgHeight));
            setImgHeight(newImgHeight);
            if (newMinLeft > -5) {
                setDisableAnimation(true);
            }
            else {
                setDisableAnimation(false);
            }
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function animationTick() {
        if (disableAnimation) { return; }
        
        if (props.mode === appModes.wait) {
            if (imgHeight < getImgHeight(windowDimensions)) {
                setImgHeight(imgHeight + zoomRatePx);
            }

            if (leftDirection === direction.Decrease) {
                setLeft(left - scrollRatePx);
                if (left <= minLeft) {
                    setLeftDirection(direction.Increase);
                }
            } else {
                setLeft(left + scrollRatePx);
                if (left >= 0) {
                    setLeftDirection(direction.Decrease);
                }
            }
        }
        else {
            const targetHeight = getGenerateTargetImgHeight(windowDimensions);
            if (imgHeight > targetHeight) { 
                    setImgHeight(imgHeight - zoomRatePx); 
            } else { 
                setImgHeight(targetHeight)
            }
            if (Math.abs(left) > zoomRatePx) { setLeft(left + zoomRatePx); } else { setLeft(0); }
            if (Math.abs(top) > zoomRatePx) { setTop(top + zoomRatePx); } else {setTop(0); }
        }
    };

    useEffect(() => {
        let id = setInterval(animationTick, dTms);
        return () => clearInterval(id);
    });

    const backgroundStyle = getBackgroundStyle(left, top, imgHeight);

    return (
        <img src={background} style={backgroundStyle}></img>
    );

}

