1. SQL Shell (psql) y ejecutar el comando \i con la dirección del archivo queries.sql, como el ejemplo:

    \i 'D:/Desafios/Docker/queries.sql'

    ¡Atención! las comillas deben ser simples y los slash (/) hacia la izquierda.

2. Si se cuenta con una contraseña para acceder a las bases de datos en postgres, se debe especificar en la variable PGPASSWORD del archivo .env que esta en la ruta raiz de este proyecto.

3. Se debe crear la imagen del proyecto en docker, para esto se escribe en la terminal el siguiente comando:

    docker build . -t app-node-js

    Donde app-node-js sera el nombre de la imagen creada. Se puede escoger otro nombre.

4. Se debe iniciar el servicio web (contenedor) con el siguiente comando:

    docker run -d -p 4000:4000 app-node-js

    Donde app-node-js es el nombre de la imagen creada.

5. Se puede comprobar en el navegador el sitio web en la dirección http://localhost:4000/ .