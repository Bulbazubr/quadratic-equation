module.exports = function solveEquation(equation) {
  // your implementation
    function splitmulti(source, delimiters) {
        var tempChar = delimiters[0];
        for(var i = 1; i < delimiters.length; i++){
            source = source.split(delimiters[i]).join(tempChar);
        }
        source = source.split(tempChar).map(Number);
        return source;
    }
    equation = equation.replace(/\s/g, '');
    var numbers = splitmulti(equation, ["*x","^2"]);
    var sqrtD = Math.sqrt(numbers[2] * numbers[2] - 4 * numbers[0] * numbers[3]);
    var result = [Math.round((-numbers[2] + sqrtD)/(2 * numbers[0])),Math.round((-numbers[2] - sqrtD)/(2 * numbers[0]))];
    return result[0]<result[1]?result:[result[1],result[0]];
}
