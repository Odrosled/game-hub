import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import {
  Container,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import StarRatings from "react-star-ratings";
import dayjs from "dayjs";
import PlatformIconList from "./PlatformIconList";
import Tag from "./Tag";

const GamePage = () => {
  const params = useParams<{ gameid: string }>();

  const { data, error, isLoading } = useGame(params?.gameid ?? "");

  console.log(data);

  if (!data) return <Text>Loading...</Text>;

  return (
    <Container paddingY={10} maxW="1200px">
      <VStack gap={10}>
        <VStack gap={1}>
          <Heading>{data.name}</Heading>
          <Text>Released on: {dayjs(data.released).format("DD MMM YYYY")}</Text>
          <StarRatings
            rating={data.rating}
            starRatedColor="white"
            starEmptyColor="black"
            starDimension="25px"
            numberOfStars={5}
            name="rating"
          />
        </VStack>
        <Image
          borderRadius={20}
          objectFit="cover"
          src={data?.background_image}
        />
        <PlatformIconList
          platforms={data?.parent_platforms.map((p) => p.platform)}
        />
        <Text
          dangerouslySetInnerHTML={{ __html: data?.description ?? "" }}
        ></Text>
        <HStack gap={2} flexWrap="wrap">
          {data.tags.map((tag) => (
            <Tag key={tag.id} tag={tag} />
          ))}
        </HStack>
      </VStack>
    </Container>
  );
};

export default GamePage;
