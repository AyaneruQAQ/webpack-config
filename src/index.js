import _ from 'lodash'
import './style.css'
import Data from './data.xml'

function component(){
    let element = document.createElement('div')
    element.innerHTML = _.join(['hello噢噢','webpack'],' ')
    element.classList.add('hello')

    console.log(Data);
    

    return element
}

document.body.appendChild(component());