// node modules
import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import Button from '@material/react-button'
import PropTypes from 'prop-types'

const ReceiptUploader = (props) => {
    const [statusMessage, setStatusMessage] = useState(<div />)
    const onDrop = (acceptedFiles, rejectedFiles) => {
        setStatusMessage(<div data-testid='files-dropped' />)
        props.callback(acceptedFiles, rejectedFiles)
    }
    return (
        <div
            id='upload-dropzone'
            data-testid='upload-dropzone'
            className={`${props.visible ? 'visible' : 'invisible'}`}
        >
            <Dropzone
                onDrop={(acceptedFiles, rejectedFiles) => {
                    return onDrop(acceptedFiles, rejectedFiles)
                }}
                accept={[
                    'application/vnd.ms-excel',
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                    ' text/csv'
                ]}
            >
                {({ getRootProps, getInputProps, isDragActive }) => {
                    return (
                        <div
                            {...getRootProps()}
                            className={`dropzone ${
                                /* istanbul ignore next */
                                isDragActive ? 'dropzone--isActive' : ''
                            }`}
                        >
                            <input
                                {...getInputProps({
                                    'data-testid': 'dropzone-input'
                                })}
                            />
                            <i className='fas fa-cloud-upload-alt fa-4x' />
                            <div className='title'>
                                Drag and drop files here
                            </div>
                            <div>Or</div>
                            <Button raised className='primary-button'>
                                Browse Files
                            </Button>
                        </div>
                    )
                }}
            </Dropzone>
            {statusMessage}
            <style jsx='true' global='true'>{`
                #upload-dropzone {
                    border: dashed #999999;
                    flex-grow: 100;
                    height: 200px;
                    height: auto;
                    width: 100%;
                    margin-top: 12px;
                }

                .visible {
                    border: dashed #999999;
                    flex-grow: 100;
                    height: 200px;
                    width: 100%;
                    margin-top: 12px;
                }

                .invisible {
                    display: none;
                }

                .dropzone {
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-evenly;
                    align-items: center;
                    margin: 24px 16px;
                }

                .dropzone i {
                    color: #66cccc;
                }
            `}</style>
        </div>
    )
}

ReceiptUploader.propTypes = {
    callback: PropTypes.func.isRequired,
    visible: PropTypes.bool
}

export default ReceiptUploader
