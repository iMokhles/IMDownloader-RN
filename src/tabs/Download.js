
import React, { Component } from 'react';

import { Content, Card, CardItem, Text, Body, Item, Input, Button, Icon } from 'native-base';

// import styles from './styles';

export default class DownloadTab extends Component {
	// eslint-disable-line

	render() {
		// eslint-disable-line
		return (
			<Content padder>
				<Card>
					<CardItem>
						<Item regular>
							<Input placeholder='Enter URL' />
						</Item>
					</CardItem>
					<CardItem
					style={{
							flexDirection: 'row',
							alignItems: 'center',
							justifyContent: 'center',
						}}
					>
						<Button
						style={{
								flexDirection: 'row',
								alignItems: 'center',
								justifyContent: 'center',
							}}
							iconLeft
						>
							<Icon name='arrow-down' />
							<Text>Download</Text>
						</Button>
					</CardItem>
				</Card>
			</Content>
		);
	}
}
