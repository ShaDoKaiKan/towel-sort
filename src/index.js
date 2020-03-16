
module.exports = function towelSort (matrix) {
    let result = [];
    if (typeof matrix === 'undefined') {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            for (let u = 0; u < matrix[i].length; u++) {
                result.push(matrix[i][u]);
            }
        } else {
            for (let u = matrix[i].length-1; 0 <= u; u--) {
                result.push(matrix[i][u]);
            }
        }
        
        
    }
    return result;
}
