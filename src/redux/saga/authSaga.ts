import { REDUX_NAME } from "@/src/helpers/reduxConstants";
import { call, put, takeLatest } from "redux-saga/effects";
import { EmailPasswordApi } from "../api/loginApi";

interface EmailPasswordAction {
  type: string;
  payload: { email: string; password: string };
}

function* EmailPasswordLogin(
  action: EmailPasswordAction
): Generator<any, void, any> {
    console.log('asjd',action)
  try {
    const response = yield call(EmailPasswordApi, action.payload);
    console.log(response, "data for email password");
  } catch (error) {
    console.log("get error is ", error);
  }
}

export function* authSaga() {
  yield takeLatest(REDUX_NAME.SET_EMAIL_PASSWORD_LOGIN, EmailPasswordLogin);
}
