# Bitácora de uso de IA

## 1. Herramientas utilizadas

- OpenAI Codex en la aplicación de escritorio. Versión observada del agente local `codex-cli 0.169.0-alpha.11.1`.

## 2. Propósito de uso

- Interpretar el enunciado y la rúbrica y ordenar la migración en siete commits.
- Asistir en la implementación de React y TypeScript, el consumo de GitHub, la recuperación del formulario y la verificación de accesibilidad y diseño responsivo.

## 3. Prompts representativos

> Necesito que me ayudes con este trabajo, ya tengo la base del repositorio creado, la idea es que crees un plan de acción de unos 6 o 7 commits los cuales completen los requerimientos mismos, aquí el enlace al repositorio: [https://github.com/dramirez08/Evaluacion-4-Danna-Ramirez](https://github.com/dramirez08/Evaluacion-4-Danna-Ramirez)

> vamos paso a paso realizando la implementación de los commits uno a uno.

## 4. Output recibido

- Plan de siete commits con criterios de verificación para cada etapa.
- Base de TypeScript estricto, componentes y rutas del portafolio, lógica de la API, controles con estado y documentación de la migración.

## 5. Ajustes, refactorización y verificación

- Se reutilizó la configuración de Vite y se dejó `index.html` como único documento HTML. La interfaz se monta desde `src/main.tsx`. Codex verificó `npm run build`, `npm run lint` y la renderización del encabezado en el navegador con `npm run dev`.
- Se corrigió la extensión de una ilustración para que TypeScript la reconociera sin perder el archivo original. El formulario se probó con campos vacíos, un cálculo de $13.000, tres cupos ocupados y el registro de una solicitud después de liberar un cupo.
- Se comprobó GitHub con la respuesta real y con respuestas simuladas de carga, lista vacía, formato inesperado y error. Se observó la cancelación al salir de la ruta durante una consulta.
- El análisis con axe-core detectó que la tabla desplazable no recibía foco. Se añadió foco de teclado y se comprobó con la flecha derecha. La segunda ejecución automatizada informó cero infracciones en los 16 escenarios analizados.

## 6. Reflexión crítica final

Pendiente de redactar por la autora con su propia experiencia. Para preparar esta sección, describe una decisión que puedas explicar con el código (tema, cupos o cancelación de la API), un riesgo de aceptar propuestas sin revisarlas y la prueba concreta que puedas repetir para defender tu implementación.
