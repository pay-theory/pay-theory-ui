import React from 'react'
import PropTypes from 'prop-types'

const ConnectionColumn = props => {
	const actionClass = props.connected ? 'emph-button' : 'neutral-button'
	const actionText = props.connected ? 'Connected' : 'Setup'
	const popModal = () => {
		if (props.connected) {
			props.callback(props.connection)
		} else {
			props.callback({ connection_type: props.connectionType })
		}
	}
	const comingSoon = props.comingSoon ? (
		<span className="coming-soon">Coming Soon!</span>
	) : (
		''
	)
	return (
		<div className="column-card">
			<div className="column-content">
				<div className="card-type">
					<div className={`card-logo ${props.logo}`} />
				</div>
				<h3 className="column-card-subtitle">
					{props.title} {comingSoon}
				</h3>
				<p className="space-med">{props.description}</p>
				<div className="row">
					<div className="col-6">
						<button
							data-testid={`connection-button-${
								props.connectionType
							}`}
							className={actionClass}
							onClick={popModal}
							disabled={props.comingSoon}
						>
							<span>{actionText}</span>
						</button>
					</div>
				</div>
			</div>
			<style jsx="true">{`
				h3 {
					font-size: 22px;
					font-weight: 600;
					margin: 0;
					color: #101822;
				}
				.column-content {
					margin: 24px;
					border-radius: 5px;
					display: flex;
					flex-direction: column;
					align-content: center;
					justify-content: flex-start;
				}

				.column-card {
					background-color: #fff;
					width: 465px;
					height: auto;
					border-radius: 6px;
					margin: 12px;
					box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
					display: flex;
					flex-direction: column;
				}

				.column-card-subtitle {
					margin-bottom: 2px;
				}

				.space-med {
					padding-bottom: 16px;
				}
				.row {
					position: relative;
					width: 100%;
				}

				.row:last-child {
					margin-top: 15px;
				}

				.row [class^='col'] {
					float: left;
					margin-top: 0%;
					margin-bottom: 15px;
					margin-left: 2%;
					margin-right: 2%;
					min-height: 0.125rem;
				}

				.row::after {
					content: '';
					display: table;
					clear: both;
				}
				.col-6 {
					width: 96%;
				}

				.card-type {
					width: 100%;
					display: flex;
					flex-direction: column;
					margin-top: 0;
					margin-bottom: 15px;
				}

				.card-logo {
					background-repeat: no-repeat;
					background-size: 100%;
					background-position: 50%;
					height: 142px;
					width: 142px;
					align-self: center;
				}
				.emph-button {
					height: 48px;
					padding: 14px 16px;
					background-color: #0bd8aa;
					width: 100%;
				}

				.neutral-button {
					height: 48px;
					padding: 14px 16px;
					background-color: #fff;
					color: #101822;
					border: 1px solid #e8ecef;
					width: 100%;
				}
				.clever {
					background-image: url(https://storage.googleapis.com/pt-assets/clever-logo.png);
				}
				.pay-theory {
					background-image: url('/paytheory-logo-dark.svg');
				}
				.usas-oh {
					background-image: url('/SSDT-logo.svg');
				}

				.column-card-subtitle span {
					margin-left: 16px;
				}

				button {
					font-size: 16px;
					line-height: 20px;
					font-weight: 600;
					text-transform: none;
					letter-spacing: 0;
					height: 48px;
					border: 0;
					outline: 0;
					border-radius: 4px;
					background-color: #0199ed;
					padding: 14px 16px;
					color: white;
					position: relative;
					overflow: hidden;
				}
			`}</style>
		</div>
	)
}

ConnectionColumn.propTypes = {
	title: PropTypes.string,
	connectionType: PropTypes.string,
	description: PropTypes.string,
	logo: PropTypes.string,
	connected: PropTypes.bool,
	comingSoon: PropTypes.bool,
	callback: PropTypes.func,
}

export default ConnectionColumn
