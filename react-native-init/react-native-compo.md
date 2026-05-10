# React Native Components Reference

---

# 1. Basic Components (Text, Image, View)

Example showing how to use Text, Image (local and remote), and basic View layouts.

```jsx
import React from "react";
import { Image, Text, View } from "react-native";

const HomeScreen = () => {
  return (
    <View>
      <Text numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </Text>

      {/* Remote Image */}
      <Image
        source={{
          uri: "https://chaicode.com/assets/hitesh-suraj-dark-CKHA9jfT.webp",
        }}
        style={{
          width: 200,
          height: 200,
        }}
      />

      {/* Local Image */}
      <Image
        source={require("@/assets/images/icon.png")}
        style={{
          width: 100,
          height: 100,
        }}
        blurRadius={10}
      />
    </View>
  );
};

export default HomeScreen;
```

---

# 2. Form Components (TextInput, Button, Switch)

Example showing how to use TextInput, Pressable Button, and Switch.

```jsx
import React, { useState } from "react";
import {
  Pressable,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";

const HomeScreen = () => {
  const [name, setName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={{ padding: 20 }}>
      {/* TextInput */}
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={"gray"}
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          padding: 12,
          borderRadius: 8,
          marginBottom: 20,
        }}
      />

      {/* Pressable Button */}
      <Pressable
        onPress={() => alert("Button Pressed")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#4a42d4" : "#6C63FF",
          padding: 14,
          borderRadius: 10,
          marginBottom: 20,
        })}
      >
        {({ pressed }) => (
          <Text style={{ color: "white", textAlign: "center" }}>
            {pressed ? "Pressing..." : "Press Me"}
          </Text>
        )}
      </Pressable>

      {/* Switch */}
      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
      />
    </View>
  );
};

export default HomeScreen;
```

---

# 3. ScrollView with List Items

Example showing how to render multiple items using ScrollView.

```jsx
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const HomeScreen = () => {
  const items = Array.from(
    { length: 10 },
    (_, i) => `Item ${i + 1}`
  );

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        padding: 16,
      }}
    >
      {items.map((item) => (
        <View key={item} style={styles.card}>
          <Text>{item}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
});
```

---

# 4. FlatList with Data

Example showing how to render performant lists using FlatList.

```jsx
import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";

const USERS = [
  { id: "1", name: "Alice Johnson", role: "Designer" },
  { id: "2", name: "Bob Smith", role: "Developer" },
  { id: "3", name: "Carol White", role: "Manager" },
  { id: "4", name: "David Brown", role: "Developer" },
  { id: "5", name: "Eve Davis", role: "Designer" },
];

const HomeScreen = () => {
  return (
    <FlatList
      data={USERS}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{
        padding: 16,
      }}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>
            {item.name}
          </Text>

          <Text>{item.role}</Text>
        </View>
      )}
      ItemSeparatorComponent={() => (
        <View style={{ height: 10 }} />
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 10,
  },

  name: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
```

---

# 5. SafeAreaView Example

Example showing how to prevent content from overlapping with the notch/status bar.

```jsx
import React from "react";
import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#1c1c1e",
      }}
    >
      <Text
        style={{
          color: "#fff",
          fontSize: 18,
          padding: 16,
        }}
      >
        Header safely below notch ✅
      </Text>

      <Text
        style={{
          color: "#aaa",
          padding: 16,
        }}
      >
        Safe area applied successfully.
      </Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
```

---

# 6. useSafeAreaInsets Hook

Example showing how to use safe area values dynamically.

```jsx
import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingHorizontal: 16,
      }}
    >
      <StatusBar barStyle={"dark-content"} />

      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
```

---

# 7. Card UI Example

Example showing how to create a reusable card component.

```jsx
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f2f2f2",
      }}
    >
      <StatusBar style="dark" />

      <View style={styles.card}>
        <Text style={styles.title}>
          HomeScreen
        </Text>

        <Text style={styles.subtitle}>
          Hello from card UI
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    margin: 16,

    elevation: 4,

    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },

  subtitle: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
});
```

---

# 8. StyleSheet.compose()

Example showing how to dynamically combine styles.

```jsx
import React from "react";
import {
  StyleSheet,
  Text,
  View,
} from "react-native";

const HomeScreen = () => {
  const isActive = true;

  const buttonStyle = StyleSheet.compose(
    styles.button,
    isActive ? styles.activeButton : null
  );

  return (
    <View style={styles.container}>
      <View style={buttonStyle}>
        <Text style={styles.buttonText}>
          Composed Style
        </Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },

  activeButton: {
    backgroundColor: "#6C63FF",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
```

---

# 9. StyleSheet.flatten()

Example showing how to merge multiple style objects.

```jsx
import React from "react";
import {
  StyleSheet,
  Text,
} from "react-native";

const styleA = StyleSheet.create({
  text: {
    color: "red",
    fontSize: 16,
  },
});

const styleB = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

const flatStyle = StyleSheet.flatten([
  styleA.text,
  styleB.text,
]);

const HomeScreen = () => {
  return (
    <Text style={flatStyle}>
      Flattened Style!
    </Text>
  );
};

export default HomeScreen;
```