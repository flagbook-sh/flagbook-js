import { Config, FlagbookClient } from "./flagbook-client";

declare global {
  interface Window {
    flagbook: FlagbookClient;
  }
}

window.flagbook = new FlagbookClient({ accessToken: undefined });

export class Flagbook {
  public static init(config: Config): void {
    window.flagbook = new FlagbookClient(config);
  }

  public static getFlagValue(name: string): Promise<boolean> {
    return window.flagbook.getFlagValue(name);
  }
}
