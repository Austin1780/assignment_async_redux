export const GET_BOOKS_REQUEST = "GET_BOOKS_REQUEST";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

export function getBooksRequest() {
  return {
    type: GET_BOOKS_REQUEST
  };
}

export function getBooksSuccess(data) {
  return {
    type: GET_BOOKS_SUCCESS,
    data
  };
}

export function getBooksFailure(error) {
  return {
    type: GET_BOOKS_FAILURE,
    error
  };
}

export function getBooks(formData) {
  return dispatch => {
    // Update the state so that it knows the request has begun
    dispatch(getBooksRequest());

    let { search, type } = formData;

    fetch(`/api/books?keyword=${search}&type=${type}`)
      .then(response => {
        // If response not okay, throw an error
        if (!response.ok) {
          throw new Error(`${response.status} ${response.statusText}`);
        }
        // Otherwise, extract the response into json
        return response.json();
      })
      .then(json => {
        // Dispatch success which sets the Books.
        console.log(json);
        dispatch(getBooksSuccess(json));
      })
      .catch(error => {
        // Dispatch failure which sets the error in state
        dispatch(getBooksFailure(error));
      });
  };
}
