import { NavigationContainer } from "@react-navigation/native"
import MainNavigation from "./src/navigation"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient} >
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </QueryClientProvider>
  )
}

export default App;