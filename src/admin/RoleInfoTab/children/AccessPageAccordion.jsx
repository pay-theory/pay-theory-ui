// node modules
import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Radio, { NativeRadioControl } from '@material/react-radio'
import AccessSubPage from './AccessSubPage'
const AccessPageAccordion = (props) => {
	const [paged, setPaged] = useState(props.page)
	const [loaded, setLoaded] = useState(false)
	useEffect(() => {
		if (loaded) {
			props.changePermissions(props.index, paged)
		} else if (paged) {
			setTimeout(() => setLoaded(true), 100)
		}
	}, [paged, loaded])

	/* istanbul ignore next */
	const changeSubPage = (index, checked) => {
		const pager = { ...paged }
		if (loaded && pager.subpages[index].checked !== checked) {
			pager.subpages[index].checked = checked
			setPaged(pager)
		}
	}

	/* istanbul ignore next */
	const changeToggle = (enabled) => {
		const pager = { ...paged }
		if (loaded && pager.enabled !== enabled) {
			pager.enabled = enabled
			const changed = props.changePermissions(props.index, paged)
			if (changed) {
				setPaged(pager)
			}
		}
	}

	const changeAccessType = (e) => {
		const pager = { ...paged }
		if (loaded && pager.accessType !== e.target.value) {
			pager.accessType = e.target.value
			setPaged(pager)
		}
	}

	const subpages = props.page.subpages.map((page, index) => {
		return (
			// eslint-disable-next-line react/jsx-key
			<AccessSubPage
				key={`${page.tag}-${index}`}
				tag={page.tag}
				checked={page.checked}
				title={page.title}
				onChange={
					/* istanbul ignore next */ (e) => {
						changeSubPage(index, e.target.checked)
					}
				}
			/>
		)
	})

	// react-testing-library doesn't support details tag
	return (
		<details
			open={props.page.enabled}
			onToggle={
				/* istanbul ignore next */ (e) => {
					e.preventDefault()
					changeToggle(!props.page.enabled)
				}
			}
		>
			<summary data-testid={props.page.tag}>
				<div className='page-access-row'>
					<h4 className='navy'>{props.page.title}</h4>
					<div className='page-row-options'>
						<label className='switch small'>
							<input type='checkbox' checked={props.page.enabled} readOnly />
							<span className='slider small'>
								<span className='on small'>Enabled</span>
								<span className='off small'>Disabled</span>
							</span>
						</label>
						{
							/* istanbul ignore next */ props.page.enabled ? (
								<i className='fas fa-caret-down navy' />
							) : (
								<i className='fas fa-caret-right navy' />
							)
						}
					</div>
				</div>
			</summary>
			<div className='expanded-details' data-testid='expanded-details'>
				<div className='roles-row'>
					<div className='accordion-column'>
						<div className='subsection-title'>
							<h5 className='navy'>Permissions</h5>
						</div>
						<div className='permission-options'>
							<div className='radio-option'>
								<Radio key='perm-access'>
									<NativeRadioControl
										id={`perm-option-${props.page.tag}`}
										name={`perm-option-${props.page.tag}`}
										data-testid={`read-write-${props.page.tag}`}
										value='read-write'
										onChange={changeAccessType}
									/>
								</Radio>
								<label>Read & write</label>
							</div>
							<div className='radio-option'>
								<Radio key='perm-access'>
									<NativeRadioControl
										id={`perm-option-${props.page.tag}`}
										name={`perm-option-${props.page.tag}`}
										data-testid={`read-only-${props.page.tag}`}
										value='read-only'
										onChange={changeAccessType}
									/>
								</Radio>
								<label>Read only</label>
							</div>
						</div>
					</div>
					<div className='accordion-column'>
						<div className='subsection-title'>
							<h5 className='navy'>Sub Pages</h5>
						</div>
						<div className='permission-options'>{subpages}</div>
					</div>
					<div className='accordion-column' />
					<div className='accordion-column' />
				</div>
			</div>
			<style jsx='true'>{`
				:root {
					--mdc-theme-secondary: #0199ed;
				}

				summary::-webkit-details-marker {
					display: none;
				}
				summary {
					border: none;
				}
				summary:focus {
					outline: 0;
				}
				.navy {
					color: #253243;
				}

				.page-access-row {
					display: flex;
					flex-direction: row;
					justify-content: space-between;
					padding: 24px;
				}
				.page-row-options {
					display: inline-block;
				}
				.expanded-details {
					padding-bottom: 24px;
				}
				.roles-row {
					margin: 0px 12px;
					display: flex;
					flex-direction: row;
					justify-content: space-around;
					align-items: flex-start;
				}
				.roles-column {
					margin: 12px;
					display: flex;
					flex-direction: column;
					width: 100%;
				}
				.accordion-column {
					margin: 0px 12px;
					display: flex;
					flex-direction: column;
					width: 100%;
				}
				.subsection-title {
					padding: 0px 24px 0px 24px;
				}
				.accordion-title {
					padding: 0px 12px 0px 12px;
				}
				.helper-entry {
					margin: 4px 24px 16px;
					flex-grow: 1;
					display: none;
				}
				.permission-options {
					margin-top: 0px;
					margin-bottom: 0px;
				}
				.radio-option {
					margin: 0px 24px;
				}
				/* ==== Toggles ==== */

				/* Large Sliders */
				.switch {
					position: relative;
					display: inline-block;
					width: 52px;
					height: 32px;
					margin-right: 90px;
				}

				/* Checkbox Input Hidden */
				.switch input {
					display: none;
				}

				/* Toggle */
				.slider {
					position: absolute;
					cursor: pointer;
					top: 0;
					left: 0;
					right: 0;
					bottom: 0;
					border-radius: 16px;
					background-color: #cad3dd;
					-webkit-transition: 0.4s;
					transition: 0.4s;
				}

				/* Toggle Frame (Focus) */
				.slider:active {
					background-color: #a3b3c4;
				}

				/* Knob (Large) */
				.slider::before {
					position: absolute;
					content: '';
					height: 28px;
					width: 28px;
					left: 2px;
					bottom: 2px;
					border-radius: 50%;
					background-color: white;
					-webkit-transition: 0.4s;
					transition: 0.4s;
				}

				/* Toggle Frame (Green / Enabled) */
				input:checked + .slider {
					background-color: #0bd8aa;
				}

				/* Toggle Frame (Green / Enabled / Focus) */
				input:checked + .slider:active {
					background-color: #a3b3c4;
				}

				/* Knob (Large / Transition) */
				input:checked + .slider::before {
					-webkit-transform: translateX(20px);
					-ms-transform: translateX(20px);
					transform: translateX(20px);
				}

				/* Labels */
				.on {
					visibility: hidden;
					opacity: 0;
					transition: visibility 0s, opacity 0.5s linear;
				}

				/* Label */
				.on,
				.off {
					position: absolute;
					color: #6b7887;
					top: 5px;
					left: 63px;
					font-size: 16px;
					transition: visibility 0s, opacity 0.5s linear;
				}

				/* Label (On) */
				input:checked + .slider .on {
					visibility: visible;
					color: #6b7887;
					opacity: 1;
					transition: visibility 0s, opacity 0.5s linear;
				}

				/* Label (Off) */
				input:checked + .slider .off {
					visibility: hidden;
					opacity: 0;
					transition: visibility 0s, opacity 0.5s linear;
				}

				/* Toggle Frame (Blue / Enabled) */
				input:checked + .slider.blue {
					background-color: #0199ed;
				}

				/* Toggle Frame (Blue / Enabled / Focus) */
				input:checked + .slider.blue:active {
					background-color: #a3b3c4;
				}

				/* Toggle (Small) */
				.switch.small {
					width: 44px;
					height: 20px;
					margin-right: 97px;
				}

				/* Knob (Small) */
				.slider.small::before {
					height: 16px;
					width: 16px;
				}

				/* Knob (Small / Transition) */
				input:checked + .slider.small::before {
					-webkit-transform: translateX(24px);
					-ms-transform: translateX(24px);
					transform: translateX(24px);
				}

				/* Label (Small / Positioning) */
				.on.small,
				.off.small {
					top: -1px;
					left: 56px;
				}
			`}</style>
		</details>
	)
}

AccessPageAccordion.propTypes = {
	page: PropTypes.object.isRequired,
	changePermissions: PropTypes.func.isRequired,
	index: PropTypes.number.isRequired
}

export default AccessPageAccordion
