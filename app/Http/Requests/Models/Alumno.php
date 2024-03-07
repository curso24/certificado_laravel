<?php

namespace App\Http\Requests\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Alumno extends Model
{
    use HasFactory;
    protected $fillable =["nombre", "direccion", "apellidos", "email", "telefono"];
}
