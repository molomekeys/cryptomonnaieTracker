import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import Home from './components/Home'
function App() {
  const [count, setCount] = useState(0)
const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
    <div className="App">
  
      <Home />

      
    </div>
    </QueryClientProvider>
  )
}

export default App
