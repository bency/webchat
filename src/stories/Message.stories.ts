import type { Meta, StoryObj } from '@storybook/react';

import { Message } from './Message';

const meta: Meta<typeof Message> = {
    component: Message,
}

export default meta;

type Story = StoryObj<typeof Message>;

export const Default: Story = {
    args: {
        message: 'Hello World!',
    },
};

export const Partner: Story = {
    args: {
        partner: true,
        message: 'Hello World!',
    },
}

export const IncludeAUrlInTheMessage: Story = {
    args: {
        message: '速查、易買、好逛請使用 https://apps.apple.com/tw/app/mood-%E8%BF%BD%E8%B9%A4%E7%86%B1%E9%96%80%E8%A9%B1%E9%A1%8C-%E5%8C%BF%E5%90%8D%E7%99%BC%E5%95%8F%E8%A7%A3%E7%AD%94/id1616095362',
    },
}
