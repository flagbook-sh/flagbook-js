# Flagbook JavaScript SDK

![Build](https://github.com/flagbook-sh/flagbook-node/workflows/Build/badge.svg?branch=master)

The Flagbook JavaScript SDK provides convenient access to Flagbook API from application written in JavaScript.

## Requirements

Node 10 or higher.

## Installation

Install the package with:

```bash
npm install @flagbook/flagbook-js
```
or
```bash
yarn add @flagbook/flagbook-js
```

## Usage

Basic usage of global flag

```js
import { Flagbook } from '@flagbook/flagbook-js'

Flagbook.init({
  accessToken: 'XXX'
})

await Flagbook.getFlagValue('user_edit_v2_enabled') // true
```
