module.exports = {
  inversion: function (array) {
    return array.reverse();
  },

  convert: function (array) {
    return array.join(" ");
  },

  deleteFirstLast: function (array) {
    array.pop();
    array.shift();

    return array;
  },

  deleteOne: function (array) {
    const index = array.indexOf("not");
    if (index > -1) {
      array.splice(index, 1);
    }
    return array.join(" ");
  },

  pair: function (number) {
    let response = [];
    number.forEach(function (element) {
      if (element % 2 == 0) {
        response.push(element);
      }
    });

    return response;
  },
};
