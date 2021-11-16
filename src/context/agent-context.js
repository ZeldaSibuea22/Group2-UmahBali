import { createContext, useEffect, useState } from "react";

const initialValue = null;

export const AgentsContext = createContext(initialValue);

export function AgentsProvider(props) {
    const [agents, setAgents] = useState(initialValue);

    useEffect(() => {
        fetch("https://6172fc04110a740017222f15.mockapi.io/agents")
            .then((response) => response.json())
            .then((agent) => {
                setAgents(agent)
            });
    }, []);

    const value = {
        agents: agents,
    };

    return (
        <AgentsContext.Provider value= { value } >
            { props.children }
        </AgentsContext.Provider>
  );
}
