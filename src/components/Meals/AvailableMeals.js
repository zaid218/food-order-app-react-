import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Butter Chicken",
    description: "Creamy Chicken Curry",
    price: 220.99,
  },
  {
    id: "m2",
    name: "Paneer Tikka",
    description: "Grilled Cheese Cubes",
    price: 110,
  },
  {
    id: "m3",
    name: "Dal Makhani",
    description: "Creamy Lentil Dish",
    price: 90.25,
  },
  {
    id: "m4",
    name: "Masala Dosa",
    description: "Spiced Rice Crepe",
    price: 80.1,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
