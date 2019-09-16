import React from "react";
import TrapyzLogoV1 from "./assets/logo-white.svg";
import TrapyzLogoV2 from "./assets/logo-brand.svg";

class App extends React.Component {
  render() {
    return (
      <div>
        <TrapyzLogoV1
          style={{ backgroundColor: "tomato", width: 60, height: 40 }}
        />
        <TrapyzLogoV2 style={{ width: 60, height: 40 }} />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
