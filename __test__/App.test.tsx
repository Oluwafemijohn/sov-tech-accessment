import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';

import App from '../App';

describe('<App />', () => {
    it('has 1 child', () => {
        expect(React.Children.count(<App />)).toEqual(1);
    });
});


describe('App', () => {
    it('renders correctly', async () => {
        render(<App />);
        expect(screen.getByTestId('wrapper')).toBeTruthy();
    });
});
