import { Image, Text, View } from "react-native";

export default function Homescree() {
	return (
		<View>
			<Text>Hello There!</Text>

			<Image
				source={{
					uri: "https://images.pexels.com/photos/29399452/pexels-photo-29399452.jpeg",
				}}
				width={200}
				height={200}
			/>
		</View>
	);
}
