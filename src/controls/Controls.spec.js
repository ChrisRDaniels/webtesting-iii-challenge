// Test away!

import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import Controls from "./Controls";

test("Controls is now rendering", () => {
    render(<Controls />);
});

test("Unlock Gate Enabled, Open Gate Disabled", () => {
    const setClosedButtonMock = jest.fn();
    const { getByText } = render(<Controls toggleClosed={setClosedButtonMock} closed={true} locked={true}/>);
    fireEvent.click(getByText(/Open Gate/i));
    expect((getByText(/Open Gate/i))).toBeDisabled();
})

test("Unlock Gate Enabled, Lock Gate Enabled", () => {
    const setLockedButtonMock = jest.fn();
    const { getByText } = render(<Controls toggleLocked={setLockedButtonMock} closed={false} locked={false} />);
    fireEvent.click(getByText(/Lock Gate/i));
    expect((getByText(/Lock Gate/i))).toBeDisabled();
})