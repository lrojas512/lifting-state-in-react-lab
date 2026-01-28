// src/components/BurgerStack/BurgerStack.jsx


const BurgerStack = ({stack, removeFromStack }) => {
  return (
    <>
    {stack.length === 0 ?(
        <p>No ingredients yet!</p>
    ) : (
        <ul>
            {stack.map((ingredient, index) => (
                <li key={index}
                style ={{backgroundColor: ingredient.color}}
                >
                    {ingredient.name}
                    <button onClick= {()=> removeFromStack(index)}>X</button>
                </li>
            ))}
        </ul>
    )}
    </>
  )
};



export default BurgerStack;
