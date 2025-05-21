import Text from "./components/text"

export default function App() {


  return (
    <div className="flex flex-col gap-2">
      <Text variant="body-md" className="text-pink-base"> hello </Text>
      <Text className="text-pink-base"> hello </Text>
      <Text variant="body-md-bold"> hello </Text>
    </div>
  )
}

