# Agregar archivo de configuracion a una React App

## Paso 1: Crear una archivo de configuracion tipo configuracion.js y agregarlo a la carpeta public

## Paso 2: Agregar los valores que necesites dentro del archivo. ej.

    window['myvar'] = {
      //apiUrl: 'https://evc4lubonrjpmenwslwmsa332u0laijc.lambda-url.us-east-1.on.aws/'
      apiUrl: 'https://6xxsfnbdgavtc7hycalctqfg2m0kjdoy.lambda-url.us-east-1.on.aws/'}

## Paso 3: Agregar una referencia en el archivo index.html. ej.

    <script src="config.js"></script>
    
## Paso 4: Desde el codigo de React usar la variable. ej.

    const config = window['myvar'];
