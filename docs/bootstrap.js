/* eslint no-console:0 */
// import {install as offlineInstall} from 'offline-plugin/runtime'
import {onLoad} from './app.js'
import {$on} from './helpers.js'


$on(window, 'load', onLoad)
$on(window, 'hashchange', onLoad)
// if (process.env.NODE_ENV === 'production') {
//   offlineInstall()
// }
