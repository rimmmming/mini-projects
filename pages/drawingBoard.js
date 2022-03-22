import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactSketchCanvas } from 'react-sketch-canvas';
import ColorPicker from '../components/ColorPicker';

const styles = {
    height:'calc(100vh - 80px)',
};

const Button = styled.button`
    display: inline-block;
    width:120px;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    background-color: #0d6efd;
    border: 1px solid #0d6efd;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    & + & {
        margin-left:15px
    }
    &.Button__color{
        background-color:#6c757d;
        border-color:#6c757d
    }
`;

const Toolbox = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    padding-left:16px;
    height:80px;

`;

function DrawingBoard(){
    const [colorState, setColorState] = useState({
        color: '#ffffff',
        level: 'OFF',
    });
    const [strokeColor, setStrokeColor] = useState('#fff');
    const [canvasColor, setCanvasColor] = useState('#000');
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        setStrokeColor(colorState.colorState)
    },[colorState])
    const canvasEl = useRef(null);
    
    const handleErease = () => {
        canvasEl.current.eraseMode(true);
    }
    const handleDraw = () => {
        canvasEl.current.eraseMode(false);
    }
    const handleClear = () => {
        canvasEl.current.resetCanvas()
    }
    const handleUndo = () => {
        canvasEl.current.undo()
    }
    const handleRedo = () => {
        canvasEl.current.redo()
    }
    const handleStrokeColor = () => {
        setIsOpen(!isOpen)
    }
    const handleCanvasColor = () => {
        setIsOpen(true)
    }
    // const createHistory = () => {
    //     canvasEl.current
    //     .exportPaths()
    //     .then((data) => {
    //         console.log(data);
    //         setLines(data);
    //     })
    //     .catch((e) => {
    //         console.log(e);
    //     });
    // };

    return (    
        <>
            <Toolbox>
                <Button type='button' className='Button__color' onClick={handleStrokeColor}>StrokeColor</Button>
                {/* <Button type='button' className='Button__color' onClick={handleCanvasColor}>CanvasColor</Button> */}
                <Button type='button' onClick={handleDraw}>Pen</Button>
                <Button type='button' onClick={handleUndo}>Undo</Button>
                <Button type='button' onClick={handleRedo}>Redo</Button>
                <Button type='button' onClick={handleClear}>Clear All</Button>
                <Button type='button' onClick={handleErease}>Eraser</Button>
                {
                    isOpen && <ColorPicker color={setColorState.colorState} onChange={(colorState) => setColorState({ ...colorState, colorState: colorState })} />
                }
            </Toolbox>
            <ReactSketchCanvas
                ref={canvasEl}
                style={styles}
                strokeWidth={4}
                strokeColor={strokeColor}
                canvasColor={canvasColor}
            />
        </>
    );
}

export default DrawingBoard;