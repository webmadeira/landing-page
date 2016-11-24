const paths = {
  inFolder: './src',
  get assets() {
    return `${this.inFolder}/assets`
  },
  get styleFolder() {
    return `${this.assets}/style`
  },
  get styleIndex() {
    return `${this.styleFolder}/main.pcss`
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
const scsslint = require('gulp-scss-lint')
const filter = require('gulp-filter')
const postcss = require('gulp-postcss')
const pcImport = require('postcss-import')({ root: paths.styleIndex })
const pcNested = require('postcss-nested')
const pcMap = require('postcss-map')({ maps: [colorPalettes, fontSizes] })
const pcMixins = require('postcss-mixins')
const pcAutoPrefixer = require('autoprefixer')
const pcFunctions = require('postcss-functions')({
  functions: {
    'get-color': colorFunction,
  },
})

gulp.task('style', () => {
  const processors = [
    pcImport,
    pcNested,
    pcMap,
    pcMixins,
    pcAutoPrefixer('last 3 versions'),
    pcFunctions,
  ]

  return gulp
    .src(paths.styleIndex)
    .pipe(scsslint())
    .pipe(sourcemaps.init())
    .pipe(postcss(processors))
    .pipe(csslint())
    .pipe(csslint.formatter())
    .pipe(rename('style.css'))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(`./${paths.outFolder}/assets/stylesheets`))
    .pipe(filter(['**/*.css']))
    .pipe(browserSync.stream())
})

gulp.task('views', () =>
  gulp
    .src(`${paths.inFolder}/index.html`)
    .pipe(gulp.dest(`./${paths.outFolder}`))
    .pipe(browserSync.stream())
)

gulp.task('bundle', () =>
  gulp
    .src('src/entry.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(`./${paths.outFolder}/assets/js`))
    .pipe(browserSync.stream())
)

gulp.task('server', () => {
  nodemon({
    script: 'src/server',
    env: { NODE_ENV: 'development' },
    watch: [`${paths.inFolder}/server`],
  })
})

gulp.task('watch', () => {
  // Static server
  browserSync.init({
    proxy: 'localhost:8080',
  })

  gulp.watch([`${paths.assets}/**/*.pcss`], ['style'])
  gulp.watch([`${paths.assets}/config/*.js`], ['bundle', 'style'])
  gulp.watch(`${paths.assets}/**/*.js`, ['bundle'])
  gulp.watch(`${paths.inFolder}/**/*.html`, ['views'])
})

gulp.task('default', [
  'server',
  'style',
  'bundle',
  'views',
  'watch',
])

gulp.task('production', [
  'style',
  'bundle',
  'views',
], () => {
  console.log('All done')
})
