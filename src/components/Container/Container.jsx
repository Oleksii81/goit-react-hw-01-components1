import {ContainerStyle} from './container.styled';

export const Container = ({children}) => {
    return (
        <ContainerStyle>
            <div className='container'>{children}</div>
        </ContainerStyle>
    )
};