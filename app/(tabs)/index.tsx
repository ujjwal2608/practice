import { SafeAreaView } from 'react-native-safe-area-context';
import React, { cloneElement, ReactElement, ReactNode, useState } from 'react'
import { Text, View } from 'react-native'

const ParentComponent = ({ children }: { children: ReactElement }) => {
  return (
    //this can only clone one element thats why i passed the ReactElement type not the react node
    cloneElement(children, { color: "red" }, null)
  )
}
const ChildComponent = ({ color }: { color?: string }) => {
  return (
    <View>
      <Text style={{ fontSize: 24, color: color }}>child component</Text>
    </View>
  )
}
export default function app() {
  return (
    <SafeAreaView>
      <Text>befor wrapper</Text>
      <ChildComponent />
      <Text>after the wrapper</Text>
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    </SafeAreaView>
  )

}