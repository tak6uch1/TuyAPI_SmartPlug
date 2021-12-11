import { TuyaContext  } from '@tuya/tuya-connector-nodejs';

/**
 * api env entrypoint
 *
 * 'https://openapi.tuyacn.com',  // 亚洲 AY
 * 'https://openapi.tuyaus.com',  // 美区 US
 * 'https://openapi.tuyaeu.com',  // 欧洲 EU
 * 'https://openapi.tuyain.com',  // 印度 IN
 */

const context = new TuyaContext({
  baseUrl: 'https://openapi.tuyaus.com',
  accessKey: 'XXXXXXXXXXXXXXXXXXXX',
  secretKey: 'YYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY',
});

const main = async () => {
  // Define the device ID
  const device_id = "ZZZZZZZZZZZZZZZZZZZZ";
  const commands = await context.request({
    path: `/v1.0/iot-03/devices/${device_id}/commands`,
    method: 'POST',
    body: {
      "commands":[{"code":"switch","value":false}]
    }
  });
  if(!commands.success) {
    new Error();
  }
  console.log("Execution result:",commands);
};
main().catch(err => {
  console.log(err);
});
