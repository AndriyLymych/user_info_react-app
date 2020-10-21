import React from 'react'
import {Field} from 'redux-form'
import {InputCreator, SelectCreator, TextareaCreator} from "../../../helpers/FormCreator/FormCreator";
import {
    minLengthValidator,
    maxLengthValidator,
    requiredValidator,
    selectAuthorValidator
} from "../../../validators/validators";
import s from './AddPost.module.css'

const minLength = minLengthValidator(2);
const maxTitleLength = maxLengthValidator(50);

const AddPostForm = ({handleSubmit, pristine, submitting, users, addErr}) => {

    return (
        <form className={s.addForm} onSubmit={handleSubmit}>
            <div>
                <div className={s.label}>Post title:</div>
                <div>
                    <Field
                        name="title"
                        component={InputCreator}
                        placeholder="Enter post title..."
                        validate={[requiredValidator, minLength, maxTitleLength]}
                    />
                </div>
            </div>
            <div>
                <div className={s.label}>Post description:</div>
                <div>
                    <Field
                        name="body"
                        component={TextareaCreator}
                        placeholder="Enter post description..."
                        validate={[requiredValidator, minLength]}
                    />
                </div>
            </div>
            <div>
                <div className={s.label}>Author:</div>
                <div>
                    <Field
                        name="userId"
                        component={SelectCreator}
                        placeholder="Choose post author..."
                        validate={[requiredValidator, selectAuthorValidator]}
                    >
                        <option defaultChecked>Chose author</option>
                        {
                            users.map(user => <option key={user.id}
                                                      value={user.id}>{user.name}</option>)
                        }
                    </Field>
                </div>
            </div>
            {addErr && <div className={s.addErr}>{addErr}</div>}
            <button className={s.check} type="submit" disabled={pristine || submitting}>
                check
            </button>
        </form>
    )
};

export default AddPostForm