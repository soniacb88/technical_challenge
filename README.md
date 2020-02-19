
# Proyecto para entrevista técnica de INNOCV.

La finalidad del proyecto era hacer un CRUD de una base de datos de usuarios.

## En la parte del Back he trabajado con Node.JS, y Express y como base de datos he usado MongoDB.

Las rutas de end-points son:
GET ALL: Muestra todos los usuarios \
GET: detalles específicos de un usuario\ 
CREATE: crea un nuevo usuario UPDATE: actualiza un usuario \
REMOVE: Elimina un usuario. \

## En la parte del Front he usado React.JS para poder conseguir que la app fuera una SPA.
Las rutas de end-points son: 
"/" => Muestra todos los usuarios de la base de datos.
"/create" => Muestra el formulario de creación de nuevo usuario. 
"/edit/:id => Muestra el formulario para editar algunos de los datos de un usuario en concreto.
"/:id => Muestra el componente de detalles de un usuario concreto.

Se pueden acceder a los detalles de cada usuario pinchando sobre su nombre. Para editar y eliminar se puede hacer bien desde la página de detalles, o directamente desde la lista de usuarios, a través del link a editar o eliminar.

He usado Bootstrap y React-bootstrap porque lo usé en el último proyecto de Ironhack y me encantó. 
Los formularios tienen la valicación de completar los campos obligatoriamente. 

Los test unitarios no sé hacerlos :(
