import styled from 'styled-components';

export const TransactionHistoryStyle = styled.table`
    width: 100%;
    max-width: 800px;
    text-align: center;
    background-image: linear-gradient(90deg,#b9cbba,#636767);
    padding: 30px 20px;
    border-radius: 25px;
    font-weight: 600;
    margin-bottom: 20px;
    margin-top: 40px;

    th{
        padding: 15px;
        font-size: 30px;
        color: #1c153d;
    }

    td{
        border: 2px solid #000;
        font-size: 25px;
        color: #211a5f;
        opacity: 0.7;
    }
`