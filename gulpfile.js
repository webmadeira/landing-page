const paths = {
  inFolder: './src',
  get client() {
    return `${this.inFolder}/client`
  },
  get styleFolder() {
    return `${this.client}/style`
  },
  get styleIndex() {
    return `${this.styleFolder}/main.pcss`
  },
  get scriptFolder() {
    return `${this.client}/js`
  },
  get scriptIndex() {
    return `${this.scriptFolder}/index.js`
  },
  outFolder: 'public',
}

const theme = 'light'
const colorPalettes = require(`./${paths.client}/config/color-palettes.js`)(theme)
const colorFunction = require(`./${paths.client}/config/color-fn.js`)(theme)
const fontSettings = require(`./${paths.client}/config/font-settings.js`)
const webpackConfig = require('./webpack.config.js')(paths)

const gulp = require('gulp')
const environments = require('gulp-environments')
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
const pcMap = require('postcss-map')({ maps: [colorPalettes, fontSettings] })
const pcMixins = require('postcss-mixins')
const pcAutoPrefixer = require('autoprefixer')
const pcFunctions = require('postcss-functions')({
  functions: {
    'get-color': colorFunction,
  },
})


// environments
const development = environments.development
const production = environments.production

gulp.task('style', () => {
  const processors = [
    pcImport,
    pcNested,
    pcMixins,
    pcMap,
    pcAutoPrefixer('last 3 versions'),
    pcFunctions,
  ]

  return gulp
    .src(paths.styleIndex)
    .pipe(development(scsslint()))
    .pipe(development(sourcemaps.init()))
    .pipe(postcss(processors))
    .pipe(csslint())
    .pipe(csslint.formatter())
    .pipe(rename('style.css'))
    .pipe(development(sourcemaps.write('.')))
    .pipe(gulp.dest(`./${paths.outFolder}/assets/stylesheets`))
    .pipe(development(filter(['**/*.css'])))
    .pipe(development(browserSync.stream()))
})

gulp.task('views', () =>
  gulp
    .src(`${paths.inFolder}/index.html`)
    .pipe(gulp.dest(`./${paths.outFolder}`))
    .pipe(browserSync.stream())
)

gulp.task('images', () =>
  gulp
    .src(`${paths.client}/img/*`)
    .pipe(gulp.dest(`./${paths.outFolder}/img/`))
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
    proxy: 'localhost:5000',
  })

  gulp.watch([`${paths.client}/**/*.pcss`], ['style'])
  gulp.watch([`${paths.client}/config/*.js`], ['bundle', 'style'])
  gulp.watch(`${paths.client}/**/*.js`, ['bundle'])
  gulp.watch(`${paths.inFolder}/**/*.html`, ['views'])
})

gulp.task('default', [
  'server',
  'style',
  'bundle',
  'views',
  'images',
  'watch',
])

gulp.task('build', [
  'style',
  'bundle',
  'views',
  'images',
], () => {
  console.log('All done')
})
