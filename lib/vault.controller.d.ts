import { VaultService } from './vault.service';
import { NameSpace, Vault } from '@xpr/vaultier';
export declare class VaultController {
    private service;
    constructor(service: VaultService);
    status(): any;
    fetch(ns: NameSpace): Record<string, string>;
    store(ns: NameSpace, vault: Vault): boolean;
    flush(ns: NameSpace): boolean;
}
