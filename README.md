# Control Smart Plug with Tuya API

This repository explains to toggle smart plug (Smart Life product) with Tuya API.
![Smart Plug Image](./img/Top.png)

## Installation

If you do not have Node.js yet, download and install from 
[Node.js](https://nodejs.org Node.js)

To install TypeScript and TuyAPI library, execute below.

```
./install.sh
```
:::note warn
tuya-cli and following installation command is obsolete.
```
npm i @tuyapi/cli -g
```
:::

## Edit scripts

Edit following 3 part of statements.

```
  const context = new TuyaContext({
    baseUrl: 'https://openapi.tuyaus.com',
    accessKey: 'XXXXXXXXXXXXXXXXXXXX',
    secretKey: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
    });
    
  const main = async () => {
    // Define the device ID
    const device_id = "ZZZZZZZZZZZZZZZZZZZZ";
```

## Compile scripts

```
~/node_modules/.bin/tsc get_command.ts
~/node_modules/.bin/tsc plug_on.ts
~/node_modules/.bin/tsc plug_off.ts
```

## Get available commands

```
node get_command.js
```

## Execution

```
node plug_on.js
node plug_off.js
```

## Blog
The below blog article explains how to use Smart Tuya App and create cloud project, too.

[https://take6shin-tech-diary.com/tuyapi-smartplug/](https://take6shin-tech-diary.com/tuyapi-smartplug/ Tech Diary of Takenoshin)
