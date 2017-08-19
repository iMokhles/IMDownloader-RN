import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Container, Header, Title, Button, Icon, Tabs, Tab, Right, Left, Body } from 'native-base';

import DownloadTab from './tabs/Download';
import FilesTab from './tabs/Files';
import SettingsTab from './tabs/Settings';

export default class AppDelegate extends Component {

  render() {
    return (
			<Container>
				<Header hasTabs>
					<Body>
						<Title> IMDownloader</Title>
					</Body>
					<Right>
            <Button
            transparent
            onPress={() => {
              Alert.alert(
                'About IMDownloader',
                'Copyrights 2017, @TotoaDevTeam',
                [
                  { text: 'Close', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                ],
                { cancelable: false }
              );
            }}
            >
              <Icon name="information-circle" />
            </Button>
          </Right>
				</Header>

				<Tabs>
					<Tab heading="Download">
						<DownloadTab />
					</Tab>
					<Tab heading="Files">
						<FilesTab />
					</Tab>
					<Tab heading="Settings">
						<SettingsTab />
					</Tab>
				</Tabs>
			</Container>
		);
  }
}
