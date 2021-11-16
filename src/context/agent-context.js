import { createContext, useEffect, useState } from "react";

const initialValue = null;

export const AgentsContext = createContext(initialValue);

export function AgentsProvider(props) {
    const [agents, setAgents] = useState(initialValue);
    const [agentLoading, setagentLoading] = useState(true)

    useEffect(() => {
        fetch("https://6172fc04110a740017222f15.mockapi.io/agents")
            .then((response) => response.json())
            .then((agent) => {
                setAgents(agent)
            })
            .finally(() => setagentLoading(false));
    }, []);

    const value = {
        agents: agents,
        agentLoading: agentLoading
    };

    return (
        <AgentsContext.Provider value= { value } >
            { props.children }
        </AgentsContext.Provider>
  );
}
