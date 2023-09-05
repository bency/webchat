import styled from 'styled-components'
import PropTypes from 'prop-types';

const  StorybookMessage = styled.div<{ partner: number }>`
    background-color: ${(props) => props.partner ? '#f3f3ff' : '#8686ff'};
    color: ${(props) => props.partner === 1 ? '#8686ff' : '#fff'};
    font-size: 14px;
    line-height: 130%;
    padding: 12px 16px;
    width: fit-content;
    border-top-right-radius: 16px;
    border-top-left-radius: ${(props) => props.partner === 1 ? '2px' : '16px'};
    border-bottom-right-radius: ${(props) => props.partner === 1 ? '16px' : '2px'};
    border-bottom-left-radius: 16px;
    white-space: pre-wrap;

    &:empty {
        display: none;
    }
`;

export const Message = ({ partner, message = '' }: { partner?: boolean, message: string }) => {
    return (
        <StorybookMessage
            partner={partner ? 1 : 0}
            dangerouslySetInnerHTML={{
                __html: message
                    .replace(/((https?|ftp):\/\/[^\s/$.?#].[^\s]*)/g, '<a href="$1">$1</a>'),
                }}
        />
    );
};

Message.propTypes = {
    partner: PropTypes.bool,
};
