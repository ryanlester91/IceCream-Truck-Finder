import React, { Component } from "react";
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
}


function loadMap(props) {
  return (
    <div>
      <Map
        google={this.props.google}
        zoom={this.props.zoom}
        style={mapStyles}
        initialCenter={this.props.latitude, this.props.longitude}
      />
      </div>
  )
}

export default loadMap;

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC0oM2KIstPJPRBt8w0cxen70LdWiOM18Y'
})(MapContainer);