import React, {Component} from 'react'
import WizardActor from './game/components/actor'
import GitHubForkRibbon from 'react-github-fork-ribbon'
import './App.css'
import Webcam from 'react-webcam'

const webcamImageHeight = 600
const webcamImageWidth = 600
const webcamHeight = 320
const webcamWidth = 400

class App extends Component {
    render() {
        /*  NOTE: remove GestIA-Webdemo url prefix for prod  */
        return [
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
        ]
    }
}

export default App
