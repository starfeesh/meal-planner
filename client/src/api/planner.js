
const _meals = {
  "2019-11-10": {
    "breakfast": {
      title: "Granola with a banana and some nuggets and beef roast",
    },
    "lunch": {
      title: "Sandwich sausage and cheese and crab",
    },
    "dinner": {
      title: "Meatloaf with carrots and corn and chicken and beef and salad"
    },
    "snacks": {
      title: "Slimjames and candy and chocolate"
    },
  },
  "2019-11-11": {
    "breakfast": {
      title: "Granola with a banana and some nuggets and beef roast",
    },
    "lunch": {
      title: "Sandwich sausage and cheese and crab",
    },
    "dinner": {
      title: "Meatloaf with carrots and corn and chicken and beef and salad"
    },
    "snacks": {
      title: "Slimjames and candy and chocolate"
    },
  },
  "2019-11-12": {
    "breakfast": {
      title: "Granola with a banana and some nuggets and beef roast",
    },
    "lunch": {
      title: "Sandwich sausage and cheese and crab",
    },
    "dinner": {
      title: "Meatloaf with carrots and corn and chicken and beef and salad"
    },
    "snacks": {
      title: "Slimjames and candy and chocolate"
    },
  },
  "2019-11-13": {
    "breakfast": {
      title: "Granola with a banana and some nuggets and beef roast",
    },
    "lunch": {
      title: "Sandwich sausage and cheese and crab",
    },
    "dinner": {
      title: "Meatloaf with carrots and corn and chicken and beef and salad"
    },
    "snacks": {
      title: "Slimjames and candy and chocolate"
    },
  },
  "2019-11-14": {
    "breakfast": {
      title: "xyz",
    },
    "lunch": {
      title: "",
    },
    "dinner": {
      title: ""
    },
    "snacks": {
      title: ""
    },
  },
  "2019-11-15": {
    "breakfast": {
      title: "Granola with a banana and some nuggets and beef roast",
    },
    "lunch": {
      title: "Sandwich sausage and cheese and crab",
    },
    "dinner": {
      title: "Meatloaf with carrots and corn and chicken and beef and salad"
    },
    "snacks": {
      title: "Slimjames and candy and chocolate"
    },
  },
  "2019-11-16": {
    "breakfast": {
      title: "Granola with a banana and some nuggets and beef roast",
    },
    "lunch": {
      title: "Sandwich sausage and cheese and crab",
    },
    "dinner": {
      title: "Meatloaf with carrots and corn and chicken and beef and salad"
    },
    "snacks": {
      title: "Slimjames and candy and chocolate"
    },
  },
  "2019-11-17": {
    "breakfast": {
      title: "Granola with a banana and some nuggets and beef roast",
    },
    "lunch": {
      title: "",
    },
    "dinner": {
      title: "Meatloaf with carrots and corn and chicken and beef and salad"
    },
    "snacks": {
      title: "Slimjames and candy and chocolate"
    },
  }
}
/*
const _meals = {
  13: {
    date: "2019-11-04",
    meal: "breakfast",
    title: "Granola with a banana and some berries and peanut butter and chicken nuggets and beef roast"
  },
  14: {
    date: "2019-11-04",
    meal: "lunch",
    title: "Granola with a banana and some berries and peanut butter and chicken nuggets and beef roast"
  },
  15: {
    date: "2019-11-05",
    meal: "dinner",
    title: "Granola with a banana and some berries and peanut butter and chicken nuggets and beef roast"
  }
}*/



const _mealTypes = [
  {
    "title": "breakfast",
    "id": 0,
    "color": '#AD7DE2',
    "class": 'accent-1-text',
    "active": false
  },
  {
    "title": "lunch",
    "id": 1,
    "color": '#C474BD',
    "class": 'accent-2-text',
    "active": false
  },
  {
    "title": "dinner",
    "id": 2,
    "color": '#DD6A95',
    "class": 'accent-3-text',
    "active": false
  },
  {
    "title": "snacks",
    "id": 3,
    "color": '#EC6070',
    "class": 'accent-4-text',
    "active": false
  }
]
export default {
  getMeals (callback) {
    setTimeout(() => callback(_meals), 100)
  },
  getMealTypes (callback) {
    setTimeout(() => callback(_mealTypes), 100)
  }
}