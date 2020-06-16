import React from 'react'
import PropTypes from 'prop-types'

const FormHead = props => {
	const lock = props.locked ? <i className={`fal fa-lock`} /> : <i />
	return (
		<div id="form-head">
			<div className="cardHead">
				<h3 className="title" data-testid="form-head-text">
					<span>{props.text}</span>
					{lock}
				</h3>
			</div>
			<style jsx="true">{`
				#form-head {
					display: flex;
					flex-direction: column;
					width: 100%;
				}
				.cardHead {
					padding: 24px 24px 14px 24px;
					border-radius: 6px 6px 0px 0px;
					display: flex;
					flex-direction: column;
					align-content: center;
					justify-content: flex-start;
				}
				#form-head .title {
					font-size: 22px;
					font-weight: 600;
					margin: 0;
					color: #101822;
					text-transform: capitalize;
				}
				#form-head .title span {
					margin: 0 0.5em 0 0;
				}
			`}</style>
		</div>
	)
}
FormHead.propTypes = {
	text: PropTypes.string.isRequired,
	locked: PropTypes.bool,
}
export default FormHead
