# TimedLogout

A React Hook that is used on our portal pages to timeout a page and log a user who has been away for a set amount of time.

## Arguments

### (minutes, logout) => {}

-   **minutes**: Int

    -   This is how many minutes you want to allow to pass before logging the user out

-   **logout**: Func

    -   This is the function that will run when we want to log the user out.
