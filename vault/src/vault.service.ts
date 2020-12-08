import { Injectable } from '@nestjs/common';
import { NameSpace, Vault, vaultCreatedKey } from '@xpr/vaultier';

@Injectable()
export class VaultService {
  public storage = new Map<NameSpace, Vault>();

  status(): any {
    const status = [];
    for (const [key, value] of this.storage.entries()) {
      const created = value[vaultCreatedKey];
      const count = Object.keys(value).length - 1;
      status.push({ key, created, count });
    }
    return status;
  }

  store(ns: NameSpace, vault: Vault) {
    this.storage.set(ns, {
      ...vault,
      [vaultCreatedKey]: Date.now().toString(),
    });
    return true;
  }

  fetch(ns: NameSpace): Vault {
    if (!this.storage.has(ns)) {
      this.store(ns, {});
    }
    return this.storage.get(ns);
  }

  flush(ns: NameSpace) {
    this.storage.delete(ns);
    return true;
  }

  flushAll() {
    this.storage = new Map<NameSpace, Vault>();
  }
}
