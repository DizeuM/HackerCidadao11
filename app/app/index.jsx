import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">

        <Link href={"/home"} className='text-2xl font-msemibold text-primary text-center'>Entrar</Link>
        
    </View>
  );
}

