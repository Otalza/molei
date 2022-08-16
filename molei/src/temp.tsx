import { StatusBar } from 'expo-status-bar'
import React, { StyleSheet, Text, View } from 'react-native'

export default function App() {
	return (
		<View style={styles.container}>
			<Text>i made rn app22222</Text>
			<StatusBar style="auto" />
		</View>
	)
}

console.log('hihihih')

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
	},
})