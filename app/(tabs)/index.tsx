import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0,x:0,y:0 });

  return (
    <SafeAreaView>
    <View
      className='bg-red-400 h-32'
      onLayout={(event) => {
        const { width, height,x,y } = event.nativeEvent.layout;
        setDimensions({ width, height,x,y });
      }}
    >
      <Text>Width: {dimensions.width}</Text>
      <Text>Height: {dimensions.height}</Text>
      <Text>x: {dimensions.x}</Text>
      <Text>y: {dimensions.y}</Text>
    </View>
    </SafeAreaView>
  )
}
