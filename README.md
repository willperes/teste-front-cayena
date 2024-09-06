This is my result for the challenge proposed for the Mid-level Developer role.

## More about the project

In this project I applied some architectural principles to make sure that the code could organized and that it could be tested with ease. Some of the principles applied:

- Dependency injection.
- Factory pattern.
- Domain layer.
- Folder by feature.

## Folder structure

```shell
src/
|-- assets/
|   |-- icons/
|-- components/
|   |-- layout/
|   |-- ui/
|-- domain/
|   |-- X/
|   |   |-- dtos
|   |   |-- models
|   |   |-- use-cases
|-- features/
|   |-- X-page/
|   |   |-- components
|   |   |-- models
|   |   |-- X-page.module.scss
|   |   |-- X-page.tsx
|   |   |-- use-X-page.ts
|-- hooks/
|   |-- use-X/
|-- infra/
|   |-- adapters/
|   |-- http/
|-- pages/
|-- providers/
|-- theme/
|-- utils/
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Screenshots

<div style="flex-direction: row;">
  <img src="https://i.imgur.com/NKwImj4.png" height="500" />
  <img src="https://i.imgur.com/Apqu1a1.png" height="500" />
</div>

<div style="flex-direction: row;">
  <img src="https://i.imgur.com/Zv82dUQ.png" height="500" />
  <img src="https://i.imgur.com/aXSZZfI.png" height="500" />
</div>

<div style="flex-direction: row;">
  <img src="https://i.imgur.com/tRreUj6.png" height="500" />
  <img src="https://i.imgur.com/l7P6HuM.png" height="500" />
</div>
