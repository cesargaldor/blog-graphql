# NextJS & GraphQL blog

This is a blog to learn the basics of GraphQL made with [NextJS](https://nextjs.org/), [TailwindCSS](https://tailwindcss.com/), [Apollo Client](https://www.apollographql.com/docs/react/) and
[HygraphCMS](https://hygraph.com/).

First, you need to create an `.env.local` in the root of the project and a new variable called NEXT_PUBLIC_GRAPHQL_URI.

To get started, you need to create an account in Hygraph. Once you've created it, you have to create a new project and set the public content API to defaults in project settings. Also, don't forget to set the previous env variable to this public content uri.

Finally, for the queries to work, you need to create a model within the Hygraph schema. It'll be the post with all its properties.

![image](https://i.ibb.co/9HMTgWW/captura.png)
