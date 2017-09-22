import React, { Component } from 'react';
import { Header } from 'semantic-ui-react';
import axios from 'axios';

class Home extends Component {
state = { apps: [] }

componentDidMount() {
   axios.get('/api/apps')
     .then( res => this.setState({ apps: res.data }) )
   }

  render() {
    return (
      <Header as='h1' textAlign='center'>App Store</Header>
      { this.state.apps.map( app =>
              <Card key={app.id}>
                <h2>{app.name}</h2>
                <Image src={app.logo} />
                <h3>{app.category}</h3>
                <h3>{app.version}</h3>
              </Card>
            )
          }
        </Cards>
      );
    }
}

export default Home;
