CREATE DATABASE servicio

CREATE TABLE suscriptores{
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    direccion VARCHAR(100),
    acueducto VARCHAR(5),
    alcantarillado VARCHAR(5),
}