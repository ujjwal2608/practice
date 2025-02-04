import { SafeAreaView } from 'react-native-safe-area-context';
import React, { cloneElement, ReactNode, useState } from 'react'
import { Text, View } from 'react-native'
interface Product {
  title: string
}
const products = [
  { title: "phone" },
  { title: "tv" },
  { title: "radio" },
]
const Item = ({ title, isMark }: { title: string, isMark?: boolean }) => {
  return (
    <View className={`px-3 py-2 border rounded-lg ${isMark ? 'bg-red-400 text-white' : ''}`}>
      <Text className='text-2xl'>{title}</Text>
    </View>
  )
}
const List = ({ children }: { children: ReactNode }) => {
  const [selectedIndex, setSelectedindex] = useState<number>(1)
  console.log(selectedIndex)
  return (
    <View className='gap-2'>
      {React.Children.map(children,(child, index) =>
        cloneElement(child as React.ReactElement, {
          isMark: index === selectedIndex,  // Now index is properly mapped
        })
      )}
    </View>
  )
}

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex flex-1 flex-col gap-4 p-4 items-center justify-center">
      <View>
        <List>
          {products.map(product => <Item title={product.title} key={product.title} />)}
        </List>
      </View>

    </SafeAreaView>
  );
}

