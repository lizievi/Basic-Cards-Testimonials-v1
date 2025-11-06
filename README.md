# 🚀 Testimonios de Éxito: Componente Modular

## ⭐ Resumen del Proyecto

Este proyecto es una implementación **modular** y **responsiva** de una sección de testimonios de clientes (o alumnos), diseñada para ser altamente mantenible y fácil de integrar en una aplicación web. Utiliza un *stack* moderno centrado en el rendimiento y la flexibilidad del desarrollo.

El componente está diseñado con una aproximación **Mobile First**, asegurando una lectura óptima en dispositivos pequeños antes de pasar a un diseño de tarjeta horizontal en pantallas grandes. El proyecto se encuentra actualmente **en desarrollo**, con planes de añadir más modelos de testimonios.

---

## 🛠️ Tecnologías Utilizadas

Este proyecto utiliza un *stack* de vanguardia, aprovechando las últimas versiones para ofrecer un entorno de desarrollo eficiente.

                | Herramienta | Versión | Propósito |
| :--- | :--- | :--- |
| **Frontend** | React | `v19.1.1` | Librería principal para la construcción de la interfaz de usuario. |
| **Bundler** | Vite | `v7.1.7` | Herramienta de compilación rápida y servidor de desarrollo. |
| **Estilos** | Tailwind CSS | `v4.1.16` | Framework CSS de utilidad (Configuración moderna `@theme`). |
| **Lenguaje** | TypeScript | `~5.9.3` | Añade tipado estático para código más robusto y escalable. |
| **Runtime** | Node.js | `v22.17.0` | Entorno de ejecución. |

---

## ✨ Funcionalidades Clave

### 1. Componente de Testimonio (`<Testimony />`)

* **Diseño Responsivo:** Transición fluida de un diseño **vertical** (móvil) a un diseño **horizontal** (escritorio) usando `flex-col` y `sm:flex-row`.
* **Gestión de Imágenes:** Implementación de `object-cover` dentro de contenedores `overflow-hidden` con `rounded-2xl` para mostrar imágenes recortadas y centradas sin deformación.
* **Datos Tipados:** Uso de **TypeScript Interfaces** para garantizar que los datos (nombre, empresa, testimonio, etc.) se pasen y se utilicen correctamente.
* **Estilo:** Diseño con sombras (`shadow-md`) y bordes (`border-amber-600`) para una apariencia moderna y atractiva.

### 2. Carga Dinámica de Datos

* **Modularidad:** Los datos de los testimonios se gestionan de forma centralizada en el *array* **`TestimonialsConstants`**, facilitando su expansión.
* **Renderizado:** La página principal mapea (`.map()`) el *array* de constantes para renderizar múltiples testimonios de forma dinámica.

### 3. Configuración de Tailwind CSS v4

* El proyecto utiliza la sintaxis moderna de **Tailwind CSS v4** (no requiere `tailwind.config.js`).
* La configuración de temas y fuentes (como **Roboto**) se realiza de forma eficiente utilizando la directiva **`@theme`** en el CSS principal.

---

## 🚀 Instalación y Ejecución

Sigue estos pasos para poner en marcha el proyecto:

1.  **Clonar el Repositorio:**
    ```bash
    git clone [URL-DE-TU-REPOSitorio]
    cd testimonials-tsx
    ```
2.  **Instalar Dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecutar en Desarrollo:**
    ```bash
    npm run dev
    ```
    *Esto iniciará el servidor de desarrollo de Vite.*

4.  **Compilar para Producción:**
    ```bash
    npm run build
    ```
    *Esto genera la aplicación optimizada para despliegue en la carpeta `dist/`.*