import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {


const square = (fun:(a:number,b:number)=>number)=>{
  return function (a:number,b:number){
    return fun(a,b)*fun(a,b)
  }
}
const multipy = (a:number,b:number)=>{
  return a*b
}

const squareMultiply = square(multipy)
const ans = squareMultiply(2,3)
console.log(ans)
  return (
    <SafeAreaView>
   
    </SafeAreaView>
  )
}
