import React from 'react'
import * as BooksHooks from '../../hooks'
import { formatPhone } from '../../common/accountUtils'

const DistrictOverviewCard = (props) => (
    <BooksHooks.context.district.Consumer>
        {(district) => {
            const maps = `https://maps.google.com/?q=${district.districtData.district_street}, ${district.districtData.district_city}, ${district.districtData.district_state}, ${district.districtData.district_zipcode}`
            return (
                <div
                    className='overview card rounded'
                    data-testid='DistrictOverviewCard'
                >
                    <div className='circle'>
                        <i className='fal fa-school fa-5x' />
                    </div>
                    <div className='proper-name'>
                        {district.districtData.district_name}
                    </div>
                    <div className='note'>{district.districtData.UID}</div>
                    <hr />
                    <div className='link-row'>
                        <a
                            href={`tel:${formatPhone(
                                district.districtData.district_phone
                            )}`}
                        >
                            <i className='fal fa-phone' />
                            {district.districtData.district_phone}
                        </a>
                    </div>
                    <hr />
                    <div className='link-row'>
                        <a
                            href={`mailto:${district.districtData.district_email}`}
                        >
                            <i className='fal fa-envelope' />
                            {district.districtData.district_email}
                        </a>
                    </div>
                    <hr />
                    <div className='link-row'>
                        <a
                            href={maps}
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <i className='fal fa-map-marker-alt' />
                            {district.districtData.district_street}
                        </a>
                    </div>
                    <style jsx='true'>{`
                        .link-row {
                            display: flex;
                            flex-direction: row;
                            justify-content: flex-start;
                            align-items: center;
                            padding: 0 32px;
                            height: 56px;
                            width: 100%;
                        }

                        .link-row a,
                        .link-row a:link,
                        .link-row a:visited,
                        .link-row a:active {
                            color: #09f;
                            text-decoration: none;
                            font-weight: 600;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                        }

                        .link-row a i,
                        .link-row a:link i,
                        .link-row a:visited i,
                        .link-row a:active i {
                            color: #6b7887;
                            margin-right: 12px;
                        }
                        .proper-name {
                            font-size: 24px;
                            font-weight: 600;
                            color: #000000;
                            text-align: center;
                            margin: 8px auto;
                        }

                        .note {
                            font-size: 12px;
                            text-align: center;
                            margin: 8px auto;
                        }
                        .circle {
                            background-color: #e8ecef;
                            border-radius: 50%;
                            width: 180px;
                            height: 180px;
                            display: -webkit-flex;
                            display: flex;
                            -webkit-justify-content: center;
                            justify-content: center;
                            -webkit-align-items: center;
                            align-items: center;
                            margin: 16px auto 8px auto;
                        }

                        .circle i {
                            color: #6b7887;
                        }
                    `}</style>
                </div>
            )
        }}
    </BooksHooks.context.district.Consumer>
)

export default DistrictOverviewCard
