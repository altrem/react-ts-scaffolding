import * as React from 'react';
import * as enzyme from 'enzyme';
import { Hello } from './hello';

it('is given Kenobi as a name and displays it properly', () => {
    const helloMarkup = enzyme.shallow(<Hello name="Kenobi" />);
    expect(helloMarkup.text()).toEqual('General Kenobi! You are a bold one!');
});

it('throws when it is given a name that is not Kenobi', () => {
    expect(() => {
        enzyme.shallow(<Hello name="Haskell" />);
    }).toThrow();
});