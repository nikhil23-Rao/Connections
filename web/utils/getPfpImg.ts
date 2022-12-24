export const getPfpImg = (setPfpImg: (arg: string) => void) => {
  if (localStorage.getItem("pfpImg")) {
    setPfpImg(localStorage.getItem("pfpImg")!);
  } else {
    let seed = Math.random();
    setPfpImg(seed.toString());
    localStorage.setItem("pfpImg", seed.toString());
  }
};
