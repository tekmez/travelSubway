import { Text, TouchableOpacity } from "react-native";
import { Link } from "expo-router";

const Card = ({ title }: { title: string }) => {
  return (
    <Link
      href={`/subway/${title}`}
      className="p-4 rounded-lg border border-gray-300 min-w-[30%] my-2 mx-1"
      asChild={true}
    >
      <TouchableOpacity>
        <Text className="text-white font-bold text-center text-lg">
          {title}
        </Text>
      </TouchableOpacity>
    </Link>
  );
};

export default Card;
