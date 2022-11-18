# OfficeTrackerv2

/////////////////////////////////////////////////////////////

* Improvements

-> Que se guarden las fechas como "Dates" y que se saquen como "Dates", el formateo se lo hacemos luego.

/////////////////////////////////////////////////////////////

* Problemas durante los cambios

> Tenemos que hacer BIDIRECCIONAL el component "bookings", sin embargo durante la realización de este la implementación de la variable
"arrayDays" no se hizo correctamente y en vez de llamar a la variable que se le está pasando desde el componente se crea una nueva, por lo que es inservible ahora mismo. Para ello tendríamos que modificar absolutamente todo el código de appointments (+400 líneas) para que nos funcionase en su totalidad. Es por ello que ya que este es uno de los requisitos principales estos días estaré cambiando el código de ese componente.


//////////////////////////////////////////////////////////

Example:
![ccc](https://user-images.githubusercontent.com/107927592/201075731-1de71eb8-cefd-430d-8d3c-9b76ae25b2b0.png)



