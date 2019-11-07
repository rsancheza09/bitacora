import React, { MouseEvent } from 'react';

export interface IComponentProps {
    buttonText: string;
    buttonType?: string;
    handleOnClick: Function;
}

const SubmitButton: React.FC<IComponentProps> = props => {

    const handleOnClick = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        props.handleOnClick();
    };

    return (
        <button
            className={`btn ${props.buttonType ? props.buttonType : 'btn-primary'}`}
            onClick={handleOnClick}
        >
            {props.buttonText}
        </button>
    );
};

export default SubmitButton;
