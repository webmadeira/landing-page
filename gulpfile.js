const paths = {
  inFolder: './src',
  get assets() {
    return `${this.inFolder}/assets`
  },
  get styleFolder() {
    return `${this.assets}/style`
  },
  get styleIndex() {
    return `${this.styleFolder}/screen.css`
  },
  get scriptFolder() {
    return `${this.assets}/js`
  },
  get scriptIndex() {
    return `${this.scriptFolder}/index.js`
  },
  outFolder: 'public',
}

const theme = 'light'
const colorPalettes = require(`./${paths.assets}/config/color-palettes.js`)(theme)
const colorFunction = require(`./${paths.assets}/config/color-fn.js`)(theme)
const fontSizes = require(`./${paths.assets}/config/font-sizes.js`)
const webpackConfig = require('./webpack.config.js')(paths)

const gulp = require('gulp')
const webpack = require('webpack-stream')
const nodemon = require('gulp-nodemon')
const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync')
const rename = require('gulp-rename')
const csslint = require('gulp-csslint')
const postcss = require('gulp-postcss')
const pcImport = require('postcss-import')({ root: paths.styleIndex })
const pcNested = require('postcss-nested')
const pcMap = require('postcss-map')({ maps: [colorPalettes, fontSizes] })
const pcMixins = require('postcss-mixins')
const pcAutoPrefixer = require('autoprefixer')
const pcFunctions = require('postcss-functions')({
  functions: {
    getColor: colorFunction,
  },
})

gulp.task('style', () => {
  const processors = [
    pcImport,
    pcNested,
    pcMap,
    pcMixins,
    pcAutoPrefixer,
    pcFunctions,
  ]

  return gulp
    .src(paths.styleIndex)
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(csslint())
    .pipe(csslint.formatter())
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`./${paths.outFolder}/assets/stylesheets`))
    .pipe(browserSync.stream())
    .pipe(notify('Styles Compiled Successfully!'))
})

gulp.task('views', () =>
  gulp
    .src(`${paths.inFolder}/index.html`)
    .pipe(gulp.dest(`./${paths.outFolder}`))
)

gulp.task('bundle', () =>
  gulp
    .src('src/entry.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(`./${paths.outFolder}/assets/js`))
)

gulp.task('server', () => {
  nodemon({
    script: 'src/server',
    env: { NODE_ENV: 'development' },
  })
})

gulp.task('watch', () => {
  // Static server
  browserSync.init({
    server: {
      baseDir: './public',
    },
  })
  gulp.watch(`${paths.inFolder}/**/*.css`, ['default'])
  gulp.watch(`${paths.inFolder}/**/*.html`, browserSync.reload)
})

gulp.task('default', [
  'server',
  'style',
  'bundle',
  'views',
  'watch',
])
