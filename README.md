# HelloFormExpo - Saludador en Expo/React Native

## 📱 Descripción
Aplicación móvil desarrollada con Expo y React Native en TypeScript que permite saludar al usuario por su nombre. La app incluye validación de entrada y actualización dinámica de la interfaz.

## ✨ Funcionalidades
- Captura del nombre del usuario mediante TextInput
- Validación de campo vacío
- Mensaje de saludo personalizado
- Interfaz responsive con estilos mediante StyleSheet

## 🚀 Instalación y ejecución

### Requisitos previos
- Node.js instalado
- Expo CLI (se instala automáticamente con el proyecto)

### Pasos para ejecutar
1. Clona el repositorio:
```bash
git clone https://github.com/Adano89859/HelloFormExpo_Ad-nRomeroMarrero.git
cd HelloFormExpo_Ad-nRomeroMarrero/HelloFormExpo
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el proyecto:
```bash
npm start
```

4. Escanea el código QR con la app Expo Go (Android/iOS) o presiona:
   - `a` para abrir en emulador Android
   - `i` para abrir en simulador iOS
   - `w` para abrir en navegador web

## 🔄 Comparación: Android Clásico / Jetpack Compose vs Expo

### Android Clásico (Java/XML)
- **Ventajas**: Control total del sistema Android, acceso a APIs nativas
- **Desventajas**: Más verboso, separación XML/lógica, solo Android

### Jetpack Compose (Kotlin)
- **Ventajas**: UI declarativa moderna, mejor integración con Android, tipado fuerte
- **Desventajas**: Curva de aprendizaje, solo Android, menos maduro que XML

### Expo/React Native (TypeScript)
- **Ventajas**: 
  - Desarrollo multiplataforma (iOS + Android con el mismo código)
  - Hot reload muy rápido
  - Ecosistema JavaScript/TypeScript
  - Componentes predefinidos y fáciles de usar
  - Menor configuración inicial
- **Desventajas**: 
  - Menor control sobre funcionalidades nativas específicas
  - Dependencia de librerías de terceros para funciones avanzadas

## ✨ Funcionalidades

### Requisitos básicos
- Captura del nombre del usuario mediante TextInput
- Validación de campo vacío
- Mensaje de saludo personalizado
- Interfaz responsive con estilos mediante StyleSheet

### Puntos extra implementados (+3pts)
- ✅ **Botón deshabilitado**: El botón permanece inactivo y gris cuando el campo está vacío
- ✅ **Estilos condicionales**: Borde rojo y fondo rosado en el input cuando hay error
- ✅ **Contador de caracteres**: Muestra "X / 20" debajo del input con límite máximo
- ✅ **Iconos**: Icono de mano en el botón usando @expo/vector-icons

**Mi experiencia**: Expo resultó más sencillo para crear interfaces básicas rápidamente gracias a su configuración mínima y hot reload instantáneo. Sin embargo, para funcionalidades muy específicas de Android, el desarrollo nativo ofrece más control.

## 🛠️ Tecnologías utilizadas
- Expo SDK
- React Native
- TypeScript
- React Hooks (useState)

## 👤 Autor
Adán Romero Marrero