**description**

super boilerplate react-flux app with `hot-loading` enabled in dev. Uses:
  * `babel` for `es2015`, `stage-1` syntax (but `es5` works just fine).
  * `weback`
  * `karma` + `mocha` + `chai` for testing
  * `fluxxed_up` 
  * `stylus` for css preprocessing 

have fun!

**setup**

`npm install`

**startup**

`npm run dev`

**see it!**

`http://localhost:3001/#/`

**Styles**
The stylus pre-processor comes included, with the webpack loaders.
global.styl is already imported in the build, make whatever changes you want there.

**Testing**
Karma using mocha, and the fluxxed_up TestRig are included. Check examples for
how to write tests.

`npm run test-watch`

**es6 or es5**
There are examples for both styles, feel free to try either! 
