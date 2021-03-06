import React, {Component} from 'react'
import WizardActor from './components/wizard-actor'
import GitHubForkRibbon from 'react-github-fork-ribbon'
import './App.css'
import Webcam from 'react-webcam'
import InstructionsBox from './components/instructions-box'

const webcamImageHeight = 600
const webcamImageWidth = 600
const webcamHeight = 320
const webcamWidth = 400

class App extends Component {
    render() {
        return [
            <div class={'header'}>
                <h1>GestIA Webdemo</h1>
            </div>,
            <GitHubForkRibbon
                position="right"
                color="black"
                href="//github.com/burned301/GestIA"
                target="_blank">
                Fork GestIA on GitHub
            </GitHubForkRibbon>,
            <div className="zone-container">
                <Webcam
                    audio={false}
                    height={webcamImageHeight}
                    screenshotFormat="image/jpeg"
                    width={webcamImageWidth}
                    style={{
                        display: 'inline-block',
                        height: `${webcamHeight}px`,
                        width: `${webcamWidth}px`,
                        borderRadius: '5px',
                        marginRight: '10px',
                        marginLeft: '10px',
                        boxShadow: 'inset -2px -1px 30px #808080',
                    }}
                />
                <WizardActor />
            </div>,
            <div className="instructions">
                <InstructionsBox />
            </div>,
        ]
    }
}

export default App
