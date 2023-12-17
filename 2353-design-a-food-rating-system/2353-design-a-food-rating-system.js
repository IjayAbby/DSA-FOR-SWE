/**
 * @param {string[]} foods
 * @param {string[]} cuisines
 * @param {number[]} ratings
 */
var FoodRatings = function(foods, cuisines, ratings) {
    this.foods=foods;
    this.cuisines=cuisines;
    this.ratings=ratings;  
};

/** 
 * @param {string} food 
 * @param {number} newRating
 * @return {void}
 */
FoodRatings.prototype.changeRating = function(food, newRating) {
        for(let i=0; i<this.foods.length; i++){
        if(food == this.foods[i]){
            this.ratings[i] = newRating;
        }
    }
};

/** 
 * @param {string} cuisine
 * @return {string}
 */
FoodRatings.prototype.highestRated = function(cuisine) {
       let highestRated = 0;
    let name = [];
    for(let i=0; i<this.cuisines.length; i++){
        if(this.cuisines[i] == cuisine && highestRated<=this.ratings[i]){
            if (highestRated < this.ratings[i]) {
                highestRated = this.ratings[i];
                name = [this.foods[i]];
            } else {
                name.push(this.foods[i]);
            }
        }
    }
    name.sort();
    return name[0]; 
};

/** 
 * Your FoodRatings object will be instantiated and called as such:
 * var obj = new FoodRatings(foods, cuisines, ratings)
 * obj.changeRating(food,newRating)
 * var param_2 = obj.highestRated(cuisine)
 */