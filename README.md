# Rick and Morty Character Explorer

Aplicativo React Native que lista e exibe detalhes dos personagens da série Rick and Morty.

## Requisitos Implementados

✅ **Requisito 1 - Estrutura e Configuração**
- Projeto React Native puro
- Dependências necessárias: react-navigation e axios

✅ **Requisito 2 - Tela de Listagem (CharactersListScreen)**
- Consumo da API: https://rickandmortyapi.com/api/character
- Loading com ActivityIndicator
- FlatList para renderização otimizada
- Cards clicáveis com imagem, nome, status e espécie
- Navegação para tela de detalhes

## Passo a Passo para Executar

### 1. Criar um novo projeto Expo
```bash
npx create-expo-app@latest rick-morty-explorer --template blank
cd rick-morty-explorer
```

### 2. Instalar as dependências necessárias
```bash
npx expo install @react-navigation/native @react-navigation/stack axios react-native-screens react-native-safe-area-context react-native-gesture-handler
```

### 3. Copiar os arquivos do código
- Substitua o arquivo `App.js` pelo fornecido neste projeto
- Crie a pasta `src/` na raiz do projeto
- Copie toda a estrutura da pasta `src/` (components, screens, services)

### 4. Estrutura final do projeto
```
rick-morty-explorer/
├── App.js                           # ← Substituir pelo fornecido
├── src/                             # ← Criar esta pasta
│   ├── components/
│   │   └── CharacterCard.js         # ← Copiar
│   ├── screens/
│   │   ├── CharactersListScreen.js  # ← Copiar
│   │   └── CharacterDetailScreen.js # ← Copiar
│   └── services/
│       └── api.js                   # ← Copiar
└── ... (outros arquivos do Expo)
```

### 5. Executar o projeto
```bash
npx expo start --tunnel
```

### 6. Testar no dispositivo
- Instale o app "Expo Go" no seu celular
- Escaneie o QR code que aparece no terminal
- O app deve carregar e mostrar a lista de personagens

## Dependências Completas

```json
{
  "@react-navigation/native": "^7.1.19",
  "@react-navigation/stack": "^7.6.2",
  "axios": "^1.13.2",
  "react-native-gesture-handler": "~2.28.0",
  "react-native-safe-area-context": "^5.6.2",
  "react-native-screens": "~4.16.0"
}
```

## Estrutura do Projeto

```
src/
├── components/
│   └── CharacterCard.js      # Componente do card do personagem
├── screens/
│   ├── CharactersListScreen.js    # Tela de listagem
│   └── CharacterDetailScreen.js   # Tela de detalhes
└── services/
    └── api.js                # Serviços da API
```

## Funcionalidades

- **Lista de Personagens**: Exibe todos os personagens com imagem, nome, status e espécie
- **Detalhes do Personagem**: Mostra informações completas incluindo origem e localização atual
- **Loading States**: Indicadores de carregamento durante as requisições
- **Tratamento de Erros**: Alertas em caso de falha nas requisições
- **Navegação**: Stack Navigator entre as telas

## API Utilizada

- **Base URL**: https://rickandmortyapi.com/api
- **Endpoint de Personagens**: /character
- **Endpoint de Detalhes**: /character/{id}

## Próximos Passos (Requisito 3)

Para a próxima entrega, implementar:
- Tela de detalhes completa com todas as informações
- Melhorias na navegação e UX