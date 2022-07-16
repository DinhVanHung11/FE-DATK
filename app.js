window.addEventListener("load", function (e) {
  const loginButton = document.querySelector(".login-home");
  const signinButton = document.querySelector(".signup-home");
  function createModalLogin(){
    const template = 
    `
    <div class="modal-login-wrapper">
    <div class="modal-login">
      <h2 class="modal-login-heading">
        Welcome to II&IL<br />
        Air Quality
      </h2>
      <form action="" class="modal-login-form">
        <div class="modal-username-wrapper">
          <label for="login-username">Username:</label>
          <input
            type="text"
            placeholder="Enter your user name"
            id="login-username"
            required
          />
        </div>
        <div class="modal-password-wrapper">
          <label for="login-password">Password:</label>
          <div class="input-wrapper">
            <input
              type="password"
              placeholder="Enter your password"
              id="login-password"
              required
            />
            <i class="fas fa-eye"></i>
          </div>
        </div>
        <p class="modal-forgot-password">Forgot your password?</p>
        <button class="modal-login-button">Log in</button>
        <p class="modal-login-more">Don’t have an account? <span>Sign up</span></p>
      </form>
      <i class="fas fa-times modal-close"></i>
    </div>
    </div>
    `
    document.body.insertAdjacentHTML("beforeend", template);
  }
  
  function createModalSignin(){
    const template = 
    `
    <div class="modal-signin-wrapper">
    <div class="modal-signin">
      <h2 class="modal-signin-heading">
        Welcome to II&IL<br />
        Air Quality
      </h2>
      <form action="" class="modal-signin-form">
        <div class="modal-username-wrapper">
          <label for="signin-username">Username:</label>
          <input
            type="text"
            placeholder="Enter your user name"
            id="sigin-username"
            required
          />
        </div>
        <div class="modal-password-wrapper">
          <label for="sigin-password">Password:</label>
          <div class="input-wrapper">
            <input
              type="password"
              placeholder="Enter your password"
              id="sigin-password"
              required
            />
            <i class="fas fa-eye"></i>
          </div>
        </div>
        <button class="modal-signin-button">Sign up now</button>
      </form>
      <i class="fas fa-times modal-close"></i>
    </div>
    </div>
    `
    document.body.insertAdjacentHTML("beforeend", template);
  }

  signinButton.addEventListener("click", createModalSignin);
  loginButton.addEventListener("click",createModalLogin);
  document.body.addEventListener("click", function(e){
    if(e.target.matches(".modal-login-wrapper")){
      const modalContent = e.target.querySelector(".modal-login");
      modalContent.style = "animation: zoomIn 0.25s linear forwards";
      setTimeout(function(){
        e.target.parentNode.removeChild(e.target);
      },300);
    }else if(e.target.matches(".modal-close")){
      const modalWapper = e.target.parentNode.parentNode;
      const modalContent  = e.target.parentNode;
      modalContent.style = "animation: zoomIn 0.25s linear forwards";
      setTimeout(function(){
        modalWapper.parentNode.removeChild(modalWapper);
      },300);
    }else if(e.target.matches(".fas.fa-eye")){
      e.target.classList.toggle("fa-eye");
      e.target.classList.toggle("fa-eye-slash");
      e.target.previousElementSibling.setAttribute("type", "text");
    }else if(e.target.matches(".fas.fa-eye-slash")){
      e.target.classList.toggle("fa-eye");
      e.target.classList.toggle("fa-eye-slash");
      e.target.previousElementSibling.setAttribute("type", "password");
    }else if(e.target.matches(".modal-login-more span")){
      const modalWapper = e.target.parentNode.parentNode.parentNode.parentNode;
      modalWapper.parentNode.removeChild(modalWapper);
      createModalSignin();
    }else if(e.target.matches(".modal-signin-wrapper")){
      const modalContent = e.target.querySelector(".modal-signin");
      modalContent.style = "animation: zoomIn 0.25s linear forwards";
      setTimeout(function(){
        e.target.parentNode.removeChild(e.target);
      },300);
    }
  })


  const contentItems = document.querySelectorAll(".content-item");
  const dashboardItems = document.querySelectorAll(".dashboard-item");
  [...dashboardItems].forEach(item => item.addEventListener("click", function(e){
    // if(document.querySelector(".login-home")){
    //   return;
    // }
    [...dashboardItems].forEach(item => item.classList.remove("active"));
    e.target.classList.add("active");
    const tabNumber = e.target.dataset.tab;
    [...contentItems].forEach(item => {
      item.classList.remove("show");
      if(item.getAttribute("data-tab")===tabNumber){
        item.classList.add("show");
      }
    })
  }));
});
