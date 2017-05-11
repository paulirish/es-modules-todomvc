

import {$on} from './helpers.js'
import {updateTodo} from './todo.js'
// import toggleGraph from './graph/index.js'

export function onLoad() { // eslint-disable-line import/prefer-default-export
  updateTodo()
  // const toggleGraphButton = document.querySelector('.toggle-graph')
  // $on(
  //   toggleGraphButton,
  //   'click',
  //   () => {
  //     const active = toggleGraph()
  //     if (active) {
  //       toggleGraphButton.classList.add('active')
  //     } else {
  //       toggleGraphButton.classList.remove('active')
  //     }
  //   },
  // )
}

console.log('sup')