/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const oldColor = image[sr][sc];
    if(oldColor === color) return image;
    fill(image, sr, sc, oldColor, color);
    return image;
};

function fill(image, sr, sc, oldColor, color) {
    if(sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] !== oldColor)
    return;
    image[sr][sc] = color;
    fill(image, sr + 1, sc, oldColor, color)
    fill(image, sr - 1, sc, oldColor, color)
    fill(image, sr, sc + 1, oldColor, color)
    fill(image, sr, sc - 1, oldColor, color)
}
