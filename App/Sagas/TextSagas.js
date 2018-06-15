import { call, put } from 'redux-saga/effects'
import TextActions from '../Redux/TextRedux'
// import { TextSelectors } from '../Redux/TextRedux'

export function * getText (api) {
  //const { data } = action
  // make the call to the api
  const response = yield call(api.getRate)

  // success?
  if (response.ok) {
    // You might need to change the response here - do this with a 'transform',
    // located in ../Transforms/. Otherwise, just pass the data back from the api.
    yield put(TextActions.textSuccess(response.data))
  } else {
    yield put(TextActions.textFailure())
  }
}
