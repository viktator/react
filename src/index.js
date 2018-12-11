import React from 'react'
import {render} from 'react-dom'
import {articles} from './fixtures.js'
import Root from "./components/Root.js"




render(<Root articles = {articles}/>, document.getElementById('container'))