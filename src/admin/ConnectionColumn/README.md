# ConnectionColumn

A UI element for displaying a client account external connection.

## Hooks

-   None

## Props

-   title: PropTypes.string

    -   text to display as title of the connection

-   connectionType: PropTypes.string

    -   the type of connection, must be one of:

        -   usas_ohio
        -   merchant_account (not yet implemented completely)

-   description: PropTypes.string

    -   text to display as a description of the connection

-   logo: PropTypes.string

    -   a class name referencing the logo to use, must be one of:

        -   usas-oh
        -   pay-theory

-   connected: PropTypes.bool

    -   boolean indicating if connection has been set

-   comingSoon: PropTypes.bool

    -   boolean indicating if connection is not yet available

-   callback: PropTypes.func

    -   `(connection) => {}`

        -   connection object consists of at least:

            -   `{ connection_type: props.connectionType }`
