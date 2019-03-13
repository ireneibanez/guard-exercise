# GUARDS

Una vez visto el código, se proponen los siguientes ejercicios:

- Crear una guarda que actúe al intentar entrar en la ruta /info y que haga que se nos muestre por consola el nombre de la propia ruta.

- Crear una guarda que se active al intentar entrar en la ruta /home y que detecte si hay un token en el localStorage o no. Si lo hay, la guarda debe dejar entrar a la ruta y si no lo hoy, debe redireccionar de nuevo a la ruta de /login.

- Crear una guarda que se active al intentar salir de la ruta /home y nos muestre un alert para confirmar que queremos salir. Si pulsamos aceptar, la guarda debe dejar salir de la ruta y si pulsamos cancelar debe mantenerse en la ruta. Más información para este último ejercicio:

 - Tenemos un botón logout en la home que debe redireccionar a /login y limpiar el localstorage sólo si la navegación tiene lugar.

 - El alrte de confirmación puede sacarse utilizando window.confirm().
