// Copyright (c) 2022 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import './main.css'
import {LRbuttonComponent} from './logic'
AFRAME.registerComponent('LR-target', LRbuttonComponent) 

import {splashImageComponent} from './splash-image'
AFRAME.registerComponent('splash-image', splashImageComponent)