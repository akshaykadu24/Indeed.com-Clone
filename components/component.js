function Post_navbar(){
    return `<div>
    <div id="logodiv">
      <img
        id="logo"
        src="https://www.pngkit.com/png/full/1009-10092379_indeed-logo-white-indeed-logo.png"
        alt=""
      />
      <p id="logotag">for employers</p>
    </div>
    <h2 id="postjob" class="menu">Post a job</h2>
  </div>
  <div id="lastdiv">
    <h2 class="menu">Help Center</h2>
    <button id="signinbutton">Sign in</button>
    <h2 id="findjob" class="menu">Find jobs</h2>
  </div>`
    
}
function Post_navbar2(){
  return `<div>
  <div id="logodiv">
    <img
      id="logo"
      src="https://www.pngkit.com/png/full/1009-10092379_indeed-logo-white-indeed-logo.png"
      alt=""
    />
    <p id="logotag">for employers</p>
  </div>
  <h2 id="postjob" class="menu">Post a job</h2>
</div>
<div id="lastdiv">
  <h2 class="menu">Help Center</h2>
  <button id="signinbutton">Sign Out</button>
  <h2 id="findjob" class="menu">Find jobs</h2>
</div>`
  
}
export { Post_navbar,Post_navbar2};
