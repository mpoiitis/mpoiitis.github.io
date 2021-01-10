import React from "react"
import Appbar from 'components/Appbar.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { faDna } from '@fortawesome/free-solid-svg-icons'

class Aggression extends React.Component {

  render(){
    
    const title = "On the Aggression Diffusion Modeling and Minimization in Online Social Networks";
    
    return (
      <React.Fragment>
        <CssBaseline />
        <Appbar title={title} icon={faDna} />
        <main>

        </main>
      </React.Fragment>
    )
  }
}

export default Aggression;