/* eslint-disable camelcase */
// node modules
import React, { useContext } from 'react'
import PropTypes from 'prop-types'

import { ClickToCopyText, FormHead, TabPage, Button } from '../../common'

import * as BooksHooks from '../../hooks'

const PartnerInfoTab = (props) => {
    const partner = useContext(BooksHooks.context.partner);

    return (
        <TabPage id="merchant-info-tab" visibility="tab-visible">
      <div className="tab-content">
        <FormHead text="Merchant Details" />
        <div className="tab-row">
          <div className="tab-column">
            <div className="api-generator">
              <ClickToCopyText
                label="API Key"
                message="API key"
                name="apiKey"
                value={partner.sandbox_api_key}
              />
              <Button
                onClick={() => props.onGenerateApiKey()}
                label="Generate"
                name="generate"
                color="old-primary"
              />
            </div>
          </div>
        </div>
        <div className="tab-row">
          <div className="tab-column">
            <ClickToCopyText
              label="Client ID"
              message="Client ID"
              name="client"
              value={partner.identity}
            />
          </div>
        </div>
      </div>
      <style global="true" jsx="true">
        {`
          .buttoned {
            margin: 16px 24px 4px;
            flex-grow: 1;
          }
          .helper-space {
            margin: 4px 24px 16px;
            -webkit-box-flex: 1;
            -webkit-flex-grow: 1;
            -ms-flex-positive: 1;
            flex-grow: 1;
            height: 16px;
          }
          .validation {
            height: 115px;
          }
          .same-check {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;
          }
          .api-generator {
            display: flex;
            flex-direction: row;
            justify-content: ;
            align-items: baseline;
          }
          .api-generator .text-box {
            flex-grow: 1;
          }
          .api-generator .primary-button {
            flex-shrink: 1;
          }
          .apiKey {
            width: 100%;
            max-width: 500px;
          }
          .client {
            width: 100%;
            max-width: 500px;
          }

          #generate {
            width: 200px;
            margin-left: 25px;
          }
        `}
      </style>
    </TabPage>
    );
};

PartnerInfoTab.propTypes = {
    onGenerateApiKey: PropTypes.func.isRequired
};

export default PartnerInfoTab;
