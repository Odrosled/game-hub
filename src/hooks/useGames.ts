import { GameQuery } from "../Home";
import { ITag } from "../components/Tag";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[] //causa design api non ottimale
  metacritic: number;
  rating_top: number;
  description: string;
  description_raw: string;
  platforms: { platform: Platform }[]
  rating: number;
  released: string;
  tags: ITag[];
}

const useGames = (gameQuery: GameQuery) => 
  useData<Game>('/games', { 
    params : { 
      genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id,
      ordering: gameQuery.sortOrder,
      search: gameQuery.searchText,
    }}, 
    [gameQuery])

export default useGames