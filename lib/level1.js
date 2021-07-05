module.exports = {
  length: function (text) {
    return text.length;
  },

  circleSurface: function (rayon) {
    return Math.round(Math.PI * rayon ** 2);
  },

  rectangleSurface: function (long, larg) {
    return long * larg;
  },

  weekDay: function (day) {
    if (day === 1) {
      return "Monday";
    } else if (day === 2) {
      return "Tuesday";
    } else if (day === 3) {
      return "Wednesday";
    } else if (day === 4) {
      return "Thursday";
    } else if (day === 5) {
      return "Friday";
    } else if (day === 6) {
      return "Saturday";
    } else if (day === 7) {
      return "Sunday";
    } else if (day > 7) {
      return "....Really ?";
    }
  },
};
