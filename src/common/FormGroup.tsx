import React from 'react';

export interface IComponentProps {
    labelText?: string;
}

const FormGroup: React.FC<IComponentProps> = props => {
    return (
        <div className="form-group">
            { props.labelText ? (
                <label>{props.labelText}</label>
            ) : '' }
            {props.children}
        </div>
    );
};

export default FormGroup;
