import { memo, useCallback, useState } from "react";
import { View, Text, Button } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context";

const listdata = [
  { name: "Ujjwal", id: "1" },
  { name: "Ujjwal1", id: "2" },
  { name: "Ujjwal2", id: "3" },
  { name: "Ujjwal3", id: "4" },
  { name: "Ujjwal4", id: "5" },
  { name: "Ujjwal5", id: "6" }
]


const Card = memo(({ listItem, handleDelete }: { listItem: { name: string; id: string }; handleDelete: (id: string) => void }) => {
  console.log("render", listItem.id)
  return (
    <View>
      <Text className="text-2xl">{listItem.name}</Text>
    </View>
  )
})
export default function App() {
  const [list, setList] = useState(listdata)
  const handleDelete = (id: string) => {
    setList((prev) => prev.filter((item) => item.id !== id));
  }
  return (
    <SafeAreaView className="flex-1">
      <View>
        {list.map((listItem) => (
          <Card key={listItem.id} listItem={listItem} handleDelete={handleDelete} />//it should use both use callback and use memo it we are passinfg the both value and 
        ))}
        <Button title="delete1" onPress={() => { handleDelete("1") }} />
        <Button title="delete2" onPress={() => { handleDelete("2") }} />
        <Button title="delete3" onPress={() => { handleDelete("3") }} />
        <Button title="delete4" onPress={() => { handleDelete("4") }} />
        <Button title="delete5" onPress={() => { handleDelete("5") }} />
        <Button title="delete6" onPress={() => { handleDelete("6") }} />
      </View>
    </SafeAreaView>
  )
}