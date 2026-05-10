import { useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function Homescree() {
const [name, setName] = useState("");
return (
<>
<View>
<Text>Hello There!</Text>

    			{/* <Image
    				source={{
    					uri: "https://images.pexels.com/photos/29399452/pexels-photo-29399452.jpeg",
    				}}
    				width={200}
    				height={200}
    				blurRadius={200}
    			/> */}

    			{/* local image */}
    			<Image
    				source={require("@/assets/images/icon.png")}
    				style={{
    					width: 150,
    					height: 150,
    				}}
    				blurRadius={10}
    			/>
    			<Text>Cool and done hai jii</Text>
    			<TextInput
    				placeholder="Enter your name"
    				value={name}
    				onChangeText={setName} // direct access to string and it is lightweight
    				placeholderTextColor={"blue"}
    				style={{
    					borderColor: "#ddd",
    					borderWidth: 1,
    					marginTop: 10,
    					borderRadius: 5,
    				}}
    			/>

    			<Pressable
    				onPress={() => alert("Button Pressed")}
    				style={({ pressed }) => ({
    					backgroundColor: pressed ? "#7b79a9" : "#312be7",
    				})}
    				hitSlop={{
    					bottom: 10,
    				}}
    			>
    				{({ pressed }) =>
    					pressed ? <Text>Pressing...</Text> : <Text>Press Me</Text>
    				}
    			</Pressable>
    		</View>
    	</>
    );

}
