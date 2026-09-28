# Detalle de vehículo — Modern bento detail

## Objetivo
Crear una nueva vista detallada para el Mazda 3 2024, siguiendo la dirección visual elegida y conservando la identidad de Rodii.

## Implementación
- Crear la ruta `/carros/mazda-3-2024` y enlazar el Mazda recomendado desde la portada.
- Construir una galería protagonista con las cuatro nuevas fotografías del vehículo.
- Organizar el contenido en dos columnas en escritorio: información a la izquierda y reserva fija a la derecha.
- Incluir especificaciones, propietario, calendario, pico y placa, entrega, ubicación y preguntas frecuentes.
- Añadir controles funcionales para fechas, horas, tipo de entrega, acordeones y galería.
- Adaptar la experiencia móvil con galería horizontal, contenido apilado y barra de reserva fija inferior.
- Mantener Inter, los tokens existentes navy/coral/azul/gris, radios moderados y objetivos táctiles de al menos 44 px.
- Añadir metadatos propios de la nueva página y verificar escritorio, móvil y estado de compilación.

## Detalles técnicos
- React/TanStack Start con una ruta independiente.
- Tailwind inline y `lucide-react`; sin nueva capa de datos ni cambios de servidor.
- Las imágenes generadas se importan como recursos locales del proyecto.
