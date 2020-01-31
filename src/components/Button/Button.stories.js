import React from 'react';
import { action } from '@storybook/addon-actions';
import { ContainedButton } from './';

export default {
  title: 'Contained Button',
  component: ContainedButton,
};

export const Text = () => <ContainedButton />;
