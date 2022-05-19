// import _ from 'lodash'
// import printMe from './print.js'
import './style.css'

// function component() {
async function getComponent() {
    const element = document.createElement('div')
    const { default: _ } = await import('lodash')

    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')
    return element
}

// document.body.appendChild(component())
getComponent().then(component => {
    document.body.appendChild(component)
})
