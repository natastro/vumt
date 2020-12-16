const locale = {
    "translation": {
        "addTranslation": "Añadir traducción",
        "createdAt": "Creado",
        "distanceAway": "{{distance}} de distancia",
        "distanceFromPlace": "A {{distance}} de {{place}}",
        "language": "Idioma",
        "mustBeLoggedIn": "Debe iniciar sesión para utilizar este sistema.",
        "selectLanguage": "Seleccionar idioma",
        "timesAreLocal": "Horarios están en la hora {{timezone}} local.",
        "translation": "Traducción",
        "translations": "Traducciónes",
        "updatedAt": "Actualizado"
    },
    "commonForms": {
        "cancel": "Cancelar",
        "country": "País de residencia",
        "countryPlaceholder": "Seleccionar país",
        "detail": "Detalle",
        "edit": "Corregir",
        "email": "Correo electrónico",
        "emailPlaceholder": "yo@ejemplo.com",
        "firstName": "Nombre de pila",
        "lastName": "Apellido",
        "no": "No",
        "password": "Contraseña",
        "phone": "Teléfono",
        "postalCode": "Código postal",
        "postalCodeInvalid": "Debe tener el formato correcto del código postal {{country}}",
        "province": "Estado, provincia o territorio",
        "provincePlaceholder": "Estado, provincia o territorio",
        "remove": "Quitar",
        "invalidRequired": "No puede estar en blanco",
        "mustBePhone": "Debe tener el número de teléfono correctamente formateado",
        "mustBeWholeNumber": "Debe ser un número entero",
        "mustBeAtLeast": "Debe ser por lo menos {{min}}",
        "mustBeAtMost": "No debe exceder {{max}}",
        "yes": "Sí"
    },
    "error": {
        "duplicateKey": "Debe ser único y `{{value}}` is ya se utiliza",
        "AUTH_EXPIRED_PASSWORD_RESET_TOKEN": "La solicitud de restablecimiento de contraseña es demasiado antigua para ser procesada. Por favor, envíe una nueva solicitud de restablecimiento de contraseña.",
        "AUTH_EXPENDED_PASSWORD_RESET_TOKEN": "Esta solicitud de restablecimiento de contraseña ya se utilizó para restablecer la contraseña. Por favor, envíe una nueva solicitud de restablecimiento de contraseña.",
        "AUTH_INVALID_PASSWORD": "La contraseña proporcionada no es válida.",
        "AUTH_INVALID_USER_TOKEN": "Token de usuario no válido.",
        "AUTH_MISSING_EMAIL": "Falta correo electrónico.",
        "AUTH_MISSING_PASSWORD":  "Falta la contraseña.",
        "AUTH_NEED_ROLE": "Debe tener uno de los siguientes roles para acceder a este recurso: {{roles}}.",
        "AUTH_NO_USER_TOKEN": "No se proporciona ningún token de usuario",
        "AUTH_NO_PASSWORD_RESET_TOKEN": "El token de solicitud de restablecimiento de contraseña especificado no existe para el usuario especificado",
        "AUTH_NO_USER": "Ningún usuario está registrado con el correo electrónico especificado",
        "AUTH_REQUIRED": "Debe iniciar sesión para realizar esta acción.",
        "UNAUTHORIZED": "No puede realizar la acción solicitada."
    },
    "advisory": {
        "addAdvisory": "Añadir aviso",
        "addPrompt": "Añadir solicitud",
        "editAdvisory": "Editar asesoramiento",
        "label": "Etiqueta",
        "prompt": "Mensaje",
        "prompts": "Mensajes",
        "removePrompt": "Eliminar el aviso",
        "startOnDate": "Fecha de inicio",
        "startOnTime": "Hora de comienzo",
        "endOnDate": "La fecha de finalización",
        "endOnTime": "Hora de finalización",
        "districts": "Distritos",
        "districtsPlaceholder": "Especificar los distritos a los que se restringe el asesoramiento",
        "contexts": "Contextos",
        "contextsPlaceholder": "Especifique los contextos en los que se debe mostrar el aviso",
        "newAdvisory": "Nuevo asesoramiento",
        "advisoryDetail": "Detalles de asesoramiento",
        "updateAdvisory": "Asesoramiento de actualización",
        "mustBeBeforeEndOn": "Debe ser antes de la fecha de finalización"
    },
    "advisoryContext": {
        'checkin': "factuar",
        'checkout': "dejar",
        'editVisit': "editar visita",
        'newVisit': "nueva visita",
        'register': "registrar usuario",
        'unauthenticated': "usuario no autenticado"
    },
    "district": {
        "addDistrict": "Añadir distrito",
        "editDistrict": "Editar distrito",
        "name": "Nombre",
        "boundaries": "Límite",
        "newDistrict": "Nuevo distrito",
        "districtDetail": "Detalle del distrito",
        "updateDistrict": "Actualizar el distrito"
    },
    "place": {
        "addPlace": "Añadir lugar",
        "editPlace": "Editar lugar",
        "isDestination": "Es un destino",
        "isOrigin": "Es un punto de partida",
        "latitude": "Latitud",
        "location": "Ubicación",
        "longitude": "Longitud",
        "name": "Nombre",
        "newPlace": "Nuevo lugar",
        "parkedVehicleWithCount": "{{count}} vehículo estacionado ({{capacity}} espacios)",
        "parkedVehicleWithCount_plural": "{{count}} vehículos estacionados ({{capacity}} espacios)",
        "parkingCapacity": "Número de plazas de aparcamiento público",
        "partyWithCount": "{{count}} grupo",
        "partyWithCount_plural": "{{count}} grupos",
        "personWithCount": "{{count}} persona",
        "personWithCount_plural": "{{count}} gente",
        "placeDetail": "Detalle del lugar",
        "timezone": "Zona horaria",
        "timezonePlaceholder": "Elegir la zona horaria de IANA",
        "updatePlace": "Actualizar lugar"
    },
    "uom": {
        "km": "kilómetro",
        "km_plural": "kilómetros",
        "kmWithCount": "{{count}} km",
        "mi": "milla",
        "mi_plural": "millas",
        "miWithCount": "{{count}} milla",
        "miWithCount_plural": "{{count}} millas"
    },
    "user": {
        "addUser": "Agregar usuario",
        "newUser": "Nuevo usuario",
        "distanceUnitOfMeasure": "Unidad de medida preferida para distancias",
        "editUser": "Editar perfil",
        "enableGeolocation": "Utilizar la ubicación del dispositivo",
        "updateUser": "Actualizar perfil",
        "profile": "Perfil",
        "roles": "Funcicones",
        "rolesPlaceholder": "Seleccionar roles de usuario con privilegios",
        "yourProfile": "Tu perfil"
    },
    "visit": {
        "From": "De",
        "To": "A",
        "addVisit": "Añadir visita",
        "afterCheckIn": "Debe ser después del check-in",
        "afterLeft": "Debe menos de un día antes del inicio programado",
        "beforeFuture": "No debe estar en el futuro",
        "beforeRight": "Debe ser menos de un día después del final programado",
        "checkedInDate": "Fecha de entrada",
        "checkedInTime": "Hora de llegada",
        "checkIn": "Factuar",
        "checkedOutDate": "Fecha de salida",
        "checkedOutTime": "Hora de salida",
        "checkOut": "Dejar",
        "destinations": "Destinos",
        "destinationsPlaceholder": "Seleccionar sus destinos(s)",
        "detailHeading": "Detalle de la visita",
        "durationNights": "Duración en las noches",
        "editVisit": "Editar visita",
        "groupSize": "Número de personas en grupo",
        "origin": "Punto inicial",
        "originPlaceholder": "Seleccione su punto de partida",
        "parkedVehicles": "Número de vehículos estacionados en el punto de partida",
        "startOnDate": "Fecha de visita",
        "startOnTime": "Hora de comienzo",
        "visit": "Visita",
        "visitPlaceholder": "Nombre de visita"
    },
    "AppNavbar": {
        "admin": "Administración",
        "brand": "Visitor Use Management Tool",
        "checkingCredentials": "Comprobar las credenciales",
        "continue": "Continuar",
        "home": "Página principal",
        "language": "Idioma",
        "login": "Login",
        "logout": "Cierre de sesión",
        "advisories": "Consultivos",
        "districts": "Distritos",
        "places": "Lugares",
        "register": "Registrar",
        "users": "Usuarios",
        "forgotPassword": "¿Olvidó su contraseña?",
        "resetPassword": "Restablecer la contraseña",
        "resetPasswordComplete": "Su contraseña se restableció",
        "resetPasswordCompleteMessage": "Su contraseña se restableció y ahora ha iniciado sesión.",
        "resetPasswordConfirmInstructions": "Verificaste tu identidad. Ahora puede restablecer su contraseña.",
        "resetPasswordInstructions": "Proporcione la dirección de correo electrónico con la que se registró y le enviaremos un enlace que puede utilizar para restablecer su contraseña.",
        "resetPasswordRequestSent": "Correo electrónico de restablecimiento de contraseña enviado",
        "resetPasswordRequestSentTo": "Se envió un correo electrónico con instrucciones para restablecer su contraseña {{email}}",
        "resubmitPasswordResetRequest": "Enviar otra solicitud de restablecimiento de contraseña",
        "welcome": "Bienvenido, {{name}}"
    }
}

export default locale