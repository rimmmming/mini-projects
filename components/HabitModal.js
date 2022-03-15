import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Content = styled.div`
    position:fixed;
    left:50%;
    top:50%;
    width:400px;
    height:150px;
    padding:0 20px;
    background-color:#fff;
    transform:translate(-50%, -50%);
    border-radius:10px;
    box-sizing:border-box;
    z-index:20
`;
const Title = styled.h2`
    padding:30px 0 20px;
    font-size:20px;
    color:#222;
`;
const Input = styled.input`
    width:100%;
    border:1px solid #ddd;
    height:35px;
    line-height:35px;
    text-indent:10px;
    font-size:16px
`;
const Dimmed = styled.div`
    position:fixed;
    left:0;
    top:0;
    width:100%;
    height:100%;
    background-color:rgba(0,0,0,0.6);
    z-index:10;
`;


function HabitModal({onHandleAdd}) {
    const inputRef = useRef();

    const onSubmit = (e) => {
        e.preventDefault();
        onHandleAdd(inputRef.current.value)
    }
    return (
        <Container>
            <Content>
                <form onSubmit={onSubmit}>
                    <Title>습관을 입력하세요.</Title>
                    <Input type="text" ref={inputRef} placeholder='예) 매일 즐겁게 코딩하기' />
                </form>
            </Content>
            <Dimmed />
        </Container>
    );
}

export default HabitModal;