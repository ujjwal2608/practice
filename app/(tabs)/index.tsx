import { Image, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TimeInput, TimeInputHr, TimeInputMin, TimeInputMeridiemText, TimeInputMeridiem ,TimeInputColon} from '@/components/ui/time-input';
import {Text} from "@/components/ui/text"
import dayjs,{Dayjs} from "dayjs";
import { useState } from 'react';
export default function HomeScreen() {
  const [time, setTime] = useState<Dayjs>()
  console.log(time?.format("HH:mm"), "time");
  return (
   <SafeAreaView className="flex flex-1 flex-col gap-4 p-4 items-center justify-center">
    <Text className="text-red-500 font-bold">Hello</Text>
    
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
