import { StatusBar } from 'expo-status-bar'
import React, { StyleSheet, Text, View } from 'react-native'

export default function App() {
	console.log('hi')
	return (
		<View style={styles.container}>
			<Text>i made rn app</Text>
			<StatusBar style="auto" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
