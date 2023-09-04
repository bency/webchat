import { FormEvent } from 'react';

export const useContentEditable = () => {
    const handleInput = ((e: FormEvent<HTMLDivElement>): string => {
        let text = '';

        (e.target as HTMLDivElement).childNodes.forEach((node, i) => {
            text += ((node as HTMLDivElement).innerText || node.nodeValue || '').replace(/\n/g, '');
            if (i !== (e.target as HTMLDivElement).childNodes.length - 1) {
                text += '\n';
            }
        });

        return text;
    });

    return {
        handleInput,
    };
};
