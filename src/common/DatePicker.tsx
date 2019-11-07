import React, { useState } from 'react';

export interface IComponentProps {
    startDate?: string;
    placeholder?: string;
}

export interface IField {
    startDate: string;
}

const DatePicker: React.FC<IComponentProps> = props => {
    const [state, setDate] = useState<IField>({
        startDate: '',
    });

    const handleOnChange = (value: string): void => {
        setDate({
            ...state,
            startDate: value,
        });
    };

    return (
        <input
            type="date"
            placeholder={props.placeholder || 'MM/DD/YYYY'}
            value={state.startDate}
            onChange={(e) => handleOnChange(e.target.value)}
            className="form-control"
        />
    );
};

export default DatePicker;
