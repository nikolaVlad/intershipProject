import onLogout from '../../utils/events/onLogout'

// Success response handler
export const responseSuccessHandler = response => {
    return response.data;
  };


  // Error response hadnler
  export const responseErrorHandler = error => {
    var details = ["Something went wrong, please try again!"];
    
    if (error.response) {
      if (error.response.data)
        details = error.response.data;
    }
    

    else if (error.request) {
      console.log(error.request);
    }
     
    else {
      console.log('Error', error.message);
    }
  
    // POINT : console.log(error.response.status);
    if(error.response?.status === 401)
    {
      onLogout();
    }
   

    return Promise.reject({
      status: error.response.status,
      details : details,
    });

   
  }
  