import { Card, MainContainer, Header, Image, Button } from "./Cards.style";
import defaultImage from "../../assets/default-image.jpg";
import {useNavigate} from "react-router-dom"

const Cards = ({recipes}) => {
  const navigate=useNavigate();
  return (
    <div>
      <MainContainer wrap="wrap">
        {recipes.map(({recipe},index)=>(
        <Card key={index}>
          <Header>{recipe.label} </Header> 
          <Image src={recipe.image || defaultImage} />
          <Button onClick={()=>navigate("detail",{state:recipe})}>View More</Button>
          </Card>))}

      </MainContainer>
    </div>
  )
}

export default Cards