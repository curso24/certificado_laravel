<?php

namespace App\Http\Requests\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Profesor extends Model
{
    use HasFactory;
    protected $table="profesores";
    protected $fillable=['nombre', "apellidos", "email", "departamento"];
}
