import React from 'react'

const Checkbox = (props) => {
    const input = { 'data-testid': props.id, type: 'checkbox', ...props }
    return (
        <div className='checkbox'>
            <input {...input} />
            <label htmlFor={props.id}>{props.label}</label>
            <style jsx='true'>{`
                .checkbox {
                    position: relative;
                }

                .checkbox label {
                    display: block;
                    position: relative;
                    margin-bottom: 8px;
                    padding: 0 28px;
                    font-weight: 400;
                    font-size: 16px;
                    color: #6b7887;
                    line-height: 1;
                    cursor: pointer;
                    user-select: none;
                }

                /* Create the Checkbox Frame with a (:before) */

                .checkbox label::before {
                    display: block;
                    position: absolute;
                    box-sizing: border-box;
                    top: 0;
                    left: 0;
                    width: 18px;
                    height: 18px;
                    border: 1px solid transparent;
                    border-radius: 2px;
                    background-color: #e8ecef;
                    transition: background-color 0.1s, 0.2s ease-out;
                    content: '';
                }

                /* Visually Hide Input */

                input[type='checkbox'] {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 0;
                    height: 0;
                    opacity: 0;
                    pointer-events: none;
                }

                /* Hover State */

                input[type='checkbox']:hover + label::before {
                    background-color: #cad3dd;
                }

                /* Focus State */

                input[type='checkbox']:focus + label::before {
                    outline: 0;
                }

                /* 'Checked' Blue Frame (:before) */

                input[type='checkbox']:checked + label::before {
                    background-color: #0199ed;
                }

                /* 'Checked' White Checkmark Icon (:after) */

                input[type='checkbox']:checked + label::after {
                    display: block;
                    position: absolute;
                    color: white;
                    top: 25%;
                    left: calc(6px / 2);
                    font-family: 'Font Awesome 5 Pro Light',
                        'Font Awesome 5 Pro', 'Font Awesome 5 Pro Solid';
                    content: '\f00c';
                    font-size: 12px;
                }

                /* 'Disabled' Checkbox Label Text */

                input[type='checkbox']:disabled + label {
                    color: #cad3dd;
                    cursor: default;
                }

                /* 'Disabled' [but 'Checked'] Frame (:before) */

                input[type='checkbox']:disabled + label::before {
                    background-color: #f3f6f7;
                }

                /* 'Disabled' [but 'Checked'] Checkmark (:after) */

                input[type='checkbox']:disabled + label::after {
                    color: #cad3dd;
                }
            `}</style>
        </div>
    )
}

export default Checkbox
