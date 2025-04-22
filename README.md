# Restaurant APP

## Descripcion / Description

Este proyecto es un MVP de una aplicacion de restaurante en la cual encontramos las siguientes secciones: / This project is an MVP of a restaurant app, here you will find the following sections

### Productos / Products
En esta seccion encontramos el area de los productos, aqui mismo podremos ver todos los productos que tiene la aplicacion, su informacion (nombre, precio, categoria) y la capacidad de editar la informacion de cada producto. / In this section you will find the products area. The user can view all available products, their information (name, price, category) and has the ability to edit each product's details. 

### Ordenes en el panel de administracion / Orders from administrator panel
En esta seccion se encuentran las ordenes que estan pendientes y aun no son atendidas o estan en proceso. / In this section you will find the last five pending orders.

### Orden / Order
En esta seccion el usuario es donde selecciona los productos a comprar dentro de las diferentes categorias. Este panel esta dividido en 3 secciones: menu de categorias, catalogo y resumen. / In this section the user can select products to purchase within each category. This panel is divided into three sections: Category menu, product catalog and summary.

> Menú / Menu:
Es un menu que muestra las diferentes categorias de productos que hay. / It's a menu that displays the different products' categories

> Catalogo / Catalog:
Se muestra la informacion de los productos (nombre, precio e imagen) y un boton para agregar al resumen / It displays the product information: Name, price and image, along with a button to add the item to the summary.

> Resumen / Summary:
Esta seccion es un listado de los productos a comprar y muestra la cantidad de cada producto seleccionado y el total a pagar. / This section lists the selected products, shows the quantity of each item, and displays the total amount to pay.


## Tecnologias utilizadas/ Used Technologies
- Languages: JavaScript (TypeScript)
- Framework/Librerias: Nextjs, Tailwind, Zustand, SWR
- Database: Postgresql, prisma (ORM)
- Others tools: Cloudinary



## Getting Started
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

#### Env
```bash
DATABASE_URL=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
NEXT_PUBLIC_CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
```

Run the development server:

```bash
npm run dev
```
