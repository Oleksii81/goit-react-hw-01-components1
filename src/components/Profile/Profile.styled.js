import styled from 'styled-components';

export const ProfileStyle = styled.div`
    margin: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 320px;
    max-width: 500px;
    background-image: linear-gradient(90deg,#b9cbba,#636767);
    box-shadow: 0 2px 6px -2px rgba(0, 0, 0, 0.26);
    border-radius: 25px;
    text-align: center;
    font-family: "Montserrat";
    font-weight: 600;
    padding: 15px;

    .avatar{
        width: 100%;
        max-width: 300px;
        border: 5px solid #1c153d;
        border-radius: 25%;
        background-image: linear-gradient(180deg,#6d27ee,#e3ea1e);
    }
    .name{ 
        font-size: 35px;
        margin: 12px 0;
        color: #1c153d;
    }
    .tag{
        margin: 12px 0;
        font-size: 30px;
        color: #211a5f;
    }
    .location{
        font-size: 30px;
        margin: 12px 0;
        color: #1c153d;
    }
    .stats{
        list-style-type: none;
        display: flex;
        justify-content: space-between;
        padding: 0;
        min-width: 320px;
    }
    .stats-items{
        display: flex;
        flex-direction: column;
        min-width: 125px;
    }
    .label{
        font-size: 30px;
        color: #1c153d;
        margin: 10px 0;
    }
    .quantity{
        font-size: 30px;
        color: #211a5f;
    }
`