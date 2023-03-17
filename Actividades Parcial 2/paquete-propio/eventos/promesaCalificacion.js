function generateRandomScore() {
    // Devuelve una promesa que resuelve con una calificación aleatoria entre 0 y 100
    return new Promise((resolve, reject) => {
        const score = Math.floor(Math.random() * 11);
        if (score >= 0 && score <= 10) {
            resolve(score);
        } else {
            reject(new Error('La calificación generada no está dentro del rango válido.'));
        }
    });
}

generateRandomScore()
    .then(score => {
        console.log(`La calificación del estudiante es: ${score}`);
        if (score >= 6) {
            console.log('El estudiante ha aprobado.');
        } else {
            console.log('El estudiante ha reprobado.');
        }
    })
    .catch(error => console.error(error));