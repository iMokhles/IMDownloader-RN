import React, { Component } from 'react';

import { Content, Card, CardItem, Text, Body } from 'native-base';

// import styles from "./styles";

export default class SettingsTab extends Component {
  // eslint-disable-line

  render() {
    // eslint-disable-line
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                Settings Page
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
