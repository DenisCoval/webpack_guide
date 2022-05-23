import _ from 'lodash'
// import printMe from './print'
import './style.css'

function component() {
    const element = document.createElement('div')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')
    // element.onclick = printMe.bind(null, 'Hello webpack!')

    return element
}

document.body.appendChild(component())

//        Dynamic import
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
