import CardsStyle, { Card, MainContainer,Header } from "./Cards.style";

const Cards = ({recipes}) => {
  return (
    <div>
      <MainContainer wrap="wrap">
        {recipes.map(({recipe},index)=>(
        <Card key="index">
          <Header>{recipe.label} </Header> 
          </Card>))}

      </MainContainer>
    </div>
  )
}

export default Cards