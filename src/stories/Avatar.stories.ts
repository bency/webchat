import type { Meta, StoryObj } from '@storybook/react';

import { Avatar } from './Avatar';

const meta: Meta<typeof Avatar> = {
    component: Avatar,
}

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
    args: {
        url: 'https://picsum.photos/id/237/200/300',
        size: 44,
    },
};
