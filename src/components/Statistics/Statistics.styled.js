import styled from 'styled-components';

export const StatisticStyle = styled.section`
    font-family: 'Monserat';
    width: 100%;
    max-width: 1000px;
    .title{
        font-size: 35px;
        color: #1c153d;
        text-align: center;
    }
    .stat-list{
        display: flex;
        list-style-type: none;
        padding: 0;
        margin: 0;
        padding: 20px;
        background-image: linear-gradient(90deg,#b9cbba,#636767);
        border: 3px solid #1c153d;
        border-radius: 25px;
        justify-content: space-between;
    }
    .item{
        padding: 15px 55px;
        border-radius: 15px;
        color: #1c153d;
        font-weight: 600;
        font-size: 25px;
        display: flex;
        flex-direction: column;
    }
    .percentage{
        margin-top: 10px;
    }
` 