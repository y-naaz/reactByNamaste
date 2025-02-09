const resObj = {
    "restaurants": [
      {
        "id": 1,
        "name": "The Gourmet Kitchen",
        "cuisine": ["Italian", "Continental"],
        "rating": 4.5,
        "address": "123 Foodie Lane, Springfield",
        "deliveryTime": "30 mins",
        "priceForTwo": "₹500",
        "offers": ["20% off on orders above ₹300", "Free delivery on weekends"],
        "menu": [
          {
            "category": "Pizza",
            "items": [
              { "id": 101, "itemName": "Margherita Pizza", "price": "₹299", "isVeg": true },
              { "id": 102, "itemName": "Pepperoni Pizza", "price": "₹399", "isVeg": false }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "Spice Haven",
        "cuisine": ["Indian", "Mughlai"],
        "rating": 4.7,
        "address": "456 Curry Street, Mumbai",
        "deliveryTime": "40 mins",
        "priceForTwo": "₹600",
        "offers": ["15% off on first order", "Buy 1 Get 1 Free on Biryani"],
        "menu": [
          {
            "category": "Biryani",
            "items": [
              { "id": 201, "itemName": "Hyderabadi Chicken Biryani", "price": "₹399", "isVeg": false },
              { "id": 202, "itemName": "Veg Dum Biryani", "price": "₹349", "isVeg": true }
            ]
          }
        ]
      },
      {
        "id": 3,
        "name": "Sushi Express",
        "cuisine": ["Japanese"],
        "rating": 4.8,
        "address": "789 Sushi Lane, Tokyo",
        "deliveryTime": "35 mins",
        "priceForTwo": "₹800",
        "offers": ["10% off on sushi platters"],
        "menu": [
          {
            "category": "Sushi",
            "items": [
              { "id": 301, "itemName": "Salmon Nigiri", "price": "₹499", "isVeg": false },
              { "id": 302, "itemName": "Avocado Roll", "price": "₹399", "isVeg": true }
            ]
          }
        ]
      },
      {
        "id": 4,
        "name": "Taco Fiesta",
        "cuisine": ["Mexican"],
        "rating": 4.6,
        "address": "555 Tex-Mex Street, Mexico City",
        "deliveryTime": "25 mins",
        "priceForTwo": "₹450",
        "offers": ["Free nachos with orders above ₹500"],
        "menu": [
          {
            "category": "Tacos",
            "items": [
              { "id": 401, "itemName": "Chicken Tacos", "price": "₹299", "isVeg": false },
              { "id": 402, "itemName": "Veggie Tacos", "price": "₹279", "isVeg": true }
            ]
          }
        ]
      },
      {
        "id": 5,
        "name": "Dragon Wok",
        "cuisine": ["Chinese"],
        "rating": 4.4,
        "address": "888 Dragon Road, Beijing",
        "deliveryTime": "30 mins",
        "priceForTwo": "₹550",
        "offers": ["Flat ₹100 off on all noodles"],
        "menu": [
          {
            "category": "Noodles",
            "items": [
              { "id": 501, "itemName": "Hakka Noodles", "price": "₹299", "isVeg": true },
              { "id": 502, "itemName": "Chicken Manchurian Noodles", "price": "₹349", "isVeg": false }
            ]
          }
        ]
      },
      {
        "id": 6,
        "name": "Burger Barn",
        "cuisine": ["American"],
        "rating": 4.3,
        "address": "777 Burger Avenue, New York",
        "deliveryTime": "20 mins",
        "priceForTwo": "₹400",
        "offers": ["Buy 1 Get 1 Free on Cheeseburgers"],
        "menu": [
          {
            "category": "Burgers",
            "items": [
              { "id": 601, "itemName": "Cheeseburger", "price": "₹249", "isVeg": false },
              { "id": 602, "itemName": "Veggie Burger", "price": "₹229", "isVeg": true }
            ]
          }
        ]
      },
      {
        "id": 7,
        "name": "Green Bowl",
        "cuisine": ["Healthy", "Salads"],
        "rating": 4.9,
        "address": "222 Wellness Street, Los Angeles",
        "deliveryTime": "25 mins",
        "priceForTwo": "₹600",
        "offers": ["Free detox drink with every salad"],
        "menu": [
          {
            "category": "Salads",
            "items": [
              { "id": 701, "itemName": "Quinoa Salad", "price": "₹399", "isVeg": true },
              { "id": 702, "itemName": "Caesar Salad", "price": "₹349", "isVeg": true }
            ]
          }
        ]
      },
      {
        "id": 8,
        "name": "Delhi Tandoor",
        "cuisine": ["North Indian"],
        "rating": 4.5,
        "address": "999 Spice Market, Delhi",
        "deliveryTime": "35 mins",
        "priceForTwo": "₹700",
        "offers": ["15% off on Tandoori Platters"],
        "menu": [
          {
            "category": "Tandoor",
            "items": [
              { "id": 801, "itemName": "Tandoori Chicken", "price": "₹499", "isVeg": false },
              { "id": 802, "itemName": "Paneer Tikka", "price": "₹399", "isVeg": true }
            ]
          }
        ]
      },
      {
        "id": 9,
        "name": "Mediterranean Delights",
        "cuisine": ["Mediterranean"],
        "rating": 4.6,
        "address": "333 Olive Street, Athens",
        "deliveryTime": "30 mins",
        "priceForTwo": "₹650",
        "offers": ["Flat ₹100 off on Hummus Platters"],
        "menu": [
          {
            "category": "Mezze",
            "items": [
              { "id": 901, "itemName": "Hummus & Pita", "price": "₹299", "isVeg": true },
              { "id": 902, "itemName": "Falafel Wrap", "price": "₹349", "isVeg": true }
            ]
          }
        ]
      },
      {
        "id": 10,
        "name": "Sweet Treats",
        "cuisine": ["Desserts"],
        "rating": 4.8,
        "address": "444 Dessert Lane, Paris",
        "deliveryTime": "20 mins",
        "priceForTwo": "₹450",
        "offers": ["Buy 2 Get 1 Free on Pastries"],
        "menu": [
          {
            "category": "Cakes & Pastries",
            "items": [
              { "id": 1001, "itemName": "Chocolate Truffle Cake", "price": "₹399", "isVeg": true },
              { "id": 1002, "itemName": "Strawberry Cheesecake", "price": "₹349", "isVeg": true }
            ]
          }
        ]
      }
    ]
  };
export default resObj;