import client from "./client";
import { useQuery, UseQueryResult } from "react-query";


export const getRecipes = async (type: string) => {
    const url = `/recipes/random`;
    const { data } = await client.get(url, {
        params: {
            number: 4,
            tags: type,
        },
    });
    const { recipes } = data;
    return recipes;
};
interface RecipeProps {
    resetOnWindowFocus?: boolean;
}

export default function useRecipes(type: string, name: string): UseQueryResult<any> {
    return useQuery([name], () => getRecipes(type));
}