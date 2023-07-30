import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Butter Chicken',
        description: 'Creamy Chicken Curry',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Paneer Tikka',
        description: 'Grilled Cheese Cubes',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Dal Makhani',
        description: 'Creamy Lentil Dish',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Masala Dosa',
        description: 'Spiced Rice Crepe',
        price: 18.99,
    }
];
const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((meal) => (
        <MealItem key={meal.id} meal={meal} />
    ))
    return (

        <section className={classes.meals}>
            <Card className=''>
                <ul>{mealsList}</ul>
            </Card>
        </section>

    );
};

export default AvailableMeals;
