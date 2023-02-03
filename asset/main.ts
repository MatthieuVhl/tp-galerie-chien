class dogs {
  private static _count = 0;
  private _id: number;
  constructor(
    private _firstname: string,
    private _lastname: string,
    private _Description: string,
    private _url: string
  ) {
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
  get retunDogList() {
    return `${this._id}) ${this._firstname} ${this._lastname}`;
  }
}

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
let dogsList = document.querySelector("#dogs") as HTMLDivElement;
let newpick = document.createElement("img");

const refreshDescription = () => {
  let dogDescription = document.querySelector("#description") as HTMLDivElement;

  if (selectDog) {
    let dogPick = document.querySelector("#dogs") as HTMLDivElement;
    newpick.className = "card-img-top rounded-circle";
    newpick.src = selectDog.url;
    dogDescription.innerHTML = selectDog.Description;

    dogPick.appendChild(newpick);
  } else {
    dogDescription.innerHTML = "";
  }
};

const refreshDog = () => {
  dogsList.innerHTML = "";
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
      refreshDog();
    });

    dogsList.appendChild(newButton);
  });
};

refreshDog();
refreshDescription();
