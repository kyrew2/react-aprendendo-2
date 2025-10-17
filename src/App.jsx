import { useState } from "react";
import { TodoList } from "./components/TodoList";

function App() {
  const [isLogged, setIsLogged] = useState(false);

    const doLogin = () => setIsLogged(true);
      const desLogin = () => setIsLogged(false);

        return (
            <>
                {isLogged ? <div>Seja bem-vindo, usuário! <a href="#" onClick={desLogin}>Clique aqui para desfazer login.</a></div> : <div>Faça seu login, <a href="#" onClick={doLogin}>clique aqui!</a></div>}
                    <TodoList />
                        </>
                          )
                          }

                          export default App
                          