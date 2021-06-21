# SIMPLE TODO APP

[Production](https://mysimpletodoapp.vercel.app)

### We all love checking items off a list.

> A good way to get your fix at getting things done.

This is a simple to-do app that you can use, as a regular _to-do list_, a _shopping list_, or a _task list_.

This App is PWA utilizing [next-pwa](https://www.npmjs.com/package/next-pwa) to register and generate service worker.

This means you can use it on your browser or install this app to work _like_ a native app on your device.

To install on your desktop. Just click on the install button on your browser, best used with Chrome.

![desktop install](https://i.imgur.com/BgMwoNg.png)

To install on your phone just add to home screen.

![mobile install](https://i.imgur.com/hucMHtd.jpg)

![mobile demo](https://user-images.githubusercontent.com/64442827/122819854-d1fb5d80-d28f-11eb-987a-e6512a0ff2ca.gif)


---

This app is built using Next.js [Next.js](https://nextjs.org/)

## Local Development

First, run the development server. On the terminal:

```bash
npm install
```

then

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) on your browser.

## Environment Variables

Create `.env` file with the following variables

```
AIRTABLE_API_KEY=
AIRTABLE_BASE_ID=
AIRTABLE_TABLE_NAME=
AUTH0_DOMAIN=
AUTH0_SECRET=
AUTH0_CLIENT_ID=
AUTH0_REDIRECT_URI=
COOKIE_SECRET=
```

## Authentication

Authentication is with [Auth0](https://auth0.com/docs/quickstart/spa/react). Read Next.js SDK for signing in with Auth0 [here](https://github.com/auth0/nextjs-auth0).

## Airtable API

This App is using the [Airtable API](https://airtable.com/api) as its database. Read Airtable Javascript client [here](https://github.com/airtable/airtable.js). The middleware `OwnsRecord.js` matches the current user's `userid` property in the database.

      Airtable Schema:

      | description | completed | userid |
      | ----------- | --------- | ------ |
      | string      | boolean   | string |

## Styling

This App is using [tailwind](https://tailwindcss.com/) for styling and [react-icons](https://react-icons.github.io/react-icons/) for the icons set.

## Deployed on Vercel

This app is currently deployed using the [Vercel Platform](https://vercel.com) this is because Next.js is developed by Vercel thus making deployment a breeze.
