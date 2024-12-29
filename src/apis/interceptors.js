import CryptoJS from 'crypto-js';

const SECRET_KEY = 'hong-jun-eric-erica-jamie';

const CUSTOM_TIMESTAMP_HEADER = 'X-Request-Timestamp';
const CUSTOM_SIGNATURE_HEADER = 'X-Request-Signature';

const DELIMITER = ';';

export const addRequestSignature = (request) => {
  const timestamp = Math.floor(Date.now() / 1000);
  const path = request.url;
  const body = JSON.stringify(request.data) || '';

  // ex) '1234567890;/api/v1/hello;{"message":"Hello World!!!"};'
  const matcher = `${timestamp}${DELIMITER}${path}${DELIMITER}${body}${DELIMITER}`;

  const signature = CryptoJS.HmacSHA256(matcher, SECRET_KEY).toString(
    CryptoJS.enc.Base64url,
  );

  request.headers[CUSTOM_TIMESTAMP_HEADER] = timestamp;
  request.headers[CUSTOM_SIGNATURE_HEADER] = signature;

  return request;
};
