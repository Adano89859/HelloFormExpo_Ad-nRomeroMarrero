import { useState } from "react";
import { SafeAreaView, Text, TextInput, Pressable, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Saludador Expo</Text>

      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre..."
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Saludar</Text>
      </Pressable>

      <Text style={styles.message}>Aquí aparecerá el saludo</Text>

      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  message: {
    color: "#fff",
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  }
});
