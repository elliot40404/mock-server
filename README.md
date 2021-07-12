
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/elliot40404) 

[![Size](https://img.shields.io/bundlephobia/minzip/mock-ui)](https://github.com/elliot40404)

[![Size](https://img.shields.io/github/issues/elliot40404/mock-server)](https://github.com/elliot40404)

[![Size](https://img.shields.io/github/forks/elliot40404/mock-server)](https://github.com/elliot40404)

[![Size](https://img.shields.io/github/stars/elliot40404/mock-server)](https://github.com/elliot40404)


# MOCK SERVER

Easily mock server responses for apps with an easy to use GUI on your local device.


## Features

- Interactive UI
- Working API in 3 clicks
- Runs Locally
- Cross platform

  
## Installation

Install mock-ui with npm

```bash
  npm install -g mock-ui
  mock-ui
```
    
## API Reference

### For now all requests are post

#### Get all users

```http
  POST http://localhost:8008/routes
```

#### Add user

```http
  POST http://localhost:8008/user/add
```

#### Get routes for a user

```http
  POST http://localhost:8008/api/:user-id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `user-id`      | `string` | **Required**. id of your user |


#### Add a route

```http
  POST http://localhost:8008/routes/add
```

```json
{
	"id": "1Qupx5C5BU",
	"route": "users",
	"response": {
		"name": "John Doe",
		"age": 20
	}
}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of your user |
| `route`      | `string` | **Required**. name of route |
| `response`      | `string` | **Required**. JSON that will be returned as response |

#### Query a route

```http
  POST http://localhost:8008/:user-id/:route
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of your user |
| `route`      | `string` | **Required**. name of route |

#### Update the response of a route

```http
  PATCH http://localhost:8008/routes/update
```

```json
{
	"id": "1Qupx5C5BU",
	"route": "users",
	"response": {
		"name": "Jane Doe",
		"age": 25
        "email": "jane@email.com"
	}
}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of your user |
| `route`      | `string` | **Required**. name of route |
| `response`      | `string` | **Required**. JSON that will be returned as response |

#### Delete a route

```http
  DELETE http://localhost:8008/routes/del
```

```json
{
	"id": "yWqkIj5riP",
	"route": "users"
}
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. id of your user |
| `route`      | `string` | **Required**. name of route |

## Clone 

Clone the project

```bash
  git clone https://github.com/elliot40404/mock-server.git mock-ui
```

Go to the project directory

```bash
  cd mock-ui
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

Create a link to run globally

```bash
    npm link
```

  
## Contributing

Contributions are always welcome!

  
## Tech Stack

**Client:** VUE3

**Server:** Node, Express

  