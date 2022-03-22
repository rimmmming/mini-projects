import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import iro from '@jaames/iro';

const Picker = styled.div`
    position:fixed;
    left:0;
    top:85px;
    width:300px;
    height:340px;
    padding:10px;
    border-radius:10px;
    background-color:#fff;
`;

const ColorPicker = ({ color, onChange }) => {
    const ref = useRef()
    const colorPicker = useRef()
    useEffect(() => {
      const cp = (colorPicker.current = new iro.ColorPicker(ref.current, {
        color,
      }))
      cp.on('color:change', (color) => onChange(color.hexString))
    }, [])
    return <Picker ref={ref} />
  }
  export default ColorPicker