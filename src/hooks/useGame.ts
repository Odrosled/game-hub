import useSingleData from "./useSingleData";
import { Game } from "./useGames";

const useGame = ( id: string) => 
  useSingleData<Game>(`/games/${id}`, { params : {}},[id])

export default useGame