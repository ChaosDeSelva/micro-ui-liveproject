# Building Micro UI

Building Micro Frontends LiveProject

## Requirements

- node >=14

## Scripts

`npm install` installs the dependencies at root level. This one is a prerequisite for all the other scripts.

### Install nested dependencies

`npm run install:all` installs all the dependencies in all the Micro Frontends and Bootstrap.

### Developing `welcome` Micro Frontend (no Bootstrap)

`npm run dev:welcome` is used to develop the `welcome` Micro Frontend.

It starts a web server and watches changes in the `/welcome` folder.

### Developing `music` Micro Frontend (no Bootstrap)

`npm run dev:music` is used to develop the `music` Micro Frontend.

It starts a web server and watches changes in the `/music` folder.

### Developing Bootstrap (and all the Micro Frontends)

`npm run dev:bootstrap` is used to develop `boostrap`.

It builds `welcome` and `music` Micro Frontends first, then it runs in parallel `server.js` and `bootstrap` build watching its files.

## Credits

1. Welcome image <https://www.teahub.io/photos/full/341-3412846_vintage-record-phone-background.jpg>
