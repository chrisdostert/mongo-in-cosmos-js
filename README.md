[![Build Status](https://travis-ci.org/chrisdostert/mongo-in-cosmos-js.svg?branch=master)](https://travis-ci.org/chrisdostert/mongo-in-cosmos-js)
[![Coverage](https://codecov.io/gh/chrisdostert/mongo-in-cosmos-js/branch/master/graph/badge.svg)](https://codecov.io/gh/chrisdostert/mongo-in-cosmos-js)

> *Be advised: this project is currently at Major version zero. Per the
> semantic versioning spec: "Major version zero (0.y.z) is for initial
> development. Anything may change at any time. The public API should
> not be considered stable."*

Javascript library enabling use of a single cosmosDb collection as multiple mongoDb collections

# Why? 

## Problem
CosmosDb from a technological perspective is :), but from a pricing perspective is :(

You pay for increments of RU's via 2 mechanisms:

Collections  
pricing: increments of 100 RU/second, with a minimum of 400 RU/second
comments: Lame... I want to pay for usage; not collections. I should be able to use as many collections as my design dictates

Databases  
pricing: increments of 10K RU/second, with a minimum of 50K RU/second
comments: As it should be... but realistically only goliath sized companies can afford this

## Solution
use a single cosmosDb collection as a backing store for mongo db collections by adding a `_collection` discriminator property to each document
and observing it in all collection operations

# Installation

## NPM
```shell
npm install --save mongo-in-cosmos
```

## Yarn
```shell
yarn add mongo-in-cosmos
```

# API
All methods, if supported, are identical to the native mongoDb driver collection API.

Each supported method is maintained in it's own file in [./collection](./collection) so reference it for a complete list.

# Examples

# Basic usage

```javascript
const MongoClient = require('mongodb').MongoClient
const mongoInCosmos = require('mongo-in-cosmos')

// connect to my cosmos collection using native mongo driver
const client = await MongoClient.connect(cfg.mongoDbConnectionString)
const cosmosCollection = client.db('my-cosmos-db').collection('my-cosmos-collection')

// access embedded collection
const embeddedCollection = mongoInCosmos(cosmosCollection, 'my-embedded-collection')

// use like native mongo driver collection (for supported methods)... :)
await embeddedCollection.find({})
```

# Support

[open an issue](https://github.com/chrisdostert/mongo-in-cosmos-js/issues)

# Releases

releases are versioned according to
[![semver 2.0.0](https://img.shields.io/badge/semver-2.0.0-brightgreen.svg)](http://semver.org/spec/v2.0.0.html)
and [tagged](https://git-scm.com/book/en/v2/Git-Basics-Tagging); see
[CHANGELOG.md](CHANGELOG.md) for release notes

# Contributing

see [CONTRIBUTING.md](CONTRIBUTING.md)
