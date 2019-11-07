import React from 'react';
import InputField from './InputField';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import '../../enzymeConfig';

describe('InputField Common Component', function() {
    const tree = renderer
        .create(<InputField />)
        .toJSON();

    it('renders correctly', () => {
        expect(tree).toMatchSnapshot();
    })
    
    it('should capture correctly the statement', () => {
        const mockHandler = jest.fn();
        const component = shallow(<InputField handleChange={mockHandler}/>);
        const input = component.find('input');
        input.simulate('change', {
            target: {
                value: ''
            }
        });
        expect(mockHandler.mock.calls.length).toBe(1);
    })    
})
