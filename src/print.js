// import _ from 'lodash'

// import tresF from './tres.js'
// console.log(tresF)

// import printMe from './teste.js'
// console.log(printMe)

// async function getComponent() {
//     const element = document.createElement('div')
//     const { default: _ } = await import('lodash')

//     element.innerHTML = _.join(['Hello', 'webpack'], ' ')
//     element.classList.add('hello')
//     return element
// }

// getComponent().then(component => {
//     document.body.appendChild(component)
// })

// console.log(_.join(['Another', 'module', 'loaded!'], ' '))

// async function getComponent2() {
//     const element = document.createElement('div')
//     const { default: _ } = await import('./tres.js')

//     return element
// }

// getComponent2().then(component => {
//     document.body.appendChild(component)
// })

export default function printMe(text) {
    console.log(text)
}
