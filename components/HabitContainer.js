import React from 'react';
import styled from 'styled-components';

const HabitHeader = styled.div`
    position: relative;
    height: 38px;
    padding: 10px;
    box-sizing: border-box;
`;
const HabitTitle = styled.h2`
    font-size: 14px;
`;
const ButtonClose = styled.button`
    position: absolute;
    right: 5px;
    top: 5px;
    width: 30px;
    height: 30px;
    font-size: 14px;
`;
const HabitContainer = styled.div`
    position: relative;
`;
const List = styled.ul`
`;
const ListItem = styled.li`
    display: inline-flex;
    height: 30px;
    vertical-align: top;
    &:nth-child(7n + 1) Label {
        border-left: 0;
    }
`;
const InputCheckBox = styled.input`
    -webkit-appearance: none;
    appearance: none;
    &:focus + Label{
        outline: auto 5px -webkit-focus-ring-color;
    }
    &:checked + Label{
        background: #ffff00;
        color: #999;

        &::after{
            content: "";
            position: absolute;
            width: 1px;
            height: 60px;
            transform: rotate(45deg);
            background-color: #999;
        }
    }
`;
const Label = styled.label`
    position: relative;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	border-left: 1px solid #000;
	border-top: 1px solid #000;
	box-sizing: border-box;
	font-size: 12px;
	cursor: pointer;
`;
const Total = styled.span`
    position: absolute;
	right: 0;
	bottom: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 120px;
	height: 30px;
	border-left: 1px solid #000;
	border-top: 1px solid #000;
	box-sizing: border-box;
	font-size: 12px;
`;

function HabitItem({item, onHandleChange}) {

    const onChange = (e) => {
        console.log(2)
        onHandleChange(e)
    }
    return (
        <>
            {item.map((habit, index) => {
                const {title, days} = habit;
                return(
                    <div key={`habits_${index}`}>
                        <HabitHeader>
                            <HabitTitle>{title}</HabitTitle>
                            <ButtonClose>X</ButtonClose>
                        </HabitHeader>    
                        <HabitContainer>
                            <List>
                                {days.map((daily, idx) => {
                                    const {day, isComplate} = daily;
                                    return(
                                        <ListItem key={`daily_${idx}`}>
                                            <InputCheckBox type="checkbox" onChange={onChange} checked={isComplate ? true : false}/>
                                            <Label htmlFor="">{day}</Label>
                                        </ListItem>
                                    )
                                })}
                            </List>
                            <Total>달성률 : 0%</Total>
                        </HabitContainer>
                    </div>
                )
            })}
        </>
    );
}

export default HabitItem;