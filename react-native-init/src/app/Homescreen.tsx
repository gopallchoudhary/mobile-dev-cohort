import {
	Button,
	ScrollView,
	StyleSheet,
	Switch,
	Text,
	View,
} from "react-native";
import { useState } from "react";
const Homescreen = () => {
	const items = Array.from({ length: 5 }, (_, index) => `Item ${index + 1}`);
	const [isDarkMode, setIsDarkMode] = useState(false);
	return (
		<ScrollView
			style={{ flex: 1, backgroundColor: `${isDarkMode ? "black" : "white"}` }}
			contentContainerStyle={{
				padding: 16,
				alignItems: "center",
			}}
		>
			{items.map((item) => (
				<View
					key={item}
					style={{
						backgroundColor: "white",
						padding: 16,
						borderRadius: 10,
						marginBottom: 10,
						shadowColor: "#000",
						shadowOpacity: 0.05,
						shadowRadius: 4,
						elevation: 2,
					}}
				>
					<Text style={{ fontSize: 16 }}>{item}</Text>
				</View>
			))}

			<Button
				title="Click me darling"
				color={"green"}
				onPress={() => alert("hello world")}
			/>
			<Switch
				value={isDarkMode}
				onValueChange={setIsDarkMode}
				trackColor={{ false: "#f10808", true: "#63f362" }}
				thumbColor={"blue"}
			/>
		</ScrollView>
	);
};

export default Homescreen;

const styles = StyleSheet.create({});
