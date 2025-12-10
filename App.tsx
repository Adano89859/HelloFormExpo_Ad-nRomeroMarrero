import { useState } from "react";
import { SafeAreaView, Text, TextInput, Pressable, StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  // Estados
  const [name, setName] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [showError, setShowError] = useState<boolean>(false);

  // Función para manejar el saludo
  const handleGreet = () => {
    if (name.trim().length === 0) {
      setMessage('⚠️ Introduce tu nombre');
      setShowError(true);
    } else {
      setMessage(`👋 Hola, ${name}`);
      setShowError(false);
    }
  };

  // Verificar si el botón debe estar deshabilitado
  const isButtonDisabled = name.trim().length === 0;

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Saludador Expo</Text>

      {/* TextInput con estilos condicionales */}
      <TextInput
        style={[
          styles.input,
          showError && styles.inputError
        ]}
        placeholder="Escribe tu nombre..."
        placeholderTextColor={showError ? "#ffcdd2" : "#999"}
        value={name}
        onChangeText={(text) => {
          setName(text);
          setShowError(false); // Quitar error al escribir
        }}
        maxLength={20}
      />

      {/* Contador de caracteres */}
      <Text style={styles.counter}>{name.length} / 20</Text>

      {/* Botón con estado deshabilitado y icono */}
      <Pressable 
        style={[
          styles.button,
          isButtonDisabled && styles.buttonDisabled
        ]} 
        onPress={handleGreet}
        disabled={isButtonDisabled}
      >
        <Ionicons name="hand-right" size={20} color="#fff" style={styles.icon} />
        <Text style={styles.buttonText}>Saludar</Text>
      </Pressable>

      {/* Mensaje con estilos condicionales */}
      <Text style={[
        styles.message,
        showError && styles.messageError
      ]}>
        {message}
      </Text>

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
    marginBottom: 5,
    borderWidth: 2,
    borderColor: "#fff",
  },
  inputError: {
    borderColor: "#f44336",
    backgroundColor: "#ffebee",
  },
  counter: {
    color: "#aaa",
    fontSize: 12,
    textAlign: "right",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonDisabled: {
    backgroundColor: "#666",
    opacity: 0.5,
  },
  icon: {
    marginRight: 8,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  message: {
    color: "#fff",
    marginTop: 20,
    fontSize: 18,
    textAlign: "center",
  },
  messageError: {
    color: "#f44336",
  },
});