import styled from 'styled-components';

const Picture = styled.picture<{ size: number}>`
    display: inline-block;
    width: ${(props) => props.size}px;
    height: ${(props) => props.size}px;
    border-radius: 50%;
    overflow: hidden;

    source, img {
        width: 100%;
        height: 100%;
        vertical-align: middle;
    }
`

export const Avatar = ({ url, size }: { url: string, size: number }) => {
    return (
        <>
            <Picture size={size}>
                <source srcSet={url + '.webp'} />
                <img src={url + '.jpg'} alt="" />
            </Picture>
        </>
    )
}
