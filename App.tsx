import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import SafeAreaScreen from './src/components/SafeAreaView/SafeAreaScreen';

import AppStackNavigation from './src/navigation/AppStackNavigation';


const queryClient = new QueryClient();


export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <NavigationContainer>
          <SafeAreaScreen testId="wrapper" >
            <AppStackNavigation />
          </SafeAreaScreen>
        </NavigationContainer>
      </RecoilRoot>
    </QueryClientProvider>
  );
}



