--Cambiarse a base postgres
\c postgres;

-- Create a new database called 'express_docker'
 CREATE DATABASE express_docker;

--Conexión base library
\c express_docker;

--Encoding UTF8
SET client_encoding TO 'UTF8';

--Extensión
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

--Crear Tablas
CREATE TABLE todos(
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  nombre VARCHAR(50),
  descripcion VARCHAR(200),
  fecha_creacion TIMESTAMP
);