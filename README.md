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




### Creo la tabla

###
Poblamos la tabla
