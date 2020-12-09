import { NameSpace, Vault } from '@xpr/vaultier';
export declare class VaultService {
    storage: Map<string, Record<string, string>>;
    status(): any;
    store(ns: NameSpace, vault: Vault): boolean;
    fetch(ns: NameSpace): Vault;
    flush(ns: NameSpace): boolean;
    flushAll(): void;
}
