import styled from 'styled-components';
import { ImageSize } from '../types'

const Img = styled.img<{ size: ImageSize }>`
    width: ${(props) => props.size.width}px;
    height: ${(props) => props.size.height}px;
    border-radius: 50%;
`;

function Avatar ({ url, size }: { url: string, size: ImageSize }) {
    return (
        <>
            <picture>
                <source srcSet={url + '.webp'} />
                <Img size={size} src={url + '.jpg'} alt="" />
            </picture>
        </>
    )
}

export default Avatar;
