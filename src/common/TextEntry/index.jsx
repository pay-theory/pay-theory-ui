import React, { useState } from 'react'
import PropTypes from 'prop-types'
import HelperText from './children/HelperText'

const TextEntry = (props) => {
    const [helper, showHelper] = useState(false)
    const hasHelper = !!props.helperText

    const newProps = { ...props }
    delete newProps.isValid
    delete newProps.helperText
    delete newProps.helperProps
    delete newProps.leadingIcon
    delete newProps.trailingIcon

    return (
        <label className={`pt-text-entry ${props.outer? props.outer : ''} ${props.value ? '' : 'empty'}`}>
            <input
                id={props.name}
                data-testid={props.name}
                placeholder=' '
                onFocus={() => showHelper(true)}
                onBlur={() => showHelper(false)}
                value={props.value}
                type={props.type}
                required={props.required}
                disabled={props.disabled}
                autoComplete={props.autoComplete}
                onChange={(e) => {
                    console.log('TextEntry',e.target.value)
                    return props.onChange(e)
                }}
                onClick={props.onClick}
                pattern={props.pattern}
                {...newProps}
            />
            <span>{props.label}</span>
            {hasHelper ? (
                <HelperText show={helper}>{props.helperText}</HelperText>
            ) : (
                <div className='helpless' data-testid="helpless" />
            )}
            <style jsx='true'>{`
                .pt-text-entry {
                    --pay-theory-safari-helper1: rgb(
                        var(--pay-theory-primary-rgb, 22, 15, 61)
                    );
                    --pay-theory-safari-invalid-helper1: rgb(237, 69, 76);
                    --pay-theory-safari-valid-helper1: rgb(39, 203, 124);
                    position: relative;
                    display: inline-block;
                    padding-top: 6px;
                    font-family: var(
                        --pay-theory-font,
                        'Roboto',
                        'Segoe UI',
                        BlinkMacSystemFont,
                        system-ui,
                        -apple-system
                    );
                    font-size: 16px;
                    line-height: 1.5;
                    overflow: hidden;
                }

                /* Input, Textarea */
                .pt-text-entry > input,
                .pt-text-entry > textarea {
                    box-sizing: border-box;
                    margin: 0;
                    border: solid 1px; /* Safari */
                    border-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.6
                    );
                    border-top-color: transparent;
                    border-radius: 4px;
                    padding: 15px 13px 15px;
                    width: 100%;
                    height: inherit;
                    color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.87);
                    background-color: transparent;
                    box-shadow: none; /* Firefox */
                    font-family: inherit;
                    font-size: inherit;
                    line-height: inherit;
                    caret-color: rgb(var(--pay-theory-primary-rgb, 22, 15, 61));
                    transition: border 0.2s, box-shadow 0.2s;
                }

                /* Span */
                .pt-text-entry > input + span,
                .pt-text-entry > textarea + span {
                    position: absolute;
                    top: 0;
                    left: 0;
                    display: flex;
                    border-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.6
                    );
                    width: 100%;
                    max-height: 100%;
                    color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.6);
                    font-size: 75%;
                    line-height: 15px;
                    cursor: text;
                    transition: color 0.2s, font-size 0.2s, line-height 0.2s;
                }

                /* Corners */
                .pt-text-entry > input + span::before,
                .pt-text-entry > input + span::after,
                .pt-text-entry > textarea + span::before,
                .pt-text-entry > textarea + span::after {
                    content: '';
                    display: block;
                    box-sizing: border-box;
                    margin-top: 6px;
                    border-top: solid 1px;
                    border-top-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.6
                    );
                    min-width: 10px;
                    height: 8px;
                    pointer-events: none;
                    box-shadow: inset 0 1px transparent;
                    transition: border-color 0.2s, box-shadow 0.2s;
                }

                .pt-text-entry > input + span::before,
                .pt-text-entry > textarea + span::before {
                    margin-right: 4px;
                    border-left: solid 1px transparent;
                    border-radius: 4px 0;
                }

                .pt-text-entry > input + span::after,
                .pt-text-entry > textarea + span::after {
                    flex-grow: 1;
                    margin-left: 4px;
                    border-right: solid 1px transparent;
                    border-radius: 0 4px;
                }

                /* Hover */
                .pt-text-entry:hover > input,
                .pt-text-entry:hover > textarea {
                    border-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.87
                    );
                    border-top-color: transparent;
                }

                .pt-text-entry:hover > input + span::before,
                .pt-text-entry:hover > textarea + span::before,
                .pt-text-entry:hover > input + span::after,
                .pt-text-entry:hover > textarea + span::after {
                    border-top-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.87
                    );
                }

                .pt-text-entry:hover > input:not(:focus):placeholder-shown,
                .pt-text-entry:hover > textarea:not(:focus):placeholder-shown {
                    border-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.87
                    );
                }

                /* Placeholder-shown */
                .pt-text-entry > input:not(:focus):placeholder-shown,
                .pt-text-entry > textarea:not(:focus):placeholder-shown {
                    border-top-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.6
                    );
                }

                .pt-text-entry > input:not(:focus):placeholder-shown + span,
                .pt-text-entry > textarea:not(:focus):placeholder-shown + span {
                    font-size: inherit;
                    line-height: 68px;
                }

                .pt-text-entry > input:not(:focus):placeholder-shown + span::before,
                .pt-text-entry > textarea:not(:focus):placeholder-shown + span::before,
                .pt-text-entry > input:not(:focus):placeholder-shown + span::after,
                .pt-text-entry > textarea:not(:focus):placeholder-shown + span::after {
                    border-top-color: transparent;
                }

                /* Invalid */
                .pt-text-entry:not(.empty) > input:invalid:not(:focus),
                .pt-text-entry:not(.empty) > textarea:invalid:not(:focus) {
                    border-color: rgb(var(--pay-theory-primary-rgb, 237, 69, 76));
                    border-top-color: transparent;
                    box-shadow: inset 1px 0 var(--pay-theory-safari-invalid-helper1),
                        inset -1px 0 var(--pay-theory-safari-invalid-helper1),
                        inset 0 -1px var(--pay-theory-safari-invalid-helper1);
                    outline: none;
                }

                .pt-text-entry:not(.empty) > input:invalid:not(:focus) + span,
                .pt-text-entry:not(.empty) > textarea:invalid:not(:focus) + span {
                    color: rgb(var(--pay-theory-primary-rgb, 237, 69, 76));
                }

                .pt-text-entry:not(.empty) > input:invalid:not(:focus) + span::before,
                .pt-text-entry:not(.empty) > input:invalid:not(:focus) + span::after,
                .pt-text-entry:not(.empty) > textarea:invalid:not(:focus) + span::before,
                .pt-text-entry:not(.empty) > textarea:invalid:not(:focus) + span::after {
                    border-top-color: var(--pay-theory-safari-invalid-helper1) !important;
                    box-shadow: inset 0 1px var(--pay-theory-safari-invalid-helper1);
                }

                /* Invalid */
                .pt-text-entry:not(.empty) > input:invalid:not(:focus),
                .pt-text-entry:not(.empty) > textarea:invalid:not(:focus) {
                    border-color: rgb(
                        var(--pay-theory-primary-rgb, 237, 69, 76)
                    );
                    border-top-color: transparent;
                    box-shadow: inset 1px 0
                            var(--pay-theory-safari-invalid-helper1),
                        inset -1px 0 var(--pay-theory-safari-invalid-helper1),
                        inset 0 -1px var(--pay-theory-safari-invalid-helper1);
                    outline: none;
                }

                .pt-text-entry:not(.empty) > input:invalid:not(:focus) + span,
                .pt-text-entry:not(.empty) > textarea:invalid:not(:focus) + span {
                    color: rgb(var(--pay-theory-primary-rgb, 237, 69, 76));
                }

                .pt-text-entry:not(.empty) > input:invalid:not(:focus) + span::before,
                .pt-text-entry:not(.empty) > input:invalid:not(:focus) + span::after,
                .pt-text-entry:not(.empty) > textarea:invalid:not(:focus) + span::before,
                .pt-text-entry:not(.empty) > textarea:invalid:not(:focus) + span::after {
                    border-top-color: var(
                        --pay-theory-safari-invalid-helper1
                    ) !important;
                    box-shadow: inset 0 1px
                        var(--pay-theory-safari-invalid-helper1);
                }

                /* Focus */
                .pt-text-entry > input:focus,
                .pt-text-entry > textarea:focus {
                    border-color: rgb(
                        var(--pay-theory-primary-rgb, 22, 15, 61)
                    );
                    border-top-color: transparent;
                    box-shadow: inset 1px 0 var(--pay-theory-safari-helper1),
                        inset -1px 0 var(--pay-theory-safari-helper1),
                        inset 0 -1px var(--pay-theory-safari-helper1);
                    outline: none;
                }

                .pt-text-entry > input:focus + span,
                .pt-text-entry > textarea:focus + span {
                    color: rgb(var(--pay-theory-primary-rgb, 22, 15, 61));
                }

                .pt-text-entry > input:focus + span::before,
                .pt-text-entry > input:focus + span::after,
                .pt-text-entry > textarea:focus + span::before,
                .pt-text-entry > textarea:focus + span::after {
                    border-top-color: var(
                        --pay-theory-safari-helper1
                    ) !important;
                    box-shadow: inset 0 1px var(--pay-theory-safari-helper1);
                }

                /* Disabled */
                .pt-text-entry > input:disabled,
                .pt-text-entry > input:disabled + span,
                .pt-text-entry > textarea:disabled,
                .pt-text-entry > textarea:disabled + span {
                    border-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.38
                    ) !important;
                    border-top-color: transparent !important;
                    color: rgba(var(--pay-theory-onsurface-rgb, 0, 0, 0), 0.38);
                    pointer-events: none;
                }

                .pt-text-entry > input:disabled + span::before,
                .pt-text-entry > input:disabled + span::after,
                .pt-text-entry > textarea:disabled + span::before,
                .pt-text-entry > textarea:disabled + span::after {
                    border-top-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.38
                    ) !important;
                }

                .pt-text-entry > input:disabled:placeholder-shown,
                .pt-text-entry > input:disabled:placeholder-shown + span,
                .pt-text-entry > textarea:disabled:placeholder-shown,
                .pt-text-entry > textarea:disabled:placeholder-shown + span {
                    border-top-color: rgba(
                        var(--pay-theory-onsurface-rgb, 0, 0, 0),
                        0.38
                    ) !important;
                }

                .pt-text-entry > input:disabled:placeholder-shown + span::before,
                .pt-text-entry > input:disabled:placeholder-shown + span::after,
                .pt-text-entry > textarea:disabled:placeholder-shown + span::before,
                .pt-text-entry > textarea:disabled:placeholder-shown + span::after {
                    border-top-color: transparent !important;
                }

                /* Faster transition in Safari for less noticable fractional font-size issue */
                @media not all and (min-resolution: 0.001dpcm) {
                    @supports (-webkit-appearance: none) {
                        .pt-text-entry > input,
                        .pt-text-entry > input + span,
                        .pt-text-entry > textarea,
                        .pt-text-entry > textarea + span,
                        .pt-text-entry > input + span::before,
                        .pt-text-entry > input + span::after,
                        .pt-text-entry > textarea + span::before,
                        .pt-text-entry > textarea + span::after {
                            transition-duration: 0.1s;
                        }
                    }
                }
            `}</style>
        </label>
    )
}

TextEntry.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    innerclass: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.any,
    leadingIcon: PropTypes.any,
    trailingIcon: PropTypes.any,
    type: PropTypes.string,
    pattern: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
    autoComplete: PropTypes.string,
    helperText: PropTypes.any,
    isValid: PropTypes.bool,
    onClick: PropTypes.func,
    onBlur: PropTypes.func,
    onFocus: PropTypes.func
}

TextEntry.defaultProps = {
    value: '',
    type: 'text',
    required: false,
    disabled: false,
    autoComplete: 'off'
}

export default TextEntry
