import axios from "axios";
import { useState, useEffect } from "react";
import Cards from "../../components/cards/Cards";
import Header from "../../components/header/Header";
import  {ImgDiv,HomeImg, HeaderText} from "./Home.style";
import homeSvg from "../../assets/home.svg"; 

const Home = () => {
    const mealType = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [query, setQuery] = useState("egg");
  const [meal, setMeal] = useState(mealType[0]);
  const [recipes, setRecipes] = useState(null);
  const APP_ID = "48aa453c";
  const APP_KEY = "aa870390df742d010558b1d0598cfd21";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
      try {
        const { data } = await axios.get(url);
        setRecipes(data.hits);
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please Enter your meal");
    }
  };

  // useEffect(() => {
  //   getData();
  // }, []);
// console.log(recipes);
  return <div>
<Header setQuery={setQuery} setMeal={setMeal} mealType={mealType} getData={getData} />
{!recipes && (
<ImgDiv>
<HomeImg src={homeSvg} />
</ImgDiv>
)}
{recipes?.length===0 && (
  <HeaderText>The Food can not be found</HeaderText>
)}
{recipes?.length>0 && <Cards recipes={recipes} />}
  </div>;
};

export default Home;
