import client from "./client";
import { useQuery, UseQueryResult } from "react-query";


export const getRecipes = async (categories: string) => {
    const url = `/recipes/random`;
    const { data } = await client.get(url, {
        params: {
            number: 4,
            tags: categories,
        },
    });
    const { recipes } = data;
    return recipes;
};

export default function useRecipes(nameCategory: string): UseQueryResult<any> {
    return useQuery([nameCategory], () => getRecipes(nameCategory));
}