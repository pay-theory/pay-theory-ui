# publishing pay-theory-ui

Steps for publishing this library

```bash
npm run prepare-commit
```

-   builds the project, formats the code and runs eslint

```bash
git add . && git commit -m 'preparing to publish'
```

-   add changes and commit code (please make a meaningful message)

```bash
npm run deploy-{environment}
```

-   run unit tests and submit coverage to codacy
-   increment version number and push code to github
-   publish to npm