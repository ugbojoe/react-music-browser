import React from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';

import ArtistDetail from './ArtistDetail';
import './artist.css';

class Artists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      artists: []
    };
  }
  componentDidMount() {
    // Make HTTP request with Axios
    axios.get('/artists.json')
    .then((res) => {
      this.setState({artists:res.data});
    });
  }
  render() {
    const artists = this.state.artists.map( artist => {
      return (
        <li key={artist.id}>
          <NavLink
            activeClassName="activeLink"
            to={`/artists/${artist.id}`}>{artist.name}
          </NavLink>
        </li>
      );
    });
    return (
      <section className="artists">
        <Grid>
          <Row>
            <Col md={2}>
              <h1>Artists</h1>
              <ul>
                {artists}
              </ul>
            </Col>
            <Col md={10}>
              <Route
                path={`${this.props.match.path}/:artistId`}
                render={(routeProps) => {
                  const artist = this.state.artists
                    .find(artist => artist.id === Number(routeProps.match.params.artistId));
                  return (
                    <ArtistDetail
                      {...routeProps}
                      artist={artist}
                    />
                  );
                }}
              />
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}

export default Artists;
