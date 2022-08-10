#Proyecto Final Curso React (![Coderhouse](https://www.coderhouse.com))

Mi proyecto es una versión simplificada del ![marketplace de D&D Beyond](https://www.coderhouse.com).

##Estructura

He decidido seguir la estructura de archivos recomendada y explicada en el siguiente artículo por Joshua Comeau, ya que me parece sencilla, limpia y clara:
https://www.joshwcomeau.com/react/file-structure/

Algunos componentes que no tienen sentido por sí solos, se han mantenido en la carpeta del padre del que dependen. Por ejemplo, ```ProductListItem.js``` (que muestra breves detalles de un producto) solo va a ser usado dentro del componente ```ProductListing.js``` (que genera una lista de productos).

Otros que podrían parecer dependientes pero que se repiten a lo largo de la aplicación, como puede ser ```AddToCartBtn.js``` se han mantenido aparte, para facilitar la lectura y un código más limpio (ahorramos repetir código JS y el mismo CSS muchas veces).

##Funcionalidades

Las siguientes son las funcionalidades principales de la aplicación:

- Lista de productos. Se muestran productos en función de la categoría seleccionada (por defecto, _featured_). También se puede navegar directamente con la ruta '/marketplace/categoriaId/'. 

- Detalle de producto. Página específica para el producto con detalles y una breve descripción. Se puede añadir productos al carrito. Se puede navegar directamente con la ruta '/marketplace/categoriaId/itemId'.

- Cuenta de usuario. Se puede crear una cuenta con email y contraseña que se utiliza posteriormente para loguearse utilizando auth de Firebase. Este paso es necesario si se desea realizar una compra. Se da la opción de cerrar la cuenta, borrarla, o modificar los datos (nombre, email y contraseña).

- Compra. Está disponible una vista de carrito (Cart) donde se muestran los productos que fueron seleccionados (si los hay) con breves detalles y el total del precio. Si se decide seguir con el proceso de compra, se solicita algunos datos al comprador, generando una nueva entrada en la base de datos y un id de compra asociados a este usuario.

##Cosas a mejorar/añadir

Estas son algunas de las ideas que mejorarían la aplicación y que es posible que añada en el futuro:

- Carrito persistente

- Popup para confirmar el borrado de cuenta

- Categorías dinámicas (Firebase)

- Mostrar errores personalizados (actualmente se muestra el mensaje de error por defecto de Firebase)

- Menú de categorías desplegable en móvil
