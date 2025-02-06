import { SafeAreaView } from 'react-native-safe-area-context';
import React, { cloneElement, ReactElement, ReactNode, useState } from 'react'
import { Text, View } from 'react-native'

const ParentComponent = ({ children }: { children: ReactElement }) => {
  return (
    //this can only clone one element thats why i passed the ReactElement type not the react node
    cloneElement(children, { color: "red",color2:"blue",color3:"green" },null)
  )
}
const ChildComponent = ({ color,color2,color3 }: { color?: string,color2?:string,color3?:string }) => {
  return (
    <View>
      <Text style={{ fontSize: 24, color: color }}>child component</Text>
      <Text style={{ fontSize: 24, color: color2 }}>child component</Text>
      <Text style={{ fontSize: 24, color: color3 }}>child component</Text>
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