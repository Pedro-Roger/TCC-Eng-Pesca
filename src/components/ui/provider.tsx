"use client"

import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "./color-mode"
import { ProjetosProvider } from "../../context/ProjetosContext"

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ProjetosProvider>
        <ColorModeProvider {...props} />
      </ProjetosProvider>
    </ChakraProvider>
  )
}
