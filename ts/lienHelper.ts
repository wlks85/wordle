export default class LienHelper {
  public static extraireInformation(cle: string): string | null {
    if (window.location.hash === "" || window.location.hash === "#") return null;

    let hashPart = atob(window.location.hash.substring(1)).split("/");
    console.log("Hashpart", hashPart);
    for (let infoPos in hashPart) {
      let info = hashPart[infoPos];
      console.log("Info", info);
      if (!info.includes("=")) continue;
      let infoPart = info.split("=");
      let infoKey = infoPart[0];

      if (infoKey !== cle) continue;

      return infoPart[1];
    }

    return null;
  }
}
