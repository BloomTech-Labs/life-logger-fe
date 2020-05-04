import React from 'react';
import { Container } from '../styles';
import inProgress from '../../../assets/img/development.png'


function Settings() {

  return (
    <Container> 
      <div style={{marginTop: "22vh"}}>
        <h2>
          in progress...
        </h2>
        <br/>
        <br/>
        - Here you'll be able to change your password and username, <br/>
        - Export your personal data <br/>
        - Etc
      </div>
      <img 
        src={inProgress}
        alt=''
        style={{width: '500px', height: 'auto', margin: '20px'}}/>
    </Container>
  );
}

export default Settings;
