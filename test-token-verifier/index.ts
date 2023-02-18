import JsonWebToken from "jsonwebtoken";
import jwksClient from "jwks-rsa";

var client = jwksClient({
  jwksUri: "http://localhost:3000/jwks",
});

function getKey(header, callback) {
  client.getSigningKey(header.kid, function (err, key) {
    var signingKey = key!.getPublicKey();
    callback(err, signingKey);
  });
}

let jwt =
  "eyJhbGciOiJSUzI1NiIsInR5cCI6ImF0K2p3dCJ9.eyJpZCI6ImQ1MTZhMTE2LTJlOTgtNGVjYS05MTE3LTViZjI0Yjk0MDUyMSIsInVzZXJuYW1lIjoiVXNlcm5hbWUiLCJpc3N1ZWRfYXQiOiIyMDIyLTEyLTE3VDAxOjU2OjMyLjEyMzU0MS0wNDowMCIsImV4cGlyZWRfYXQiOiIyMDIyLTEyLTE3VDAyOjExOjMyLjEyMzU0MS0wNDowMCJ9.dBLDBnjXn7vUZo-CNJFCd1huGylDbEKfehJr2a8L5VbUZCfn6-z6c75ekKbA_Eg5Enr-Lfv9kutb38euNRlPr-Joc9mxmnXDuhWTYo8gSu0S41WkG8XNvF1tTy0NF7XPgQHaiO7nh-Fz_gj318cNSetcOQtrzliITt-zCxgec-pwNw8RWI53Nn9yAKRnWmyOJLDE-OCALMfhJCU4TdYzzXcT7uz86rUxMdnTwdajUOB-94OlMwvLNgqqOBVizvHg1NSm6UW63x-EO1r2D0xkoYr6ohpPQtZgTEY6Yyr9YCohnm8wzKZyG1R-2LzwKJc9J8M5zdfTT1wq5SYp0jeVqw";

JsonWebToken.verify(jwt, getKey, {}, function (err, decoded) {
  console.log("err", err);
  console.log("decoded", decoded);
});
