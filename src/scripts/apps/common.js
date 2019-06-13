const Common = new function () {
    this.GetRandomInt = function(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
};
export default Common;