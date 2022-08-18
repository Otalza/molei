import { StatusBar } from 'expo-status-bar'
import React, { StyleSheet, Text, View } from 'react-native'

const App = () => (
	<View style={styles.container}>
		<Text>i made rn app</Text>
		<StatusBar style="auto" />
	</View>
)

console.log('hi')

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#fff',
		flex: 1,
		justifyContent: 'center',
	},
})

export default App