import { StatusBar } from 'expo-status-bar'
import React, { StyleSheet, Text, View } from 'react-native'

const App = () => (
	<View style={styles.container}>
		<Text style={styles.text}>i made rn app</Text>
		<StatusBar style="auto" />
	</View>
)

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		backgroundColor: '#fff',
		flex: 1,
		fontSize: 50,
		justifyContent: 'center',
	},
	text: {
		fontSize: 50,
	}
})

export default App