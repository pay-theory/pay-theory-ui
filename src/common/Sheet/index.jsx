import React from 'react'
import PropTypes from 'prop-types'
import IconButton from '../IconButton'

const closeSheet = (identifier) => {
    const mf =
        typeof identifier === 'string'
            ? `${identifier}-sheet-form`
            : 'sheet-form'
    const m = typeof identifier === 'string' ? `${identifier}-sheet` : 'sheet'

    const container = document.getElementById('container')
    container.classList.remove('blurred')

    const modalForm = document.getElementById(mf)
    modalForm.classList.add('off')
    modalForm.classList.remove('on')

    const sheet = document.getElementById(m)
    sheet.classList.add('sheet-off')
    sheet.classList.remove('sheet-on')
}

const openSheet = (identifier) => {
    const mf =
        typeof identifier === 'string'
            ? `${identifier}-sheet-form`
            : 'sheet-form'
    const m = typeof identifier === 'string' ? `${identifier}-sheet` : 'sheet'

    const container = document.getElementById('container')
    container.classList.add('blurred')

    const sheet = document.getElementById(m)
    sheet.classList.remove('sheet-off')
    sheet.classList.add('sheet-on')

    const modalForm = document.getElementById(mf)
    modalForm.classList.remove('off')
    modalForm.classList.add('on')
}

export { closeSheet, openSheet }

const ModalContent = ({
    identifier,
    children,
    closeAction,
    left,
    top,
    bottom,
    alternateClose,
    header,
    zPosition
}) => {
    const sheetForm = identifier ? `${identifier}-sheet-form` : 'sheet-form'
    const sheet = identifier ? `${identifier}-sheet` : 'sheet'

    const position = left ? 'left' : top ? 'top' : bottom ? 'bottom' : 'right'
    const finalZPosition = zPosition ? 99 + zPosition : 99

    const close = () => {
        if(alternateClose) {
            alternateClose()
        } else {
            closeSheet(identifier)
            if (closeAction) {
                closeAction()
            }
        }   
    }

    return (
        <div className='hide-sheet'>
            <div
                className='sheet-off'
                data-testid='sheet-close'
                id={sheet}
                onClick={close}
            />
            <div
                className={`sheet-form off ${position}`}
                data-testid='sheet-form'
                id={sheetForm}
            >
                <div className={`sheet-content ${position}`} id='sheet-content'>
                    <div className='sheet-header'>
                        {left && header ? <h3>{header}</h3> : null}
                        <IconButton
                            icon={left ? 'times' : 'arrow-left'}
                            onClick={close}
                        />
                        {!left && header ? <h3>{header}</h3> : null}
                    </div>
                    <div className='sheet-body'>{children}</div>
                </div>
            </div>
            <style global='true' jsx='true'>
                {`
                    #${sheetForm} .sheet-content {
                        display: flex;
                        flex-direction: column;
                    }

                    #${sheetForm} .sheet-content.left,
                    #${sheetForm} .sheet-content.right {
                        width: 484px;
                    }

                    #${sheetForm} .sheet-content.top,
                    #${sheetForm} .sheet-content.bottom {
                        height: 484px;
                    }

                    #${sheetForm} .sheet-content .sheet-header {
                        width: 100%;
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                        padding: 4px;
                        height: 64px;
                    }

                    #${sheetForm} .sheet-content .sheet-header h3 {
                        margin: 0px 16px;
                    }

                    #${sheetForm} .sheet-content .sheet-header i {
                        cursor: pointer;
                        padding: 10px;
                    }
                    #${sheetForm} .sheet-content .sheet-body {
                        margin: 0px 16px 16px;
                        overflow-y: auto;
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                    #${sheetForm} .sheet-content .sheet-body::-webkit-scrollbar {
                        display: none;
                    }
                    #${sheetForm} .sheet-wrapper {
                        height: 100%;
                        width: 100%;
                    }
                    #${sheet}.sheet-on {
                        display: flex;
                        flex-direction: column;
                        visibility: visible;
                        position: fixed;
                        top: 0;
                        left: 0;
                        height: 100%;
                        width: 100%;
                        background: var(--black-opaque-32);
                        backdrop-filter: opacity(50%) blur(2px);
                        z-index: ${finalZPosition} ;
                    }
                    #${sheet}.sheet-off {
                        visibility: hidden;
                    }
                    #${sheet}.sheet-gone {
                        display: none;
                    }

                    /* Style for sheet on right */
                    #${sheetForm}.sheet-form.on.right {
                        top: 0;
                        right: 0;
                        height: 100%;
                        box-shadow: 0px 0px 16px var(--grey);
                    }

                    #${sheetForm}.sheet-form.off.right {
                        top: 0;
                        right: -500px;
                        height: 100%;
                        box-shadow: 0px 0px 0px var(--grey);
                    }

                    /* Style for sheet on left */
                    #${sheetForm}.sheet-form.on.left {
                        top: 0;
                        left: 0;
                        height: 100%;
                        box-shadow: 0px 0px 16px var(--grey);
                    }

                    #${sheetForm}.sheet-form.off.left {
                        top: 0;
                        left: -500px;
                        height: 100%;
                        box-shadow: 0px 0px 0px var(--grey);
                    }

                    /* Style for sheet on top */
                    #${sheetForm}.sheet-form.on.top {
                        top: 0;
                        right: 0;
                        height: 484px;
                        width: 100%;
                        box-shadow: 0px 0px 16px var(--grey);
                    }

                    #${sheetForm}.sheet-form.off.top {
                        top: -500px;
                        right: 0;
                        height: 484px;
                        width: 100%;
                        box-shadow: 0px 0px 0px var(--grey);
                    }

                    /* Style for sheet on top */
                    #${sheetForm}.sheet-form.on.bottom {
                        bottom: 0;
                        right: 0;
                        height: 484px;
                        width: 100%;
                        box-shadow: 0px 0px 16px var(--grey);
                    }

                    #${sheetForm}.sheet-form.off.bottom {
                        bottom: -500px;
                        right: 0;
                        height: 484px;
                        width: 100%;
                        box-shadow: 0px 0px 0px var(--grey);
                    }

                    #${sheetForm} .sheet-content form {
                        display: flex;
                        flex-direction: column;
                        align-content: center;
                    }

                    #${sheetForm}.sheet-form {
                        display: flex;
                        flex-direction: column;
                        visibility: visible;
                        position: fixed;
                        background-color: var(--grey-3);
                        overflow-y: auto;
                        overflow-x: hidden;
                        -webkit-transition: box-shadow 0.3s
                            cubic-bezier(0.4, 0, 0.2, 1);
                        transition: all 0.28s cubic-bezier(0.4, 0, 0.2, 1);
                        z-index: ${finalZPosition};
                    }

                    #${sheetForm}.sheet-form-gone {
                        display: none;
                    }

                    #${sheetForm} .hide-sheet {
                        height: 0;
                        overflow: hidden;
                    }
                `}
            </style>
        </div>
    )
}

ModalContent.propTypes = {
    closeAction: PropTypes.func,
    identifier: PropTypes.string.isRequired,
    top: PropTypes.bool,
    bottom: PropTypes.bool,
    left: PropTypes.bool,
    zPosition: PropTypes.number
}

export default ModalContent
