import React, { useState } from 'react';
import habitTrackerAPI from './api/habitData';
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
const HabitWrap = styled.div`
    display: inline-block;
    width: 210px;
    border: 1px solid #000;
    & + & {
        margin-left:20px
    }
`;


let habitData = JSON.parse(JSON.stringify(habitTrackerAPI))

const onHandleChange = (e) => {
    console.log(1)
}

function habitTracker() {
    const [habitList, setHabitList] = useState(habitData);
    const [isModal, setIsModal] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    
    return (
        <>
            <Header>
				<Title>Tracker</Title>
				<ButtonAdd type="button">+</ButtonAdd>
                {isModal && <HabitModal />}
			</Header>
            <Container>
                <HabitWrap>
					<HabitItem item={habitList} onHandleChange={onHandleChange}/>
				</HabitWrap>
            </Container>
        </>
    );
}

export default habitTracker;