import HeaderStyle, {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./Header.style";

const Header = ({ setQuery ,setMeal,mealType,getData}) => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    getData()

  }
  return (
    <HeaderContainer>
      <MainHeader>Recipe App</MainHeader>
      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button type="submit">SEARCH</Button>
        <Select onChange={(e)=>setMeal(e.target.value)} name="mealType" id="mealType">
          {mealType.map((meal,index)=>{
            return(
              <option key={index} value="meal">{meal.toLowerCase()} </option>
            )
          })}
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
