import React from 'react';
import InputField from '../common/InputField';
import DatePicker from '../common/DatePicker';
import FormGroup from '../common/FormGroup';
import SubmitButton from '../common/SubmitButton';

export interface IComponentProps {
}

class CreateStatement extends React.Component<IComponentProps> {
    private descriptionRef = React.createRef<HTMLInputElement>();

    constructor(props: IComponentProps) {
        super(props);
    }

    render() {
        return (
            <form className="form">
              <FormGroup labelText="Actividad">
                <InputField />
              </FormGroup>
              <FormGroup labelText="Fecha">
                <DatePicker />
              </FormGroup>
              <SubmitButton buttonText="Agregar" handleOnClick={() => console.log('SAVED!')} />
            </form>
        );
    }
}

export default CreateStatement;