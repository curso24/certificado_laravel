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

Cómo el modelo se llama Profesor y la tabla queiro que se llame profores y no profesors, tengo que indicarlo:


### Creo las rutas


### Creo la tabla
ara crear la tabla, debemos ejecutar el comando php artisan  migrate

### Poblamos la tabla
Ahora para poblar la tabla, desde el fichero seeder se llama al factory. Si ejecutamos el comando
php artisan migrate: fresh –seed, lo que nos hace este comando es borrarnos y crearnos de nuevo la
tabla
## Creando un CRUD para paginacion

public function index()
{
$profesores = Profesor::paginate(5);
$page = Request::get("page") ??1;
return view("profesores.listado", ["profesores" => $profesores, "page"=>$page]);
//        return view("profesores.listado", compact("profesores", "page"));
//
}



AÑADIDO A ALUMNOS IDIOMAS Y ETIQUETA PARA VISUALIZARLO

INSTALAMOS REACT EN LARAVEL:

PRIMERO INSTALAMOS 3 PAQUETES
npm install --save-dev @vitejs/plugin-react
npm install react@latest react-dom@latest

MODIFICAMOS EL FICHERO DE CONFIGURACIÓN AÑADIENDO EL NUEVO PLUGIN QUE VAMOS A USAR:

import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from "@vitejs/plugin-react"

export default defineConfig({
plugins: [
react(),
laravel({
.....

importamos 



