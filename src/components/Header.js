import React from 'react';
import Paper from '@material-ui/core/Paper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDna, faCode, faPhone } from '@fortawesome/free-solid-svg-icons'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';



export default function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <Paper square>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="primary"
          aria-label="icon label tab header"
        >
          <Tab icon={<FontAwesomeIcon icon={faUser} />} label="Home" component={Link} to="/" />
          <Tab icon={<FontAwesomeIcon icon={faCode} />} label="Experience & Skills" component={Link} to="/experience" />
          <Tab icon={<FontAwesomeIcon icon={faDna} />} label="Research" component={Link} to="/research" />
          <Tab icon={<FontAwesomeIcon icon={faPhone} />} label="Contact" component={Link} to="/contact" />
        </Tabs>
      </Paper>
    </React.Fragment>
  );
}
