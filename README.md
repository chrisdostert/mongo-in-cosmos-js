[![Build Status](https://travis-ci.org/chrisdostert/mongo-in-cosmos-js.svg?branch=master)](https://travis-ci.org/chrisdostert/mongo-in-cosmos-js)
[![Coverage](https://codecov.io/gh/chrisdostert/mongo-in-cosmos-js/branch/master/graph/badge.svg)](https://codecov.io/gh/chrisdostert/mongo-in-cosmos-js)

> *Be advised: this project is currently at Major version zero. Per the
> semantic versioning spec: "Major version zero (0.y.z) is for initial
> development. Anything may change at any time. The public API should
> not be considered stable."*

Javascript library to embed an arbitrary number of mongoDb dbs/collections within a single cosmosDb collection

# Why? 

## Problem
Microsoft bills for increments of RU's (capacity/throughput) across 2 dimensions:

Collections  
pricing: increments of 100 RU/second, with a minimum of 400 RU/second  
comments: Lame... I want to pay for usage; not collections. I should be able to use as many collections as my design dictates

Databases  
pricing: increments of 10K RU/second, with a minimum of 50K RU/second  
comments: Lame... I want to pay for usage; not dbs. I should be able to use as many dbs as my design dictates

## Solution
embed an arbitrary number of mongoDb dbs/collections within a single cosmosDb collection.

## Implementation
1) add `_db` & `_collection` discriminators on all documents
2) observe discriminators for all api operations

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
All implemented methods, are identical to the native mongoDb driver collection API.

## implemented methods
- `db`  
- `db.collection`  
- `db.collection.find`  
- `db.collection.findOne`  
- `db.collection.insertOne`  
- `db.collection.updateOne`  

# Examples

# Basic usage

```javascript
const MongoClient = require('mongodb').MongoClient
const mongoInCosmos = require('mongo-in-cosmos')

const cosmosConnect = await MongoClient.connect(cfg.mongoDbConnectionString)

// get cosmosDb collection using native mongo driver
const cosmosCollection = cosmosConnect
  .db('my-cosmos-db')
  .collection('my-cosmos-collection')

// get embedded collection using mongo-in-cosmos
const embeddedCollection = mongoInCosmos(cosmosCollection)
  .db('my-embedded-db')
  .collection('my-embedded-collection')

// use like native mongo driver collection (for implemented methods)... :)
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
