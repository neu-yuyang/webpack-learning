import _ from 'lodash'
import './assets/style.css'
import Icon from './assets/naruto.jfif'
function component(){
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('red')
    let Image = document.createElement('img')
    Image.src = Icon
    element.appendChild(Image)
    return element
}
document.body.appendChild(component())