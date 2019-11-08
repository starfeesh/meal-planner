
const _meals = {
  "2019-11-04": {
    "breakfast": "Granola with a banana and some berries and peanut butter and chicken nuggets and beef roast",
    "lunch": "Sandwich with mayo and eggs and sausage and cheese and crab",
    "dinner": "Meatloaf with carrots and corn and chicken and beef and salad",
    "snacks": "Slimjames and chips and soda with candy and chocolate",
  },
  "2019-11-05": {
    "breakfast": "Granola with a banana and some nuggets and beef roast",
    "lunch": "Sandwich sausage and cheese and crab",
    "dinner": "Meatloaf with carrots and corn and chicken and beef and salad",
    "snacks": "Slimjames and candy and chocolate",
  }
}

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