# Auditoría manual — módulo 10

Pendiente de comprobación en navegador:

- Recorrer las cinco pantallas solo con teclado: foco visible, orden lógico y radios navegables con flechas.
- Confirmar un único `h1` por pantalla y jerarquía de encabezados sin saltos.
- A 320 px, confirmar que no hay desbordamientos ni superposiciones.

Límites conocidos:

1. No hay autenticación: cualquier persona con acceso a la dirección puede leer y modificar el tablero.
2. La validación de títulos ocurre en el cliente; no protege al servidor frente a peticiones directas.
3. La aplicación no cifra datos del navegador. Actualmente usa API remota; si se reincorporara `localStorage`, cualquier script de la página podría leerlo.
