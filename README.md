<p align="center">
  <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png" width="150" alt="Pikachu">
</p>

<h1 align="center">🔴 Pokédex React</h1>

<p align="center">
  Una Pokédex moderna y responsiva construida con React y la PokéAPI
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white" alt="React">
  <img src="https://img.shields.io/badge/Vite-7.2.2-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite">
  <img src="https://img.shields.io/badge/PokéAPI-v2-EF5350?style=for-the-badge&logo=pokemon&logoColor=white" alt="PokéAPI">
</p>

---

## 📚 Sobre el Proyecto

Este proyecto fue desarrollado como un ejercicio de aprendizaje con los siguientes objetivos:

- 🔌 **Consumo de APIs REST** - Aprender a interactuar con APIs externas usando `fetch`
- ⚛️ **React Hooks** - Práctica con `useState`, `useEffect` y manejo de estado
- 🎨 **CSS Moderno** - Implementación de temas, responsividad y metodología BEM
- 📦 **Componentización** - Estructurar una aplicación en componentes reutilizables

## ✨ Características

- 🎨 **Tema Claro/Oscuro** - Toggle con iconos de Solrock/Lunatone
- 🔍 **Filtros por Tipo** - Filtra Pokémon por su tipo elemental
- 📱 **100% Responsivo** - Diseño adaptable a cualquier dispositivo
- 🎵 **Reproductor de Música** - Música de fondo de Pokémon
- 🃏 **Tarjetas Interactivas** - Modal con detalles completos del Pokémon
- ⬅️➡️ **Navegación en Modal** - Navega entre Pokémon sin cerrar el modal


## 🚀 Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/san-pedrob/React-PokeAPI.git
   cd React-PokeAPI
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre en tu navegador**
   ```
   http://localhost:5173
   ```

## 🛠️ Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Genera la build de producción |
| `npm run preview` | Previsualiza la build de producción |
| `npm run lint` | Ejecuta ESLint para verificar el código |

## 📁 Estructura del Proyecto

```
pokedex-react/
├── src/
│   ├── components/
│   │   ├── LoadingSpinner/    # Spinner de carga
│   │   ├── MusicPlayer/       # Reproductor de música
│   │   ├── Navbar/            # Barra de navegación
│   │   ├── PokemonCard/       # Tarjeta de Pokémon
│   │   ├── PokemonDetailCard/ # Detalles del Pokémon
│   │   ├── PokemonList/       # Lista de Pokémon
│   │   ├── PokemonModal/      # Modal con detalles
│   │   └── TypeFilter/        # Filtros por tipo
│   ├── App.jsx
│   └── main.jsx
├── public/
└── index.html
```

## 🎨 Tecnologías Utilizadas

- **React 19** - Biblioteca UI
- **Vite 7** - Build tool ultra rápido
- **CSS Vanilla** - Estilos personalizados con metodología BEM
- **PokéAPI** - API de datos de Pokémon

## 📝 Licencia

Este proyecto está bajo la Licencia MIT - mira el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Créditos

- Datos de Pokémon proporcionados por [PokéAPI](https://pokeapi.co/)
- Sprites oficiales de [PokeAPI Sprites](https://github.com/PokeAPI/sprites)

---

<p align="center">
  Hecho con ❤️ y mucha nostalgia hacia POKEMON por sanPedro
</p>
