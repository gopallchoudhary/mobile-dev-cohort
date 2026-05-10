import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const Homescreen = () => {
	const USERS = [
		{ id: "1", name: "Alice Johnson", role: "Designer" },
		{ id: "2", name: "Bob Smith", role: "Developer" },
		{ id: "3", name: "Carol White", role: "Manager" },
		{ id: "4", name: "David Brown", role: "Developer" },
		{ id: "5", name: "Eve Davis", role: "Designer" },
	];
	return (
		<FlatList
			data={USERS}
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => <Text>{item.name}</Text>}
			contentContainerStyle={{
				padding: 16,
				alignItems: "center",
			}}
			ItemSeparatorComponent={() => (
				<View style={{ height: 2, backgroundColor: "black" }} />
			)}
		/>
	);
};

export default Homescreen;

const styles = StyleSheet.create({});
