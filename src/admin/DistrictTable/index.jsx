import React from 'react'
import PropTypes from 'prop-types'

import CardTable from '../../common/CardTable'
import InnerTable from '../../common/InnerTable'
import * as BooksHooks from '../../hooks'

const DistrictTable = (props) => {
	return (
		<BooksHooks.context.districts.Consumer>
			{(districts) => {
				const generateTableColumns = () => {
					return [{ className: 'district-name', label: 'district' }]
				}
				const generateTableRows = (districts) => {
					return districts.map((item, i) => {
						return {
							columns: [
								{
									className: 'district-name',
									content: item.data.district_name
								}
							],
							key: item.key,
							view: () => props.viewDistrict(item.key, item.data.district_name),
							delete: () =>
								props.deleteDistrict(item.key, item.data.district_name)
						}
					})
				}
				return (
					<CardTable>
						{districts.length > 0 ? (
							<InnerTable
								columns={generateTableColumns()}
								rows={generateTableRows(districts)}
								hasActions
								canDelete
							/>
						) : (
							<div>waiting for data</div>
						)}

						<style jsx='true' global='true'>{`
							.district-name {
								min-width: 140px;
								max-width: 140px;
							}

							.district-address {
								min-width: 200px;
								max-width: 200px;
							}

							.usas-version {
								min-width: 80px;
								max-width: 80px;
							}

							.usas-user {
								min-width: 160px;
								max-width: 160px;
							}

							.usas-district {
								min-width: 130px;
								max-width: 130px;
							}
						`}</style>
					</CardTable>
				)
			}}
		</BooksHooks.context.districts.Consumer>
	)
}

DistrictTable.propTypes = {
	viewDistrict: PropTypes.func.isRequired,
	deleteDistrict: PropTypes.func.isRequired
}

export default DistrictTable
