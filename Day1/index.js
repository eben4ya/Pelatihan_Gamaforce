let prev = false;

const profileClick = () => {
  if (prev === false) {
    alert("Yakin ingin mengubah profile (y/n)?");
    //   const body = documenet.body;
    const name = document.getElementById("name");
    const jurusan = document.getElementById("jurusan");
    const desc = document.getElementById("desc");
    const button = document.getElementById("button");

    name.textContent = "Eben";
    jurusan.textContent = "TIF 22";
    desc.textContent = "lho kok berubah?";
    button.textContent = "Go Back";
    name.style.color = "red";
    jurusan.style.color = "blue";
    desc.style.color = "green";
    console.log("Profile berhasil diubah");

    prev = true;
  } else {
    alert("Yakin ingin mengembalikan profile (y/n)?");
    //   const body = documenet.body;
    const name = document.getElementById("name");
    const jurusan = document.getElementById("jurusan");
    const desc = document.getElementById("desc");
    const button = document.getElementById("button");

    name.textContent = "Benaya Imanuela";
    jurusan.textContent = "Teknologi Informasi";
    desc.textContent =
      "Lorem ipsum dolor sit amet consectetur adipisicing elit";
    button.textContent = "Ubah Profile";
    name.style.color = "black";
    jurusan.style.color = "black";
    desc.style.color = "black";
    console.log("Profile kembali seperti semua");
    prev = false;
  }
};
