import axios from "axios";
import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import HomeStyle from "./Home.style";

const Home = () => {
  const [query, setQuery] = useState("pizza");
  const [meal, setMeal] = useState("lunch");
  const [recipes, setRecipes] = useState();
  const APP_ID = "48aa453c";
  const APP_KEY = "aa870390df742d010558b1d0598cfd21";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  const getData = async () => {
    try {
      const { data } = await axios.get(url);
      console.log(data.hits);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>
<Header setQuery={setQuery} />
  </div>;
};

export default Home;
