import { Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const Card = ({ name, title }: { name: string; title: string }) => {
  return (
    <Link
      href={`/subway/${name}`}
      className="p-4 rounded-lg border border-gray-300 my-2 mx-1"
      asChild={true}
    >
      <TouchableOpacity>
        <Text className="text-white font-bold text-center text-lg">{name}</Text>
        <Text className="text-white text-center text-lg">{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default Card;
