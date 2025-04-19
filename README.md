<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

# Microservicio de auditoría y control de flota

El microservicio de auditoría es responsable de registrar y almacenar de forma estructurada los datos relacionados con:

Alertas generadas

Este servicio forma parte de una arquitectura de microservicios para un sistema de monitoreo y control de flotas, y actúa como bitácora central para trazabilidad, reportes y análisis posteriores.

Está construido con NestJS.

## Características

Registro de alertas (tipo, severidad, mensaje, timestamp, ubicación).
Validación de datos mediante DTOs y class-validator.
Swagger API Documentation.
Persistencia en PostgreSQL usando Prisma ORM.

## Requisitos

- Node.js (v16 o superior)
- npm
- Docker y Docker Compose (para la versión containerizada)

## Variables de entorno

Crear un archivo `.env` en la raíz del proyecto con las siguientes variables:

```
DATABASE_URL=postgresql://postgres:postgres@db:5432/audit_db
PORT=3003
```

## Download the repository

```bash
$
```

## Project setup

```bash
$ npm install
```

## Compile and run the project

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Deployment

## Endpoints

### Audit Alerts

```
POST /alert
```

**Parámetros de consulta:**

```bash
{
    "type": "routing-error",
    "message": "Timeout al calcular ruta",
    "source": "routing-service",
    "deviceId": "vehiculo-2"
}
```

**Respuesta:**

```bash
{
    "id": "c19d5912-e156-4b69-a6fe-bd52c416946d",
    "type": "routing-error",
    "message": "Timeout al calcular ruta",
    "source": "routing-service",
    "deviceId": "JWT-552",
    "timestamp": "2025-04-19T18:33:37.216Z"
}
```

## Documentación API

La documentación de la API está disponible en Swagger UI:

http://localhost:3003/api/docs
http://localhost:3003/docs/

Incluye:

Tags por módulo (Alert)
Ejemplos de payloads

## Pruebas

```bash
# Ejecutar pruebas unitarias
npm run test

# Ejecutar pruebas con cobertura
npm run test:cov
```
