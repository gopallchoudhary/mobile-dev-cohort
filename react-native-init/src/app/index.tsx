import * as ScreenOrientation from "expo-screen-orientation";
import React from "react";
import { StyleSheet, Text, View, useWindowDimensions } from "react-native";
const Homescreen = () => {
	const { width, height, fontScale, scale } = useWindowDimensions();
	const isTable = width >= 768;
	const isLandscape = width > height;

	const lockLandscape = async () => {
		await ScreenOrientation.lockAsync(
			ScreenOrientation.OrientationLock.LANDSCAPE,
		);
	};

	return (
		<View>
			<Text>Homescreen</Text>
		</View>
	);
};

export default Homescreen;

const styles = StyleSheet.create({});
