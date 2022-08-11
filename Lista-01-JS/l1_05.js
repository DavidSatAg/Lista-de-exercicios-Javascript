function transformar_tempertura(temperatura_em_celsius) {
    temperatura_em_fahrenheit = 9 / 5 * temperatura_em_celsius + 32
    return temperatura_em_fahrenheit
}
console.log(`A temperatura em Farenheit é: ${transformar_tempertura(32)}°F`)