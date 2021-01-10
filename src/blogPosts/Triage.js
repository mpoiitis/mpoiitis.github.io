import React from "react"
import Appbar from 'components/Appbar.js';
import CssBaseline from '@material-ui/core/CssBaseline';
import { faDna } from '@fortawesome/free-solid-svg-icons'

class Triage extends React.Component {

  render(){
    
    const title = "TRIAGE: Temporal Twitter attribute graph patterns";
    
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

export default Triage;