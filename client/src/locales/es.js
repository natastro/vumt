const locale = {
    "translation": {
        "addTranslation": "Add translation",
        "createdAt": "Created",
        "distanceAway": "{{distance}} away",
        "distanceFromPlace": "{{distance}} from {{place}}",
        "language": "Language",
        "mustBeLoggedIn": "You must log in to use this system.",
        "selectLanguage": "Select language",
        "timesAreLocal": "Times are in local {{timezone}} time.",
        "translation": "Translation",
        "translations": "Translations",
        "updatedAt": "Updated"
    },
    "commonForms": {
        "cancel": "Cancel",
        "country": "Country of residence",
        "countryPlaceholder": "Select country",
        "detail": "Detail",
        "edit": "Edit",
        "email": "Email",
        "emailPlaceholder": "me@example.com",
        "firstName": "First name",
        "lastName": "Last name",
        "no": "No",
        "password": "Password",
        "phone": "Phone",
        "postalCode": "Postal code",
        "postalCodeInvalid": "Must be correctly formatted postal code for {{country}}",
        "province": "State, province, or territory",
        "provincePlaceholder": "Select state, province, or territory",
        "remove": "Remove",
        "invalidRequired": "Cannot be blank",
        "mustBePhone": "Must be correctly formatted phone number",
        "mustBeWholeNumber": "Must be a whole number",
        "mustBeAtLeast": "Must be at least {{min}}",
        "mustBeAtMost": "Must not exceed {{max}}",
        "yes": "Yes"
    },
    "error": {
        "duplicateKey": "Must be unique and `{{value}}` is already used",
        "AUTH_EXPIRED_PASSWORD_RESET_TOKEN": "The password reset request is too old to be processed.  Please submit a new password reset request.",
        "AUTH_EXPENDED_PASSWORD_RESET_TOKEN": "This password reset request was already used to reset the password.  Please submit a new password reset request.",
        "AUTH_INVALID_PASSWORD": "Supplied password is not valid.",
        "AUTH_INVALID_USER_TOKEN": "Invalid user token.",
        "AUTH_MISSING_EMAIL": "Email is missing.",
        "AUTH_MISSING_PASSWORD":  "Password is missing.",
        "AUTH_NEED_ROLE": "You must have one of the following roles to access this resource: {{roles}}.",
        "AUTH_NO_USER_TOKEN": "No user token provided",
        "AUTH_NO_PASSWORD_RESET_TOKEN": "The specified password reset request token does not exist for the specified user",
        "AUTH_NO_USER": "No user is registered with the specified email",
        "AUTH_REQUIRED": "You must log in to perform this action.",
        "UNAUTHORIZED": "You may not perform the requested action."
    },
    "advisory": {
        "addAdvisory": "Add advisory",
        "addPrompt": "Add prompt",
        "editAdvisory": "Edit advisory",
        "label": "Label",
        "prompt": "Prompt",
        "prompts": "Prompts",
        "removePrompt": "Remove prompt",
        "startOnDate": "Start date",
        "startOnTime": "Start time",
        "endOnDate": "End date",
        "endOnTime": "End time",
        "districts": "Districts",
        "districtsPlaceholder": "Specify districts to which advisory is restricted",
        "contexts": "Contexts",
        "contextsPlaceholder": "Specify contexts in which advisory should be displayed",
        "newAdvisory": "New advisory",
        "advisoryDetail": "Advisory detail",
        "updateAdvisory": "Update advisory",
        "mustBeBeforeEndOn": "Must be before end date"
    },
    "advisoryContext": {
        'checkin': "check in",
        'checkout': "check out",
        'editVisit': "edit visit",
        'newVisit': "new visit",
        'register': "register user",
        'unauthenticated': "unauthenticated user"
    },
    "district": {
        "addDistrict": "Add district",
        "editDistrict": "Edit district",
        "name": "Name",
        "boundaries": "Boundaries",
        "newDistrict": "New district",
        "districtDetail": "District detail",
        "updateDistrict": "Update district"
    },
    "place": {
        "addPlace": "Add place",
        "editPlace": "Edit place",
        "isDestination": "Is a destination",
        "isOrigin": "Is a starting point",
        "latitude": "Latitude",
        "location": "Location",
        "longitude": "Longitude",
        "name": "Name",
        "newPlace": "New place",
        "parkedVehicleWithCount": "{{count}} parked vehicle ({{capacity}} spaces)",
        "parkedVehicleWithCount_plural": "{{count}} parked vehicles ({{capacity}} spaces)",
        "parkingCapacity": "Number of public parking spots",
        "partyWithCount": "{{count}} party",
        "partyWithCount_plural": "{{count}} parties",
        "personWithCount": "{{count}} person",
        "personWithCount_plural": "{{count}} people",
        "placeDetail": "Place detail",
        "timezone": "Timezone",
        "timezonePlaceholder": "Choose IANA timezone",
        "updatePlace": "Update place"
    },
    "uom": {
        "km": "kilometer",
        "km_plural": "kilometers",
        "kmWithCount": "{{count}} km",
        "mi": "mile",
        "mi_plural": "miles",
        "miWithCount": "{{count}} mile",
        "miWithCount_plural": "{{count}} miles"
    },
    "user": {
        "addUser": "Add user",
        "newUser": "New user",
        "distanceUnitOfMeasure": "Preferred unit of measure for distances",
        "editUser": "Edit profile",
        "enableGeolocation": "Use device location",
        "updateUser": "Update profile",
        "profile": "Profile",
        "roles": "Roles",
        "rolesPlaceholder": "Select privileged user roles",
        "yourProfile": "Your profile"
    },
    "visit": {
        "From": "From",
        "To": "To",
        "addVisit": "Add visit",
        "afterCheckIn": "Must be after check in",
        "afterLeft": "Must less than a day before the scheduled start",
        "beforeFuture": "Must not be in the future",
        "beforeRight": "Must be less than a day after the scheduled end",
        "checkedInDate": "Check in date",
        "checkedInTime": "Check in time",
        "checkIn": "Check in",
        "checkedOutDate": "Check out date",
        "checkedOutTime": "Check out time",
        "checkOut": "Check out",
        "destinations": "Destinations",
        "destinationsPlaceholder": "Select your destination(s)",
        "detailHeading": "Visit detail",
        "durationNights": "Duration in nights",
        "editVisit": "Edit visit",
        "groupSize": "Number of people in group",
        "origin": "Starting point",
        "originPlaceholder": "Select your starting point",
        "parkedVehicles": "Number of vehicles parked at starting point",
        "startOnDate": "Date of visit",
        "startOnTime": "Start time",
        "visit": "Visit",
        "visitPlaceholder": "Visit name"
    },
    "AppNavbar": {
        "admin": "Administration",
        "brand": "Visitor Use Management Tool",
        "checkingCredentials": "Checking credentials",
        "continue": "Continue",
        "home": "Home",
        "language": "Language",
        "login": "Login",
        "logout": "Logout",
        "advisories": "Advisories",
        "districts": "Districts",
        "places": "Places",
        "register": "Register",
        "users": "Users",
        "forgotPassword": "Forgot your password?",
        "resetPassword": "Reset your password",
        "resetPasswordComplete": "Your password was reset",
        "resetPasswordCompleteMessage": "Your password was reset and you are now logged in.",
        "resetPasswordConfirmInstructions": "You verified your identity. You may now reset your password.",
        "resetPasswordInstructions": "Provide the email address with which you registered and we will send a link you can use to reset your password.",
        "resetPasswordRequestSent": "Password Reset Email Sent",
        "resetPasswordRequestSentTo": "An email with instructions to reset your password was sent to {{email}}",
        "resubmitPasswordResetRequest": "Submit another password reset request",
        "welcome": "Welcome, {{name}}"
    }
}

export default locale