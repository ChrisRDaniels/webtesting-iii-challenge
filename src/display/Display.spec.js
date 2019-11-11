import React from 'react';
import { render } from 'react-testing-library';
import Display from './Display';

// Test away!

test('Defaults to open and unlocked', () => {
    const { getByText } = render(<Display />)

    getByText (/^unlocked$/i)
    getByText (/^open$/i)
})