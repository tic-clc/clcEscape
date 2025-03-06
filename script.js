// Reemplaza con tu configuración de Firebase
const firebaseConfig = {

        apiKey: "AIzaSyDPbAuJFLKSGmQKr2rEvU6uHG_E1-6Pllc",
        authDomain: "clcescape.firebaseapp.com",
        databaseURL: "https://clcescape-default-rtdb.firebaseio.com",
        projectId: "clcescape",
        storageBucket: "clcescape.firebasestorage.app",
        messagingSenderId: "801516404485",
        appId: "1:801516404485:web:1217ce421ac2cafbc2c16c"
};

// Inicializa Firebase
const app = firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Obtén referencias a los botones
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

// Agrega listeners a los botones
incrementButton.addEventListener("click", () => {
    // Incrementa el valor en la base de datos
    database.ref("contador").transaction((contador) => {
        return (contador || 0) + 1;
    });
});

decrementButton.addEventListener("click", () => {
    // Decrementa el valor en la base de datos
    database.ref("contador").transaction((contador) => {
        return (contador || 0) - 1;
    });
});