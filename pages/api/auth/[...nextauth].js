// To make Login functionality. U need to install NextJs Auth (https://next-auth.js.org/getting-started/example) 

import NextAuth from "next-auth"
import FacebookProvider from "next-auth/providers/facebook";       // changed 'import GithubProvider from "next-auth/providers/github"  ' to 'import FacebookProvider from "next-auth/providers/facebook"  '

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    FacebookProvider({                                          // changed 'GithubProvider' to 'FacebookProvider'
      clientId: process.env.FACEBOOK_CLIENT_ID,                        // changed 'GITHUB_ID' to 'FACEBOOK_CLIENT_ID'
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,                // changed 'GITHUB_SECRET' to 'FACEBOOK_CLIENT_SECRET'
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)


/*
   After modification, u need to goto this facebook website https://developers.facebook.com/apps/?show_reminder=true  [3:37:00]
   Here create new app called 'NextJS Clone' (we can't use name like Facebook, FB there) then click 'Add product + symbol' there click to 'Facebook Login' (press setup)
   then goto 'setting->basic' there u can see App ID and App Secret.
*/
