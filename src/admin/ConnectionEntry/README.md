# ConnectionEntry

A UI element for displaying a form for establishing a new connection, or editing 
an existing one.

## Accessible Sub-Components

### Merchant - for merchant account credential management

#### Props

* connection: PropTypes.object.isRequired
  * ```{merchant_user_name:'',merchant_password:'',merchant_id:'',merchant_processor:''}```
* postMerchant: PropTypes.func.isRequired
  * ```(event) => {}```
* changeConnectionData: PropTypes.func.isRequired
  * ```(event) => {}```
* statusMessage: PropTypes.element
  * JSX content to display in response to a postMerchant or changeConnectionData function call
 

### Usas - for USAS account credential management

#### Props

* connection: PropTypes.object.isRequired
  * ```{usas_user_name:'',usas_password:'',usas_version:'',usas_district:'',usas_endpoint:''}```
* postUSAS: PropTypes.func.isRequired
  * ```(event) => {}```
* changeConnectionData: PropTypes.func.isRequired
  * ```(event) => {}```
* statusMessage: PropTypes.element
  * JSX content to display in response to a postUSAS or changeConnectionData function call