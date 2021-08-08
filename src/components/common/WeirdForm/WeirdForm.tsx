import { ChangeEventHandler, DetailedHTMLProps, FC, FormEventHandler } from "react";

interface FormInputElement {
    type: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    required: boolean,
    faIcon: string
}

interface IProps {
    onSubmit: FormEventHandler,
    formElements: Array<FormInputElement>
    submitButtonText: string,
    formFooter?: DetailedHTMLProps<any, any>
}

export const WeirdForm: FC<IProps> = props => {
    return (
        <form className="mx-1 mx-md-4" onSubmit={props.onSubmit}>
            {props.formElements.map((element, index) => {
                return <div
                    className="d-flex flex-row align-items-center mb-4"
                    key={element.placeholder}
                >
                    <i className={`fa ${element.faIcon} fa-lg me-3 fa-fw`}></i>
                    <div className="form-outline flex-fill mb-0">
                        <input
                            type={element.type}
                            placeholder={element.placeholder}
                            className="form-control"
                            onChange={element.onChange}
                            required={element.required}
                        />
                    </div>
                </div>
            })}
            {props.formFooter}
            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button type="submit" className="btn btn-primary btn-lg">
                    {props.submitButtonText}
                </button>
            </div>
        </form>
    )
};


