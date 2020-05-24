// Complete the rotLeft function below.
function rotLeft(a, d) {
    const firstDelements = a.slice(0,d);
    a.splice(0,d);
    return [...a, ...firstDelements];
}