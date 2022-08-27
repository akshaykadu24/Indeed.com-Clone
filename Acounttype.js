let but1 = document.getElementById("job_seeker");
  but1.onclick = () => {
    getdata("job_seeker");
  };

  let but2 = document.getElementById("Employed");
  but2.onclick = () => {
    localStorage.setItem("Athorised", JSON.stringify("Employed"));

    getdata("Employed");
  };

  let signinId = JSON.parse(localStorage.getItem("signinid"));
  let url = "https://pacific-refuge-88537.herokuapp.com/api/signup";
  let getdata = async (name) => {
    let res = await fetch(url);
    res = await res.json();

    updatedata(signinId, name);
  };
  let returnornot = JSON.parse(localStorage.getItem("return"));
  let updatedata = async (id, name) => {
    data = { Athorised: name };

    let res = await fetch(
      `https://pacific-refuge-88537.herokuapp.com/api/signup/${id}`,
      {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      }
    );

    if (returnornot == "return") {
      window.location.href = "setting.html";
    } else {
      window.location.href = "index.html";
    }
  };