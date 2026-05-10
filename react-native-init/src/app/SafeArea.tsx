import { Text, View } from "react-native";

function UnsafeScreen() {
	return (
		<View>
			<Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
				Header (bleeds under notch!)
			</Text>
			<Text style={{ color: "#aaa", padding: 16 }}>
				This content might be hidden behind the status bar in dark mode.
			</Text>
		</View>
	);
}

export default function App() {
	return (
		// <SafeAreaView style={{ flex: 1 }}>
		// 	<KeyboardAvoidingView
		// 		style={{ flex: 1 }}
		// 		behavior={Platform.OS === "ios" ? "padding" : "height"}
		// 	>
		// 		<View style={{ flex: 1, justifyContent: "flex-end", padding: 24 }}>
		// 			<Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>
		// 				Login
		// 			</Text>

		// 			<TextInput
		// 				placeholder="Email"
		// 				style={{
		// 					borderWidth: 1,
		// 					borderColor: "#ddd",
		// 					borderRadius: 10,
		// 					padding: 14,
		// 					fontSize: 16,
		// 					marginBottom: 12,
		// 				}}
		// 			/>
		// 			<TextInput
		// 				placeholder="Password"
		// 				secureTextEntry
		// 				style={{
		// 					borderWidth: 1,
		// 					borderColor: "#ddd",
		// 					borderRadius: 10,
		// 					padding: 14,
		// 					fontSize: 16,
		// 					marginBottom: 20,
		// 				}}
		// 			/>

		// 			<Pressable
		// 				style={{
		// 					backgroundColor: "#6C63FF",
		// 					padding: 16,
		// 					borderRadius: 12,
		// 					alignItems: "center",
		// 				}}
		// 			>
		// 				<Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
		// 					Sign In
		// 				</Text>
		// 			</Pressable>
		// 		</View>
		// 	</KeyboardAvoidingView>
		// </SafeAreaView>

		<UnsafeScreen />
	);
}
