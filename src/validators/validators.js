export const requiredValidator = value => value ? undefined : `This field is required`;

export const maxLengthValidator = maxLength => value => value && value.length > maxLength ?
    `The maximum length must not exceed ${value} characters` : undefined;

export const minLengthValidator = minLength => value => value && value.length < minLength ?
    `The minimum length is ${value} characters` : undefined;

export const selectAuthorValidator = value => isNaN(Number(value)) ? `Choose author` : undefined;


