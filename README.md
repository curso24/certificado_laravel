## Creando un CRUD para profesores

### Creo en ecosistema

```bash
php artisan make:model Profesor --all
```

Esto crea los siguientes elementos:
* migracion (para creer las tablas)
* factoria (Crear valores para una fila de la tabla)
* seeder (invocar a la factoria de un model e insertar los valores en la tabla)
* controlador (los métodos que voy a ejecutar ante solicitudes del cliente) 
* modelo (clase para ineteractuar con una tabla de la bd y hacer acciones típicas como insertar, borrar, consultar, actualizar)
* request (autoriza, valida los datos del formulario)
* policy (ni idea, suena a políticas que definirás acceso)
* rutas (tengo que crearlas y dirán que recursos ofrece mi aplicación)

## Ajusto los valores por defecto

Cómo el modelo se llama Profesor y la tabla queiro que se llame prefores y no profesors, tengo que indicarlo:


### Creo las rutas

*Debemos ir al fichero de rutas (web.php) y, allí, agregamos:
•use App\Http\Controllersd\ProfesorController;
•Route::resource(“profesores”, ProfesorController::class);
El método resource crea todas las solicitudes posibles para acceder a un recurso.
Después ejecutamos el comando php artisan route:list –path=”profesores”; al ejecutarlo, vemos las
rutas.




### Creo la tabla
ara crear la tabla, debemos ejecutar el comando php artisan  migrate

### Poblamos la tabla
Ahora para poblar la tabla, desde el fichero seeder se llama al factory. Si ejecutamos el comando
php artisan migrate: fresh –seed, lo que nos hace este comando es borrarnos y crearnos de nuevo la
tabla
## Creando un CRUD para paginacion
## Creando un CRUD para paginacion para profesores
