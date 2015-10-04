# Layout multicolumna hecho con Zepto.js 1.1.6

Prueba de conceptos. Generación de un layout multicolumna mediante un plugin de Zepto.js (zepto-grid.js) incluído en este repositorio.

Este layout permite la agrupación de contenedores en una rejilla de 12 columnas que pueden ser ocupadas a pedido, según se necesite en cualquier combinación, sin usar otra dependencia aparte de (Zepto.js)[http://zeptojs.com/].

## API

| Función | Operación |
|---------|-----------|
| `.asRow()` | El elemento seleccionado es un contenedor de columnas. |
| `.asWidthColumn` | El elemento seleccionado es una columna. |
| `.getConfig()` | Retorna el objeto global de configuración del layout. |
| `.setSize(cols)` | Define el ancho de una columna (en espacios de columna) |

Realizado por Jhony Grillet (@ch1nux)[https://twitter.com/ch1nux]. Liberado bajo licencia (MIT)[LICENSE].
