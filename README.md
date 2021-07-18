# Flagbook JavaScript SDK

![Build](https://github.com/flagbook-sh/flagbook-js/workflows/Build/badge.svg?branch=master)

The Flagbook JavaScript SDK provides convenient access to Flagbook API from application written in JavaScript.

## Requirements

Node 10 or higher.

## Installation

Install the package with:

```bash
# npm
npm i @flagbook/flagbook-js

# yarn
yarn add @flagbook/flagbook-js
```

## Getting started

When the installation is completed, configure the client providing your **accessToken** (You can find it in [https://app.flagbook.sh/](https://app.flagbook.sh/))

```js
import { Flagbook } from '@flagbook/flagbook-js'

Flagbook.init({
  // [Required] Your access token
  accessToken: 'XXX',

  // [Optional] Indicates whether the cache layer is enabled in the client. It's strongly recommended to keep this setting enabled. Default: true 
  cacheEnabled: true,

  // [Optional] Configures time to live in milliseconds of cache manager. Default: 10000
  cacheTTL: 10_000,

  // [Optional] Specifies the time within which the request to the Flagbook must be made, otherwise an exception is thrown. Default: 5000
  timeout: 5_000,
})
```

You're done 🎉

## Usage

Retrieve global flag value:

```js
await Flagbook.getFlagValue('user_edit_view_v2_enabled') // true/false
```

Retrieve flag value for given tags:

```js
await Flagbook.getFlagValue('user_edit_view_v2_enabled', [['user_id', 1], ['country_code', 'us']]) // true/false
```

Please note that the order of the provided tags matters. The function will return the value assigned to the first found tag from the list.
```
