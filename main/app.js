import './main.css'
import {splashImageComponent} from './splash-image'
AFRAME.registerComponent('splash-image', splashImageComponent)

import './main.css'
import {ButtonComponent} from './logic'
AFRAME.registerComponent('button-target', ButtonComponent)

import {Manager} from './manager'
AFRAME.registerSystem('manager', Manager)