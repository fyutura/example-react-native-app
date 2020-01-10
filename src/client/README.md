# Client

Module for communication with third party entities.

## How to use

```js
  import { Auth, Category } from "shared/client"

  // ...

  function someAction() {
    try {
      const { token, ...user } = await Auth.login({
        email: "email@example.com",
        password: "123four"
      });
      // ...

      const { categories, count } = await Category.getAll({ limit: 100 });
      // ...
    } catch (err) {
      // Handle errors
      // For more, see: https://github.com/axios/axios#handling-errors

      // For UI
      alert(err.description);
      // For DEV
      if (process.env.NODE_ENV === "development") {
        console.error(err);
      }
    }
  }
```
