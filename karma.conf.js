process.env.BABEL_ENV = 'test'


const testGlob = 'src/**/*.test.js'
const srcGlob = 'src/**/!(*.test|*.stub).js'

module.exports = config => {
  config.set({
    basePath: '',
    frameworks: ['mocha', 'chai'],
    files: [testGlob, srcGlob],
    exclude: ['src/bootstrap.js'],

    reporters: ['progress', 'coverage'],
    coverageReporter: {
      check: {
        global: {
          statements: 11,
          branches: 0,
          functions: 0,
          lines: 11,
        },
      },
      reporters: [
        {type: 'lcov', dir: 'coverage/', subdir: '.'},
        {type: 'json', dir: 'coverage/', subdir: '.'},
        {type: 'text-summary'},
      ],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeServiceWorker'],
    customLaunchers: {
      ChromeServiceWorker: {
        base: 'ChromeCanary',
        flags: [
          '--enable-experimental-web-platform-features',
          '--enable-service-worker-sync'
        ]
      }
    },
    singleRun: true,
    concurrency: Infinity,
  })
}
