import React from 'react'
import TrapyzLogoV1 from './assets/logo-white.svg'
import TrapyzLogoV2 from './assets/logo-brand.svg'

class App extends React.Component {
    render() {
        return (
             <div>
              <TrapyzLogoV1 style={{backgroundColor: "#FF6347"}} width={300}/>
              <TrapyzLogoV2 width={300}/>   
              <h1>Hello World</h1>
             </div>
        )
    }
}

export default App