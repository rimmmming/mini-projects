import React from 'react';
import styled from 'styled-components';

const HabitCard = styled.div`
    display: inline-block;
    width: 210px;
    margin:10px;
    border: 1px solid #000;
`;

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
    &:nth-child(7n + 1) Button {
        border-left: 0;
    }
`;
const Button = styled.button`
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
    &.active{
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

function HabitItem({item, onHandleClick, onHandleDelete}) {
    return (
        <>
            {item.map((habit, index) => {
                const {title, count, days} = habit;
                return(
                    <HabitCard key={`habits_${index}`}>
                        <HabitHeader>
                            <HabitTitle>{title}</HabitTitle>
                            <ButtonClose onClick={()=>{onHandleDelete(index)}}>X</ButtonClose>
                        </HabitHeader>    
                        <HabitContainer>
                            <List>
                                {days.map((daily, idx) => {
                                    const {day, isComplete} = daily;
                                    return(
                                        <ListItem key={`daily_${idx}`}>
                                            <Button type='button' className={isComplete && 'active'} onClick={() => {onHandleClick(habit, idx)}}>{day}</Button>
                                        </ListItem>
                                    )
                                })}
                            </List>
                            <Total>달성률 : {Math.ceil(count/days.length * 100)}%</Total>
                        </HabitContainer>
                    </HabitCard>
                )
            })}
        </>
    );
}

export default HabitItem;