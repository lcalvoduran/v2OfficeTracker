# OfficeTracker


// Communication between components

1. Crear array en bookings
2. Pasarle el array a los hijos como un input
3. Pasarle a los hijos un evento
4. Cuando se le pase al appointments el evento => cuando haga click en mis botones llamara a ese evento

arguments= inputs
actions = events

1- lo que tienes que hacer es que el componente appointments reciba un array de dias seleccionados y un evento de su padre la ruta bookings. El array lo vas a usar para saber que dias estan marcados y el evento para decirle al padre cuando has clickado en alguno. El padre se encargará de añadir o quitar cosas del array
isMarked deberia ser un metodo que te mire si el array que te dio el padre contiene ese dia

2- lo de pintar los dias y su calculo son 2 cosas diferentes, para pintar un dia pues hazte un get y lo usas en la template. Para calcular el dia y darle formato puedes usar el Date.format o el toString, que te devolverán una cadena con el formato que le digas



DOCS 29/09/2022 ---> Item indexes

https://guides.emberjs.com/release/components/looping-through-lists/




/////////////////////////////////////////////////////////////

* Reminder

Tenemos que hacer que se guarden como Dates y no como "number" no se que, month y tal

//////////////////////////////////////////////////////////

Example:
![ccc](https://user-images.githubusercontent.com/107927592/201075731-1de71eb8-cefd-430d-8d3c-9b76ae25b2b0.png)



