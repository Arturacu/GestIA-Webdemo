import React, {Component} from 'react'
import Sprite from "./game/components/sprite"

class App extends Component {
    render() {
        return (
            <div className="zone-container">
            <Sprite image={process.env.PUBLIC_URL + "/sprites/wizard/Idle.png"} data= {{ x: 0, y:0, w:231, h:190, }} />
            </div>
        )
    }
}

export default App
