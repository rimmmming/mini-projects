import React, { useState, useEffect } from 'react';
// import habitTrackerAPI from './api/habitData';
import dailyCheckData from './api/dailyCheckData';
import styled from 'styled-components';
import HabitItem from '../components/HabitContainer';
import HabitModal from '../components/HabitModal';

const Header = styled.header`
    position: relative;
	padding: 30px 0;
	text-align: center;
`;
const Title = styled.h1`
    display: inline;
    font-size: 38px;
    color: #fff;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
        1px 1px 0 #000;
    border-bottom: 1px solid #000;
`;
const ButtonAdd = styled.button`
    position: absolute;
	right: 30px;
	top: 30px;
	width: 30px;
	height: 30px;
	border: 1px solid #000;
    background-color:#fff;
`;
const Container = styled.div`
    padding: 30px;
`;
const HabitWrap = styled.div``;

// let habitData = JSON.parse(JSON.stringify(habitTrackerAPI))

function habitTracker() {
    const [isModal, setIsModal] = useState(false);
    const [habitList, setHabitList] = useState(() => {
        if(typeof window !== 'undefined'){
            const savedData = window.localStorage.getItem('habitList');
            if(savedData !== null){
                return JSON.parse(savedData)
            }else{
                return [];
            }
        }
    });

    const onHandleClick = (habit, idx) => {
        habit.days[idx].isComplete = !habit.days[idx].isComplete;
        habit.days[idx].isComplete ? habit.count += 1 : habit.count -= 1
        setHabitList([...habitList])
        localStorage.setItem('habitList', JSON.stringify([...habitList]))
    }
    const onHandleModal = () => {
        setIsModal(true)
    }
    const onHandleAdd = (title) => {
        setIsModal(false)
        if(!title) return;
        const newHabits = [...habitList, {title, count:0, ...dailyCheckData }]
        setHabitList(newHabits)
        localStorage.setItem('habitList', JSON.stringify(newHabits))
    }
    const onHandleDelete = (habit) => {
        const newHabits = habitList.filter((item) => {
            return item.title !== habit.title
        })
        setHabitList(newHabits)
        localStorage.setItem('habitList', JSON.stringify(newHabits))
    }
    
    return (
        <>
            <Header>
				<Title>Tracker</Title>
				<ButtonAdd type="button" onClick={onHandleModal}>+</ButtonAdd>
                {isModal && <HabitModal onHandleAdd={onHandleAdd} />}
			</Header>
            <Container>
                {habitList && <HabitItem item={habitList} onHandleClick={onHandleClick} onHandleDelete={onHandleDelete}/>}
            </Container>
        </>
    );
}

export default habitTracker;