import { createContext, useEffect, useState } from "react";

const initialValue = null;

export const PropertiesContext = createContext(initialValue);

export function PropertiesProvider(props) {
  const [properties, setProperties] = useState(initialValue);
  const [isLoading, setisLoading] = useState(true)

  useEffect(() => {
    fetch("https://6172fc04110a740017222f15.mockapi.io/properties")
      .then((response) => response.json())
      .then((property) => {
        setProperties(property)
      })
      .finally(() => setisLoading(false));
  }, []);

  const value = {
    properties: properties,
    loading: isLoading
  };

  return (
    <PropertiesContext.Provider value={value}>
        {props.children}
    </PropertiesContext.Provider>
  );
}
