import fetch from 'isomorphic-fetch';

export const UPDATE_XSRF = 'UPDATE_XSRF';

function updateXSRF(xsrf) {
  return {
    type: UPDATE_XSRF,
    xsrf,
  };
}

export const wrapFetch = (dispatch, handler) => {
  if (handler.send) {
    handler.send();
  }

  fetch(`/api/${handler.path}`, handler.postData ? {
    method: 'post',
    credentials: 'same-origin',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(handler.postData),
  } : {
    credentials: 'same-origin',
  })
    .then((response) => response.json())
    .then((data) => {
      dispatch(updateXSRF(data.meta._xsrf));
      if (data.data) {
        try {
          handler.success(data);
        } catch (error) {
          handler.failure(error);
        }
      } else {
        handler.failure(data.errors[0].detail);
      }
    })
    .catch((error) => {
      handler.failure(error);
    });
};
