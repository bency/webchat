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
