# dxc-assessment-2022

#### DXC Technology Assessment 2022 - Application Software Engineer (Graduate Program)

This project is written in Node.js with TypeScript, using Angular.js framework for the frontend, with Java Spring Boot framework for the backend, and SQLite for lightweight database storage due to the small scale of the project.

The frontend app will run on `http://localhost:4200` and backend app on `http://localhost:8080`. Please ensure that these two ports are free.

#### Author: Loh Chun Mun

## Table of Contents

-   [Pre-requisites](#pre-requisites)
    -   [Node.js](#nodejs)
    -   [Java JDK 17](#java-jdk-17)
-   [Setup Guide (Local)](#setup-guide-local)
-   [API Documentation](#api-documentation)
    1. [Login](#1-login)
        - [Responses](#responses)
    2. [Get Account Details](#2-get-account-details)
        - [Responses](#responses)
-   [Explanations](#explanations)
    -   [Cross-Origin Resource Sharing (CORS)](#cross-origin-resource-sharing-cors)

## Pre-requisites

### Node.js

As the frontend is built with Angular.js, you must have Node.js installed on your device to be able to run it. A quick way to get started is to directly
install Node.js on your system. You may download the installer [here](https://nodejs.org/en/download/).

However, it is strongly recommended to use a Node version manager such as [nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
to install Node.js and npm. You may read more about it [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Java JDK 17

The backend is built with Java Spring Boot with Java 17, hence it is necessary to install the JDK on your device so that you can start the Spring Boot application without compatibility issues.

You may download it [here](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html).

## Setup Guide (Local)

If this is your first time running this project, you will be required to install the Node dependencies for the frontend Angular.js project.

You may can enter `npm ci` into the terminal in `./frontend` folder. This will step will install all necessary dependencies based on the `./frontend/package-lock.json`. This process may take awhile.

To simplify this step, you may run the following batch script:

```shell
.\setup-npm.bat
```

#### For Windows only

A batch script has been created for your convenience in starting up both the frontend and backend application.

```shell
.\run.bat
```

> **NOTE:** Amend the `JAVA_HOME` in this batch script to the Java JDK 17 directory on your device.

Alternatively, you may start the frontend app by entering `npm start` into the terminal from `./frontend` folder, and entering `mvnw spring-boot:run` into the terminal from `./backend` folder.

## API Documentation

This API supports JSON format. Please ensure request body is in a `Content-Type: application/json` format.

### 1. Login

```http request
POST /login
```

| Parameter | Type                   | Description                           |
| :-------- | :--------------------- | :------------------------------------ |
| `:id`     | `string` or `ObjectId` | **Required**. Household object `_id`. |

#### Responses:

```javascript
// Valid Request Response
true
```

```javascript
// Invalid Request Response
false
```

### 2. Get Account Details

```http request
POST /user/:username
```

| Parameter   | Type     | Description                                                        |
| :---------- | :------- | :----------------------------------------------------------------- |
| `:username` | `string` | **Required**. To retrieve account details based on the `username`. |

#### Responses:

```javascript
// Valid Request Response

{
    "accountId" : Number,
    "username"  : Object,
    "password"  : null,
    "name"      : String,
    "role"      : String
}
```

```javascript
// Invalid Request Response
null
```

## Explanations

### Cross-Origin Resource Sharing (CORS)

Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.

By default, the frontend app do not have access toi the API endpoints, thus CORS is granted on the backend app for the frontend host and port of `http://localhost:4200`.
