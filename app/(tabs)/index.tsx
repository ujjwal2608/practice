import { SafeAreaView } from 'react-native-safe-area-context';
import React, { Children, ReactElement, ReactNode } from 'react';
import { Text, View } from 'react-native';

const List = () => {
  return (
    <View>
      <Text className="text-2xl">para1</Text>
      <Text className="text-2xl">para2</Text>
      <Text className="text-2xl">para3</Text>
    </View>
  );
};

const AppendList = ({ children }: { children: ReactElement }) => {//here the type must be react element
  console.log("chldren",children?.props.children)
  const listChildren = Children.toArray(children.props.children).slice(1); // Convert children to an array
  console.log(listChildren); // Now this correctly logs the <Text> elements inside List

  return <>{listChildren}</>; // Render the children correctly
};

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex flex-1 flex-col gap-4 p-4 items-center justify-center">
      <AppendList>
        <View>
          <Text className="text-2xl">para1</Text>
          <Text className="text-2xl">para2</Text>
          <Text className="text-2xl">para3</Text>
        </View>
      </AppendList>
    </SafeAreaView>
  )
}
