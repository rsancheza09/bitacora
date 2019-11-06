import React, { useState } from 'react';

export interface IComponentProps {
    description?: string;
    placeholder?: string;
}

export interface IField {
    description: string;
}

const InputField: React.FC<IComponentProps> = (props) => {
    const [form, setDescription] = useState<IField>({
        description: props.description || ''
    });

    const handleOnChange = (value: string): void => {
        setDescription({
            ...form,
            description: value,
        });
    };

    return (
        <input
            type="text"
            placeholder={props.placeholder || 'Descripción de la actividad'}
            value={form.description}
            onChange={(e) => handleOnChange(e.target.value)}
            className="form-control"
        />
    );
};

export default InputField;
