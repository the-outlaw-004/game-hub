import { Grid, GridItem, Show } from '@chakra-ui/react'
function App() {

  return (
    <Grid templateAreas={{
      lg: '"nav nav" "aside main"',
      base: '"nav" "main"'
    }} gap={6}>
      <GridItem area="nav" bg="coral">Nav</GridItem>
      <Show above='lg'>
        <GridItem area="aside" bg="dodgerblue">aside</GridItem>
      </Show>
      <GridItem area="main" bg="gold">Main</GridItem>
    </Grid>
  )
}

export default App
