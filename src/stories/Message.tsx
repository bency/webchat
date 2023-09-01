import styled from 'styled-components'
import PropTypes from 'prop-types';

const  StorybookMessage = styled.div<{ partner?: boolean }>`
    background-color: ${(props) => props.partner ? '#f3f3ff' : '#8686ff'};
    color: ${(props) => props.partner ? '#8686ff' : '#fff'};
    font-size: 14px;
    line-height: 130%;
    padding: 12px 16px;
    width: fit-content;
    border-top-right-radius: 16px;
    border-top-left-radius: ${(props) => props.partner ? '2px' : '16px'};
    border-bottom-right-radius: ${(props) => props.partner ? '16px' : '2px'};
    border-bottom-left-radius: 16px;
    white-space: pre-wrap;

    &:empty {
        display: none;
    }
`;

export const Message = ({ partner, message = '' }: { partner?: boolean, message: string }) => {
    return (
        <StorybookMessage partner={partner}>
            { message }
        </StorybookMessage>
    );
};

Message.propTypes = {
    partner: PropTypes.bool,
};
