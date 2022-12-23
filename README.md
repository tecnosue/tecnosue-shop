# Tecnosue Shop

## Descripcion

Tienda online de ropa en la que podemos seleccionar productos, añadirlos a nuestro carrito de compra, modificar el carrito y confirmarlo.

Para guardar la orden necesitaremos estar autenticados.
Podemos registrarnos en la base de datos o con GitHub.
Implementado Paypal (Sandbox) como modo de pago.

Totalmente responsive.

## Lenguajes y Tecnologías:

NextJS, React, Typescript, Docker, MongoDb, Fetch / Axios

## Instalación:

Para correr localmente, se necesita la base de datos.

```
docker-compose up -d
```

### Configurar las variables de entorno

Renombrar el archivo __.env.template__ a __.env__

* MongoDB URL Local:

```
MONGO_URL=mongodb://localhost:27017/tecnosuedb
```

* Reconstruir los módulos de node y levantar Next

```
yarn install
yarn dev
```

## Llenar la base de datos con información de pruebas

Llamar a:

```
http://localhost:3000/api/seed
```

## Capturas


   
![IMG_9051](https://user-images.githubusercontent.com/82464797/209329109-273ef86d-08ef-4726-9233-031b3cb3d236.PNG)
![IMG_9052](https://user-images.githubusercontent.com/82464797/209329115-06eaf57f-8ec7-4df7-bdba-bf0a47ea1112.PNG)
![IMG_9053](https://user-images.githubusercontent.com/82464797/209329121-8206dc39-c294-4541-ac45-ff9e414c717b.PNG)
![IMG_9056](https://user-images.githubusercontent.com/82464797/209329122-ed849300-47ad-4f8c-b772-f2816a28d7c7.PNG)
![IMG_9055](https://user-images.githubusercontent.com/82464797/209329125-e28d49ec-f00d-4e1a-9d58-b99eb4c1044b.PNG)
![IMG_9054](https://user-images.githubusercontent.com/82464797/209329130-e96c6399-f61d-4f05-9d5d-0a8b9413741c.PNG)

    

## licencia
Este proyecto cuenta con licencia conforme a los términos de la licencia MIT

## Alojado en VERCEL:

[Tecnosue Shop](https://tecnosue-shop-bottega-capstone-tecnosue.vercel.app)
