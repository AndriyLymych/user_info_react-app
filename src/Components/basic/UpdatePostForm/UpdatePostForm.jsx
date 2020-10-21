import React from 'react'
import {Field} from 'redux-form'
import {InputCreator, TextareaCreator} from "../../../helpers/FormCreator/FormCreator";
import {
    minLengthValidator,
    requiredValidator
} from "../../../validators/validators";
import style from './UpdatePost.module.css'

const minLength = minLengthValidator(2);

const UpdatePostForm = ({handleSubmit, submitting}) => {

    return (
        <form className={style.updateForm} onSubmit={handleSubmit}>
            <div>
                <div className={style.label}>Change title:</div>
                <div>
                    <Field
                        name="title"
                        component={InputCreator}
                        autoFocus
                        validate={[requiredValidator, minLength]}
                    />
                </div>

            </div>
            <div>
                <div className={style.label}>Change description:</div>
                <div>
                    <Field
                        name="body"
                        component={TextareaCreator}
                        validate={[requiredValidator, minLength]}
                    />
                </div>
            </div>

            <button title={'Check'} className={style.check} type="submit" disabled={submitting}>
                Check
            </button>

        </form>
    )
};

export default UpdatePostForm