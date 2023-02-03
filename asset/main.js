class dogs {
  constructor(_firstname, _lastname, _Description) {
    this._firstname = _firstname;
    this._lastname = _lastname;
    this._Description = _Description;
    this._url = this._url;
    this._id = ++dogs._count;
  }
  get id() {
    return this._id;
  }
  get firstname() {
    return this._firstname;
  }
  get Lastname() {
    return this.Lastname;
  }
  get Description() {
    return this._Description;
  }
  get url() {
    return this._url;
  }

  get retunDogsList() {
    return `${this._id}) ${this._firstname} ${this._lastname}`;
  }
}
dog._count = 0;

let dogsTableau = [
  new dogs(
    "rex",
    "Le calineux",
    "vous aimez les calins ? il est pour vous !!!",
    "C:Users\boungOneDriveBureau\tp-photo-galerieassetimg\troubles-voisinage-chien-full-8910342.webp"
  ),
  new dogs(
    "bobby",
    "le fou ",
    "adore jouer tous la journée sans s'arreter !!!!! ",
    "C:Users\boungOneDriveBureau\tp-photo-galerieassetimga5c03c18-dbad-4bc9-8eb1-58d75b3cb4a9.jpg"
  ),
];
let selectDog = dogsTableau[0];
let dogsList = document.querySelector("#dogs");
let newpick = document.createElement("img");
const refreshDescription = () => {
  let dogDescription = document.querySelector("#description");
  if (selectDog) {
    let dogPick = document.querySelector("#dogs");
    newpick.className = "card-img-top rounded-circle";

    dogDescription.innerHTML = selectDog.Description;
    dogPick.appendChild(newpick);
  } else {
    dogDescription.innerHTML = "";
  }
};
const refreshDog = () => {
  myDivFishList.innerHTML = "";
  dogsTableau.forEach((dog) => {
    let newButton = document.createElement("button");
    newButton.textContent = dog.dogsList;
    newButton.className =
      dog === selectDog
        ? "btn btn-outline-primary m-1"
        : "btn btn-outline-primary m-1";
    newButton.id = `selectDogs-${dog.id}`;
    newButton.addEventListener("click", () => {
      selectDog = dog;
      refreshDescription();
      refreshDogs();
    });
    dogsList.appendChild(newButton);
  });
};
refreshDog();
refreshDescription();
