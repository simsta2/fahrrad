document.addEventListener('DOMContentLoaded', function () {
    const registrationForm = document.getElementById('registrationForm');
    const addRouteButton = document.getElementById('addRoute');

    addRouteButton.addEventListener('click', function () {
        const routesDiv = document.getElementById('routes');

        const routeInput = document.createElement('input');
        routeInput.type = 'text';
        routeInput.placeholder = 'Route';
        routeInput.required = true;

        const distanceInput = document.createElement('input');
        distanceInput.type = 'number';
        distanceInput.placeholder = 'Distance (km)';
        distanceInput.required = true;

        const frequencyInput = document.createElement('input');
        frequencyInput.type = 'number';
        frequencyInput.placeholder = 'Frequency per week';
        frequencyInput.required = true;

        routesDiv.appendChild(routeInput);
        routesDiv.appendChild(distanceInput);
        routesDiv.appendChild(frequencyInput);
    });

    registrationForm.addEventListener('submit', function (event) {
        event.preventDefault();

        // Hier können Sie die Daten erfassen und zum Backend senden
        // Zum Beispiel mit Fetch API
        const formData = new FormData(registrationForm);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        console.log(data); // An dieser Stelle können Sie die Daten zur weiteren Verarbeitung senden

        // Hier können Sie die Weiterleitung zur Home-Seite implementieren
    });

    const loginButton = document.getElementById('login');
    loginButton.addEventListener('click', function () {
        // Hier können Sie die Weiterleitung zur Login-Seite implementieren
    });
});
