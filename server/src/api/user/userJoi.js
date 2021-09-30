const joi = require("joi");

const email = joi.string().email();
const nickName = joi.string().max(20);
const password = joi.string().min(6);
const phone = joi
  .string()
  .length(11)
  .pattern(/^[0-9]+$/);
const smsAdv = joi.boolean();
const emailAdv = joi.boolean();
// 추후에 비밀번호 복잡성 증가 예정
// 핸드폰 번호 검증도 수정 예정

exports.signInJoi = joi.object({
  email: email.required(),
  nickName: nickName.required(),
  password: password.required(),
  phone: phone.required(),
  emailAdv: emailAdv.required(),
  smsAdv: smsAdv.required(),
});

exports.loginJoi = joi.object({
  email: email,
  password: password,
});

exports.updateUserJoi = joi.object({
  nickName: nickName.required(),
  password: password.required(),
  phone: phone.required(),
  emailAdv: emailAdv.required(),
  smsAdv: smsAdv.required(),
});
