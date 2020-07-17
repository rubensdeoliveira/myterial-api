<h3 align="center">
  Myterial
</h3>

<p align="center">dentists' instruments and materials management application.</p>

<p align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License MIT">
  </a>
</p>

<hr />

## Features

- Users can create a material;
- Users can see their own materials.;
- Users can create a account;
- Users can update their avatar;
- Users can update their profile info;
- Users can loggin in;
- Users can recover password using email;

- Features can be accessed by routes below.

- 💹 **Node Js** — A web framework for Node Js

### **Routes**

#### - Users (/users)

|   Resource    | Method |      Params (JSON)      | Headers |
| :-----------: | :----: | :---------------------: | :-----: |
|    /users     |  POST  | {name, email, password} |   {/}   |
| /users/avatar | PATCH  |          IMAGE          |   JWT   |

#### - Profile (/profile)

| Resource | Method |      Params (JSON)      | Headers |
| :------: | :----: | :---------------------: | :-----: |
| /profile |  GET   | {name, email, password} |   JWT   |
| /profile |  PUT   | {name, email, password} |   JWT   |

#### - Materials (/materials)

|     Resource      | Method |                            Params (JSON)                            | Headers |
| :---------------: | :----: | :-----------------------------------------------------------------: | :-----: |
|    /materials     |  POST  | {code, name, description, manufacturer, amount, unity, price, note} |   JWT   |
|   /materials/me   |  GET   |                                 {/}                                 |   JWT   |
| /materials/me/:id |  GET   |                                 {/}                                 |   JWT   |

#### - Sessions (/sessions)

| Resource  | Method |   Params (JSON)   | Headers |
| :-------: | :----: | :---------------: | :-----: |
| /sessions |  POST  | {email, password} |   {/}   |

#### - Password (/password)

|     Resource     | Method |   Params (JSON)   | Headers |
| :--------------: | :----: | :---------------: | :-----: |
| /password/reset  |  POST  | {token, password} |   {/}   |
| /password/forgot |  POST  |      {email}      |   {/}   |

## Getting started

- Clone project > enter the project folder
- run `yarn`
- run `docker run --name dbimage -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres`
- Acess postbird or another postgres manager and create db with any name.
- Configure db credentials in src > config > database.js.
- run `yarn sequelize db:migrate`
- run `yarn dev`

## License

This project is licensed under the MIT License - see the [LICENSE](https://opensource.org/licenses/MIT) page for details.

---

Created with passion by me 👨🏻‍💻
