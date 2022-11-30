export const useRandomRating = (min: number, max: number, dec: number) => {
    var precision = Math.pow(10, dec);
    min = min * precision;
    max = max * precision;
    const value = (Math.random() * (max - min + 1) + min) / precision;
    return Number.parseFloat((value).toFixed(dec));
}
