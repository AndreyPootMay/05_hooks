import React from 'react';
import { shallow } from 'enzyme';
import { HooksApp } from '../HooksApp';

describe('Tests in <HookApp />', () => {
    test('Must show correctly', () => {
        const app = shallow(<HooksApp />);

        expect(app).toMatchSnapshot();
    });
});
