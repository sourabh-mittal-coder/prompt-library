## Prompt Library ✍️

**Prompt Library** is a full-stack web application built with Next.js 14 that allows users to create, share, and discover writing prompts specifically for ChatGPT.

**Inspiration:** This project was inspired by the fantastic tutorials from JavaScript Mastery (huge thanks!).

**Features:**

- **Sign in with Google OAuth:** Secure and convenient user authentication.
- **Prompt Management:** Create, edit, and delete your own writing prompts.
- **Community Prompts:** Explore a vast collection of prompts shared by other users.
- **User Profiles:** Browse user profiles and see their contributed prompts.
- **Search Functionality:** Find prompts by tag, user, or content for a more targeted experience.
- **Sharing Prompts:** Easily copy prompts or share them directly to Twitter, Facebook, and Whatsapp.
- **Open Source:** The project code is available on GitHub, encouraging contributions and further development.

**Tech Stack:**

- Frontend: Next.js 14, React, Tailwind CSS
- Backend: Next.js 14 with app router
- Sharing: react-share library

**Bonus Ideas (Future Updates):**

- Like/Dislike prompts for user-driven feedback.
- Share count display to showcase popular prompts.
- Implement filters for sorting prompts by latest, popular, etc.

**Getting Started:**

1. Clone the repository:

```bash
git clone https://github.com/sourabh-mittal-coder/prompt-library.git
```

2. Install dependencies:

```bash
npm install
```

3. **Create a `.env` file** in your project's root directory. This file will store sensitive environment variables that should not be committed to your codebase.

4. Add the following environment variables to your `.env` file:

   - `GOOGLE_ID`: Your Google Client ID obtained from the Google Cloud Console ([https://cloud.google.com/docs/authentication/api-keys](https://cloud.google.com/docs/authentication/api-keys))
   - `GOOGLE_CLIENT_SECRET`: Your Google Client Secret obtained from the Google Cloud Console
   - `MONGODB_URI`: The connection URI for your MongoDB database (refer to MongoDB documentation for instructions on obtaining this value)
   - `NEXTAUTH_URL`: The base URL of your application for local development (http://localhost:3000/) or deployment (your website URL)
   - `NEXTAUTH_URL_INTERNAL`: The internal base URL of your application, typically the same as `NEXTAUTH_URL`
   - `NEXTAUTH_SECRET`: A secret string used for authentication. You can generate this using the following command in your terminal:

     ```bash
     openssl rand -base64 32
     ```

**Local Development:**

- Set `NEXTAUTH_URL` and `NEXTAUTH_URL_INTERNAL` to `http://localhost:3000/` in your `.env` file.
- Generate a `NEXTAUTH_SECRET` using the `openssl rand` command as described above.
- Run the development server:

```bash
npm run dev
```

**Deployment:**

- Update `NEXTAUTH_URL` and `NEXTAUTH_URL_INTERNAL` in your `.env` file to point to your deployed application's URL.
- Generate a new `NEXTAUTH_SECRET` for your deployment environment.
- Refer to the NextAuth.js documentation for deployment instructions specific to your hosting provider.

**Contributing:**

We welcome contributions to this project! Feel free to fork the repository, make changes, and submit a pull request.

**License:**

This project is licensed under the MIT License. See the LICENSE file for details.

**Let's Build Something Creative!**

We believe Prompt Library can empower writers and creators to leverage the power of ChatGPT effectively. Feel free to explore the codebase, suggest improvements, or contribute by adding new features.

**Happy Prompting!**

**Additional Notes:**

- For more information on setting up environment variables and authentication for NextAuth.js, you can refer to the following resources:
  - NextAuth.js Documentation: [https://next-auth.js.org/](https://next-auth.js.org/)
  - JavaScript Mastery video tutorial (link provided): [https://www.youtube.com/watch?v=wm5gMKuwSYk](https://www.youtube.com/watch?v=wm5gMKuwSYk)
