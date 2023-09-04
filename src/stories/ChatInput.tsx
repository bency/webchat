import styled from 'styled-components';
import { useMemo, useState, useRef, FormEvent } from 'react';
import { useContentEditable } from '../hook/useContentEditable';

interface Props {
    onSend: () => void;
}

const FlexBox = styled.div`
    display: flex;
    align-items: center;
`

const Input = styled.div`
    font-size: 14px;
    line-height: 130%;
    font-weight: 500;
    border-radius: 16px;
    padding: 14.5px 16px;
    border: 1px solid #878DA14D;
    color: #1f1f1f;
    width: 100%;

    &:empty::before {
        content: "發送私訊...";
        color: #878da1;
        font-weight: normal;
    }

    &:focus {
        outline: none;
    }
`

const SendBtn = styled.button`
    background-color: transparent;
    width: 28px;
    height: 28px;
    padding: 0;
    display: inline-flex;
    align-items: center;
    border: none;
    flex-shrink: 0;
    margin-left: 18px;
    cursor: pointer;
`

export const ChatInput = (props: Props) => {
    const [text, setText] = useState('');
    const sendBtnColor = useMemo(() => text ? '#8686ff' : '#878da1', [text]);
    const contentEditableRef = useRef(null);

    const { handleInput } = useContentEditable();

    const handleInputChange = (event: FormEvent<HTMLDivElement>) => {
        const newText = handleInput(event);
        setText(newText);
    };

    const handleClickSend = () => {
        setText('');
        if (contentEditableRef?.current !== null) {
            (contentEditableRef.current as HTMLDivElement).innerHTML = '';
        }
        props.onSend;
    };

    return (
        <>
            <FlexBox>
                <Input
                    ref={contentEditableRef}
                    contentEditable
                    onInput={handleInputChange}
                    suppressContentEditableWarning={true}
                />
                <SendBtn onClick={handleClickSend}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                        <path d="M21 11L0.999998 20.5L4.33333 11L0.999999 1.5L21 11Z" stroke={sendBtnColor} strokeWidth="2" strokeLinejoin="round"/>
                        <path d="M4.33301 11H9.33301" stroke={sendBtnColor} strokeWidth="" strokeLinecap="round"/>
                    </svg>
                </SendBtn>
            </FlexBox>
        </>
    )
}
